let botaosubmit = document.getElementById("botaosubmit");

botaosubmit.addEventListener("click", function (event) {
    let login = document.getElementById("username").value;
    let senha = document.getElementById("password").value;

    if (login && senha) {
        localStorage.setItem("login", login);
        alert("Autenticado!");
    } else {
        alert("Login e senha não podem ser vazios!");
    }
});