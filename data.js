// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 7–13 Jun 2026",
  weekDates:     "7 – 13 de Junio, 2026",
  generatedDate: "7 de Junio, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 12", emoji:"🌤️", desc:"Mayormente despejado", max:28, min:20, rain:0 },
    { day:"Sáb 13", emoji:"☁️", desc:"Nublado",              max:29, min:21, rain:0 },
    { day:"Dom 7",  emoji:"☀️", desc:"Despejado",            max:27, min:17, rain:0 },
    { day:"Lun 8",  emoji:"🌤️", desc:"Mayormente despejado", max:27, min:18, rain:0 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 31 May–6 Jun",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 24–30 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 17–23 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 10–16 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Jueves 11 · 11:30 AM",
      icon: "⚽",
      title: "Inauguración Mundial 2026 — Watch Party México vs Sudáfrica",
      venue: "Hacienda Cocina & Cantina, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Hacienda+Cocina+y+Cantina+Cabo+San+Lucas",
      price: "$$",
      reservation: true,
      why: "EL momento del año: arranca el Mundial 2026 y México juega el partido inaugural. Watch party frente a la Marina con pantallas, comida y bebidas. Pasa solo cada 4 años y México es anfitrión — plan obligado para vivir la fiesta mundialista. Llega temprano, se llena.",
      tags: [["especial","Mundial 2026"],["deporte","Fútbol"]],
      url: "https://www.visitloscabos.travel/event/watch-party-the-opening-match/4206/"
    },
    {
      priority: 1,
      date: "Sábado 13 · 9:00 PM",
      icon: "🎧",
      title: "CABIZBAJO en Crania — Noche de Techno Underground",
      venue: "Crania Cabo (Cate & Air Disco), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Crania+Los+Cabos+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Set en vivo de Cabizbajo, productor del underground mexicano conocido por su bassline futurista y techno profundo, acompañado de Naborm, Ju Bodenstedt y Johann. Una sola noche bajo las icónicas grúas — Crania es EL lugar con mejor curaduría musical de Los Cabos. +21, ID obligatorio.",
      tags: [["música","DJ Set"],["nightlife","Techno"],["especial","Live"]],
      url: "https://www.cabo.party/event/dj-set-crania-los-cabos-13-june-2026"
    },
    {
      priority: 2,
      date: "Sábado 13 · 8:00 AM",
      icon: "🧘",
      title: "Global Wellness Day — Yoga & Sound Healing en Casa Dorada",
      venue: "Terraza 12 Tribes, Casa Dorada, Playa El Médano",
      mapsUrl: "https://maps.google.com/?q=Casa+Dorada+Los+Cabos+Playa+El+Medano",
      price: "$",
      reservation: true,
      why: "Día Mundial del Bienestar frente al mar en El Médano: sesión de yoga gratis al amanecer, seguida de sound healing ($5 USD) y 20% de descuento en desayuno en Maydán. Plan diferente y relajante para empezar el sábado en pareja. Cupo limitado.",
      tags: [["bienestar","Yoga"],["especial","Global Wellness Day"]],
      url: "https://www.visitloscabos.travel/event/global-wellness-day-in-los-cabos%3a-yoga-%26-sound-healing-at-casa-dorada/4130/"
    },
    {
      priority: 2,
      date: "Miércoles 10 · 5:30 PM",
      icon: "✨",
      title: "México Mágico — Cena temática en One&Only",
      venue: "Agua, One&Only Palmilla, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=One+and+Only+Palmilla+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Cena temática mexicana frente al Mar de Cortés en One&Only Palmilla: cocina mexicana curada, música en vivo, colores vibrantes y mixología elevada ($1,556 MXN adultos / $982 niños). Plan entre semana para sentirse en otro mundo sin salir del corredor.",
      tags: [["gastronomía","Mexicana"],["lujo","Fine Dining"],["cultura","Temática"]],
      url: "https://www.visitloscabos.travel/event/m%c3%89xico-m%c3%81gico/3846/"
    },
    {
      priority: 2,
      date: "Miércoles 10 · 8:00 PM",
      icon: "🎷",
      title: "Daline Jones & The Diego Ramírez Trio — Jazz en Vivo",
      venue: "Jazz on the Rocks, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Jazz+on+the+Rocks+San+Jose+del+Cabo",
      price: "$$",
      reservation: true,
      why: "Cada miércoles, la potente voz de Daline Jones acompañada del trío de Diego Ramírez en el mejor escenario de jazz de San José. Noche íntima de música en vivo y buena cocina — plan tranquilo y elegante para mitad de semana.",
      tags: [["música","Jazz"],["especial","Live"]],
      url: "https://www.visitloscabos.travel/event/daline-jones-%26-the-diego-ram%c3%8drez-trio/1943/"
    },
    {
      priority: 3,
      date: "Lunes 8 · 5:00 PM – 10:30 PM",
      icon: "🍝",
      title: "Pasta Nights at Palmerio — Últimas semanas",
      venue: "Palmerio, Four Seasons Cabo Del Sol",
      mapsUrl: "https://maps.google.com/?q=Four+Seasons+Resort+Cabo+Del+Sol",
      price: "$$$",
      reservation: true,
      why: "Cada lunes, pasta fresca hecha a mano en Palmerio (Four Seasons Cabo Del Sol): cada forma rellenada o cortada al momento, con salsas balanceadas. La temporada cierra el 29 de junio — quedan pocas oportunidades para arrancar la semana diferente.",
      tags: [["gastronomía","Italiana"],["lujo","Fine Dining"]],
      url: "https://www.visitloscabos.travel/event/pasta-nights-at-palmerio/3830/"
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
