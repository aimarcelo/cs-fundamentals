class Queue {
  constructor(maxLength) {
    this.queue = [];
    this.maxLength = maxLength;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.warn('Queue is FULL! Ignoring ', value)
      return;
    }

    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.warn('Queue is EMPTY! Returning null.')
      return null;
    }
    
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length >= this.maxLength;
  }
}

const rollerCoasterQueue = new Queue(5);

console.log("isEmpty: ", rollerCoasterQueue.isEmpty())

rollerCoasterQueue.enqueue("Gelo");
console.log("isEmpty: ", rollerCoasterQueue.isEmpty())
console.log("isFull: ", rollerCoasterQueue.isFull())

rollerCoasterQueue.enqueue("Alyssa");
rollerCoasterQueue.enqueue("Nathan");
rollerCoasterQueue.enqueue("Pancho");
rollerCoasterQueue.enqueue("Lexibbpwinces");

console.log("Queue: ", rollerCoasterQueue.queue)
console.log("isFull: ", rollerCoasterQueue.isFull())

rollerCoasterQueue.enqueue("Cody"); // Queue is FULL
console.log("Queue: ", rollerCoasterQueue.queue)

console.log("Dequeued: ", rollerCoasterQueue.dequeue());
console.log("Dequeued: ", rollerCoasterQueue.dequeue());

rollerCoasterQueue.enqueue("Cody");
console.log("Queue: ", rollerCoasterQueue.queue)

console.log("Dequeued: ", rollerCoasterQueue.dequeue());
console.log("Dequeued: ", rollerCoasterQueue.dequeue());
console.log("Dequeued: ", rollerCoasterQueue.dequeue());
console.log("Dequeued: ", rollerCoasterQueue.dequeue());
console.log("Dequeued: ", rollerCoasterQueue.dequeue());
console.log("Dequeued: ", rollerCoasterQueue.dequeue());