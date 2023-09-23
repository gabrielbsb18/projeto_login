const loginForm = document.getElementById('login-form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulando o login (pode ser substituído por uma requisição real ao servidor)
  // Exibimos a mensagem de sucesso
  exibirMensagemSucesso();
});

function exibirMensagemSucesso() {
  mensagemSucesso.style.opacity = '1';
  setTimeout(function() {
    esconderMensagemSucesso();
  }, 3000); // Esconde a mensagem após 3 segundos
}

function esconderMensagemSucesso() {
  mensagemSucesso.style.opacity = '0';
}
