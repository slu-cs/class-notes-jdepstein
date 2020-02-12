
// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

/*// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors) {
  if (error) console.error(error.stack);
  console.log(professors);
});*/

const queries = [
  //What are the name sin alphabetical order?
  Professor.find().sort('name'),

  //Who started most recently
  Professor.find().sort('-started').limit(1),

  //who started in 2003
  Professor.find().where('started').equals(2003),

  //who teaches 362
  Professor.find().where('courses').in(362),

  Professor.distinct('rank')


];
