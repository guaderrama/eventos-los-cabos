// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 12–18 Jul 2026",
  weekDates:     "12 – 18 de Julio, 2026",
  generatedDate: "12 de Julio, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 17", emoji:"⛈️", desc:"Tormentas aisladas",     max:31, min:26, rain:45 },
    { day:"Sáb 18", emoji:"⛈️", desc:"Tormentas aisladas",     max:33, min:25, rain:69 },
    { day:"Dom 12", emoji:"☀️", desc:"Despejado",              max:34, min:25, rain:4 },
    { day:"Lun 13", emoji:"☁️", desc:"Nublado",                max:35, min:27, rain:2 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 5–11 Jul",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 7–13 Jun",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 31 May–6 Jun",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 24–30 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Jue 16 – Dom 19 · Todo el día",
      icon: "💃",
      title: "Al Son de Cabo Festival 2026 — 3ª edición (salsa, bachata y casino)",
      venue: "Varias sedes, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Cabo+San+Lucas+Marina",
      price: "$$",
      reservation: true,
      why: "El festival de baile más grande de la región: talleres con instructores invitados, challenge, pool party, beach party, catamarán y concierto de cierre. Arranca jueves con 'Noche Mundialista' (camiseta de tu equipo). Es LA cosa distinta de esta semana — si van a hacer una sola salida, que sea esta.",
      tags: [["especial","Festival"],["música","Baile"]],
      url: "https://www.instagram.com/alsondecabobcs/"
    },
    {
      priority: 1,
      date: "Mar 14 y Mié 15 · Tarde-noche",
      icon: "⚽",
      title: "Mundial 2026 — Semifinales: Francia vs España y Argentina vs Inglaterra",
      venue: "Palmilla Football Lounge, One&Only Palmilla / bares deportivos de Los Cabos",
      mapsUrl: "https://maps.google.com/?q=One%26Only+Palmilla+San+Jose+del+Cabo",
      price: "$$",
      reservation: true,
      why: "Las dos semifinales del Mundial caen entre semana: Francia–España el martes en Dallas y Argentina–Inglaterra el miércoles en Atlanta. Toda la ciudad va a estar viéndolo; reserven mesa con anticipación porque los lounges se llenan.",
      tags: [["deporte","Mundial 2026"],["especial","Cita única"]],
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums"
    },
    {
      priority: 2,
      date: "Sábado 18 · Tarde",
      icon: "🥉",
      title: "Mundial 2026 — Partido por el tercer lugar",
      venue: "Bares y lounges deportivos, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=sports+bar+Cabo+San+Lucas",
      price: "$$",
      reservation: false,
      why: "El aperitivo antes de la Final del domingo 19. Buen pretexto para un plan relajado de sábado por la tarde con cerveza y pantalla grande.",
      tags: [["deporte","Mundial 2026"]],
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums"
    },
    {
      priority: 2,
      date: "Sáb 18 – Dom 19 · 5:00 PM",
      icon: "🌵",
      title: "Fiestas de la Pitahaya — Miraflores",
      venue: "Miraflores, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Miraflores+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "Fiesta de pueblo de verdad: presentaciones artísticas, comida y la pitahaya de temporada. A ~45 min de San José. El plan más auténtico y barato de la semana — nada turístico.",
      tags: [["cultura","Tradición"],["especial","Feria"]],
      url: "https://turismo.loscabos.gob.mx/calendario-de-eventos/"
    },
    {
      priority: 2,
      date: "Sábado 18 · 6:00 y 8:00 PM (doble función)",
      icon: "🎭",
      title: "\"Mamá Cool\" — obra de teatro",
      venue: "Teatro Prof. Alfredo Green González, Centro, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Teatro+Alfredo+Green+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Teatro local con doble función en el centro de San José. Plan corto (2 h) y accesible, ideal si prefieren algo tranquilo antes o después de cenar en la zona.",
      tags: [["cultura","Teatro"]],
      url: "https://www.facebook.com/institutomunicipaldeculturaylasartesdeloscabos"
    },
    {
      priority: 3,
      date: "Todo el mes · Julio",
      icon: "🎾",
      title: "Los Cabos Tennis Open — 10º aniversario (arranca el 25 de julio)",
      venue: "Cabo Sports Complex, Cabo Real, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Cabo+Sports+Complex+San+Jose+del+Cabo",
      price: "$$",
      reservation: true,
      why: "No es de esta semana, pero los boletos de la edición aniversario se agotan. Si les interesa, este es el momento de comprarlos.",
      tags: [["deporte","ATP"],["especial","Comprar con tiempo"]],
      url: "https://loscabostennisopen.com/"
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
