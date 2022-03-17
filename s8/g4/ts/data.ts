interface Smartphone {
    carica: number
    nChiamate: number
};


class User implements Smartphone {
    carica: number
    nChiamate: number

    constructor(carica: number, nChiamate: number){
        this.carica = carica
        this.nChiamate = nChiamate
    };

    public ricarica(unaRicarica: any): void {
        this.carica += unaRicarica
    };

    public chiamata(minutiDurata: any): void {
        this.nChiamate += 1
        this.carica -= 0.20*minutiDurata
    };

    public number404(): number {
        return this.carica
    };

    public getNumeroChiamate(): number {
        return this.nChiamate
    };

    public azzeraChiamate(): void {
        this.nChiamate = 0
    };
};


class FirstUserTim extends User {
    
    constructor(carica: number, nChiamate: number){
        super (carica, nChiamate)
    };

};


class SecondUserVoda extends User {
    
    constructor(carica: number, nChiamate: number){
        super (carica, nChiamate)
    };

    public chiamata(minutiDurata: any): void {
        this.nChiamate += 1
        this.carica -= 0.50*minutiDurata
    };
};


class ThirdUserIliad extends User {
    
    constructor(carica: number, nChiamate: number){
        super (carica, nChiamate)
    };

    public chiamata(minutiDurata: any): void {
        this.nChiamate += 1
        this.carica -= 0.10*minutiDurata
    };
};




/////// PRIMO - TIM ///////
let paolino = new FirstUserTim (30, 5);
paolino.ricarica(20);    //paolino ricarica
console.log(paolino.number404());

paolino.chiamata(30);     //paolino fa una telefonata di 30 minuti
console.log(paolino.getNumeroChiamate());   
console.log(paolino.number404());

paolino.azzeraChiamate();
console.log(paolino.getNumeroChiamate());    //paolino cancella la cronologia perchè ha fatto qualcosa di sporco...

paolino.chiamata(20);
console.log(paolino.getNumeroChiamate());




/////// SECONDO - VODAFONE ///////
let mariastella = new SecondUserVoda (50, 10);
mariastella.ricarica(20);    //mariastella ricarica
console.log(mariastella.number404());

mariastella.chiamata(30);     //mariastella fa una telefonata di 30 minuti
console.log(mariastella.getNumeroChiamate());   
console.log(mariastella.number404());

mariastella.azzeraChiamate();
console.log(mariastella.getNumeroChiamate());    //mariastella cancella la cronologia perchè ha fatto qualcosa di sporco...

mariastella.chiamata(20);
console.log(mariastella.getNumeroChiamate());




/////// TERZO - ILIAD ///////
let giangianni = new ThirdUserIliad (50, 10);
giangianni.ricarica(20);    //giangianni ricarica
console.log(giangianni.number404());

giangianni.chiamata(30);     //giangianni fa una telefonata di 30 minuti
console.log(giangianni.getNumeroChiamate());   
console.log(giangianni.number404());

giangianni.azzeraChiamate();
console.log(giangianni.getNumeroChiamate());    //giangianni cancella la cronologia perchè ha fatto qualcosa di sporco...

giangianni.chiamata(20);
console.log(giangianni.getNumeroChiamate());