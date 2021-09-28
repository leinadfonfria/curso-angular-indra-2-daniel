"use strict";
exports.__esModule = true;
var validaciones_1 = require("./validaciones");
var mascota_1 = require("./mascota");
function esTodoMayusculas() {
}
new mascota_1["default"]('a', 'b');
console.log((0, validaciones_1.esUnNumero)('abc'));
console.log((0, validaciones_1.esTodoMayusculas)('abc'));
