const form = document.querySelector(".form-quiz");
let tableauResults = [];
const reponsesRadio = ["b", "c", "b"];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const touteLesQuestions = document.querySelectorAll(".question-block");
const raffrechir = document.querySelector(".refresh");
const submitResponse = document.getElementById("submitBtn");
let verifTableau = [];
let count = 10;

//fonction fléchée
form.addEventListener("submit", (e) => {
  // prévnir un comportement: éviter d'actualiser les données dans une nouvelle page
  e.preventDefault();

  // récupérer la valeur de l'input du bloc de la question
  //console.log(document.querySelector('input[name="q1"]:checked').value)

  for (i = 1; i < 4; i++) {
    // réitirer la fonction de comptage à 3 reprises en ajoutant à chaque fois l'input cliqué//
    tableauResults.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  // console.log(tableauResults) // show checked inputs
  verifFunc(tableauResults);
  // une fois on a le console du tableau on le remet le tableau à vide
  tableauResults = [];
});
//prendre les résultats du bleau et les comparer avec les réponses correctes prédifinies
function verifFunc(tabResultats) {
  for (let a = 0; a < 3; a++) {
    if (tabResultats[a] === reponsesRadio[a]) {
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
  //longeur des fautes
  const nbDeFautes = tabCheck.filter((el) => el !== true).length;
  console.log(nbDeFautes);

  switch (nbDeFautes) {
    case 0:
      //innerText : pour ajouter du text uniquement
      //innerHTML : pour aouter des éléments html
      titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
      noteResultat.innerText = "3/3";
      break;

    case 1:
      titreResultat.innerText = "✨ Vous y êtes presque ! ✨";
      noteResultat.innerText = "2/3";
      break;

    case 2:
      titreResultat.innerText = "👀 Encore un effort  ... 👀";
      noteResultat.innerText = "1/2";
      break;

    case 3:
      titreResultat.innerText = "😭 Essayez à nouveau, l'espoir fait vivre 😭";
      noteResultat.innerText = "0/3";
      break;

    default:
      "Wops, cas inatendu.";
  }
}
// concerne les réponse true or false et afficher les couleurs
function couleurFonction(tabValBoolean) {
  for (let i = 0; i < tabValBoolean.length; i++) {
    if (tabValBoolean[i] === true) {
      touteLesQuestions[i].style.background = "lightgreen";
    } else {
      touteLesQuestions[i].style.background = "#ffb8b8";

      // 'echec' le bloc bouge légèrement quand la réponse est incorrecte
      touteLesQuestions[i].classList.add("echec");
      // Après 0,5 seconde l'utilisateur peut tener de r"pondre à nouveau aux questions en supprimant l'echec
      setTimeout(() => {
        touteLesQuestions[i].classList.remove("echec");
      }, 500);
    }
  }
}

raffrechir.addEventListener("click", () => {
  location.reload();
  touteLesQuestions.forEach((item) => {
    item.style.background = "white";
  });
});

const interval = setInterval(function () {
  document.getElementById("count").innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.getElementById("count").innerHTML = "Trop tard ";
    submitResponse.disabled = true;
  }
}, 1000);
