const tabelaCategoriasFiltrados = document.querySelector('#tabela-categorias-filtrados');

btnCategoriasFiltrar.addEventListener('click', () => {
    inputCategoriasFiltrar.value = '';
    tabelaCategoriasFiltrados.innerHTML = '';
    inputCategoriasFiltrar.focus();
    listarTabelaCategorias(criarCategorias);
});

inputCategoriasFiltrar.addEventListener('keyup', () => {
    consultaCategoriasCriadas()

    console.log('acesso ok', criarCategorias)

    if (consultaCategoriasCriadas().length === 0) { // se a nova lista nao tem valores, exibe mensagem
        tabelaCategoriasFiltrados.innerHTML = `<tr>
            <td colspan="3">Nenhum dado encontrado</td>
        </tr>`;
    }
});


function consultaCategoriasCriadas() {
    let entrada = inputCategoriasFiltrar.value.trim().toUpperCase();

    let criarCategoriasFiltrada = criarCategorias.filter((categoria) => {
        return categoria.categoria.includes(entrada) ||
        categoria.id === Number(entrada);
    });

    tabelaCategoriasFiltrados.innerHTML = '';
    listarTabelaCategorias(criarCategoriasFiltrada)

    return criarCategoriasFiltrada;
}


function listarTabelaCategorias(array) { // Chama a listarCategorias, para cada item
    array.forEach(elemento => {
        listarCategorias(elemento)
    });
}


function listarCategorias(item) {
    tabelaCategoriasFiltrados.innerHTML += `<tr>
    <td>${item.id}</td>
    <td>${item.categoria}</td>
    <td>
    <button class="btn-editar" onclick="chamaEditar()">EDITAR</button> <button class="btn-excluir btn-cancelar" onclick="confirmaExcluir()">EXCLUIR</button>
    </td>
    </tr>`
}


function confirmaExcluir(){ // Confirmar excluir em Categorias
    console.log('Excluir?')
    confirmarExcluir.classList.remove('none');
    document.querySelector('.simExcluir').addEventListener('click', () => {
        console.log('Deletado');
        confirmarExcluir.classList.add('none');
    });
    document.querySelector('.naoExcluir').addEventListener('click', () => {
        console.log('Não deletado');
        confirmarExcluir.classList.add('none');
    });
}