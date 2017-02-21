
// 1. Two array if name and age, log a greeting for each of them like:
// Hi {Name}, you are {age}
var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(a, b) {
  console.log( 'Hi ' + a + ', you are ' + b );
}
greeting(...person);
greeting(...personTwo);

console.log('===========');

// 2. One array with two names, declare anther array with your name using the spread operator if previous array with names.
// use for each for greet each one
var names = ['Mike', 'Ben'];
var final = [...names, 'João'];

for (var i = 0; i < final.length; i++) {
  console.log( 'Hello there, ' + final[i] );
}
