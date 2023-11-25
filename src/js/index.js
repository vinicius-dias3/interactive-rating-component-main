const buttons = document.querySelectorAll('.buttons .button')
const mainCard = document.querySelector('.main')
const thankYouCard = document.querySelector('.thank-you')
const form = document.querySelector('#form')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let optionSelected = document.querySelector('.selected')
    let span = document.querySelector('.thank-you .span')
    if(!optionSelected) return;

    mainCard.classList.add('inactive')
    thankYouCard.classList.remove('inactive')
    span.textContent = `You selected ${optionSelected.value} out of 5`
})

buttons.forEach(button=> {
    button.addEventListener('click', ()=>{
        let searchingSelected = document.querySelector('.selected')
        if(searchingSelected) removeSelected()
        button.classList.add('selected')
    })
})
    
    
function removeSelected(){
    buttons.forEach(button=>{
        button.classList.remove('selected')
    })
}