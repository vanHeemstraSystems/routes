/*
 * Services route
 *
 * param: app 
 */
var config = require('../configurations/server.js');
var configs = config.configs,
    server_prefix = configs.server_prefix || 'PREFIX';
console.log(server_prefix + " - Services route required.");
/*
 * GET service(s).
 */
 exports.findAll = function(req,res) {
 	   res.send([{name: 'read'}]);
 }
