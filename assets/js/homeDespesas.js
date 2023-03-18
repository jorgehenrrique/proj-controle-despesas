const cardTotalPago = document.querySelector('.total-pago');
const cardTotalPagar = document.querySelector('.total-pagar');
const cardAtrasadas = document.querySelector('.atrasadas');

// || Lista na tela Home
function listarTabelaDespesas(array) {
    tabelaDespesas.innerHTML = ''; // Limpar tela
    cards(); // Exibe os cards

    // Chama a listarDespesas, para cada elemento
    array.forEach(elemento => listarDespesas(elemento));
}

function listarDespesas(despesa) {
    let valor = formataValor(despesa.valor);

    tabelaDespesas.innerHTML += `<tr class="${despesa.status ? 'pago-linha' : 'pendente-linha'}">
    <td>${despesa.data}</td>
    <td>${despesa.despesa}</td>
    <td>${valor}</td>
    <td>${despesa.categoria}</td>
    <td>
    <button class="${despesa.status ? 'pago' : 'pendente'}" onclick="alterarStatus(${despesa.id})">${despesa.status ? 'PAGO' : 'PENDENTE'}</button>
    <button class="btn-excluir btn-cancelar" onclick="confirmaExcluirDespesa(${despesa.id})">EXCLUIR</button>
    </td>
    </tr>`;
}

function confirmaExcluirDespesa(id) { // Confirmar excluir em Despesas
    document.querySelector('.confir-excluir-home').classList.remove('none');

    document.querySelector('.simExcluir-home').addEventListener('click', () => {
        criaDespesas.filter((despesa, indice) => {
            if (despesa.id == id) {
                criaDespesas.splice(indice, 1);
                document.querySelector('.excluir-confirmado-home').classList.remove('none');
            }
        });
        document.querySelector('.confir-excluir-home').classList.add('none');
        listarTabelaDespesas(criaDespesas);
        salvarDespesasLocal() // Atualiza lista local
    });
    document.querySelector('.naoExcluir-home').addEventListener('click', () => {
        document.querySelector('.confir-excluir-home').classList.add('none');
    });
}

function alterarStatus(id) {
    criaDespesas.filter((despesa, indice) => {
        if (despesa.id == id) criaDespesas[indice].status = criaDespesas[indice].status ? false : true;
    })
    listarTabelaDespesas(criaDespesas);
    salvarDespesasLocal() // Atualiza lista local
}

// || Filtro de busca na tela home
inputHomeFiltrar.addEventListener('keyup', () => {
    consultaDespesasCriadas()

    if (consultaDespesasCriadas().length === 0) { // Se a nova lista nao tem valores, exibe mensagem
        tabelaDespesas.innerHTML = `<tr>
            <td colspan="4">Nenhuma despesa encontrada</td>
        </tr>`;
    }
});

inputHomeFiltrar.addEventListener('search', () => { // Quando clica no (x) do search
    if (!inputHomeFiltrar.value.length) {
        inputHomeFiltrar.value = '';
        inputHomeFiltrar.focus();
        listarTabelaDespesas(criaDespesas);
    }
});

function consultaDespesasCriadas() {
    let entrada = inputHomeFiltrar.value.trim().toLowerCase();

    let criarDespesasFiltradas = criaDespesas.filter((despesa) => {
        return despesa.despesa.toLowerCase().includes(entrada) ||
            despesa.categoria.toLowerCase().includes(entrada) ||
            despesa.data.includes(entrada) ||
            despesa.valor.includes(entrada);
    });

    listarTabelaDespesas(criarDespesasFiltradas)

    return criarDespesasFiltradas;
}

// || Cards total pago, total a pagar e atrasadas
function cards() {
    let pagoTotal = 0;
    let pagarTotal = 0;
    let atrasadas = 0;

    criaDespesas.filter((pago) => {
        if (pago.status) pagoTotal += Number(pago.valor);
        if (!pago.status) pagarTotal += Number(pago.valor);
        if (!pago.status) atrasadas = checaDataVencida(pago.data, atrasadas);
    });
    cardTotalPago.innerText = formataValor(pagoTotal);
    cardTotalPagar.innerText = formataValor(pagarTotal);
    cardAtrasadas.innerHTML = `${atrasadas}`
}

// || Vormata valor
function formataValor(valor) {
    let valorN = Number(valor);
    valorN = valorN.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorN;
}

// || Checa data vencida
function checaDataVencida(dataVencimento, atrasadas) { // dd/mm/aaaa
    const [dia, mes, ano] = dataVencimento.split('/');
    const data = new Date(`${ano}-${mes}-${dia}`);

    if (data < new Date()) atrasadas++;
    return atrasadas;
}