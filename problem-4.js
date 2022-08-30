
const arrowFunction = (firstArray, secondArray) => {
    const newArray = [...firstArray, ...secondArray];
    const maxValue = Math.max(...newArray);
    return maxValue;
}

firstArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
secondArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(arrowFunction(firstArray, secondArray));