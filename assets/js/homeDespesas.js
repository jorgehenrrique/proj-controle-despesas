// || Lista na tela Home
function listarTabelaDespesas(array) {
    tabelaDespesas.innerHTML = ''; // Limpar tela

    array.forEach(elemento => { // Chama a listarDespesas, para cada elemento
        listarDespesas(elemento)
    });
}

function listarDespesas(despesa) {
    tabelaDespesas.innerHTML += `<tr>
    <td>${despesa.data}</td>
    <td>${despesa.despesa}</td>
    <td>${despesa.valor}</td>
    <td>
    <button class="pendente" onclick="alterarStatus()>PENDENTE</button>
    </td>
    </tr>`;
}