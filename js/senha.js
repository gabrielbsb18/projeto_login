const recuperarSenhaForm = document.getElementById('recuperar-senha-form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

recuperarSenhaForm.addEventListener('submit', function(event) {
  event.preventDefault();

  setTimeout(function() {
    exibirMensagemSucesso();
  }, 1000);
});

function exibirMensagemSucesso() {
  mensagemSucesso.style.opacity = '1'; // Alterado para controlar a opacidade
  setTimeout(function() {
    esconderMensagemSucesso();
  }, 3000); // Esconde a mensagem após 3 segundos
}

function esconderMensagemSucesso() {
  mensagemSucesso.style.opacity = '0';
}
