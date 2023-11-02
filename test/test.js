const a = () => {
    console.log('this is ', this)
}

function b() {
    console.log('this is ', this)
}

// a()
// b()

// const c = new a()
// throw error Is not a constructor

const d = new b()
// able to create new because have construct

const cost = 5_000_000
console.log(cost.toLocaleString())
const  ab= new Date('2023-10-25T10:16:45.727092Z')
console.log(ab.toLocaleDateString())
