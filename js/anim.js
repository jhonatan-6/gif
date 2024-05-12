// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "Fue de casualidad", time: 15 },
  { text: "Que sin buscar, llegó el amor a mi corazón", time: 18 },
  { text: "Y el amor tenía tu rostro", time: 27 },
  { text: "Fue un momento hermoso y romántico, fue algo mágico", time: 32 },
  { text: "Y así me enamoré de ti desde que te vi frente a mí", time: 33 },
  { text: "Y así me enamoré de ti desde que te vi frente a mí", time: 41 },
  { text: "Me enamoré, fue sin querer, no lo logro comprender", time: 47 },
  { text: "Cómo fue que te metiste aquí en mi mente y mi corazón", time: 54 },
  { text: "Me enamoré, fue sin querer, no lo logro comprender", time: 59 },
  { text: "Cómo fue que te metiste aquí en mi mente y mi corazón", time: 67 },
  { text: "Qué afortunado soy", time: 72 },
  { text: "Y el amor tenía tu rostro", time: 78 },
  { text: "Fue un momento hermoso y romántico, fue algo mágico", time: 83 },
  { text: "Y así me enamoré de ti desde que te vi frente a mí", time: 91 },
  { text: "Y así me enamoré de ti desde que te vi frente a mí", time: 97 },
  { text: "Me enamoré, fue sin querer, no lo logro comprender", time: 104 },
  { text: "Cómo fue que te metiste aquí en mi mente y mi corazón", time: 108 },
  { text: "Me enamoré, fue sin querer, no lo logro comprender", time: 140 },
  { text: "Cómo fue que te metiste aquí en mi mente y mi corazón", time: 144 },
  { text: "Qué afortunado soy", time: 148 },
  { text: "Me enamoré de manera imprevista", time: 153 },
  { text: "Fue amor a primera vista", time: 158 },
  { text: "Me enamoré de manera imprevista", time: 164 },
  { text: "Fue amor a primera vista a primera vista", time: 169 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);