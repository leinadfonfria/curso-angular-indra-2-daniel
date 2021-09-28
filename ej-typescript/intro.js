var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = 1;
a = 2;
var NUM = 5;
//NUM = 6 ECMACS6
var b = 'hola';
function diferenciaVarYLet() {
    var z = 1;
    var y = 1;
    if (true) {
        var z = 2;
        var y_1 = 2;
        console.log(z, y_1);
    }
    console.log(z, y);
}
diferenciaVarYLet();
var telefono = 123456789; //unión de tipos
//any, []number, Array<number>, void, boolean, NombreClase, NombreInterfaz
var cualquiera = 123;
cualquiera = 'string';
cualquiera = false;
cualquiera = [1, 2, 3];
var arrayDeNumerosYStrings = [1, '2', '3', 89];
var serie1 = {
    titulo: 'The walking dead',
    numTemporadas: 10,
    finalizada: false,
    descripcion: 'zombies'
};
var pepe = {
    nombre: 'Pepe',
    apellidos: 'perez',
    peliculas: ['']
};
//guardar numTemporadas en ntemp
function muestraDatosSerie(_a) {
    var titulo = _a.titulo, ntemp = _a.numTemporadas, finalizada = _a.finalizada;
    console.log("La serie " + titulo + " tiene " + ntemp + " temporadas, y " + (finalizada ? 'ha finalizado' : 'no ha finalizado'));
}
muestraDatosSerie(serie1);
function getNumLoteria(numSorteo) {
    var otros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otros[_i - 1] = arguments[_i];
    }
    var sorteos = {
        1: 'Bonoloto',
        2: 'Primitiva',
        3: 'Euromillon'
    };
    return "Los n\u00FAmeros para el sorteo " + sorteos[numSorteo] + " son: " + otros.join(', ');
}
console.log(getNumLoteria(1, 2, 3, 4, 5));
var frutas = ['Piña', 'Naranja', 'Sandía'];
var nuevasFrutas = __spreadArray(['kiwi'], frutas, true); //extrae el contenido del array y lo añade
var kiwi = nuevasFrutas[0], piña = nuevasFrutas[1], restoFrutas = nuevasFrutas.slice(2);
console.log(nuevasFrutas);
console.log(restoFrutas);
var otroActor = __assign(__assign({}, pepe), { nombre: 'juan' }); //otroActor.nombre = 'juan'
console.log(pepe, otroActor);
