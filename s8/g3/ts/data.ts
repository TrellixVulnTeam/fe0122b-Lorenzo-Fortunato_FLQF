abstract class Lavoratore {
    nome: string
    cognome: string
    professione: string
    tasseinps: number 
    tasseirpef: number
    redditoAnnuoLordo: number

    constructor (nome: string, cognome: string, professione: string, tasseinps: number, tasseirpef: number, redditoAnnuoLordo: number){
    
        this.nome = nome,
        this.cognome = cognome,
        this.professione = professione,
        this.tasseinps = tasseinps,
        this.tasseirpef = tasseirpef
        this.redditoAnnuoLordo = redditoAnnuoLordo

    }


    abstract getUtileTasse():number
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnuoNetto(tasse: number, inps: number, irpef: number):number

};







// INQUADRAMENTI DIFFERENTI
class Free extends Lavoratore {
    codredd: string

    constructor (nome:string, cognome: string, professione: string, tasseinps: number, tasseirpef: number, codredd: string, redditoAnnuoLordo: number){
        super (nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo)
        this.codredd = codredd
        
    };

    getUtileTasse(): number {   
        if(this.codredd == "forfettario"){
            return this.redditoAnnuoLordo * 5 / 100
        }else{
            return this.redditoAnnuoLordo * 20 / 100
        } 
    };

    getTasseInps(): number {
        return this.redditoAnnuoLordo * this.tasseinps/100;
    };

    getTasseIrpef():number {
        return this.redditoAnnuoLordo * this.tasseirpef/100;
    };

    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse() -this.getTasseInps() - this.getTasseIrpef() 
    }

};

class Dipendente extends Lavoratore {
    

    constructor (nome:string, cognome: string, professione: string, tasseinps: number, tasseirpef: number, redditoAnnuoLordo: number){
        super (nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo)
        
        
    };

    getUtileTasse(): number {  
        return this.redditoAnnuoLordo * 2 / 100
    };

    getTasseInps(): number {
        return this.redditoAnnuoLordo * this.tasseinps/100;
    };

    getTasseIrpef():number {
        return this.redditoAnnuoLordo * this.tasseirpef/100;
    };

    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse() -this.getTasseInps() - this.getTasseIrpef() 
    };
};







// RUOLI
class Programmatore extends Free {
    
    constructor (nome:string, cognome: string, professione: string, tasseinps: number, tasseirpef: number, codredd: string, redditoAnnuoLordo: number){
        super (nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo)
        
    };


};

class Dirigente extends Free {
    

    constructor (nome:string, cognome: string, professione: string, tasseinps: number, tasseirpef: number, codredd: string, redditoAnnuoLordo: number){
        super (nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo)
    
        
    };

    
};

class FrontOffice extends Dipendente {
    

    constructor (nome:string, cognome: string, professione: string, tasseinps: number, tasseirpef: number, redditoAnnuoLordo: number){
        super (nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo)
        
        
    };

    
};



let mariuccio = new Programmatore ('Mariuccio', 'Marchetti', 'frontend', 25, 10, 'forfettario', 35000);
// console.log(mariuccio);

mariuccio.getUtileTasse();
console.log(mariuccio.getUtileTasse());

mariuccio.getTasseInps();
console.log(mariuccio.getTasseInps());

mariuccio.getTasseIrpef();
console.log(mariuccio.getTasseIrpef());

mariuccio.getRedditoAnnuoNetto();
console.log(mariuccio.getRedditoAnnuoNetto());







let sirGay = new Dirigente ('sirGay', 'Antoni', 'dirigenteCapo', 25, 10, 'ordinario', 100000);
// console.log(sirGay);

sirGay.getUtileTasse();
console.log(sirGay.getUtileTasse());

sirGay.getTasseInps();
console.log(sirGay.getTasseInps());

sirGay.getTasseIrpef();
console.log(sirGay.getTasseIrpef());

sirGay.getRedditoAnnuoNetto();
console.log(sirGay.getRedditoAnnuoNetto());







let paoletta = new FrontOffice ('Paoletta', 'Siviglia', 'impiegata', 25, 10, 20000);
// console.log(sirGay);

paoletta.getUtileTasse();
console.log(paoletta.getUtileTasse());

paoletta.getTasseInps();
console.log(paoletta.getTasseInps());

paoletta.getTasseIrpef();
console.log(paoletta.getTasseIrpef());

paoletta.getRedditoAnnuoNetto();
console.log(paoletta.getRedditoAnnuoNetto());






// creazione
let dipendenti: any[] = [mariuccio, sirGay, paoletta];
console.log(dipendenti);
dipendenti.forEach(elemento => {
    for(let prop in elemento){
        console.log(elemento[prop]);
        let generalita: any = document.querySelector('#generalita');
        let proprieta: any = document.createElement('p');
        // console.log(proprieta)
        proprieta.innerText = elemento[prop]
        // console.log(proprieta.innerText)
        generalita.append(proprieta)
        

    }

    ////////////// PERCHè MI STAMPA QUELLO CHE GLI PARE?!?!

});


