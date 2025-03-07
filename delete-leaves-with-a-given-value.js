var removeLeafNodes = function (root, target) {
    if (root === null) return null;
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    if (root.val === target && root.left === null && root.right === null) {
        return null;
    }
    return root;
};
