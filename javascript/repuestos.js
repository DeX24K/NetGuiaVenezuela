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
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos para motos.",
            pagos: ["cashea"],
            detalle: "La bujía estándar para motores CG150. Cámbiala cada 5,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km. El 10W40 es ideal para climas tropicales." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas y tiendas de aceites.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Empire Keeway y grandes pasajes comerciales.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar. Los Horse son más reforzados para carga." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos Redondos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar para motos 150cc." 
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
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Owen", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Calzan en la mordaza estándar del Horse." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Empire Keeway y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 estándar. Compatible con todas las marcas." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Suzuki GN 125", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km para el mejor rendimiento." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
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
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Bera y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 estándar. Compatible con todas las marcas." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Suzuki GN 125", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la SBR falla en frío, el carburador es lo primero que debes revisar." 
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
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Suzuki GN 125 / Toro", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Cámbialo cada 3,000 km para mantener el motor limpio." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km. El 10W40 es ideal para climas tropicales." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas y tiendas de aceites.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables y guayas para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro o no desacopla bien, es hora de cambiar el cable." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Toro y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar. Los Horse son más reforzados para carga." 
        },
        { 
            repuesto: "Farola Delantera (Faro LED)", 
            marca: "Universal 7 pulgadas", 
            precio: "$18 - $28", 
            donde: "Tiendas de accesorios LED y iluminación.",
            pagos: ["cashea"],
            detalle: "Calza con soportes estándar. Mejora la visibilidad nocturna un 300%." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos Redondos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar. Asegúrate de que tengan buen ángulo de visión." 
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
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Owen", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Compatible con las pastillas de la GN 125." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos para motos.",
            pagos: ["cashea"],
            detalle: "La bujía estándar para motores CG150. Cámbiala cada 5,000 km." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km para mantener el motor protegido." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada o el cable tiene fricción, reemplázalo." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si el Tucán falla en frío o gasta mucha gasolina, el carburador es el culpable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar para motos 150cc." 
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
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Bera BR200 (originales)", 
            precio: "$5 - $8", 
            donde: "Concesionarios Bera y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "La BR200 tiene freno delantero a disco. Asegúrate de pedir la medida correcta." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR8EH-9", 
            precio: "$2 - $4", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "La bujía estándar para scooters GY6. Cámbiala cada 5,000 km." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Bera BR200 (originales)", 
            precio: "$4 - $7", 
            donde: "Concesionarios Bera y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "El filtro de scooter es tipo panel. Cámbialo cada 5,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Los scooters necesitan cambio de aceite cada 1,500-2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal Scooter GY6", 
            precio: "$3 - $5", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite para mantener el motor limpio." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Bera BR200 (originales)", 
            precio: "$25 - $35", 
            donde: "Concesionarios Bera oficiales.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida. Los originales Bera tienen buena durabilidad." 
        },
        { 
            repuesto: "Farola Delantera (Faro LED)", 
            marca: "Universal Scooter", 
            precio: "$15 - $25", 
            donde: "Tiendas de accesorios LED.",
            pagos: ["cashea"],
            detalle: "Mejora la visibilidad nocturna. Calza con soportes estándar." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Scooter", 
            precio: "$5 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales para scooters con rosca estándar." 
        }
    ],
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
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Empire Keeway y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 estándar. Compatible con todas las marcas." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Owen", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Calzan en la mordaza de la Express." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Empire Express (originales)", 
            precio: "$2 - $4", 
            donde: "Concesionarios Empire Keeway.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km para el mejor rendimiento." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la Express falla en frío, el carburador es lo primero que debes revisar." 
        }
    ],
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
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Empire Horse / Owen", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Compatible con las pastillas de la mayoría de motos 150cc." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Toro y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    yamaha_ybr: [
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG150 (mismo diámetro)", 
            precio: "$12 - $18", 
            donde: "Repuesteras multimarcas y talleres especializados en Yamaha (Quinta Crespo / Bello Monte).",
            pagos: ["cashea", "krece"],
            detalle: "El motor YBR comparte medidas con el CG150. Usa pistón de 57mm para mantener la compresión original." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Empire Owen", 
            precio: "$4 - $7", 
            donde: "Agencias Yamaha y tiendas multimarcas de confianza.",
            pagos: ["cashea"],
            detalle: "Calzan en la mordaza estándar del YBR. Limpia el disco con desengrasante antes de instalar." 
        },
        { 
            repuesto: "Kit de Cilindro 150cc", 
            marca: "Universal CG150 (Yamaha/Axis)", 
            precio: "$35 - $50", 
            donde: "Distribuidoras oficiales Yamaha y grandes repuesteras del eje central.",
            pagos: ["cashea", "krece"],
            detalle: "Mismo diámetro de 57mm. Incluye pistón, aros y clip. Devuelve la potencia de fábrica." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal Yamaha 150cc", 
            precio: "$3 - $5", 
            donde: "Cualquier tienda de repuestos de motos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Cámbialo cada 2,000 km. Usar filtro de buena marca evita desgaste prematuro del motor." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$25 - $35", 
            donde: "Concesionarios Yamaha y tiendas de amortiguadores especializados.",
            pagos: ["cashea", "krece"],
            detalle: "Los de Horse son más rígidos, ideales para carga. Los Bera son más suaves para ciudad." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428 (Horse/DID)", 
            precio: "$14 - $20", 
            donde: "Tiendas oficiales Yamaha y mayoristas de cadenas.",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 estándar. Cadena DID o RK aguantan más que las genéricas." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR8EH-9", 
            precio: "$2 - $4", 
            donde: "Repuesteras eléctricas y tiendas de motos.",
            pagos: ["cashea"],
            detalle: "La CR8EH-9 es la bujía estándar del YBR. Cámbiala cada 5,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km para mantener el motor protegido." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Yamaha YBR (originales)", 
            precio: "$3 - $6", 
            donde: "Concesionarios Yamaha y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "El filtro del YBR es tipo panel. Cámbialo cada 5,000 km." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal YBR", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro o no desacopla bien, reemplaza el cable." 
        }
    ],
    honda_cg: [
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG125/150", 
            precio: "$10 - $16", 
            donde: "Repuesteras Honda y talleres multimarcas en todas las ciudades principales.",
            pagos: ["cashea"],
            detalle: "El Honda CG es la moto más común de Venezuela. Los repuestos universales CG le sirven perfecto." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428 (Horse/Did)", 
            precio: "$14 - $20", 
            donde: "Tiendas oficiales Honda y mayoristas de cadenas (Av. Lisandro Alvarado).",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 es la estándar. Cadena DID o RK aguantan más que las genéricas." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos (Bello Monte / Av. La Limpia).",
            pagos: ["cashea"],
            detalle: "Si tu Honda CG tiene tirones o no arranca bien, el carburador es casi siempre el culpable." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR8EH-9", 
            precio: "$2 - $4", 
            donde: "Repuesteras eléctricas y tiendas de motos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "La CR8EH-9 es la bujía estándar del CG. Cámbiala cada 5,000 km para mantener el consumo bajo." 
        },
        { 
            repuesto: "Switch de Encendido", 
            marca: "Universal Honda CG125/150", 
            precio: "$8 - $14", 
            donde: "Repuesteras eléctricas especializadas en motos.",
            pagos: ["cashea"],
            detalle: "Incluye llave, candado y cables. Si tu llave no gira o el interruptor falla, es hora de cambiarlo." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Calzan en la mordaza del Honda CG." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Honda y grandes pasajes comerciales.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar. Los Horse son más duraderos." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Honda CG (originales)", 
            precio: "$3 - $5", 
            donde: "Concesionarios Honda y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "El filtro del CG es tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km para el mejor rendimiento." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite cada 2,000 km." 
        }
    ],
    suzuki_gn: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428 (Horse/DID)", 
            precio: "$14 - $20", 
            donde: "Repuesteras multimarcas y concesionarios Suzuki.",
            pagos: ["cashea", "krece"],
            detalle: "La Suzuki GN 125 usa relación 428 igual que las motos chinas. Cadena DID recomendada." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 (originales)", 
            precio: "$5 - $8", 
            donde: "Agencias oficiales Suzuki y tiendas multimarcas de confianza.",
            pagos: ["cashea"],
            detalle: "Las originales Suzuki frenan mejor que las genéricas. Si no consigues, las de Owen calzan también." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Tiendas oficiales Suzuki y grandes pasajes comerciales.",
            pagos: ["cashea", "krece"],
            detalle: "La GN tiene buena caña trasera. Los amortiguadores aftermarket le dan más confort en carretera." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Suzuki GN 125 (originales)", 
            precio: "$3 - $5", 
            donde: "Concesionarios Suzuki y repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "El filtro de GN es tipo espuma. Límpialo cada 3,000 km y reemplázalo cada 10,000 km." 
        },
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal GN125", 
            precio: "$10 - $16", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "El motor GN es similar al CG. Los repuestos universales le sirven." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para la GN 125." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal GN125", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal GN125", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal GN125", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la GN falla en frío o gasta mucha gasolina, revisa el carburador." 
        }
    ],
    bera_storm: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$15 - $20", 
            donde: "Concesionarios Bera y tiendas multimarcas en avenidas principales.",
            pagos: ["cashea", "krece"],
            detalle: "La Storm usa la misma relación estándar. Compatible con todas las marcas 428." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Empire Owen / Yamaha YBR", 
            precio: "$5 - $8", 
            donde: "Tiendas oficiales Bera y repuesteras de frenos especializados.",
            pagos: ["cashea"],
            detalle: "La mordaza de la Storm es igual a la del YBR. Calzan sin problemas." 
        },
        { 
            repuesto: "Kit de Cilindro 150cc", 
            marca: "Universal CG150 (Bera/Toro)", 
            precio: "$35 - $45", 
            donde: "Distribuidoras Bera oficiales y talleres grandes.",
            pagos: ["cashea", "krece"],
            detalle: "Mismo motor CG150. El kit completo incluye pistón, aros, cilindro y empaques." 
        },
        { 
            repuesto: "Faro LED Delantero", 
            marca: "Universal 7 pulgadas", 
            precio: "$20 - $30", 
            donde: "Tiendas de accesorios LED y repuestos de iluminación.",
            pagos: ["cashea"],
            detalle: "Calza con soportes estándar. Mejora la visibilidad nocturna un 300%." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Bera y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
        }
    ],
    keeway_rkr: [
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG150", 
            precio: "$12 - $18", 
            donde: "Repuesteras Keeway y tiendas multimarcas (Av. Constitución Maracay).",
            pagos: ["cashea"],
            detalle: "El RKR150 usa motor CG. Los repuestos universales le funcionan perfecto." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse 428", 
            precio: "$15 - $20", 
            donde: "Concesionarios Keeway y mayoristas de cadenas.",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 estándar. Cadena de 106 eslabones." 
        },
        { 
            repuesto: "Pastillas de Freno", 
            marca: "Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Tiendas multimarcas a nivel nacional.",
            pagos: ["cashea"],
            detalle: "La mordaza del RKR es compatible con las pastillas de la GN 125." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Keeway y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la RKR falla en frío, el carburador es lo primero que debes revisar." 
        }
    ],
    yamaha_fz: [
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal 150cc", 
            precio: "$14 - $20", 
            donde: "Repuesteras Yamaha y talleres especializados.",
            pagos: ["cashea", "krece"],
            detalle: "El FZ150 tiene motor algo diferente al CG. Asegúrate de indicar modelo exacto al comprar." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Yamaha FZ150 (originales)", 
            precio: "$6 - $10", 
            donde: "Agencias Yamaha y tiendas de frenos especializados.",
            pagos: ["cashea"],
            detalle: "Las originales Yamaha frenan excelente. Las genéricas también sirven pero duran menos." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Yamaha FZ150 (originales) / Bera", 
            precio: "$28 - $40", 
            donde: "Concesionarios Yamaha y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "El FZ usa amortiguadores más largos que el CG. No uses los de otra moto sin verificar medida." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Yamaha 150cc", 
            precio: "$3 - $6", 
            donde: "Cualquier tienda de repuestos de motos.",
            pagos: ["cashea"],
            detalle: "Cámbialo cada 2,000 km. Usa siempre filtro de marca para proteger el motor." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 520", 
            precio: "$16 - $22", 
            donde: "Tiendas de repuestos para motos deportivas.",
            pagos: ["cashea", "krece"],
            detalle: "La FZ usa cadena 520, más gruesa que la 428 de las 150cc estándar." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR8EH-9", 
            precio: "$2 - $4", 
            donde: "Repuesteras eléctricas.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para la FZ150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Yamaha FZ150 (originales)", 
            precio: "$4 - $7", 
            donde: "Concesionarios Yamaha.",
            pagos: ["cashea"],
            detalle: "El filtro de la FZ es tipo panel. Cámbialo cada 5,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal FZ150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$5 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    empire_gt: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Empire Keeway y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La GT comparte repuestos con el Owen. Misma relación, misma compatible." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Owen", 
            precio: "$4 - $7", 
            donde: "Agencias Empire y repuesteras de frenos.",
            pagos: ["cashea"],
            detalle: "Las pastillas GN calzan perfecto en la mordaza de la GT." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la GT falla en frío o gasta mucha gasolina, el carburador es lo primero que debes revisar." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Empire y grandes pasajes comerciales.",
            pagos: ["cashea", "krece"],
            detalle: "Los Horse son más duraderos para uso intensivo de delivery." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Suzuki GN 125", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    toro_drak: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$15 - $20", 
            donde: "Tiendas oficiales Toro y distribuidores multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La Drak usa la misma relación estándar que todas las 150cc." 
        },
        { 
            repuesto: "Pastillas de Freno", 
            marca: "Empire Horse / Owen", 
            precio: "$4 - $7", 
            donde: "Concesionarios Toro y zonas comerciales.",
            pagos: ["cashea"],
            detalle: "Compatible con las pastillas de la mayoría de motos 150cc chinas." 
        },
        { 
            repuesto: "Faro LED Delantero", 
            marca: "Universal 7 pulgadas", 
            precio: "$20 - $30", 
            donde: "Tiendas de accesorios LED.",
            pagos: ["cashea"],
            detalle: "La Drak tiene soporte estándar para faros redondos de 7 pulgadas." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Toro y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    md_arizona: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Tiendas MD y repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "La Arizona comparte la misma cadena 428 que la mayoría de motos venezolanas." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos y tiendas de motos.",
            pagos: ["cashea"],
            detalle: "Las pastillas GN son las más fáciles de conseguir y calzan en la Arizona." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Toro", 
            precio: "$22 - $30", 
            donde: "Locales de repuestos generales en zonas moteras.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar. Los Horse son más reforzados para carga." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la Arizona falla en frío, el carburador es lo primero que debes revisar." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    honda_navi: [
        { 
            repuesto: "Correa de Transmisión", 
            marca: "Gates PowerLink (GY6 110cc)", 
            precio: "$10 - $15", 
            donde: "Tiendas especializadas en scooters y motos automáticas.",
            pagos: ["cashea"],
            detalle: "La Navi usa transmisión CVT como los scooters. La correa Gates dura más que las genéricas." 
        },
        { 
            repuesto: "Dados de Variador (Rollers)", 
            marca: "Universal GY6 110cc", 
            precio: "$5 - $8", 
            donde: "Talleres especializados en motos automáticas.",
            pagos: ["cashea"],
            detalle: "Usa dados de 7-9 gramos para mantener el balance entre salida y velocidad final." 
        },
        { 
            repuesto: "Pastillas de Freno", 
            marca: "Honda Navi (originales)", 
            precio: "$5 - $8", 
            donde: "Agencias Honda y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "La Navi tiene freno delantero a disco y trasero a tambor. Asegúrate de pedir la medida correcta." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR7HSA", 
            precio: "$2 - $4", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para la Navi 110cc." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Honda Navi (originales)", 
            precio: "$3 - $5", 
            donde: "Concesionarios Honda.",
            pagos: ["cashea"],
            detalle: "El filtro de la Navi es tipo panel. Cámbialo cada 5,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W30", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$5 - $8", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "La Navi usa 10W30. Cámbialo cada 1,500-2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal GY6 110cc", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Honda Navi (originales)", 
            precio: "$20 - $30", 
            donde: "Concesionarios Honda.",
            pagos: ["cashea"],
            detalle: "Misma medida. Los originales Honda tienen buena durabilidad." 
        },
        { 
            repuesto: "Farola Delantera (Faro LED)", 
            marca: "Universal Scooter", 
            precio: "$15 - $25", 
            donde: "Tiendas de accesorios LED.",
            pagos: ["cashea"],
            detalle: "Mejora la visibilidad nocturna de la Navi." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Scooter", 
            precio: "$4 - $7", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales para scooters con rosca estándar." 
        }
    ],
    // MOTOPOPULARES EN VENEZUELA 2026
    empire_xpress: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Empire Keeway y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La Xpress es la moto más vendida de EK. Usa la misma relación 428 estándar que todas las 150cc." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Owen", 
            precio: "$4 - $7", 
            donde: "Agencias Empire y repuesteras de frenos.",
            pagos: ["cashea"],
            detalle: "Las pastillas GN son las más fáciles de conseguir y calzan perfecto en la Xpress." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Empire Xpress 150 (originales)", 
            precio: "$3 - $5", 
            donde: "Concesionarios Empire Keeway a nivel nacional.",
            pagos: ["cashea"],
            detalle: "El filtro de la Xpress es tipo espuma. Límpialo cada 3,000 km para mantener el rendimiento." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Tiendas oficiales EK y grandes pasajes comerciales.",
            pagos: ["cashea", "krece"],
            detalle: "Los Horse son más duraderos para uso intensivo. Los Bera son más suaves para ciudad." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la Xpress falla en frío, el carburador es lo primero que debes revisar." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    empire_outlook: [
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG150", 
            precio: "$12 - $18", 
            donde: "Repuesteras Empire y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "La Outlook 150 usa motor CG. Los repuestos universales le funcionan perfecto." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse 428", 
            precio: "$14 - $20", 
            donde: "Concesionarios Empire Keeway.",
            pagos: ["cashea", "krece"],
            detalle: "Relación 428 estándar. Cadena de 108 eslabones." 
        },
        { 
            repuesto: "Pastillas de Freno", 
            marca: "Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Tiendas multimarcas a nivel nacional.",
            pagos: ["cashea"],
            detalle: "La mordaza de la Outlook es compatible con las pastillas de la GN 125." 
        },
        { 
            repuesto: "Farola Delantera (Faro LED)", 
            marca: "Universal 7 pulgadas", 
            precio: "$18 - $28", 
            donde: "Tiendas de accesorios LED.",
            pagos: ["cashea"],
            detalle: "La Outlook tiene soporte estándar para faros redondos de 7 pulgadas." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Empire y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
        }
    ],
    empire_thunder: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Empire Keeway y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La Thunder comparte la misma relación estándar que todas las 150cc de EK." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Owen", 
            precio: "$4 - $7", 
            donde: "Agencias Empire y repuesteras de frenos.",
            pagos: ["cashea"],
            detalle: "Calzan en la mordaza estándar de la Thunder." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la Thunder falla en frío, el carburador es lo primero que debes revisar." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Empire y tiendas de amortiguadores.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    bera_br150: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Empire Horse (Relación 428)", 
            precio: "$14 - $20", 
            donde: "Concesionarios Bera y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La BR150 usa la misma relación estándar que todas las motos 150cc." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Empire Owen / Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Tiendas oficiales Bera y repuesteras.",
            pagos: ["cashea"],
            detalle: "La mordaza de la BR150 es igual a la del YBR. Calzan sin problemas." 
        },
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG150", 
            precio: "$12 - $18", 
            donde: "Repuesteras multimarcas y talleres especializados.",
            pagos: ["cashea"],
            detalle: "El motor CG150 es el mismo. Usa pistón de 57mm para mantener la compresión." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Bera y grandes pasajes comerciales.",
            pagos: ["cashea", "krece"],
            detalle: "Los Horse son más reforzados para carga. Los Bera más suaves." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la BR150 falla en frío, el carburador es lo primero que debes revisar." 
        }
    ],
    bera_brz: [
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Bera BRZ 250 (originales)", 
            precio: "$6 - $10", 
            donde: "Concesionarios Bera oficiales.",
            pagos: ["cashea", "krece"],
            detalle: "La BRZ tiene freno delantero a disco doble. Asegúrate de pedir la medida exacta." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 520 (más grueso)", 
            precio: "$18 - $25", 
            donde: "Tiendas especializadas en motos de mayor cilindrada.",
            pagos: ["cashea", "krece"],
            detalle: "La BRZ usa cadena 520, más gruesa que la 428 de las 150cc. No uses las de 150." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Bera BRZ 250 (originales)", 
            precio: "$4 - $6", 
            donde: "Concesionarios Bera y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo cada 2,500 km. El motor 250cc es más exigente con la lubricación." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR8EH-9", 
            precio: "$2 - $4", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores 250cc." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Bera BRZ 250 (originales)", 
            precio: "$4 - $7", 
            donde: "Concesionarios Bera.",
            pagos: ["cashea"],
            detalle: "El filtro de la BRZ es tipo panel. Cámbialo cada 5,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Bera BRZ 250 (originales)", 
            precio: "$30 - $45", 
            donde: "Concesionarios Bera oficiales.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida. Los originales Bera tienen buena durabilidad." 
        },
        { 
            repuesto: "Farola Delantera (Faro LED)", 
            marca: "Universal 7 pulgadas", 
            precio: "$20 - $30", 
            donde: "Tiendas de accesorios LED.",
            pagos: ["cashea"],
            detalle: "Mejora la visibilidad nocturna. Calza con soportes estándar." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal BRZ250", 
            precio: "$4 - $6", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$5 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    tvs_apache: [
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "TVS Apache RTR 200 (originales)", 
            precio: "$6 - $10", 
            donde: "Concesionarios TVS oficiales.",
            pagos: ["cashea", "krece"],
            detalle: "La Apache tiene freno delantero a disco con ABS. Usa pastillas originales o de marca reconocida." 
        },
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 520", 
            precio: "$16 - $22", 
            donde: "Tiendas de repuestos para motos deportivas.",
            pagos: ["cashea"],
            detalle: "La Apache 200 usa cadena 520. Cadena DID o RK son las mejores opciones." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "TVS Apache (originales)", 
            precio: "$4 - $7", 
            donde: "Concesionarios TVS y tiendas multimarcas.",
            pagos: ["cashea"],
            detalle: "El filtro de la Apache es tipo panel. Cámbialo cada 5,000 km." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "TVS Apache (originales)", 
            precio: "$30 - $45", 
            donde: "Concesionarios TVS oficiales.",
            pagos: ["cashea", "krece"],
            detalle: "La Apache usa monoshock trasero. No uses amortiguadores de otras motos sin verificar medida." 
        },
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal 200cc", 
            precio: "$15 - $22", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "El motor de la Apache es diferente al CG. Asegúrate de indicar modelo exacto." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK CR8EH-9", 
            precio: "$2 - $4", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para la Apache 200." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal Apache 200", 
            precio: "$3 - $5", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Embrague", 
            marca: "Universal Apache 200", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si el embrague se siente duro, reemplaza el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "TVS Apache (originales)", 
            precio: "$8 - $12", 
            donde: "Concesionarios TVS.",
            pagos: ["cashea"],
            detalle: "Los originales TVS tienen mejor ángulo de visión que los universales." 
        }
    ],
    tvs_hlx: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428", 
            precio: "$14 - $20", 
            donde: "Tiendas multimarcas y concesionarios TVS.",
            pagos: ["cashea", "krece"],
            detalle: "La HLX 150 usa relación 428 estándar. Compatible con todas las marcas." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / TVS HLX", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Las pastillas GN calzan en la HLX. Son las más fáciles de conseguir." 
        },
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG150", 
            precio: "$12 - $18", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "La HLX 150 usa motor similar al CG. Los repuestos universales le sirven." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Toro", 
            precio: "$22 - $30", 
            donde: "Tiendas de repuestos para motos.",
            pagos: ["cashea"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores 150cc." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "TVS HLX (originales)", 
            precio: "$3 - $5", 
            donde: "Concesionarios TVS.",
            pagos: ["cashea"],
            detalle: "El filtro es tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la HLX falla en frío, el carburador es lo primero que debes revisar." 
        }
    ],
   italika_ft: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428", 
            precio: "$14 - $20", 
            donde: "Tiendas Italika y repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "La FT150 es la moto más popular de Italika. Usa relación 428 estándar." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Italika FT", 
            precio: "$4 - $7", 
            donde: "Tiendas Italika y repuesteras de frenos.",
            pagos: ["cashea"],
            detalle: "Las pastillas GN son compatibles con la FT150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Italika FT150 (originales)", 
            precio: "$3 - $5", 
            donde: "Tiendas Italika oficiales.",
            pagos: ["cashea"],
            detalle: "El filtro es tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Toro", 
            precio: "$22 - $30", 
            donde: "Tiendas de accesorios y repuestos para motos.",
            pagos: ["cashea"],
            detalle: "Los amortiguadores universales calzan si son los mismos ojos de paso." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la FT falla en frío, el carburador es lo primero que debes revisar." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    italika_dm: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428", 
            precio: "$14 - $20", 
            donde: "Tiendas Italika y repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "La DM150 usa la misma relación 428 que la FT." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125", 
            precio: "$4 - $7", 
            donde: "Repuesteras de frenos a nivel nacional.",
            pagos: ["cashea"],
            detalle: "Compatible con las pastillas de la GN 125." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la DM falla en frío o gasta mucha gasolina, revisa el carburador." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Toro", 
            precio: "$22 - $30", 
            donde: "Tiendas de repuestos para motos.",
            pagos: ["cashea"],
            detalle: "Misma medida estándar." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Espejos Retrovisores", 
            marca: "Universal Motos", 
            precio: "$4 - $8", 
            donde: "Tiendas de accesorios para motos.",
            pagos: ["cashea"],
            detalle: "Universales con rosca estándar." 
        }
    ],
    keeway_rk: [
        { 
            repuesto: "Kit de Arrastre (Cadena/Piñón)", 
            marca: "Universal 428", 
            precio: "$14 - $20", 
            donde: "Concesionarios Keeway y tiendas multimarcas.",
            pagos: ["cashea", "krece"],
            detalle: "La RK200 usa relación 428 estándar. Compatible con todas las marcas." 
        },
        { 
            repuesto: "Pastillas de Freno Delanteras", 
            marca: "Suzuki GN 125 / Keeway RK", 
            precio: "$4 - $7", 
            donde: "Tiendas Keeway y repuesteras de frenos.",
            pagos: ["cashea"],
            detalle: "Las pastillas GN calzan en la mordaza de la RK." 
        },
        { 
            repuesto: "Pistón con Aros", 
            marca: "Universal CG150", 
            precio: "$12 - $18", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "La RK200 usa motor CG. Los repuestos universales le funcionan perfecto." 
        },
        { 
            repuesto: "Amortiguadores Traseros", 
            marca: "Empire Horse / Bera SBR", 
            precio: "$24 - $32", 
            donde: "Concesionarios Keeway y grandes pasajes.",
            pagos: ["cashea", "krece"],
            detalle: "Misma medida estándar. Los Horse son más reforzados." 
        },
        { 
            repuesto: "Bujía de Encendido", 
            marca: "NGK D8EA", 
            precio: "$2 - $3", 
            donde: "Tiendas de repuestos eléctricos.",
            pagos: ["cashea"],
            detalle: "Bujía estándar para motores CG150." 
        },
        { 
            repuesto: "Filtro de Aire", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Tipo espuma. Límpialo cada 3,000 km." 
        },
        { 
            repuesto: "Aceite de Motor 10W40", 
            marca: "Motul 5100 / Repsol 4T", 
            precio: "$6 - $10", 
            donde: "Tiendas de aceites y lubricantes.",
            pagos: ["cashea"],
            detalle: "Cambia el aceite cada 2,000 km." 
        },
        { 
            repuesto: "Filtro de Aceite", 
            marca: "Universal CG150", 
            precio: "$2 - $4", 
            donde: "Repuesteras multimarcas.",
            pagos: ["cashea"],
            detalle: "Cámbialo junto con el aceite." 
        },
        { 
            repuesto: "Cable de Acelerador", 
            marca: "Universal CG150", 
            precio: "$3 - $5", 
            donde: "Tiendas de cables para motos.",
            pagos: ["cashea"],
            detalle: "Si la aceleración se siente pesada, cambia el cable." 
        },
        { 
            repuesto: "Carburador PZ27", 
            marca: "Universal CG150", 
            precio: "$18 - $25", 
            donde: "Zonas comerciales de repuestos.",
            pagos: ["cashea"],
            detalle: "Si la RK falla en frío, el carburador es lo primero que debes revisar." 
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