let data = JSON.parse(localStorage.getItem('array'));

function limpiarTabla() {
    if (document.getElementById('tablaDatos')) {
        let tabla = document.getElementById('tablaDatos');
        tabla.remove();
    }
    return;
}

function tomarDatos() {
    let id = document.getElementById('id').value;
    return id;
}

function consultarAll(data) {
    limpiarTabla();
    this.data = data;
    let tabla = document.createElement('table');
    let cabezera = document.createElement('thead');
    let cuerpo = document.createElement('tbody');
    tabla.appendChild(cabezera);
    tabla.appendChild(cuerpo);
    document.body.appendChild(tabla);
    tabla.id = 'tablaDatos';
    let fila = document.createElement('tr');
    let colCabezera1 = document.createElement('th');
    colCabezera1.innerHTML = "Nombre";
    let colCabezera2 = document.createElement('th');
    colCabezera2.innerHTML = "Documento";
    let colCabezera3 = document.createElement('th');
    colCabezera3.innerHTML = "Cuenta";
    let colCabezera4 = document.createElement('th');
    colCabezera4.innerHTML = "Saldo";
    fila.appendChild(colCabezera1);
    fila.appendChild(colCabezera2);
    fila.appendChild(colCabezera3);
    fila.appendChild(colCabezera4);
    cuerpo.appendChild(fila);

    for (let i = 0; i < data.length; i++) {
        let fila1 = document.createElement('tr');
        let colCuerpo1 = document.createElement('th');
        colCuerpo1.innerHTML = data[i].name;
        let colCuerpo2 = document.createElement('th');
        colCuerpo2.innerHTML = data[i].id;
        let colCuerpo3 = document.createElement('th');
        colCuerpo3.innerHTML = data[i].account[0];
        let colCuerpo4 = document.createElement('th');
        colCuerpo4.innerHTML = data[i].balance;
        fila1.appendChild(colCuerpo1);
        fila1.appendChild(colCuerpo2);
        fila1.appendChild(colCuerpo3);
        fila1.appendChild(colCuerpo4);
        cuerpo.appendChild(fila1);
    }
}

function pintarTabla(data) {
    limpiarTabla();
    this.data = data;
    let tabla = document.createElement('table');
    let cabezera = document.createElement('thead');
    let cuerpo = document.createElement('tbody');
    tabla.appendChild(cabezera);
    tabla.appendChild(cuerpo);
    document.body.appendChild(tabla);
    tabla.id = 'tablaDatos';
    let fila = document.createElement('tr');
    let colCabezera1 = document.createElement('th');
    colCabezera1.innerHTML = "Nombre";
    let colCabezera2 = document.createElement('th');
    colCabezera2.innerHTML = "Documento";
    let colCabezera3 = document.createElement('th');
    colCabezera3.innerHTML = "Cuenta";
    let colCabezera4 = document.createElement('th');
    colCabezera4.innerHTML = "Saldo";
    fila.appendChild(colCabezera1);
    fila.appendChild(colCabezera2);
    fila.appendChild(colCabezera3);
    fila.appendChild(colCabezera4);
    cuerpo.appendChild(fila);
    let fila1 = document.createElement('tr');
    let colCuerpo1 = document.createElement('th');
    colCuerpo1.innerHTML = data.name;
    let colCuerpo2 = document.createElement('th');
    colCuerpo2.innerHTML = data.id;
    let colCuerpo3 = document.createElement('th');
    colCuerpo3.innerHTML = data.account[0];
    let colCuerpo4 = document.createElement('th');
    colCuerpo4.innerHTML = data.balance;
    fila1.appendChild(colCuerpo1);
    fila1.appendChild(colCuerpo2);
    fila1.appendChild(colCuerpo3);
    fila1.appendChild(colCuerpo4);
    cuerpo.appendChild(fila1);
}

function consultarCuenta() {
    let tmp = tomarDatos();
    let cuenta = [];
    for (let i = 0; i < data.length; i++) {
        if (tmp == data[i].id) {
            cuenta = data[i];
            pintarTabla(cuenta);
            return;
        }
    }
    alert("Documento no existe.");
    return;
}