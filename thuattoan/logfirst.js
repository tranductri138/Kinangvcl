const boxes = [0, 1, 2, 3]


const logItem = (array) => {
    const [firstItem, secondItem] = array
    console.log(firstItem) // O(1)
    console.log(secondItem) // O(1)

    // constant number O1
}

logItem(boxes) // O(2)