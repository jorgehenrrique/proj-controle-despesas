let criarCategorias = [];

// inputCriarCategoria
function cadastrarCategoria() { //-->>
    let inputCategoria = inputCriarCategoria.value.trim().toUpperCase().replace(' ', '-');

    if (inputCategoria !== '') {
        if (criarCategorias.length <= 0) {
            salvaCategoria(inputCategoria, geraID());
            exibirMensagens(true, 'Categoria adicionada com sucesso!');
            setTimeout(limparMensagens, 3000);
        } else {
            if (verificaCategoria(inputCategoria)) {
                exibirMensagens(false, 'Categoria já existe!');
                setTimeout(limparMensagens, 3000);
            } else {
                salvaCategoria(inputCategoria, geraID());
                exibirMensagens(true, 'Categoria adicionada com sucesso!');
                setTimeout(limparMensagens, 3000);
            }
        }
    } else {
        exibirMensagens(false, 'Informe um valor válido!');
        setTimeout(limparMensagens, 3000);
    }
    limpaForm();
    inputCriarCategoria.focus();
    alteraBtnVoltar(true);
};

// Verifica existencia de uma categoria
function verificaCategoria(inputCategoria) {
    let checador = 0;

    criarCategorias.forEach((categoria) => {
        if (inputCategoria === categoria.categoria) checador++;
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

