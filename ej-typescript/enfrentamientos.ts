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

import _ from 'underscore'

function getEnfrentamientos(equipos: string[] ): string[] {

    equipos = _.shuffle(equipos)

    const [equipo1, equipo2, ... restoEquipos] = equipos

    if(equipo2) {
        console.log(`${equipo1} vs ${equipo2}`)
    }
    else {
        console.log(`El ${equipo1} pasa a la siguiente ronda`)
    }

    if(restoEquipos.length > 0) {
        return getEnfrentamientos(restoEquipos)
    }
        
}

function desordenar(array){
    array = array.sort(function() {return Math.random() - 0.5})
    return array
}

function shuffleEquipos(equipos: Array<string>): Array<string> {
    
    const equiposRandom = []
    
    for(let i = equipos.length; i > 0; i--) {
        let randomPos = Math.floor(Math.random()*equipos.length)
        const [equipo] = equipos.splice(randomPos,1)  //equipo1 accede a la primera posición del array
        equiposRandom.push(equipo)
    }
    return ['']
}

getEnfrentamientos(['Real Madrid', 'Barcelona', 'Valencia', 'Villareal', 'Sevilla']);