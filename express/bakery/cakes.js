// Router for cake realated reuqest
const express = require('express');

//create the Router

const router = express.Router();

//http://cs-linuxlab-32.stlawu.edu:3000/cakes/
router.get('/', function(request, response){
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li> <a href="/cakes/vanilla">Vanilla</a></li>
      <li> <a href="/cakes/chocolate">Chocolate</a></li>
    </ul>
    `)


});

//http://cs-linuxlab-32.stlawu.edu:3000/cakes/id

router.get('/:id', function(request, response, next){
  if (request.params.id === 'vanilla'){
    response.send('Vanilla Cakes')
  }
  else if (request.params.id === 'chocolate'){
    response.send('Chocolate Cakes')
  }
  else {
    next();// pass on this request
  }



});

module.export = router;
