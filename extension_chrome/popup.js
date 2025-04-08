document.getElementById("analizar").addEventListener("click", () => {
    const texto = prompt("Ingresa el texto a analizar:");
    if (texto) {
        fetch("http://127.0.0.1:8000/analizar/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: texto })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").innerText = 
                `Origen: ${data.origen}\nConfianza: ${data.confianza}%`;
        })
        .catch(error => console.error("Error:", error));
    }
});