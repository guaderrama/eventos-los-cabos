// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 2–8 Ago 2026",
  weekDates:     "2 – 8 de Agosto, 2026",
  generatedDate: "5 de Agosto, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 7",  emoji:"🌦️", desc:"Llovizna",  max:36, min:27, rain:45 },
    { day:"Sáb 8",  emoji:"🌦️", desc:"Llovizna",  max:35, min:28, rain:71 },
    { day:"Dom 9",  emoji:"⛈️", desc:"Tormenta",  max:32, min:27, rain:96 },
    { day:"Lun 10", emoji:"🌦️", desc:"Llovizna",  max:34, min:27, rain:92 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
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
      date: "Sábado 8 · 6:00 PM",
      icon: "💃",
      title: "Baila la Plaza y Playa — Playa El Corsario",
      venue: "Playa El Corsario, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Playa+El+Corsario+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Programa gratuito del Instituto de la Cultura y las Artes: clase abierta de baile en la playa con DJ Azteca. Entrada libre para todas las edades. Es la única sede en Cabo San Lucas de todo agosto — las otras fechas son San José y La Ribera. Ojo con el pronóstico: 71% de lluvia ese día.",
      tags: [["cultura","Gratis"],["especial","Única en CSL"]],
      url: "https://setuesbcs.gob.mx/eventos-admin/calendario.php?municipio=LOS+CABOS"
    },
    {
      priority: 1,
      date: "Sábado 8 · Todo el día",
      icon: "🎉",
      title: "Fiestas Tradicionales de Toro Muerto 2026",
      venue: "Toro Muerto, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Toro+Muerto+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "Fiesta patronal de un poblado serrano que se hace una sola vez al año: misa, comida regional, música y baile. Cero turismo, todo local. Si quieren el plan más auténtico de la semana, es este. Camino de terracería en partes — mejor con camioneta.",
      tags: [["cultura","Tradición"],["especial","Anual"]],
      url: "https://setuesbcs.gob.mx/eventos-admin/calendario.php?municipio=LOS+CABOS"
    },
    {
      priority: 2,
      date: "Vie 7 – Sáb 8 · Desde el amanecer",
      icon: "🎣",
      title: "Torneo de Pesca «Pescando Para Salvar Vidas»",
      venue: "Playa Migriño, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Playa+Migri%C3%B1o+Los+Cabos",
      price: "$",
      reservation: false,
      why: "Torneo de pesca deportiva con causa, organizado con apoyo de Fonmar BCS. Aunque no compitan, vale ir a ver la pesada y el ambiente en Migriño — playa del lado Pacífico, muy distinta al Mar de Cortés.",
      tags: [["deporte","Pesca"],["especial","Con causa"]],
      url: "https://setuesbcs.gob.mx/eventos-admin/calendario.php?municipio=LOS+CABOS"
    },
    {
      priority: 2,
      date: "Domingo 9 · Tarde",
      icon: "🎧",
      title: "Poolside Sessions — arranca temporada",
      venue: "Hotel El Ganzo, La Playita, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Hotel+El+Ganzo+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Primera fecha de la temporada 2026 (corre hasta el 27 de diciembre). DJ en vivo junto a la alberca del Ganzo, uno de los mejores atardeceres de San José. Reserven: la primera fecha siempre se llena.",
      tags: [["música","DJ Set"],["especial","Arranca temporada"]],
      url: "https://www.visitloscabos.travel/event/poolside-sessions/4298/"
    },
    {
      priority: 2,
      date: "Viernes 7 · Noche",
      icon: "🎶",
      title: "El Ganzo Collective — arranca temporada",
      venue: "Hotel El Ganzo, La Playita, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Hotel+El+Ganzo+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Sesión de música en vivo con artistas residentes del estudio de grabación del hotel. Arranca este viernes y corre hasta el 25 de diciembre. Formato íntimo, muy distinto a los clubs de la Marina.",
      tags: [["música","En vivo"],["especial","Arranca temporada"]],
      url: "https://www.visitloscabos.travel/event/el-ganzo-collective/4301/"
    },
    {
      priority: 3,
      date: "Jueves 6 · Noche",
      icon: "🎷",
      title: "Blues Night con Eric Louis Trio — estreno",
      venue: "Hotel El Ganzo, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Hotel+El+Ganzo+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "Estreno de la residencia de blues de los jueves en El Ganzo, que va hasta fin de año. Plan corto y tranquilo entre semana si no quieren esperar al fin de semana.",
      tags: [["música","Blues"]],
      url: "https://www.visitloscabos.travel/event/blues-night-w-eric-louis-trio/4295/"
    },
    {
      priority: 3,
      date: "Toda la semana · Cena",
      icon: "🍽️",
      title: "A Summer to Savor — Four Seasons Cabo Del Sol",
      venue: "Palmerio y Cayao, Four Seasons Cabo Del Sol",
      mapsUrl: "https://maps.google.com/?q=Four+Seasons+Resort+Cabo+Del+Sol",
      price: "$$$",
      reservation: true,
      why: "Menú de tres tiempos a precio fijo, solo de agosto a septiembre, en los dos restaurantes del Four Seasons: Palmerio (italiano) y Cayao (nikkei del chef Richard Sandoval). Es la forma más barata de entrar a ese resort. Plan B perfecto si llueve el fin de semana.",
      tags: [["gastronomía","Menú temporada"]],
      url: "https://www.visitloscabos.travel/event/a-summer-to-savor-%7c-palmerio-at-four-seasons-cabo-del-sol/4398/"
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
