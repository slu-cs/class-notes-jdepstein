
f("hello"){
    .then(result =>console.log(result))
    .catch(error => console.error(error.stack))


q1.exec(function(error, r1){
  if (error) console.log(error.stack);
  console.log(r1);

  q2.exec(function(error, r2){
    if (error) console.log(error.stack);
    console.log(r2);

  });
});

q1.exec()
  .then(function(r1)){
    console.log(r1);
    return q2.exec();
  })
  .then(r2 => console.log(r2))
  .catch(error => console.log(error.stack));


const saves = documents.map(d => d.save());
Promise.all(saves)
  .then(() => console.log('All saved'))
  .catch(error => console.log(error.stack));
