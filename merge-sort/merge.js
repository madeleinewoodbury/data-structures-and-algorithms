// merges to arrays into a sorted array
const merge = (left, right) => {
  const mergedArr = [];

  while (left.length && right.length) {
    left[0] < right[0]
      ? mergedArr.push(left.shift())
      : mergedArr.push(right.shift());
  }

  // either left or right will be empty, so we can sefely concat them
  return mergedArr.concat(left, right);
};

const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, arr.length / 2);
  const right = arr;

  return merge(mergeSort(left), mergeSort(right));
};

const arr = mergeSort([1, 5, 7, 4, 2, 3, 6]);
console.log(`Sorted array: ${arr}`);

const randomArr = mergeSort(
  Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
);

console.log(`Random arr: ${randomArr}`);
