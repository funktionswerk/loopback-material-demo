import * as bakery from 'loopback-bakery';
var logger = require('debug')('loopback-material-demo:samples');
bakery.withLogging(logger);

module.exports = async(server: any) => {
  var adminUserRecipe = bakery.UserRecipe(server.models.User).withRole('admin', server.models.Role);
  var admin = {email: 'admin@loopback.test', password: 'admin'};
  let adminUser = await adminUserRecipe(admin);
}