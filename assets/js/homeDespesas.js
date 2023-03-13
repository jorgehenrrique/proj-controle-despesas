// const statusCard = document.querySelector('.status');
// console.log("🚀 ~ file: homeDespesas.js:2 ~ statusCard:", statusCard)

// || Lista na tela Home
function listarTabelaDespesas(array) {
    tabelaDespesas.innerHTML = ''; // Limpar tela

    // Chama a listarDespesas, para cada elemento
    array.forEach(elemento => listarDespesas(elemento));
}

function listarDespesas(despesa) {
    tabelaDespesas.innerHTML += `<tr class="${despesa.status ? 'pago-linha' : 'pendente-linha'}">
    <td>${despesa.data}</td>
    <td>${despesa.despesa}</td>
    <td>R$${despesa.valor}</td>
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
        console.log(criaDespesas[indice].status)
        if (despesa.id == id) {
            // criaDespesas[indice].status = criaDespesas[indice].status ? true : false;
            if (criaDespesas[indice].status) {
                criaDespesas[indice].status = false;
                // statusCard[indice].classList.add('.pendente');
                console.log(document.querySelector('.status'))
                // document.querySelector('.status').classList.add('pendente');
                // document.querySelector('.status').setAttribute('class', 'pendente');
            } else {
                criaDespesas[indice].status = true;
                // statusCard[indice].classList.add('.pago');
                console.log(document.querySelector('.status'))
                // document.querySelector('.status').classList.add('pago');
                // document.querySelector('.status').setAttribute('class', 'pago');
                // document.querySelector('.status').parentElement.setAttribute('class', 'pago')
            }
            console.log(criaDespesas[indice].status)
        }
    })
    listarTabelaDespesas(criaDespesas);
    salvarDespesasLocal() // Atualiza lista local
}

// || Filtro de busca na tela home
inputHomeFiltrar.addEventListener('keyup', () => {
    consultaDespesasCriadas()

    if (consultaDespesasCriadas().length === 0) { // se a nova lista nao tem valores, exibe mensagem
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
            despesa.id === Number(entrada) ||
            despesa.data.includes(entrada) ||
            despesa.valor.includes(entrada);
    });

    listarTabelaDespesas(criarDespesasFiltradas)

    return criarDespesasFiltradas;
}