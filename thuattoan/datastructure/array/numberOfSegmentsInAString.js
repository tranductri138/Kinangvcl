
case1 = "Hello, my name is John"
//following "!@#$%^&*()_+-=',.:" and lowercase upper case english
function countSegments (str) {
    str = str.trim()
    if (str === '') return 0
    const res = str.split(" ")
    return res.length
}

function countSegments2(str) {
    str = str.trim()
    let segmentCount = 0
    for (let i = 0; i < str.length ; i++) {
        if ((i === 0 || str.charAt(i-1) === ' ') && str.charAt(i) !== ' ') segmentCount++
    }
    return segmentCount
}

function countSegments3(str) {
    str = str.trim()
    let res = [];
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            res.push(arr[i]);
        }
    }
    return res.length;
}
const case2 = "                "
const case3= ''
const case4 =", , , ,        a, eaefa" // expected = 6

console.log(case4.charAt(1))
// console.log(countSegments(case2))
console.log(countSegments3(case4))