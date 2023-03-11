formularios.forEach(form => form.addEventListener('submit', e => e.preventDefault()));

let criaDespesas = [];

// despesa salvar
btnSalvarDespesa.addEventListener('click', () => {
    let SelecioneCategoria = inputSelecioneCategoria.value;
    let DataVencimento = inputDataVencimento.value;
    let Despesa = inputDespesa.value.trim();
    let Valor = inputValor.value.trim();
    checaEntradas(SelecioneCategoria, DataVencimento, Despesa, Valor);
});


function checaEntradas(Categoria, Vencimento, Despesa, Valor) {

    if (Categoria === '' || Vencimento === '' || Despesa === '' || Valor === '') {
        exibirMensagens(false, 'Preencha todos os campos!');
    } else {
        if (checaData(Vencimento)) {
            adicionaDespesa(Categoria, Vencimento, Despesa, Valor);
            exibirMensagens(true, 'Despesa adicionada com sucesso!');
            limpaForm();
        } else {
            // exibirMensagens(false, 'Data anterior ou atual!');
            exibirMensagens(false, 'Data de vencimento deve ser posterior ao dia atual!');
        }
    }
}


function checaData(dataVencimento) {
    // Obter a data atual
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate();
    let mesAtual = dataAtual.getMonth() + 1;
    let anoAtual = dataAtual.getFullYear();

    let dataDeEntrada = dataVencimento;

    // Converte data de entrada para um obj de data
    let dataObj = new Date(dataDeEntrada);

    // Obter dia, mes e ano da data de entrada
    let diaEntrada = dataObj.getDate();
    let mesEntrada = dataObj.getMonth() + 1;
    let anoEntrada = dataObj.getFullYear();

    // Comparar as datas
    if (anoEntrada < anoAtual || (anoEntrada === anoAtual && mesEntrada < mesAtual) || (anoEntrada === anoAtual && mesEntrada === mesAtual && diaEntrada < diaAtual)) {
        return false;
    } else {
        return true;
    }
}

function adicionaDespesa(categoria, vencimento, nomeDespesa, valor) { // Cria um objeto despesa, e salva no array
    const despesa = {
        categoria: categoria,
        data: vencimento,
        despesa: nomeDespesa,
        valor: valor
    };

    criaDespesas.push(despesa); // Adc obj no array
    console.log(criaDespesas) //
}


