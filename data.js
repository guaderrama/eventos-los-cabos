// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 28 Jun–4 Jul 2026",
  weekDates:     "28 de Junio – 4 de Julio, 2026",
  generatedDate: "28 de Junio, 2026",

  /* ── CLIMA FIN DE SEMANA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Vie 3",  emoji:"☁️", desc:"Nublado",              max:34, min:26, rain:10 },
    { day:"Sáb 4",  emoji:"☁️", desc:"Nublado",              max:33, min:25, rain:0 },
    { day:"Dom 28", emoji:"☀️", desc:"Despejado",            max:35, min:27, rain:0 },
    { day:"Lun 29", emoji:"☁️", desc:"Nublado",              max:36, min:27, rain:4 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
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
      date: "Sábado 4 · 5:30 PM",
      icon: "🎆",
      title: "4th of July by the Sea en Zadún — Cena con fuegos artificiales",
      venue: "Playa Equis, Zadún (a Ritz-Carlton Reserve), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Zadun+Ritz+Carlton+Reserve+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "El plan grande de la semana: el 4 de Julio cae sábado y Zadún lo celebra frente al mar en Playa Equis. Parrilla americana, cocteles de autor, música country en vivo y un espectáculo de fuegos artificiales sobre la bahía. De 5:30 a 9:00 PM, entre el desierto y el Mar de Cortés — el cierre de semana más espectacular. Requiere reservación.",
      tags: [["especial","4th of July"],["gastronomía","Cena & Fuegos"]],
      url: "https://www.visitloscabos.travel/event/celebrate-the-4th-of-july-by-the-sea-at-zad%C3%9An/4277/"
    },
    {
      priority: 1,
      date: "Sábado 4 · 9:00 PM",
      icon: "🎧",
      title: "Tomas Station en Crania — DJ set para cerrar el 4 de Julio",
      venue: "Crania Cabo (Cate & Air Disco), San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Crania+Los+Cabos+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Para quien quiere seguir la noche del 4 de Julio bailando: Tomas Station toca en vivo bajo las icónicas grúas de Crania, el lugar con mejor curaduría musical de Los Cabos. Una sola noche, set íntimo y bailable de house y disco. +21, ID obligatorio.",
      tags: [["música","DJ Set"],["nightlife","House"],["especial","Live"]],
      url: "https://www.cabo.party/event/dj-set-crania-los-cabos-04-july-2026"
    },
    {
      priority: 2,
      date: "Sábado 4 · 1:00 PM",
      icon: "🇺🇸",
      title: "4th of July en Corazón — Beach Club & Rooftop 360 (Médano)",
      venue: "Corazón Cabo Resort, El Médano, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Corazon+Cabo+Resort+El+Medano+Cabo+San+Lucas",
      price: "$$",
      reservation: true,
      why: "La opción accesible y en pleno Médano: BBQ rojo, blanco y azul en el beach club desde la 1 PM (sin cover, solo consumo) y arriba, Rooftop 360 con violín en vivo (6–8 PM) y DJ hasta las 2 AM. El mejor punto para ver los fuegos artificiales sobre la bahía de Cabo San Lucas. Reserva tu mesa.",
      tags: [["especial","4th of July"],["nightlife","Rooftop & Beach"]],
      url: "https://www.corazoncabo.com/cabo-4th-of-july/"
    },
    {
      priority: 2,
      date: "Jueves 2 · Por la noche",
      icon: "🍽️",
      title: "Festival of Flavors con el chef Roberto Alcocer en Mako",
      venue: "Mako, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Mako+Restaurant+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "Noche gastronómica de autor: Mako recibe al chef Roberto Alcocer —estrella Michelin con Malva en el Valle de Guadalupe— para un menú especial frente al mar. Plan ideal entre semana para una cena diferente y de alto nivel. Cupo limitado, requiere reservación.",
      tags: [["gastronomía","Chef invitado"],["especial","Festival"]],
      url: "https://www.visitloscabos.travel/event/festival-of-flavors-with-chef-roberto-alcocer/4134/"
    },
    {
      priority: 2,
      date: "Toda la semana · México juega",
      icon: "⚽",
      title: "Mundial 2026 — Ronda eliminatoria (Watch Party)",
      venue: "Palmilla Football Lounge, One&Only Palmilla, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=One+and+Only+Palmilla+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Semana de octavos y cuartos de final del Mundial 2026, con México como país anfitrión: todo se define. El Palmilla Football Lounge transmite cada partido en pantalla grande frente al mar, con ambiente de celebración. El mejor lugar para vivir la fase decisiva — reserva con anticipación.",
      tags: [["especial","Mundial 2026"],["deporte","Fútbol"]],
      url: "https://www.visitloscabos.travel/event/palmilla-football-lounge/4144/"
    },
    {
      priority: 3,
      date: "Miércoles 1 · 7:30 PM",
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
