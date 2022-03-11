let param = new URLSearchParams(location.search);
let id = param.get('id');

fetch('https://sofin.wp-admin.it/public/api/v1/user' )
.then(response => response.json())
.then(data => {
    var campi = data;
    
    var utente = campi.find(u => u.id == id);

    // document.querySelector('#nome') = utente.nome
    
    let bottone = document.querySelector('.bottone');
        bottone.addEventListener('click', function(e){
            e.preventDefault();
            
            let nome = document.querySelector('#nome').value;
            let cognome = document.querySelector('#cognome').value;
            let email = document.querySelector('#email').value;
            let ruolo = document.querySelector('#ruolo').value;
        
            fetch(
                'https://sofin.wp-admin.it/public/api/v1/user/' + id, 
                {
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name : nome,
                        lastname : cognome,
                        email : email,
                        role_id : ruolo
                    }),
                }
            )
            .then(response => response.json())
            .then(data => {
                alert('Utente '+data.id+' Aggiornato')
            });
        
            
        
        })






        
    })











