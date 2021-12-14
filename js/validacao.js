let inputNome = document.getElementById("nome");
let spanErroNome = document.getElementById("erro-nome");
let inputEmail = document.getElementById("email");
let spanErroEmailVazio = document.getElementById("erro-email-vazio");
let spanErroEmailInvalido = document.getElementById("erro-email-invalido");
let inputSenha = document.getElementById("senha");
let spanErroSenhaVazia = document.getElementById("erro-senha-vazia");
let spanErroSenhaInvalida = document.getElementById("erro-senha-invalida");
let botao = document.getElementById("botao");

botao.onclick = cliqueBotao;

function cliqueBotao(event) {
    validaInputNome();
    validaInputEmailVazio();
    validaInputEmailInvalido();
    validaInputSenhaVazio();
    validaInputSenhaInvalido();
}

function validaInputNome() {
    let valorInputNome = inputNome.value;
    if (valorInputNome.length <= 0) {
        spanErroNome.style.display = "block";
    } else {
        spanErroNome.style.display = "none";
    }  
}

function validaInputEmailVazio() {
    let valorInputEmail = inputEmail.value;
    if (valorInputEmail.length <= 0) {
        spanErroEmailVazio.style.display = "block";
    } else {
        spanErroEmailVazio.style.display = "none";
    }  
}

function validaInputEmailInvalido() {
    let valorInputEmail = inputEmail.value;
    if (!valorInputEmail.includes("@") && valorInputEmail.length > 0) {
        spanErroEmailInvalido.style.display = "block";
    } else {
        spanErroEmailInvalido.style.display = "none";
    }  
}

function validaInputSenhaVazio() {
    let valorInputSenha = inputSenha.value;
    if (valorInputSenha.length <= 0) {
        spanErroSenhaVazia.style.display = "block";
    } else {
        spanErroSenhaVazia.style.display = "none";
    }  
}

function validaInputSenhaInvalido() {
    let valorInputSenha = inputSenha.value;
    var validacaoTamanhoSenha = validaTamanhoSenha(valorInputSenha);
    var validacaoSenhaTemNumero = validaNumeroSenha(valorInputSenha);
    var validacaoSenhaTemLetraMaiuscula = validaLetrasMaiusculasSenha(valorInputSenha);
    var validacaoSenhaTemLetraMinuscula = validaLetrasMinusculasSenha(valorInputSenha);

    if (validacaoTamanhoSenha == false || validacaoSenhaTemNumero == false || validacaoSenhaTemLetraMaiuscula == false || validacaoSenhaTemLetraMinuscula == false) {
        spanErroSenhaInvalida.style.display = "block";
    } else {
        spanErroSenhaInvalida.style.display = "none";
    }
}

function validaTamanhoSenha(valorInputSenha) {
    if (valorInputSenha.length >= 6 && valorInputSenha.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function validaNumeroSenha(valorInputSenha) {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8,  9];
    var temNumero = false;
    numbers.forEach(function(number,index) {
        if (valorInputSenha.includes(number)) {
            temNumero = true;
        }
    });

    return temNumero;
}

function validaLetrasMaiusculasSenha(valorInputSenha) {
    let letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
    "Q", "R", "S", "T", "U", "V", "X", "Z", "Y", "W"];
    var temLetraMaiuscula = false;
    letrasMaiusculas.forEach(function(letraMaiuscula,index) {
        if (valorInputSenha.includes(letraMaiuscula)) {
            temLetraMaiuscula = true;
        }
    });

    return temLetraMaiuscula;
}

function validaLetrasMinusculasSenha(valorInputSenha) {
    let letrasMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", "x", "z", "y", "w"];
    var temLetraMinuscula = false;
    letrasMinusculas.forEach(function(letraMinuscula,index) {
        if (valorInputSenha.includes(letraMinuscula)) {
            temLetraMinuscula = true;
        }
    });

    return temLetraMinuscula;
}
