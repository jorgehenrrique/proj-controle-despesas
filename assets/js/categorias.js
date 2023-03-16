const tabelaCategoriasFiltrados = document.querySelector('#tabela-categorias-filtrados');

// || Mensagens
const confirmarExcluir = document.querySelector('.confir-excluir');
const excluirConfirmado = document.querySelector('.excluir-confirmado');
const btnSimExcluir = document.querySelector('.simExcluir');
const btnNaoExcluir = document.querySelector('.naoExcluir');

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
        return categoria.categoria.includes(entrada) || categoria.id.includes(entrada);
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

    btnSimExcluir.setAttribute('onclick', `onclickSExcluir(${id})`); // Chama onclick sim ecluir

    btnNaoExcluir.setAttribute('onclick', 'onclickNExcluir()')
}

function onclickSExcluir(id) {
    criarCategorias.filter((categoria, indice) => {
        if (categoria.id == id) {
            // console.log('entrou 01') // <<<
            let existe = true

            criaDespesas.forEach((despesa) => {
                // console.log('entrou 02', despesa.categoria) // <<<

                if (categoria.categoria == despesa.categoria) {
                    // console.log('entrou 03') // <<<
                    // console.log(despesa.categoria, 'existe em uso') // <<<

                    excluirConfirmado.classList.add('excluir-negado');
                    excluirConfirmado.innerText = 'Não é possível excluir categoria em uso!';
                    excluirConfirmado.classList.remove('none');
                    existe = false;
                }
            })
            if (existe) {
                // console.log(categoria.categoria, 'Nao em uso') // <<<

                criarCategorias.splice(indice, 1);

                excluirConfirmado.classList.remove('excluir-negado');
                excluirConfirmado.innerText = 'Categoria deletada com sucesso!';
                excluirConfirmado.classList.remove('none'); // Mensagem de excluído
                existe = false;
            }
        }
    });
    confirmarExcluir.classList.add('none');
    listarTabelaCategorias(criarCategorias);
    salvarCategoriasLocal() // Atualiza lista local
}

function onclickNExcluir() {
    confirmarExcluir.classList.add('none');
}

function limpaMensagemDeletar() {
    excluirConfirmado.classList.add('none');
    document.querySelector('.excluir-confirmado-home').classList.add('none'); // mensagem do home
}
setInterval(function () { // Limpar mensagem acima
    limpaMensagemDeletar();
}, 5000);


(() => { // Restaura lista local em JSON e converte para JS
    // const restauraCategorias = localStorage.getItem('categorias'); // Chama arquivo local
    // const categoriasRestauradas = JSON.parse(restauraCategorias); // Converte para array JS

    // Chama arquivo local e converte para array JS || Otimizado
    const categoriasRestauradas = JSON.parse(localStorage.getItem('categorias'));

    for (let cat of categoriasRestauradas) {
        salvaCategoria(cat.categoria, cat.id);
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
            if (inputCriarCategoria.value.trim() == '' || verificaCategoria(inputCriarCategoria.value)) {
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
