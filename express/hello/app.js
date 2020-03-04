// Hello World Web Sever
const express = require('express');

// Creates the sever
const app = express();

//Respond to one reuqest
app.get('/', function(request, response){
  response.send('Hello Josh');
  });

// Starts the server
app.listen(3000);
console.log('Server is ready');
