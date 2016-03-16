/*
 * Logout Route
 * https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
 *
 * param: app
 */
module.exports = function(app) {
  var _Logout = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(app);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
    console.log(server_prefix + " - Routes logout required.");
    var express = require('express'),
        redirect = require('express-redirect'),
        bodyParser = require('body-parser'),
        passport = require('passport');
    //_Logout.router = require('../routers/logout.js');
    // routes starting with '/logout'
    app.all('/logout', function(req, res, next) {
        console.log(server_prefix + " - Logout all");
        // process all, runs each time
        next();
    });
    app.all('/logout', function(req, res, next) {
        console.log(server_prefix + " - Logout all");
        console.log(server_prefix + " - Logout all req.method = " + req.method);
        // process all, runs each time
        next();
    });
    app.get('/logout', function(req, res, next) {
        console.log(server_prefix + " - Logout get");
        if(req.isAuthenticated()) {
            req.logout();
            req.session.messages = req.i18n.__("Logged out successfully.");
        }
        res.redirect('/login'); // TODO Choose what page to go to
    });
    app.put('/logout', function(req, res, next) {
        console.log(server_prefix + " - Logout put");
        // process the put (e.g. update)
        next();
    });
    app.post('/logout', function(req, res, next) {
        console.log(server_prefix + " - Logout post");
        // process the post (e.g. insert)
        next();
    });
    app.delete('/logout', function(req, res, next) {
        console.log(server_prefix + " - Logout delete");
        // process the delete (e.g. delete)
        next();
    });
    return _Logout;
};
