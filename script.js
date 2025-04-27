document.addEventListener("DOMContentLoaded", function() {
    updateUserIdentification();

    const botaosubmit = document.getElementById("botaosubmit");
    if (botaosubmit) {
        botaosubmit.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário
            
            let login = document.getElementById("username").value;
            let senha = document.getElementById("password").value;

            if (!login || !senha) {
                alert("Login e senha não podem ser vazios!");
            } else {
                // Permite qualquer login e senha
                localStorage.setItem("login", login);
                localStorage.setItem("autenticado", "true");
                alert("Autenticado!");
                window.location.href = "index.html";
            }
        });
    }

    const formularioCadastro = document.getElementById("formulario-cadastro");
    if (formularioCadastro) {
        formularioCadastro.addEventListener("submit", function(event) {
            event.preventDefault();
            
            // Não salva informações de cadastro
            alert("Cadastro processado com sucesso!");
            window.location.href = "index.html";
        });
        
        // Implementando a funcionalidade de seleção de tema
        const themeRadios = document.querySelectorAll('input[name="tema"]');
        if (themeRadios.length > 0) {
            themeRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    const form = document.querySelector('.cadastro-form');
                    if (this.value === 'custom') {
                        form.classList.add('custom-theme');
                    } else {
                        form.classList.remove('custom-theme');
                    }
                });
            });
        }
    }

    const logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
    
    // Botão de logout
    const loginLink = document.getElementById("loginir");
    if (loginLink) {
        const autenticado = localStorage.getItem("autenticado") === "true";
        if (autenticado) {
            loginLink.textContent = "LOGOUT";
            loginLink.href = "#";
            loginLink.addEventListener("click", function(event) {
                event.preventDefault();
                localStorage.setItem("autenticado", "false");
                updateUserIdentification();
                window.location.href = "index.html";
                alert("Logout realizado com sucesso!");
            });
        }
    }
});

function updateUserIdentification() {
    const userIdentification = document.getElementById("identificacao");
    if (userIdentification) {
        const autenticado = localStorage.getItem("autenticado") === "true";
        const nome = localStorage.getItem("login");

        if (autenticado && nome) {
            const userPhotoHTML = '<a href="cadastro.html"><img src="usuario.png" alt="Foto do Usuário" class="user-photo"></a>';
            userIdentification.innerHTML = userPhotoHTML + "Usuário: " + nome;
        } else {
            userIdentification.textContent = "Usuário não autenticado";
        }
    }
}
