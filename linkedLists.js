class LinkedList {
  head = null

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail().nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value);

    if (this.head) node.nextNode = this.head;
    this.head = node;
  }

  size() {
    let total = 0;
    let currentNode = this.head;

    while (currentNode) {
      total++;
      currentNode = currentNode.nextNode;
    }

    return total;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.nextNode) currentNode = currentNode.nextNode;
    return currentNode;
  }

  at(index) {
    let currentNode = this.head;
    
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
      if (!currentNode) return 'Invalid index!';
    }

    return currentNode;
  }

  pop() {
    if (!this.head) return;

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (!previousNode) this.head = null;
    else previousNode.nextNode = null;
  }

  contains(value) {  
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return index;

      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let string = '';

    let currentNode = this.head;

    while (currentNode) {
      string += `${currentNode.value} -> `;
      currentNode = currentNode.nextNode;
    }

    return string + 'null';
  }

  insertAt(value, index) {
    if (!this.head || index === 0) this.prepend(value);
    else {
      const node = new Node(value);
  
      let currentNode = this.head;
      let previousNode = null;
  
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        if (!currentNode) break;
      }
  
      previousNode.nextNode = node;
      node.nextNode = currentNode;
    }
  }

  removeAt(index) {
    if (!this.head) return 'List is already empty!';
    else {
      let currentNode = this.head;
      let previousNode = null;
  
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        if (!currentNode) return 'Invalid index!';
      }
  
      if (!previousNode) this.head = currentNode.nextNode;
      else previousNode.nextNode = currentNode.nextNode;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();

linkedList.append(727);
linkedList.prepend(667);
linkedList.append(1337);
linkedList.append(9);

console.log(linkedList.size());
console.log(linkedList.toString());

linkedList.pop();

console.log(linkedList.size());
console.log(linkedList.toString());

console.log(linkedList.contains(727));
console.log(linkedList.find(667));

linkedList.insertAt('inserted', 0);

console.log(linkedList.toString());

linkedList.removeAt(0);

console.log(linkedList.toString());
