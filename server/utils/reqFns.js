const jwt = require('jsonwebtoken');
const nanoid = require('nanoid');

function getTokenFromAuthHeader(reqHeaders) {
  if(reqHeaders.authorization){
    // the format of the authorization header is
    // Authorization: Bearer <token>
    // so splitting the value on space, should give us the token
    return reqHeaders.authorization.split(' ')[1];
  }
  return null;
}

function makeNewLoginToken(customClaimsObj, secret, expiryWindowInMinutes = 3) {
  // issued at and expires at time in UNIX seconds
  const now = new Date();
  const issuedAt = now.getTime() / 1000;
  now.setMinutes(now.getMinutes() + expiryWindowInMinutes);
  const expiresAt = now.getTime() / 1000;
  // spread all the custom claims, and add in some registered claims
  let claims = {
    ...customClaimsObj,
    iat: issuedAt,
    exp: expiresAt,
    jti: nanoid()
  }
  // making the JWT
  const token = jwt.sign(claims, secret);
  // sending it back to the caller
  return { token: token, expDate: now };
}

module.exports = {
  getTokenFromAuthHeader,
  makeNewLoginToken
}