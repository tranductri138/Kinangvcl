function test1() {
    let wm = new WeakMap()
    wm.set({a:2} , {a:2})
    console.log(wm.get({a:2}))

    const a = new Map()

    a.set('asd' , 'as')
    console.log(a.get('asd'))
}
test1()
