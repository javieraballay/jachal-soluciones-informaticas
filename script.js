// ==========================================
//   BOTÓN VOLVER ARRIBA (SMOOTH SCROLL)
// ==========================================

// Seleccionamos el botón por su ID
const btnArriba = document.getElementById("btnArriba");

// Escuchamos el movimiento del scroll en la pantalla
window.addEventListener("scroll", function() {
    // Si el usuario baja más de 300 píxeles, el botón aparece
    if (window.scrollY > 300) {
        btnArriba.style.display = "block";
    } else {
        // Si está arriba de todo, se oculta
        btnArriba.style.display = "none";
    }
});

// Escuchamos el clic en el botón
btnArriba.addEventListener("click", function() {
    // Hace un scroll suave hacia el inicio (coordenada 0)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
