let inputNome = document.getElementById("nome");
let spanErroNome = document.getElementById("erro-nome");
let inputEmail = document.getElementById("email");
let spanErroEmailVazio = document.getElementById("erro-email-vazio");
let spanErroEmailInvalido = document.getElementById("erro-email-invalido");
let botao = document.getElementById("botao");

botao.onclick = cliqueBotao;

function cliqueBotao(event) {
    validaInputNome();
    validaInputEmailVazio();
    validaInputEmailInvalido();
}

function validaInputNome() {
    let valorInputNome = inputNome.value;
    if(valorInputNome.length <= 0) {
        spanErroNome.style.display = "block";
    } else {
        spanErroNome.style.display = "none";
    }  
}

function validaInputEmailVazio() {
    let valorInputEmail = inputEmail.value;
    if(valorInputEmail.length <= 0) {
        spanErroEmailVazio.style.display = "block";
    } else {
        spanErroEmailVazio.style.display = "none";
    }  
}

function validaInputEmailInvalido() {
    let valorInputEmail = inputEmail.value;
    if(!valorInputEmail.includes("@")) {
        spanErroEmailInvalido.style.display = "block";
    } else {
        spanErroEmailInvalido.style.display = "none";
    }  
}