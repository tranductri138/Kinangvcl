/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    // check input
    if (!digits.length) return []
    // O(n) ban chat la no se loop cai nay se bi tang neu scale
    let bucket = digits.join('')
    // su dung lai bien bucket se ko tang memory
    bucket = BigInt(bucket)
    bucket++
    // O(n) cx the not
    bucket= bucket.toString().split('')
    console.log(bucket)
    // O(n)
    bucket= bucket.map(x => Number(x))
    return bucket
};

// 3*O(n)

const case1 = [1, 2, 3] //[1,2,4]case5
const case2 = [9] // [1,0]
const case3 = [4, 3, 2, 1] //[4,3,2,2]

const case4 = [9,9] //[1,0,0]

const case5 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


console.log(plusOne(case5))