class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtFront(data) {
        var newNode = new ListNode(data);
        if(this.isEmpty()) {
            this.tail = newNode;
            this.head = newNode;
            return this;
        }
        // newNode.prev = null;
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if(this.isEmpty()){
            this.tail = newNode;
            this.head = newNode;
            return this;
        }
        newNode.prev = this.tail;
        newNode.next = null;
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    removeMiddleNode() {
        if(!this.isEmpty() && this.head === this.tail) {
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }
        let forwardRunner = this.head;
        let backwardsRunner = this.tail;

        while(forwardRunner && backwardsRunner) {
            if(forwardRunner === backwardsRunner){
                const midNode = forwardRunner;
                midNode.prev.next = midNode.next;
                midNode.next.prev = midNode.prev;
                return midNode.data;
            }
            if(forwardRunner.prev === backwardsRunner) return null;
            forwardRunner = forwardRunner.next;
            backwardsRunner = backwardsRunner.prev;
        }
        return null;
    }

    isEmpty() {
        return this.head === null;
    }

    toArray() {
        const vals = [];
        let runner = this.head;
        while(runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item))
        return this;
    }

    insertAfter(targetVal, newVal) {}

    insertBefore(targetVal, newVal) {}
}

const emptyList = new DoublyLinkedList();
const singleNodeListb = new DoublyLinkedList().insertAtBack(1);
const biNodeListb = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const singleNodeList = new DoublyLinkedList().insertAtFront(1);
const biNodeList = new DoublyLinkedList().insertAtFront(2);
const biNodeListf = new DoublyLinkedList().insertAtFront(1).insertAtFront(2);
singleNodeList.insertAtFront(3);
console.log(singleNodeList.toArray());

biNodeListf.insertAtFront(3);
console.log(biNodeListf.toArray());

singleNodeListb.insertAtBack(3);
console.log(singleNodeListb.toArray());