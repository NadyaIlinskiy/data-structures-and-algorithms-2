'use strict';

 const tree_intersection = (T1, T2) => {
    //check if trees are empty
    if(!T1 || !T1.root || !T2 || !T2.root){
        return [];
    }
    // insert all elements of the first tree into tree_elements object, using BFS (breadth first search)
   let tree_elements = {};
   let q1 = [];
    q1.push(T1.root);
    while(q1.length > 0){
        let node = q1.shift();
        if(!tree_elements[node.value]){
            tree_elements[node.value] = 1;
        }
        if(node.left){
            q1.push(node.left);
        }
        if (node.right){
            q1.push(node.right);
        }
    }
    // find common elements going around second tree (BFS)
    let tree_common_elements = {};
    let q2 = [];
    q2.push(T2.root);
    while (q2.length > 0) {
        let node = q2.shift();
        if (tree_elements[node.value]&&!tree_common_elements[node.value]) {
            tree_common_elements[node.value] = 1;
        }
        if (node.left) {
            q2.push(node.left);
        }
        if (node.right) {
            q2.push(node.right);
        }
    }
    // return array of common elements
   return Object.keys(tree_common_elements);
}

module.exports = { tree_intersection: tree_intersection };