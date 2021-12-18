const divQuestion1 = document.querySelectorAll('.answer')[0];
const divQuestion2 = document.querySelectorAll('.answer')[1];
const divQuestion3 = document.querySelectorAll('.answer')[2];
const radioButtons = document.querySelectorAll('input[name=q1]')
const checkButtons = document.querySelectorAll('input[type=checkbox]')

console.log(checkButtons);
const textResponse = document.createElement('p');
textResponse.style.margin = "5px";

const CorrectReponses = ['react', 'vuejs']

radioButtons.forEach(radio => {

    radio.addEventListener('input', () => {
        if(radio.value === "JavaScript") {
            textResponse.innerHTML = "<h4>Bonne réponse</h4>"
            textResponse.style.color = "green"

        } else {
            textResponse.innerHTML = "<h4>Mauvaise réponse</h4>"
            textResponse.style.color = "red"

        }
        divQuestion1.appendChild(textResponse)
})

})

checkButtons.forEach(checkBtn => {
    if(checkBtn.value )
})

