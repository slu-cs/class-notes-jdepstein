// Define a plan for a collection

const mongoose = require('mongoose');

//Schema for a collection of professors

const Professor = new mongoose.Schema({
  name:String,
  rank:String,
  started:Number,
  courses:[Number]
});

//Speed up queries on all the feilds

Professors.index({name: 1});
Professors.index({rank: 1});
Professors.index({started: 1});
Professors.index({courses: 1});

//Compile and export this Schema

module.exports = mongoose.model('Professor', Professor);
