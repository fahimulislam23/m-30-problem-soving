const array = [2, 4, 3, 5, 8, 6, 10];
const arrowFunction = array => {
    let sum = 0;
    for(i = 0; i < array.length; i++){
        const square = Math.pow(array[i], 2);
        console.log(square);
        sum = sum + square;
        console.log(sum);
    }
    const aveargeValue = sum / array.length;
    return aveargeValue;
}

console.log(arrowFunction(array));