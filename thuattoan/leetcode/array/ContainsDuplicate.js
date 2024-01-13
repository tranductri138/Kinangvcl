/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums = []) {
    if (!nums.length) return false
    if (nums.length === 1) return false
    if (nums.length === 2) {
        if (nums[0] !== nums[1]) {
            return false
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (cur === nums[j]) {
                return true
            }
        }
    }
    return false
}

const containsDuplicate2 = (nums=[]) => {
    // valid input
    if (!nums.length) return false
    if (nums.length === 1) return false
    if (nums.length === 2) {
        if (nums[0] !== nums[1]) {
            return false
        }
    }
    // create map to check
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            return true
        } else {
            obj[nums[i]] = 1
        }
    }
    return false
}


const case1 = [1, 2, 3, 1]
const case2 = [1, 2, 3, 4]
const case3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.log(containsDuplicate(case2))
console.log(containsDuplicate2(case2))
