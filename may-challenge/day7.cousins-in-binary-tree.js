function isCousins(root, x, y) {
  const getDepthAndParent = (node, n, depth = 0, parent) => {
    if (!node) return null;
    if (node.val === n) return { depth, parent };
    const left = getDepthAndParent(node.left, n, depth + 1, node);
    const right = getDepthAndParent(node.right, n, depth + 1, node);
    return left || right;
  };
  const { depth: xDepth, parent: xParent } = getDepthAndParent(root, x);
  const { depth: yDepth, parent: yParent } = getDepthAndParent(root, y);

  return xDepth === yDepth && xParent !== yParent;
}

console.log(isCousins([1, 2, 3, 4], 4, 3));
console.log(isCousins([1, 2, 3, null, 4, null, 5], 5, 4));
console.log(isCousins([1, 2, 3, null, 4], 2, 3));
