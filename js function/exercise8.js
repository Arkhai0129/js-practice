// Нэмэлт: Массив авч өгөгдсөн элементүүдийг багаас их рүү нь эрэмбэлдэг sortArray нэртэй функц бич.
let numbers = [10, 5, 100, 50, 1];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) { 
        for (let j = 0; j < n - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) { 
            
                let temp = arr[j];
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp; 
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers); 
