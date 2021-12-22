const form = document.querySelector('.form-quiz');
let tableauResults = [];
const reponses = ['b','c','b'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const touteLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

//fonction fléchée
form.addEventListener('submit', (e) => {  
    // prévnir un comportement: éviter d'actualiser les données dans une nouvelle page
    e.preventDefault();  

    // récupérer la valeur de l'input
    //console.log(document.querySelector('input[name="q1"]:checked').value) 
    
    for (i = 1; i < 4; i++){
        // réitirer la fonction de comptage à 3 reprises en ajoutant à chaque fois l'input cliqué// 
        tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
     // console.log(tableauResults) // show checked inputs
     verifFunc(tableauResults);
     tableauResults = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < 3; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    console.log(verifTableau);
    afficherResultats(verifTableau);
    couleurFonction(verifTableau);
    verifTableau = [];
}

// objectif: un tableau à checker
// filtrer chaque (el) élement déffirent de true
// objectif: détecter le nombre de fautes
 function afficherResultats(tabCheck) {

   const nbDeFautes = tabCheck.filter(el => el !== true).length;
    console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️"
            noteResultat.innerText = '3/3'
            break;

        case 1: 
            titreResultat.innerText = "✨ Vous y êtes presque ! ✨"
            noteResultat.innerText = '2/3'
            break;

        case 2: 
        titreResultat.innerText = "👀 Encore un effort  ... 👀"
        noteResultat.innerText = "1/2"
            break;

        case 3:
        titreResultat.innerText = "😭 Essayez à nouveau, l'espoir fait vivre 😭"
        noteResultat.innerText = '0/3'
            break;

        default:
        'Wops, cas inatendu.';
    }
}
// concerne les réponse true or false
function couleurFonction(tabValBoolean){

    for (let i = 0; i < tabValBoolean.length; i++){

        if (tabValBoolean[i] === true){
            touteLesQuestions[i].style.background = 'lightgreen';
        } else {
            touteLesQuestions[i].style.background = '#ffb8b8';
            
            // 'echec' le bloc bouge légèrement quand la réponse est incorrecte
            touteLesQuestions[i].classList.add('echec');
            // Après 0,5 seconde l'utilisateur peut tener de r"pondre à nouveau aux questions en supprimant l'echec
            setTimeout(() => {
                touteLesQuestions[i].classList.remove('echec');
            }, 500)
        }
    }
}
// a chaque fois qu'on clique sur le bloc des questions il devient blanc, ca va pemettre d'effacer la couleur verte ou rouge lors d'un nouvel essai.
touteLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })

})