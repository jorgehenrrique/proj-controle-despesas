const tabelaDespesas = document.querySelector('#tabela-despesas');

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
        if (Valor === '') exibirMensagens(false, 'Dê um valor a sua despesa.');
        if (Despesa === '') exibirMensagens(false, 'Dê um nome a sua despesa.');
        if (Vencimento === '') exibirMensagens(false, 'Selecione uma data de vencimento.');
        // if (Categoria === '') exibirMensagens(false, 'Selecione uma categoria, crie em Categorias.');
        if (Categoria === '') exibirMensagens(false, `Selecione uma categoria ou crie: <button onclick="chamaCategorias()">Categorias</button>`);
    } else {
        if (checaData(Vencimento)) {
            let dataFormatada = checaData(Vencimento);
            let status = false;
            adicionaDespesa(Categoria, dataFormatada, Despesa, Valor, status);
            exibirMensagens(true, 'Despesa adicionada com sucesso!');
            limpaForm();
        } else {
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
        // return true;
        return `${(diaEntrada >= 10) ? diaEntrada : `0${diaEntrada}`}/${(mesEntrada >= 10) ? mesEntrada : `0${mesEntrada}`}/${anoEntrada}`;
    }
}

let codigo = 0;
function adicionaDespesa(categoria, vencimento, nomeDespesa, valor, status) { // Cria um objeto despesa, e salva no array
    const despesa = {
        categoria: categoria,
        data: vencimento,
        despesa: nomeDespesa,
        valor: valor,
        id: codigo,
        status: status
    };

    codigo++;
    criaDespesas.push(despesa); // Adc obj no array
    salvarDespesasLocal(); // salva local
    listarTabelaDespesas(criaDespesas);
    console.log(criaDespesas) //
}

// || Salva local e restaura
function salvarDespesasLocal() { // Salva lista despesas local em JSON
    // converte array JS para JSON e salva local, ('nomeArquivo', arquivoJSON)
    localStorage.setItem('despesas', JSON.stringify(criaDespesas));
}

(() => { // Restaura lista despesas local em JSON e converte para JS
    // Chama arquivo local e converte para array JS
    const despesasRestauradas = JSON.parse(localStorage.getItem('despesas'));

    for (let des of despesasRestauradas) {
        adicionaDespesa(des.categoria, des.data, des.despesa, des.valor, des.status);
    }
})()

// || Mensagem para adc categoria antes de despesa
function checaCategoriaExistente() {
    if (criarCategorias.length <= 0) {
        exibirMensagens(false, `Primeiro é preciso criar uma categoria: <button onclick="chamaCategorias()">Categorias</button>`);
    }
}