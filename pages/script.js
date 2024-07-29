
function enviarFormulario() {

  // Obtenemos los valores de los campos
  var nombre = document.getElementById('nombre').value.trim();
  var apellido = document.getElementById('apellido').value.trim();
  var email = document.getElementById('email').value.trim();
  var mensajeExito = document.getElementById('mensaje-exito');
  var formulario = document.getElementById('contactForm');

  // Validamos cada campo
  if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
  }

  if (apellido === "") {
      alert("Por favor, ingresa tu apellido.");
      return false;
  }

  if (email === "") {
      alert("Por favor, ingresa tu email.");
      return false;
  }

  // Validación básica de formato de email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return false;
  }


    // Mostrar mensaje de éxito
    mensajeExito.classList.remove('d-none');

    // Ocultar formulario después de mostrar el mensaje
    setTimeout(function() {
        formulario.reset(); // Limpiar el formulario
        mensajeExito.classList.add('d-none'); // Ocultar el mensaje de éxito
    }, 3000); // Mostrar el mensaje durante 2 segundos

    return false; // Evitar el envío real del formulario

}