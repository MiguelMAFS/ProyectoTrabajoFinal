// MENSAJE DE BIENVENIDA
alert("Bienvenido al página de recetas");
// BOTÓN MODO OSCURO
var botonModo = document.getElementById("modoBtn");
botonModo.onclick = function() {    
    document.body.classList.toggle("oscuro");
    alert("Has cambiado el modo de la página");
};
// RECETA ALEATORIA
var botonReceta = document.getElementById("recetaBtn");
botonReceta.onclick = function() {
    var numero = Math.floor(Math.random() * 3);
    if (numero == 0) {
        alert("Hoy puedes cocinar: Tortilla de Patatas");
    }
    if (numero == 1) {
        alert("Hoy puedes cocinar: Ensalada Mixta");
    }
    if (numero == 2) {
        alert("Hoy puedes cocinar: Bizcocho Casero");
    }
};