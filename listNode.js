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
        if (this.isEmpty()){
            this.head = newNode;
            return this;
        }
        var runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
        // var newNode = new ListNode(data);
        // let runner = this.head;
        // if(this.head == null) this.head = newNode;
        // while(runner != null) runner = runner.next
        // if(runner == null) runner = newNode;
    } 

    insertAtBackRecrusive(data, runner = this.head) {
        if (this.isEmpty()){
            this.head = new ListNode(data);
            return this;
        }
        if(runner.next === null){
            runner.next = new ListNode(data);
            return this;
        }
        return this.insertAtBackRecrusive(data, runner.next);
    }

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

    insertAtFront(data) {
        const temp = this.head;
        this.head = new ListNode(data);
        this.head.next = temp;
    }

    removeHead() {
        const temp = this.head;
        this.head = this.head.next;
        return temp;
    }

    average() {
        var sum = 0;
        var count = 0;
        if(this.isEmpty()) {
            return 0;
        }
        var runner = this.head;
        while(runner != null) {
            count++;
            sum += runner.data;
            runner = runner.next;
        }
        return sum/count;
    }

    removeBack() {
        let runner = this.head;
        let frontrunner = runner.next;
        while(runner.next !== null) {
            if(frontrunner.next === null) {
                runner.next = null;
                return frontrunner.data;
            }
            runner = runner.next;
            frontrunner = frontrunner.next;
        }
    }

    contains(val) {
        if(this.isEmpty()) return false
        var runner = this.head;
        while (runner != null){
            if (runner.data == val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    containsRecursive(val, current = this.head) {
        if(this.isEmpty()) return false
        if (current.data == val) return true;
        if(current.next != null){
            return this.containsRecursive(val, current.next)
        }
        return false;
    }
}

// const emptyList = new SinglyLinkedList().isEmpty();
// console.log(emptyList)
// const myNode = new ListNode(1);
// const nodeTwo = new ListNode(2);
// const testNodeList = new SinglyLinkedList()
// testNodeList.insertAtBack(1)
// console.log(testNodeList)
const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1,2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1,2,3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4,5,6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([-5, -10, 4, -3, 6, 1, -7, -2]);

singleNodeList.insertAtFront(5);
biNodeList.insertAtFront(8);
firstThreeList.insertAtFront(20);

console.log(singleNodeList.toArr());
// console.log(biNodeList.toArr());
// console.log(firstThreeList.toArr());
// singleNodeList.removeHead();
// console.log(singleNodeList.toArr());
// console.log(singleNodeList.average());
singleNodeList.removeBack();
console.log(singleNodeList.toArr());
biNodeList.removeBack();
console.log(biNodeList.toArr());