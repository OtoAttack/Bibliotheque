"use strict";

var livre1 = {
    référence: 1,
    titre: "Le Pain",
    auteur: "JJ Redon"
}
var livre2 = {
    référence: 2,
    titre: "Le jus de fruit",
    auteur: "JJ"
}
var livre3 = {
    référence: 3,
    titre: "Les smarties",
    auteur: "Redon"
}
var livres = [livre1, livre2, livre3];
var lenL = livres.length;
var conteneur = document.getElementById("livre");

function mkHtml(titre, auteur) {
    var htmlString = "";
    var conteneur = document.getElementById("livre");
    for(var livre of livres) {
        htmlString += "<div class=\"liste\">"
        htmlString += "<li class=\"listeL\">" + livre.titre + " par " + livre.auteur + "</list>";
        htmlString += "</div>"
    }
    return htmlString;
}
conteneur.innerHTML = mkHtml(livres);
mkHtml(livres);


var formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    var titre = document.getElementById("titre").value;
    var auteur = document.getElementById("auteur").value;
    var livreN = {
        référence: "",
        titre: "",
        auteur: ""
    }
    livreN.référence = lenL + 1;
    livreN.titre = titre;
    livreN.auteur = auteur;
    livres.push(livreN);
    conteneur.innerHTML = mkHtml(livres);
});