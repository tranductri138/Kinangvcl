function anotherF() {

}

function funChallenger(input) {
    let a = 10 //o1
    a = 50 + 3 //o1

    input.forEach(x => { // o(n)
            anotherF() // o(n)
            let stranger = true // o(n)
            a++ // o(n)
        }
    )

    return a // o1
}

// o(1) + o(1) + o(n) + o(n) + o(n) + o(n) + o(1)
// big O (3+4n)
// so to easier ==> O(n)

// 4 rules to follow

// rule 1 : worst case
// rule 2 : remove constants
// rule 3 : different terms for inputs
// rule 4 : drop non dominants
