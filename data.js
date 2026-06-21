// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 21–27 Jun 2026",
  weekDates:     "21 – 27 de Junio, 2026",
  generatedDate: "21 de Junio, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 26", emoji:"🌤️", desc:"Mayormente despejado", max:33, min:25, rain:2 },
    { day:"Sáb 27", emoji:"☀️", desc:"Despejado",            max:35, min:26, rain:2 },
    { day:"Dom 21", emoji:"☁️", desc:"Nublado",              max:33, min:25, rain:16 },
    { day:"Lun 22", emoji:"☁️", desc:"Nublado",              max:31, min:24, rain:2 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 7–13 Jun",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 31 May–6 Jun",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 24–30 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 17–23 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Miércoles 24 · México juega",
      icon: "⚽",
      title: "Mundial 2026 — México cierra fase de grupos (Watch Party)",
      venue: "Palmilla Football Lounge, One&Only Palmilla",
      mapsUrl: "https://maps.google.com/?q=One+and+Only+Palmilla+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Semana decisiva del Mundial: el miércoles México juega su último partido de fase de grupos en el Estadio Azteca y todo se define. El Palmilla Football Lounge (One&Only) transmite cada partido en pantalla grande de 9 AM a 10 PM, con ambiente de celebración frente al mar. Siendo México país anfitrión, es el plan del verano — reserva con anticipación.",
      tags: [["especial","Mundial 2026"],["deporte","Fútbol"]],
      url: "https://www.visitloscabos.travel/event/palmilla-football-lounge/4144/"
    },
    {
      priority: 1,
      date: "Sábado 27 · 9:00 PM",
      icon: "🎧",
      title: "Darshan Jesrani en Crania — Noche de House & Disco",
      venue: "Crania Cabo (Cate & Air Disco), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Crania+Los+Cabos+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Una sola noche: Darshan Jesrani —cofundador de Metro Area y referente del house y el disco de Nueva York— toca en vivo bajo las icónicas grúas de Crania, el lugar con mejor curaduría musical de Los Cabos. Set íntimo y bailable para cerrar la semana diferente. +21, ID obligatorio.",
      tags: [["música","DJ Set"],["nightlife","House"],["especial","Live"]],
      url: "https://www.cabo.party/event/dj-set-crania-los-cabos-27-june-2026"
    },
    {
      priority: 2,
      date: "Domingo 21 · 6:00 PM",
      icon: "🔥",
      title: "Día del Padre en Humo — Cena al fuego en Zadún",
      venue: "Humo, Zadún (a Ritz-Carlton Reserve), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Zadun+Ritz+Carlton+Reserve+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Día del Padre en Humo: menú especial cocinado al fuego, música en vivo y un puro de cortesía en el entorno íntimo de Zadún, entre el desierto y el mar. $3,240 MXN por persona, de 6:00 a 10:30 PM. Plan redondo para celebrar a papá hoy mismo — requiere reservación.",
      tags: [["gastronomía","Fuego"],["especial","Día del Padre"]],
      url: "https://www.visitloscabos.travel/event/fathers-day-at-humo/4261/"
    },
    {
      priority: 2,
      date: "Domingo 21 · 5:00 PM",
      icon: "🌈",
      title: "Pride Week — 'Puti Sunday' en Bar Ligaya",
      venue: "Bar Ligaya, Álvaro Obregón 2106, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Bar+Ligaya+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Gran cierre del Pride Week en Bar Ligaya, sobre Álvaro Obregón: desde las 5 PM con artistas y drags queer de México, DJ Chido Ninja y photo booth. Entrada libre (consumo mínimo). Tarde de comunidad, música y color para algo totalmente distinto en el Centro.",
      tags: [["especial","Pride"],["nightlife","Drag & DJ"]],
      url: "https://www.visitloscabos.travel/event/pride-week-at-bar-ligaya/4255/"
    },
    {
      priority: 2,
      date: "Miércoles 24 · 7:00 PM",
      icon: "💃",
      title: "Gipsy Nights — Cena con Flamenco en vivo (Alebrije Flamenco)",
      venue: "Hotel El Ganzo, La Playita, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Hotel+El+Ganzo+La+Playita+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Noche flamenca en Hotel El Ganzo: cena con música y baile flamenco en vivo de Alebrije Flamenco, sabores de España y el ambiente bohemio que distingue al Ganzo. De 7:00 a 9:00 PM, estrena temporada este miércoles. Plan cultural y romántico entre semana — requiere reservación.",
      tags: [["música","Flamenco"],["cultura","En vivo"]],
      url: "https://www.visitloscabos.travel/event/gipsy-nights-w-alebrije-flamenco/4290/"
    },
    {
      priority: 3,
      date: "Jueves 25 · 7:00 PM",
      icon: "✨",
      title: "Lavish Burlesque — Show bajo la luna en el rooftop",
      venue: "The Rooftop 360°, El Médano, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=The+Rooftop+360+Los+Cabos",
      price: "$$",
      reservation: true,
      why: "Show de burlesque bajo la luna en The Rooftop 360° de El Médano: performance en vivo, cocteles de autor y lounges VIP con vista panorámica a la bahía. Solo adultos, desde las 7 PM. Una noche elegante y diferente para el jueves.",
      tags: [["espectáculo","Burlesque"],["nightlife","Rooftop"]],
      url: "https://www.visitloscabos.travel/event/lavish-burlesque/3902/"
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
