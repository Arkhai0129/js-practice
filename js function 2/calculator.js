// 2 тоог нэмэх
const add = (a,b) => {
    let result = a + b;
    return result;
} 
// 2 тоог хасах
const minus = (a,b) => {
    let result = a - b;
    return result;
}
// 2 тоог үржих
const multiply = (a,b) => {
    let result = a * b;
    return result;
} 
//2 тоог хуваах
const divide = (a,b) => {
    let result = a / b;
    return result;
}

//тооны зэрэг олох
const degree = (a,b) => {
    let result = a ** b;
    return result;
}

let number = prompt("Та тооны машинд үйлдэл оруулна уу?")
let numberArr = number.split("")
number1 = parseInt(numberArr[0])
number2 = parseInt(numberArr[2])


if(numberArr[1] == "+"){
    alert(add(number1, number2))
}
else if(numberArr[1] == "-"){
    alert(minus(number1, number2))
}
else if(numberArr[1] == "*"){
    alert(multiply(number1, number2))
}
else if(numberArr[1] == "/"){
    alert(divide(number1, number2))
}
else if(numberArr[1] == "^"){
    alert(degree(number1, number2))
}
else{
    alert("Та зөв утга оруулна уу?")
}