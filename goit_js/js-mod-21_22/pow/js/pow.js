'use strict';

function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log( pow(-4, -4) );


module.exports = pow;
