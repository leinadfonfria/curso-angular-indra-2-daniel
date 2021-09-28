function esUnNumero(texto: string): boolean {
    const regExp = new RegExp('\d+', 'g') //> g comprueba que todos los caracteres del string coinciden
    return regExp.test(texto)
}

function esTodoMayusculas(texto: string): boolean {
    return texto === texto.toUpperCase();
}

const A = true;

//exportación nombrada
export {
    esUnNumero,
    esTodoMayusculas
}