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

const inputPokemon = getElement('pokemonName', 'id');
const urlPokeomon = "https://pokeapi.co/api/v2/pokemon/";


async function ShearchPokemon(url, name) {
    console.log('gif esperando')
    var pokemon = await fetch(url + name)
        .then(response => response.json())
        .catch(err => {
            console.log("erro é : " + err);
            return 'Erro, pokemon not find!'
        });
    console.log(pokemon)
    console.log('gif some e desenha tabela do pokemon')




    document.getElementById("async").innerHTML += pokemon.name || pokemon;


};


function getElement(element, type) {

    var target;

    switch (type) {
        case 'id': target = document.getElementById(element)

            break;
        case 'class': target = document.getElementsByClassName(element)[0]

            break;
        case 'all': target = document.querySelectorAll(element)

            break;
        case 'first': target = document.querySelector(element)

            break;
        default: console.log('nenhum type passado')
            break;
    };
    return target;

};


inputPokemon.addEventListener('submit', (event) => {

    event.preventDefault();
    let input = document.getElementsByName("PokemonTarget")[0];
    console.log(input)
    var pokemon = input.value;
    console.log(pokemon)
    ShearchPokemon(urlPokeomon, pokemon);

    input.value = '';

});

try {
    c = 'ad'

    b = a

    d = arw4
} catch (error) {
    console.log(error)
}

console.log('codigo n parou')