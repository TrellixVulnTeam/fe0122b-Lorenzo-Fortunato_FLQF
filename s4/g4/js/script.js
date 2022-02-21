//caratteri minuscoli e maiuscoli
var stringa = "sono in crisi con quelle MALEDETTE FUNZIONI";
console.log(stringa);

 var strMaiuscolo = stringa.toUpperCase();
 console.log(strMaiuscolo);

 var strMinuscolo = stringa.toLowerCase();
 console.log(strMinuscolo);

//lista di elementi 
 var strLista = stringa.split("");
 console.log(strLista);

//selezionane due
 var strSelezione = stringa.slice(5, 7); //voglio selezionare "in"
 console.log(strSelezione);

//concatenazione
 var aggiunta = "cavoletti di bruxelles"
 console.log(aggiunta);

 var strConcatenata = strSelezione.concat(" " + aggiunta);
 console.log(strConcatenata);

//array di persone
 var persone =  ['caucasico', 'indoeuropeo', 'pietreppaolo', 'mariangelo', 'afroamericano'];
 console.log(persone);

//leggi il terzo elemento -- mi aspetto "mariangelo"
 console.log(persone[3]);

//passa un valore all'arrey tramite una variabile
var personeAggiunta = persone.splice(2, 2, "povero", "oriundo");
console.log(persone);

//leggi la lunghezza
var lunghezza = persone.length;
console.log(persone);

//usa push/pop shift/unshift
var popPersone = persone.pop();
console.log(persone);

var pushPersone = persone.push('eurasiatico');
console.log(persone);

var shiftPersone = persone.shift();
console.log(persone);

var unshiftPersone = persone.unshift('carletto');
console.log(persone);



//crea una funzione che utilizza valori tratti da un array

function somma(){
    var numerelli = ['1','2','3','411','5','6']

    numerelli[1] + numerelli[3]
    //document.write('numerelli 0 + numerelli 3');
    //console.log(somma);

}

//var risultato = somma();
//console.log(risultato);
