// prompt ашиглан хэрэглэгчээс n гэсэн тоог авч 1-с n хүртэл *-ийг дараах байдлаар console-руу хэвлээрэй.

let n = Number(prompt("Тоо оруулна уу?"));
let astrics = "*"

for (let i = 1; i <= n; i++) {
    console.log(astrics.repeat(i))
}




