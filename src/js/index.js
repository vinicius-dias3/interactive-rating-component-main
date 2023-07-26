const btnSubmit = document.querySelector('.enviar')
const inputs = document.querySelectorAll("input[name='nota']")
const primeiraParte = document.querySelector('.primeira-parte')
const segundaParte = document.querySelector('.segunda-parte')

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const arrayInputs = Array.from(inputs)
    inputSelecionado = arrayInputs.find(function(input) {
        return input.checked
    })
    const notaAtribuida = inputSelecionado.value
    primeiraParte.classList.remove('ativa')
    primeiraParte.classList.add('inativa')
    segundaParte.classList.remove('inativa')
    segundaParte.classList.add('ativa')
    const mensagemNota = document.querySelector('.msg-nota')
    mensagemNota.innerHTML = `You selected ${notaAtribuida} out of 5`
})