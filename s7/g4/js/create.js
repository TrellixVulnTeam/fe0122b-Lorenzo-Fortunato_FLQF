
let crea = document.querySelector('#creaLabel');

crea.addEventListener('click', function(e) {
    e.preventDefault();

    let nome = document.querySelector('#nome').value;
    let cognome = document.querySelector('#cognome').value;
    let email = document.querySelector('#email').value;
    let ruolo = document.querySelector('#ruolo').value;
    let password = document.querySelector('#psw').value;

    fetch('https://sofin.wp-admin.it/public/api/v1/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nome,
            lastname: cognome,
            email: email,
            password: password,
            role_id: ruolo
        })
    })
    .then(response => response.json())
    .then(data => {
        window.location = 'index.html'
    })
    
});

























