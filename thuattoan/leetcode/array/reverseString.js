
// Hi my name I am Tris
// result = sirT ma I eman iH

function reverse(str){
    // check input is a string and length > 2 to reverse
    if(!str || typeof str != 'string' || str.length < 2 ) return str;

    const backwards = [];
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function reverse2(str){
    //check for valid input
    try {
        return str.split('').reverse().join('');
    } catch (error) {
        return `This is an Error: ${error.message}`
    }
}

const reverse3 = str => {
    try {
        return [...str].reverse().join('');
    } catch (error) {
        return `This is an Error : ${error.message}`
    }
}

const rs1 = reverse('Hi I am Tris')
const rsE = reverse(12)
const rs2 = reverse2('hi im tris')
const rsE2 = reverse2(12312)
const rs3 = reverse3('hi i am tris dep zai')
const rsE3= reverse3(123123)


// console.log(rs1)
// console.log(rsE)

// console.log(rs2)
// console.log(rsE2)

console.log(rs3)
console.log(rsE3)