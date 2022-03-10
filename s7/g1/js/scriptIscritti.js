// PAGINA TABELLE
let intestazione = ['Nome', 'Cognome', 'User', 'Email', 'Password1', 'Password2', 'Elimina'];
let tbl = document.querySelector('#tab');
let list = localStorage.getItem('lista');
let tern = list == null ? [] : JSON.parse(list);

intestazione.forEach(elemento => {
    let tableHead = document.createElement('th');
    tbl.append(tableHead);
    tableHead.innerText = elemento;
});


tern.forEach(elemento => {
    var tableRow = document.createElement('tr');
    tbl.append(tableRow);
    tableRow.classList.add('riga');               // da eliminare??
    
    for(prop in elemento){
        let tableData = document.createElement('td');
        tableRow.append(tableData);
        tableData.innerText = elemento[prop];
        // console.table(elemento[prop]);
    };
    
    let tdElimina = document.createElement('td');
    var dataDelete = document.createElement('button');
    dataDelete.setAttribute('data-email', elemento.email)
    tdElimina.append(dataDelete);
    tableRow.append(tdElimina);
    dataDelete.innerText = 'Elimina';
    dataDelete.classList.add('delete');               // da eliminare??

    dataDelete.addEventListener('click', function(){
        var deleteMail = this.getAttribute('data-email')
        console.log(this)
        console.log(tableRow)
        eliminaUtente(deleteMail);
        tableRow.remove();
    
        
        
        
        
    });
});

function eliminaUtente(email){
    let tern = list == null ? [] : JSON.parse(list);
    var indice = tern.findIndex(u => u.email == email);
    console.log(indice);
    tern.splice(indice, 1);
    localStorage.setItem('lista', JSON.stringify(tern));
    

};



/////////////////// INDEXOF SEMPRE UGUALE A -1!!!! PERCHè????? 


