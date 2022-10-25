let data = JSON.parse(localStorage.getItem('array'));

let usuario = sessionStorage.getItem('user');

function encontrarUser() {
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
        if (usuario == data[i].user) {
            tmp = data[i];
            return tmp;
        }
    }
}

function llenarTabla(data) {
    this.data = data;
    let tabla = document.createElement('table');
    let cabezera = document.createElement('thead');
    let cuerpo = document.createElement('tbody');
    tabla.appendChild(cabezera);
    tabla.appendChild(cuerpo);
    document.body.appendChild(tabla);
    tabla.id = 'tablaDatos';
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

function procesar(){
    llenarTabla(encontrarUser());
}