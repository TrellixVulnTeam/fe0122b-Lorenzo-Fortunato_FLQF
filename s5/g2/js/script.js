
var budgetIniziale = 1000;
document.getElementById('bdg').innerHTML = 'budget' + ' ' + budgetIniziale;
//spese random
function randomico(){
    return Math.floor(Math.random() * 100);

}


while(budgetIniziale > 0){
    var sp = randomico();
    document.getElementById('spesa').innerHTML += 'ti restano' + ' ' +  budgetIniziale +  ' ' + 'e hai avuto spese per' + ' ' + sp + '<br>';
    budgetIniziale -= sp
    

    var x = 0;
    
    if (x == 0){
        if (budgetIniziale < 500 && budgetIniziale > 420){
            document.getElementById('spesa').innerHTML += 'sei arrivato a metà delle tue stupide disponibilità' + '<br>';
            x++;
            
        } 

    }    

    
   
    if (budgetIniziale < 200){
        document.getElementById('spesa').innerHTML += 'STAI FINENDO I CASHI!' + '<br>';
    }
    
    
}
