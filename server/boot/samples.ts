import * as bakery from 'loopback-bakery';
var logger = require('debug')('loopback-material-demo:samples');

module.exports = async(server: any) => {
  var userRecipe = bakery.Recipe(server.models.User);
  var admin = {email: 'admin@loopback.test', password: 'admin'};
  logger(`Creating user '${JSON.stringify(admin)}'`);
  let adminUser = await userRecipe(admin);
}