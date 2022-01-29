let ex = [1, 2, 3, 4]
let ax = []



console.log(ex.length);


ax.push(ex[1]) //NA FUNÇÃO ENTRA O INDEX DA VARIAVEL QUE VC DESEJA COLOCAR NO FINAL
ex[1] = ex[3]
ex[3] = ax[0]


console.log(ex);