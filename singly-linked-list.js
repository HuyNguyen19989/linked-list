class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        let count = 1;

        while (node.next) {
            node = node.next;
            count++;
        }

        return count;
    }

    getLast() {
        let node = this.head

        while (node && node.next !== null) {
            node = node.next;
        }

        return node;
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (index > 0) {
            index--;
            node = node.next
        }
        return node;
    }

    //TRAVERSE
    traverse() {
        if (!this.head) {
            return null;
        } else if (this.head.next === null) {
            return [this.head.data];
        }

        let node = this.head;
        let arr = [];

        while (node) {
            arr.push(node.data);
            node = node.next
        }

        return arr;
    }

    // ADD NODE
    addFirst(data) {
        this.head = new Node(data, this.head);
    }

    addLast(data) {
        let node = this.getLast();
        if (node) {
            node.next = new Node(data);
        } else {
            this.head = new Node(data)
        }
    }

    addAt(data, index) {
        if (!this.head) {
            return;
        }

        if (index > (this.size() - 1) || index < 0) {
            return;
        }

        if (index === 0) {
            let node = new Node(data, this.head);
            this.head = node;
            return;
        }

        let prev = this.head;
        let node = this.head.next;
        let count = 1;

        while (node && count <= index) {
            if (count === index) {
                let temp = new Node(data, node);
                prev.next = temp
            }
            prev = prev.next;
            node = node.next;
            count++;

        }
    }

    //ADD LIST

    addListAt(list, index) {
        if (this.head === null) {
            this.head = list.head;
            return;
        }

        if ( !list || list && list.head === null) {
            return;
        }

        if ( index < 0) {
            return;
        } else if (index > (this.size() - 1)) {
            this.getLast().next = list.head
            return;
        }

        if (index === 0) {
            let temp = this.head;
            this.head = list.head;
            list.getLast().next = temp;
            return;
        } 

        let prev = this.head;
        let node = this.head.next;
        let count = 1;

        while (node && count <= index) {
            if (count === index) {
                let temp = node;
                prev.next = list.head;
                list.getLast().next = temp;
            }
            prev = prev.next;
            node = node.next;
            count++;

        }
    }

    // DELETE NODE
    deleteFirst() {
        if (this.head) {
            this.head = this.head.next
        }
    }

    deleteLast() {
        if (this.head && this.head.next === null) {
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;

        while (node) {
            if (node.next === null) {
                prev.next = null;
            }
            prev = prev.next;
            node = node.next;
        }
    }

    deleteAt(index) {
        if (index > (this.size() - 1) || index < 0) {
            return;
        }

        if (index === 0) {
            if (this.head && this.head.next) {
                this.head = this.head.next;
                return;
            } else if (this.head && this.head.next === null) {
                this.head = null;
                return;
            }
        }

        let prev = this.head;
        let node = this.head.next;
        let count = 1;

        while (node && count <= index) {
            if (count === index) {
                prev.next = node.next
            }
            prev = prev.next;
            node = node.next;
            count++;
        }
    }

    deleteValue(data) {
        if (!this.head) {
            return;
        }

        while (this.head.data === data) {
            if (this.head && this.head.next) {
                this.head = this.head.next;
            } else if (this.head && this.head.next === null) {
                this.head = null;
                return;
            }
        }

        let prev = this.head;
        let node = this.head.next;

        while (node) {
            if (node.data === data) {
                prev.next = node.next;
                node = node.next
            } else {
                prev = prev.next;
                node = node.next;
            }
        }
    }

    // SWAP BY INDEX
    swap(i1, i2) {
        if (i1 > (this.size() - 1)  || i2 > (this.size() - 1) || i1 === i2 || i1 < 0 || i1 < 0 || !this.head) {
            return;
        }

        let prev1 = undefined;
        let node1 = this.head;
        let count1 = 0;

        let prev2 = undefined;
        let node2 = this.head;
        let count2 = 0;

        while (node1 && count1 < i1) {
            prev1= node1;
            node1 = node1.next;
            count1 ++;
        }

        while (node2 && count2 < i2) {
            prev2= node2;
            node2 = node2.next;
            count2 ++;
        }

        if (prev1) {
            prev1.next = node2
        } else {
            this.head = node2
        }

        if (prev2) {
            prev2.next = node1
        } else {
            this.head = node1
        }

        let temp = node2.next;
        node2.next = node1.next;
        node1.next = temp;
    }
}

module.exports = { Node, LinkedList };