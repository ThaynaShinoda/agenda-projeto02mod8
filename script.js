const form = document.querySelector('form')
const listaNome = []
const listaTelefone = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
})

function adicionarLinha() {
    const inputNome = document.getElementById('input-nome')
    const inputTelefone = document.getElementById('input-tel')

    if(listaNome.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já existe`)
    } else if (listaTelefone.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value} já existe`)
    } else {
        listaNome.push(inputNome.value)
        listaTelefone.push(inputTelefone.value)
                
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>' 

        linhas += linha
    }
    inputNome.value = ''
    inputTelefone.value = ''
}

function atualizarTabela () {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = linhas
}
