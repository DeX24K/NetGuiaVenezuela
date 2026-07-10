// Data maestra actualizada con Disponibilidad Nacional y Apps de Financiamiento
const baseDatosRepuestos = {
    owen: [
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Agencias Oficiales Empire Keeway y locales multimarcas (Av. Baralt / Quinta Crespo / Av. Lisandro Alvarado).",
            pagos: ["cashea"],
            detalle: "Calzan exacto, duran el triple que las genéricas chinas." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Suzuki EN 125", 
            precio: "$3 - $5", 
            donde: "Casas especializadas en guayas y repuestos japoneses (Bello Monte / Carrera 21 Barquisimeto).",
            pagos: ["cashea", "krece"],
            detalle: "Un pelo más largo, pero calza y funciona súper suave." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Suzuki GN 125", 
            precio: "$2 - $4", 
            donde: "Cualquier tienda de repuestos de motos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Tipo espuma/galleta. Filtra mucho mejor el polvo de la ciudad." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$16 - $22", 
            donde: "Concesionarios oficiales EK y repuesteras grandes en la Av. Lisandro Alvarado (Valencia).",
            pagos: ["cashea", "krece"],
            detalle: "Misma manzana de impacto. Te da excelente rendimiento en plano y subidas." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal Motores CG 150cc", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales clave (Bello Monte Caracas / Av. La Limpia Maracaibo).",
            pagos: ["cashea"],
            detalle: "Viene listo para montar. Optimiza el consumo de gasolina si el original ya tiene desgaste." 
        }
    ],
    horse: [
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Agencias oficiales Empire y mayoristas multimarcas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "La calibración e intensidad de chispa ideal para el motor CG." 
        },
        { 
            repuesto: "Bandas de Freno Traseras", 
            marca: "Suzuki GN 125 / Yamaha DT", 
            precio: "$5 - $8", 
            donde: "Zonas comerciales principales (Av. La Limpia Maracaibo / Quinta Crespo). Busca marcas reconocidas como Fras-le.",
            pagos: ["cashea", "krece"],
            detalle: "Busca marca Fras-le (Brasileña) para mayor seguridad y frenado silencioso." 
        },
        { 
            repuesto: "Guaya de Embrague (Cloche)", 
            marca: "Suzuki GN 125", 
            precio: "$3 - $5", 
            donde: "Multimarcas de repuestos de motos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Es totalmente compatible, solo debes validar que el recorrido quede bien graduado en la manilla." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Bera SBR / Toro Jaguar", 
            precio: "$24 - $32", 
            donde: "Tiendas oficiales EK y grandes pasajes comerciales de repuestos.",
            pagos: ["cashea", "krece"],
            detalle: "Tienen la misma distancia entre ojos. Son ideales si trabajas cargado o haciendo delivery." 
        }
    ],
    bera_sbr: [
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Concesionarios Oficiales Bera Motorcycles y tiendas eléctricas en zonas comerciales calientes.",
            pagos: ["krece"],
            detalle: "Mejora notablemente el encendido en frío por las mañanas." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse", 
            precio: "$25 - $35", 
            donde: "Tiendas multimarcas grandes y talleres aliados en avenidas principales de tu ciudad.",
            pagos: ["cashea", "krece"],
            detalle: "Tienen la misma medida de ojo a ojo, son más reforzados y aguantan más peso de carga." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Empire Owen / Yamaha YBR", 
            precio: "$5 - $8", 
            donde: "Cualquier agente autorizado Bera o repuestera multimarcas de confianza.",
            pagos: ["krece"],
            detalle: "Frenado limpio. Se recomienda limpiar el disco con desengrasante al instalarlas." 
        },
        { 
            repuesto: "Kit de Cilindro 150cc", 
            marca: "Universal CG 150 (Empire/Toro)", 
            precio: "$35 - $45", 
            donde: "Distribuidoras Bera oficiales y talleres grandes en Quinta Crespo o Av. Constitución (Maracay).",
            pagos: ["cashea", "krece"],
            detalle: "Mismo diámetro y carrera de pasador. Te devuelve la compresión original de fábrica." 
        }
    ],
    toro_jaguar: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios oficiales Motos Toro y grandes distribuidores multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "Es la misma manzana de impacto. La relación original le da muy buen desplace en autopista." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas oficiales Toro y repuesteras eléctricas multimarcas.",
            pagos: ["cashea"],
            detalle: "Garantiza una combustión óptima y evita los tirones en altas revoluciones." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Empire Horse / Owen GS", 
            precio: "$4 - $7", 
            donde: "Concesionarios Toro y zonas comerciales del eje central del país.",
            pagos: ["cashea", "krece"],
            detalle: "Calce milimétrico idéntico en la mordaza delantera estándar." 
        }
    ],
    md_tucan: [
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Toro", 
            precio: "$22 - $30", 
            donde: "Locales de repuestos generales en zonas moteras de alta competencia.",
            pagos: ["cashea"],
            detalle: "Son un pelo más reforzados, ideales si usas la moto para delivery o carga pesada." 
        },
        { 
            repuesto: "Kit de Arrastre", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$15 - $21", 
            donde: "Tiendas multimarcas en la Av. Pedro León Torres (Barquisimeto) y Quinta Crespo.",
            pagos: ["cashea"],
            detalle: "La corona asienta perfecto en la manzana trasera del Tucán." 
        }
    ],
    bera_br200: [
        { 
            repuesto: "Correa de Transmisión", 
            marca: "Gates PowerLink (GY6 150/200)", 
            precio: "$12 - $18", 
            donde: "Tiendas especializadas en Scooters y repuestos de transmisión automática (Bello Monte / Av. Lara Valencia).",
            pagos: ["cashea", "krece"],
            detalle: "Para este scooter, la correa Gates original aguanta mucho más la temperatura del variador." 
        },
        { 
            repuesto: "Dados de Variador (Rollers)", 
            marca: "Universal Scooter GY6 150cc", 
            precio: "$6 - $10", 
            donde: "Talleres especializados en motos automáticas en las principales ciudades.",
            pagos: ["krece"],
            detalle: "Usa el peso estándar (14 gramos) para mantener el balance perfecto entre salida y velocidad final." 
        }
    ],
    // NUEVA MOTO ADICIONADA
    empire_express: [
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Owen", 
            precio: "$24 - $32", 
            donde: "Concesionarios Empire Keeway y zonas comerciales de repuestos multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida. Los de Horse son un poco más rígidos, perfectos para aguantar la faena diaria de mototaxi o encomiendas." 
        },
        { 
            repuesto: "Bandas de Freno Traseras", 
            marca: "Suzuki GN 125", 
            precio: "$5 - $8", 
            donde: "Cualquier repuestera grande a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Ajustan exacto en la campana trasera de la Express. Te dan un frenado firme sin chirridos." 
        }
    ],
    // NUEVA MOTO ADICIONADA
    toro_fox: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$15 - $20", 
            donde: "Tiendas oficiales Motos Toro y grandes distribuidores de repuestos multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La manzana trasera es compatible, lo que te facilita conseguir repuestos económicos en cualquier esquina." 
        },
        { 
            repuesto: "Farola Delantera (Faro LED)", 
            marca: "Universal Motos de Foco Redondo 6.5''", 
            precio: "$18 - $28", 
            donde: "Tiendas de accesorios de iluminación LED (Av. Baralt / Bello Monte).",
            pagos: ["cashea"],
            detalle: "Calza en los mismos soportes laterales del Toro Fox y mejora radicalmente la iluminación nocturna." 
        }
    ]
};

