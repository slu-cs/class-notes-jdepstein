// Router for cake realated reuqest
const express = require('express');

//create the Router

const router = express.Router();

//http://cs-linuxlab-32.stlawu.edu:3000/pies/
router.get('/', function(request, response){
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li> <a href="/pies/apple">Apple</a></li>
      <li> <a href="/pies/cherry">Cherry</a></li>
    </ul>
    `)


});

//http://cs-linuxlab-32.stlawu.edu:3000/cakes/id

router.get('/:id', function(request, response, next){
  if (request.params.id === 'apple'){
    response.send('Apple Pie')
  }
  else if (request.params.id === 'cherry'){
    response.send('Cherru Pie')
  }
  else {
    next();// pass on this request
  }



});

module.export = router;
