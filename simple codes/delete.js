// -------------------------------------------------- version 1

//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log(num[num.length - 1]);

// -------------------------------------------------- version 2
//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//let x = num[0];
//num[0] = num[1];
//num[1] = x

//console.log(num);

// -------------------------------------------------- version 3
//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let x =0;
// let y =1;
// while(y < num.length-1) {
//     x = num[y];
//     num[y] = num[y+1]
//     num[y+1] = x

//     y++
//     x =0
// }

// console.log(num);

// ------------------------------------------------- final version

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function delIndex(arrayP, i) {

let x =0;
let y =i;

    while(y < arrayP.length-1) {
        x = arrayP[y]
        arrayP[y] = arrayP[y+1]
        arrayP[y+1] = x

        y++
        x =0
    }

    arrayP.pop();
}

delIndex(num, 2)
console.log(num);