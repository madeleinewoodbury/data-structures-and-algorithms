const preorderTraverse = (node, array) => {
  if (!node) return array;
  if (node.root) {
    node = node.root;
  }
  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);

  return array;
};

const inorderTraverse = (node, array) => {
  if (!node) return array;
  if (node.root) {
    node = node.root;
  }

  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);

  return array;
};

const postorderTraverse = (node, array) => {
  if (!node) return array;
  if (node.root) {
    node = node.root;
  }

  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);

  return array;
};

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
};

const preorderArray = preorderTraverse(tree, []);
const inorderArray = inorderTraverse(tree, []);
const postorderArray = postorderTraverse(tree, []);
console.log(`Preorder: ${preorderArray}`);
console.log(`Inorder: ${inorderArray}`);
console.log(`Postorder: ${postorderArray}`);
