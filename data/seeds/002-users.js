const faker = require("faker");

const createFakeUser = () => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  location: faker.address.zipCode(),
  first_name: faker.name.firstName(), 
  last_name: faker.name.lastName(),
  bio: faker.lorem.sentences()


})
exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
        // Inserts seed entries
      const fakeUsers = [];
      const count = 500;
      for(let i =0; i< count; i++){
        fakeUsers.push(createFakeUser());
      }
      await knex('users')
      .insert(fakeUsers);
  
};
