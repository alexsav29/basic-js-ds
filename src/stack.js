const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this._arr = [];
  }

  push(value) {
    this._arr.push(value);
  }

  pop() {
    return this._arr.pop();
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }
}

module.exports = {
  Stack,
};
