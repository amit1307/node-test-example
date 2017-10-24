/**
 * Created by garga9 on 24/10/2017.
 */
var db = require('./db');

module.exports.handleSignup = (email, password) => {
  //check if the email already exists
  db.saveUser({
      email,
      password
  });
  //send welcome email
};