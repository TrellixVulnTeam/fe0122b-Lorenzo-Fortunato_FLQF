class Vestiti {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor (id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number) {
        this.id = id,
        this.codprod = codprod,
        this.collezione = collezione,
        this.capo = capo,
        this.modello = modello,
        this.quantita = quantita,
        this.colore = colore,
        this.prezzoivaesclusa = prezzoivaesclusa,
        this.prezzoivainclusa = prezzoivainclusa,
        this.disponibile = disponibile,
        this.saldo = saldo
    }

    getSaldoCapo(): number {
        return this.prezzoivaesclusa *this.saldo/100
    }

    getAcquistoCapo(): number {
        return Math.round(this.prezzoivainclusa - this.getSaldoCapo());
    }
}

let maglia = new Vestiti (6, 2345, 'autunno-inverno', 'maglia', 2994, 9, 'verde', 16, 19.52, 'magazzino', 20)
let pantaloni = new Vestiti (7, 1134, 'autunno-inverno', 'pantaloni', 5689, 3, 'beige', 25, 30.5, 'magazzino', 15)
let sciarpa = new Vestiti (8, 8934, 'autunno-inverno', 'sciarpa', 3487, 13, 'grigio', 10, 12.2, 'negozio', 25)


// console.log(maglia.getSaldoCapo());
// console.log(maglia.getAcquistoCapo());



fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(data => {

        let sel: any = document.querySelector('#sel');
        data.forEach((e: Vestiti) => {
            let capoDiAbbigliamento = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            // console.log(capoDiAbbigliamento);
            
            let capo: string = e.capo;
            let opt: Element = document.createElement('option');
            opt.setAttribute('value', e.id)
            opt.innerHTML = capo;
            sel.append(opt)

            let div: any = document.createElement('div');
            let blocco: any = document.querySelector('.attach');
            div.setAttribute('id', e.id);
            div.classList.add('prova');
            div.classList.add('hide');
            blocco.append(div);

            for (let prop in e){
                if(prop == 'id' || prop == 'codprod' || prop == 'modello'){
                    continue;
                }else{
                    let cartellino: any = document.querySelector('#specifiche');
                    let spec: any = document.createElement('p');
                    spec.innerText = e[prop];
                    div.append(spec);


                };
                
            };
            
            
            console.log(capoDiAbbigliamento.getAcquistoCapo());
            let prezzoFinale: number = capoDiAbbigliamento.getAcquistoCapo();
            let para: Element = document.createElement('p');
            para.innerHTML = `${prezzoFinale}€`;
            div.append(para);
        });
        
        
        sel.addEventListener('change', function(event: any): any {
            let prova: any = document.querySelectorAll('.prova');
            let optVal: any = event.target.value;
            prova.forEach((element: any) => {
                if(element.id == optVal){
                    element.classList.remove('hide');
                    
                }else{
                    element.classList.add('hide');
                }
    
            });
            

        });

    });

    

    
