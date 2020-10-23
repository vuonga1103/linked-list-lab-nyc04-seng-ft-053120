// {name: 'Alexandra', next: 'addressOfNextPerson'}

// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
//     masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
//     ntrandm: {name: 'Juliet', next: null}
//   }

const getName = (node) => node.name;

const headNode = (linkedList, collection) => {
  const head = collection[linkedList] 
  // linkedList contains the info of the first node
  return head
};

const next = (head, collection) => {
  const nextNodeAddress = head.next;
  return collection[nextNodeAddress]
}

const nodeAt = (index, linkedList, collection) => {
  let currentNode = headNode(linkedList, collection);
  let nextNode = next(currentNode, collection);
  let i = 0;

  while (i < index) {
    let temp = nextNode;
    currentNode = nextNode;
    nextNode = next(temp, collection)
    i++;
  }

  return currentNode;
}

const addressAt = (index, linkedList, collection) => {
  // Find the node at the previous index, get the value of next;
  if (index === 0) return linkedList;
  return nodeAt(index - 1, linkedList, collection).next
}

const indexAt = (node, linkedList, collection) => {
  
}