/*
 * Route
 * https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
 */
module.exports = function(app) {
    var _Route = {};
    config = require('../configurations/server.js');
    var configs = config.configs,
        server_prefix = configs.server_prefix || 'PREFIX';
    console.log(server_prefix + " - Routes route required.");
    _Route.index = require('./index.js')(app);
    _Route.login = require('./login.js')(app);
    _Route.logout = require('./logout.js')(app);
    return _Route;
};
