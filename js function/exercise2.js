//Гараас хоног, цаг өгсөн бол нийт цаг болохыг олдог "totalTime" нэртэй функц бичээрэй.
//day буюу хоног, time буюу цаг өгсөн 2 хувьсагч байх ба нийт хэдэн цаг байгааг тооцон totalTime хувьсагчид хадгалан console.log ашиглан харуулаарай.

let totalTime = (day, time) => {
    let result = (day *24) + time;
    return result
}

console.log(totalTime(5, 11));