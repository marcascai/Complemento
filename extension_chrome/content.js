chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "analizarTexto") {
        const texto = window.getSelection().toString().trim();
        if (texto) {
            enviarTextoAPI(texto);
        } else {
            alert("No hay texto seleccionado.");
        }
    }
});

function enviarTextoAPI(texto) {
    fetch("https://Marcascai-api-origen-texto.hf.space/analizar/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: texto })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Origen: ${data.origen}\nConfianza: ${data.confianza}%`);
    })
    .catch(error => console.error("Error al enviar texto:", error));
}
