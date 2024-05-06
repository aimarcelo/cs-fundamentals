class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
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
        return
      }

      if (stack.pop()) return;
      throw new Error()
    })
  } catch {
    return false;
  }

  return stack.isEmpty()
}

console.log(isValid("))(") === false ? "Passed" : "Failed");
console.log(isValid("(()") === false ? "Passed" : "Failed");
console.log(isValid("(()())") === true ? "Passed" : "Failed");
console.log(isValid(")()(") === false ? "Passed" : "Failed");
console.log(isValid("") === true ? "Passed" : "Failed");
console.log(isValid("(((((((())))))))") === true ? "Passed" : "Failed");