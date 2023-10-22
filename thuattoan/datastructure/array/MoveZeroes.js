/**
 * @param {number[]} nums
 * description move all 0 to the end of array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let index = 0 // O(1)
    //O(n) loops !== 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }
    // number end !== 0
    //O(n) loops === 0
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
};
// O(2*n + 1)
// space  === O(1) because modify 1 array , not create new array
const case1 = [0, 1, 0, 3, 12]
const case2 = [0]
moveZeroes(case1)
moveZeroes(case2)
// console.log(case1)
console.log(case2)