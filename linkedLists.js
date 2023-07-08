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

    let number = 1;
    let node = this.head;

    while (node.nextNode) {
      number++;
      node = node.nextNode;
    }

    return number;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }
}

class Node {
  value = null
  nextNode = null
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

const size = linkedList.size();
console.log(size);