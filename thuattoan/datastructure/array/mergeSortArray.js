function mergeSortedArrays(arrayFirst, arraySecond){
    // check input
    if(!arrayFirst.length) return `Array First Invalid`
    if(!arraySecond.length)  return `Array Second Invalid`

    const mergedArray = [];
    // should use destructuring
    let firstItemArrFirst = arrayFirst[0];
    let firstItemArrSecond = arraySecond[0];
    let indexArrFirst = 1;
    let indexArrSecond = 1;

    while (firstItemArrFirst || firstItemArrSecond){
        // console.log(firstItemArrFirst ,'and' , firstItemArrSecond )
        if(firstItemArrSecond === undefined || firstItemArrFirst < firstItemArrSecond){
            mergedArray.push(firstItemArrFirst);
            firstItemArrFirst = arrayFirst[indexArrFirst];
            indexArrFirst++;
        }
        else {
            mergedArray.push(firstItemArrSecond);
            firstItemArrSecond = arraySecond[indexArrSecond];
            indexArrSecond++;
        }
    }
    return mergedArray;
}

const mergeArrRs = mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// const mergeArrErrRs = mergeSortedArrays([2,3], []);

console.log(mergeArrRs)
// console.log(mergeArrErrRs)