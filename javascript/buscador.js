// El índice de contenido indexado para NetGuiaVenezuela
const indicePaginas = [
    {
        titulo: "Tasa BCV Hoy: Dólar, Euro y USDT en Venezuela",
        descripcion: "Consulta la tasa oficial del día: precio del dólar BCV, el euro y el USDT de Binance en tiempo real.",
        url: "tasa-bcv-hoy.html",
        palabrasClave: ["tasa", "bcv", "dolar", "euro", "usdt", "binance", "precio", "cambio", "bolivares", "hoy"],
        icono: "💰"
    },
    {
        titulo: "Guía de Repuestos y Equivalencias para Motos",
        descripcion: "Descubre qué repuestos de marcas japonesas le sirven a tu moto china (Owen, SBR, Horse) y dónde comprarlos con Cashea/Krece.",
        url: "guia-repuestos-motos.html",
        palabrasClave: ["motos", "repuestos", "owen", "bera", "sbr", "horse", "toro", "jaguar", "pastillas", "frenos", "cashea", "krece", "equivalencias", "moto"],
        icono: "🏍️"
    },
    {
        titulo: "Guía de Trámites Legales (SAREN y GTU)",
        descripcion: "Paso a paso para citas del SAREN, legalizaciones universitarias en el GTU y apostillas sin perder tiempo.",
        url: "guia-gtu-sarem.html",
        palabrasClave: ["saren", "gtu", "apostilla", "legalizar", "titulo", "universidad", "partida de nacimiento", "tramites", "citas", "registro"],
        icono: "📄"
    },
    {
        titulo: "Cómo Sacar o Renovar el Pasaporte Venezolano (2026)",
        descripcion: "Requisitos, citas en el SAIME, costo de las tasas y tiempos de entrega para el pasaporte venezolano.",
        url: "guia-pasaporte.html",
        palabrasClave: ["pasaporte", "saime", "cita", "visa", "renovar", "viajar", "tramites", "consulado"],
        icono: "📄"
    },
    {
        titulo: "Guía de Finanzas Digitales (Binance y Zinli)",
        descripcion: "Tutorial completo para mover tus fondos en Binance P2P, recargar Zinli desde Venezuela y proteger tus ingresos.",
        url: "guia-binance-zinli.html",
        palabrasClave: ["binance", "zinli", "p2p", "dolares", "recargar", "bolivares", "pagos", "tarjeta", "cripto"],
        icono: "💰"
    },
    {
        titulo: "Cómo Ahorrar Dólares en Venezuela",
        descripcion: "Estrategias reales para ahorrar en dólares: efectivo vs digital, USDT, billeteras seguras y errores comunes.",
        url: "guia-ahorrar-dolares.html",
        palabrasClave: ["ahorrar", "dolares", "usdt", "ahorro", "inversion", "billetera", "cambio", "ganar"],
        icono: "💰"
    },
    {
        titulo: "Cómo Funciona Cashea en Venezuela",
        descripcion: "Qué es Cashea, requisitos para pagar a cuotas, montos mínimos, cómo estirar el crédito y qué riesgos evitar.",
        url: "guia-cashea.html",
        palabrasClave: ["cashea", "cuotas", "credito", "financiamiento", "comprar", "pago", "billetera", "deuda"],
        icono: "💰"
    },
    {
        titulo: "Salario Mínimo y Cestaticket en Venezuela (2026)",
        descripcion: "Diferencias entre salario mínimo y cestaticket, cómo se calculan y dónde verificar los montos vigentes.",
        url: "guia-sueldo-minimo.html",
        palabrasClave: ["salario", "sueldo", "minimo", "cestaticket", "gaceta", "beneficios", "cobrar", "trabajo"],
        icono: "🇻🇪"
    },
    {
        titulo: "Metro de Caracas 2026: Precios y Consejos",
        descripcion: "Cómo pagar con el Bus y la tarjeta sin contacto, cuánto cuesta el pasaje y consejos para viajar seguro.",
        url: "guia-metro-caracas.html",
        palabrasClave: ["metro", "caracas", "pasaje", "bus", "tarjeta", "transporte", "linea", "estación", "viaje"],
        icono: "🇻🇪"
    },
    {
        titulo: "KRM Glorious Blaze CODM: Cuánto CP Cuesta",
        descripcion: "Costo completo de la ruleta KRM Glorious Blaze en CODM. Tiro por tiro, cuánto CP necesitas en Venezuela y cómo ahorrar.",
        url: "gaming-krm-glorious-blaze.html",
        palabrasClave: ["krm", "glorious", "blaze", "codm", "call of duty", "ruleta", "cp", "legendaria", "gaming", "danger", "drop", "escopeta"],
        icono: "🔥"
    },
    {
        titulo: "Calculadora de Ruletas CODM (2026)",
        descripcion: "Calcula el costo tiro por tiro de ruletas míticas y legendarias de CODM, y cuánto cuesta maxearlas en Venezuela.",
        url: "gaming-codm.html",
        palabrasClave: ["codm", "call of duty", "ruleta", "cp", "mitica", "legendaria", "gaming", "maxear", "cod mobile"],
        icono: "🎮"
    },
    {
        titulo: "Cómo Apostillar Documentos en Venezuela",
        descripcion: "Apostilla de actas de nacimiento, poderes y certificaciones: qué autoridad la tramita, requisitos y tiempos.",
        url: "guia-apostillar-documentos.html",
        palabrasClave: ["apostilla", "apostillar", "documentos", "acta", "poder", "notaria", "certificacion", "la haya", "legalizar"],
        icono: "📄"
    },
    {
        titulo: "Cédula ONIDEX: Primera Vez, Renovación y Reposición",
        descripcion: "Cómo tramitar tu cédula en ONIDEX: requisitos, citas y pasos para la primera emisión, renovación o reposición.",
        url: "guia-cita-onidex.html",
        palabrasClave: ["onidex", "cedula", "identidad", "primera", "renovar", "renovacion", "reposicion", "robo", "extraviada", "identificacion"],
        icono: "📄"
    },
    {
        titulo: "Licencia de Conducir en Venezuela (INTT)",
        descripcion: "Cómo obtener o renovar la licencia de conducir: requisitos del INTT, pruebas, tasas por categoría y vigencia.",
        url: "guia-licencia-conducir.html",
        palabrasClave: ["licencia", "conducir", "intt", "manejar", "renovar", "examen", "categoria", "conductor"],
        icono: "📄"
    },
    {
        titulo: "Cómo Comprar USDT en Venezuela",
        descripcion: "Compra USDT con bolívares paso a paso por P2P: crear cuenta, elegir oferta, pagar seguro y evitar estafas.",
        url: "guia-comprar-usdt.html",
        palabrasClave: ["usdt", "comprar", "p2p", "binance", "cripto", "bolivares", "dolares", "tienda"],
        icono: "💰"
    },
    {
        titulo: "Mantenimiento Básico de Moto 125/150cc",
        descripcion: "Rutinas de mantenimiento de motos: aceite, cadena, bujía, frenos y llantas según los kilómetros.",
        url: "guia-mantenimiento-moto.html",
        palabrasClave: ["mantenimiento", "moto", "aceite", "cadena", "bujia", "frenos", "llantas", "150cc", "125", "mecanica"],
        icono: "🏍️"
    },
    {
        titulo: "Cómo Matricular una Moto en Venezuela",
        descripcion: "Matrícula de motos ante el INTT: requisitos, tasas por cilindrada, placas y título de propiedad.",
        url: "guia-matricular-moto.html",
        palabrasClave: ["matricular", "matricula", "moto", "placas", "intt", "registro", "titulo", "circular"],
        icono: "🏍️"
    },
    {
        titulo: "CP Gratis en CODM (2026)",
        descripcion: "Cómo conseguir CP gratis de forma legítima en Call of Duty Mobile: eventos, códigos oficiales y precauciones.",
        url: "gaming-cp-gratis.html",
        palabrasClave: ["cp", "codm", "gratis", "call of duty", "codigo", "canjear", "evento", "recompensa"],
        icono: "🎮"
    },
    {
        titulo: "Juegos para Celulares de Gama Baja (2026)",
        descripcion: "Juegos que corren en Android de gama baja y trucos para optimizar el teléfono y jugar sin cortes.",
        url: "gaming-gama-baja.html",
        palabrasClave: ["gama baja", "juegos", "android", "otimizar", "lag", "free fire", "codm", "mlbb", "celular"],
        icono: "🎮"
    },
    {
        titulo: "Sistema Patria y el Carnet de la Patria 2026",
        descripcion: "Cómo crear tu perfil en el Sistema Patria, mantener los datos al día, y recibir bonos y beneficios como el CLAP.",
        url: "guia-carnet-patria.html",
        palabrasClave: ["patria", "carnet", "sistema patria", "bonos", "clap", "nucleo familiar", "beneficios", "subsidio"],
        icono: "📄"
    },
    {
        titulo: "Cómo Recargar Zinli desde Venezuela",
        descripcion: "Métodos para recargar tu billetera Zinli: transferencia, P2P y puntos de pago. Comisiones y consejos.",
        url: "guia-recargar-zinli.html",
        palabrasClave: ["zinli", "recargar", "billetera", "transferencia", "saldo", "cargar", "dinero"],
        icono: "💰"
    },
    {
        titulo: "Tarjetas Virtuales para Pagar en Línea",
        descripcion: "Comparativa de tarjetas virtuales (Zinli, Binance Card) para pagar en plataformas internacionales desde Venezuela.",
        url: "guia-tarjetas-virtuales.html",
        palabrasClave: ["tarjeta", "virtual", "visa", "mastercard", "pagar", "online", "zinli", "binance card"],
        icono: "💰"
    },
    {
        titulo: "SOAT e Inspección Vehicular en Venezuela",
        descripcion: "Seguro Obligatorio SOAT e inspección vehicular: requisitos, costos, dónde tramitarlos y cómo evitar multas.",
        url: "guia-soat-inspeccion.html",
        palabrasClave: ["soat", "inspeccion", "vehicular", "seguro", "moto", "carro", "INTT", "multa"],
        icono: "📄"
    },
    {
        titulo: "Cómo Vender una Moto Usada en Venezuela",
        descripcion: "Guía para vender tu moto usada: fijar precio, documentos, dónde publicar y cómo cerrar la venta con contrato.",
        url: "guia-vender-moto.html",
        palabrasClave: ["vender", "moto", "usada", "venta", "contrato", "precio", "segunda mano"],
        icono: "🏍️"
    },
    {
        titulo: "Cuánto Cuesta Vivir en Venezuela",
        descripcion: "Estimación del costo de vida mensual: alquiler, alimentación, transporte, servicios y consejos de ahorro.",
        url: "guia-cuanto-cuesta-vivir.html",
        palabrasClave: ["costo", "vida", "vivir", "presupuesto", "alquiler", "gastos", "mensual", "familia"],
        icono: "🇻🇪"
    },
    {
        titulo: "Cómo Pagar Servicios Públicos en Línea",
        descripcion: "Guía para pagar electricidad, agua, teléfono e internet desde tu celular o computadora en Venezuela.",
        url: "guia-servicios-publicos.html",
        palabrasClave: ["servicios", "publicos", "electricidad", "agua", "pago", "linea", "corpoelec", "factura"],
        icono: "🇻🇪"
    },
    {
        titulo: "Cómo Mejorar tu Conexión para Juegos Online",
        descripcion: "Trucos para reducir el ping y mejorar la estabilidad: DNS, ethernet, ajustes del router y del juego.",
        url: "gaming-internet-mejorar.html",
        palabrasClave: ["internet", "ping", "lag", "conexion", "juegos", "online", "dns", "wifi", "router"],
        icono: "🎮"
    },
    {
        titulo: "Marcas de Motos más Vendidas en Venezuela",
        descripcion: "Ranking de marcas de motos (Empire, SBR, Bera, Horse, Yamaha, Honda): precios, repuestos y confiabilidad.",
        url: "guia-marcas-motos.html",
        palabrasClave: ["marcas", "motos", "empire", "sbr", "bera", "horse", "yamaha", "honda", "comparativa"],
        icono: "🏍️"
    },
    {
        titulo: "Kit GNV (Metano) para Moto en Venezuela (2026)",
        descripcion: "Cuánto cuesta instalar un kit de gas natural vehicular a una moto, cuánto rinde, requisitos legales y riesgos de seguridad.",
        url: "guia-gnv-moto.html",
        palabrasClave: ["gnv", "metano", "gas", "moto", "kit gnv", "bombona", "combustible", "ahorro", "natural"],
        icono: "🏍️"
    },
    {
        titulo: "Ubii en Venezuela: Cómo Funciona y Créditos (2026)",
        descripcion: "Billetera digital Ubii: cómo registrarte, recargar, cobrar y acceder a créditos por niveles con sus comisiones.",
        url: "guia-ubii.html",
        palabrasClave: ["ubii", "ubiipagos", "billetera", "credito", "dolares", "pagos", "niveles", "fintech"],
        icono: "💰"
    },
    {
        titulo: "Pago Móvil y Biopago en Venezuela (2026)",
        descripcion: "Cómo activar el pago móvil en tu banco, enviar y recibir dinero, usar Biopago y protegerte de estafas.",
        url: "guia-pago-movil-biopago.html",
        palabrasClave: ["pago movil", "biopago", "banco", "transferencia", "telefono", "cobrar", "pagar", "bcv"],
        icono: "💰"
    },
    {
        titulo: "Certificado de Antecedentes Penales en Línea (2026)",
        descripcion: "Cómo obtener el certificado de antecedentes penales en Venezuela: requisitos, costo, trámite por SAIME y vigencia.",
        url: "guia-antecedentes-penales.html",
        palabrasClave: ["antecedentes", "penales", "registro", "saime", "certificado", "judicial", "empleo", "record"],
        icono: "📄"
    },
    {
        titulo: "Dólar Paralelo vs Dólar BCV (2026)",
        descripcion: "Qué es el dólar paralelo, en qué se diferencia del BCV, cómo se calcula y cómo convertir bolívares con cada tasa.",
        url: "guia-dolar-paralelo.html",
        palabrasClave: ["dolar paralelo", "dolar negro", "bcv", "dolar", "paralelo", "tasa", "cambio", "conversion", "bolivares"],
        icono: "💰"
    }
];

