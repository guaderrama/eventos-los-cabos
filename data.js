// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 10–16 Mayo 2026",
  weekDates:     "10 – 16 de Mayo, 2026",
  generatedDate: "10 de Mayo, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 15", emoji:"☁️", desc:"Nublado",              max:35, min:28, rain:0 },
    { day:"Sáb 16", emoji:"☁️", desc:"Nublado",              max:35, min:24, rain:0 },
    { day:"Dom 10", emoji:"🌧️", desc:"Lluvia ligera",        max:34, min:23, rain:0 },
    { day:"Lun 11", emoji:"🌤️", desc:"Mayormente despejado", max:35, min:26, rain:2 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 12–18 Abr",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Abr",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 26 Abr–2 May", url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 3–9 May",      url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Domingo 10 · Todo el día",
      icon: "💐",
      title: "Día de las Madres — Brunchs y Cenas Especiales en Los Cabos",
      venue: "Restaurantes premium en todo Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Los+Cabos+restaurants",
      price: "$$$",
      reservation: true,
      why: "Es EL día — 10 de Mayo, Día de las Madres en México. Brunchs y cenas especiales en One&Only Palmilla, Hacienda Cocina, Mesa Madre (Tesoro Los Cabos), Sora at Waldorf Astoria, Bagatelle, Acre y Veleros Beach Club. Si todavía no reservaron, llamen ya — los buenos lugares se llenan rápido.",
      tags: [["especial","Día de las Madres"],["gastronomía","Fine Dining"]],
      url: "https://www.destinoloscabos.com/blog/food/opentables-mothers-day-restaurant-picks-in-los-cabos/"
    },
    {
      priority: 1,
      date: "Sábado 16 · 4:00 PM – 12:00 AM",
      icon: "🍺",
      title: "Cabo Beerfest 2026 — Primera Edición",
      venue: "Multiplaza Los Cabos (Carr. Transpeninsular)",
      mapsUrl: "https://maps.app.goo.gl/sLnwEaQ5MwibLFJK6",
      price: "$",
      reservation: false,
      why: "Festival inaugural de cerveza artesanal con marcas locales (Baja Brewing, Mr. Toro y más). Entrada GRATIS, ambiente festivo, comida y música en vivo de 4 PM a medianoche. Plan ideal para sábado — algo nuevo y diferente que vale la pena conocer.",
      tags: [["especial","Festival"],["gastronomía","Cerveza"],["free","Gratis"]],
      url: "https://turismo.loscabos.gob.mx/calendario-de-eventos/"
    },
    {
      priority: 2,
      date: "Hasta el 22 de mayo · 6:00 PM",
      icon: "🍢",
      title: "Semana de Cocina Balinesa en Restaurant EQUIS",
      venue: "Zadún Ritz-Carlton Reserve, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Zadun+Ritz+Carlton+Reserve+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Sigue activa la temporada limitada de cocina balinesa en EQUIS del Zadún Ritz-Carlton (hasta el 22 de mayo). Sabores auténticos del archipiélago indonesio en uno de los resorts top de la zona. Última semana fuerte para reservar.",
      tags: [["gastronomía","Internacional"],["lujo","Fine Dining"],["especial","Tiempo limitado"]],
      url: "https://www.visitloscabos.travel/event/one-week-only-bali-cuisine-at-equis/3925/"
    },
    {
      priority: 2,
      date: "Hasta el 25 de mayo",
      icon: "🌸",
      title: "Mes de las Madres — Hilton Los Cabos Beach & Golf Resort",
      venue: "Hilton Los Cabos Beach & Golf Resort",
      mapsUrl: "https://maps.google.com/?q=Hilton+Los+Cabos+Beach+Golf+Resort",
      price: "$$$",
      reservation: true,
      why: "El Hilton extendió la celebración del Día de las Madres todo el mes con menús especiales, spa packages y experiencias temáticas hasta el 25 de mayo. Si no alcanzaron a reservar el domingo 10, hay alternativas durante la semana.",
      tags: [["especial","Día de las Madres"],["lujo","Resort"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Martes 12 · 5:00 PM – 9:00 PM",
      icon: "🎨",
      title: "Sabores San José — Corredor Gastronómico (Martes Cultural)",
      venue: "Centro Histórico, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Plaza+Mijares+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "El centro histórico de San José se transforma en corredor gastronómico de 5 a 9 PM cada martes — productores locales, estaciones de degustación y presentaciones culturales. Plan económico y muy recomendado entre semana.",
      tags: [["gastronomía","Gastronómico"],["cultura","Cultural"],["free","Gratis"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 3,
      date: "Jueves 14 · 6:00 PM – 10:00 PM",
      icon: "🖼️",
      title: "Art Walk — Caminata del Arte en San José",
      venue: "Distrito del Arte, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Art+District+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "El Art Walk de los jueves abre las galerías del distrito del arte de San José hasta tarde — ambiente local, música en vivo, comida callejera y arte de calidad. Plan tranquilo y cultural para empezar el fin de semana.",
      tags: [["cultura","Art Walk"],["free","Gratis"]],
      url: "https://www.facebook.com/jardindelarteloscabos"
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
