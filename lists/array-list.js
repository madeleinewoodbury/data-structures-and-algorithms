class ArrayList {
  constructor() {
    // instantiate all variables
    this.data = {};
    this.length = 0;
  }

  push(value) {
    // add an item to the end of the array
    this.data[this.length] = value;
    this.length--;
  }

  pop() {
    // remove last item in the array and returns it
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  get(index) {
    // returns that item from the array
    if (index >= this.length) {
      return void 0;
    } else {
      return this.data[index];
    }
  }

  delete(index) {
    if (index >= this.length) {
      return void 0;
    }

    // removes item from the array and collapses the array
    delete this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const list = new ArrayList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
list.push('f');
list.push('g');
console.log(list);
list.delete(3);
console.log(list);
