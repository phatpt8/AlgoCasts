// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.s = [];
  }
  push(e) {
    this.s.push(e);
    return this.s;
  }
  pop() {
    return this.s.pop();
  }
  peek() {
    if (this.s.length === 0) return null;
    return this.s[this.s.length - 1];
  }
}

module.exports = Stack;
