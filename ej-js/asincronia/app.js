const fs = require('fs')

// const getContenido = (err, contenido) => {
//     console.log(contenido.toString())
// }

// fs.readFile('texto1.txt',getContenido)
// fs.readFile('texto2.txt',getContenido)
// fs.readFile('texto3.txt',getContenido)

// fs.readFile('texto1.txt',(err, contenido) => {
//     console.log(contenido.toString())
//     fs.readFile('texto2.txt',(err, contenido) => {
//         console.log(contenido.toString())
//         fs.readFile('texto3.txt',(err, contenido) => {
//             console.log(contenido.toString())
//         })
//     })
// })


//PROMISES

console.log('------------')

// const fspr = require('fs').promises

// fspr.readFile('texto1.txt')
//     .then(data => {
//         console.log(data.toString())
//         return fspr.readFile('texto2.txt')
//     })
//     .then(data => {
//         console.log(data.toString())
//         return fspr.readFile('texto3.txt')
//     })
//     .then(data => {
//         console.log(data.toString())
//     })


//ASYNC/AWAIT

const fspr = require('fs').promises

async function a() {
    const contenido1 = await fspr.readFile('texto1.txt')//await indica que no se siga ejecutando código hasta que termine
    console.log(contenido1.toString())
    const contenido2 = await fspr.readFile('texto2.txt')//await indica que no se siga ejecutando código hasta que termine
    console.log(contenido2.toString())
    const contenido3 = await fspr.readFile('texto3.txt')//await indica que no se siga ejecutando código hasta que termine
    console.log(contenido3.toString())
}

a()

//const a = async() => {}
