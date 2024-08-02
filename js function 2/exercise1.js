// Өгөгдсөн тоог палиндром тоо мөн эсэхийг шалгадаг функц бичээрэй. Функцээ prompt ашиглан утга авч alert ашиглан харуулж шалгаарай.
// (Палиндром тоо гэдэг нь ардаасаа урдаасаа ижил уншигддаг тоог хэлнэ.)

let number = Number(prompt("Та тоо оруулна уу?"));

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
if (isPalindrom(number) == true){
    alert("Палиндром тоо мөн байна. Тоо: " + number);
}
else if (isPalindrom(number) == false){
    alert("Палиндром тоо биш байна. Тоо: " + number)
}
