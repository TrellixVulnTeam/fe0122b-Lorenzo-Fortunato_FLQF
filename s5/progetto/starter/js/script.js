
// 1. creare una funzione -- addEventLIstener  per il pulsante aggiungi

var bottone = document.querySelector('#add_btn');
bottone.addEventListener('click', function(){

    // 2. prendere il valore 
    let valore = document.querySelector('#task_txt').value;
    //console.log(valore)
    
    // 3. mandare a video la creazione dei li + clear campo
    // 3.1 creare elemento
    let elemento = document.createElement('li')
    //console.log(elemento)
    
    elemento.innerText = valore
    //console.log(elemento.innerText)

    // 3.2 manifestare l'elemento
    let lista = document.querySelector('#tasks_list_html');
    let li = lista.append(elemento)

    salva(valore);
    // 3.3 clear campo
    document.querySelector('#task_txt').value = "";

    
    // 4. al click gli elementi si devono cancellare
    elemento.addEventListener('click', function(){
        elemento.remove();
        
        storagecancel(elemento);
    })



   
})


// 5. salvataggio al reload
function salva(testo){
    let valore = document.querySelector('#task_txt').value;
    //console.log(valore)

    let salvati = localStorage.getItem('lista');
    let save = salvati == null ? [] : JSON.parse(salvati)
    save.push(testo)
    
    
    localStorage.setItem('lista', JSON.stringify(save))
    
    
}

// 5.1 elimina dallo storage al click

function storagecancel(testo){
       
        let salvati = localStorage.getItem('lista');
        let save = salvati == null ? [] : JSON.parse(salvati)
        
        let indice = save.indexOf(testo)
        console.log(indice)
        
        save.splice(indice,1)
        
        localStorage.setItem('lista', JSON.stringify(save))
    };
    
    
    // 6. ricostruire la lista 