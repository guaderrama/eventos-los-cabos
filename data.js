// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 17–23 Mayo 2026",
  weekDates:     "17 – 23 de Mayo, 2026",
  generatedDate: "17 de Mayo, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 22", emoji:"☁️", desc:"Nublado",              max:32, min:23, rain:7  },
    { day:"Sáb 23", emoji:"☁️", desc:"Nublado",              max:30, min:22, rain:8  },
    { day:"Dom 17", emoji:"☁️", desc:"Nublado",              max:31, min:21, rain:10 },
    { day:"Lun 18", emoji:"🌤️", desc:"Mayormente despejado", max:30, min:20, rain:0  }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 19–25 Abr",    url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 26 Abr–2 May", url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 3–9 May",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 10–16 May",    url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Vie 22 y Sáb 23 · 5:30 PM",
      icon: "🎷",
      title: "San José Jazz Weekend 2026 — 12ª Edición",
      venue: "Zona Hotelera, frente a Plaza del Pescador, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Plaza+del+Pescador+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "EL evento de la semana. Festival cultural más emblemático del destino — 12ª edición con Chuchito Valdés (referente mundial del jazz afrocubano) como cabeza de cartel. 11 proyectos artísticos, +35 músicos, gastronomía y arte. ENTRADA GRATIS. Las calles de San José se transforman en escenario al aire libre.",
      tags: [["especial","Festival"],["música","Jazz"],["free","Gratis"]],
      url: "https://www.visitloscabos.travel/event/san-jose-jazz-weekend-festival-international-2026/4044/"
    },
    {
      priority: 1,
      date: "Vie 22 – Dom 24 · Todo el fin de semana",
      icon: "🌅",
      title: "Sunset Fest Cabo — Memorial Day Weekend",
      venue: "Playa El Médano, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Playa+Medano+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "Festival de yacht rock reagendado para Memorial Day weekend en la arena de Playa Médano. Cartel original con Rick Springfield, Ambrosia, Alan Parsons y otros (algunos confirmados, otros pendientes). Plan diferente: música suave en la playa al atardecer. Verificar lineup actualizado antes de comprar.",
      tags: [["especial","Festival"],["música","Yacht Rock"]],
      url: "https://sunsetfestcabo.com/"
    },
    {
      priority: 2,
      date: "Hasta el Vie 22 · 6:00 PM",
      icon: "🍢",
      title: "Última Semana — Cocina Balinesa en Restaurant EQUIS",
      venue: "Zadún Ritz-Carlton Reserve, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Zadun+Ritz+Carlton+Reserve+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "ÚLTIMA SEMANA de la temporada limitada de cocina balinesa en EQUIS del Zadún Ritz-Carlton (cierra el viernes 22). Si no han ido, esta es la oportunidad final — sabores auténticos del archipiélago indonesio en uno de los resorts top.",
      tags: [["gastronomía","Internacional"],["lujo","Fine Dining"],["especial","Última semana"]],
      url: "https://www.visitloscabos.travel/event/one-week-only-bali-cuisine-at-equis/3925/"
    },
    {
      priority: 2,
      date: "Hasta el Lun 25",
      icon: "🌸",
      title: "Mes de las Madres — Hilton Los Cabos Beach & Golf Resort",
      venue: "Hilton Los Cabos Beach & Golf Resort",
      mapsUrl: "https://maps.google.com/?q=Hilton+Los+Cabos+Beach+Golf+Resort",
      price: "$$$",
      reservation: true,
      why: "Continúa la celebración extendida del Día de las Madres en el Hilton con menús especiales, spa packages y experiencias temáticas hasta el 25 de mayo. Buena alternativa para detalle entre semana o cierre del mes.",
      tags: [["especial","Día de las Madres"],["lujo","Resort"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Martes 19 · 5:00 PM – 9:00 PM",
      icon: "🎨",
      title: "Sabores San José — Corredor Gastronómico (Martes Cultural)",
      venue: "Centro Histórico, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Plaza+Mijares+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "El centro histórico de San José se transforma en corredor gastronómico — productores locales, estaciones de degustación y presentaciones culturales. Plan económico y muy recomendado entre semana, perfecto para calentar motores antes del Jazz Weekend.",
      tags: [["gastronomía","Gastronómico"],["cultura","Cultural"],["free","Gratis"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 2,
      date: "Jueves 21 · 5:00 PM – 9:00 PM",
      icon: "🖼️",
      title: "Art Walk — Caminata del Arte en San José",
      venue: "Distrito del Arte, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Art+District+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Última semana fuerte del Art Walk antes del cierre de temporada (noviembre–junio). Calle Obregón se cierra al tráfico, +12 galerías abren con refrigerios, música en vivo y los artistas presentes. Plan cultural ideal previo al fin de semana del Jazz.",
      tags: [["cultura","Art Walk"],["free","Gratis"]],
      url: "https://www.artcabo.com/san-jose-del-cabo-art-walk.html"
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
