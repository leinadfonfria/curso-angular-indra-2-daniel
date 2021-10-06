import { Usuario } from "src/app/usuarios/classes/usuario";

export class Vendehumos {

    constructor(
        public id: number,
        public nombre: string,
        public avatar: string,
        public rrss: Array<string>,
        public categorias: Array<string>,
        public descripcion: string,
        public votos: number,
        public fechaAlta: Date,
        public usuarioId: number
    ){}
}
