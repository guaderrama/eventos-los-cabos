// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 31 May–6 Jun 2026",
  weekDates:     "31 de Mayo – 6 de Junio, 2026",
  generatedDate: "31 de Mayo, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 5",  emoji:"☀️", desc:"Despejado",  max:31, min:20, rain:0  },
    { day:"Sáb 6",  emoji:"☀️", desc:"Despejado",  max:29, min:18, rain:0  },
    { day:"Dom 31", emoji:"☁️", desc:"Nublado",    max:32, min:23, rain:19 },
    { day:"Lun 1",  emoji:"☁️", desc:"Nublado",    max:35, min:26, rain:0  }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 3–9 May",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 10–16 May",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 17–23 May",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 24–30 May",    url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Viernes 5 · 6:00 PM",
      icon: "🎨",
      title: "PORTAL — Mercado Creativo en Crania",
      venue: "Crania Cabo (Cate & Air Disco), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Crania+Los+Cabos+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "EL evento de la semana. Crania reinventa su espacio como hub cultural: en lugar de pista de baile, un mercado creativo con artistas y emprendedores locales de Los Cabos. Única edición — arte, conexión y comunidad bajo la icónica estructura de grúas. Plan diferente para empezar el fin de semana.",
      tags: [["especial","Mercado Creativo"],["cultura","Local Artists"]],
      url: "https://www.cabo.party/event/portal-crania-los-cabos-05-june-2026"
    },
    {
      priority: 1,
      date: "Sábado 6 · 9:00 PM",
      icon: "🎧",
      title: "METRIKA (live) en Crania — DJ Set Especial",
      venue: "Crania Cabo (Cate & Air Disco), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Crania+Los+Cabos+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Set en vivo del productor mexicano Metrika, con line-up de DJs ERIKKU, ROSANO (residente Papaya Playa Project, Tulum) y ADDIE. Una sola noche — Crania es EL lugar con mejor curaduría musical de Los Cabos. +21, ID obligatorio.",
      tags: [["música","DJ Set"],["especial","Live"],["nightlife","Techno House"]],
      url: "https://www.cabo.party/event/dj-set-crania-los-cabos-06-june-2026"
    },
    {
      priority: 2,
      date: "Lunes 1 · 5:00 PM – 10:30 PM",
      icon: "🍝",
      title: "Pasta Nights at Palmerio — Estreno de Temporada",
      venue: "Palmerio, Four Seasons Cabo Del Sol",
      mapsUrl: "https://maps.google.com/?q=Four+Seasons+Resort+Cabo+Del+Sol",
      price: "$$$",
      reservation: true,
      why: "Arranca la temporada de Pasta Nights en Palmerio (Four Seasons Cabo Del Sol). Cada lunes pasta fresca hecha a mano: cada forma rellenada o cortada al momento, con salsas balanceadas. Plan ideal para inaugurar la semana — corre hasta el 29 de junio.",
      tags: [["gastronomía","Italiana"],["lujo","Fine Dining"],["especial","Estreno"]],
      url: "https://www.visitloscabos.travel/event/pasta-nights-at-palmerio/3830/"
    },
    {
      priority: 2,
      date: "Miércoles 3 · 5:30 PM – 9:00 PM",
      icon: "✨",
      title: "México Mágico — Cena temática en One&Only",
      venue: "Agua, One&Only Palmilla",
      mapsUrl: "https://maps.google.com/?q=One+and+Only+Palmilla+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Cena temática mexicana frente al Mar de Cortés en One&Only Palmilla: cocina mexicana curada, música en vivo, colores vibrantes y mixología elevada. $1,556 MXN adultos / $982 niños. Plan entre semana para sentirse en otro mundo sin salir del corredor.",
      tags: [["gastronomía","Mexicana"],["lujo","Fine Dining"],["cultura","Temática"]],
      url: "https://www.visitloscabos.travel/event/m%c3%89xico-m%c3%81gico/3846/"
    },
    {
      priority: 2,
      date: "Jueves 4 · 5:00 PM – 9:00 PM",
      icon: "🖼️",
      title: "Art Walk — Caminata del Arte en San José",
      venue: "Distrito del Arte, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Art+District+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Recta final del Art Walk — la temporada cierra a finales de junio. Calle Obregón se cierra al tráfico, +12 galerías abren con refrigerios, música en vivo y artistas presentes. Plan cultural gratis y muy de la zona. Si no han ido este año, esta es de las últimas oportunidades.",
      tags: [["cultura","Art Walk"],["free","Gratis"]],
      url: "https://www.artcabo.com/san-jose-del-cabo-art-walk.html"
    },
    {
      priority: 3,
      date: "Jueves 4 · 12:30 PM – 4:00 PM",
      icon: "🥂",
      title: "Thursday Drunch at Sora — Brunch + Cocteles",
      venue: "Sora, Four Seasons Cabo Del Sol",
      mapsUrl: "https://maps.google.com/?q=Four+Seasons+Resort+Cabo+Del+Sol",
      price: "$$$",
      reservation: true,
      why: "Brunch tarde + cocteles ('drunch') solo los jueves en Sora, dentro del Four Seasons Cabo Del Sol. Vista al mar, estaciones en vivo y mixología premium. Plan ideal para extender el almuerzo en pareja entre semana.",
      tags: [["gastronomía","Brunch"],["lujo","Resort"]],
      url: "https://www.visitloscabos.travel/event/thursday-drunch-at-sora/3587/"
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
