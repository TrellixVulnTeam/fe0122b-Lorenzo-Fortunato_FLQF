// PAGINA TABELLE
let intestazione = ['Nome', 'Cognome', 'User', 'Email', 'Password1', 'Password2', 'Elimina'];
let tbl = document.querySelector('#tab');
intestazione.forEach(elemento => {
    let tableHead = document.createElement('th');
    tbl.append(tableHead);
    tableHead.innerText = elemento;
});

var tableRow;
let list = localStorage.getItem('lista');
let tern = list == null ? [] : JSON.parse(list);
// console.log(tern)
tern.forEach(elemento => {
    tableRow = document.createElement('tr');
    tbl.append(tableRow);
    tableRow.classList.add('riga');
    for(prop in elemento){
        let tableData = document.createElement('td');
        tableRow.append(tableData);
        tableData.innerText = elemento[prop];
        // console.table(elemento[prop]);
    };

});

let righeUtenti = document.querySelectorAll('.riga');
righeUtenti.forEach(elemento => {
    let dataDelete = document.createElement('button');
    elemento.append(dataDelete);
    dataDelete.innerText = 'Elimina';
    dataDelete.classList.add('delete');

});

let cancella = document.querySelectorAll('.delete');
cancella.forEach(elemento => {
    elemento.addEventListener('click', () => {
        tableRow.remove();
        
    
    
    });



})








/*for(i = 0; i < 6; i++){
        let tableData = document.createElement('td')
        tableRow.append(tableData);
    };*/


/*for(i = 0; i < 6; i++){
    let tableData = document.createElement('td')
    tableHead.append(tableData);
    
};*/




/*for(i = 0; i < tern.length; i++){
    // console.log('ok')
    for(prop in tern[i]){
        console.log(prop, tern[i][prop])
    }
};*/