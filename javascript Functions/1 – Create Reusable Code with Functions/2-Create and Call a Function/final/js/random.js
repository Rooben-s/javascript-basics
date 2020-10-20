// function getRandomNumber() {
//   const randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   return randomNumber;
// }

// getRandomNumber();


function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(20));



// An Argument is a value that you pass to a function when you call the function


// A Parameter is a variable in which the function stores information passed to it .