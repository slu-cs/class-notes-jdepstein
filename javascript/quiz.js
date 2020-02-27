// Name: Joshua Epstein


//////////////////////////////////////////////////////////////// Question 1
/*
const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

// A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
labs.map(x => x.seats);

// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
labs.filter(x => x.seats > 10);

// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
labs.sort((x,y)=> y.seats - x.seats);

//////////////////////////////////////////////////////////////// Question 2

const numbers = [5, 4, 3, 2, 1];

// A. Get the first even number (by invoking the built-in find method).
numbers.find(x=> x%2 === 0);

// B. Define a standalone find function. The array is its first argument and the callback is its second argument.
const find = function(arr, condtition){
  for (const item of arr){
    if (condtition(item)){
      return item;}}


    return udefined;
  }
}
*/
//////////////////////////////////////////////////////////////// Question 3

// This creates the user object described on the quiz.
// It has a question method you can call in part A.
const readline = require('readline');
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A. Make small talk, using traditional callbacks.
const rep1 = function(rep){
  return ("Hello " + rep);
  }

const rep2 = function(rep){
  return ("I am also " + rep);}

/*
  user.question("What is your Name?", rep1, function(error) {
    if (error) console.error(error.stack);

    user.question("How are you doing?", rep2, function(error) {
      if (error) console.error(error.stack);

    });
  });
*/
// The user.question method doesn't actually return a promise, so here is a question function that does.
// Call this question function in part B instead of calling the user.question method.
const question = function(prompt) {
  return new Promise(resolve => user.question(prompt, resolve));
};


// B. Make small talk again, using promises.

question("What your name")
  .then(function(rep1){
      console.log(rep1);
      return question("How Are you doing") })

      .then(rep2 => console.log(r2))
      .catch(error => console.error(error.stack));






//////////////////////////////////////////////////////////////// Question 4
// Question 4 is commented out because otherwise it would interfere with Question 3.
// When you're ready to work on Question 4, uncomment it and comment out Question 3.
/*
// This function returns a promise, which produces 42 after an asynchronous delay of one second.
const f1 = function() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
};

// This function returns a promise, which produces 24 after an asynchronous delay of one second.
const f2 = function() {
  return new Promise(resolve => setTimeout(() => resolve(24), 1000));
};

// Run f1 and f2 in parallel and log 'f1', 'f2', or 'equal' to indicate which function returned the larger result.


*/
