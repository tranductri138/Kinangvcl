const large = new Array(1000).fill('nemo')

const nemo = ['nemo']

const findNemo = (array)=> {
    let t0 = performance.now()
    array.forEach(item => {
        if (item === 'nemo') {
            console.log('Found Nemo')
        }
    })
    let t1 = performance.now()

    console.log('Call took ' , (t1-t0) + 'milliseconds')
}

//O(n) liner time 

findNemo(nemo)

