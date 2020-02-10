
// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

//What documents are in the collection?
const query = Professor.find();
query.exec(function erro, professors){
  if (error) conesole.error(error.stack);
  console.log(professors);
});
