/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      const parent = this._find(value);
      parent.add(value);
    }
  }

  _find(value) {
    let current = this.root;
    let prev = null;

    while (current !== null) {
      prev = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return prev;
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(child) {
    if (child < this.value) {
      this.left = new Node(child);
    } else {
      this.right = new Node(child);
    }
  }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map((num) => tree.add(num));
