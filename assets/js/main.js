// || Telas
const telaHome = document.querySelector('.home');
const telaDespesa = document.querySelector('.container-despesa');
const telaCategorias = document.querySelector('.container-categorias');
const telaEditar = document.querySelector('.container-editar');

// || Mensagens
const confirmarExcluir = document.querySelector('.confir-excluir');

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
// const btnHomeFiltrar = document.querySelector('.btn-filtrar'); // Home filtrar btn
// const btnCategoriasFiltrar = document.querySelector('.btn-filtrar-categorias'); // Categorias filtrar btn

// || Inputs
const inputHomeFiltrar = document.querySelector('#filtrar'); // Home filtrar input
const inputCategoriasFiltrar = document.querySelector('#filtrar-cat'); // Categorias filtrar input

// || Input form de adc despesa
const inputBusqueCategoria = document.querySelector('#categoria');
const inputDataVencimento = document.querySelector('#vencimento');
const inputDespesa = document.querySelector('#despesa');
const inputValor = document.querySelector('#valor');

// || Input form adc categoria
const inputCriarCategoria = document.querySelector('#categoria-criar');

// home
btnHome.addEventListener('click', chamaHome);
function chamaHome(){
    limpaDespesa()
    limpaCategorias()
    limpaEditar()
    telaHome.classList.remove('none');
}
function limpaHome(){
    telaHome.classList.add('none');
}

// despesa
btnAdcDespesa.addEventListener('click', chamaDespesa);
function chamaDespesa(){
    limpaHome()
    limpaCategorias()
    limpaEditar()
    telaDespesa.classList.remove('none');
}
function limpaDespesa(){
    telaDespesa.classList.add('none');
}

// categorias
btnCategorias.addEventListener('click', chamaCategorias);
function chamaCategorias(){
    limpaHome()
    limpaDespesa()
    limpaEditar()
    telaCategorias.classList.remove('none');
}
function limpaCategorias(){
    telaCategorias.classList.add('none');
}

// editar
btnAdcEditar.addEventListener('click', chamaEditar);
function chamaEditar(){
    limpaHome()
    limpaDespesa()
    limpaCategorias()
    telaEditar.classList.remove('none');
}
function limpaEditar(){
    telaEditar.classList.add('none');
}

// despesa cancelar
btnCancelarDespesa.addEventListener('click', () => {
    limpaForm();
    chamaHome()
});
// despesa salvar
btnSalvarDespesa.addEventListener('click', () => {

});

// edit/adc cancelar
btnCancelarEdit.addEventListener('click', () => {
    limpaForm();
    chamaCategorias()
    limparMensagensAdcCategorias()
});

function limpaForm(){ // Limpa todos formularios
    for (let form of formularios){
        form.reset();
    }
}


// --------------------------------------------------------

