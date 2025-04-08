chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "analizarTexto",
        title: "Analizar origen de texto",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "analizarTexto") {
        // Evita páginas bloqueadas como chrome:// o edge://
        if (!tab.url.startsWith("http")) {
            console.warn("No se puede ejecutar en esta página.");
            return;
        }

        // Enviar mensaje a content.js para analizar el texto seleccionado
        chrome.tabs.sendMessage(tab.id, { action: "analizarTexto" });
    }
});
