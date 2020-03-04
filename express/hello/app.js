// Hello World Web Sever
const express = require('express');

// Creates the sever
const app = express();

// http://cs-linuxlab-32.stlawu.edu:3000/
app.get('/', function(request, response){
  response.send('Hello Josh');
  });

//http://cs-linuxlab-32.stlawu.edu:3000/foo
app.get('/foo', function(request, response){
  response.send('Hello foo');
  });

//http://cs-linuxlab-32.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response){
  response.send('Hello bar');
  });

//http://cs-linuxlab-32.stlawu.edu:3000/zap/z     (for any z)
app.get('/zap/:z', function(request, response){
  response.send(`Hello ${request.params.z}`);
  });

//http://cs-linuxlab-32.stlawu.edu:3000/zap?x=&y=
app.get('/zap', function(request, response){
  response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
  });


// Starts the server
app.listen(3000);
console.log('Server is ready');
