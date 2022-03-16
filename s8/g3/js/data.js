var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo) {
        this.nome = nome,
            this.cognome = cognome,
            this.professione = professione,
            this.tasseinps = tasseinps,
            this.tasseirpef = tasseirpef;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    return Lavoratore;
}());
;
// INQUADRAMENTI DIFFERENTI
var Free = /** @class */ (function (_super) {
    __extends(Free, _super);
    function Free(nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo) {
        var _this = _super.call(this, nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo) || this;
        _this.codredd = codredd;
        return _this;
    }
    ;
    Free.prototype.getUtileTasse = function () {
        if (this.codredd == "forfettario") {
            return this.redditoAnnuoLordo * 5 / 100;
        }
        else {
            return this.redditoAnnuoLordo * 20 / 100;
        }
    };
    ;
    Free.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * this.tasseinps / 100;
    };
    ;
    Free.prototype.getTasseIrpef = function () {
        return this.redditoAnnuoLordo * this.tasseirpef / 100;
    };
    ;
    Free.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    };
    return Free;
}(Lavoratore));
;
var Dipendente = /** @class */ (function (_super) {
    __extends(Dipendente, _super);
    function Dipendente(nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo) {
        return _super.call(this, nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo) || this;
    }
    ;
    Dipendente.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * 2 / 100;
    };
    ;
    Dipendente.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * this.tasseinps / 100;
    };
    ;
    Dipendente.prototype.getTasseIrpef = function () {
        return this.redditoAnnuoLordo * this.tasseirpef / 100;
    };
    ;
    Dipendente.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    };
    ;
    return Dipendente;
}(Lavoratore));
;
// RUOLI
var Programmatore = /** @class */ (function (_super) {
    __extends(Programmatore, _super);
    function Programmatore(nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo) {
        return _super.call(this, nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo) || this;
    }
    ;
    return Programmatore;
}(Free));
;
var Dirigente = /** @class */ (function (_super) {
    __extends(Dirigente, _super);
    function Dirigente(nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo) {
        return _super.call(this, nome, cognome, professione, tasseinps, tasseirpef, codredd, redditoAnnuoLordo) || this;
    }
    ;
    return Dirigente;
}(Free));
;
var FrontOffice = /** @class */ (function (_super) {
    __extends(FrontOffice, _super);
    function FrontOffice(nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo) {
        return _super.call(this, nome, cognome, professione, tasseinps, tasseirpef, redditoAnnuoLordo) || this;
    }
    ;
    return FrontOffice;
}(Dipendente));
;
var mariuccio = new Programmatore('Mariuccio', 'Marchetti', 'frontend', 25, 10, 'forfettario', 35000);
// console.log(mariuccio);
mariuccio.getUtileTasse();
console.log(mariuccio.getUtileTasse());
mariuccio.getTasseInps();
console.log(mariuccio.getTasseInps());
mariuccio.getTasseIrpef();
console.log(mariuccio.getTasseIrpef());
mariuccio.getRedditoAnnuoNetto();
console.log(mariuccio.getRedditoAnnuoNetto());
var sirGay = new Dirigente('sirGay', 'Antoni', 'dirigenteCapo', 25, 10, 'ordinario', 100000);
// console.log(sirGay);
sirGay.getUtileTasse();
console.log(sirGay.getUtileTasse());
sirGay.getTasseInps();
console.log(sirGay.getTasseInps());
sirGay.getTasseIrpef();
console.log(sirGay.getTasseIrpef());
sirGay.getRedditoAnnuoNetto();
console.log(sirGay.getRedditoAnnuoNetto());
var paoletta = new FrontOffice('Paoletta', 'Siviglia', 'impiegata', 25, 10, 20000);
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
var dipendenti = [mariuccio, sirGay, paoletta];
console.log(dipendenti);
dipendenti.forEach(function (elemento) {
    for (var prop in elemento) {
        console.log(elemento[prop]);
        var generalita = document.querySelector('#generalita');
        var proprieta = document.createElement('p');
        // console.log(proprieta)
        proprieta.innerText = elemento[prop];
        // console.log(proprieta.innerText)
        generalita.append(proprieta);
    }
});
