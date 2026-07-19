// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 19–25 Jul 2026",
  weekDates:     "19 – 25 de Julio, 2026",
  generatedDate: "19 de Julio, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 24", emoji:"☁️", desc:"Nublado",     max:35, min:27, rain:6 },
    { day:"Sáb 25", emoji:"☁️", desc:"Nublado",     max:36, min:28, rain:12 },
    { day:"Dom 19", emoji:"🌧️", desc:"Lluvia",      max:32, min:26, rain:53 },
    { day:"Lun 20", emoji:"🌧️", desc:"Lluvia",      max:35, min:26, rain:92 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 12–18 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 5–11 Jul",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 7–13 Jun",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 31 May–6 Jun",  url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Hoy Dom 19 · 12:00 PM (hora Los Cabos)",
      icon: "🏆",
      title: "Final del Mundial 2026 — España vs Argentina",
      venue: "Bares y lounges deportivos de Los Cabos (Palmilla Football Lounge, etc.)",
      mapsUrl: "https://maps.google.com/?q=sports+bar+Cabo+San+Lucas",
      price: "$$",
      reservation: true,
      why: "La final del primer Mundial de 48 selecciones: España, campeona de Europa, contra la Argentina de Messi, campeona defensora. Arranca al mediodía hora local (3 PM en Nueva Jersey). Toda la ciudad la va a ver — si van a un lounge, reserven porque se llenan.",
      tags: [["deporte","Mundial 2026"],["especial","Cita única"]],
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/final"
    },
    {
      priority: 1,
      date: "Jue 23 – Sáb 25 · Tarde-noche",
      icon: "🥭",
      title: "Fiestas Tradicionales de Santiago 2026 — Feria del Mango",
      venue: "Plaza Pública Gen. Francisco J. Múgica, Santiago",
      mapsUrl: "https://maps.google.com/?q=Santiago+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "El pueblo de Santiago celebra a su santo patrono (Santiago Apóstol, 25 de julio) con su feria del mango de temporada: presentaciones artísticas, concursos, muestra gastronómica y artesanías. A ~1 h de San José, es el plan más auténtico de la semana — nada turístico y muy barato.",
      tags: [["cultura","Tradición"],["especial","Feria"]],
      url: "https://turismo.loscabos.gob.mx/calendario-de-eventos/"
    },
    {
      priority: 2,
      date: "Hoy Dom 19 · Desde 5:00 PM",
      icon: "🌵",
      title: "Clausura — Fiesta de la Pitaya, Miraflores (34ª edición)",
      venue: "Miraflores, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Miraflores+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "Último día de la feria de la pitaya, la fruta de cactus de temporada: comida de pueblo, presentaciones y ambiente familiar. A ~45 min de San José. Si no fueron el fin de semana, hoy es la última oportunidad del año.",
      tags: [["cultura","Tradición"],["especial","Feria"]],
      url: "https://turismo.loscabos.gob.mx/calendario-de-eventos/"
    },
    {
      priority: 2,
      date: "Arranca Sáb 25 (qualy) · hasta 1 Ago",
      icon: "🎾",
      title: "Abierto de Los Cabos 2026 — 10º aniversario (ATP 250)",
      venue: "Cabo Sports Complex, Cabo Real, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Cabo+Sports+Complex+San+Jose+del+Cabo",
      price: "$$",
      reservation: true,
      why: "El torneo ATP regresa en su edición aniversario. Este fin de semana arranca la fase de clasificación y el cuadro principal corre toda la próxima semana. Si quieren ir, compren boletos ya — la edición de los 10 años se agota.",
      tags: [["deporte","ATP"],["especial","Comprar con tiempo"]],
      url: "https://loscabostennisopen.com/"
    },
    {
      priority: 2,
      date: "Mar 21 · 5:00–9:00 PM",
      icon: "🍤",
      title: "Sabores San José — corredor gastronómico",
      venue: "Centro histórico, San José del Cabo (Calle Grande, Morelos, Álvaro Obregón)",
      mapsUrl: "https://maps.google.com/?q=Centro+Historico+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "Cada martes el centro se cierra al tráfico y los restaurantes sacan menús especiales a precios accesibles, con música en vivo y baile folklórico. El mejor plan de entre semana para caminar, cenar rico y sentir el pueblo.",
      tags: [["cultura","Gastronomía"]],
      url: "https://www.visitloscabos.travel/places-to-visit/san-jose-del-cabo/saboressanjose/"
    },
    {
      priority: 3,
      date: "Hoy Dom 19 · Todo el día",
      icon: "🎉",
      title: "Fiestas Tradicionales de Santa Anita 2026",
      venue: "Santa Anita, Los Cabos (zona del aeropuerto)",
      mapsUrl: "https://maps.google.com/?q=Santa+Anita+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "Fiesta patronal de este poblado cerca del aeropuerto: misa, comida, juegos mecánicos y baile. Plan corto y muy local si andan por la zona norte hoy.",
      tags: [["cultura","Tradición"]],
      url: "https://turismo.loscabos.gob.mx/calendario-de-eventos/"
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
