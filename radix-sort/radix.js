function getDigit(number, place) {
  let strNumber = number.toString();
  let idx = strNumber.length - 1 - place;

  return idx < 0 ? 0 : Number(strNumber[idx]);
}

function getLongestNumber(array) {
  let longestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > longestNumber) {
      longestNumber = array[i];
    }
  }

  return longestNumber.toString().length;
}

function radixSort(array) {
  const longestNumber = getLongestNumber(array);

  // an array of 10 arrays
  const buckets = new Array(10).fill().map(() => []);

  // for loop for how many iterations you need to do
  for (let place = 0; place < longestNumber; place++) {
    while (array.length) {
      // enqueue the numbers into their buckets
      const current = array.shift();
      buckets[getDigit(current, place)].push(current);
    }

    // for loop for each bucket
    for (let i = 0; i < buckets.length; i++) {
      // dequeue all of the results
      while (buckets[i].length) {
        array.push(buckets[i].splice(0, 1));
      }
    }
  }
}

const nums = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633,
];

console.log(`Unsorted: ${nums}`);
let start = performance.now();
radixSort(nums);
let end = performance.now() - start;
console.log(`Sorted: ${nums}`);
console.log(`Time: ${end}`);

// const fill = 99;
// const randomNums = new Array(fill)
//   .fill()
//   .map(() => Math.floor(Math.random() * 500000));
// const ans = radixSort(nums);

// console.log(`\nUnsorted random: ${randomNums}`);
// radixSort(randomNums);
// console.log(`Sorted random: ${randomNums}`);
