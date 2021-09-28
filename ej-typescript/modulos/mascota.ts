class Mascota {

    constructor(
        public nombre: string,
        public tipo: string
    ) {}


}

const rocky = new Mascota('Rocky', 'perro')
const felix = new Mascota('Felix', 'gato')

export default Mascota