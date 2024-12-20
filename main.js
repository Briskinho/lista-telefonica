
//mascara numérica com validação de 11 dígitos
document.getElementById("telefone-usuario").addEventListener("input", function() { 
    let tel = this.value.replace(/\D/g, "").slice(0, 11); // Remove tudo o que não é dígito
    
    tel = tel.replace(/^(\d{2})(\d)/, "($1) $2"); // Coloca parênteses em volta dos dois primeiros dígitos
    tel = tel.replace(/(\d{5})(\d)/, "$1-$2");  // Coloca hífen entre o quinto e o sexto dígitos

    this.value = tel; // Atualiza o valor no campo

    if (tel.replace(/\D/g, "").length === 11) {
        this.setCustomValidity("");  // Limpa a mensagem de erro
    } else {
        this.setCustomValidity("Digite um número de telefone válido com 11 dígitos."); // Define a mensagem de erro
    }
});

//variáveis que armazenam o formulário e os arrays de nome e telefone
const form = document.getElementById('form-contato'); 
const nome = [];
const telefone = [];

//variável que armazena as linhas da tabela
let linhas = '';

//evento de submit do formulário
form.addEventListener('submit', function(e) { 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

//função que adiciona uma linha na tabela
function adicionaLinha() {
    
    const inputNome = document.getElementById('nome-usuario'); //captura o valor do input de nome
    const inputTelefone = document.getElementById('telefone-usuario'); //captura o valor do input de telefone
//verifica se o nome já foi inserido
    if (nome.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
    }
    //caso não tenha sido inserido, adiciona o nome e o telefone ao array e cria uma linha na tabela
    else {
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td> ${inputNome.value} </td>`;
        linha += `<td> ${inputTelefone.value} </td>`;
        linha += '</tr>';

        linhas += linha; //adiciona a linha ao array de linhas
    }
//limpa os inputs
    inputNome.value = '';
    inputTelefone.value = '';
}
//função que atualiza a tabela
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); //captura o corpo da tabela
    corpoTabela.innerHTML = linhas; //atualiza o corpo da tabela
}