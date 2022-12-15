class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
    }

    isEmpty(){
        return this.head == null;
    }

    insertAtBack( data ) {
        var newNode = new ListNode(data);
        let runner = this.head;
        if(this.head == null) this.head = newNode;
        while(runner != null) runner = runner.next
        if(runner == null) runner = newNode;
    } 

    insertAtBackRecrusive(data, runner = this.head) {}

    insertAtBackMany(vals) {
        for (const item of vals){
            this.insertAtBack(item);
        }
        return this;
    }

    toArr() {
        const arr = [];
        let runner = this.head;

        while(runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }
}

const emptyList = new SinglyLinkedList().isEmpty();
// console.log(emptyList)
const myNode = new ListNode(1);
const nodeTwo = new ListNode(2);
const testNodeList = new SinglyLinkedList()
testNodeList.insertAtBack(1)
console.log(testNodeList)
// const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
// const biNodeList = new SinglyLinkedList().insertAtBackMany([1,2]);
// const firstThreeList = new SinglyLinkedList().insertAtBackMany([1,2,3]);
// const secondThreeList = new SinglyLinkedList().insertAtBackMany([4,5,6]);
// const unorderedList = new SinglyLinkedList().insertAtBackMany([-5, -10, 4, -3, 6, 1, -7, -2]);