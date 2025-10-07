function mostrarSeccion(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('visible'));

    // Muestra la seleccionada
    document.getElementById(id).classList.add('visible');
}

// Simula confirmación de reserva
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formReserva");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("✅ ¡Reserva confirmada! Gracias por elegirnos.");
        form.reset();
    });
});
