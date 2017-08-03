const pgp = require('pg-promise')();

// Object destructure
const {DATABASE, USER, PASSWORD} = require('../config/config.json');

const connectionOptions = {
  host: 'localhost',
  port: 5432,
  database: CONFIG.DATABASE,
  user: CONFIG.USER,
  password: CONFIG.PASSWORD
};

const db = pgp(connectionOptions);

module.exports = {

};