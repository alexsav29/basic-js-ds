const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let current = this._root;
    while (true) {
      if (data === current.data) {
        // do not insert duplicates, just ignore
        return;
      }
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // node.data === data -> remove this node
      // case 1: no children
      if (node.left === null && node.right === null) {
        return null;
      }
      // case 2: only right child
      if (node.left === null) {
        return node.right;
      }
      // case 3: only left child
      if (node.right === null) {
        return node.left;
      }
      // case 4: two children -> find inorder successor (min in right subtree)
      let successorParent = node;
      let successor = node.right;
      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
      // replace node's data with successor's data
      node.data = successor.data;
      // remove successor node from right subtree
      if (successorParent === node) {
        // successor is direct right child
        successorParent.right = successor.right;
      } else {
        successorParent.left = this._removeNode(successorParent.left, successor.data);
      }
      return node;
    }
  }

  min() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.left !== null) current = current.left;
    return current.data;
  }

  max() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.right !== null) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};