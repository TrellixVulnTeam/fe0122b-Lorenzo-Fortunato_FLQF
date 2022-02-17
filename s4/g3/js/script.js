
//esercizio sottrazione
function calcolo(){
    var pippo = document.getElementById('pensione').value;
    var topolino = document.getElementById('anni').value;
    
    document.getElementById('mancanti').value= pippo - topolino;

    colore(pippo-topolino);
    
}

//esercizio mio sul cambio di colore del div
    function colore(pluto){
    

    if (pluto > 20) {
        document.getElementById('tornasole').style.backgroundColor = "green";
    } else {
        document.getElementById('tornasole').style.backgroundColor = "red";
    }

    
}













//funzione freccia
/*function freccia(){
    return "Ciaone!!!";
}

alert(freccia());*/


freccia = () => {return "Ciaone!!!"}
//alert(freccia());



//funzione all'interno di un'altra funzione

function conteggio(){
    var pippo = 3;
    var pluto = 4;
    
    

    function somma(){
        var paperino = 5;
        

        return pippo + pluto + paperino
        
    }

    return somma();

}

console.log(conteggio())



//operatori di comparazione

var qui = "5";
var quo = 5;

console.log("5"===5); //false


var qui = "5";
var quo = 5;

console.log("5"==5); //true


var qui = "5";
var quo = 5;

console.log("5"!==5); //true

var qui = 5;
var quo = 7;

console.log(5!=7); //true

var qui = 5;
var quo = 7;

console.log(5<7); //true

var qui = 5;
var quo = 7;

console.log(5>7); //false

