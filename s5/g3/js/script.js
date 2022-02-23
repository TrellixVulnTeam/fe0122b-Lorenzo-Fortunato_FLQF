//scomparsa menu

function giovanni(){
 
    let navi = document.getElementById('navigazione');
    
    if (navi.style.visibility == ""){
        
        navi.style.visibility = "visible";
    } else {
        navi.style.visibility = "";
    }
    

    
};

var btn = document.getElementById('menu');
btn.addEventListener("click", giovanni);



//rosso
var red = document.querySelector('#rosso');
red.addEventListener('click', function(){
    var lorem = document.querySelector('#testo');
    if (lorem.style.color == ""){
        lorem.style.color = "red";
    } else {
        lorem.style.color = "";
    }
});


//grande
var big = document.querySelector('#grande');
big.addEventListener('click', function(){
    var lorem = document.querySelector('#testo');
    if (lorem.style.textTransform == ""){
        lorem.style.textTransform = "uppercase";
    } else {
        lorem.style.textTransform = "";
    }
});

//bgblu
var bg = document.querySelector('#bgblu');
bg.addEventListener('click', function(){
    var lorem = document.querySelector('#testo');
    if (lorem.style.backgroundColor == ""){
        lorem.style.backgroundColor = "blue";
        lorem.style.color = "white";
    } else {
        lorem.style.backgroundColor = "";
        lorem.style.color = "";
    }
});


//lista depennata
/*lista.addEventListener('click', function(){
var lista = document.getElementsByClassName('day');
if (lista.style.color == ""){
    lista.style.color = "red"
} else {
    lista.style.color = ""
    }
})*/

var list = document.querySelector('.day');
list.addEventListener('click', function(){
    var list = document.querySelector('.day');
    if (list.style.color == ""){
        list.style.color = "red";
    } else {
        list.style.color = "";
    }
});



