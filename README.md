# Analizador de Vocales y Palabras

## Descripción General

Aplicación web desarrollada en HTML, CSS y JavaScript que proporciona un análisis léxico de textos ingresados por el usuario. El programa realiza el conteo de palabras y vocales, normalizando caracteres acentuados para garantizar resultados precisos. La interfaz de usuario utiliza una arquitectura de dos columnas que facilita la entrada de datos y visualización inmediata de resultados.

## Objetivos del Proyecto

- Desarrollar una herramienta que permita el análisis textual en tiempo real
- Implementar normalización de caracteres acentuados en idioma español
- Crear una interfaz intuitiva que separee claramente entre entrada y salida de datos
- Aplicar principios de programación orientada a objetos en JavaScript
- Proporcionar retroalimentación inmediata al usuario mediante animaciones y visualización de datos

## Características Principales

### 1. Análisis de Palabras

El programa cuenta el número total de palabras presentes en el texto ingresado. El conteo se realiza:
- Eliminando caracteres especiales y signos de puntuación
- Considerando la normalizacion de espacios en blanco
- Filtrando cadenas vacías resultantes del procesamiento

### 2. Conteo de Vocales

Se realiza un análisis detallado de vocales con las siguientes características:
- Conteo individual por cada vocal (a, e, i, o, u)
- Normalización automática de vocales acentuadas (á, é, í, ó, ú)
- Normalización de vocales mayúsculas acentuadas (Á, É, Í, Ó, Ú)
- Agrupación de vocales acentuadas con sus equivalentes sin acento
- Presentación ordenada alfabéticamente de los resultados

### 3. Interfaz de Usuario

La interfaz se divide en dos secciones principales:

**Columna Izquierda - Editor de Texto (55% del ancho)**
- Área de texto expandible para ingreso de datos
- Etiqueta descriptiva clara
- Instrucciones interactivas
- Soporte para cualquier cantidad de texto

**Columna Derecha - Resultados (45% del ancho)**
- Matriz de Entradas: muestra el total de palabras y vocales
- Matriz de Vocales: desglose detallado por cada vocal
- Mensajes de estado informativo
- Animaciones que mejoran la experiencia de usuario

## Estructura Técnica

### Arquitectura de Carpetas

```
Palabras_Vocales/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

### Componentes JavaScript

#### Clase AnalizadorTexto

Encapsula toda la lógica de procesamiento textual:

- **Atributos**
  - `texto`: cadena de texto a analizar
  - `vocalesValidas`: arreglo de vocales reconocidas
  - `equivalencias`: mapeo de vocales acentuadas a vocales base

- **Métodos**
  - `contarPalabras()`: retorna el número total de palabras
  - `contarVocales()`: retorna objeto con conteo por vocal
  - `contarVocalesTotal()`: retorna la suma total de vocales

#### Clase InterfazResultados

Gestiona la actualización del DOM y presentación de datos:

- **Atributos**
  - `tbodyEntradas`: referencia a tabla de entradas
  - `tbodyVocales`: referencia a tabla de vocales

- **Métodos**
  - `mostrarEntradas()`: actualiza tabla de palabras y vocales totales
  - `mostrarVocales()`: genera tabla con conteo por vocal individual
  - `mostrarError()`: muestra mensajes de estado o error

#### Función analizar()

Función coordinadora que:
- Obtiene el texto del editor
- Valida que el texto no esté vacío
- Instancia las clases necesarias
- Ejecuta los análisis
- Dispara la actualización de la interfaz

#### Manejador de Evento F5

Permite al usuario ejecutar el análisis presionando la tecla F5, evitando la recarga del navegador mediante `preventDefault()`.

## Características de Diseño

### Paleta de Colores

- Color Principal: `#1a1a2e` (azul oscuro)
- Color de Acento: `#e94560` (rojo vibrante)
- Color de Fondo: `#f5f5f5` (gris claro)
- Color Blanco: `#ffffff`
- Color Gris: `#dee2e6`

### Tipografía

- Títulos: "Space Mono" (monoespaciada)
- Cuerpo: "DM Sans" (sans-serif)

### Características Visuales

- Layout sin scroll: contenido ajustado a 100vh
- Bordes redondeados en elementos interactivos
- Transiciones suaves en cambios de estado
- Animaciones fade-in al mostrar resultados
- Separación clara de secciones mediante líneas y espaciado

## Guía de Uso

1. Abrir el archivo `index.html` en un navegador web
2. Escribir o pegar el texto a analizar en el área de entrada
3. Presionar la tecla F5 para ejecutar el análisis
4. Los resultados aparecerán automáticamente en las tablas del lado derecho

## Tecnologías Utilizadas

- **HTML5**: estructura semántica y accesibilidad
- **CSS3**: diseño responsive, variables CSS, animaciones
- **JavaScript (ES6+)**: clases, métodos, manipulación del DOM
- **Bootstrap 5**: utilidades de diseño base
- **Google Fonts**: tipografía personalizada

## Requisitos Técnicos

- Navegador web moderno con soporte para ES6
- Conexión a Internet para cargar Bootstrap y Google Fonts
- JavaScript habilitado

## Validación de Entrada

El programa realiza las siguientes validaciones:
- Verifica que el texto no esté vacío antes de procesar
- Filtra caracteres especiales y signos de puntuación
- Normaliza espacios en blanco múltiples
- Valida caracteres acentuados especiales del idioma español

## Procesamiento de Datos

El análisis de texto sigue estos pasos:

1. **Normalización**: se convierten todas las letras a minúsculas
2. **Mapeo de Acentos**: se aplican equivalencias de vocales acentuadas
3. **Filtrado**: se retienen solo caracteres válidos según criterios definidos
4. **Conteo**: se incrementan contadores según caracteres identificados
5. **Ordenamiento**: se ordenan alfabéticamente los resultados finales

## Limitaciones Conocidas

- El análisis solo considera vocales españolas básicas y sus variantes acentuadas
- La diéresis (ü) se reconoce en validación pero no se contabiliza como vocal primaria
- No se realiza análisis de consonantes o caracteres especiales
- El rendimiento se mantiene óptimo para textos de hasta varios megabytes

## Mejoras Futuras

- Implementar estadísticas adicionales (consonantes, frecuencia de palabras)
- Agregar opciones de exportación de resultados
- Crear análisis de longitud de palabras
- Implementar detección de idioma automática
- Agregar temas visuales personalizables

## Consideraciones de Código

### Separación de Responsabilidades

El proyecto mantiene una clara separación entre:
- Presentación (HTML)
- Estilos (CSS)
- Lógica de negocio (JavaScript)

### Reutilización de Código

Las clases implementadas permiten reutilizar la lógica en diferentes contextos:
- `AnalizadorTexto` puede aplicarse a cualquier texto sin dependencias del DOM
- `InterfazResultados` abstrae la actualización visual

## Autor

Desarrollado como laboratorio individual de ingeniería en sistemas Andrés Ixcajoc López 090-23-19115.

## Licencia

Código disponible para uso educativo y académico.

---

Última actualización: 22 den Marzo de 2026
