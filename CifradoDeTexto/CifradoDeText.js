// Funcion para cifrar el texto
function cifrarTexto(texto, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            let base = (char === char.toUpperCase()) ? 65 : 97;
            resultado += String.fromCharCode((codigo - base + desplazamiento) % 26 + base);
        } else {
            resultado += char;
        }
    }
    return resultado;
}
// Función para descifrar el texto
function descifrarTexto(texto, desplazamiento) {
    return cifrarTexto(texto, 26 - (desplazamiento % 26));
}
// Función para manejar el cifrado
function cifrar() {
    const texto = document.getElementById('textInput').value;
    const desplazamiento = parseInt(document.getElementById('shiftInput').value, 10);
    const textoCifrado = cifrarTexto(texto, desplazamiento);
    document.getElementById('resultOutput').value = textoCifrado;
}
// Función para manejar el descifrado
function descifrar() {
    const texto = document.getElementById('textInput').value;
    const desplazamiento = parseInt(document.getElementById('shiftInput').value, 10);
    const textoDescifrado = descifrarTexto(texto, desplazamiento);
    document.getElementById('resultOutput').value = textoDescifrado;
}

// Ejemplo de uso
let textoOriginal = "Hola Mundo";
let desplazamiento = 3; // Número de posiciones para el cifrado

let textoCifrado = cifrarTexto(textoOriginal, desplazamiento);
console.log("Texto Cifrado:", textoCifrado);

let textoDescifrado = descifrarTexto(textoCifrado, desplazamiento);
console.log("Texto Descifrado:", textoDescifrado);