const inputBusqueda = document.getElementById('input-busqueda');
const cajaResultados = document.getElementById('resultados-busqueda-caja');
const STORAGE_KEY = 'netguia_busquedas_recientes';
const MAX_RECIENTES = 5;

function obtenerRecientes() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
}

function guardarReciente(texto) {
    if (!texto || texto.length < 2) return;
    var recientes = obtenerRecientes().filter(function (r) { return r !== texto; });
    recientes.unshift(texto);
    if (recientes.length > MAX_RECIENTES) recientes = recientes.slice(0, MAX_RECIENTES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recientes));
}

function mostrarRecientes() {
    var recientes = obtenerRecientes();
    if (recientes.length === 0) return false;
    var html = '<div class="buscador-real__recientes"><span class="buscador-real__recientes-label">Búsquedas recientes:</span>';
    recientes.forEach(function (r) {
        html += '<button class="buscador-real__recientes-item" data-buscar="' + r + '">' + r + '</button>';
    });
    html += '</div>';
    cajaResultados.innerHTML = html;
    cajaResultados.style.display = 'block';

    cajaResultados.querySelectorAll('[data-buscar]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            inputBusqueda.value = this.getAttribute('data-buscar');
            inputBusqueda.dispatchEvent(new Event('input'));
        });
    });
    return true;
}

