document.addEventListener("DOMContentLoaded", function() {
    fetch('tasas.json')
        .then(response => response.json())
        .then(data => {
            const tickerContent = document.getElementById('ticker-content');
            tickerContent.innerHTML = `
                <span class="ticker-item">💵 USD: <strong>${data.dolar} Bs</strong></span>
                <span class="ticker-item">🇪🇺 EUR: <strong>${data.euro} Bs</strong></span>
                <span class="ticker-item">💎 USDT: <strong>${data.usdt} Bs</strong></span>
                <span class="ticker-fecha">| Fecha: ${data.fecha}</span>
            `;
        })
        .catch(err => {
            console.error("Error al cargar las tasas:", err);
            document.getElementById('ticker-content').innerText = "Tasas temporalmente no disponibles";
        });
});