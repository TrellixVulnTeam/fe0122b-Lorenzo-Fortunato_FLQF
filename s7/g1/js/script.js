let bottoneInvia = document.querySelector('.bottone');

bottoneInvia.addEventListener('click', function(e){
    e.preventDefault();
    var arrayy = document.querySelectorAll('.val')

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
            
        }
        

    });

    
    let nome = document.querySelector('#nome').value;
    let cognome = document.querySelector('#cognome').value;
    let user = document.querySelector('#user').value;
    let email = document.querySelector('#email').value;
    let password1 = document.querySelector('#psw1').value;
    let password2 = document.querySelector('#psw2').value;
    
    let layer = document.querySelector('#layer');
    if(nome != "" && cognome != "" && email != "" && password1 != "" && password2 != "" && password1 == password2){
        layer.style.display = 'block';
        salva();
        let nome = document.querySelector('#nome').value = "";
        let cognome = document.querySelector('#cognome').value = "";
        let user = document.querySelector('#user').value = "";
        let email = document.querySelector('#email').value = "";
        let password1 = document.querySelector('#psw1').value = "";
        let password2 = document.querySelector('#psw2').value = "";
    }

    if(password1 != password2){
        password1.style.border = '1px solid red';
        password2.style.border = '1px solid red';
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

  
    function salva(){
        class Utente {
            constructor (nome, cognome, user, email, password1, password2){
                this.nome = nome;
                this.cognome = cognome;
                this.user = user;
                this.email = email;
                this.password1 = password1;
                this.password2 = password2;
            };
        };

        

        const persona = new Utente(nome, cognome, user, password1, password2);
     
        let list = localStorage.getItem('persona');
        
        let tern = list == null ? [] : JSON.parse(list);
        tern.push(persona);

        let json = JSON.stringify(tern);
        localStorage.setItem('persona', json);

        
    };
    
    




    

    
    


})









// FORM
    // 1. required e annessi
        // 1.1 campi required
        // 1.2 match password
        // 1.3 tutti i campi sono necessari

    // 2. al click localStorage
        // 2.1 al click crea un oggetto composto dai value degli input (OOP)
        // 2.2 creare array cestino
        // !!!! non creare utenti vuoti! !!!!!!
        // 2.3 pushare gli oggetti nell'array cestino
    
// extras: lettere e simboli ammessi negli input
