function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);  // o(1)

    let middleIndex = Math.floor(items.length / 2); // o(1)
    let index = 0; // o(1)

    while (index < middleIndex) {
        console.log(items[index]); // o(n)
        index++;
    }

    for (let i = 0; i < 100; i++) {
        console.log('hi'); // o(1)
    }
}
// 1 + 1 + n + 100 ==> what happens ?
// remove constants because we just focus in function
// And then we take from func is o(n)

// example above ==> 102+n ==> bigO(102 + n) ==> o(n)
// because it still will run follow linear
// we call this is drop the constants


const items = ['one' , 'two' , 'three']
printFirstItemThenFirstHalfThenSayHi100Times()