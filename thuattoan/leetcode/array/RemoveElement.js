/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * description day cac phan tu val
 * dc goi la k
 * nhung phai sua o tren nums
 * return ve length cua array moi khi tao ra tu array ban dau
 * no la size
 */
function removeElement(nums, val) {
    if (!nums.length) {
        return 0
    }
    // size of new Array will be created from old array
    let size =0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[size] = nums[i]
            size++
        }
    }

    return size
};

const case1 = {nums: [3, 2, 2, 3], val: 3} //[2,2]
const case2 = {nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2} //[0,1,4,0,3] 5
console.log(removeElement(case2.nums, case2.val))
console.log(removeElement(case1.nums, case1.val))