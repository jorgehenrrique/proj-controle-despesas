// || Telas
const telaHome = document.querySelector('.home');
const telaDespesa = document.querySelector('.container-despesa');
const telaCategorias = document.querySelector('.container-categorias');
const telaEditar = document.querySelector('.container-editar');

// || Inputs botoes
const inputHome = document.querySelector('.despesas');
const inputAdcDespesa = document.querySelector('.btn-adicionar-despesa');
const inputCategorias = document.querySelector('.categorias');
const inputAdcEditar = document.querySelector('.btn-adicionar-categoria');

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

