//valores primitivos: string, number, boolean
let a = 'A'
let b = a
b += '!'

console.log(a)
console.log(b)

//valores por referencia: array, objetos, funciones

let colores = ['blue', 'red']
let colores2 = colores
colores2.push('yellow')

console.log(colores)

let obj = {
    n: 1
}

let obj2 = obj

obj2.n=2

console.log(obj)

let c = { ... obj, n: 3}//clona objeto y modifica propiedad

console.log(obj)
console.log(c)