inputBusqueda.addEventListener('focus', function () {
    if (this.value.trim().length === 0) mostrarRecientes();
});

inputBusqueda.addEventListener('input', function() {
    const textoUsuario = this.value.toLowerCase().trim();
    
    if (textoUsuario.length === 0) {
        mostrarRecientes() || (cajaResultados.style.display = 'none');
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
        let htmlAcumulado = '';
        
        resultadosFiltrados.forEach(pagina => {
            htmlAcumulado += `
                <a href="${pagina.url}" class="buscador-real__item" data-url="${pagina.url}">
                    <span class="buscador-real__item-icono">${pagina.icono || '📄'}</span>
                    <div class="buscador-real__item-texto">
                        <h4>${pagina.titulo}</h4>
                        <p>${pagina.descripcion}</p>
                    </div>
                </a>
            `;
        });
        cajaResultados.innerHTML = htmlAcumulado;

        cajaResultados.querySelectorAll('.buscador-real__item').forEach(function (item) {
            item.addEventListener('mousedown', function (e) {
                e.preventDefault();
                guardarReciente(inputBusqueda.value.trim());
            });
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

// ==========================================================================
/* EFFECT: Placeholder Dinámico para animar la barra de búsqueda */
// ==========================================================================
const frasesSugeridas = [
    '¿Cuánto está el dolar BCV hoy?',
    '¿Cuánto está el dólar paralelo?',
    '¿Kit GNV para moto? ¿Cuánto cuesta?',
    '¿Cómo funcionan los créditos de Ubii?',
    '¿Cómo pagar con pago móvil?',
    '¿Buscas repuestos para tu Owen?',
    '¿Cómo pedir cita en el SAREN?',
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