let btnLog = document.querySelector('#btnLog');
let log = document.querySelectorAll('.log');
// console.log(log)
btnLog.addEventListener('click', function(ee) {
    ee.preventDefault();
    let userLog = document.querySelector('#userLog').value;
    let emailLog = document.querySelector('#emailLog').value;
    let passwordLog = document.querySelector('#passwordLog').value;
    log.forEach(elementoLog => {
        let valueLog = elementoLog.value;
        if(valueLog == ""){
            elementoLog.style.border = '1px solid red';
        }else{
            elementoLog.style.border = "";
        };
    });

    const personaLog  = new UtenteLog(userLog, emailLog, passwordLog);
    // console.log(personaLog);



    

    recupera(personaLog);






});

// classe UtenteLog
class UtenteLog {
    constructor (userLog, emailLog, passwordLog){
        this.userLog = userLog;
        this.emailLog = emailLog;
        this.passwordLog = passwordLog;
    };
};


function recupera(pippoLog){
    let list = localStorage.getItem('lista');
    let tern = list == null ? [] : JSON.parse(list);
    let checkEmail = tern.find(oldUser => oldUser.email == pippoLog.emailLog);
    console.log(checkEmail)

};























// LOG-IN
    // 1. inserimento dati 
        // 1.1 i campi non devono essere lasciati vuoti
        // 1.2 crea un oggetto per ogni inserimento
        // 1.3 compara l'oggetto log-in con l'oggetto form
        // 1.4 collega a pagina tabelle

// PAGINA TABELLE