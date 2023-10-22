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


function moveZeroes2(nums) {
    let left = 0
    let right = 0

    while (right < nums.length) {
        if (nums[right] !== 0) {
            // swap
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
}

// bad runtime move3
function moveZeroes3(nums) {
    nums.forEach((element) => {
        if (element === 0) {
            const x = nums.indexOf(0)
            // splice use to replace x === index of 0 and delete 1 element
            nums.splice(x, 1); // remove 0
            nums.push(0); // push to the end last index of array
        }
    });
    return nums
}

function moveZeroes4(nums) {
    let zero = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[zero]) {
            zero++;
            continue;
        }

        if (nums[i]) {
            nums[zero++] = nums[i];
            nums[i] = 0;
        }
    }
}

// best way
function moveZeroes5(nums) {
    nums.sort((a, b) => {
        if (a === 0) {
            return 1
        }
        if (b === 0) {
            return -1
        }
        return 0
    })
}

const case1 = [0, 1, 0, 3, 12]
const case2 = [0]
moveZeroes(case1)
moveZeroes(case2)
moveZeroes2(case2)
moveZeroes4(case1)
console.log(case1)
// console.log(case2)