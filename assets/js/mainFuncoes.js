let criarCategorias = [];

function exibirMensagens(status, mensagem) {
    document.querySelector('.mensagem-sucesso').innerHTML = mensagem;
    if (status) {
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
// Verifica se a categoria já existe, caso nao, cria uma
btnSalvarEdit.addEventListener('click', () => {
    let inputCategoria = inputCriarCategoria.value.trim().toUpperCase();
    if (inputCategoria !== '') {
        if (criarCategorias.length <= 0) {
            criarCategorias.push(inputCategoria);
            exibirMensagens(true, 'Categoria adicionada com sucesso!');
        } else {
            verificaCategoria(inputCategoria);
        }
    } else {
        exibirMensagens(false, 'Informe um valor válido!');
    }
    limpaForm();
    console.log(criarCategorias);
});
setInterval(function () {
    limparMensagens();
}, 10000);

// Verifica existencia de uma categoria
function verificaCategoria(inputCategoria) {
    let checador = 0;
    criarCategorias.forEach((categoria) => {
        if (inputCategoria === categoria) {
            exibirMensagens(false, 'Categoria já existe!');
            checador++;
        }
    });
    if (checador === 0) {
        criarCategorias.push(inputCategoria);
        exibirMensagens(true, 'Categoria adicionada com sucesso!');
    }
}