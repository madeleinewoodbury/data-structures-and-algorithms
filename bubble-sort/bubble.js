function bubbleSort(nums) {
  let highestIdx = null;

  while (true) {
    let swaps = 0;
    let length = highestIdx || nums.length - 1;

    for (let i = 0; i < length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swaps += 1;
        highestIdx = i + 1;
      }
    }
    if (swaps === 0) break;
  }
  return nums;
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(`Unsorted: ${nums}`);

let start = performance.now();
const sortedNums = bubbleSort(nums);
let elapsed = performance.now() - start;

console.log(`Sorted: ${sortedNums}\nTime: ${elapsed}`);
