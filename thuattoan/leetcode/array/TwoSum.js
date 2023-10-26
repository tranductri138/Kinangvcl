/**
 * @param {number[]} nums
 * @param {number} target
 * description return sum of 2 number such that sum 2 number === target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // 2 loops slow
    for (let i = 0; i < nums.length ; i++) {
        // o(n)
        // i o(1)
        for (let j = 1; j < nums.length ; j++) {
            // o(n)
            // j o(1)
            const sum = nums[i] + nums[j] // o(1)
            if (sum=== target && i!==j) {
                return [i,j]
            }
        }
    }
};

function twoSum2 (nums , target) {
    const storage = {} //o(1)
    // storage increase memory
    // create map assign nums === index and then return
    // map with key = num and value index so it will be create more variable
    // o(n)
    for (let [index,num] of nums.entries()) {
        if (storage[num] !== undefined) return [storage[num] ,index]
        storage[target-num] = index // o(1)
    }
}
// o(n^2 + 3)

const case1 = {
    nums : [2, 7, 11, 15] ,
    target : 9
}
const case2 ={
    nums: [3, 2, 4] ,
    target :6
}
const case3 = {
    nums: [3, 3] ,
    target: 6
}
const case4= {
    nums:  [2,5,5,11],
    target: 10
}

const rsCase1 = twoSum2(case4.nums, case4.target)
console.log(rsCase1)

