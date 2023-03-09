// || Telas
const telaHome = document.querySelector('.home');
const telaDespesa = document.querySelector('.container-despesa');
const telaCategorias = document.querySelector('.container-categorias');
const telaEditar = document.querySelector('.container-editar');

// || Mensagens
const confirmarExcluir = document.querySelector('.confir-excluir');

// || Inputs botoes
const inputHome = document.querySelector('.despesas');
const inputAdcDespesa = document.querySelector('.btn-adicionar-despesa');
const inputCategorias = document.querySelector('.categorias');
const inputAdcEditar = document.querySelector('.btn-adicionar-categoria');
const inputSalvarDespesa = document.querySelector('.btn-despesa-salvar'); // Salvar despesa
const inputCancelarDespesa = document.querySelector('.btn-despesa-cancelar'); // Cancelar despesa
const formularios = document.querySelectorAll('form');
const inputSalvarEdit = document.querySelector('.btn-edit-salvar'); // Cancelar edit cate
const inputCancelarEdit = document.querySelector('.btn-edit-cancelar'); // Cancelar edit cate
// const inputEditarCategoria = document.querySelector('.btn-editar'); // Edititar categoria
// const inputExcluirCategoria = document.querySelector('.btn-excluir'); // Excluir categoria



// home
inputHome.addEventListener('click', chamaHome);
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
inputAdcDespesa.addEventListener('click', chamaDespesa);
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
inputCategorias.addEventListener('click', chamaCategorias);
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
inputAdcEditar.addEventListener('click', chamaEditar);
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
inputCancelarDespesa.addEventListener('click', () => {
    limpaForm();
    chamaHome()
});
// despesa salvar
inputSalvarDespesa.addEventListener('click', () => {

});

// edit cancelar
inputCancelarEdit.addEventListener('click', () => {
    limpaForm();
    chamaCategorias()
});
// edit salvar
inputCancelarEdit.addEventListener('click', () => {

});
function limpaForm(){ // Limpa todos formularios
    for (let form of formularios){
        form.reset();
    }
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

// categorias editar
// inputEditarCategoria.addEventListener('click', () => {
// });
// categorias excluir
// inputExcluirCategoria.addEventListener('click', () => {
// });

// --------------------------------------------------------