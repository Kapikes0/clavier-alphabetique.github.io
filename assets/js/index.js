


 document.querySelectorAll('.lettre').forEach(function (lettre_clavier) {                                                                // lier les clavier 
    lettre_clavier.style.backgroundColor = "rgba(0,0,0,0.001)";                                                                         // remets a zero le bg du clavier
    lettre_clavier.style.borderRadius = "100px";
})

document.querySelector('body').onkeydown = function (evenement) {           //clavier

    document.querySelector("#let_" + evenement.key.toLowerCase()).style.backgroundColor = "rgba(214, 0, 0, 0.952)";                     // change le bg des touche appuyer
}


// document.querySelectorAll('.lettre').forEach(function (button) {             //fonctionne pas
        //    button.onclick = function () {                                            //foctionne pas


  //if (lettreAccepter.indexOf(evenement.key) == -1)
            //  return;
            // if pour gerer les caracteres speciaux [A..Z]


