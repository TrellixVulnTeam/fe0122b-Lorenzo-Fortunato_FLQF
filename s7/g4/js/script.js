let tabella = document.querySelector('#tab');
let intestazione = ['Nome', 'Cognome', 'Email', 'Ruolo'];
intestazione.forEach(titoli => {
    let tableHead = document.createElement('th');
    tabella.append(tableHead);
    tableHead.innerText = titoli;
});

fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = ['name', 'lastname', 'email', 'role'];

        data.forEach(function(elemento) {
            let tableRow = document.createElement('tr');
            tabella.append(tableRow);

            for (prop in elemento) {
                if (campi.includes(prop)) {
                    let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop];
                    let tableData = document.createElement('td');
                    tableRow.append(tableData);
                    tableData.innerText = contenuto;
    
                };
    
            };

            let dataModify = document.createElement('td');
            tableRow.append(dataModify);
            let modify = document.createElement('button');
            dataModify.append(modify);
            modify.innerText = 'Modifica';
            modify.classList.add('change');
            let dataDelete = document.createElement('td');
            tableRow.append(dataDelete);
            let canc = document.createElement('button');
            dataDelete.append(canc);
            canc.innerText = 'Elimina';

        });

        let change = document.querySelectorAll('.change');
        change.forEach(elemento => {
            elemento.addEventListener('click', () => {
                window.location = 'modifica.html';

            })


        });


    });
        

















 