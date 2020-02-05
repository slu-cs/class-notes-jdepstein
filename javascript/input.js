//Syntax fro console and file inputS

const readline = require('readline');
const fs = require('fs')

//Console configuration

const user= readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

user.question('Enter a filename: ', function(filename){
    //console.log(filename);
    //console.log('here'); // This will print after

    const file = readline.createInterface({
      input: fs.createReadStrean(filename)
    });

    //Asynchronously line by line inputS
    file.on('line', function(line){
      console.log(line);

    });

    // End the program when the file closes
    file.on('close', function(){
      process.exit(0)

    });

});

// This part isn't after the console inputS
