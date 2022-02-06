let numero, mult, limite

numero = 1;
mult = 1;

limite = 10

while(numero<= limite) {

    while(mult<= limite) {
        console.log(numero+ " x "+ mult+ " = "+ numero*mult);
        mult++;
    }
    mult = 1
    numero++
    console.log("\n");
}



