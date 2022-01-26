let funcionario = {
    nome: 'marcelo',

    chavePorta: true,
    chaveCozinha: false,
    chaveEscritorio: false
}

let cozinheiro = {
    nome: 'Rogério',

    chavePorta: true,
    chaveCozinha: true,
    chaveEscritorio: false
}

let gerente = {
    nome: 'Antônio',

    chavePorta: true,
    chaveCozinha: false,
    chaveEscritorio: true
}

let proprietario = {
    nome: 'Lourenço',

    chavePorta: true,
    chaveCozinha: true,
    chaveEscritorio: true
}

function abrirCoz(chaveCoz, chavePorta){
    if(chaveCoz == true && chavePorta == true){
        console.log('estar ás 9:hrs da manhã para abrir a cozinha.');
    }
}

abrirCoz(proprietario.chaveCozinha, proprietario.chavePorta)


