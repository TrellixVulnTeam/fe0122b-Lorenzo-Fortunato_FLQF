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
var SonAccount = /** @class */ (function () {
    function SonAccount(nome, cognome, balanceFinale) {
        this.balanceFinal = 0;
        this.nome = nome;
        this.cognome = cognome;
        this.balanceFinal = balanceFinale;
    }
    ;
    SonAccount.prototype.oneDeposit = function (versamento) {
        return this.balanceFinal += versamento;
    };
    ;
    SonAccount.prototype.oneWithDraw = function (prelievo) {
        return this.balanceFinal -= prelievo;
    };
    ;
    return SonAccount;
}());
;
var figlio = new SonAccount('Pietreppaolo', 'Patuelli', 4);
console.log(figlio.oneDeposit(1500));
console.log(figlio.oneWithDraw(200));
var MumAccount = /** @class */ (function (_super) {
    __extends(MumAccount, _super);
    function MumAccount(nome, cognome, interesse, balanceFinal) {
        var _this = _super.call(this, nome, cognome, balanceFinal) || this;
        _this.interesse = interesse;
        return _this;
    }
    ;
    MumAccount.prototype.calcInterest = function (versamento) {
        return this.interesse = versamento * 10 / 100;
    };
    MumAccount.prototype.addInterest = function () {
        return this.balanceFinal += this.interesse;
    };
    return MumAccount;
}(SonAccount));
var mamma = new MumAccount('Piera', 'Bellini', 10, 100);
console.log(mamma.oneDeposit(3000));
console.log(mamma.oneDeposit(3000));
console.log(mamma);
console.log(mamma.oneWithDraw(1800));
console.log(mamma.calcInterest(2000));
console.log(mamma.addInterest());
