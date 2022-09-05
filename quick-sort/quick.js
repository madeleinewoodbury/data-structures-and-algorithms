const quickSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  const pivot = nums.pop(); // the last element of the array is the pivot
  const smaller = [];
  const larger = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] < pivot ? smaller.push(nums[i]) : larger.push(nums[i]);
  }

  // call quick sort on smaller and larger
  // concat all into one big array with pivot in the middle
  return [...quickSort(smaller), pivot, ...quickSort(larger)];
};

const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
const answer = quickSort(input);

console.log(`Unsorted: ${input}`);
console.log(`Sorted: ${answer}`);
