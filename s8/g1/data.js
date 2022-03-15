var giocatore1 = 10;
var gioco1 = document.querySelector('#gioco1');
gioco1.innerText = "Il giocatore 1 ha scelto il numero: " + giocatore1;
var giocatore2 = 70;
var gioco2 = document.querySelector('#gioco2');
gioco2.innerText = "Il giocatore 2 ha scelto il numero: " + giocatore2;
function caos() {
    var random = Math.floor(Math.random() * (100 - 1) + 1);
    var randomico = document.querySelector('#random');
    randomico.innerText = "Il numero estratto è: " + random;
    // console.log(random);
    var final = document.querySelector('#finale');
    if (random == giocatore1) {
        final.innerText = "Complimenti giocatore1, hai vinto!";
    }
    else if (random == giocatore2) {
        final.innerText = "Complimenti giocatore2, hai vinto!";
    }
    else {
        var sottr1 = Math.abs(random - giocatore1);
        var sottr2 = Math.abs(random - giocatore2);
        // console.log(sottr1);
        // console.log(sottr2);
        if (sottr1 < sottr2) {
            final.innerText = 'Mannaggia! Il giocatore1 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!';
        }
        else {
            final.innerText = 'Puffappero! Il giocatore2 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!';
        }
        ;
    }
    ;
}
;
caos();
