
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
    var flag = true
    var result = []
    var carry = 0

    //pointers to lists
    var p1 = l1
    var p2 = l2
    do {
        var val1 = p1 && p1.val || 0
        var val2 = p2 && p2.val || 0
        var sum = val1 + val2 + carry

        // num-string arithemtics
        var temp = String(sum).split("").reverse()

        // assign carry and sum
        result.push(temp[0])
        carry = parseInt(temp[1] || 0)

        //move to next nodes
        p1 = p1 && p1.next
        p2 = p2 && p2.next

        //both lists ended?
        if (p1 == null && p2 == null) {
            flag = false
        }
    } while (flag)

    if (carry){
        result.push(carry)
    }

    list = listFromNum(result)
    return list;
};

function listFromNum(num, i) {
    var list = {}
    var i = i || 0;
    if (i == num.length) {
        return null
    }
    list.val = num[i] || 0
    list.next = listFromNum(num, ++i)
    return list
}

a = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
b = [2, 4, 3]
c = [5, 6, 4]
l1 = listFromNum(b)
l2 = listFromNum(c)
addTwoNumbers(l1, l2)