
const series = [
    {
        titulo: 'Game of Thrones',
        numTemporadas: 8,
        finalizada: false
    },
    {
        titulo: 'The Walking Dead',
        numTemporadas: 10,
        finalizada: true
    },
    {
        titulo: 'Gangland',
        numTemporadas: 3,
        finalizada: false
    },
    {
        titulo: 'The Leftlovers',
        numTemporadas: 3,
        finalizada: true
    }
]

//foreach

// series.forEach((serie, index, arrSeries) => {
//     console.log(index, JSON.stringify(serie,null,2))
// })


//map
//modifica elementos del array y retorna un nuevo array modificado

const seriesXFinalizadas = series.map(({ ...serie }, index, arrSeries) => {
    //clonamos el objeto serie, para que no modifique el original
    if (serie.finalizada) {
        serie.titulo = 'X - ' + serie.titulo
    }
    return serie
})

console.log(seriesXFinalizadas)

console.log(series)

//filter

const seriesLargas = series
    .filter((serie, index, arrSeries) => serie.numTemporadas > 5)

console.log(seriesLargas)

//find

const primeraSerieFinalizada = series.find((serie, index, arrSeries) => serie.finalizada)

console.log(primeraSerieFinalizada)

//reduce

const numTemporadasTotales = series.reduce((totalTemporadas, serie, index, arrSeries) => {
//console.log(JSON.stringify(totalTemporadas))
return totalTemporadas += serie.numTemporadas
},0)//0 -> valor inicial de totalTemporadas

console.log(numTemporadasTotales)

const angelATrozos = [{nombre: 'Ángel'},{apellido: 'Villalva'},{email: 'email@email.com'}]

const angel = angelATrozos.reduce((acc,prop) => {
    Object.keys(prop).forEach(key => {
        acc[key] = prop[key]
    })
    return acc
},{})

//otras: every, some
//every retorna true si todos los elementos cumplen una condicion
//some retorna tru si alguno de los elementos cumplen una condición
