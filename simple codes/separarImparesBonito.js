let myNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
let myOdd = [] 
let x = []  


for (let j = 0; j < myNum.length;) {
    if (myNum[j] % 2 == 1) {
        myOdd.push(myNum[j])

        x.push(myNum[j])
        myNum[j] = myNum[myNum.length - 1]
        myNum[myNum.length - 1] = x[0]

        myNum.splice(myNum.length - 1)

        j = 0
    }

    x.pop()
    j++
}

myNum.sort()
myOdd.sort()

console.log(myOdd);
console.log(myNum);