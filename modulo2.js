/*
function gravidade(){
    console.log("A gravidade do planeta é: ")
    console.log(9.8)

}
*/

/*
function somar(n1,n2){
    let resultado = n2 + n1;
    console.log("Resultado: " + resultado)
}


somar(2,3)
*/

/*
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

let nomecompleto = nomeCompleto("Gabe", "Da Silva")

console.log(nomecompleto)
*/

/*
function maiorIdade(idade){
    if(idade >= 18)
        return true;
    else
        return false;
}

let idade = 19
console.log(maiorIdade(idade))
*/



//Ex 4
/*
function calcPct(x,y){
    let result = (y/x) * 100;
    return result
}

x = 40
y = 10
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`);
*/



//Ex 5
/*
function calcularImovel(metragem, quartos){
    try
    {
        let m2 = metragem * 3000
        if(quartos == 1)
            return m2
        else if(quartos == 2)
            return m2 * 1.2
        else 
            return m2 * 1.5
    }
    catch(error)
    {
        console.log(error)
    }   
}
    
let metragem = 123
let quartos = 3
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}!`)
*/


//Ex 6
/*
function validar(user, senha){
    if(user == "pedro" && senha == "123")
        return true
    
    return false
}

let user = "Gabe"
let senha = "1234"
let validacao = validar(user, senha)

if(validacao)
    console.log("Acesso concedido")
else
    console.log("Acesso negado")
*/




//Video Arrow function a seguir

/*
const somar = (x,y) => {
    return x + y;
}
console.log(somar(10,5))
*/

//const somar = (x,y) => x + y;

/*const sobrenome = (sob) => {
    return "Gabe " + sob
}*/

/*
const sobrenome = sob => "Gabe " + sob;

const sobrenome = (sob) => "Gabe " + sob;

const sobrenome = (sob) => {
    return "Gabe " + sob;
}
console.log(sobrenome("Jr"))
*/

/*
let count = 0

function add() {
    count++
}

add();
add();
console.log(count);
*/

/*
let count = 0

function add() {
    let count = 0 //Preferência em variável local
    count++
}

add();
add();
console.log(count); //fica 0, pois mexeu apenas na local da function e não global
*/

/*
const square = (x) =>{
    return x * x
}

function addSquares(a,b) {
    return square(a) + square(b)
}
*/
//Ou
/*function addSquares(a,b) {
    const square = (x) =>{ //uso de arrow function(const) para servir como function dentro de outra function, é uma ideia melhor
        return x * x
    }

    return square(a) + square(b)
}

console.log(addSquares(10,5))
*/

/*
let array = [1,2,3,4,5]

console.log(array.length)

array.forEach(element => {
    if(element == 5 || element == 1)
        console.log(element)
});

let nomes = ["gabe", "mika"]
let lista = ["blabla", nomes]
let lista2 = 
[
    "bla", 
    [
        "xx", 
        "yy"
    ]
]

console.log(lista2[1][0])//acessa "xx"
//ou
let achar = lista2[1]
console.log(achar[0])
*/

/*
let ingredientes = 
[
    "agua", 
    "farinha", 
    "ovo", 
    "leite"
]

ingredientes.push("açucar") //add ao array
ingredientes.pop() //retira o ultimo item do array
ingredientes.shift() //retira o primeiro item

console.log(`Total de ingredientes: ${ingredientes.length}`)
ingredientes.forEach(element => {
    console.log(element)
});
*/

//Ex 7
/*
let carros = ["BMW", "Ferrari", "Mercedes"]

const exibiCarros = () =>
{
    carros.forEach(element => {
        console.log(element)
    });
    console.log("---------------")
}
exibiCarros()

let posicao = carros[1]
console.log(`Posição 2: ${posicao}`)
console.log("---------------")

carros[1] = "Audi"
exibiCarros()

carros.push("Volvo")
exibiCarros()

console.log(`Há um total de ${carros.length} veículos na lista!`)
*/

/*
let personagem = 
{
    nome: "Gabe",
    idade: 19,
    pais: "brazil",
    forca: 5,
    olhos: ["preto", "azul"],
    endereco: 
    {
        bairro: "Barreiro"
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos!`)
console.log(personagem.endereco.bairro)
console.log(personagem.olhos[1])

personagem.forca = 10
console.log(personagem.forca)
personagem.olhos[0] = "verde"
personagem.olhos.push("castanho")
console.log(personagem.olhos)
*/

let personagem = 
{
    nome: "Gabe",
    idade: 19,
    carros: 
    [
        {modelo: "Mitsubishi", color: "Branco"},
        {modelo: "Chevrolet", color: "Preto"}
    ]
}

console.log(personagem.carros[0].modelo)
console.log(personagem)