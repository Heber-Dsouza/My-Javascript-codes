console.log("1- Youtube 2-Google 3-Facebook 4-Sair");
console.log("Sua opção:");

let choose = 1
let i = true

while(i == true){
    switch (choose) {
        case 1:
            console.log("Abrindo Youtube");
            i = false;
            break;
        case 2:
            console.log("Abrindo Google");
            i = false;
            break;
        case 3:
            console.log("Abrindo 3-Facebook");
            i = false;
            break;
        case 4:
            console.log("Saindo do programa......");
            i = false;
            break;
        default:
            console.log("Digite um número válido.");
            break;
            
    }
    
    }