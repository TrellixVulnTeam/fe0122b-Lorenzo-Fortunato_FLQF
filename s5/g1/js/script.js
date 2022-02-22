//richiamare la data attuale
var data = new Date();
console.log(data);

//mostrarla nel file html
document.write(data);

//mostrare elementi singoli della data
console.log(data.getMonth());

console.log(data.getMinutes());

console.log(data.getFullYear());

//creare un sistema per la formattazione in formato europeo
const dataOggi = new Date(Date.UTC(2022, 01, 21, 1, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(dataOggi.toLocaleDateString('it-IT', options));

//data formattata nell'html
var dataIta = dataOggi.toLocaleDateString('it-IT', options);

document.getElementById('dataDiOggi').innerHTML = dataIta


//orologio digitale
var ore = data.getHours();
var minuti = data.getMinutes();
var secondi = data.getSeconds();

/*document.getElementById('ore').innerHTML = ore;
document.getElementById('minuti').innerHTML = minuti;
document.getElementById('secondi').innerHTML = secondi;*/


window.setInterval (timer, 1000);

function timer(){
    let orario = new Date();
    
    
    
    document.getElementById('orologio').innerHTML = orario;


};

