let giocatore1: number = 10;

let giocatore2: number = 70;

function caos(){
    let random: number = Math.floor(Math.random() * (100-1) + 1);
    console.log(random);

    if(random == giocatore1){
        console.log('Complimenti giocatore1, hai vinto!');
    }else if(random == giocatore2){
        console.log('Complimenti giocatore2, hai vinto!');
    }else{
        let sottr1: number = Math.abs(random-giocatore1);
        let sottr2: number = Math.abs(random-giocatore2);
        console.log(sottr1);
        console.log(sottr2);
        // console.log(sottrai1);
            if(sottr1 < sottr2){
                console.log('Mannaggia! il giocatore1 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!');
            }else{
                console.log('Puffappero! il giocatore2 non ha indovinato il numero ma comunque è quello che si è avvicinato di più!');
            };
            
    };
};

caos();

