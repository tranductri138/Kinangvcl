/**
 * link: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student.
 * You are also given an integer k.
 * Pick the scores of any k students from the array so that the difference
 * between the highest and the lowest of the k scores is minimized.
 * Return the minimum possible difference.
 * */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
    if (nums.length === 1) {
        return 0
    }
    nums.sort((a, b) => a - b)

    let i = 0 // index
    let j = k - 1 // index
    let numDiff = nums[nums.length - 1]
    while (j < nums.length) {
        numDiff = Math.min(nums[j] - nums[i], numDiff)
        i ++
        j ++
    }

    return numDiff
}

const case1 = {
    nums: [ 90 ],
    k: 1
}
const case2 = {
    nums: [ 9, 4, 1, 7 ],
    k: 2
}

const case3 = {
    nums: [ 87063, 61094, 44530, 21297, 95857, 93551, 9918 ],
    k: 6
} // 74560

console.log(minimumDifference(case1.nums, case1.k))
console.log(minimumDifference(case2.nums, case2.k))
console.log(minimumDifference(case3.nums, case3.k))
