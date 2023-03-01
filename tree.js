/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // If there is not element in the tree
    if (!this.root) return 0;

    // Storing sum to total
    let total = this.root.val;

    function sumCal(node) {
      // Iterate over each child node
      for (let child of node.children) {
        // Add value of child node to total
        total += child.val;

        // Recurse if child node has another child node below it
        if (child.children.length > 0) sumCal(child);
      }
    }

    sumCal(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // If there is not element in the tree
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countChild(node) {
      // Iterate over each child node
      for (let child of node.children) {
        // Add value of child node to total
        if (child.val % 2 === 0) count++;

        // recurse if child node has another child node below it
        if (child.children.length > 0) countChild(child);
      }
    }

    countChild(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // If there is not element in the tree
    if (!this.root) return 0;

    // store count
    let count = this.root.val > lowerBound ? 1 : 0;

    function countChild(node) {
      // Iterate over each child node
      for (let child of node.children) {
        // Add value of child node to total
        if (child.val > lowerBound) count++;

        // recurse if child node has another child node below it
        if (child.children.length > 0) countChild(child);
      }
    }

    countChild(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
