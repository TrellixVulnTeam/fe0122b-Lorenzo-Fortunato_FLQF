let giocatore1: number = 10;
let gioco1: any = document.querySelector('#gioco1');
gioco1.innerText = "Il giocatore 1 ha scelto il numero: " + giocatore1;

let giocatore2: number = 70;
let gioco2: any = document.querySelector('#gioco2');
gioco2.innerText = "Il giocatore 2 ha scelto il numero: " + giocatore2;

function caos(){
    let random: number = Math.floor(Math.random() * (100-1) + 1);
    let randomico: any = document.querySelector('#random');
    randomico.innerText = "Il numero estratto è: " + random;
    // console.log(random);

    let final: any = document.querySelector('#finale');
    if(random == giocatore1){
        final.innerText = "Complimenti giocatore1, hai vinto!";
    }else if(random == giocatore2){
        final.innerText = "Complimenti giocatore2, hai vinto!";
    }else{
        let sottr1: number = Math.abs(random-giocatore1);
        let sottr2: number = Math.abs(random-giocatore2);
        // console.log(sottr1);
        // console.log(sottr2);
            if(sottr1 < sottr2){
                final.innerText = 'Mannaggia! Il giocatore1 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!';
            }else{
                final.innerText = 'Puffappero! Il giocatore2 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!';
            };
            
    };
};

caos();

