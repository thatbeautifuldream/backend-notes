class Heap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.insert(value);
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];
      if (parent[0] >= element[0]) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const tmp = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = tmp;
      this.sinkDown(0);
    }
    return max;
  }

  sinkDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;
    const length = this.heap.length;

    if (left <= length && this.heap[left][0] > this.heap[largest][0]) {
      largest = left;
    }
    if (right <= length && this.heap[right][0] > this.heap[largest][0]) {
      largest = right;
    }
    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      this.sinkDown(largest);
    }
  }

  printHeap() {
    return this.heap;
  }
}

export default Heap;
