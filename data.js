// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 24–30 Mayo 2026",
  weekDates:     "24 – 30 de Mayo, 2026",
  generatedDate: "24 de Mayo, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 29", emoji:"☁️", desc:"Nublado",              max:30, min:22, rain:2  },
    { day:"Sáb 30", emoji:"🌧️", desc:"Lluvia ligera",        max:31, min:24, rain:8  },
    { day:"Dom 24", emoji:"☁️", desc:"Nublado",              max:31, min:23, rain:0  },
    { day:"Lun 25", emoji:"☁️", desc:"Nublado",              max:32, min:23, rain:0  }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 26 Abr–2 May", url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 3–9 May",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 10–16 May",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 17–23 May",    url:"https://guaderrama.github.io/eventos-los-cabos/" }
  ],

  /* ══════════════════════════════════════════════════════════════════
     SECCIÓN 1: EVENTOS ESPECIALES ESTA SEMANA
     Cosas únicas que no se repiten. Máximo 6-8.
     priority: 1=imperdible, 2=recomendado, 3=opcional
     reservation: true si necesita reserva
  ══════════════════════════════════════════════════════════════════ */
  specials: [
    {
      priority: 1,
      date: "Vie 29 y Sáb 30 · 5:00 PM – 10:00 PM",
      icon: "🔥",
      title: "Mezquite x Mar y Leña — Chef Takeover Germán Ghelfi",
      venue: "Mar y Leña, Waldorf Astoria Los Cabos Pedregal",
      mapsUrl: "https://maps.google.com/?q=Waldorf+Astoria+Los+Cabos+Pedregal",
      price: "$$$",
      reservation: true,
      why: "EL evento de la semana. Solo 2 noches: el Chef Ejecutivo del Conrad Punta de Mita (Germán Ghelfi) hace takeover en Mar y Leña con cocina de leña y mezquite. Intercambio culinario entre destinos — experiencia única e irrepetible en uno de los restaurantes top de Pedregal.",
      tags: [["especial","Chef Takeover"],["gastronomía","Fine Dining"],["lujo","Resort"]],
      url: "https://www.visitloscabos.travel/event/mezquite-x-mar-y-le%c3%b1a/4133/"
    },
    {
      priority: 1,
      date: "Domingo 24 (HOY) · 11:00 AM – 3:00 PM",
      icon: "🌸",
      title: "Sunday Bloom Brunch — Flower Harvest con Rosé Bar",
      venue: "Palmerio, Four Seasons Cabo Del Sol",
      mapsUrl: "https://maps.google.com/?q=Four+Seasons+Resort+Cabo+Del+Sol",
      price: "$$$",
      reservation: true,
      why: "Brunch insignia de temporada con cosecha floral y Rosé Bar dedicado. Estaciones en vivo: raw bar, parrilla Baja, pizzas al horno de leña, mimosas y spritz ilimitados, sala de postres del Chef Guillermo. Música en vivo y actividades para niños. $1,900 MXN p/p — el brunch dominical más completo del corredor.",
      tags: [["gastronomía","Brunch"],["especial","Temporada"],["lujo","Fine Dining"]],
      url: "https://www.visitloscabos.travel/event/sunday-bloom-brunch%3a-a-flower-harvest-celebration-with-ros%c3%a9/3881/"
    },
    {
      priority: 2,
      date: "Hasta el Lun 25",
      icon: "💐",
      title: "Últimos Días — Mes de las Madres en Hilton Los Cabos",
      venue: "Hilton Los Cabos Beach & Golf Resort",
      mapsUrl: "https://maps.google.com/?q=Hilton+Los+Cabos+Beach+Golf+Resort",
      price: "$$$",
      reservation: true,
      why: "ÚLTIMOS DÍAS de la celebración extendida del Día de las Madres en el Hilton — cierra el lunes 25. Si no han ido, esta semana es la última oportunidad: menús especiales, spa packages y experiencias temáticas. Coincide con Memorial Day weekend (USA).",
      tags: [["especial","Día de las Madres"],["lujo","Resort"]],
      url: "https://www.visitloscabos.travel/event/mes-de-las-madres/4093/"
    },
    {
      priority: 2,
      date: "Sábado 30 · 8:00 PM",
      icon: "🎤",
      title: "Own The Stage — Karaoke en vivo con banda",
      venue: "Corazón Beach Club, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Corazon+Beach+Club+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Sin cover. Plan diferente para cerrar el fin de semana: toma el micrófono y canta tus rolas favoritas respaldado por banda en vivo, frente al mar en Playa Médano. 2x1 en cocteles con Tequila Dobel toda la noche. Ambiente vibrante y muy local.",
      tags: [["música","Karaoke"],["especial","Live Band"],["free","Sin cover"]]
,
      url: "https://www.visitloscabos.travel/event/own-the-stage/4140/"
    },
    {
      priority: 2,
      date: "Miércoles 27 · 5:30 PM – 9:00 PM",
      icon: "✨",
      title: "México Mágico — Cena temática semanal",
      venue: "Agua, One&Only Palmilla",
      mapsUrl: "https://maps.google.com/?q=One+and+Only+Palmilla+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Cena temática mexicana frente al Mar de Cortés en One&Only Palmilla: cocina mexicana curada, música en vivo, colores vibrantes y mixología elevada. $1,556 MXN adultos / $982 niños. Plan entre semana para sentirse en otro mundo sin salir del corredor.",
      tags: [["gastronomía","Mexicana"],["lujo","Fine Dining"],["cultura","Temática"]],
      url: "https://www.visitloscabos.travel/event/m%c3%89xico-m%c3%81gico/3846/"
    },
    {
      priority: 2,
      date: "Jueves 28 · 5:00 PM – 9:00 PM",
      icon: "🖼️",
      title: "Art Walk — Caminata del Arte en San José",
      venue: "Distrito del Arte, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Art+District+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Continúa el Art Walk en su recta final de temporada (cierra en junio). Calle Obregón se cierra al tráfico, +12 galerías abren con refrigerios, música en vivo y los artistas presentes. Plan cultural gratis y muy de la zona.",
      tags: [["cultura","Art Walk"],["free","Gratis"]],
      url: "https://www.artcabo.com/san-jose-del-cabo-art-walk.html"
    }
  ],

  /* ══════════════════════════════════════════════════════════════════
     SECCIÓN 2: LUGARES FIJOS
     Cambia poco — revisión mensual aprox.
     price: "$" barato / "$$" moderado / "$$$" caro
     reservation: true/false
  ══════════════════════════════════════════════════════════════════ */
  venues: [
    {
      category: "🥂 Brunch",
      description: "Para empezar el fin de semana bien",
      color: "green",
      places: [
        { name:"Veleros Beach Club",  highlight:"Brunch By The Sea",        days:"Dom",      time:"10 AM", price:"$$$", stars:3, reservation:false, mapsUrl:"https://maps.google.com/?q=Veleros+Beach+Club+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/veleros-beach-club-los-cabos/event/brunch-by-the-sea-veleros-beach-club-los-cabos-sun", note:"La mejor vista al mar. Ambiente festivo." },
        { name:"Bagatelle Los Cabos", highlight:"Brunch in Wonderland",     days:"Dom",      time:"11 AM", price:"$$$", stars:3, reservation:true,  mapsUrl:"https://maps.google.com/?q=Bagatelle+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/bagatelle-los-cabos/event/brunch-in-wonderland-bagatelle-los-cabos-2025", note:"Show durante el brunch. El más animado." },
        { name:"Acre Restaurant",     highlight:"Sat & Sun Brunch",         days:"Sáb–Dom",  time:"10 AM", price:"$$",  stars:2, reservation:true,  mapsUrl:"https://maps.google.com/?q=Acre+Restaurant+Los+Cabos", url:"https://www.visitloscabos.travel/event/acre-saturday-and-sunday-brunch/3509/", note:"Ambiente orgánico y tranquilo. Muy buena comida." },
        { name:"Oystera",             highlight:"Brunch Weekends",          days:"Sáb–Dom",  time:"10 AM", price:"$$",  stars:2, reservation:false, mapsUrl:"https://maps.google.com/?q=Oystera+Los+Cabos", url:"https://www.visitloscabos.travel/event/brunch-weekends-at-oystera/2332/", note:"Especialidad en ostiones. Perfecto." }
      ]
    },
    {
      category: "🔥 Cena Show",
      description: "Cena con espectáculo — la experiencia Los Cabos",
      color: "coral",
      places: [
        { name:"Rosa Negra Los Cabos", highlight:"Latin Dinner & Fire Show", days:"Lun–Sáb", time:"5 PM",  price:"$$$", stars:3, reservation:true,  mapsUrl:"https://maps.google.com/?q=Rosa+Negra+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/rosa-negra-los-cabos/event/latin-dinner-rosa-negra-los-cabos-2025", note:"Fire show en vivo. El más espectacular." },
        { name:"Chambao Los Cabos",    highlight:"Dinner Grillhouse",        days:"Dom–Sáb", time:"5 PM",  price:"$$$", stars:3, reservation:true,  mapsUrl:"https://maps.google.com/?q=Chambao+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/chambao-los-cabos/event/dress-to-dine-dinner-grillhouse-chambao-los-cabos-2025-sun", note:"Parrilla + show. Más íntimo que Rosa Negra." },
        { name:"Bagatelle Los Cabos",  highlight:"Show Dinner",             days:"Todos",   time:"7 PM",  price:"$$$", stars:2, reservation:true,  mapsUrl:"https://maps.google.com/?q=Bagatelle+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/bagatelle-los-cabos/event/dinner-with-show-bagatelle-los-cabos", note:"Temático según el día. Vibrante y colorido." },
        { name:"Ilios Los Cabos",      highlight:"Fire & Dinner",           days:"Dom–Sáb", time:"6 PM",  price:"$$$", stars:2, reservation:true,  mapsUrl:"https://maps.google.com/?q=Ilios+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/ilios-restaurant-los-cabos/event/ilios-fire-and-dinner-ilios-los-cabos-sun", note:"Cocina griega con fire show. Diferente." }
      ]
    },
    {
      category: "🎸 Música en Vivo",
      description: "Jazz, pop y acústico — para una noche más tranquila",
      color: "blue",
      places: [
        { name:"Jazz on the Rocks",  highlight:"Jazz Live — todos los días", days:"Todos",   time:"Todo el día", price:"$$",  stars:3, reservation:false, mapsUrl:"https://maps.google.com/?q=Jazz+on+the+Rocks+San+Jose+del+Cabo", url:"https://www.visitloscabos.travel/event/jazz-live-concerts-every-day/751/", note:"El clásico de San José. Siempre buen jazz en vivo." },
        { name:"The Rooftop 360°",   highlight:"Boogie Nights / Wknd Vibes", days:"Jue–Sáb", time:"5 PM",       price:"$$",  stars:2, reservation:false, mapsUrl:"https://maps.google.com/?q=The+Rooftop+360+Los+Cabos", url:"https://www.visitloscabos.travel/event/boogie-nights/629/", note:"Vista panorámica. Ambiente más adulto y tranquilo." },
        { name:"Crania Los Cabos",   highlight:"DJ Sets & Eventos especiales",days:"Vie–Sáb", time:"9 PM",       price:"$$$", stars:2, reservation:false, mapsUrl:"https://maps.google.com/?q=Crania+Los+Cabos", url:"https://www.cabo.party/los-cabos-clubs/crania-los-cabos/", note:"El lugar con mejor curaduría musical de Los Cabos." }
      ]
    },
    {
      category: "🥬 Mercados & Mañanas",
      description: "Para empezar el día diferente — casi todos gratis",
      color: "green",
      places: [
        { name:"Palmilla Organic Market",  highlight:"Mercado artesanal",  days:"Viernes",  time:"9 AM–2 PM", price:"$",  stars:3, reservation:false, mapsUrl:"https://maps.google.com/?q=Shoppes+at+Palmilla+San+Jose+del+Cabo", url:"https://www.facebook.com/events/462765036085583/", note:"El mejor mercado de Los Cabos. Artesanías, comida, ambiente." },
        { name:"Xplora Organic Market",    highlight:"Mercado orgánico",   days:"Martes",   time:"8 AM–1 PM", price:"$",  stars:2, reservation:false, mapsUrl:"https://maps.google.com/?q=Xplora+Jardin+El+Tezal+Cabo", url:"https://www.facebook.com/xplorajardin", note:"Local y auténtico. Buenas opciones de comida fresca." },
        { name:"Mercado Orgánico Pedregal",highlight:"Mercado local",      days:"Sábados",  time:"8 AM–1 PM", price:"$",  stars:2, reservation:false, mapsUrl:"https://maps.google.com/?q=Pedregal+Cabo+San+Lucas", url:"https://www.facebook.com/events/967064718514726", note:"Cerca de Cabo San Lucas. Tranquilo y muy local." }
      ]
    }
  ]

}; // fin WEEKLY_DATA
