// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 16–22 Ago 2026",
  weekDates:     "16 – 22 de Agosto, 2026",
  generatedDate: "16 de Agosto, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 21", emoji:"☀️", desc:"Despejado",             max:37, min:28, rain:31 },
    { day:"Sáb 22", emoji:"🌤️", desc:"Mayormente despejado", max:38, min:29, rain:43 },
    { day:"Dom 23", emoji:"🌧️", desc:"Lluvia",                max:33, min:27, rain:63 },
    { day:"Lun 24", emoji:"☁️", desc:"Nublado",                max:33, min:27, rain:63 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 2–8 Ago",       url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 12–18 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 5–11 Jul",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 7–13 Jun",      url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Martes 18 · Todo el día",
      icon: "👑",
      title: "Miss Universo México 2026 — Llegada y Cena de Bienvenida",
      venue: "Corazón Cabo Resort & Spa, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Corazon+Cabo+Resort+Spa+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "Llegan a Los Cabos las 32 delegadas para arrancar 11 días de actividades previas a la gran final del 29 de agosto. La cena de bienvenida es privada, pero el ambiente se siente toda la semana en el resort y en Rooftop 360° — si quieren ver algo del movimiento, cenar ahí esta semana es la apuesta más segura.",
      tags: [["especial","Miss Universo"],["evento nacional","Cabo San Lucas"]],
      url: "https://www.corazoncabo.com/miss-universe-mexico/"
    },
    {
      priority: 1,
      date: "Domingo 16 · 6:00 PM",
      icon: "💃",
      title: "Baila la Plaza y Playa — cierre en La Ribera",
      venue: "Plaza Pública, Delegación La Ribera",
      mapsUrl: "https://maps.google.com/?q=La+Ribera+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "Penúltima fecha del programa gratuito del Instituto de Cultura y las Artes: clase abierta de baile con DJ Azteca. Esta semana toca en La Ribera, la delegación menos turística de Los Cabos, sobre el Mar de Cortés rumbo al East Cape. Cierra la temporada el próximo domingo 23 en Playa Costa Azul, San José del Cabo.",
      tags: [["cultura","Gratis"],["especial","La Ribera"]],
      url: "https://www.loscabos.gob.mx/ica-los-cabos-pone-en-marcha-el-programa-cultural-baila-la-plaza/"
    },
    {
      priority: 2,
      date: "Domingo 16 · Brunch",
      icon: "🥂",
      title: "Sundaze Sessions Brunch — arranca temporada",
      venue: "Hotel El Ganzo, La Playita, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Hotel+El+Ganzo+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Primera fecha de la nueva serie de brunch dominical de El Ganzo, que corre hasta el 27 de diciembre. Se suma a Poolside Sessions y El Ganzo Collective, que arrancaron la semana pasada — el hotel entra en plena temporada de eventos. Reserven, los domingos ahí se llenan rápido.",
      tags: [["gastronomía","Brunch"],["especial","Arranca temporada"]],
      url: "https://www.visitloscabos.travel/event/sundaze-sessions-brunch/4293/"
    },
    {
      priority: 3,
      date: "15 Ago – 30 Sep · Cena",
      icon: "🌶️",
      title: "Season of Chiles en Nogada — menú de temporada",
      venue: "Pitahayas Restaurant, Pueblo Bonito Sunset Beach",
      mapsUrl: "https://maps.google.com/?q=Pitahayas+Restaurant+Pueblo+Bonito+Sunset+Beach+Los+Cabos",
      price: "$$$",
      reservation: true,
      why: "Menú de tres tiempos dedicado al platillo más patriótico de México, en temporada corta porque depende de la nuez de Castilla y el chile poblano frescos (agosto-septiembre). Buena excusa para ir a Pitahayas, de los restaurantes con mejor vista al atardecer del corredor turístico.",
      tags: [["gastronomía","Menú temporada"]],
      url: "https://www.visitloscabos.travel/event/season-of-chiles-en-nogada%3a-3-course-menu/4427/"
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
