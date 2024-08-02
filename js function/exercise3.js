//Гараас өгсөн 2 тооны ихийг олж буцаадаг "max" нэртэй функц бич

let max = (a, b) =>{

    let larger = (a > b) ? a : b;
    return larger;
}
console.log("Их тоо: " + max(500, 100));