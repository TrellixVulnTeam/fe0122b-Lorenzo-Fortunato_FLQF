class Regione {
    constructor (prov_regione){
        this.prov_regione = prov_regione
    };

    selezionaProvince(provincia){
        provincia.classList.add('show')

    }
};

class Provincia {
    constructor (prov_it, prov_nome, prov_reg, prov_url){
        this.prov_it = prov_it,
        this.prov_nome = prov_nome,
        this.prov_reg = prov_reg,
        this.prov_url = prov_url
    };

  
};


//////// SEL REGIONI //////////
let selRegioni = document.querySelector('#regioni');
fetch('regioni.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            let regioni = new Regione (element.prov_regione);
            // console.log(regioni);

            for(prop in element){
                let regione = document.createElement('option');
                regione.innerText = element[prop];
               let valRegione = regione.setAttribute('value', element[prop]);
                selRegioni.append(regione);

            }
        });
        // console.log(regioni)

    });

/////////// SEL PROVINCE ///////////

let selCitta = document.querySelector('#citta');
fetch('province.json')
    .then(response => response.json())
    .then(data1 => {
        

        data1.forEach(e => {

            let provIstanza = new Provincia (e.prov_it, e.prov_nome, e.prov_reg, e.prov_url);
            // console.log(provIstanza)
            
            

            for(prop in e){
                if(prop == 'prov_nome'){
                    let province = document.createElement('option');
                    province.innerText = e[prop];
                        let attrProvince = province.setAttribute('id', e[prop]);
                        let classProvince = province.classList.add('prov');
                    selCitta.append(province);
                }else{
                    continue;
                };
            };

            let arrProv = [];
            arrProv.push(provIstanza['prov_reg']);
            console.log(arrProv)

            
                
        });
        
        
    });




























/*
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
            
            

        
                    
        
        
        
        
        
        
        });
            
            
    });*/
        
        









