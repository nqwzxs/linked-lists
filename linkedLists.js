class LinkedList {
  head = null
  tail = null

  append(value) {
    const node = new Node();
    node.value = value;

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  prepend(value) {
    const node = new Node();
    node.value = value;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    if (!this.head) return 0;

    let total = 1;
    let node = this.head;

    while (node.nextNode) {
      total++;
      node = node.nextNode;
    }

    return total;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    const max = this.size()
    if (index >= max) return 'Invalid index!';

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }

    return node;
  }

  pop() {
    if (!this.head) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
      
    let node = this.head;

    while (node.nextNode !== this.tail) {
      node = node.nextNode;
    }

    node.nextNode = null;
  }

  contains(value) {
    if (!this.head) return false;
    
    let node = this.head;

    while (node.nextNode) {
      if (node.value === value) return true;

      node = node.nextNode;
    }

    return false;
  }
}

class Node {
  value = null
  nextNode = null
}

const linkedList = new LinkedList();

linkedList.append(727);
linkedList.append(667);
linkedList.append('one');

let size = linkedList.size();
console.log(size);

let node = linkedList.at(4);
console.log(node);

linkedList.pop();

size = linkedList.size();
console.log(size);

let contains = linkedList.contains(727);
console.log(contains);