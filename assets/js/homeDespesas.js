// || Lista na tela Home
function listarTabelaDespesas(array) {
    tabelaDespesas.innerHTML = ''; // Limpar tela

    // Chama a listarDespesas, para cada elemento
    array.forEach(elemento => listarDespesas(elemento));
}

function listarDespesas(despesa) {
    tabelaDespesas.innerHTML += `<tr>
    <td>${despesa.data}</td>
    <td>${despesa.despesa}</td>
    <td>${despesa.valor}</td>
    <td>
    <button class="pendente" onclick="alterarStatus()">PENDENTE</button> <button class="btn-excluir btn-cancelar" onclick="confirmaExcluirDespesa(${despesa.id})">EXCLUIR</button>
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

function alterarStatus() {
    console.log('Em construcao');
    alert('Calma!!');
}