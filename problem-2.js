const friends = ['Readwan', 'Sayem Ahmed', 'Sumon Rahat', 'Salman Ahmed', 'Imtiaz Tushar'];

const arrowFunction = friendList =>{
    const newArray = [];
    for(i = 0; i < friendList.length; i++){
        if(friendList[i].length % 2 == 0){
            newArray.push(friendList[i]);
        }
    }
    return newArray;
}

const result = arrowFunction(friends);
console.log(result);