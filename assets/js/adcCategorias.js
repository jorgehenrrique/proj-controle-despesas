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
function limparMensagensAdcCategorias() {
    document.querySelector('.mensagem-sucesso').classList.add('none');
    document.querySelector('.mensagem-sucesso').classList.remove('mensagem-alerta');
}
setInterval(function () {
    limparMensagensAdcCategorias();
}, 10000);

// inputCriarCategoria
// edit/adc salvar
// Verifica se a categoria já existe, caso nao, cria uma
btnSalvarEdit.addEventListener('click', () => {
    let inputCategoria = inputCriarCategoria.value.trim().toUpperCase();
    if (inputCategoria !== '') {
        if (criarCategorias.length <= 0) {
            // criarCategorias.push(inputCategoria);
            salvaCategoria(inputCategoria);
            exibirMensagens(true, 'Categoria adicionada com sucesso!');
        } else {
            verificaCategoria(inputCategoria);
        }
    } else {
        exibirMensagens(false, 'Informe um valor válido!');
    }
    limpaForm();
    inputCriarCategoria.focus();
    tabelaCategoriasFiltrados.innerHTML = '';
    listarTabelaCategorias(criarCategorias);
});

// Verifica existencia de uma categoria
function verificaCategoria(inputCategoria) {
    let checador = 0;
    criarCategorias.forEach((categoria) => {
        if (inputCategoria === categoria.categoria) {
            exibirMensagens(false, 'Categoria já existe!');
            checador++;
        }
    });
    if (checador === 0) {
        // criarCategorias.push(inputCategoria);
        salvaCategoria(inputCategoria);
        exibirMensagens(true, 'Categoria adicionada com sucesso!');
    }
}


let identificador = 100;
function salvaCategoria(entradaCategoria) {
    const categoria = {
        categoria: entradaCategoria,
        id: identificador
    };

    criarCategorias.push(categoria);
    identificador++;
}