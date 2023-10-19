// drop non dominants === 'loai bo cac ben khong phu thuoc'

function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

// if 3 nested loops , so 99% is a bad idea
printAllNumbersThenAllPairSums([1,2,3,4,5])