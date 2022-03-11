let tabella = document.querySelector('#tab');
let intestazione = ['Nome', 'Cognome', 'Email', 'Ruolo', 'Azioni'];
let tableRowHead = document.createElement('tr');
tabella.append(tableRowHead);
intestazione.forEach(titoli => {
    let tableHead = document.createElement('th');
    tableRowHead.append(tableHead);
    tableHead.innerText = titoli;
    tableHead.classList.add('int');
});

fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = ['name', 'lastname', 'email', 'role'];

        data.forEach(function(elemento) {
            let tableRow = document.createElement('tr');
            tabella.append(tableRow);
            tableRow.classList.add('riga');

            for (prop in elemento) {
                if (campi.includes(prop)) {
                    let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop];
                    let tableData = document.createElement('td');
                    tableRow.append(tableData);
                    tableData.innerText = contenuto;
                    tableData.classList.add('data');

    
                };
    
            };

            let dataModify = document.createElement('td');
            tableRow.append(dataModify);
            let modify = document.createElement('button');
            dataModify.append(modify);
            modify.innerText = 'Modifica';
            modify.classList.add('change');

            // qui creo tasto elimina
            let dataDelete = document.createElement('td');
            tableRow.append(dataDelete);
            let canc = document.createElement('button');
            dataDelete.append(canc);
            canc.innerText = 'Elimina';
            canc.classList.add('canc');
            canc.setAttribute('data-id', elemento.id) //attributo

            canc.addEventListener('click', function() {
                var dataId = this.getAttribute('data-id');
                console.log(dataId)
                // deleta(dataId);
                tableRow.remove();

                fetch('https://sofin.wp-admin.it/public/api/v1/user/id=' + `${dataId}`, {
                    method: 'DELETE',
                  })
                  .then(response => response.text()) 
                  .then(data => 
                    alert('Utente eliminato!'))
                  
            
            })
        });


        let change = document.querySelectorAll('.change');
        change.forEach(elemento => {
            elemento.addEventListener('click', () => {
                window.location = 'modifica.html';

            })


        });


    });


/*function deleta(){

    fetch('https://sofin.wp-admin.it/public/api/v1/user' + dataId, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))



}*/
















 