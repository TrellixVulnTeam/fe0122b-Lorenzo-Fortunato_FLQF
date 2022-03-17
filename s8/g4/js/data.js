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
;
var User = /** @class */ (function () {
    function User(carica, nChiamate) {
        this.carica = carica;
        this.nChiamate = nChiamate;
    }
    ;
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ;
    User.prototype.chiamata = function (minutiDurata) {
        this.nChiamate += 1;
        this.carica -= 0.20 * minutiDurata;
    };
    ;
    User.prototype.number404 = function () {
        return this.carica;
    };
    ;
    User.prototype.getNumeroChiamate = function () {
        return this.nChiamate;
    };
    ;
    User.prototype.azzeraChiamate = function () {
        this.nChiamate = 0;
    };
    ;
    return User;
}());
;
var FirstUserTim = /** @class */ (function (_super) {
    __extends(FirstUserTim, _super);
    function FirstUserTim(carica, nChiamate) {
        return _super.call(this, carica, nChiamate) || this;
    }
    ;
    return FirstUserTim;
}(User));
;
var SecondUserVoda = /** @class */ (function (_super) {
    __extends(SecondUserVoda, _super);
    function SecondUserVoda(carica, nChiamate) {
        return _super.call(this, carica, nChiamate) || this;
    }
    ;
    SecondUserVoda.prototype.chiamata = function (minutiDurata) {
        this.nChiamate += 1;
        this.carica -= 0.50 * minutiDurata;
    };
    ;
    return SecondUserVoda;
}(User));
;
var ThirdUserIliad = /** @class */ (function (_super) {
    __extends(ThirdUserIliad, _super);
    function ThirdUserIliad(carica, nChiamate) {
        return _super.call(this, carica, nChiamate) || this;
    }
    ;
    ThirdUserIliad.prototype.chiamata = function (minutiDurata) {
        this.nChiamate += 1;
        this.carica -= 0.10 * minutiDurata;
    };
    ;
    return ThirdUserIliad;
}(User));
;
/////// PRIMO - TIM ///////
var paolino = new FirstUserTim(30, 5);
paolino.ricarica(20); //paolino ricarica
console.log(paolino.number404());
paolino.chiamata(30); //paolino fa una telefonata di 30 minuti
console.log(paolino.getNumeroChiamate());
console.log(paolino.number404());
paolino.azzeraChiamate();
console.log(paolino.getNumeroChiamate()); //paolino cancella la cronologia perchè ha fatto qualcosa di sporco...
paolino.chiamata(20);
console.log(paolino.getNumeroChiamate());
/////// SECONDO - VODAFONE ///////
var mariastella = new SecondUserVoda(50, 10);
mariastella.ricarica(20); //mariastella ricarica
console.log(mariastella.number404());
mariastella.chiamata(30); //mariastella fa una telefonata di 30 minuti
console.log(mariastella.getNumeroChiamate());
console.log(mariastella.number404());
mariastella.azzeraChiamate();
console.log(mariastella.getNumeroChiamate()); //mariastella cancella la cronologia perchè ha fatto qualcosa di sporco...
mariastella.chiamata(20);
console.log(mariastella.getNumeroChiamate());
/////// TERZO - ILIAD ///////
var giangianni = new ThirdUserIliad(50, 10);
giangianni.ricarica(20); //giangianni ricarica
console.log(giangianni.number404());
giangianni.chiamata(30); //giangianni fa una telefonata di 30 minuti
console.log(giangianni.getNumeroChiamate());
console.log(giangianni.number404());
giangianni.azzeraChiamate();
console.log(giangianni.getNumeroChiamate()); //giangianni cancella la cronologia perchè ha fatto qualcosa di sporco...
giangianni.chiamata(20);
console.log(giangianni.getNumeroChiamate());
