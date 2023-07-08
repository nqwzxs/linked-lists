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

  }

  head() {

  }
}

class Node {
  value = null
  nextNode = null
}

const linkedList = new LinkedList();