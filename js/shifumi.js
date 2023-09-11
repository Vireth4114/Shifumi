let boutons = document.getElementsByTagName("button");
let coupJoueur;

for (let i = 0; i < 3; i++) {
    boutons[i].addEventListener("click", () => {
        coupJoueur = boutons[i].textContent;
        document.getElementById("joueur").textContent = "Joueur : " + coupJoueur;
        let alea = Math.floor(Math.random()*3);
        document.getElementById("robot").textContent = "Robot : " + boutons[alea].textContent;
        let resultat = "Gagné 😎🤞🤣";
        if (alea == i) {
            resultat = "Égalité 😐"
        }
        if (alea == (i+1)%3) {
            resultat = "Perdu 😔"
        }
        document.getElementById("resultat").textContent = "Résultat : " + resultat;

    })
};

timer = document.getElementById("timer");
temps = 10;

function a() {
    if (temps != 0) {
        let minutes = Math.floor(temps / 60);
        let secondes = temps % 60;
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;


        timer.textContent = minutes + ":" + secondes;
        temps--;
    } else {
        timer.innerHTML = "<i class='fa-brands fa-discord fa-bounce fa-2xl'></i>";
    }
}

setInterval(a, 1000);