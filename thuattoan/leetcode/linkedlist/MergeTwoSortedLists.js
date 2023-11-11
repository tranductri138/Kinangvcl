/**
 * link https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * description
 * merge the fist and the second and then sort
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next = undefined) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0)
    let head = dummy

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }

    if (list1 !== null) {
        dummy.next = list1
    } else {
        dummy.next = list2
    }
    return head.next
};
// 1n2 24 13 34
const nodeFirst3 = new ListNode(4)
const nodeFirst2 = new ListNode(2, nodeFirst3)
const list1 = new ListNode(1, nodeFirst2)
// 1n2 val next node
const nodeSecond3 = new ListNode(4)
const nodeSecond2 = new ListNode(3, nodeSecond3)
const list2 = new ListNode(1, nodeSecond2)
const sortList = mergeTwoLists(list1 , list2)


// console.log( 'this is list1: ',JSON.stringify(list1))
// console.log( 'this is list2: ',JSON.stringify(list2))
function print(list) {
    let rs = []
    while (list?.val) {
        rs.push(list.val)
        list = list.next
    }
    console.log(rs)
}
// paraphrase
print(sortList)
