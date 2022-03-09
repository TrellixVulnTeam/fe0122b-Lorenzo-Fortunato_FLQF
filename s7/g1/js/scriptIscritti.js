// PAGINA TABELLE
let intestazione = ['Nome', 'Cognome', 'User', 'Email', 'Password1', 'Password2', 'Elimina'];
let tbl = document.querySelector('#tab');
intestazione.forEach(elemento1 => {
    let tableHead = document.createElement('th');
    tbl.append(tableHead);
    tableHead.innerText = elemento1;
});

var tableRow;
let list = localStorage.getItem('lista');
let tern = list == null ? [] : JSON.parse(list);
tern.forEach(elemento => {
    tableRow = document.createElement('tr');
    tbl.append(tableRow);
    tableRow.classList.add('riga');               // da eliminare??

    for(prop in elemento){
        let tableData = document.createElement('td');
        tableRow.append(tableData);
        tableData.innerText = elemento[prop];
        // console.table(elemento[prop]);
    };
    
    var dataDelete = document.createElement('button');
    tableRow.append(dataDelete);
    dataDelete.innerText = 'Elimina';
    dataDelete.classList.add('delete');               // da eliminare??

    dataDelete.addEventListener('click', function(){
        eliminaUtente();
        tableRow.remove();
    
        
        
        
    });
});

function eliminaUtente(elemento){
    var indice = tern.indexOf(elemento);
    console.log(indice);
    tern.splice(indice, 1);
    localStorage.setItem('lista', JSON.stringify(tern));
    

};



/////////////////// INDEXOF SEMPRE UGUALE A -1!!!! PERCHè?????


