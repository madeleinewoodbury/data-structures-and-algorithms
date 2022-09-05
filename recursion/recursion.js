function fibonacci(n) {
  // base case
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }

  // recursive calls
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciSequence = [];

// Get the first 15 fibonacci numbers
for (let i = 0; i < 15; i++) {
  fibonacciSequence[i] = fibonacci(i);
}

console.log(`Fibonacci sequence: ${fibonacciSequence}`); // 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377

// Exercise 1
// Unpacking arrays
function nestedAdd(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += nestedAdd(array[i]);
    } else {
      total += array[i];
    }
  }

  return total;
}

const arr1 = [1, 2, 3];
const arr2 = [1, [2], 3];
const arr3 = [[[[[[[[[5]]]]]]]]];
const arr4 = [10, [12, 14, [1], [16, [20]]], 10, 11];

console.log(`arr1 = ${nestedAdd(arr1)}`); // 6
console.log(`arr2 = ${nestedAdd(arr2)}`); // 6
console.log(`arr3 = ${nestedAdd(arr3)}`); // 5
console.log(`arr4 = ${nestedAdd(arr4)}`); // 94

// Exercise 2
// Factorial

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(`1! = ${factorial(1)}`); // 1
console.log(`2! = ${factorial(2)}`); // 2
console.log(`3! = ${factorial(3)}`); // 6
console.log(`10! = ${factorial(10)}`); // 3628800
