/*
 * Routes
 * https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
 *
 * param: app
 */
module.exports = function(app) {
  var _Routes = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(app);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Routes routes required.");
  _Routes.index = require('./index.js')(app);
  _Routes.login = require('./login.js')(app);
  _Routes.logout = require('./logout.js')(app);
  return _Routes;
};
