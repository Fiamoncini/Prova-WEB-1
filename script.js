document.addEventListener("DOMContentLoaded", function() {
    updateUserIdentification();

    const botaosubmit = document.getElementById("botaosubmit");
    if (botaosubmit) {
        botaosubmit.addEventListener("click", function (event) {
            let login = document.getElementById("username").value;
            let senha = document.getElementById("password").value;

            if (login && senha) {
                localStorage.setItem("login", login);
                alert("Autenticado!");
                window.location.href = "index.html";
            } else {
                alert("Login e senha não podem ser vazios!");
            }
        });
    }

    const themeRadios = document.querySelectorAll('input[name="theme"]');
    if (themeRadios.length > 0) {
        themeRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                const cadastroForm = document.querySelector('.cadastro-form');
                if (this.value === 'custom') {
                    cadastroForm.classList.add('custom-theme');
                } else {
                    cadastroForm.classList.remove('custom-theme');
                }
            });
        });
    }

    const logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
function updateUserIdentification() {
    const userIdentification = document.getElementById("identificacao");
    if (userIdentification) {
        const loggedInUser = localStorage.getItem("login");
        if (loggedInUser) {
            const userPhotoHTML = '<a href="cadastro.html"><img src="user-photo.webp" alt="Foto do Usuário" class="user-photo"></a>';
            userIdentification.innerHTML = userPhotoHTML + "Usuário: " + loggedInUser;
        } else {
            userIdentification.textContent = "Usuário não autenticado";
        }
    }
}