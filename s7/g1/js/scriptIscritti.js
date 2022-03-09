// PAGINA TABELLE
let intestazione = ['Nome', 'Cognome', 'User', 'Email', 'Password1', 'Password2', 'Elimina'];
let tbl = document.querySelector('#tab');
intestazione.forEach(elemento => {
    let tableHead = document.createElement('th');
    tbl.append(tableHead);
    tableHead.innerText = elemento;
});

let list = localStorage.getItem('lista');
let tern = list == null ? [] : JSON.parse(list);
// console.log(tern)
tern.forEach(elemento => {
    let tableRow = document.createElement('tr');
    tbl.append(tableRow);
    for(prop in elemento){
        let tableData = document.createElement('td');
        tableRow.append(tableData);
        tableData.innerText = elemento[prop];
        console.table(elemento[prop]);
    };

});

for(i = 0; i < 2; i++){
    let tableData = document.createElement('td');
    tableRow.append(tableData);
}








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