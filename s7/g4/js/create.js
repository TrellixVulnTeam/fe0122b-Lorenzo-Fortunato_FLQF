fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => console.log(data))


let crea = document.querySelector('#creaLabel');
// console.log(create)
crea.addEventListener('click', function(e){
    e.preventDefault();

    let val = document.querySelectorAll('.val');
    console.log(val)
    val.forEach(elemento => {
        let valoreElemento = elemento.value;
            if(valoreElemento == ''){
                elemento.style.border = '1px solid red';
            }
    });
});