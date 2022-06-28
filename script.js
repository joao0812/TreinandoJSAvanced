let array = [1, 2, 3, 4, 5, 6, 10]

// MAP

function dobro(num) {
    return num * 5
}

function mapea(array, callback) {
    let newArray = []
    for (i of array) {
        newArray.push(callback(i))
    }
    return newArray
}

console.log(mapea(array, dobro))

//REDUCE

const BebidasPreferidas = [
    { nome: "João", copos: 8 },
    { nome: "Bia", copos: 4 },
    { nome: "Victor", copos: 20 },
    { nome: "Bute", copos: 2 },
    { nome: "Khedira", copos: 6 }
]

/* let totalCopos = BebidasPreferidas.reduce((ValorAnte, ValorAtual) => ValorAnte + ValorAtual.copos, 0) */

function somandoCopos() {
    let total = 0
    for (i of this) {
        total += i.copos
    }
    return total
}



function reducea(metodo, callback) {
    let parametro = callback.bind(metodo)
    return parametro()
}

console.log(reducea(BebidasPreferidas, somandoCopos))


/* function reducea(array, callback) {

} */