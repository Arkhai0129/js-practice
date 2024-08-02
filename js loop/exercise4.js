let n = Number(prompt("Тоо оруулна уу?"));

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i * i <= num; i += 2) {  
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
