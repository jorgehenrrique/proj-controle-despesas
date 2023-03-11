let criarCategorias = [];

// inputCriarCategoria
// Verifica se a categoria já existe, caso nao, cria uma
btnSalvarEdit.addEventListener('click', () => {
    let inputCategoria = inputCriarCategoria.value.trim().toUpperCase();
    inputCategoria = inputCategoria.replace(' ', '-');

    if (inputCategoria !== '') {
        if (criarCategorias.length <= 0) {
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
    // tabelaCategoriasFiltrados.innerHTML = '';
    // inputSelecioneCategoria.innerHTML = ''; // teste
    // listarTabelaCategorias(criarCategorias);
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
    salvarCategoriasLocal()
    listarTabelaCategorias(criarCategorias);
}


function salvarCategoriasLocal() { // Salva lista local em JSON
    // const categoriasJSON  = JSON.stringify(criarCategorias); // converte array JS para JSON
    // localStorage.setItem('categorias', categoriasJSON); // Salva local, ('nomeArquivo', arquivoJSON)
    // converte array JS para JSON e salva local, ('nomeArquivo', arquivoJSON)
    localStorage.setItem('categorias', JSON.stringify(criarCategorias));
}

