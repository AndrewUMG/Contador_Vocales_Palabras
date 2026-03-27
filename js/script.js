// Clase para analizar texto
class AnalizadorTexto {
  constructor(texto) {
    this.texto = texto;
    this.vocalesValidas = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    this.equivalencias = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      Á: "a",
      É: "e",
      Í: "i",
      Ó: "o",
      Ú: "u",
      ä: "a",
      ë: "e",
      ï: "i",
      ö: "o",
      ü: "u",
      Ä: "a",
      Ë: "e",
      Ï: "i",
      Ö: "o",
      Ü: "u",
    };
  }

  // Contar palabras eliminando puntuación
  contarPalabras() {
    let limpio = this.texto.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, " ");
    let palabras = limpio
      .trim()
      .split(/\s+/)
      .filter((p) => p.length > 0);
    return palabras.length;
  }

  // Contar vocales, normalizando acentos
  contarVocales() {
    let conteo = {};
    for (let char of this.texto.toLowerCase()) {
      let base = this.equivalencias[char] ?? char;
      if (this.vocalesValidas.includes(base)) {
        conteo[base] = (conteo[base] ?? 0) + 1;
      }
    }
    return conteo;
  }

  // Sumar todas las vocales
  contarVocalesTotal() {
    let vocales = this.contarVocales();
    return Object.values(vocales).reduce((suma, n) => suma + n, 0);
  }
}

// Clase para mostrar resultados en la interfaz
class InterfazResultados {
  constructor(tbodyEntradas, tbodyVocales) {
    this.tbodyEntradas = tbodyEntradas;
    this.tbodyVocales = tbodyVocales;
  }

  // Mostrar palabras y vocales totales
  mostrarEntradas(totalPalabras, totalVocales) {
    this.tbodyEntradas.innerHTML = `
      <tr class="animar">
        <td>Palabras</td>
        <td class="cantidad">${totalPalabras}</td>
      </tr>
      <tr class="animar">
        <td>Vocales</td>
        <td class="cantidad">${totalVocales}</td>
      </tr>
    `;
  }

  // Mostrar detalle de cada vocal
  mostrarVocales(conteoVocales) {
    if (Object.keys(conteoVocales).length === 0) {
      this.tbodyVocales.innerHTML = `
        <tr><td colspan="2" class="estado-vacio">No se encontraron vocales</td></tr>
      `;
      return;
    }

    let filas = Object.entries(conteoVocales)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(
        ([vocal, cantidad]) => `
        <tr class="animar">
          <td>${vocal}</td>
          <td class="cantidad">${cantidad}</td>
        </tr>
      `,
      )
      .join("");

    this.tbodyVocales.innerHTML = filas;
  }

  // Mostrar mensaje de error
  mostrarError(mensaje) {
    const fila = `<tr><td colspan="2" class="estado-vacio">${mensaje}</td></tr>`;
    this.tbodyEntradas.innerHTML = fila;
    this.tbodyVocales.innerHTML = fila;
  }
}

// Función principal que ejecuta el análisis
function analizar() {
  const texto = document.getElementById("editor").value;

  const interfaz = new InterfazResultados(
    document.getElementById("tbody-entradas"),
    document.getElementById("tbody-vocales"),
  );

  if (!texto.trim()) {
    interfaz.mostrarError("El editor está vacío");
    return;
  }

  const analizador = new AnalizadorTexto(texto);

  const totalPalabras = analizador.contarPalabras();
  const conteoVocales = analizador.contarVocales();
  const totalVocales = analizador.contarVocalesTotal();

  interfaz.mostrarEntradas(totalPalabras, totalVocales);
  interfaz.mostrarVocales(conteoVocales);
}

// Escuchar tecla F5 para ejecutar análisis
document.addEventListener("keydown", function (e) {
  if (e.key === "F5") {
    e.preventDefault();
    analizar();
  }
});
