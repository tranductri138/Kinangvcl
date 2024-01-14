/**
 * @link : https://leetcode.com/problems/single-number/description/
 * Given a non-empty array of integers nums, every element
 * appears twice except for one.
 * Find that single one.
 * You must implement a solution with a linear runtime
 * complexity and use only constant extra space.
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const mapObject = {}
    for (const num of nums) {
        if (mapObject[num] !== 1) {
            mapObject[num] = 1
        } else {
            mapObject[num]++
        }
    }

    for (const key in mapObject) {
        if (mapObject[key] == 1) {
            return key
        }
    }
}


// trick lor
const singleNumber2 = (nums) => {
    let result = 0;
    // 使用 XOR 運算，相同的數字 XOR 後會得到 0，最後只剩下只出現一次的數字
    for (let num of nums) {
        result ^= num;
    }
    return result
}

const case1 = [2, 2, 1]
const case2 = [4, 1, 2, 1, 2]
const case3 = [1]
console.log(singleNumber(case1))
console.log(singleNumber(case2))
console.log(singleNumber2(case3))
console.log(singleNumber2(case2))
console.log(singleNumber2(case1))


let a = 5;
let b = 3;
a ^= b;
console.log(a)
