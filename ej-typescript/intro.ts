var a: number = 1
a = 2

const NUM = 5
//NUM = 6 ECMACS6

let b = 'hola'

function diferenciaVarYLet() {
    var z = 1
    let y = 1
    if(true) {
        var z = 2
        let y = 2
        console.log(z,y)
    }
    console.log(z,y)
}

diferenciaVarYLet()

let telefono: number | string = 123456789 //unión de tipos

//any, []number, Array<number>, void, boolean, NombreClase, NombreInterfaz

let cualquiera: any = 123
cualquiera = 'string'
cualquiera = false
cualquiera = [1,2,3]

type miTipo = number | string
let arrayDeNumerosYStrings: Array<miTipo> = [1,'2','3', 89]

interface Serie {
    titulo: string
    numTemporadas: number
    finalizada: boolean
}

const serie1: Serie = {
    titulo: 'The walking dead',
    numTemporadas: 10,
    finalizada: false,
    descripcion: 'zombies'
}

//fusiona interfaces con el mismo nombre
interface Serie { 
    descripcion: string
}

interface Persona {
    nombre: string
    apellidos: string
}

interface Actor extends Persona {
    peliculas: Array<string>
}

const pepe: Actor =  {
    nombre: 'Pepe',
    apellidos: 'perez',
    peliculas: ['']
}
                                    //guardar numTemporadas en ntemp
function muestraDatosSerie({titulo, numTemporadas:ntemp, finalizada}: Serie): void {

    console.log(`La serie ${titulo} tiene ${ntemp} temporadas, y ${(finalizada ? 'ha finalizado' : 'no ha finalizado')}`)
}

muestraDatosSerie(serie1)

function getNumLoteria(numSorteo: number, ... otros:number[]): string {

    const sorteos = {
        1: 'Bonoloto',
        2: 'Primitiva',
        3: 'Euromillon'
    }

    return `Los números para el sorteo ${sorteos[numSorteo]} son: ${otros.join(', ')}`
}

console.log(getNumLoteria(1,2,3,4,5))

const frutas: Array<string> = ['Piña', 'Naranja', 'Sandía']

const nuevasFrutas = ['kiwi', ... frutas]//extrae el contenido del array y lo añade

const [kiwi, piña, ... restoFrutas] = nuevasFrutas;

console.log(nuevasFrutas);
console.log(restoFrutas);

const otroActor = {... pepe, nombre: 'juan'} //otroActor.nombre = 'juan'

console.log(pepe,otroActor)


