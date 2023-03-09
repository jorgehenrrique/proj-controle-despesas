let criarCategorias = [];

function exibirMensagens(status, mensagem) {
    document.querySelector('.mensagem-sucesso').innerHTML = mensagem;
    if (status){
        document.querySelector('.mensagem-sucesso').classList.remove('mensagem-alerta');
        document.querySelector('.mensagem-sucesso').classList.remove('none');
    } else {
        document.querySelector('.mensagem-sucesso').classList.add('mensagem-alerta');
        document.querySelector('.mensagem-sucesso').classList.remove('none');
    }
}
function limparMensagens() {
    document.querySelector('.mensagem-sucesso').classList.add('none');
    document.querySelector('.mensagem-sucesso').classList.remove('mensagem-alerta');
}

// inputCriarCategoria
// edit salvar
btnSalvarEdit.addEventListener('click', () => {
    if (inputCriarCategoria.value.trim() !== ''){
        criarCategorias.push(inputCriarCategoria.value.toUpperCase());
        exibirMensagens(true, 'Categoria adicionada com sucesso!');
    } else {
        exibirMensagens(false, 'Informe um valor válido!');
    }
    limpaForm();
    console.log(criarCategorias);
});
setInterval(function() {
    limparMensagens();
}, 10000);