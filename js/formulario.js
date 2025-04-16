document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del formulario (evitar que se recargue la página)

            const formData = new FormData(form);  // Obtener los datos del formulario

            // Deshabilitar el botón de enviar mientras se procesa
            const submitButton = form.querySelector('.footer__submit');
            submitButton.disabled = true;

            // Usamos fetch para enviar el formulario sin recargar la página
            fetch("https://formspree.io/f/xvgkyewq", {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    console.log("Formulario enviado correctamente.");
                    // Mostrar mensaje de confirmación dentro de la misma página
                    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
                    
                    // Limpiar los campos del formulario después de enviarlo
                    form.reset();
                } else {
                    console.error("Error al enviar el formulario.");
                    alert("Hubo un problema al enviar el mensaje. Inténtalo nuevamente.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Hubo un problema al enviar el mensaje. Inténtalo nuevamente.");
            })
            .finally(() => {
                submitButton.disabled = false;  // Volver a habilitar el botón después de que se haya completado el envío
            });
        });
    }
});
