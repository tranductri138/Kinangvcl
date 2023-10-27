/**
 * link https://leetcode.com/problems/set-mismatch/
 * @param {number[]} nums
 * description phai tim dc so bi sai va thay vao do la so dung
 * array ket qua se la it nhat phan tu first la
 * so sai second la so dung
 * co the co nhieu
 * va no phai la 1 set
 * @return {number[]}
 */
function findErrorNums(nums) {
    if (!nums.length) return []
    let index = 0
    let rs = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[index]) {
            rs.push(nums[i])
            rs.push(nums[i] +1)
        } else {
            index++
        }
    }
    return rs
};

const case1 = [1,2,2,4]  // [2,3]
const case2 =   [1,1]  //[1,2]
const case3 = [2,2]  //[2,1]
const case4 =[]

console.log(findErrorNums(case1))