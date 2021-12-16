let formularioCadastroProduto = document.getElementById("cadastro-produto");
let inputNome = document.getElementById("nome");
let spanErroNomeVazio = document.getElementById("erro-nome-vazio");
let inputPreco = document.getElementById("preco");
let spanErroPrecoVazio = document.getElementById("erro-preco-vazio");
let inputDescricao = document.getElementById("descricao");
let spanErrodescricaoVazia = document.getElementById("erro-descricao-vazia");

formularioCadastroProduto.onsubmit = realizaValidacoes;

function realizaValidacoes(event) {
    event.preventDefault();
    validaInputNomeVazio();
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

