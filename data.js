// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 12–18 Abril 2026",
  weekDates:     "12 – 18 de Abril, 2026",
  generatedDate: "12 de Abril, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 17", emoji:"☁️", desc:"Nublado",              max:22, min:21, rain:0  },
    { day:"Sáb 18", emoji:"🌤️", desc:"Mayormente despejado", max:23, min:21, rain:0  },
    { day:"Dom 12", emoji:"🌤️", desc:"Mayormente despejado", max:25, min:23, rain:0  },
    { day:"Lun 13", emoji:"☁️", desc:"Nublado",              max:26, min:24, rain:0  }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 12–18 Abr", url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Sábado 18 · 12:00 PM",
      icon: "🦪",
      title: "Festival del Ostión 2026 — 3ª Edición",
      venue: "Veleros Beach Club",
      mapsUrl: "https://maps.google.com/?q=Veleros+Beach+Club+Los+Cabos",
      price: "$$",
      reservation: false,
      why: "El festival gastronómico más esperado del año. Ostiones frescos, música en vivo y playa. Afterparty en Crania 9 PM con Soul of Hex.",
      tags: [["especial","Festival"],["brunch","Beach Club"],["","Mariscos"]],
      url: "https://www.cabo.party/event/festival-del-ostion-2026-veleros-los-cabos-18-april-2026"
    },
    {
      priority: 1,
      date: "Miércoles 15 · 7:00 PM",
      icon: "🎹",
      title: "PIANOFEST — Live Piano Night",
      venue: "Crania Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Crania+Los+Cabos",
      price: "$$$",
      reservation: true,
      why: "Evento único de música en vivo con piano. Crania tiene de los mejores ambientes — no es la noche típica de club.",
      tags: [["especial","Evento único"],["cultura","Música en Vivo"]],
      url: "https://www.cabo.party/event/pianofest-crania-los-cabos-15-april-2026"
    },
    {
      priority: 2,
      date: "Martes 14 · 12:00 PM",
      icon: "⛵",
      title: "Hip Hop Sessions — Boat Party",
      venue: "Cabo Escape Tours",
      mapsUrl: "https://maps.google.com/?q=Marina+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "Fiesta en barco por la bahía con música hip hop. Experiencia diferente si no lo han hecho.",
      tags: [["nightlife","Fiesta en barco"],["","Hip Hop"]],
      url: "https://www.eventbrite.com/e/hip-hop-sessions-boat-party-cabo-san-lucas-tickets-136202203457"
    },
    {
      priority: 2,
      date: "Miércoles 15 · 7:00 PM",
      icon: "🎤",
      title: "Daline Jones & The Diego Ramírez Trio",
      venue: "Jazz on the Rocks",
      mapsUrl: "https://maps.google.com/?q=Jazz+on+the+Rocks+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "Jazz en vivo con artista invitada. Jazz on the Rocks es siempre buen plan, con artista especial es mejor.",
      tags: [["cultura","Jazz en Vivo"],["","Música"]],
      url: "https://www.visitloscabos.travel/event/daline-jones-%26-the-diego-ram%c3%8drez-trio/1943/"
    },
    {
      priority: 2,
      date: "Viernes 17 · Noche",
      icon: "💔",
      title: "Corazón Despecha'o — Noche Temática",
      venue: "Corazón Beach Club",
      mapsUrl: "https://maps.google.com/?q=Corazon+Beach+Club+Los+Cabos",
      price: "$$",
      reservation: false,
      why: "Noche de música latina despechada. Diferente al nightlife típico — buen plan divertido.",
      tags: [["nightlife","Noche Temática"],["","Latin"]],
      url: "https://www.visitloscabos.travel/event/coraz%c3%b3n-despechao/3918/"
    },
    {
      priority: 3,
      date: "Viernes 17 · 9:00 AM",
      icon: "🛍️",
      title: "Palmilla Organic Market",
      venue: "The Shoppes at Palmilla, San José",
      mapsUrl: "https://maps.google.com/?q=Shoppes+at+Palmilla+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "El mercado más bonito de Los Cabos. Artesanías, comida local, buen ambiente matutino.",
      tags: [["mercado","Mercado"],["free","Gratis"],["","Artesanías"]],
      url: "https://www.facebook.com/events/462765036085583/"
    },
    {
      priority: 3,
      date: "Sábado 18 · 8:00 AM",
      icon: "🥬",
      title: "Mercado Orgánico Pedregal",
      venue: "Del Jorongo 210, Pedregal",
      mapsUrl: "https://maps.google.com/?q=Pedregal+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Mercado local cerca de Cabo San Lucas. Comida fresca y productos orgánicos.",
      tags: [["mercado","Mercado"],["free","Gratis"]],
      url: "https://www.facebook.com/events/967064718514726"
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
