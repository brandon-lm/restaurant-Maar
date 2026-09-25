// ==========================================
// CONFIGURACIÓN
// ==========================================

const telefono = "525575530081";


// ==========================================
// BOTONES GENERALES DE WHATSAPP
// ==========================================

const botonesWhatsApp = document.querySelectorAll(".whatsapp-link");

botonesWhatsApp.forEach((boton) => {

    const mensaje =
        "Hola, Antojitos Beto's. Me gustaría hacer un pedido.";

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    boton.href = url;

    boton.target = "_blank";

});


// ==========================================
// BOTONES DE PEDIDO
// ==========================================

const botonesPedido = document.querySelectorAll(".btn-pedido");

botonesPedido.forEach((boton) => {

    boton.addEventListener("click", () => {

        const producto = boton.dataset.producto;

        const mensaje =
            `Hola, Antojitos Beto's. Quiero pedir: ${producto}.`;

        const url =
            `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });

});