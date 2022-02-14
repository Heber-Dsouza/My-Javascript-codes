let value = 100
let sale = 80


function desc (valor, perc) {
    function error (perc) {
        if (perc > 100 || perc < 0) {
            return false
        }
    }
    while (error(perc) != false) {
        let x = perc / 100
        x = Math.abs(x -= 1)
    
        return Math.round(valor * x)

    } 
}

if(desc(value, sale) == undefined) {
    console.log('ERROR: Digite um número entre 0 e 100');
} else{
    console.log('O valor que você deverá pagar é : R$', desc(value, sale)+',00');
}


