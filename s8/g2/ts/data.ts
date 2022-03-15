class SonAccount {
    nome: string
    cognome: string
    balanceFinal: number = 0
  

    constructor (nome: string, cognome: string, balanceFinale: number){
        this.nome = nome;
        this.cognome = cognome;
        this.balanceFinal = balanceFinale;
        
    };

    oneDeposit(versamento: number): number {    // versamento
        
        return  this.balanceFinal += versamento; 
    };
    
    oneWithDraw(prelievo: number): number { // prelievo
        
        return this.balanceFinal -= prelievo;  
    };
    
    
    
    
};

let figlio = new SonAccount('Pietreppaolo', 'Patuelli', 4);

console.log(figlio.oneDeposit(1500));

console.log(figlio.oneWithDraw(200));


class MumAccount extends SonAccount {
    interesse: number; 

    constructor (nome: string, cognome: string, interesse: number, balanceFinal: number){
        super(nome, cognome, balanceFinal)
        this.interesse = interesse
    };


    calcInterest(versamento: number) {
        return this.interesse = versamento * 10 / 100;
    }

    addInterest() {
        return this.balanceFinal += this.interesse;
    }
}

let mamma = new MumAccount ('Piera', 'Bellini', 10, 100);
console.log(mamma.oneDeposit(3000));
console.log(mamma.oneDeposit(3000));
console.log(mamma);

console.log(mamma.oneWithDraw(1800));

console.log(mamma.calcInterest(2000));
console.log(mamma.addInterest());