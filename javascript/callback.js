//Snytax for callbacks

//This function uses another function
//to transfrom an array

const map = function(array, transfrom){
  const copy = [];

  for (const element of array) {
    copy.push(transfrom(element));
  }

  return copy;
};

//This function can be used a sthe transfrom
const square = function(x){
  return x ** 2;
};

const numbers = [1, 2, 3, 4, 5];

consle.log(map(numbers, square));
consle.log(numbers);


//Defining other transfroms with arrow function

console.log(map(numbers, x=>x**2));
