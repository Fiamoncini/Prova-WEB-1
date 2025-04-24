// Função para carregar o menu em todas as páginas
function carregarMenu() {
    const nav = document.querySelector('nav');
    
    // Se não encontrar uma navegação, não faz nada
    if (!nav) return;
    
    // Só cria o menu se ele ainda não estiver criado
    if (!nav.querySelector('.menu')) {
      nav.innerHTML = `
        <ul class="menu">
          <li>Menu 1
            <ul class="submenu">
              <li>Subitem 1</li>
              <li>Subitem 2</li>
            </ul>
          </li>
          <li>Menu 2
            <ul class="submenu">
              <li>Subitem 1</li>
              <li>Subitem 2</li>
            </ul>
          </li>
          <li><a href="login.html">Login</a></li>
          <li><a href="cadastro.html">Cadastro</a></li>
        </ul>
      `;
    }
  }
  
  // Função para atualizar o estado de autenticação do usuário
  function atualizarEstadoAutenticacao() {
    const userInfo = document.getElementById('user-info');
    const loginUsuario = localStorage.getItem('loginUsuario');
    
    // Verifica se o usuário está autenticado
    if (loginUsuario) {
      // Usuário autenticado - mostra foto e nome
      userInfo.innerHTML = `
        <a href="cadastro.html">
          <img src="https://via.placeholder.com/30x30" alt="Foto do usuário" style="border-radius: 50%; vertical-align: middle;">
          ${loginUsuario}
        </a>
      `;
    } else {
      // Usuário não autenticado
      userInfo.textContent = 'Usuário não autenticado';
    }
  }
  
  // Função para processar o login
  function processarLogin(e) {
    e.preventDefault();
    
    const loginInput = document.getElementById('login');
    const senhaInput = document.getElementById('senha');
    
    // Verifica se ambos os campos estão preenchidos
    if (loginInput.value.trim() && senhaInput.value.trim()) {
      // Armazena o login no localStorage
      localStorage.setItem('loginUsuario', loginInput.value);
      
      // Redireciona para a página inicial
      window.location.href = 'index.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  // Função para aplicar estilo personalizado ao formulário de cadastro
  function alterarEstiloFormulario() {
    const form = document.getElementById('cadastro-form');
    const estiloSelecionado = document.getElementById('estilo').value;
    
    if (estiloSelecionado === 'custom') {
      form.classList.add('custom-style');
    } else {
      form.classList.remove('custom-style');
    }
  }
  
  // Função para inicializar a página
  function inicializarPagina() {
    // Carrega o menu em todas as páginas
    carregarMenu();
    
    // Atualiza o estado de autenticação
    atualizarEstadoAutenticacao();
    
    // Configura os event listeners específicos de cada página
    
    // Configuração da página de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', processarLogin);
    }
    
    // Configuração da página de cadastro
    const estiloSelect = document.getElementById('estilo');
    if (estiloSelect) {
      estiloSelect.addEventListener('change', alterarEstiloFormulario);
    }
    
    // Configuração do formulário de cadastro
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
      cadastroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cadastro enviado com sucesso!');
      });
    }
  }
  
  // Inicia a aplicação quando o DOM estiver totalmente carregado
  document.addEventListener('DOMContentLoaded', inicializarPagina);