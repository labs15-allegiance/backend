// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
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
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      database: process.env.DB_LOCAL,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD
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

  production: {
    client: "postgresql",
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
