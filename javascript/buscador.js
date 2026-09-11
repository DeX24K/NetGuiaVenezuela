// El índice de contenido indexado para NetGuiaVenezuela
const indicePaginas = [
    {
        titulo: "Tasa BCV Hoy: Dólar, Euro y USDT en Venezuela",
        descripcion: "Consulta la tasa oficial del día: precio del dólar BCV, el euro y el USDT de Binance en tiempo real.",
        url: "tasa-bcv-hoy.html",
        palabrasClave: ["tasa", "bcv", "dolar", "euro", "usdt", "binance", "precio", "cambio", "bolivares", "hoy"]
    },
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
        titulo: "Cómo Sacar o Renovar el Pasaporte Venezolano (2026)",
        descripcion: "Requisitos, citas en el SAIME, costo de las tasas y tiempos de entrega para el pasaporte venezolano.",
        url: "guia-pasaporte.html",
        palabrasClave: ["pasaporte", "saime", "cita", "visa", "renovar", "viajar", "tramites", "consulado"]
    },
    {
        titulo: "Guía de Finanzas Digitales (Binance y Zinli)",
        descripcion: "Tutorial completo para mover tus fondos en Binance P2P, recargar Zinli desde Venezuela y proteger tus ingresos.",
        url: "guia-binance-zinli.html",
        palabrasClave: ["binance", "zinli", "p2p", "dolares", "recargar", "bolivares", "pagos", "tarjeta", "cripto"]
    },
    {
        titulo: "Cómo Ahorrar Dólares en Venezuela",
        descripcion: "Estrategias reales para ahorrar en dólares: efectivo vs digital, USDT, billeteras seguras y errores comunes.",
        url: "guia-ahorrar-dolares.html",
        palabrasClave: ["ahorrar", "dolares", "usdt", "ahorro", "inversion", "billetera", "cambio", "ganar"]
    },
    {
        titulo: "Cómo Funciona Cashea en Venezuela",
        descripcion: "Qué es Cashea, requisitos para pagar a cuotas, montos mínimos, cómo estirar el crédito y qué riesgos evitar.",
        url: "guia-cashea.html",
        palabrasClave: ["cashea", "cuotas", "credito", "financiamiento", "comprar", "pago", "billetera", "deuda"]
    },
    {
        titulo: "Salario Mínimo y Cestaticket en Venezuela (2026)",
        descripcion: "Diferencias entre salario mínimo y cestaticket, cómo se calculan y dónde verificar los montos vigentes.",
        url: "guia-sueldo-minimo.html",
        palabrasClave: ["salario", "sueldo", "minimo", "cestaticket", "gaceta", "beneficios", "cobrar", "trabajo"]
    },
    {
        titulo: "Metro de Caracas 2026: Precios y Consejos",
        descripcion: "Cómo pagar con el Bus y la tarjeta sin contacto, cuánto cuesta el pasaje y consejos para viajar seguro.",
        url: "guia-metro-caracas.html",
        palabrasClave: ["metro", "caracas", "pasaje", "bus", "tarjeta", "transporte", "linea", "estación", "viaje"]
    },
    {
        titulo: "Calculadora de Ruletas CODM (2026)",
        descripcion: "Calcula el costo tiro por tiro de ruletas míticas y legendarias de CODM, y cuánto cuesta maxearlas en Venezuela.",
        url: "gaming-codm.html",
        palabrasClave: ["codm", "call of duty", "ruleta", "cp", "mitica", "legendaria", "gaming", "maxear", "cod mobile"]
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
        let htmlAcumulado = ''; // Optimización de rendimiento
        
        resultadosFiltrados.forEach(pagina => {
            htmlAcumulado += `
                <a href="${pagina.url}" class="buscador-real__item">
                    <h4>${pagina.titulo}</h4>
                    <p>${pagina.descripcion}</p>
                </a>
            `;
        });
        cajaResultados.innerHTML = htmlAcumulado;
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

// ==========================================================================
/* EFFECT: Placeholder Dinámico para animar la barra de búsqueda */
// ==========================================================================
const frasesSugeridas = [
    '¿Cuánto está el dolar BCV hoy?',
    '¿Buscas repuestos para tu Owen?',
    '¿Cómo pedir cita en el SAREN?',
    '¿Cómo recargar Zinli con Binance?',
    '¿Cómo renovar el pasaporte?',
    '¿Cómo funciona Cashea?'
];

let fraseIndex = 0;

function rotarPlaceholder() {
    if (inputBusqueda) {
        inputBusqueda.setAttribute('placeholder', frasesSugeridas[fraseIndex]);
        fraseIndex = (fraseIndex + 1) % frasesSugeridas.length;
    }
}

rotarPlaceholder();
setInterval(rotarPlaceholder, 3500);