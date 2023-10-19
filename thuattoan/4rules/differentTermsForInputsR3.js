function compareBoxesTwice(boxes, boxes2) {
    //o(n)
    //depend on boxes
    boxes.forEach(boxes => {
        console.log(boxes)
    })
    //o(n)
    // depend on boxes2
    boxes2.forEach(boxes => {
        console.log(boxes)
    })
}
// a+b

// o(2n)
// here , we use remove constant so and then we have o(n)

// so now we say this is o(2n) , right ??
// No , so the first loop will base on param1 , the second loop will base on param2

// 2 loop different and them don't nest