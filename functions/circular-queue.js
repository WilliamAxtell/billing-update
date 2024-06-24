class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  insert(item) {
    if (this.isEmpty()) {
      this.enqueue(item);
      return;
    }
    if (!this.isFull()) {
      const client = item["client"];
      let i;
      for (i = this.front; i !== this.rear + 1; i = (i + 1) % this.capacity) {
        if (this.items[i]["client"] === client) {
          this.items[i]["billing"] = item["billing"];
          return;
        }
      }
      this.enqueue(item);
    } else {
    console.log("Queue is full");
    }
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i]["client"] + " " + this.items[i]["billing"] + " ";
      }
      str += this.items[i]["client"] + " " + this.items[i]["billing"];
      console.log(str);
    }
  }
}

export {CircularQueue};

// const queue = new CircularQueue(50);
// queue.insert({ client: 'bill', billing: '100' });
// queue.insert({ client: 'clam', billing: '200' });
// queue.insert({ client: 'felt', billing: '300' });
// console.log(queue.peek());
// queue.print();
// queue.insert({ client: 'felt', billing: '400' });
// queue.print();
// queue.dequeue();
// queue.print();
