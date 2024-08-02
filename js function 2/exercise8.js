// Тооны машин:
// Дээрхи 5 функцээ ашиглан тооны машины функц хийгээрэй ингэхдээ 3 удаа prompt ашиглан 1-р тоо, 2-р тоо, тэмдэг аван
// тэмдэг '+' байвал 2 тоог нэмээд,
// тэмдэг '-' байвал 2 тоог хасаад,
// тэмдэг '/' байвал 2 тоог хуваагаад,
// тэмдэг '*' байвал 2 тоог үржээд,
// тэмдэг '^' байвал зэргийг олоод үр дүнгээ alert ашиглан харуулна. Эдгээрээс бусад тохиолдолд 'аль нэг утга буруу байна' гэж харуулаад функцийг дахин эхлүүлнэ.

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

let number1 = Number(prompt("Та тоо 1-ыг оруулна уу?"))
let number2 = Number(prompt("Та тоо 2-ыг оруулна уу?"))
let operator = prompt("Та хамаарах үйлдлээ оруулна уу? /+, -, *, /, ^/")

if(operator == "+"){
    alert(add(number1, number2))
}
else if(operator == "-"){
    alert(minus(number1, number2))
}
else if(operator == "*"){
    alert(multiply(number1, number2))
}
else if(operator == "/"){
    alert(divide(number1, number2))
}
else if(operator == "^"){
    alert(degree(number1, number2))
}
else{
    alert("Та зөв утга оруулна уу?")
}