// Өгсөн онооны үсгэн үнэлгээг олдог "checkPoint" нэртэй функц бич
// - 90 : 'A'
// - 80 - 89: 'B'
// - 70 - 79: 'C'
// - 60 - 69: 'D'
// - < 60 : 'F'
// функц дээрхийн дагуу console руу хэвлэх ёстой.

let checkPoint = (a) =>{
    result = "";
    if (a <= 100 && a > 89){
        result = "A"
    }
    else if(a < 90 && a > 79){
        result = "B"
    }
    else if(a < 80 && a > 69){
        result = "C"
    }
    else if(a < 70 && a > 59){
        result = "D"
    }
    else if(a < 60 && a >= 0){
        result = "F"
    }
    else{
        result = "Та зөв утга оруулна уу?"
    }
return result;
}
console.log("Үсгэн үнэлгээ: " + checkPoint(90));