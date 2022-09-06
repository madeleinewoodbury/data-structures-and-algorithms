// recursive apporach
const breadthFirstTraverseRecursive = (queue, array) => {
  if (!queue.length) return array;

  const node = queue.shift();
  array.push(node.value);

  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);

  return breadthFirstTraverseRecursive(queue, array);
};

// Iterative approach
const breadthFirstTraverseIterative = (queue, array) => {
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return array;
};

const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: {
        value: 'G',
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 'E',
      left: null,
      right: {
        value: 'H',
        left: {
          value: 'K',
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: {
        value: 'I',
        left: null,
        right: null,
      },
      right: {
        value: 'J',
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

let start = performance.now();
const recursiveArray = breadthFirstTraverseRecursive([tree], []);
let elapsed1 = performance.now() - start;

start = performance.now();
const iterativeArray = breadthFirstTraverseIterative([tree], []);
let elapsed2 = performance.now() - start;

console.log(`Recursive approach: ${elapsed1}`);
console.log(recursiveArray);
console.log(`Iterative approach: ${elapsed2}`);
console.log(iterativeArray);
