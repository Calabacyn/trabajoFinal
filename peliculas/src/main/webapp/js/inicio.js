document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-register');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const email = document.getElementById('correo').value;
        const password = document.getElementById('contraseña').value;

        // Validar las credenciales
        if (email === 'correo@gmail.com' && password === 'contraseña') {
            // Redirigir a otra página en caso de éxito
            window.location.href = 'index.html'; // Cambia 'pagina_destino.html' por la ruta de tu página de destino
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });
});