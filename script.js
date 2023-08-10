document.addEventListener("DOMContentLoaded", function () {
    var tituloInicio = document.querySelector(".tituloInicio");

    tituloInicio.addEventListener("mouseover", function (event) {
        if (event.target === tituloInicio) {
            tituloInicio.style.fontSize = "90px"; // Cambia el tamaño del texto al pasar el mouse
        }
    });

    tituloInicio.addEventListener("mouseout", function (event) {
        if (event.target === tituloInicio) {
            tituloInicio.style.fontSize = ""; // Restaura el tamaño original del texto al salir del elemento
        }
    });
});