//console.log(this)

const persona = {

    nombre: 'Dani',
    apellido: 'RA',

    getNombreCompleto: () => `${this.nombre} ${this.apellido}`,//la función de flecha no tiene this propio, por lo que usa el previo
    getNombreCompleto2: function() { return `${this.nombre} ${this.apellido}` }, 
        //función normal: objeto que llama a la función es el this
        //función flecha: this es el objeto que se encuentra en el ámbito superior

    getNombreCompleto3: function() {
        this.fecha = new Date();//aquí this es "persona"
        const muestraFecha = function() { //esta función tiene su propio this
            console.log('Fecha ', this.fecha)
        }.bind(this)//aquí le asignamos el objeto "persona"
        muestraFecha()
    },

    //usando el that:
    getNombreCompleto4: function() {
        this.fecha = new Date();//aquí this es "persona"
        let that = this//asignamos this (persona) a that y usamos that en la función
        const muestraFecha = function() { //esta función tiene su propio this
            console.log('Fecha ', that.fecha)
        }
        muestraFecha()
    },

    //usando función flecha
    getNombreCompleto5: function() {
        this.fecha = new Date();//aquí this es "persona"
        
        const muestraFecha = () => { 
            console.log('Fecha ', this.fecha)//como es una función flecha, aquí this es el objeto desde el que se llama a la función
        }
        muestraFecha()
    }
}

// persona.getNombreCompleto = persona.getNombreCompleto.bind(persona)//no funciona con funciones flecha
// persona.getNombreCompleto2 = persona.getNombreCompleto2.bind(persona)
//         //pasamos como parámetro el objeto que queremos utilizar como this
// console.log(persona.getNombreCompleto2())
// persona.getNombreCompleto2 = persona.getNombreCompleto2.bind({nombre: 'pepe', apellido: 'perez'})

// console.log(persona.getNombreCompleto2())

console.log(persona.getNombreCompleto3())

// function a() {
//     console.log(this) //objecto global (si ejecutamos en el navegador sería window)
// }

// a();

