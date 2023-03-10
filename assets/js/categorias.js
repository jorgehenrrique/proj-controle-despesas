const tabelaCategoriasFiltrados = document.querySelector('#tabela-categorias-filtrados');

// btnCategoriasFiltrar.addEventListener('click', () => {
//     inputCategoriasFiltrar.value = '';
//     tabelaCategoriasFiltrados.innerHTML = '';
//     inputCategoriasFiltrar.focus();
//     listarTabelaCategorias(criarCategorias);
// });

inputCategoriasFiltrar.addEventListener('search', () => {
    inputCategoriasFiltrar.value = '';
    tabelaCategoriasFiltrados.innerHTML = '';
    inputCategoriasFiltrar.focus();
    listarTabelaCategorias(criarCategorias);
});

inputCategoriasFiltrar.addEventListener('keyup', () => {
    consultaCategoriasCriadas()

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
    <button class="btn-editar" onclick="chamaEditar()">EDITAR</button> <button class="btn-excluir btn-cancelar" onclick="confirmaExcluir(${item.id})">EXCLUIR</button>
    </td>
    </tr>`
}


function confirmaExcluir(id) { // Confirmar excluir em Categorias
    confirmarExcluir.classList.remove('none');

    document.querySelector('.simExcluir').addEventListener('click', () => {
        criarCategorias.filter((categoria, indice) => {
            if (categoria.id == id) {
                criarCategorias.splice(indice, 1);
                
                document.querySelector('.excluir-confirmado').classList.remove('none'); // Mensagem de excluído
            }
        });
        confirmarExcluir.classList.add('none');
        tabelaCategoriasFiltrados.innerHTML = '';
        listarTabelaCategorias(criarCategorias);
    });
    document.querySelector('.naoExcluir').addEventListener('click', () => {
        confirmarExcluir.classList.add('none');
    });
}

function limpaMensagemDeletar() {
    document.querySelector('.excluir-confirmado').classList.add('none');
}
setInterval(function () { // Limpar mensagem acima
    limpaMensagemDeletar();
}, 3000);