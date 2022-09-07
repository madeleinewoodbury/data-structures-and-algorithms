/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place 
  (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  array = createMaxHeap(array);

  // loop through the array backwards
  for (let i = array.length - 1; i > 0; i--) {
    swapPlace(0, i, array); // swap the first and last element in the array
    heapify(array, 0, i);
  }
};

const createMaxHeap = (array) => {
  // heapify on the first half of the array, going backwards
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }

  return array;
};

const swapPlace = (index1, index2, array) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const heapify = (array, index, heapSize) => {
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;
  let largestValueIndex = index;

  if (heapSize > leftIndex && array[largestValueIndex] < array[leftIndex]) {
    largestValueIndex = leftIndex;
  }

  if (heapSize > rightIndex && array[largestValueIndex] < array[rightIndex]) {
    largestValueIndex = rightIndex;
  }

  if (largestValueIndex !== index) {
    swapPlace(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};

const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
console.log(`Unsorted: ${nums}`);
heapSort(nums);
console.log(`Sorted: ${nums}`);
