formularios.forEach(form => form.addEventListener('submit', e => e.preventDefault()));

// despesa salvar
btnSalvarDespesa.addEventListener('click', () => {
    let SelecioneCategoria = inputSelecioneCategoria.value;
    let DataVencimento = inputDataVencimento.value;
    let Despesa = inputDespesa.value.trim();
    let Valor = inputValor.value.trim();
    checaEntradas(SelecioneCategoria, DataVencimento, Despesa, Valor);
    console.log('Salvar') // apagar
});


function checaEntradas(SelecioneCategoria, DataVencimento, Despesa, Valor) {
    console.log(SelecioneCategoria, typeof SelecioneCategoria)
    console.log(DataVencimento, typeof DataVencimento)
    console.log(Despesa, typeof Despesa)
    console.log(Valor, typeof Valor)
    if (SelecioneCategoria === '' || DataVencimento === '' || Despesa === '' || Valor === '') {
        console.log('Algum valor está vazio') //
        exibirMensagens(false, 'Preencha todos os campos!');
    } else {
        console.log('fora')
        exibirMensagens(true, 'Despesa adicionada com sucesso!');
        limpaForm();
    }
}

function validaCadastro() {
    if (inputNome.value.trim() !== ''
        && inputEmail.value.trim() !== ''
        && inputTel.value.trim() !== '') {
        exibeMensagemSucesso();
        salvaCadastro();
        formulario.reset();
    } else {
        exibeMensagemErro();
    }
}

// const inputSelecioneCategoria = document.querySelector('#escolha');
// const inputDataVencimento = document.querySelector('#vencimento');
// const inputDespesa = document.querySelector('#despesa');
// const inputValor = document.querySelector('#valor');
