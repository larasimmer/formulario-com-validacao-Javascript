let formularioCadastroProduto = document.getElementById("cadastro-produto");
let inputNome = document.getElementById("nome");
let spanErroNomeVazio = document.getElementById("erro-nome-vazio");
let inputPreco = document.getElementById("preco");
let spanErroPrecoVazio = document.getElementById("erro-preco-vazio");
let inputDescricao = document.getElementById("descricao");
let spanErroDescricaoVazia = document.getElementById("erro-descricao-vazia");

formularioCadastroProduto.onsubmit = realizaValidacoes;

function realizaValidacoes(event) {
    event.preventDefault();

    var nomePreenchido = validaInputNomeVazio();
    var precoPreenchido = validaInputPrecoVazio();
    aplicaMascaraMonetaria();
    var descricaoPreenchida = validaInputDescricaoVazia();

    if (nomePreenchido == false || precoPreenchido == false || descricaoPreenchida == false) {
        return false;
    } else {
        formularioCadastroProduto.submit();
    }
}

function validaInputNomeVazio() {
    let valorInputNome = inputNome.value;
    var nomePreenchido = false;

    if (valorInputNome.length <= 0) {
        spanErroNomeVazio.style.display = "block";
    } else {
        spanErroNomeVazio.style.display = "none";
        nomePreenchido = true;
    }

    return nomePreenchido;
}

function validaInputPrecoVazio() {
    let valorInputPreco = inputPreco.value;
    var precoPreenchido = false;

    if (valorInputPreco.length <= 0) {
        spanErroPrecoVazio.style.display = "block";
    } else {
        spanErroPrecoVazio.style.display = "none";
        valorPreenchido = true;
    }

    return precoPreenchido;
}

function aplicaMascaraMonetaria() {
    const args = {
        prefix: "R$",
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end'
    };
    
    const input = SimpleMaskMoney.setMask(inputPreco, args);
    
}

function validaInputDescricaoVazia() {
    let valorInputDescricao = inputDescricao.value;
    var descricaoPreenchida = false;

    if (valorInputDescricao.length <= 0) {
        spanErroDescricaoVazia.style.display = "block";
    } else {
        spanErroDescricaoVazia.style.display = "none";
        descricaoPreenchida = true;
    }

    return descricaoPreenchida;
}

