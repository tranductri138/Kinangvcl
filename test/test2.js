const a = [1, 2, 3, 4, 5]

// optimize
a.find((number) => {
    console.log('a')
    if (number === 3) return number
})

// a will gen 3 times
// without return number

a.find((number) => {
    console.log('b')
    if (number === 3) return
})

// b will gen = array.length -1 times

