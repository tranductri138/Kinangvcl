//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

// boooo(2)

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    const hiArray = [];
    for (let i = 0; i < n; i++) {
        // assign to memory ==> risk increase space
        hiArray[i] = 'hi';
    }
    return hiArray;
}

const hiArray = arrayOfHiNTimes(10)
// console.log(hiArray)

// exercise : twitter
function findTweets() {
    // Find 1st , find Nth ,...
    const array = ['hi', 'my', 'tris']
    // array[0] oldest tweets O(1)
    // array[array.length -1] === array[2] recent tweets O(1)
}

// oke ==> let say a more time
const anyString = 'hellotrsasdasdas'
console.log(anyString.length) //O(1)