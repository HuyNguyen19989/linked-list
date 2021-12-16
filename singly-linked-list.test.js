const linkedList = require('./singly-linked-list');

const Node = linkedList.Node;

const List = linkedList.LinkedList;

describe('Node', () => {
    test('has properties data & next', () => {
        const node = new Node('a', 'b');
        expect(node.data).toEqual('a');
        expect(node.next).toEqual('b');
    })
})

//Traverse list & empty list & 1+ stored values are Null
describe('Traverse', () => {
    test('Output array value in right order of list value', () => {
        const list = new List();
        expect(list.traverse()).toEqual(null);
        list.addLast(4);
        list.addLast(3);
        list.addLast(2);
        list.addLast(null);
        expect(list.traverse()).toEqual([4,3,2,null]);
    })
})

// Add node at beginning
describe('Add at the brginning',() => {
    test('Add new node at beginning',() => {
        const list = new List();
        list.addFirst(1);
        expect(list.head.data).toEqual(1);
        list.addFirst(0);
        expect(list.head.data).toEqual(0);
    })
})

// //Add node at the end
describe('Add at the end',() => {
    test('Add new node to the end',() => {
        const list = new List();
        list.addLast(1);
        expect(list.getLast().data).toEqual(1);
        list.addLast(2);
        expect(list.getLast().data).toEqual(2);
    })
})

// //Add node at specific position
describe('Add at any', () => {
    test('Add new node at any position',() => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(6);
        list.addLast(7);
        list.addAt(0, 5);
        expect(list.getAt(5).data).toEqual(0);
    })
})

// //Add list at specific position
describe('Add at any', () => {
    test('Add list at beginning',() => {
        const list = new List();
        const list2 = new List(); 
        list2.addLast(0);
        list2.addLast(0);
        list.addLast(1);
        list.addListAt(list2,0)
        expect(list.traverse()).toEqual([0,0,1]);
    }),
    test('Add list at any position',() => {
        const list = new List();
        const list2 = new List(); 
        list2.addLast(0);
        list2.addLast(0);
        list.head = null;
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addListAt(list2,3)
        expect(list.traverse()).toEqual([1,2,3,0,0,4,5]);
    }),
    test('Add list at the end',() => {
        const list = new List();
        const list2 = new List(); 
        list2.addLast(0);
        list2.addLast(0);
        list.head = null;
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addListAt(list2,5)
        expect(list.traverse()).toEqual([1,2,3,4,5,0,0]);
    })
})

//Delete at beginning position
describe('Delete at the beginning', () => {
    test('Delete node at the beginning of the list',() => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.deleteFirst(0, 5);
        expect(list.head.data).toEqual(2);
    })
})

//Delete at the end position
describe('Delete at the end', () => {
    test('Delete node at the end of the list',() => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.deleteLast();
        expect(list.getLast().data).toEqual(2);
    }),
    test('Delete node at the end of the list when head.next == null',() => {
        const list = new List();
        list.addLast(0);
        list.deleteLast();
        expect(list.head).toEqual(null)
    })
})

//Delete at specific position
describe('Delete at any', () => {
    test('Delete node at any position => when there is only one node',() => {
        const list = new List();
        list.addLast(1);
        list.deleteAt(0);
        expect(list.getAt(0)).toEqual(null);
    }),
    test('Delete node at any position => end position',() => {
        const list = new List();
        list.head = null; 
        list.addLast(1);
        list.addLast(2);
        list.deleteAt(1);
        expect(list.getAt(0).data).toEqual(1);
    }),
    test('Delete node at any position',() => {
        const list = new List();
        list.head = null; 
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(6);
        list.addLast(7);
        list.deleteAt(2);
        expect(list.getAt(2).data).toEqual(4);
    })
})

//Delete by value
describe('Delete by value', () => {
    test('Delete node by value when there is only 1 node', () => {
        const list = new List();
        list.addLast(1);
        list.deleteValue(1);
        expect(list.head).toEqual(null);
    }),
    test('Delete node by value when there are only 2 node and have the same value', () => {
        const list = new List();
        list.addLast(1);
        list.addLast(1);
        list.deleteValue(1);
        expect(list.head).toEqual(null);
    }),
    test('Delete node by value', () => {
        const list = new List();
        list.head = null; 
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(2);
        list.addLast(2);
        list.deleteValue(2);
        expect(list.traverse()).toEqual([1,3,4,5]);
    })
})

//SWAP
describe('Swap by index', () => {
    test('Swap node by index => when there are 2 nodes', () => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.swap(0, 1);
        expect(list.traverse()).toEqual([2,1]);
    }),
    test('Swap node by index => swap begin and end node', () => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.swap(0, 2);
        expect(list.traverse()).toEqual([3,2,1]);
    }),
    test('Swap node by index', () => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.swap(1, 2);
        expect(list.traverse()).toEqual([1,3,2,4,5]);
    }),
    test('Swap node by index => swap any node with end node', () => {
        const list = new List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.swap(1, 4);
        expect(list.traverse()).toEqual([1,5,3,4,2]);
    })
})
