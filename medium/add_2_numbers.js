
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var num1 = numberFromList(l1).split("").reverse().join("")
    var num2 = numberFromList(l2).split("").reverse().join("")
    var sum = parseInt(num1) + parseInt(num2)
    var list = listFromNum(sum.toString().split("").reverse().join(""))
    return list
};

function numberFromList(list) {
    var num = ''
    pointer = list
    do {
        num += pointer['val']
        pointer = pointer.next
    }while(pointer)

    return num
}

function listFromNum(num, i){
    var list = {}
    var i = i || 0;
    if(i == num.length){
        return null
    }
    list.val = num[i] || 0
    list.next = listFromNum(num, ++i)
    return list
}


// var l1 = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 9,
//             next: null
//         }
//     }
// }



// var l2 = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4,
//             next: {
//                 val: 9,
//                 next: null
//             }
//         }
//     }
// }

l1 = listFromNum([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
l2 = listFromNum([5,6,4])
addTwoNumbers(l1,l2)