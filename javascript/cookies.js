// ============================================================
// AVISO DE COOKIES / CONSENTIMIENTO DE PRIVACIDAD
// Requisito de Google AdSense para auditar el sitio.
// Se muestra una sola vez y queda guardado la elección.
// ============================================================
(function () {
  try {
    if (localStorage.getItem("netguia-cookies-ok")) return;

    var css = [
      ".netguia-cookies{position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#1d2d44;color:#ffffff;padding:1rem 1.4rem;display:flex;flex-wrap:wrap;gap:0.9rem;align-items:center;justify-content:space-between;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:0.92rem;line-height:1.5;box-shadow:0 -6px 24px rgba(0,0,0,0.25);}",
      ".netguia-cookies p{margin:0;max-width:720px;}",
      ".netguia-cookies a{color:#00b4d8;font-weight:700;text-decoration:underline;text-underline-offset:3px;}",
      ".netguia-cookies__boton{background:#00b4d8;border:none;color:#ffffff;font-weight:800;padding:0.6rem 1.5rem;border-radius:10px;cursor:pointer;font-size:0.95rem;}"
    ].join("\n");

    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var div = document.createElement("div");
    div.className = "netguia-cookies";
    div.innerHTML =
      '<p>Usamos cookies para medir el tráfico del sitio y, en el futuro, mostrar publicidad de Google AdSense. Al continuar, aceptas nuestra <a href="privacidad.html">Política de Privacidad</a>.</p>' +
      '<button type="button" class="netguia-cookies__boton" id="netguia-cookies-aceptar">Aceptar y continuar</button>';
    document.body.appendChild(div);

    document
      .getElementById("netguia-cookies-aceptar")
      .addEventListener("click", function () {
        localStorage.setItem("netguia-cookies-ok", "1");
        // Activamos la analítica/ad personalizada si GA4 está configurado
        if (window.gtag) {
          window.gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            analytics_storage: "granted",
          });
        }
        div.remove();
      });
  } catch (e) {
    // Si algo falla, simplemente no mostramos el banner.
  }
})();