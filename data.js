// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 5–11 Jul 2026",
  weekDates:     "5 – 11 de Julio, 2026",
  generatedDate: "5 de Julio, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 10", emoji:"🌧️", desc:"Lluvia ligera",         max:32, min:25, rain:32 },
    { day:"Sáb 11", emoji:"🌧️", desc:"Lluvia ligera",         max:31, min:26, rain:45 },
    { day:"Dom 5",  emoji:"🌤️", desc:"Mayormente despejado",  max:34, min:26, rain:0 },
    { day:"Lun 6",  emoji:"🌤️", desc:"Mayormente despejado",  max:32, min:25, rain:0 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 7–13 Jun",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 31 May–6 Jun",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 24–30 May",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Jue 9 – Sáb 11 · Cuartos de Final",
      icon: "⚽",
      title: "Mundial 2026 — Semana decisiva: octavos y cuartos de final",
      venue: "Palmilla Football Lounge, One&Only Palmilla, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=One+and+Only+Palmilla+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "La semana más intensa del Mundial: los últimos octavos se juegan de domingo a martes y los cuartos de final de jueves a sábado (9, 10 y 11 de julio). El Palmilla Football Lounge transmite cada partido en pantalla grande frente al mar — el mejor lugar de Los Cabos para vivir la fase donde todo se define. Reserva con anticipación.",
      tags: [["especial","Mundial 2026"],["deporte","Fútbol"]],
      url: "https://www.visitloscabos.travel/event/palmilla-football-lounge/4144/"
    },
    {
      priority: 1,
      date: "Sábado 11 · 7:00 AM–3:00 PM",
      icon: "🎣",
      title: "Cabo Queens — Primer torneo de pesca femenil de Los Cabos",
      venue: "IGY Marina (frente a Casa Country), Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=IGY+Marina+Cabo+San+Lucas",
      price: "$$",
      reservation: true,
      why: "Historia local: el primer torneo de pesca exclusivo para mujeres en Los Cabos, con bolsa garantizada de $250,000 MXN y causa benéfica (El Carril Rosa, Boys & Girls Club BCS y OncoLoreto). $8,000 MXN por equipo de 4. Registro el viernes 10 de 2–8 PM en la marina; día de pesca el sábado. Ideal para Imelda y amigas — o para ir a ver el ambiente de la marina y la pesada.",
      tags: [["especial","Primera edición"],["deporte","Pesca"]],
      url: "https://www.visitloscabos.travel/event/cabo-queens-los-cabos-fishing-tournament/4117/"
    },
    {
      priority: 2,
      date: "Domingo 5 · 5:00–10:00 PM",
      icon: "🍽️",
      title: "Festival of Flavors — Última noche del chef Roberto Alcocer",
      venue: "Don Manuel's, Waldorf Astoria Pedregal, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Waldorf+Astoria+Los+Cabos+Pedregal",
      price: "$$$",
      reservation: true,
      why: "Hoy domingo cierra el fin de semana culinario del chef Roberto Alcocer —estrella Michelin con Valle (Oceanside) y Malva (Valle de Guadalupe)— en Don Manuel's del Waldorf Astoria Pedregal. Cocina mexicana moderna de Baja en formato íntimo. Última oportunidad, requiere reservación.",
      tags: [["gastronomía","Chef Michelin"],["especial","Última noche"]],
      url: "https://www.visitloscabos.travel/event/festival-of-flavors-with-chef-roberto-alcocer/4134/"
    },
    {
      priority: 2,
      date: "Miércoles 8 · 6:30 PM",
      icon: "🤝",
      title: "Dinner with Strangers by Ojos — Cena entre desconocidos",
      venue: "GAMBA Café, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=GAMBA+Cafe+San+Jose+del+Cabo",
      price: "$",
      reservation: true,
      why: "Concepto diferente a media semana: una cena comunitaria donde te sientas con gente que no conoces, en GAMBA Café en San José. Entrada libre con registro previo — solo pagas lo que consumas. Buen plan para conocer a la comunidad creativa local sin salir de San José.",
      tags: [["social","Comunidad"],["gastronomía","Cena"]],
      url: "https://www.eventbrite.com.mx/e/dinner-with-strangers-by-ojos-registration-1992370695383"
    },
    {
      priority: 3,
      date: "Martes 7 · Al atardecer",
      icon: "🌙",
      title: "Moon Zipping Fire — Tirolesas nocturnas + UTVs al atardecer",
      venue: "Wild Canyon Adventure Park, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Wild+Canyon+Adventure+Park+Los+Cabos",
      price: "$$",
      reservation: true,
      why: "Aventura fuera de la rutina: recorrido en UTV al atardecer por el Cañón del Diablo y después tirolesas de noche con antorchas de fuego. Con el calor de julio, hacer la adrenalina de noche es la jugada inteligente. Requiere reservación.",
      tags: [["aventura","Nocturna"],["especial","Experiencia"]],
      url: "https://www.visitloscabos.travel/event/moon-zipping-fire%3a-sunset-utvs-%2b-night-time-ziplines/2633/"
    },
    {
      priority: 3,
      date: "Miércoles 8 · 7:30 PM",
      icon: "🎷",
      title: "Daline Jones & The Diego Ramírez Trio — Jazz en vivo",
      venue: "Jazz on the Rocks, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Jazz+on+the+Rocks+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "Noche de jazz y soul con la vocalista Daline Jones acompañada del Diego Ramírez Trio en el clásico Jazz on the Rocks. Plan tranquilo y musical a media semana, en el corazón de San José. Llega temprano para buen lugar.",
      tags: [["música","Jazz en vivo"],["cultura","Concierto"]],
      url: "https://www.visitloscabos.travel/event/daline-jones-%26-the-diego-ram%C3%8Drez-trio/1943/"
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
