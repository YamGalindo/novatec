let data = JSON.parse(localStorage.getItem('array'));
let userActual = sessionStorage.getItem('user');

function encontrarUser(user) {
    let tmp = [];
    this.user = user;
    for (let i = 0; i < data.length; i++) {
        if (user == data[i].user) {
            tmp = data[i];
            return tmp;
        }
    }
}

function encontrarCuenta(account){
    let tmp = [];
    this.account = account;
    for (let i = 0; i < data.length; i++) {
        if (account == data[i].account) {
            tmp = data[i];
            return tmp;
        }
    }
}

function tomarDatos(){
    let account = document.getElementById('account').value;
    let cantidad = document.getElementById('cantidad').value * 1;
    return[account,cantidad];
}

function transferir(){
    let tmp = tomarDatos();
    let user = encontrarUser(userActual);
    let user2 = encontrarCuenta(tmp[0]);

    for(let i = 0; i < data.length; i++){
        if((tmp[0] == data[i].account && user.account[0] != tmp[0]) && ((user.balance = user.balance - tmp[1]) > 5)){
            console.log(user2, user)
            user2.balance = user2.balance + tmp[1];
            user.balance = user.balance - tmp[1];
            let json = JSON.stringify(data);
            localStorage.setItem('array', json);
            alert("transferencia realizada");
            return;
        }
    }
    alert("cuenta no existe o es igual a la actual o el saldo es insuficiente.");
    return;
}