//Syntax fro console and file inputS

const readline = require('readline');

//Console configuration

const user= readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

user.question('Enter a filename: ', function(filename){
    console.log(filename);
});

// This part isn't after the console inputS

console.log('here');
