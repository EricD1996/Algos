class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        return this.items.length;
    }

    pop() {
        if(this.isEmpty()) return null
        return this.items.pop();
    }

    peek() {return this.items[this.items.length-1];}

    isEmpty() {return this.items[0] == null;}

    size() {return this.items.length}
}

var newStack = new Stack();
// console.log(newStack.push(1));
// console.log(newStack.push(5));
// console.log(newStack.push(20));
// console.log(newStack.pop());
// console.log(newStack.peek());
// console.log(newStack.size());

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }
    push(item) {
        var node = new StackNode(item);
        var currentHead = this.head;
        this.head = node;
        node.next = currentHead;
        return this.size();
    }

    pop() {
        if(this.head == null) return undefined
        var current = this.head;
        this.head = this.head.next;
        return current;
    }

    peek() {
        if(this.head == null) return undefined
        return this.head;
    }

    isEmpty() {
        if(this.head == null) return true;
        return false;
    }

    size() {
        if(this.head == null) return 0;
        var runner = this.head;
        var count = 1;
        while(runner.next != null){
            runner = runner.next;
            count++;
        }
        return count;
    }
}

var stack1 = new Stack();
var llStack1 = new LinkedListStack();
llStack1.push(1);
llStack1.push(2);
llStack1.push(3);
llStack1.push(4);
llStack1.push(5);
console.log(llStack1.pop());
console.log(llStack1.peek());
console.log(llStack1.size());