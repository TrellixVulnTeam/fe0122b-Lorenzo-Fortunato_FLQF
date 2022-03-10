let nome = document.querySelector('#nome').value;
let cognome = document.querySelector('#cognome').value;
let email = document.querySelector('#email').value;
let ruolo = document.querySelector('#ruolo').value;
let bottone = document.querySelector('button');


bottone.addEventListener('click', () => {
    fetch(
        'https://sofin.wp-admin.it/public/api/v1/user', 
        {
            method: 'POST', // or 'PUT'
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
        alert('Utente '+data.id+' Creato')
    });

    

})


