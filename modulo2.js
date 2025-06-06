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