
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

    // 3.3 clear campo
    document.querySelector('#task_txt').value = "";

    
    // 4. al click gli elementi si devono cancellare
    elemento.addEventListener('click', function(){
        elemento.remove();
        
    })



    salva();
})


// 5. salvataggio al reload





// 6. ricostruire la lista 