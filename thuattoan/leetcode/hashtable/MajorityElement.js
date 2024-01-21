/**
 * describe : Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const times = nums.length / 2
    const bucket = {}
    nums.forEach(num => {
        if (!bucket[num]) {
            bucket[num] = 1
        } else {
            bucket[num]++
        }
    })

    for (let key in bucket) {
        if (bucket[key] > times) {
            return key
        }
    }
}
/**
 * meaning
 * There are actually a lot of possible solutions. Such as:
 * sorting the array and picking the n/2th element. O(nlogn) time
 * going over the array once and store in a hashmap the occurrences count of each element. Then return the element from the hashmap that had the most occurrences. That would take O(n) space and O(n) time.
 * brute force which is O(n^2)
 * However, using the Boyer-Moore majority vote algorithm is the most optimal solution.
 * link detail algorithm : https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
 * */
const majorityElement2 = function (nums) {
    let candidate;
    let count = 0;
    // Phase 1: Find potential majority candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1
    }
    return candidate
}

const case1 = [3, 2, 3]
const case2 = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(case1))
console.log(majorityElement(case2))
console.log(majorityElement2(case2))


// ranh thi doc :)))
// https://tek4.vn/khoa-hoc/cau-truc-du-lieu-va-thuat-toan/thuat-toan-boyer-moore-trong-tim-kiem-xau-con
