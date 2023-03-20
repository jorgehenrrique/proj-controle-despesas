let criarCategorias = [];

// inputCriarCategoria
// Verifica se a categoria já existe, caso nao, cria uma
function cadastrarCategoria() { //-->>
    let inputCategoria = inputCriarCategoria.value.trim().toUpperCase().replace(' ', '-');

    if (inputCategoria !== '') {
        if (criarCategorias.length <= 0) {
            salvaCategoria(inputCategoria, geraID());
            exibirMensagens(true, 'Categoria adicionada com sucesso!');
        } else {
            if (verificaCategoria(inputCategoria)) {
                exibirMensagens(false, 'Categoria já existe!');
            } else {
                salvaCategoria(inputCategoria, geraID());
                exibirMensagens(true, 'Categoria adicionada com sucesso!');
            }
        }
    } else {
        exibirMensagens(false, 'Informe um valor válido!');
    }
    limpaForm();
    inputCriarCategoria.focus();
    alteraBtnVoltar(true);
};

// Verifica existencia de uma categoria
function verificaCategoria(inputCategoria) {
    let checador = 0;

    criarCategorias.forEach((categoria) => {
        if (inputCategoria === categoria.categoria) {
            checador++
        }
    });
    if (checador === 0) return false;
    return true;
}


const geraID = () => { // Gera id unico
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
};


function salvaCategoria(entradaCategoria, idgerado) {
    const categoria = {
        categoria: entradaCategoria,
        id: idgerado
    };

    criarCategorias.push(categoria);
    salvarCategoriasLocal();
    listarTabelaCategorias(criarCategorias);
}


function salvarCategoriasLocal() { // Salva lista local em JSON
    // converte array JS para JSON e salva local, ('nomeArquivo', arquivoJSON) || Otimizado
    localStorage.setItem('categorias', JSON.stringify(criarCategorias));
}

function alteraBtnVoltar(salvo) { // Altera o btn de cacelar para voltar
    if (salvo) {
        btnCancelarEdit.innerText = 'VOLTAR';
    } else {
        btnCancelarEdit.innerText = 'CANCELAR';
    }
}