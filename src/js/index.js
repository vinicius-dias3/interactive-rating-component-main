const btnSubmit = document.querySelector('.enviar')
const inputs = document.querySelectorAll("input[name='nota']")
const primeiraParte = document.querySelector('.primeira-parte')
const segundaParte = document.querySelector('.segunda-parte')

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const arrayInputs = Array.from(inputs)
    // console.log(arrayInputs);
    inputSelecionado = arrayInputs.find(function(input) {
        return input.checked
    })
    console.log (inputSelecionado)
    let notaAtribuida = inputSelecionado.value
    console.log(notaAtribuida)
    primeiraParte.classList.remove('ativa')
    primeiraParte.classList.add('inativa')
    segundaParte.classList.remove('inativa')
    segundaParte.classList.add('ativa')
})