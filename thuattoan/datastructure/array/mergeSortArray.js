function mergeSortedArrays(arrayFirst, arraySecond){
    // check input
    if(!arrayFirst.length) return `Array First Invalid`
    if(!arraySecond.length)  return `Array Second Invalid`

    const mergedArray = [];
    // should use destructuring
    let arrFirstItem = arrayFirst[0];
    let arrSecondItem = arraySecond[0];
    let indexArrFirst = 1; // value next ==> because assign and then ++
    let indexArrSecond = 1;

    // recursion
    while (arrFirstItem || arrSecondItem){
        // risk first : value === 0 also can not access because condition of while(...=> condition)
        // risk second : if u use && instead || will miss last element
        console.log(arrFirstItem ,'and' , arrSecondItem )
        if(arrSecondItem === undefined || arrFirstItem < arrSecondItem){
            // condition array F < arr Sec of === so throw case 2
            // if in case
            mergedArray.push(arrFirstItem);
            arrFirstItem = arrayFirst[indexArrFirst]; // 1  assign
            indexArrFirst++; // 2
        }
        else {
            mergedArray.push(arrSecondItem);
            arrSecondItem = arraySecond[indexArrSecond];
            indexArrSecond++;
        }
    }
    return mergedArray;
}

const mergeArrRs = mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// const mergeArrErrRs = mergeSortedArrays([2,3], []);

console.log(mergeArrRs)
// console.log(mergeArrErrRs)