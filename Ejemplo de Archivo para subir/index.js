const form = document.getElementById("registerForm");
const errorDiv = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (name.length < 3) {
    showError("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  if (!validateEmail(email)) {
    showError("El correo electrónico no es válido.");
    return;
  }

  if (password.length < 6) {
    showError("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  showError(""); // Borra errores previos
  alert("Registro exitoso");
  form.reset();
});

function showError(message) {
  errorDiv.textContent = message;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}