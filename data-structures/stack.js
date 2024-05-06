class Stack {
  constructor(maxHeight) {
    this.stack = [];
    this.maxHeight = maxHeight;
  }

  push(value) {
    if (this.isFull()) {
      console.warn(`Stack is FULL! Ignoring ${value}.`)
      return;
    }

    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      console.warn('Stack is EMPTY! Returning null.')
      return null;
    }

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  isFull() {
    return this.stack.length >= this.maxHeight;
  }
}

const bookStack = new Stack(5);

console.log('isEmpty: ', bookStack.isEmpty());

bookStack.push('Math');
console.log('isEmpty: ', bookStack.isEmpty());
console.log('isFull: ', bookStack.isFull());

bookStack.push('Anatomy');
bookStack.push('Computer Science');
bookStack.push('Physics');
bookStack.push('English');

bookStack.push('History');

console.log('isFull: ', bookStack.isFull());
console.log('Peek: ', bookStack.peek());

console.log('Pop: ', bookStack.pop());
console.log('Pop: ', bookStack.pop());
console.log('Pop: ', bookStack.pop());
console.log('Pop: ', bookStack.pop());
console.log('Pop: ', bookStack.pop());
console.log('Pop: ', bookStack.pop());