function createPerson(name, age) {
    return {
        name, age, greet: function () {
            console.log('xin chao toi ten la',name,'toi',age,'tuoi')
        }
    }
}

const p1 = createPerson('tri', 26)
p1.greet()
