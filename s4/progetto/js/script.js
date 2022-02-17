//prendi i valori dei tasti e mettili sul display
function valoreNum(pippo){
    let display = document.getElementById('display')
    let numero = pippo.id

        display.value  += numero     



}

//definire uguale

function calcola(){
    let display = document.getElementById('display').value;

    
        //console.log(eval(display))
        
        document.getElementById('display').value = eval(display);

}

//definire C

function cancella(){
    let display = document.getElementById('display').value;

    document.getElementById('display').value = " ";




}
