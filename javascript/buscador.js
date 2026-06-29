// Tu índice de contenido indexado para NetGuiaVenezuela
    const indicePaginas = [
        {
            titulo: "Guía de Repuestos y Equivalencias para Motos",
            descripcion: "Descubre qué repuestos de marcas japonesas le sirven a tu moto china (Owen, SBR, Horse) y dónde comprarlos con Cashea/Krece.",
            url: "guia-repuestos-motos.html",
            palabrasClave: ["motos", "repuestos", "owen", "bera", "sbr", "horse", "toro", "jaguar", "pastillas", "frenos", "cashea", "krece", "equivalencias", "moto"]
        },
        {
            titulo: "Guía de Trámites Legales (SAREN y GTU)",
            descripcion: "Paso a paso para citas del SAREN, legalizaciones universitarias en el GTU y apostillas sin perder tiempo.",
            url: "guia-gtu-sarem.html",
            palabrasClave: ["saren", "gtu", "apostilla", "legalizar", "titulo", "universidad", "partida de nacimiento", "tramites", "citas", "registro"]
        },
        {
            titulo: "Guía de Finanzas Digitales (Binance y Zinli)",
            descripcion: "Tutorial completo para mover tus fondos en Binance P2P, recargar Zinli desde Venezuela y proteger tus ingresos.",
            url: "guia-binance-zinli.html",
            palabrasClave: ["binance", "zinli", "p2p", "dolares", "recargar", "bolivares", "pagos", "tarjeta", "cripto"]
        }
    ];

    const inputBusqueda = document.getElementById('input-busqueda');
    const cajaResultados = document.getElementById('resultados-busqueda-caja');

    inputBusqueda.addEventListener('input', function() {
        const textoUsuario = this.value.toLowerCase().trim();
        
        if (textoUsuario.length === 0) {
            cajaResultados.innerHTML = '';
            cajaResultados.style.display = 'none';
            return;
        }

        const resultadosFiltrados = indicePaginas.filter(pagina => {
            return pagina.titulo.toLowerCase().includes(textoUsuario) || 
                pagina.descripcion.toLowerCase().includes(textoUsuario) || 
                pagina.palabrasClave.some(palabra => palabra.includes(textoUsuario));
        });

        cajaResultados.innerHTML = '';
        
        if (resultadosFiltrados.length > 0) {
            cajaResultados.style.display = 'block';
            resultadosFiltrados.forEach(pagina => {
                cajaResultados.innerHTML += `
                    <a href="${pagina.url}" class="buscador-real__item">
                        <h4>${pagina.titulo}</h4>
                        <p>${pagina.descripcion}</p>
                    </a>
                `;
            });
        } else {
            cajaResultados.style.display = 'block';
            cajaResultados.innerHTML = `
                <div class="buscador-real__sin-resultados">
                    ❌ No encontramos guías para "<strong>${this.value}</strong>". ¡Pronto la añadiremos!
                </div>
            `;
        }
    });

    // Cerrar si hacen clic fuera
    document.addEventListener('click', function(evento) {
        if (!inputBusqueda.contains(evento.target) && !cajaResultados.contains(evento.target)) {
            cajaResultados.style.display = 'none';
        }
    });