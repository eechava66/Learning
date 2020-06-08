/**
 * Problem 1: 
 * Given a binary tree with the 
 * following struct
 * 
 *            1
 *         2     3
 *        4        5
 *      6   7
 * 
 * Return the depth of the binary tree
 */


const tree = { 
    val: 1, 
    left: { 
        val :2 , 
        left: { 
            val: 3,  
            left: { 
                val : 4 ,
                 right: 5
                }
            }
        }
    }
var max = 0;
const binDepth = (node,val) => {
    if(val > max){
        max = val;
    }
    if(node.left){
        binDepth(node.left,val+1) 
    }
    if(node.right){
        binDepth(node.right,val+1)
    }
}

binDepth(tree,0);
console.log(max);