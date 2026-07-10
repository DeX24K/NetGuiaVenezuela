// Matrices EXACTAS y verificadas de las ruletas de CODM (10 tiros)
const escalasRuletas = {
    // === VENEZUELA / INDIA / REGION ECONOMICA (10 CP BASE) ===
    "10_legendaria_no_reactiva": [10, 30, 50, 120, 200, 320, 520, 800, 1100, 1400], // Total: 4,550 CP
    "10_legendaria_reactiva":    [10, 30, 50, 120, 200, 320, 520, 800, 1110, 1800], // Total: 4,950 CP
    "10_mitica_arma":            [10, 30, 50, 120, 200, 350, 520, 930, 1300, 2300], // Total: 5,810 CP
    "10_mitica_personaje":       [20, 50, 90, 160, 280, 440, 680, 1100, 1700, 2700], // Total: 7,220 CP

    // === COLOMBIA / LATAM ESTANDAR (20 CP BASE) ===
    "20_legendaria_no_reactiva": [20, 55, 80, 210, 350, 560, 900, 1400, 1900, 2400], // Total: 7,875 CP
    "20_legendaria_reactiva":    [20, 55, 80, 210, 350, 560, 900, 1400, 1900, 3200], // Total: 8,675 CP
    "20_mitica_arma":            [20, 55, 80, 210, 350, 560, 900, 1600, 2300, 4000], // Total: 10,075 CP
    "20_mitica_personaje":       [35, 90, 155, 280, 490, 770, 1200, 2000, 2900, 4700], // Total: 12,620 CP

    // === USA / CUENTAS GLOBALES ALTAS (30 CP BASE) ===
    "30_legendaria_no_reactiva": [30, 80, 120, 300, 500, 800, 1300, 2000, 2800, 3900], // Total: 11,830 CP
    "30_legendaria_reactiva":    [30, 80, 120, 300, 500, 800, 1300, 2000, 2800, 4700], // Total: 12,630 CP
    "30_mitica_arma":            [30, 80, 120, 300, 500, 800, 1300, 2400, 3400, 5800], // Total: 14,730 CP
    "30_mitica_personaje":       [50, 130, 220, 400, 700, 1100, 1700, 2800, 4200, 6700]  // Total: 18,000 CP
};

// Estimación media de CP necesarios para MAXEAR los niveles míticos
const costosMaxeo = {
    "10_mitica_arma": 6000,      
    "10_mitica_personaje": 10000, 
    "20_mitica_arma": 10500,
    "20_mitica_personaje": 16500,
    "30_mitica_arma": 14400,
    "30_mitica_personaje": 18000
};

// Referencias del DOM
const selectInicio = document.getElementById('select-inicio-cp');
const selectTipo = document.getElementById('select-tipo-ruleta');
const checkMaxear = document.getElementById('check-maxear');
const contenedorMaxeo = document.getElementById('contenedor-maxeo');
const contenedorResultado = document.getElementById('calc-codm-resultado');

function calcularRuleta() {
    const baseCP = selectInicio.value;
    const tipoItem = selectTipo.value;
    const quiereMaxear = checkMaxear.checked;

    // VALIDACIÓN DE BLOQUEO: Si el usuario no ha elegido ambas opciones, no mostramos nada
    if (!baseCP || !tipoItem) {
        contenedorMaxeo.classList.add('calc-codm__maxeo-box--oculto');
        checkMaxear.checked = false;
        contenedorResultado.innerHTML = `
            <p style="text-align: center; color: #9ca3af; font-style: italic; margin: 1rem 0;">
                Por favor, selecciona tu región y el tipo de ruleta arriba para ver el presupuesto detallado.
            </p>
        `;
        return;
    }

    // 1. Control de visibilidad del checkbox de Maxeo
    const esMitico = tipoItem.startsWith('mitica');
    if (esMitico) {
        contenedorMaxeo.classList.remove('calc-codm__maxeo-box--oculto');
    } else {
        contenedorMaxeo.classList.add('calc-codm__maxeo-box--oculto');
        checkMaxear.checked = false;
    }

    // 2. Cargar matriz de precios
    const llaveMatriz = `${baseCP}_${tipoItem}`;
    const listaPrecios = escalasRuletas[llaveMatriz];

    if (!listaPrecios) {
        contenedorResultado.innerHTML = `<p style="color:#f87171; text-align:center;">Error al procesar la tarifa seleccionada.</p>`;
        return;
    }

    // 3. Resolver operaciones matemáticas
    const costoBaseRuleta = listaPrecios.reduce((acumulador, actual) => acumulador + actual, 0);
    let adicionMaxeo = 0;

    if (esMitico && quiereMaxear) {
        adicionMaxeo = costosMaxeo[llaveMatriz] || 0;
    }

    const granTotal = costoBaseRuleta + adicionMaxeo;

    // 4. Generar tabla tiro a tiro
    let htmlFilas = '';
    let acumuladoPaso = 0;

    listaPrecios.forEach((costoTiro, index) => {
        acumuladoPaso += costoTiro;
        htmlFilas += `
            <tr>
                <td><strong>Giro ${index + 1}</strong></td>
                <td>${costoTiro.toLocaleString()} CP</td>
                <td class="${esMitico ? 'calc-codm__highlight--mitico' : 'calc-codm__highlight'}">${acumuladoPaso.toLocaleString()} CP</td>
            </tr>
        `;
    });

    // 5. Inyección en el HTML
    contenedorResultado.innerHTML = `
        <div class="calc-codm__total-box ${esMitico ? 'calc-codm__total-box--mitica' : ''}">
            <p class="calc-codm__total-titulo">${quiereMaxear ? 'Total Ruleta + Maxeo Completo' : 'Costo Total de la Ruleta'}</p>
            <h3 class="calc-codm__total-numero ${esMitico ? 'calc-codm__total-numero--mitico' : ''}">
                ${granTotal.toLocaleString()} CP
            </h3>
            ${obtenerNotaMaxeo(esMitico, quiereMaxear, adicionMaxeo, tipoItem)}
        </div>

        <table class="calc-codm__tabla">
            <thead>
                <tr>
                    <th>Nro. Giro</th>
                    <th>Costo del Giro</th>
                    <th>Total Acumulado</th>
                </tr>
            </thead>
            <tbody>
                ${htmlFilas}
            </tbody>
        </table>
    `;
}

function obtenerNotaMaxeo(esMitico, checked, valor, tipo) {
    if (!esMitico || !checked) return '';
    const componente = tipo.includes('personaje') ? 'Monedas de Miticismo' : 'Tarjetas de Miticismo';
    return `
        <div class="calc-codm__upgrade-info">
            Suma un estimado de <strong>+${valor.toLocaleString()} CP</strong> para conseguir las ${componente} requeridas para llevar el ítem a su etapa final (aspectos físicos, miras avanzadas y ejecuciones).
        </div>
    `;
}

// Event Listeners reactivos
selectInicio.addEventListener('change', calcularRuleta);
selectTipo.addEventListener('change', calcularRuleta);
checkMaxear.addEventListener('change', calcularRuleta);

// Disparo inicial automático al cargar el documento (Pintará la advertencia de selección primero)
document.addEventListener('DOMContentLoaded', calcularRuleta);