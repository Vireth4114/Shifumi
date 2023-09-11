let boutons = document.getElementsByTagName("button");
let coupJoueur;

for (let i = 0; i < 3; i++) {
    boutons[i].addEventListener("click", () => {
        coupJoueur = boutons[i].textContent;
        document.getElementById("joueur").textContent = "Joueur : " + coupJoueur;
        let alea = Math.floor(Math.random()*3);
        document.getElementById("robot").textContent = "Robot : " + boutons[alea].textContent;
        let resultat = "Gagné :D";
        if (alea == i) {
            resultat = "Égalité :|"
        }
        if (alea == (i+1)%3) {
            resultat = "Perdu D:"
        }
        document.getElementById("resultat").textContent = "Résultat : " + resultat;

    })
};
