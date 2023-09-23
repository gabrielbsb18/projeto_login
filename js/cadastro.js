const cadastroForm = document.getElementById('cadastro-form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

cadastroForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulando o envio do formulário (pode ser substituído por uma requisição real ao servidor)
  // Exibimos a mensagem de sucesso após 1 segundo
  setTimeout(function() {
    exibirMensagemSucesso();
  }, 1000);
});

function exibirMensagemSucesso() {
  mensagemSucesso.style.opacity = '1'; // Alterando a propriedade para opacity para garantir a animação
  setTimeout(function() {
    esconderMensagemSucesso();
  }, 3000); // Esconde a mensagem após 3 segundos
}

function esconderMensagemSucesso() {
  mensagemSucesso.style.opacity = '0';
}
