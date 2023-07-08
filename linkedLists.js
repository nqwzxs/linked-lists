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
    let total = 0;
    let node = this.head;

    while (node) {
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
    const max = this.size();
    if (index >= max) return 'Invalid index!';

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }

    return node;
  }

  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return;
    }
      
    let node = this.head;

    while (node.nextNode !== this.tail) {
      node = node.nextNode;
    }

    node.nextNode = null;
    this.tail = node;
  }

  contains(value) {  
    let node = this.head;

    while (node) {
      if (node.value === value) return true;

      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let node = this.head;

    while (node) {
      if (node.value === value) return index;

      node = node.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let string = '';

    let node = this.head;

    while (node) {
      string += `${node.value} -> `;
      node = node.nextNode;
    }

    return string + 'null';
  }
}

class Node {
  value = null
  nextNode = null
}

const linkedList = new LinkedList();

linkedList.append(727);
linkedList.prepend(667);
linkedList.append('one');
linkedList.append(1337);
linkedList.append('john');
linkedList.append(9);
linkedList.append('nine');

console.log(linkedList.size());
console.log(linkedList.at(0));

linkedList.pop();

console.log(linkedList.size());
console.log(linkedList.at(0));

console.log(linkedList.contains(727));
console.log(linkedList.find(667));

console.log(linkedList.toString());
