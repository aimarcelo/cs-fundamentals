class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
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
}

const isValid = (input) => {
  const stack = new Stack();

  try {
    input.split("").forEach((parenthesis) => {
      if (parenthesis === '(') {
        stack.push(parenthesis);
      } else if (stack.peek() === '(') {
        stack.pop()
      } else {
        throw Error()
      }
    })
  } catch {
    return false;
  }

  return stack.isEmpty()
}

console.log(isValid("))(") === false);
console.log(isValid("(()") === false);
console.log(isValid("(()())") === true);
console.log(isValid(")()(") === false);
console.log(isValid("") === true);
console.log(isValid("(((((((())))))))") === true);