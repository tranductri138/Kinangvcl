/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * description nhung phan tu ko bang val no la k
 * de dc accept must follow thay doi nums sao cho the fisrt k
 */
function removeElement(nums, val) {
    let bucket = 0
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === val) {
           bucket++
       }
    }
    return bucket
};

const case1 = {nums: [3, 2, 2, 3], val: 3} //[3,2]
console.log(removeElement(case1.nums, case1.val))