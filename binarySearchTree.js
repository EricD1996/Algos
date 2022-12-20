
 class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
      this.left = null;
      /** @type {BSTNode|null} */
      this.right = null;
    }
  }

class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
      }

    isEmpty() {
        return this.root === null;
    }

    min(current = this.root) {
        if(this.isEmpty()) return null;
        while(current.left != null) current = current.left
        return current.data;
    }

    minRecursive(current = this.root) {
        if(this.isEmpty()) return null;
        if(current.left != null) return this.minRecursive(current.left);
        else return current.data;
    }

    max(current = this.root) {
        if(this.isEmpty()) return null;
        while(current.right != null){
            current = current.right;
        }
        return current.data;
    }

    maxRecursive(current = this.root) {
        if(this.isEmpty()) return null;
        if(current.right != null){
            return this.maxRecursive(current.right);
        } else return current.data;
    }

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
          return;
        }
        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);
        console.log(
          " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );
        this.print(node.left, spaceCnt);
      }

    contains(searchVal) {
        let runner = this.root;
        while(runner != null) {
            if(runner.data > searchVal) runner = runner.left;
            else if(runner.data < searchVal) runner = runner.right;
            else if(runner.data === searchVal) return true;
        }
        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        if(current.data > searchVal){
            return this.containsRecursive(searchVal, current.left);
        } else if(current.data < searchVal){
            return this.containsRecursive(searchVal, current.right);
        } else if(current.data === searchVal) {
            return true;
        }
        return false;
    }

    range(startNode = this.root) {
        if (!startNode) {
          return null;
        }
        return this.max(startNode) - this.min(startNode);
      }

     insert(newVal) {
        let current = this.root;
        let newNode = new BSTNode(newVal);
        if(current == null) {
            this.root = newNode;
            return this;
        }
        while(current) {
            if(newVal < current.data && current.left == null) {
                current.left = newNode;
                return this;
            }
            else if (newVal > current.data && current.right == null) {
                current.right = newNode;
                return this;
            }
            if(newVal < current.data && current.left != null) {
                current = current.left;
            }
            else if (newVal > current.data && current.right != null) {
                current = current.right;
            }
            
        }
    }

    insertRecursive(newVal, curr = this.root) {
        if (this.isEmpty()) {
          this.root = new BSTNode(newVal);
          return this;
        }
    
        if (newVal > curr.data) {
          if (curr.right === null) {
            curr.right = new BSTNode(newVal);
            return this;
          }
          return this.insertRecursive(newVal, curr.right);
        }
    
        if (curr.left === null) {
          curr.left = new BSTNode(newVal);
          return this;
        }
        return this.insertRecursive(newVal, curr.left);
      }

    toArrPreorder(node = this.root, vals = []) {
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }

    toArrPostorder(node = this.root, vals = []) {
        if (node) {
            this.toArrPostorder(node.left, vals);
            this.toArrPostorder(node.right, vals);
            vals.push(node.data);
        }
        return vals;
    }

    size(node = this.root) {
        if(!node){
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }

    // size(node = this.root, count = 0){
    //     if(node){
    //         this.size(node.left, count++);
    //         this.size(node.right, count++);
    //         count++;
    //     }
    //     return count;
    // }

    height(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left) + this.height(node.right));
    }

    isFull(node = this.root) {
        if(node === null) return false;
        if(!node.right && !node.left) return true;
        if(node.left && node.right) return (this.isFull(node.left) && this.isFull(node.right))
        return false;
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.insert(1);
// console.log(twoLevelTree.print())
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);
console.log(threeLevelTree.maxRecursive());
console.log(threeLevelTree.containsRecursive(5));
console.log(threeLevelTree.range());
// threeLevelTree.insert(1);
threeLevelTree.insertRecursive(1);
console.log(threeLevelTree.print());
// console.log(threeLevelTree.toArrPostorder());
console.log(threeLevelTree.toArrPreorder());
console.log(threeLevelTree.toArrInorder());