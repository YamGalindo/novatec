let data = JSON.parse(localStorage.getItem('array'));

function tomarDatos() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let id = document.getElementById('document').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    return [user, pass, name, id, address, phone];

}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function random() {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


class Cuenta {
    constructor(user, pass, name, id, account, address, phone) {
        this.user = user;
        this.pass = pass;
        this.name = name;
        this.id = id;
        this.account = account;
        this.address = address;
        this.phone = phone;
        this.balance = 100;
    }
}

function crearCuenta() {
    let tmp = tomarDatos();
    for (let i = 0; i < data.length; i++) {
        if (tmp[0] == data[i].user || tmp[3] == data[i].id) {
            alert("Usuario o documento ya existente / campo contrasena vacio");
        }
        let cuenta = new Cuenta(tmp[0], tmp[1], tmp[3], tmp[4], [random()], tmp[5], tmp[6]);
        data.push(cuenta);
        let json = JSON.stringify(data);
        localStorage.setItem('array', json);
        alert("cuenta creada")
        location.href="loginCliente.html"
        return;
    }

}
