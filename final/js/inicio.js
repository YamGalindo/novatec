let json = [{
    "user": "a",
    "pass": "a",
    "name": "a",
    "id": "1231231",
    "account": [
        "1hjk123"
    ],
    "address": "a",
    "phone": "3999999",
    "balance": 100
}]



let data = JSON.stringify(json);
localStorage.setItem('array', data);