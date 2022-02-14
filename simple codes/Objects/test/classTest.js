export default class Human{

    

    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender

        this.nasc = 'brasileiro'
    }

    info(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
        console.log(this.nasc);
    }
}



