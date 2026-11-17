// 1. Funcionalidad de la Calculadora Cuadrática
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");
const cajaResultado = document.getElementById("resultadoCalculadora");

btnCalcular.addEventListener("click", function () {
    const a = parseFloat(document.getElementById("coefA").value);
    const b = parseFloat(document.getElementById("coefB").value);
    const c = parseFloat(document.getElementById("coefC").value);

    // Validación de campos vacíos o coeficiente 'a' igual a cero
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        mostrarMensaje(cajaResultado, "Por favor, ingresa valores numéricos en los tres coeficientes.", "error");
        return;
    }

    if (a === 0) {
        mostrarMensaje(cajaResultado, "El coeficiente 'a' no puede ser 0 en una ecuación cuadrática.", "error");
        return;
    }

    // Cálculo del discriminante
    const discriminante = (b * b) - (4 * a * c);

    if (discriminante > 0) {
        const x1 = ((-b + Math.sqrt(discriminante)) / (2 * a)).toFixed(2);
        const x2 = ((-b - Math.sqrt(discriminante)) / (2 * a)).toFixed(2);
        mostrarMensaje(
            cajaResultado,
            `Discriminante (Δ) = ${discriminante} (> 0). Dos soluciones reales: x₁ = ${x1} y x₂ = ${x2}.`,
            "exito"
        );
    } else if (discriminante === 0) {
        const x = (-b / (2 * a)).toFixed(2);
        mostrarMensaje(
            cajaResultado,
            `Discriminante (Δ) = 0. Única solución real doble: x = ${x}.`,
            "exito"
        );
    } else {
        mostrarMensaje(
            cajaResultado,
            `Discriminante (Δ) = ${discriminante} (< 0). La ecuación no tiene soluciones en los números reales.`,
            "error"
        );
    }
});

btnLimpiar.addEventListener("click", function () {
    document.getElementById("coefA").value = "";
    document.getElementById("coefB").value = "";
    document.getElementById("coefC").value = "";
    cajaResultado.classList.add("oculto");
});

// 2. Validación del Formulario de Autoevaluación
const formQuiz = document.getElementById("formQuiz");
const resultadoQuiz = document.getElementById("resultadoQuiz");

formQuiz.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById("nombreEstudiante").value.trim();
    const respuesta = document.getElementById("respuestaQuiz").value;

    if (nombre === "" || respuesta === "") {
        mostrarMensaje(resultadoQuiz, "Completa tu nombre y selecciona una alternativa antes de verificar.", "error");
        return;
    }

    if (respuesta === "correcto") {
        mostrarMensaje(
            resultadoQuiz,
            `¡Excelente, ${nombre}! Respuesta correcta: (x - 3)(x - 2) = 0 → x₁ = 3 y x₂ = 2.`,
            "exito"
        );
    } else {
        mostrarMensaje(
            resultadoQuiz,
            `Sigue intentando, ${nombre}. Recuerda aplicar la fórmula general o factorizar x² - 5x + 6 = 0.`,
            "error"
        );
    }
});

// Función auxiliar para actualizar mensajes en el DOM
function mostrarMensaje(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.className = `caja-resultado ${tipo}`;
}