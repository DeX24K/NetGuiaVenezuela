/* ==========================================================================
   Parallax sutil del hero para NetGuiaVenezuela.
   Mueve SOLO las capas decorativas ([data-parallax]) al hacer scroll:
   el fondo se mueve mas lento que el contenido, creando profundidad.
   - Respeta "prefers-reduced-motion": si el usuario lo pide, se desactiva.
   - En movil reduce el desplazamiento a la mitad para no forzar el scroll.
   - Usa requestAnimationFrame (suave y sin lag); no toca el texto ni botones.
   ========================================================================== */
(function () {
  "use strict";

  var hero = document.querySelector(".hero--parallax");
  if (!hero) return;

  var capas = Array.prototype.slice.call(
    hero.querySelectorAll("[data-parallax]")
  );
  if (!capas.length) return;

  var reduceMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : { matches: false };

  var activo = false;
  var ticking = false;

  function esMovil() {
    return window.innerWidth <= 768;
  }

  function pintar() {
    ticking = false;

    var rect = hero.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;

    // Si el hero ya no se ve, no gastamos trabajo.
    if (rect.bottom <= 0 || rect.top >= vh) return;

    // Limita el desplazamiento al alto del hero (evita numeros enormes).
    var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var limite = hero.offsetHeight + 200;
    var offset = Math.min(scrollY, limite);
    var atenuar = esMovil() ? 0.5 : 1;

    for (var i = 0; i < capas.length; i++) {
      var velocidad = parseFloat(capas[i].getAttribute("data-parallax")) || 0;
      var dy = offset * velocidad * atenuar;
      capas[i].style.transform = "translate3d(0," + dy.toFixed(1) + "px,0)";
    }
  }

  function alScroll() {
    if (!activo || ticking) return;
    ticking = true;
    window.requestAnimationFrame(pintar);
  }

  function limpiar() {
    for (var i = 0; i < capas.length; i++) {
      capas[i].style.transform = "";
    }
  }

  function actualizarEstado() {
    var debeEstarActivo = !reduceMotion.matches;

    if (debeEstarActivo === activo) return;
    activo = debeEstarActivo;

    if (activo) {
      window.addEventListener("scroll", alScroll, { passive: true });
      pintar();
    } else {
      window.removeEventListener("scroll", alScroll);
      limpiar();
    }
  }

  actualizarEstado();

  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", actualizarEstado);
  } else if (reduceMotion.addListener) {
    reduceMotion.addListener(actualizarEstado);
  }

  window.addEventListener("resize", alScroll, { passive: true });
})();
