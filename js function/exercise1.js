let calculate = () => {
    let numbers = prompt("Та A, B, C гэх 3 утга оруулна уу?");
    let numberArr = numbers.split(" ");
  
    let num1 = parseInt(numberArr[0], 10);
    let num2 = parseInt(numberArr[1], 10);
    let num3 = parseInt(numberArr[2], 10);
    
    let A = num1 * num2 - num3;
    
    return A;
}

let result = calculate();

console.log(result);