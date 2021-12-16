let inputNome = document.getElementById("nome");
let spanErroNome = document.getElementById("erro-nome");
let inputEmail = document.getElementById("email");
let spanErroEmailVazio = document.getElementById("erro-email-vazio");
let spanErroEmailInvalido = document.getElementById("erro-email-invalido");
let inputSenha = document.getElementById("senha");
let spanErroSenhaVazia = document.getElementById("erro-senha-vazia");
let spanErroSenhaInvalida = document.getElementById("erro-senha-invalida");
let inputNascimento = document.getElementById("nascimento");
let spanErroNascimentoVazio = document.getElementById("erro-nascimento-vazio");
let spanErroNascimentoInvalido = document.getElementById("erro-nascimento-invalido");
let inputCpf = document.getElementById("cpf");
let spanErroCpfVazio = document.getElementById("erro-cpf-vazio");
let spanErroCpfInvalido = document.getElementById("erro-cpf-invalido");
let inputCep = document.getElementById("cep");
let spanErroCepVazio = document.getElementById("erro-cep-vazio");
let inputLogradouro = document.getElementById("logradouro");
let spanErroLogradouroVazio = document.getElementById("erro-logradouro-vazio");
let inputCidade = document.getElementById("cidade");
let spanErroCidadeVazia = document.getElementById("erro-cidade-vazia");
let inputEstado = document.getElementById("estado");
let spanErroEstadoVazio = document.getElementById("erro-estado-vazio");

let formularioCadastro = document.getElementById("registration-form");

formularioCadastro.onsubmit = realizaValidacoes;

function realizaValidacoes(event) {
    event.preventDefault();
    var nomeValidado = validaInputNome();
    var emailPreenchido = validaInputEmailVazio();
    var emailValidado = validaInputEmailInvalido();
    var senhaPreenchida = validaInputSenhaVazio();
    var senhaValidada = validaInputSenhaInvalido();
    var nascimentoPreenchido = validaInputNascimentoVazio();
    var cpfPreenchido = validaInputCpfVazio();
    var cepPreenchido = validaInputCepVazio();
    var logradouroPreenchido = validaInputLogradouroVazio();
    var cidadePreenchida = validaInputCidadeVazio();
    var estadoPreenchido = validaInputEstadoVazio();

    if (nomeValidado == false || emailPreenchido == false || emailValidado == false || senhaPreenchida == false || 
        senhaValidada == false || nascimentoPreenchido == false || cpfPreenchido == false || cepPreenchido == false ||
        logradouroPreenchido == false || cidadePreenchida == false || estadoPreenchido == false) {
            return false;
        } else {
            formularioCadastro.submit();
        }
}

function validaInputNome() {
    var nomeValidado = false;
    let valorInputNome = inputNome.value;
    if (valorInputNome.length <= 0) {
        spanErroNome.style.display = "block";
    } else {
        spanErroNome.style.display = "none";
        nomeValidado = true;
    }  

    return nomeValidado;
}

function validaInputEmailVazio() {
    var emailPreenchido = false;
    let valorInputEmail = inputEmail.value;
    if (valorInputEmail.length <= 0) {
        spanErroEmailVazio.style.display = "block";
    } else {
        spanErroEmailVazio.style.display = "none";
        emailPreenchido = true;
    }  

    return emailPreenchido;
}

function validaInputEmailInvalido() {
    var emailValidado = false;
    let valorInputEmail = inputEmail.value;
    if (!valorInputEmail.includes("@") && valorInputEmail.length > 0) {
        spanErroEmailInvalido.style.display = "block";
    } else {
        spanErroEmailInvalido.style.display = "none";
        emailValidado = true;
    }  

    return emailValidado;
}

function validaInputSenhaVazio() {
    var senhaPreenchida = false;
    let valorInputSenha = inputSenha.value;
    if (valorInputSenha.length <= 0) {
        spanErroSenhaVazia.style.display = "block";
    } else {
        spanErroSenhaVazia.style.display = "none";
        senhaPreenchida = true;
    }  

    return senhaPreenchida;
}

function validaInputSenhaInvalido() {
    let valorInputSenha = inputSenha.value;
    var senhaValidada = false;
    var validacaoTamanhoSenha = validaTamanhoSenha(valorInputSenha);
    var validacaoSenhaTemNumero = validaNumeroSenha(valorInputSenha);
    var validacaoSenhaTemLetraMaiuscula = validaLetrasMaiusculasSenha(valorInputSenha);
    var validacaoSenhaTemLetraMinuscula = validaLetrasMinusculasSenha(valorInputSenha);

    if (validacaoTamanhoSenha == false || validacaoSenhaTemNumero == false || validacaoSenhaTemLetraMaiuscula == false || validacaoSenhaTemLetraMinuscula == false) {
        spanErroSenhaInvalida.style.display = "block";
    } else {
        spanErroSenhaInvalida.style.display = "none";
        senhaValidada = true;
    }

    return senhaValidada;
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

function validaInputNascimentoVazio() {
    var nascimentoPreenchido = false;
    let valorInputNascimento = inputNascimento.value;
    if (valorInputNascimento.length <= 0) {
        spanErroNascimentoVazio.style.display = "block";
    } else {
        spanErroNascimentoVazio.style.display = "none";
        nascimentoPreenchido = true;
    }
    
    return nascimentoPreenchido;
}

function validaInputCpfVazio() {
    var cpfPreenchido = false;
    let valorInputCpf = inputCpf.value;
    if (valorInputCpf.length <= 0) {
        spanErroCpfVazio.style.display = "block";
    } else {
        spanErroCpfVazio.style.display = "none";
        cpfPreenchido = true;
    }
    
    return cpfPreenchido;
}

function validaInputCepVazio() {
    var cepPreenchido = false;
    let valorInputCep = inputCep.value;
    if (valorInputCep.length <= 0) {
        spanErroCepVazio.style.display = "block";
    } else {
        spanErroCepVazio.style.display = "none";
        cepPreenchido = true;
    }
    
    return cepPreenchido;
}

function validaInputLogradouroVazio() {
    var logradouroPreenchido = false;
    let valorInputLogradouro = inputLogradouro.value;
    if (valorInputLogradouro.length <= 0) {
        spanErroLogradouroVazio.style.display = "block";
    } else {
        spanErroLogradouroVazio.style.display = "none";
        logradouroPreenchido = true;
    }
    
    return logradouroPreenchido;
}

function validaInputCidadeVazio() {
    var cidadePreenchida = false;
    let valorInputCidade = inputCidade.value;
    if (valorInputCidade.length <= 0) {
        spanErroCidadeVazia.style.display = "block";
    } else {
        spanErroCidadeVazia.style.display = "none";
        cidadePreenchida = true;
    }
    
    return cidadePreenchida;
}

function validaInputEstadoVazio() {
    var estadoPreenchido = false;
    let valorInputEstado = inputEstado.value;
    if (valorInputEstado.length <= 0) {
        spanErroEstadoVazio.style.display = "block";
    } else {
        spanErroEstadoVazio.style.display = "none";
        estadoPreenchido = true;
    }
    
    return estadoPreenchido;
}