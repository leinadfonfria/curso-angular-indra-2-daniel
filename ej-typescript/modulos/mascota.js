"use strict";
exports.__esModule = true;
var Mascota = /** @class */ (function () {
    function Mascota(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    return Mascota;
}());
var rocky = new Mascota('Rocky', 'perro');
var felix = new Mascota('Felix', 'gato');
exports["default"] = Mascota;
