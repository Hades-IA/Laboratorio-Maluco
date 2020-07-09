// clase sempre uma por arquivo no node e o arquivo e classe smepre tem q ter noma 
// maiusculo e exatamente o mesmo no da clase no arquivo
class Pet {
    constructor(pet) {
        this.name = pet.name;
        this.age = pet.age;
        this.race = pet.race;
        this.size = ['small', 'avarege', 'big'].filter(size => size === pet.size);
        this.price = pet.price;
    };

    Display() {
        let Display = { name: this.name, age: this.age, race: this.race, price: this.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) };
        return Display;
    };


};
class RandomNumber {
    Roll(max, min = 0, txt) {
        min = Math.ceil(min);
        max = Math.floor(max) + 1;

        let result = Math.floor(Math.random() * (max - min)) + min;

        let msg = txt || 'valor invalido! porfavor insira um numero!';
        try {
            if (isNaN(result)) throw new Error(msg);
        } catch (error) {
            return console.error(error);
        };



        return result;
    };
};
cachorro = {
    name: 'doginho',
    age: 5,
    race: 'viralata caramelo',
    size: 'avarege',
    price: 50
};
c = new Pet(cachorro);

b = c.Display();
console.log(b);

// qualque numero de faces, retornar com metodo um numero aleatorio q n ultrapasse o maximo ou mino de lados

class Dado {
    constructor(dado, min) {
        this.face = Number(dado);
        this.result = new RandomNumber();
        this.min = Number(min) || 1;
    };
    Rolar(max, min) {
        max = max || this.face;
        min = min || this.min;

        return this.result.Roll(max, min);






    };
};
novodado = new Dado(10);
b = novodado.Rolar();
console.log(b);
//herança
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    AnimalAge() { return this.age; };
};
class Doginho extends Animal {
    constructor(name, age, size) {
        super(name, age);
        this.size = size;
    };
    Roar() {
        console.log('gaarrarrr');
    };
    NewFunctions() {

        console.log('new functions and old methods', super.AnimalAge());
    };
    Display() {
        console.log(this.name, this.age, this.size);
    };
};

dog = new Doginho('as', 10, 'big');
console.log(dog.AnimalAge());
dog.Roar();
dog.NewFunctions();
dog.Display();