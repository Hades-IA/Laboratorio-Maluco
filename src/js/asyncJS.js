//callbacks
const times = (func, fakeCallBack, time = 10 * 1000) => setTimeout(() => {


    let result = [...func];

    let modelos = result.map(data => {
        return data.map(array => array.modelo)
    });

    let valores = result.map(data => {
        return data.map(array => array.valor).reduce((acc, next) => acc + next);
    });
    console.log(valores)
    const total = valores.reduce((acc, next) => acc + next).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
    console.log(total)

    fakeCallBack({ modelos, total });

}, time);



function consoles(...value) {
    return value
};


const carros = [{ modelo: "aoma", valor: 1000 }, { modelo: 'motorola', valor: 1000 }, { modelo: 'nasa', valor: 1000 }];

const motos = [{ modelo: "aookd", valor: 1000 }, { modelo: 'maomao', valor: 1000 }];

const barcos = [{ modelo: '1af', valor: 1000 }];


times(consoles(carros, motos, barcos), (event) => {
    console.log(`email enviado para ocnfirma lista de produtos: ${event.modelos}.
total a pagar : ${event.total}.
`)
}, 3 * 1000);


console.log('processo em andamento te enviariemos um email em instantes');


//promises



const urlPokeomon = "https://pokeapi.co/api/v2/pokemon/";
function ShearchPokemon(url, name) {
    fetch(url + name)
        .then(response => response.json())
        .then(data => {
            pokemon = data;
            console.log(pokemon)
            document.getElementById("async").innerHTML = pokemon.name;
        })
        .catch(err => console.log(err));
}
ShearchPokemon(urlPokeomon, '1');
