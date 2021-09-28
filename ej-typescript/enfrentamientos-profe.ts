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
function getEnfrentamientos(equipos: string[] ): void {

    equipos = desordenar(equipos)

    if(equipos.length < 2) {
        if(equipos.length === 1) {
            console.log(`El ${equipos[0]} pasa a la siguiente ronda`)
        }
    } else {
        const [equipo1, equipo2, ... restoEquipos] = equipos
        console.log(`${equipo1} vs ${equipo2}`)
        getEnfrentamientos(restoEquipos)
    }
}

function desordenar(array){
    array = array.sort(function() {return Math.random() - 0.5})
    return array
  }

getEnfrentamientos(['Real Madrid', 'Barcelona', 'Valencia', 'Villareal', 'Sevilla']);