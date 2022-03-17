var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
            this.saldo = saldo;
    }
    Vestiti.prototype.getSaldoCapo = function () {
        return this.prezzoivaesclusa * this.saldo / 100;
    };
    Vestiti.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Vestiti;
}());
var maglia = new Vestiti(6, 2345, 'autunno-inverno', 'maglia', 2994, 9, 'verde', 16, 19.52, 'magazzino', 20);
var pantaloni = new Vestiti(7, 1134, 'autunno-inverno', 'pantaloni', 5689, 3, 'beige', 25, 30.5, 'magazzino', 15);
var sciarpa = new Vestiti(8, 8934, 'autunno-inverno', 'sciarpa', 3487, 13, 'grigio', 10, 12.2, 'negozio', 25);
// console.log(maglia.getSaldoCapo());
// console.log(maglia.getAcquistoCapo());
fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var sel = document.querySelector('#sel');
    data.forEach(function (e) {
        var capoDiAbbigliamento = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.log(capoDiAbbigliamento);
        var capo = e.capo;
        var opt = document.createElement('option');
        opt.setAttribute('value', e.id);
        opt.innerHTML = capo;
        sel.append(opt);
        var div = document.createElement('div');
        var main = document.querySelector('main');
        div.setAttribute('id', e.id);
        div.classList.add('prova');
        div.classList.add('hide');
        main.append(div);
        for (var prop in e) {
            if (prop == 'id' || prop == 'codprod' || prop == 'modello') {
                continue;
            }
            else {
                var cartellino = document.querySelector('#specifiche');
                var spec = document.createElement('p');
                spec.innerText = e[prop];
                div.append(spec);
            }
            ;
        }
        ;
    });
    sel.addEventListener('change', function (event) {
        var prova = document.querySelectorAll('.prova');
        var optVal = event.target.value;
        prova.forEach(function (element) {
            if (element.id == optVal) {
                element.classList.remove('hide');
            }
            else {
                element.classList.add('hide');
            }
        });
    });
});
