// clase sempre uma por arquivo no node e o arquivo e classe smepre tem q ter noma 
// maiusculo e exatamente o mesmo no da clase no arquivo
class Pet {
    constructor(pet) {
        this.name = pet.name;
        this.age = pet.age;
        this.race = pet.race;
        this.size = ['small', 'avarege', 'big'].filter(size => size === pet.size);
        this.price = pet.price;
    }

    Display() {
        let Display = { name: this.name, age: this.age, race: this.race, price: this.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) };
        return Display;
    }


}
cachorro = {
    name: 'doginho',
    age: 5,
    race: 'viralata caramelo',
    size: 'avarege',
    price: 50
}
c = new Pet(cachorro);

b = c.Display();
console.log(b)

