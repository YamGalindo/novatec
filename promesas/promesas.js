let compras = "compras";

function hacerLaCompra() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            compras += "nuevo producto, ";
            console.log(compras);
            resolve()
        }, 2000)
    })
}

hacerLaCompra()
    .then(() => hacerLaCompra())
    .then(() => hacerLaCompra())
    .then(() => hacerLaCompra())
    .finally((compras) => console.log("compra realizada: " + compras))


let desarrollo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let proyecto = "proyecto terminado"
        let random = Math.random();
        if (random < 0.4) {
            resolve(alert(proyecto));
        }
        reject(alert("no entregado a tiempo."));
    }, 1500);
})

//then para resolver, catch para reject, finally para cualquier resultado

desarrollo.then(() => console.log(alert("proyecto finalizado"))).catch((err) => console.log(err)).finally(() => alert("proceso finalizado"))


function temporizador(time) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve, tiempo)
    })
}

temporizador(5000)
.then(() => console.log("paso el tiempo"))
.catch(() => console.log("tiempo de ejecicion interrumpido"));