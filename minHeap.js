class minHeap {
    constructor() {
        this.heap = [null];
    }

    top() {
        if(this.heap[1]) return this.heap[1];
        return null;
    }

    insert(num) {
        this.heap.push(num);
        var lastIndex = this.heap.length-1;
        var parentIndex = Math.floor((lastIndex)/2);
        var tempParent;
        var tempLast;
        var counter=0;
        while(parentIndex != 0){
            counter ++;
            if(this.heap[lastIndex] < this.heap[parentIndex]){
                tempParent = this.heap[parentIndex];
                tempLast = this.heap[lastIndex];
                this.heap[lastIndex] = tempParent;
                this.heap[parentIndex] = tempLast;
            }
            else break;
            lastIndex = parentIndex;
            parentIndex = Math.floor((lastIndex-1)/2);
        }
    }

    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
          return;
        }
    
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    
        console.log(
          " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );
    
        this.printHorizontalTree(parentIdx * 2, spaceCnt);
      }
}

var heap = new minHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
console.log(heap.top());
heap.printHorizontalTree();