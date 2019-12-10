'use strict';

const { Stack, Queue } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

const bfs_tree = (tree) => {
    if(!tree || !tree.root){
        return [];
    }
    let result = [];
    let q = new Queue();
    q.enqueue(tree.root)
    while(q.peek()){
        let n = q.dequeue();
        result.push(n.value);
        if(n.left){
            q.enqueue(n.left);
        }
        if(n.right){
            q.enqueue(n.right);
        }
    }
    return result;  
}
module.exports = bfs_tree;