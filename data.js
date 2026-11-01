// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  weekLabel:     "Semana 1–7 Nov 2026",
  weekDates:     "1 – 7 de Noviembre, 2026",
  generatedDate: "1 de Noviembre, 2026",

  weather: [
    { day:"Dom 1", emoji:"🌧️", desc:"Llovizna", max:30, min:23, rain:33 },
    { day:"Lun 2", emoji:"🌤️", desc:"Mayormente despejado", max:31, min:23, rain:0 },
    { day:"Mar 3", emoji:"🌤️", desc:"Mayormente despejado", max:32, min:22, rain:0 },
    { day:"Mié 4", emoji:"☁️", desc:"Nublado", max:29, min:20, rain:0 },
    { day:"Jue 5", emoji:"☀️", desc:"Despejado", max:29, min:21, rain:6 },
    { day:"Vie 6", emoji:"🌤️", desc:"Mayormente despejado", max:30, min:22, rain:2 },
    { day:"Sáb 7", emoji:"🌤️", desc:"Mayormente despejado", max:31, min:22, rain:33 }
  ],

  archive: [
    { label:"Semana 25–31 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
{ label:"Semana 18–24 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 11–17 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 4–10 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 23–29 Ago",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 2–8 Ago",       url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 12–18 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 5–11 Jul",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
  ],

  specials: [
    {
      priority: 1,
      date: "Jue 5 – Dom 8 · Todo el día",
      icon: "⛳",
      title: "World Wide Technology Championship (PGA Tour) — 20ª edición",
      venue: "El Cardonal at Diamante, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=El+Cardonal+at+Diamante+Cabo+San+Lucas",
      price: "$$",
      reservation: false,
      why: "Torneo oficial del PGA Tour con Horschel, Finau, Luke Donald y el campeón defensor Ben Griffin, en el primer campo diseñado por Tiger Woods. Boleto general desde US$35 (jue/vie), menores de 15 entran gratis con adulto; hay Fan Zone, música en vivo y Golf is Gourmet. Mejor ir jueves o viernes: menos gente.",
      tags: [["especial","PGA Tour"],["","Evento familiar"]],
      url: "https://www.wwtchampionship.com/"
    },
    {
      priority: 1,
      date: "Dom 1 · 4:00 PM en adelante",
      icon: "💀",
      title: "Festival Día de Muertos 2026 — San José del Cabo",
      venue: "Panteón Municipal y Plaza Antonio Mijares, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Plaza+Antonio+Mijares+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Recorrido en el Panteón (4 PM), programa de danza, teatro y ballet folclórico (5 PM) y película 'El Libro de la Vida' (8 PM). El lunes 2: desfile 4:15 PM, pasarela de catrinas, concurso de altares y Orquesta de Jazz de BCS. Gratis. Hoy hay 33% de llovizna: lleven chamarra ligera.",
      tags: [["cultura","Tradición"],["free","Gratis"]],
      url: "https://www.loscabos.gob.mx/invita-xv-ayuntamiento-de-los-cabos-al-festival-del-dia-de-muertos-2026-en-san-jose-del-cabo-y-cabo-san-lucas/"
    },
    {
      priority: 2,
      date: "Dom 1 · 4:30 PM desfile · 6:00 PM programa",
      icon: "🎭",
      title: "Día de Muertos en Cabo San Lucas: desfile de carros alegóricos y The Place at Cabo",
      venue: "Plaza Amelia Wilkes y The Place at Cabo (Marina)",
      mapsUrl: "https://maps.google.com/?q=The+Place+at+Cabo+Marina+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Desfile de Canirac, muestra gastronómica y artesanal, y programa artístico en la Marina con coro polifónico y música en vivo. Inauguración de 'Oasis de Huesos: Catrinas en el Fin de la Tierra' en Cerrito del Timbre. Opción gratis si prefieren Cabo San Lucas.",
      tags: [["cultura","Tradición"],["free","Gratis"]],
      url: "https://www.loscabos.gob.mx/invita-xv-ayuntamiento-de-los-cabos-al-festival-del-dia-de-muertos-2026-en-san-jose-del-cabo-y-cabo-san-lucas/"
    },
    {
      priority: 2,
      date: "Vie 6 · 1:00 PM",
      icon: "🥁",
      title: "Taiko Drum Show",
      venue: "Los Cabos (ver cabo.party)",
      mapsUrl: "https://maps.google.com/?q=Taiko+Drum+Show+Los+Cabos",
      price: "$$",
      reservation: false,
      why: "Show de tambores japoneses poco común en el calendario semanal; sale de la rutina de cenas show. Venue exacto por confirmar en cabo.party.",
      tags: [["especial","Show"]],
      url: "https://www.cabo.party/los-cabos-mexico-event-calendar"
    },
    {
      priority: 3,
      date: "Jue 5 · 7:00 PM",
      icon: "🕺",
      title: "80's Night",
      venue: "Cabo San Lucas (ver cabo.party)",
      mapsUrl: "https://maps.google.com/?q=80s+Night+Cabo+San+Lucas",
      price: "$$",
      reservation: false,
      why: "Noche temática de los 80 entre semana, buena opción relajada antes del fin de semana del torneo. Venue por confirmar en cabo.party.",
      tags: [["especial","Noche temática"]],
      url: "https://www.cabo.party/los-cabos-mexico-event-calendar"
    }
  ],

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
