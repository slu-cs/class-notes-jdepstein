const readline = require('readline');
const fs = require('fs')



const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);

const filter = function(ary mod){
  const copy = []
  for (const ar of ary){
    if (ar % mod > 0)
    copy.concat(ar)
  }
}
