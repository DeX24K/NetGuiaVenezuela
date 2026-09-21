document.addEventListener('DOMContentLoaded', function () {

    /* --- Progress Bar --- */
    var barra = document.querySelector('.progreso-lectura');
    if (barra) {
        window.addEventListener('scroll', function () {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            barra.style.width = progress + '%';
        });
    }

    /* --- Reading Time --- */
    var metaEl = document.querySelector('.articulo__meta');
    if (metaEl) {
        var contenido = document.querySelector('.articulo__contenido');
        if (contenido) {
            var text = contenido.textContent || contenido.innerText;
            var words = text.trim().split(/\s+/).length;
            var minutes = Math.max(1, Math.round(words / 200));
            var timeSpan = document.createElement('span');
            timeSpan.className = 'articulo__meta-item';
            timeSpan.innerHTML = '<span class="articulo__meta-icon">📖</span> ' + minutes + ' min de lectura';
            metaEl.appendChild(timeSpan);
        }
    }

    /* --- Auto-generate TOC --- */
    var tocContainer = document.querySelector('.articulo__toc-lista');
    var contenido = document.querySelector('.articulo__contenido');
    if (tocContainer && contenido) {
        var headings = contenido.querySelectorAll('h2, h3');
        if (headings.length >= 3) {
            var tocHTML = '';
            headings.forEach(function (h, i) {
                var id = 'seccion-' + i;
                h.id = id;
                var cls = h.tagName === 'H3' ? 'toc-h3' : '';
                tocHTML += '<li><a href="#' + id + '" class="' + cls + '">' + h.textContent.trim() + '</a></li>';
            });
            tocContainer.innerHTML = tocHTML;

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = entry.target.id;
                        tocContainer.querySelectorAll('a').forEach(function (a) {
                            a.classList.toggle('activo', a.getAttribute('href') === '#' + id);
                        });
                    }
                });
            }, { rootMargin: '-80px 0px -60% 0px' });

            headings.forEach(function (h) { observer.observe(h); });
        } else {
            var tocBlock = document.querySelector('.articulo__toc');
            if (tocBlock) tocBlock.style.display = 'none';
        }
    }

    /* --- Share Buttons --- */
    var shareContainer = document.querySelector('.compartir');
    if (shareContainer) {
        var url = encodeURIComponent(window.location.href);
        var title = encodeURIComponent(document.title);
        shareContainer.innerHTML =
            '<span class="compartir__label">Compartir:</span>' +
            '<a class="compartir__btn compartir__btn--whatsapp" href="https://wa.me/?text=' + title + '%20' + url + '" target="_blank" rel="noopener">💬 WhatsApp</a>' +
            '<a class="compartir__btn compartir__btn--twitter" href="https://twitter.com/intent/tweet?url=' + url + '&text=' + title + '" target="_blank" rel="noopener">🐦 Twitter</a>' +
            '<a class="compartir__btn compartir__btn--telegram" href="https://t.me/share/url?url=' + url + '&text=' + title + '" target="_blank" rel="noopener">✈️ Telegram</a>';
    }

});
