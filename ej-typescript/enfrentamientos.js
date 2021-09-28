"use strict";
/*

const equipos = ['Real Madrid', 'Barcelona', 'Valencia', 'Villareal']

getEnfrentamientos(equipos)

  (aleatoriamente)

 -> Real Madrid vs Valencia
 -> Villarreal vs Barcelona

 const equipos = ['Real Madrid', 'Barcelona', 'Valencia', 'Villareal', 'Sevilla']

  -> Real Madrid vs Valencia
  -> Villarreal vs Barcelona
  -> El Sevilla pasa a la siguiente ronda

  Usar Rest Params
  Desestructuración
  Función recursiva
*/
exports.__esModule = true;
var underscore_1 = require("underscore");
function getEnfrentamientos(equipos) {
    equipos = underscore_1["default"].shuffle(equipos);
    var equipo1 = equipos[0], equipo2 = equipos[1], restoEquipos = equipos.slice(2);
    if (equipo2) {
        console.log(equipo1 + " vs " + equipo2);
    }
    else {
        console.log("El " + equipo1 + " pasa a la siguiente ronda");
    }
    if (restoEquipos.length > 0) {
        return getEnfrentamientos(restoEquipos);
    }
}
function desordenar(array) {
    array = array.sort(function () { return Math.random() - 0.5; });
    return array;
}
function shuffleEquipos(equipos) {
    var equiposRandom = [];
    for (var i = equipos.length; i > 0; i--) {
        var randomPos = Math.floor(Math.random() * equipos.length);
        var equipo = equipos.splice(randomPos, 1)[0]; //equipo1 accede a la primera posición del array
        equiposRandom.push(equipo);
    }
    return [''];
}
getEnfrentamientos(['Real Madrid', 'Barcelona', 'Valencia', 'Villareal', 'Sevilla']);
