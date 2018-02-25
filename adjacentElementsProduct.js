function adjacentElementsProduct(inputArray) {
    value = 0;
    for(var i = 0; i <= inputArray.length -1; i++){
        var newValue = inputArray[i] * inputArray[i+1];
        if(i === 0){
            value = newValue;
        }
        else if(newValue > value){
            value = newValue;
        }
    }
    return value;
}