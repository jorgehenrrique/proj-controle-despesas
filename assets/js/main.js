// || Telas
const telaHome = document.querySelector('.home');
const telaDespesa = document.querySelector('.container-despesa');
const telaCategorias = document.querySelector('.container-categorias');
const telaEditar = document.querySelector('.container-editar');

// || Botoes
const btnHome = document.querySelector('.despesas');
const btnAdcDespesa = document.querySelector('.btn-adicionar-despesa');
const btnCategorias = document.querySelector('.categorias');
const btnAdcEditar = document.querySelector('.btn-adicionar-categoria');
const btnSalvarDespesa = document.querySelector('.btn-despesa-salvar'); // Salvar despesa
const btnCancelarDespesa = document.querySelector('.btn-despesa-cancelar'); // Cancelar despesa
const formularios = document.querySelectorAll('form');
const btnSalvarEdit = document.querySelector('.btn-edit-salvar'); // Salvar edit/adc cate
const btnCancelarEdit = document.querySelector('.btn-edit-cancelar'); // Cancelar edit/adc cate

// || Inputs
const inputHomeFiltrar = document.querySelector('#filtrar'); // Home filtrar input
const inputCategoriasFiltrar = document.querySelector('#filtrar-cat'); // Categorias filtrar input

// || Input form de adc despesa
const inputSelecioneCategoria = document.querySelector('#escolha');
const inputDataVencimento = document.querySelector('#vencimento');
const inputDespesa = document.querySelector('#despesa');
const inputValor = document.querySelector('#valor');

// || Input form adc categoria
const inputCriarCategoria = document.querySelector('#categoria-criar');

// home
btnHome.addEventListener('click', chamaHome);
function chamaHome() {
    limpaDespesa();
    limpaCategorias();
    limpaEditar();
    telaHome.classList.remove('none');
    alteraBtnVoltar(false);
}
function limpaHome() {
    telaHome.classList.add('none');
    document.querySelector('.confir-excluir-home').classList.add('none'); // Limpa comfirmacao de excluir ao sair da pagina
}

// despesa
btnAdcDespesa.addEventListener('click', chamaDespesa);
function chamaDespesa() {
    limpaHome();
    limpaCategorias();
    limpaEditar();
    limparMensagens();
    telaDespesa.classList.remove('none');
    checaCategoriaExistente();
}
function limpaDespesa() {
    telaDespesa.classList.add('none');
}

// categorias
btnCategorias.addEventListener('click', chamaCategorias);
function chamaCategorias() {
    limpaHome();
    limpaDespesa();
    limpaEditar();
    limparMensagens();
    telaCategorias.classList.remove('none');
    alteraBtnVoltar(false);
}
function limpaCategorias() {
    telaCategorias.classList.add('none');
    confirmarExcluir.classList.add('none'); // Limpa comfirmacao de excluir ao sair da pagina
}

// editar
btnAdcEditar.addEventListener('click', chamaAdcEditar);
function chamaAdcEditar() {
    limpaHome();
    limpaDespesa();
    limpaCategorias();
    telaEditar.classList.remove('none');
    btnSalvarEdit.setAttribute('onclick', `cadastrarCategoria()`); // -->>
    telaEditar.querySelector('form h1').innerText = 'ADICIONAR CATEGORIAS';
}
function limpaEditar() {
    telaEditar.classList.add('none');
}

// despesa cancelar
btnCancelarDespesa.addEventListener('click', () => {
    limpaForm();
    chamaHome();
    limparMensagens();
});

// edit/adc cancelar
btnCancelarEdit.addEventListener('click', () => {
    limpaForm();
    chamaCategorias();
    limparMensagens();
});

function limpaForm() { // Limpa todos formularios
    for (let form of formularios) {
        form.reset();
    }
}

// --------------------------------------------------------

// Mensagens das telas, adc categoria e adc despesas
function exibirMensagens(status, mensagem) {
    document.querySelector('.mensagem-adc-categoria').innerHTML = mensagem;
    document.querySelector('.mensagem-adc-despesa').innerHTML = mensagem;
    if (status) {
        document.querySelector('.mensagem-adc-categoria').classList.remove('mensagem-alerta');
        document.querySelector('.mensagem-adc-categoria').classList.remove('none');
        document.querySelector('.mensagem-adc-despesa').classList.remove('mensagem-alerta');
        document.querySelector('.mensagem-adc-despesa').classList.remove('none');
        // setTimeout(limparMensagens, 3500); // Movido para local de chamada da mensagem, para limpar com tempo indemendente
    } else {
        document.querySelector('.mensagem-adc-categoria').classList.add('mensagem-alerta');
        document.querySelector('.mensagem-adc-categoria').classList.remove('none');
        document.querySelector('.mensagem-adc-despesa').classList.add('mensagem-alerta');
        document.querySelector('.mensagem-adc-despesa').classList.remove('none');
        // setTimeout(limparMensagens, 3500); // Movido para local de chamada da mensagem, para limpar com tempo indemendente
    }
}
function limparMensagens() {
    document.querySelector('.mensagem-adc-categoria').classList.add('none');
    document.querySelector('.mensagem-adc-categoria').classList.remove('mensagem-alerta');
    document.querySelector('.mensagem-adc-despesa').classList.add('none');
    document.querySelector('.mensagem-adc-despesa').classList.remove('mensagem-alerta');
}
// setInterval(function () { // Atualizado para setTimeout
//     limparMensagens();
// }, 10000);


function alteraBtnVoltar(salvo) { // Altera o btn de cacelar para voltar
    if (salvo) {
        btnCancelarEdit.innerText = 'VOLTAR';
        btnCancelarDespesa.innerText = 'VOLTAR';
    } else {
        btnCancelarEdit.innerText = 'CANCELAR';
        btnCancelarDespesa.innerText = 'CANCELAR';
    }
}