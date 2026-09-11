// ============================================================
// GOOGLE ANALYTICS 4 (GA4) — CONFIGURACIÓN ÚNICA DEL SITIO
//
// El Measurement ID se pega aquí UNA sola vez y funciona en
// todas las páginas del sitio.
//
// Incluye Modo de Consentimiento (Google Consent Mode v2):
// mientras el usuario no acepta el aviso de cookies, la
// analítica y la personalización quedan denegadas; al aceptar,
// se activan (ver javascript/cookies.js).
// ============================================================

var GA4_MEASUREMENT_ID = "G-T2V8RQSYCT";

if (GA4_MEASUREMENT_ID) {
  // Cola estándar de eventos (se procesa al cargar gtag.js)
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  // Consentimiento por defecto: negado hasta que el usuario acepte
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: localStorage.getItem("netguia-cookies-ok")
      ? "granted"
      : "denied",
    wait_for_update: 500,
  });

  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID);

  // Cargamos el script oficial de gtag.js
  (function () {
    var script = document.createElement("script");
    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" + GA4_MEASUREMENT_ID;
    document.head.appendChild(script);
  })();
}