
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
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

    print(node = this.root, spaceCnt = 0, spaceIncr = 10){
        if(!node) {
            return;
        }
        space += spaceIncr;
        this.print(node.right, spaceCnt);
        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) + `${node.data}`
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
        if(this.isEmpty() || (startNode.left == null && startNode.right == null)) return null;
        return (this.max()-this.min());
    }

}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

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