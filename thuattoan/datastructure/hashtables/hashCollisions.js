const user = {
    age :25,
    name : 'Tris',
    magic : true,
    scream : function () {
        console.log('hihii')
    }
}

const smile = user.scream() // O(1)
console.log(user.age)
console.log(user.name)


//Map --> Gives you some order
//Set --> No duplicate keys
