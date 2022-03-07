let bottoneInvia = document.querySelector('.bottone');

bottoneInvia.addEventListener('click', function(e){
    e.preventDefault();
    var arrayy = document.querySelectorAll('.val')
    x = 0
    arrayy.forEach(elemento =>{
        let valore = elemento.value;
        if(valore == ""){
            elemento.style.border = '1px solid red';
        }else if(psw1.value != psw2.value){
            let psw1 = document.querySelector('#psw1');
            let psw2 = document.querySelector('#psw2');
            psw1.style.border = '1px solid red';
            psw2.style.border = '1px solid red';
        }else{
            elemento.style.border = '';
            x++;
        }
        
        
        
        
    });
    

    let forM = document.querySelector('#registrazione');
    let popup = document.querySelector('#popup');
    let layer = document.querySelector('#layer');
    if(x > 0 ){
        layer.style.display = 'block';
    }

    let chiudi = document.querySelector('#chiudi');
    chiudi.addEventListener('click', () => {
        layer.style.display = 'none';
    });


    /*if(x > 0 ){
        let popup = document.querySelector('#popup');
        popup.style.display = 'block';
        popup.style.zIndex = '100';
        forM.style.display = 'none';
        
    }
    
    let chiudi = document.querySelector('#chiudi');
    console.log(chiudi)
    chiudi.addEventListener('click', () => {
        popup.style.display = 'none';
        forM.style.display = 'block';
    })*/

  

    








    

    
    


})









// FORM
    // 1. required e annessi
        // 1.1 campi required
        // 1.2 match password
        // 1.3 tutti i campi sono necessari

    // 2. al click localStorage
        // 2.1 creare array cestino
        // 2.2 al click crea un oggetto composto dai value degli input (OOP)
        // 2.3 pushare gli oggetti nell'array cestino
    
// extras: lettere e simboli ammessi negli input
