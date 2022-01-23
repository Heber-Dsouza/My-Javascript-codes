

let human= {

    nome: 'Lourenço',
    age: 25,

    eat: function() {
        console.log(this.nome+' está comendo uma pizza.');
    },
    drink: function() {
        console.log(this.nome+' está bebendo refrigerante.');
    },
    sleep: function() {
        console.log(this.nome+ ' foi dormir');
    }
};

function info(){
    console.log(human.nome);
    console.log(human.age);
    human.eat();
    human.drink();
    human.sleep();
    
}

info();
