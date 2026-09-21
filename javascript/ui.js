document.addEventListener('DOMContentLoaded', function () {

    /* --- Hamburger Menu --- */
    var btn = document.getElementById('hamburger-btn');
    var menu = document.getElementById('menu-principal');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            btn.classList.toggle('active');
            menu.classList.toggle('abierto');
            document.body.style.overflow = menu.classList.contains('abierto') ? 'hidden' : '';
        });
        menu.querySelectorAll('.menu__enlace').forEach(function (link) {
            link.addEventListener('click', function () {
                btn.classList.remove('active');
                menu.classList.remove('abierto');
                document.body.style.overflow = '';
            });
        });
    }

    /* --- Scroll Animations --- */
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.animar-entrada').forEach(function (el) {
        observer.observe(el);
    });

    /* --- Counter Animation --- */
    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.getAttribute('data-contar'), 10);
                var duration = 1200;
                var start = 0;
                var startTime = null;

                function animate(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        el.textContent = target;
                    }
                }

                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-contar]').forEach(function (el) {
        counterObserver.observe(el);
    });

});
