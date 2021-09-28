"use strict";
exports.__esModule = true;
exports.esTodoMayusculas = exports.esUnNumero = void 0;
function esUnNumero(texto) {
    var regExp = new RegExp('\d+', 'g'); //> g comprueba que todos los caracteres del string coinciden
    return regExp.test(texto);
}
exports.esUnNumero = esUnNumero;
function esTodoMayusculas(texto) {
    return texto === texto.toUpperCase();
}
exports.esTodoMayusculas = esTodoMayusculas;
var A = true;
