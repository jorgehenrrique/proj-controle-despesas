const tabelaCategoriasFiltrados = document.querySelector('#tabela-categorias-filtrados');

inputCategoriasFiltrar.addEventListener('search', () => { // Quando clica no (x) do search
    if (!inputCategoriasFiltrar.value.length) {
        inputCategoriasFiltrar.value = '';
        inputCategoriasFiltrar.focus();
        listarTabelaCategorias(criarCategorias);
    }
});

inputCategoriasFiltrar.addEventListener('keyup', () => {
    consultaCategoriasCriadas()

    if (consultaCategoriasCriadas().length === 0) { // Se a nova lista nao tem valores, exibe mensagem
        tabelaCategoriasFiltrados.innerHTML = `<tr>
            <td colspan="3">Nenhuma categoria encontrada</td>
        </tr>`;
    }
});


function consultaCategoriasCriadas() {
    let entrada = inputCategoriasFiltrar.value.trim().toUpperCase();

    let criarCategoriasFiltrada = criarCategorias.filter((categoria) => {
        return categoria.categoria.includes(entrada) || categoria.id === Number(entrada);
    });

    listarTabelaCategorias(criarCategoriasFiltrada)
    return criarCategoriasFiltrada;
}


function listarTabelaCategorias(array) { // Passa um array para listarCategorias
    tabelaCategoriasFiltrados.innerHTML = ''; // Limpar tela
    inputSelecioneCategoria.innerHTML = ''; // Limpar tela

    // Chama a listarCategorias, para cada elemento do array
    array.forEach(elemento => listarCategorias(elemento));
}


function listarCategorias(item) {
    tabelaCategoriasFiltrados.innerHTML += `<tr>
    <td>${item.id}</td>
    <td>${item.categoria}</td>
    <td>
    <button class="btn-editar" onclick="chamaEditar('${item.id}', '${item.categoria}')">EDITAR</button> 
    <button class="btn-excluir btn-cancelar" onclick="confirmaExcluir(${item.id})">EXCLUIR</button>
    </td>
    </tr>`;

    // Aparece em adc categorias
    inputSelecioneCategoria.innerHTML += `
    <option value="${item.categoria}">${item.categoria}</option>
    `;
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
        listarTabelaCategorias(criarCategorias);
        salvarCategoriasLocal() // Atualiza lista local
    });
    document.querySelector('.naoExcluir').addEventListener('click', () => {
        confirmarExcluir.classList.add('none');
    });
}

function limpaMensagemDeletar() {
    document.querySelector('.excluir-confirmado').classList.add('none');
    document.querySelector('.excluir-confirmado-home').classList.add('none'); // mensagem do home
}
setInterval(function () { // Limpar mensagem acima
    limpaMensagemDeletar();
}, 3000);


(() => { // Restaura lista local em JSON e converte para JS
    // const restauraCategorias = localStorage.getItem('categorias'); // Chama arquivo local
    // const categoriasRestauradas = JSON.parse(restauraCategorias); // Converte para array JS

    // Chama arquivo local e converte para array JS || Otimizado
    const categoriasRestauradas = JSON.parse(localStorage.getItem('categorias'));

    for (let cat of categoriasRestauradas) {
        salvaCategoria(cat.categoria);
    }
})()

// || Editar categoria
function chamaEditar(id, nomeCategoria) {
    chamaAdcEditar();
    inputCriarCategoria.value = nomeCategoria;
    btnSalvarEdit.setAttribute('onclick', `editarCategoria(${id})`);
}


function editarCategoria(id) {
    criarCategorias.map((categoria) => {
        if (categoria.id == id) {
            if (inputCriarCategoria.value.trim() == '') {
                exibirMensagens(false, 'Adicione um nome válido!');
            } else {
                categoria.categoria = inputCriarCategoria.value.trim().toUpperCase().replace(' ', '-');
                exibirMensagens(true, 'Categoria editada com sucesso!');
                setTimeout(function () {
                    chamaCategorias();
                }, 1500);
            }
        }
    });
    salvarCategoriasLocal();
    listarTabelaCategorias(criarCategorias);
    limpaForm();
}
