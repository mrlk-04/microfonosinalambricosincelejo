// Script interactivo para envío directo a WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuración del número de destino en Sincelejo
    const numeroWhatsApp = "573238863120";

    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Capturar datos del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const barrio = document.getElementById('barrio').value.trim();
            const direccion = document.getElementById('direccion').value.trim();
            const cantidad = document.getElementById('cantidad').value;

            // Construir el mensaje formateado para WhatsApp
            const mensaje = `¡hola! 🎙️ deseo realizar un pedido de *micrófono spartan sx22*:%0A%0A` +
                `📌 *nombre:* ${encodeURIComponent(nombre)}%0A` +
                `📞 *teléfono:* ${encodeURIComponent(telefono)}%0A` +
                `📍 *barrio / ciudad:* ${encodeURIComponent(barrio)}%0A` +
                `🏠 *dirección:* ${encodeURIComponent(direccion)}%0A` +
                `⚡ *producto / cantidad:* ${encodeURIComponent(cantidad)}%0A` +
                `💳 *método de pago:* contraentrega en sincelejo%0A%0A` +
                `quedo atento a la confirmación de la entrega. ¡gracias!`;

            // Enlace de WhatsApp API
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

            // Abrir WhatsApp en nueva pestaña
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Scroll suave para links navegables
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
