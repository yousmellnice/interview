// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
class TreeNode {
    left = null
    right = null
    val = null
    constructor(val) {
        this.val = val
    }
}
//    10
//  4    8
// 3  6
const root = new TreeNode(10)
root.left = new TreeNode(4)
root.right = new TreeNode(8)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(6)
function ignorderTraversal(root) {
    const result = []
    const stack = []
    let curNode = root
    while (curNode || stack.length > 0) {
        while (curNode) {
            stack.push(curNode)
            curNode = curNode.left
        }
        curNode = stack.pop()
        result.push(curNode.val)
        curNode = curNode.right
    }
    return result
}
const res = ignorderTraversal(root)
console.log(res);

// 解题总结
// 1. 整个过程利用了栈的后进先出特性，确保了左子树的节点先被访问，然后是根节点，最后是右子树的节点。这符合中序遍历的顺序