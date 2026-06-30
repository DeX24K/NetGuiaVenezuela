// Esperar a que el HTML esté completamente cargado en el navegador
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-toggle-icon');

    // 1. Revisar si el usuario ya tenía una preferencia guardada en el navegador
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            actualizarIconoA(true);
        }
    }

    // 2. Escuchar el click en el botón para alternar el tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'light') {
                document.documentElement.removeAttribute('data-theme'); // Vuelve a oscuro (por defecto)
                localStorage.setItem('theme', 'dark');
                actualizarIconoA(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'light'); // Cambia a claro
                localStorage.setItem('theme', 'light');
                actualizarIconoA(true);
            }
        });
    }

    // Función auxiliar para cambiar el icono de la luna al sol dinámicamente
    function actualizarIconoA(esClaro) {
        if (!themeIcon) return;
        
        if (esClaro) {
            // Icono de un Sol en SVG
            themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
        } else {
            // Icono de una Luna en SVG
            themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
        }
    }
});