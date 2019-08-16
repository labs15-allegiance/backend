// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "allegiance",
      user: "user",
      password: "pass"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "allegiance"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  testing: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "test",
      user: "user",
      password: "pass"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "allegiance"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: "allegiance",
      user: "user",
      password: "pass"
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "allegiance"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      database: "allegiance",
      user: "user",
      password: "pass"
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "allegiance"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
