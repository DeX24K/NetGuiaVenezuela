// ============================================================
// BOTÓN FLOTANTE "VOLVER ARRIBA"
// Aparece al bajar un poco en la página y lleva al inicio
// con una animación suave. Usa la paleta del sitio.
// ============================================================
(function () {
  var boton = document.createElement("button");
  boton.type = "button";
  boton.setAttribute("aria-label", "Volver arriba");
  boton.setAttribute("title", "Volver arriba");
  boton.innerHTML = "&uarr;";
  boton.style.cssText =
    "position:fixed;right:20px;bottom:20px;z-index:99990;" +
    "width:48px;height:48px;border:none;border-radius:50%;" +
    "background:#00b4d8;color:#ffffff;font-size:1.35rem;font-weight:800;" +
    "line-height:1;padding:0;cursor:pointer;" +
    "box-shadow:0 8px 24px rgba(0,180,216,0.45);" +
    "opacity:0;visibility:hidden;transform:translateY(12px);" +
    "transition:opacity .25s ease,transform .25s ease," +
    "background-color .2s ease,visibility .25s;";
  document.body.appendChild(boton);

  boton.addEventListener("mouseenter", function () {
    boton.style.background = "#0077b6";
  });
  boton.addEventListener("mouseleave", function () {
    boton.style.background = "#00b4d8";
  });

  boton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var visible = false;
  function alHacerScroll() {
    var debeMostrarse = (window.pageYOffset || document.documentElement.scrollTop) > 600;
    if (debeMostrarse !== visible) {
      visible = debeMostrarse;
      boton.style.opacity = visible ? "1" : "0";
      boton.style.visibility = visible ? "visible" : "hidden";
      boton.style.transform = visible
        ? "translateY(0)"
        : "translateY(12px)";
    }
  }

  var programado = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!programado) {
        programado = true;
        window.requestAnimationFrame(function () {
          alHacerScroll();
          programado = false;
        });
      }
    },
    { passive: true }
  );
  alHacerScroll();
})();