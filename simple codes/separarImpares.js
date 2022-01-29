let myNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] //ARRAY COMPLETO
let myOdd = [] //ARRAY PARA ARMAZENAR OS NÚMEROS ÍMPARES
let x = []  //ARRAY PARA ARMAZENAMENTO TEMPORÁRIO

//SERÁ IDENTIFICADO OS NÚMEROS ÍMPARES E SERÃO TODOS COLOCADOS NO ARRAY APROPRIADO, MAS NÃO HAVERÁ
//NENHUM TIPO DE EXCLUSÃO
for(let i in myNum) {
    if(myNum[i] % 2 == 1){
        myOdd.push(myNum[i])
    }
}

// AGORA OS NÚMEROS ÍMPARES SERÃO EXCLUÍDOS
for (let j = 0; j < myNum.length;) {
    if (myNum[j] % 2 == 1) {

        //o número ímpare é trocado de posição com o último elemento...
        x.push(myNum[j])
        myNum[j] = myNum[myNum.length-1]
        myNum[myNum.length - 1] = x[0]

        //... e agora é excluído
        myNum.splice(myNum.length-1)
        
        j=0
    }

    x.pop()
    j++
}

myNum.sort()

console.log(myOdd);
console.log(myNum);




