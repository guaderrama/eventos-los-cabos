// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 19–25 Abril 2026",
  weekDates:     "19 – 25 de Abril, 2026",
  generatedDate: "19 de Abril, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 24", emoji:"🌤️", desc:"Mayormente despejado", max:22, min:21, rain:0  },
    { day:"Sáb 25", emoji:"☁️", desc:"Nublado",              max:23, min:21, rain:0  },
    { day:"Dom 19", emoji:"🌤️", desc:"Mayormente despejado", max:22, min:21, rain:0  },
    { day:"Lun 20", emoji:"☁️", desc:"Nublado",              max:22, min:21, rain:0  }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 12–18 Abr", url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Abr", url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Dom 19 – Dom 26 · Todo el día",
      icon: "🏊",
      title: "IRONMAN 70.3 Los Cabos 2026 — Semana del Evento",
      venue: "GR Solaris Lighthouse (Expo) · Palmilla Beach (carrera)",
      mapsUrl: "https://maps.google.com/?q=GR+Solaris+Lighthouse+Los+Cabos",
      price: "$",
      reservation: false,
      why: "¡El IRONMAN regresa a Los Cabos después de 3 años! Toda la semana hay ambiente especial: 1,800 atletas de 45 países. El Expo está en GR Solaris Lighthouse para ver a los participantes. La carrera es el domingo 26 con cierre de vialidades en el Corredor.",
      tags: [["especial","Evento único"],["deporte","Triatlón"],["free","Gratis"]],
      url: "https://www.destinoloscabos.com/blog/ironman-70-3-returns-to-los-cabos/"
    },
    {
      priority: 1,
      date: "Dom 19 · Hora por confirmar",
      icon: "🌿",
      title: "ANAJICONDI — Mindful Dining Meets Jungle Retreat",
      venue: "Agua Restaurant, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Agua+Restaurant+Los+Cabos",
      price: "$$$",
      reservation: true,
      why: "Experiencia culinaria única que fusiona bienestar y gastronomía en un ambiente de retiro natural. No es una cena ordinaria — es una experiencia sensorial y consciente.",
      tags: [["especial","Evento único"],["cultura","Bienestar"],["gastronomía","Fine Dining"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Martes 21 · 5:00 PM",
      icon: "🍜",
      title: "Sabores San José — Corredor Gastronómico",
      venue: "Centro Histórico, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Plaza+Mijares+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "El centro histórico de San José se transforma en un corredor gastronómico de 5 a 9 PM. Productores locales, estaciones de degustación y presentaciones culturales. Muy recomendado para conocer la escena local.",
      tags: [["gastronomía","Gastronómico"],["cultura","Cultural"],["free","Gratis"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Miércoles 22 · 7:00 PM",
      icon: "🎹",
      title: "DALINE JONES & The Diego Ramírez Trio",
      venue: "Jazz on the Rocks",
      mapsUrl: "https://maps.google.com/?q=Jazz+on+the+Rocks+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "Jazz en vivo con artista invitada. Jazz on the Rocks es siempre buen plan, con artista especial es mejor. Ambiente íntimo y muy buena música.",
      tags: [["cultura","Jazz en Vivo"],["música","Música"]],
      url: "https://www.visitloscabos.travel/event/daline-jones-%26-the-diego-ram%c3%8drez-trio/1943/"
    },
    {
      priority: 2,
      date: "Martes 21 · Atardecer",
      icon: "🌅",
      title: "Moon Zipping Fire — UTVs al Atardecer + Tirolesas Nocturnas",
      venue: "Wild Canyon Adventures",
      mapsUrl: "https://maps.google.com/?q=Wild+Canyon+Adventures+Los+Cabos",
      price: "$$",
      reservation: true,
      why: "Combo aventura diferente: UTVs al atardecer en el cañón + tirolesas en la noche con vista al mar. Ideal si buscan algo fuera de lo ordinario del nightlife.",
      tags: [["aventura","Aventura"],["especial","Nocturno"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 3,
      date: "Viernes 24 · 7:00 PM",
      icon: "🦞",
      title: "Baja Seafood Night at Palmerio",
      venue: "Four Seasons Resort Los Cabos at Costa Palmas",
      mapsUrl: "https://maps.google.com/?q=Four+Seasons+Los+Cabos+Costa+Palmas",
      price: "$$$",
      reservation: true,
      why: "Noche especial de mariscos de Baja California en el restaurante Palmerio del Four Seasons. Excelente calidad y ambiente de lujo junto al mar.",
      tags: [["gastronomía","Mariscos"],["lujo","Fine Dining"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 3,
      date: "Miércoles 22 · Noche",
      icon: "🇲🇽",
      title: "México Mágico — Espectáculo Cultural",
      venue: "Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Los+Cabos+Mexico",
      price: "$$",
      reservation: false,
      why: "Espectáculo de entretenimiento cultural con temática mexicana. Buen plan para una noche diferente al nightlife convencional.",
      tags: [["cultura","Cultural"],["entretenimiento","Espectáculo"]],
      url: "https://www.visitloscabos.travel/events/"
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
