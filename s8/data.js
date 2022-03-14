var giocatore1 = 10;
var giocatore2 = 70;
function caos() {
    var random = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(random);
    if (random == giocatore1) {
        console.log('Complimenti giocatore1, hai vinto!');
    }
    else if (random == giocatore2) {
        console.log('Complimenti giocatore2, hai vinto!');
    }
    else {
        var sottr1 = Math.abs(random - giocatore1);
        var sottr2 = Math.abs(random - giocatore2);
        console.log(sottr1);
        console.log(sottr2);
        // console.log(sottrai1);
        if (sottr1 < sottr2) {
            console.log('Mannaggia! il giocatore1 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!');
        }
        else {
            console.log('Puffappero! il giocatore2 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!');
        }
        ;
    }
    ;
}
;
caos();
