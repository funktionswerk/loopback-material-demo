import * as bakery from 'loopback-bakery';
var faker = require('faker/locale/de');
var logger = require('debug')('loopback-material-demo:samples');
bakery.withLogging(logger);

module.exports = async(server: any) => {
  let adminUserRecipe = bakery.UserRecipe(server.models.User).withRole('admin', server.models.Role);
  let admin = {email: 'admin@loopback.test', password: 'admin'};
  let adminUser = await adminUserRecipe(admin);

  let pairRecipe = bakery.Recipe(server.models.Pair, {
    title: faker.lorem.words,
    description: faker.lorem.sentence
  });
  //TODO: Allow quantity when creating sample records
  let numberOfPairsToBuild = 15;
  while(numberOfPairsToBuild > 0) {
    --numberOfPairsToBuild;
    await pairRecipe();
  }
}