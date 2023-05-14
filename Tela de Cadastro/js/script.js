const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-button");

registerForm.addEventListener("submit", function(event) {
  // Impede que o formulário seja enviado
  event.preventDefault();

  // Verifica se o e-mail tem o domínio da Fatec
  const email = emailInput.value;
  if (email.indexOf("@fatec.sp.gov.br") === -1) {
    emailInput.classList.add("invalid");
    const errorMessage = emailInput.parentNode.querySelector(".error-message");
    errorMessage.innerHTML = "O e-mail precisa ser da Fatec";
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("invalid");
    const errorMessage = emailInput.parentNode.querySelector(".error-message");
    errorMessage.style.display = "none";
  }

  // Verifica se a senha e a confirmação de senha correspondem
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    confirmPasswordInput.classList.add("invalid");
    const errorMessage = confirmPasswordInput.parentNode.querySelector(".error-message");
    errorMessage.innerHTML = "As senhas não correspondem";
    errorMessage.style.display = "block";
  } else {
    confirmPasswordInput.classList.remove("invalid");
    const errorMessage = confirmPasswordInput.parentNode.querySelector(".error-message");
    errorMessage.style.display = "none";
  }

  // Verifica se todos os campos são válidos
  const inputs = [emailInput, passwordInput, confirmPasswordInput];
  const isValid = inputs.every(input => !input.classList.contains("invalid"));

   // Se tudo estiver OK, envia o formulário
  if (isValid) {
    this.submit();
  }
});

// Adiciona listeners para limpar a mensagem de erro quando o usuário começar a digitar
emailInput.addEventListener("input", function() {
  this.classList.remove("invalid");
  const errorMessage = this.parentNode.querySelector(".error-message");
  errorMessage.style.display = "none";
});

passwordInput.addEventListener("input", function() {
  this.classList.remove("invalid");
  const errorMessage = this.parentNode.querySelector(".error-message");
  errorMessage.style.display = "none";
});

confirmPasswordInput.addEventListener("input", function() {
  this.classList.remove("invalid");
  const errorMessage = this.parentNode.querySelector(".error-message");
  errorMessage.style.display = "none";
});

