const nemo = ['nemo']

const large = new Array(1000).fill('nemo')

function  findNemo (array) {
    let tO = performance.now()
    array.forEach(item => {
        if(item === 'nemo') {
            console.log('Found Nemo')
        }
    })

    let t1 = performance.now()
    console.log('Call took' ,  (t1-tO) + 'milliseconds')
}

findNemo(nemo)
findNemo(large)