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