// Өгсөн тоо хүртэлх палиндром тоо:
// Дасгал 1 дээр хэрэгжүүлсэн функцээ ашиглан өгөгдсөн тоо хүртэл бүх палиндром тоог 1 массивт хийн alert ашиглан харуулдаг функц бичээрэй. Утгаа prompt ашиглах авна.

let givenNumber = Number(prompt("Та дурын тоогоо оруулна уу?"));
let palindromNumber = [];

isPalindrom = (num) => {
    let numStr = num.toString()
    let numArr = numStr.split("");
    let reversedArr = [...numArr].reverse()

    for (let i = 0; i < numArr.length; i++) {
        if(reversedArr[i] == numArr[i]){
            return true
        }
        else{
            return false
        }
    }
}

for (let i = 1; i <= givenNumber; i++) {
    isPalindrom(i)
    if(isPalindrom(i) == true){
        palindromNumber.push(i)
    } 
}
alert(givenNumber + " хүртэл палиндром тоонууд: " + palindromNumber.join(", "))

