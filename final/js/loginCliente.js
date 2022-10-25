let data = JSON.parse(localStorage.getItem('array'));


function tomarDatos(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    return [user,pass];
}

function inicioSession(){
    let tmp = tomarDatos();
    for(let i = 0; i < data.length; i++){
        if(tmp[0] == data[i].user && tmp[1] == data[i].pass){
            sessionStorage.setItem('user', data[i].name);
            location.href="homeCliente.html"
            return;
        }
    }
    alert("Usuario o contrasena incorrectos.");
    return;
}
