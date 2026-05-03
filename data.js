// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 3–9 Mayo 2026",
  weekDates:     "3 – 9 de Mayo, 2026",
  generatedDate: "3 de Mayo, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 8",  emoji:"☁️",  desc:"Nublado",              max:32, min:21, rain:0 },
    { day:"Sáb 9",  emoji:"☁️",  desc:"Nublado",              max:33, min:22, rain:2 },
    { day:"Dom 3",  emoji:"☁️",  desc:"Nublado",              max:29, min:19, rain:0 },
    { day:"Lun 4",  emoji:"☁️",  desc:"Nublado",              max:28, min:19, rain:0 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 12–18 Abr",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Abr",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 26 Abr–2 May", url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Jue 7 – Sáb 9 · 3 noches",
      icon: "🎸",
      title: "Viva El Gonzo Music Festival 2026 — Segunda Edición",
      venue: "Puerto Los Cabos, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Puerto+Los+Cabos+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "El festival musical más esperado del año regresa para su segunda edición con un cartel enorme: My Morning Jacket y Goose como headliners, más un set acústico solo de Jim James. 3 noches de música en vivo en Puerto Los Cabos. Es EL evento de la semana.",
      tags: [["especial","Festival"],["música","Música en Vivo"],["cultura","Cultural"]],
      url: "https://www.vivaelgonzo.com"
    },
    {
      priority: 1,
      date: "Martes 5 · Todo el día",
      icon: "🇲🇽",
      title: "Cinco de Mayo — Celebraciones por Los Cabos",
      venue: "Restaurantes y bares en Cabo San Lucas y San José",
      mapsUrl: "https://maps.google.com/?q=Cabo+San+Lucas",
      price: "$$",
      reservation: false,
      why: "El 5 de Mayo se celebra en restaurantes y bares de Los Cabos con tragos especiales, mariachis, comida tradicional y promociones temáticas. Buen plan martes — busquen los menús especiales en La Lupita, El Squid Roe, Cabo Wabo y Mi Casa.",
      tags: [["especial","Tradición"],["cultura","Mexicano"],["gastronomía","Tradicional"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Sábado 9 · Todo el día",
      icon: "💐",
      title: "Pre-Mother's Day — Cenas Especiales por el 10 de Mayo",
      venue: "Restaurantes premium en todo Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Los+Cabos+restaurants",
      price: "$$$",
      reservation: true,
      why: "El 10 de Mayo es el Día de las Madres en México. El sábado 9 muchos restaurantes anuncian cenas especiales y brunchs para el domingo (Sora at Waldorf Astoria, Acre, Veleros Beach Club, Bagatelle). Reserven con anticipación si quieren llevar a alguien especial.",
      tags: [["especial","Día de las Madres"],["gastronomía","Fine Dining"]],
      url: "https://www.visitloscabos.travel/event/mother%e2%80%99s-day-epic-breakfast/4077/"
    },
    {
      priority: 2,
      date: "Martes 5 · 5:00 PM",
      icon: "🍜",
      title: "Sabores San José — Corredor Gastronómico",
      venue: "Centro Histórico, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Plaza+Mijares+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "El centro histórico se transforma en corredor gastronómico de 5 a 9 PM con productores locales, estaciones de degustación y presentaciones culturales. Esta semana coincide con el 5 de Mayo — ambiente extra festivo. Muy recomendado.",
      tags: [["gastronomía","Gastronómico"],["cultura","Cultural"],["free","Gratis"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Vie 8 – Sáb 9 · 6:00 PM",
      icon: "🍢",
      title: "One Week Only — Cocina Balinesa en Restaurant EQUIS",
      venue: "Zadún Ritz-Carlton Reserve, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Zadun+Ritz+Carlton+Reserve+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Arranca la temporada de cocina balinesa de tiempo limitado en EQUIS del Zadún Ritz-Carlton (8 al 22 de mayo). Sabores auténticos del archipiélago indonesio en uno de los mejores resorts de la zona. Solo dos semanas — vale la pena reservar.",
      tags: [["gastronomía","Internacional"],["lujo","Fine Dining"],["especial","Tiempo limitado"]],
      url: "https://www.visitloscabos.travel/event/one-week-only-bali-cuisine-at-equis/3925/"
    },
    {
      priority: 3,
      date: "Martes 5 · Atardecer",
      icon: "🌅",
      title: "Moon Zipping Fire — UTVs al Atardecer + Tirolesas Nocturnas",
      venue: "Wild Canyon Adventures",
      mapsUrl: "https://maps.google.com/?q=Wild+Canyon+Adventures+Los+Cabos",
      price: "$$",
      reservation: true,
      why: "Combo aventura diferente: UTVs al atardecer en el cañón + tirolesas en la noche con vista al mar. Si quieren algo distinto al nightlife convencional para celebrar el 5 de mayo en plan aventura, este es el plan.",
      tags: [["aventura","Aventura"],["especial","Nocturno"]],
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
