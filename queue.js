'use strict';

class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    const node = new _Node(item, null, this.last);

    if (this.last) {
      this.last.prev = node;
    }

    this.last = node;

    if (!this.first) {
      this.first = node;
    }
  }

  dequeue() {
    const node = this.first;

    if (!node) {
      // eslint-disable-next-line no-console
      console.err('Attempted to dequeue from an empty queue');
      return;
    }

    this.first = node.prev;

    // Tidy up our dangling pointers
    if (this.first) {
      this.first.next = null;
    }
    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

function peek(queue) {
  return queue.first ? queue.first.data : undefined;
}

function display(queue) {
  let curr = queue.first;
  while (curr !== null) {
    // eslint-disable-next-line no-console
    console.log(curr.data);
    curr = curr.prev;
  }
}

module.exports = {
  Queue,
  peek,
  display,
};
