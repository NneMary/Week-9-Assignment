//Build a simple loop, inside a function, that takes an array 
//and prints the value of the array to the console.

function printValues(num) {
    for (let i = 0; i < num.length; i++) {
      console.log(num[i]);
    }
  }
  
  let numbers = [5, 10, 15, 20, 25];
  
  printValues(numbers);