/*
 * Login Route
 * https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
 *
 * param: app
 */
module.exports = function(app) {
  var _Login = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(app);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
    console.log(server_prefix + " - Routes login required.");
    var express = require('express'),
        redirect = require('express-redirect'),
        bodyParser = require('body-parser'),
        passport = require('passport');
    //_Login.router = require('../routers/login.js');
    // routes starting with '/login'
    app.all('/', function(req, res, next) {
        console.log(server_prefix + " - Login all");
        // process all, runs each time
        next();
    });
    app.get('/login', function(req, res, next) {
        console.log(server_prefix + " - Login get");
        // process the get (e.g. render)
        if(req.user) {
            // already logged in
            console.log(server_prefix + " - User already logged in");
            console.log(server_prefix + " - Redirect to photosharing");
            res.redirect('/?app=photosharing'); // TODO make dynamic
        } else {
            // not logged in, show the login form, remember to pass the message
            // for displaying when error happens
            console.log(server_prefix + " - Login requested");
            var app = 'login'; // default
            if(typeof configs.lang === 'undefined'){
                var lang = 'en';
            }
            else {
                var lang = configs.lang;
            }
            if(typeof configs.title === 'undefined'){
                var title = 'Untitled';
            }
            else {
                var title = configs.title;
            }
            if(typeof configs.description === 'undefined'){
                var description = 'undefined';
            }
            else {
                var description = configs.description;
            }
            if(typeof configs.keywords === 'undefined'){
                var keywords = 'undefined';
            }
            else {
                var keywords = configs.keywords;
            }
            if(typeof configs.author === 'undefined'){
                var author = 'undefined';
            }
            else {
                var author = configs.author;
            }
            res.render('pages/login', { lang: lang, title: title, description: description, keywords: keywords, author: author, message: req.session.messages, layout: false });
            // and then remember to clear the message
            req.session.messages = null;
        }
    });
    app.put('/login', function(req, res, next) {
         console.log(server_prefix + " - Login put");
         // process the put (e.g. update)
         next();
    });
    app.post('/login', function(req, res, next) {
        console.log(server_prefix + " - Login post");
        // process the post (e.g. insert)
        // ask passport to authenticate
        passport.authenticate('local', function(err, username, info) {
            if (err) {
                console.log(server_prefix + " - Login, error: " + err);
                // if error happens
                return next(err);
            }
            if (!username) {
                // if authentication fail, get the error message that we set
                // from previous (info.message) step, assign it into to
                // req.session and redirect to the login page again to display
                console.log(server_prefix + " - Login, message: " + info.message);
                req.session.messages = req.i18n.__(info.message);
                return res.redirect('/login');
            }
            // if everything is OK
            req.logIn(username, function(err) {
                if (err) {
                    console.log(server_prefix + " - Login, error: " + err);
                    req.session.messages = req.i18n.__("Error");
                    return next(err);
                }
                // set the message
                console.log(server_prefix + " - Login successful, redirecting ...");
                req.session.messages = req.i18n.__("Login successfully.");
                return res.redirect('/?app=photosharing'); // TODO make dynamic
            });
        })(req, res, next);
    });
    app.delete('/login', function(req, res, next) {
        console.log(server_prefix + " - Login delete");
        // process the delete (e.g. delete)
        next();
    });
    return _Login;
};
