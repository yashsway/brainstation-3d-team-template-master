'use strict';
const app = require('./server.js');
const serverPort = 8080;

// attach the server to a port so it can listen for requests
app.listen(serverPort, () => {
  console.log('server is running on port ', serverPort);
});