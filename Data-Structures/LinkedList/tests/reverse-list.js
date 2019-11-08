const LinkedList = require('../linked-list.js');

let list1 = new LinkedList();

// 3->2->1->null
list1.insert(1);
list1.insert(2);
list1.insert(2);
list1.insert(1);


function reverse(head) {
    let node = head,
        previous,
        tmp;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;

        // reverse pointer
        node.next = previous;

        // step forward in the list
        previous = node;
        node = tmp;
    }

    return previous;
}

let list2 = new LinkedList();
list2 = reverse(list1.head);

console.log(list2.toString());

function ifPalindrome(head) {
    let list2 = new LinkedList();
    console.log("list1 ", list1.toString());
    list2 = reverse(list1.head);
    console.log("list2 ", list2.toString());
    let iter1 = list1.head, iter2 = list2.head;
    while(iter1 !=null && iter2 != null){
        if (iter1.data !== iter2.data){
            return false;
        }
        iter1=iter1.next;
        iter2=iter2.next;
    }
    return iter1==null&&iter2==null;
}
console.log(ifPalindrome(list1.head));