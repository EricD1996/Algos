class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.size() = 0;
    }

    size() {
        return this.items.length;
    }
}

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(item) {
        var newNode = new QueueNode(item);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this.queueSize();
    }

    dequeue() {
        if(!this.isEmpty()){
            var removedNode = this.head;
            this.head = this.head.next;
            this.size--;
            return removedNode;
        }
        return undefined;
    }

    front() {
        return this.head;
    }

    isEmpty() {
        return this.queueSize() == 0;
    }

    queueSize() {
        return this.size;
    }
}

var linkedQueue = new LinkedListQueue();
console.log(linkedQueue.dequeue());
console.log(linkedQueue.isEmpty());
console.log(linkedQueue.enqueue(3));
