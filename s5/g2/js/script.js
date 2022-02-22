
var budgetIniziale = 1000;
document.getElementById('bdg').innerHTML = 'budget' + ' ' + budgetIniziale;
//spese random
function randomico(){
    return Math.floor(Math.random() * 100);

}



while(budgetIniziale > 0){
    var sp = randomico();
    document.getElementById('spesa').innerHTML += 'spese' + ' ' + sp + '<br>';
    budgetIniziale -= sp
    
    
}
