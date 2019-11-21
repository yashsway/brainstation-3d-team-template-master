const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nanoid = require('nanoid');
// custom module
const reqFns = require('./utils/reqFns.js');
// some other constants
const users = {}; // Fake DB for demo purposes.
const serverPort = 8080;
const secretKey = nanoid(); // NOTE: this is for demo purposes only. set it to a string of your choosing if you want!

// init new express app
const app = express();
// load middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// custom auth middleware
app.use((req, res, next) => {
  // public routes that don't need authorization
  if (req.url === '/signup' || req.url === '/login' || req.url === '/ping') {
    next();
  } else {
    // protect routes that NEED authorization
    const authHeader = req.headers.authorization; // Bearer <token goes here>
    // Authorization: Bearer <token goes here>
    const givenToken = reqFns.getTokenFromAuthHeader(req.headers);
    // ['Bearer', '<your token here>']
    console.log('extracted token: ', givenToken);
    console.log('decoded token: ', jwt.decode(givenToken));

    if (givenToken) {
      // verify the token
      const decodedToken = jwt.verify(givenToken, secretKey);

      if (decodedToken) {
        // make a custom property on the request, and attach the token
        req.decodedToken = decodedToken;
        // pass off control
        next();
      } else {
        // if not authorized, send a response back
        res.status(403).json({
          error: 'Not authorized'
        });
      }
    } else {
      res.status(403).json({
        error: 'No token provided. Not authorized'
      });
    }
  }
});

// --- Open Routes ---
app.get("/ping", (req, res) => {
  res.json({ alive: true, serverTimeUnix: new Date().getTime() / 1000 });
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body; // { username: '', password: '' }
  // set the user in our (fake) database
  users[username] = {
    username,
    password
  };
  // TEST: 
  console.log('Users: ', users);

  // make a token
  const tokenObj = reqFns.makeNewLoginToken({ username: username }, secretKey, 3);

  // send a flag and the token back to the user with a 201 status
  res.status(201).json({ success: true, token: tokenObj.token });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body; // { username: '', password: '' }
  // find the user
  const foundUser = users[username];

  // TEST:
  console.log('Users: ', users, 'Found: ', foundUser);

  // compare the username and password with our database
  if (foundUser && foundUser.password === password) {
    // make a token
    const tokenObj = reqFns.makeNewLoginToken({ username: username }, secretKey, 3);

    // login successful! send the user a token
    res.status(201).json({ success: true, token: tokenObj.token });
  } else {
    // this is not a valid user!
    res.status(401).json({
      error: { message: 'Invalid username or password. '}
    });
  }

});


// --- Protected Routes ---
app.get('/vault', (req, res) => {
  const secData = ['secure thing 1', 'secure thing 2', 'secure thing 3'];

  res.json({
    vaultEntries: secData.map(d => {
      return { id: nanoid(), data: d };
    })
  });
});

// attach the server to a port so it can listen for requests
app.listen(serverPort, () => {
  console.log('server is running on port ', serverPort);
});