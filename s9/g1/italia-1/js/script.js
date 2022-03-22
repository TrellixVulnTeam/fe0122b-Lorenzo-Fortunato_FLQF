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
            // console.log(regioni['prov_regione'])
            for(prop in element){
                let regione = document.createElement('option');
                regione.innerText = element[prop];
                let valRegione = regione.setAttribute('value', element[prop]);
                selRegioni.append(regione);

            }
        });

 

    });

/////SEL PROVINCE ////
let selCitta = document.querySelector('#citta');
fetch('province.json')
    .then(response => response.json())
    .then(prov => {
        console.log(prov)
       
        
        prov.forEach(e => {
            // console.log(e.prov_reg)
            let optProv = document.createElement('option');
            optProv.innerText = e.prov_nome;
            optProv.classList.add('hide');
            selCitta.append(optProv);
            
            
            function boh(pippo){
                if(e.prov_reg == pippo){
                    optProv.classList.remove('hide');
                }else{
                    optProv.classList.add('hide');
                }
                
                
            }
            
            
            
            selRegioni.addEventListener('change', function(e){
                let evento = e.target.value;
                
                boh(evento);
                
    
            });
            
            selCitta.addEventListener('change', function(evento){
                let scelta = evento.target.value;
    
                if(scelta == e.prov_nome){
                    let imgReg = document.querySelector('#imgReg');
                    let imgR = document.createElement('img');
                    imgR.setAttribute('src', 'e.prov_url');
                    imgReg.append(imgR);
                }
    
    
            });
        });


        
        
    });







    
                    // for(prop in e){
                    //     if(prop == 'prov_nome'){
                    //         let optProv = document.createElement('option');
                    //         optProv.innerText = e[prop];
                    //         optProv.classList.remove('hide');
                    //         selCitta.append(optProv);




    
                                    // if(x = 0) {
                                    //     let optProv = document.createElement('option');
                                    //     optProv.innerText = e[prop];
                                    //     optProv.classList.add('hide');
                                    //     selCitta.append(optProv);
                                    // }





       
        /*prov.forEach(e => {
            // console.log(e['prov_nome'] )
            for(prop in e){

                if(prop == 'prov_nome'){
                    let province = document.createElement('option');
                    province.innerText = e[prop];
                    let attrProvince = province.setAttribute('id', e[prop]);
                    let classProvince = province.classList.add('hide');
                    selCitta.append(province);

                    
                }else{
                    continue;
                };
                
            };
            
            console.log(e['prov_reg'])
            
            
            
            
            selRegioni.addEventListener('change', function(event){
               
                let evento = event.target.value;
                // console.log(evento);
                matchSelect(evento, e['prov_reg']);
                
                
                
                
                
                
                
            });
        });
        
        
        function matchSelect(pippo, claudio){
            if(pippo == claudio){
               province.classList.remove('hide');
            }
        };



    })*/
















/////////// SEL PROVINCE ///////////
/*
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

*/


























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
        
        









