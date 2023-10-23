const anyNemo = ['ais', 'who', 'flash', 'nemo', 'what']

// the first way
// running length -1 times because can not stop in forEach
anyNemo.forEach(item => {
    console.log('running')
    if (item === 'nemo') {
        return
    }
})

// the seconds way
// running 4 times
// anyNemo.find(item => {
//     console.log('running')
//     return (item === 'nemo')
// })


// if we use the seconds way , will effective better than a bit 