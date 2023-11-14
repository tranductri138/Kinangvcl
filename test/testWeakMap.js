function test1() {
    let wm = new WeakMap()
    wm.set({a:2} , {a:2})
    console.log(wm.get({a:2}))

    const a = new Map()

    a.set('asd' , 'as')
    a.set('c' , {a: 1 , b :2})
    console.log(a.get('asd'))
    console.log(a.get('c'))
}
// test1()

function test2() {
    const a = [{ a :1} , { a :1}, { a :1}]
    const b = [{b:2}]
    b.push(...a)
    console.log(b)
}
// test2()

function test3() {
    const a = [1,2,3,4,5]

    for (const number of a) {
        console.log('here')
        if (number === 3) {
            break
        }
    }
}

test3()
