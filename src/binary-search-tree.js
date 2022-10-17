const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.droot = null;
  }

  root() {
    return this.droot;
  }

  add(data) {
    this.droot = ad(this.droot, data);

    function ad(b, data) {
      if (!b) {
        return new Node(data);
      } else if (b.data === data) {
        return b;
      } else if (data > b.data) {
        b.right = ad(b.right, data);
      } else {
        b.left = ad(b.left, data);
      }

      return b;
    }
  }

  has(data) {
    if (!this.droot) {
      return false;
    } else {
      let current = this.droot;

      while (current) {
        if (current.data === data) {
          return true;
        } else if (current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
  }

  find(data) {
    if (!this.droot) {
      return null;
    } else {
      let current = this.droot;

      while (current) {
        if (current.data === data) {
          return current;
        } else if (current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }


}

module.exports = {
  BinarySearchTree
};