const selectMoto = document.getElementById('select-moto');
const selectRepuesto = document.getElementById('select-repuesto');
const contenedorResultado = document.getElementById('resultado-unico-contenedor');

// Cambiar Moto -> Llenar Repuestos
selectMoto.addEventListener('change', function() {
    const motoKey = this.value;
    selectRepuesto.innerHTML = '<option value="">-- Elige el repuesto --</option>';
    contenedorResultado.innerHTML = '<p class="buscador-motos__placeholder">Ahora selecciona el repuesto que necesitas consultar arriba.</p>';
    
    if (!motoKey) {
        selectRepuesto.disabled = true;
        contenedorResultado.innerHTML = '<p class="buscador-motos__placeholder">Selecciona los datos arriba para mostrar la equivalencia, precios y locales con financiamiento.</p>';
        return;
    }

    selectRepuesto.disabled = false;
    const repuestosDisponibles = baseDatosRepuestos[motoKey];
    repuestosDisponibles.forEach((item, index) => {
        selectRepuesto.innerHTML += `<option value="${index}">${item.repuesto}</option>`;
    });
});

// Cambiar Repuesto -> Generar Tarjeta Completa con Calculadora Automática Inteligente
selectRepuesto.addEventListener('change', function() {
    const motoKey = selectMoto.value;
    const repuestoIndex = this.value;

    if (!repuestoIndex) {
        contenedorResultado.innerHTML = '<p class="buscador-motos__placeholder">Ahora selecciona el repuesto que necesitas consultar arriba.</p>';
        return;
    }

    const item = baseDatosRepuestos[motoKey][repuestoIndex];

    // Construir visualmente las etiquetas de Cashea o Krece
    let htmlPagos = '';
    item.pagos.forEach(metodo => {
        if(metodo === 'cashea') {
            htmlPagos += '<span class="tag-financiado tag-financiado--cashea">Cashea Activo</span>';
        }
        if(metodo === 'krece') {
            htmlPagos += '<span class="tag-financiado tag-financiado--krece">Krece Activo</span>';
        }
    });

    // --- LÓGICA DE CONTROL DE MÍNIMOS DE COMPRA ---
    const preciosExtraidos = item.precio.replace(/[^0-9]/g, ' ').trim().split(/\s+/);
    let textoCuotasCalculadas = '';
    let estiloCajaPlan = 'background-color: #f0fdf4; border: 1px solid #bbf7d0; color: #166534;'; // Estilo verde por defecto

    if (preciosExtraidos.length >= 1 && preciosExtraidos[0] !== '') {
        const precioBase = parseInt(preciosExtraidos[0]);
        
        // Si el precio inicial es menor a 15$, alertamos sobre el mínimo de Cashea/Krece
        if (precioBase < 15) {
            estiloCajaPlan = 'background-color: #fff7ed; border: 1px solid #ffedd5; color: #9a3412;'; // Estilo naranja de advertencia
            textoCuotasCalculadas = `⚠️ Este artículo no alcanza el mínimo de compra requerido por las aplicaciones ($15 - $20). Te sugerimos armar un combo con otros repuestos en la misma tienda para poder financiarlo.`;
        } else {
            // Si pasa el mínimo, calculamos el plan tradicional de cuotas
            const inicialEstimada = (precioBase * 0.4).toFixed(1);
            const cuotaEstimada = (precioBase * 0.2).toFixed(1);
            textoCuotasCalculadas = `<strong>Plan Estimado:</strong> Inicial de <strong>$${inicialEstimada}</strong> y 3 cuotas quincenales de <strong>$${cuotaEstimada}</strong>`;
        }
    } else {
        textoCuotasCalculadas = `Cuotas calculadas según la tasa del día en el establecimiento de tu elección.`;
    }

    // Pintar la súper tarjeta de información en pantalla
    contenedorResultado.innerHTML = `
        <div class="tarjeta-resultado animate-fade-in" style="border-left: 5px solid var(--color-principal);">
            <div class="tarjeta-resultado__header">
                <h4 class="tarjeta-resultado__titulo" style="font-size: 1.4rem;">${item.repuesto}</h4>
                <span class="tag-precio" style="font-size: 1.1rem; padding: 0.4rem 0.8rem;">${item.precio}</span>
            </div>
            <div class="tarjeta-resultado__cuerpo">
                <div style="margin-bottom: 1.2rem;">
                    <p class="articulo__texto" style="margin-bottom: 0.3rem;"><strong>Equivalencia directa recomendada:</strong></p>
                    <span class="tag-compatible" style="font-size: 1.05rem; padding: 0.3rem 0.7rem;">${item.marca}</span>
                </div>
                
                <p class="articulo__texto" style="margin-bottom: 0.8rem;">
                    <strong>📍 Dónde conseguirlo:</strong> ${item.donde}
                </p>
                
                <div style="margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                    <strong class="articulo__texto" style="margin: 0;">💳 Financiamiento en zona:</strong> 
                    ${htmlPagos}
                </div>

                <div style="${estiloCajaPlan} padding: 0.9rem; border-radius: 8px; margin-bottom: 1rem;">
                    <p class="articulo__texto" style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: inherit;">
                        ${textoCuotasCalculadas}
                    </p>
                </div>

                <div style="background-color: #f8fafc; padding: 0.8rem; border-radius: 6px; border-left: 3px solid var(--color-principal); margin-top: 1rem;">
                    <p class="articulo__texto" style="margin: 0; font-size: 0.95rem; color: #475569;">
                        <strong>💡 Tip Técnico:</strong> ${item.detalle}
                    </p>
                </div>
            </div>
        </div>
    `;
});