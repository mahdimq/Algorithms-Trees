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
		if (!this.root) return 0;

		let q = [...this.root.children];
		let sum = this.root.val;
		while (q.length) {
			sum += q[0].val;
			q.push(...q[0].children);
			q.shift(1);
		}

		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return 0;

		let q = [...this.root.children];
		let count = this.root.val % 2 === 0 ? 1 : 0;
		while (q.length) {
			if (q[0].val % 2 === 0) count += 1;
			q.push(...q[0].children);
			q.shift(1);
		}

		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		if (!this.root) return 0;

		let q = [...this.root.children];
		let count = this.root.val > lowerBound ? 1 : 0;
		while (q.length) {
			if (q[0].val > lowerBound) count += 1;
			q.push(...q[0].children);
			q.shift(1);
		}

		return count;
	}
}

module.exports = { Tree, TreeNode };
