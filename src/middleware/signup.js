'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    const body = req.body;

    // getthe user service and `create` a new user
    app.service('users').create({
    	email: body.email,
    	password: body.password
    })
    // then redirect to the login page
    .then(user => res.redirect('/login.html'))
    // on errors, just call our error middleware
    .catch(next);
  };
};
