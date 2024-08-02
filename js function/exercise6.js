// Массив авч массив доторхи хамгийн их элементийг олдог findLargestElement нэртэй функц бич.

findLargestElement = () => {
    let arr = [5, 6, 10, 25, 10, 30, 100, 4, 8];
    let largestNumber = [0];

    for (let i = 0; i < arr.length; i++) {
        if(largestNumber < arr[i]){
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}

    console.log(findLargestElement());