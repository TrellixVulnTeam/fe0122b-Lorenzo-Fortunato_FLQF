// creo la select delle regioni
let selRegioni = document.querySelector('#regioni');
let selCitta = document.querySelector('#citta');
fetch('regioni.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            
            for(prop in element){
                let regione = document.createElement('option');
                regione.innerText = element[prop];
                let valRegione = regione.setAttribute('value', element[prop]);
                selRegioni.append(regione);

            }
        });

        
        

        
        
    });
    
// creo la select delle province
fetch('province.json')
    .then(response => response.json())
    .then(data1 => {
    
        data1.forEach(e => {
                
            for(prop in e){
                if(prop == 'prov_nome'){
                    let province = document.createElement('option');
                    province.innerText = e[prop];
                        let attrProvince = province.setAttribute('id', e[prop]);
                        let classProvince = province.classList.add('prov');
                    selCitta.append(province);
                }else{
                    continue;
                }
            }

            
                
        });

        // faccio combaciare la select
        selCitta.addEventListener('change', (event) => {
            let getCitta = event.target.value;
            // console.log(getCitta);
            let prov = document.querySelectorAll('.prov');
            prov.forEach(element => {
                let getId = element.getAttribute('id');
                // console.log(getId)
                if(getCitta == getId){
                    console.log('ok');
                };
            });

        
                    
        
        
        
        
        
        
        });
            
            
    });
        
        









