let carro = {
    marca:'toyota',
    modelo:'corola',
    ano:2022,
    cor: 'cinza'
}

for(let property in carro) {
    console.log(property+' --> '+carro[property]);
}