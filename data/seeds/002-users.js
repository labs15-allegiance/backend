const faker = require("faker");

const createFakeUser = () => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  location: faker.address.zipCode(),


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
