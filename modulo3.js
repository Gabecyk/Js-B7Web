//Dom
// DOM = Document Obeject Model
/*
let c = (query) => document.querySelector(query);
c(".a").innerHTML = "ola";
*/

/*
let a = document.getElementsByTagName("h1")

console.log(a)
*/
/*
let a = document.querySelectorAll("#teste > ul > li");

a.forEach(element => {
    element.innerHTML = "aksd"
});
*/

/*
document.querySelector("h1").addEventListener('click', () => {
    document.querySelector("h1").innerHTML = "Hello"
})

document.querySelector("ul").classList.add("eae")
document.querySelector(".eae").innerHTML = "eae"
*/

/*
function clicou() {
    console.log("clicou no botão")
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', () => clicou()
);

document.querySelector(".btn").style.backgroundColor = "red";
*/
/*
function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")
    
    //ul.innerHTML += "<li> Item Alterado </li>"
    //ul.children[0].innerHTML = "Item <strong>Alterado</strong>"
    //console.log(ul.outerHTML) //outer mexe com o de fora o UL no caso

    ul.children[0].append("(alterado)"); //append adiciona conteudo no conteudo. Concatena simplesmente

    //adicionar novo item
    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";
    ul.appendChild(newLi) //appendChild adiciona como tag filha e precisa ja da variável para adicionar como o newLi
    ul.prepend(newLi)//adiciona como primeiro ao inves do append em ultimo

    ul.innerHTML += "<li>Item adicionado</li>"; //gera mesmo efeito de cima, mas esse processamento é pior 
}
*/

/*
function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")

    
    let newButton = document.createElement("button")
    newButton.innerHTML = "Botão"
    ul.after(newButton)//adiciona depois da tag ul
    ul.before(newButton)//coloca antes da tag ul
    
   
   let newUl = document.createElement("ul");
   for(let i = 0; i < 5; i++){
       let newLi = document.createElement("li")
       newLi.innerHTML = "Item add " + (i+1)
       newUl.append(newLi)
    }
    ul.after(newUl)
}
*/
/*
let clicou = () => {
    const input = document.querySelector(".input")
    
    if(input.hasAttribute("placeholder")) 
    console.log("Tem placeholder")
    else
    console.log("Não tem placeholder")
    

    let btn = document.querySelector(".btn")

    if(input.getAttribute("type") == "password"){
        input.setAttribute("type", "text")
        btn.innerHTML = "Esconder senha"
    }
    else{
        input.setAttribute("type", "password")
        btn.innerHTML = "Mostrar senha"
    }
}
*/

//Manipulando CSS
/*
function clicou() {
    const li = document.querySelector("li");

    li.style.backgroundColor = "green"
    
}
*/
/*
let s= "string"
if(s.includes("t"))
    console.log(1)

function clicou() {
    const btn = document.querySelector(".btn");
    //btn.classList.add("verde")
    //btn.classList.remove("azul")

    
    if(btn.classList.contains("azul")){
        btn.classList.remove("azul")
        btn.classList.add("verde")
    } else {
        btn.classList.remove("verde")
        btn.classList.add("azul")
    }
    

    //btn.classList.replace("azul", "verde")//troca azul por verde
    //btn.classList.toggle("azul")//caso tiver a classe azul ele tira, e se n tiver ele adiciona

    if(btn.classList.contains("azul")){
        btn.classList.replace("azul", "verde")
    } else {
        btn.classList.replace("verde", "azul")
    }

    console.log(btn.classList)
}
*/
