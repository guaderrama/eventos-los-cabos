// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 4–10 Oct 2026",
  weekDates:     "4 – 10 de Octubre, 2026",
  generatedDate: "5 de Octubre, 2026",

  /* ── CLIMA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Lun 5",  emoji:"🌦️", desc:"Llovizna",             max:31, min:25, rain:77 },
    { day:"Mar 6",  emoji:"🌦️", desc:"Llovizna",             max:31, min:25, rain:75 },
    { day:"Mié 7",  emoji:"⛈️", desc:"Tormenta eléctrica",   max:32, min:25, rain:90 },
    { day:"Jue 8",  emoji:"⛈️", desc:"Tormenta eléctrica",   max:33, min:27, rain:88 },
    { day:"Vie 9",  emoji:"🌤️", desc:"Mayormente despejado", max:33, min:27, rain:58 },
    { day:"Sáb 10", emoji:"🌦️", desc:"Llovizna",             max:32, min:26, rain:57 },
    { day:"Dom 11", emoji:"☁️", desc:"Nublado",              max:31, min:26, rain:43 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 23–29 Ago",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 2–8 Ago",       url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 12–18 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 5–11 Jul",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
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
      date: "Jue 8 – Sáb 10 · Chef's Table Sáb 6:30 PM",
      icon: "🍷",
      title: "Festival of Flavors con el chef Travis Swikard",
      venue: "Don Manuel's, Waldorf Astoria Los Cabos Pedregal, CSL",
      mapsUrl: "https://maps.google.com/?q=Waldorf+Astoria+Los+Cabos+Pedregal",
      price: "$$$",
      reservation: true,
      why: "Fin de semana gastronómico de una sola edición: Swikard (Callie, San Diego — Bib Gourmand Michelin, formado con Daniel Boulud) trae su cocina mediterránea «Cuisine du Soleil» a Pedregal. Lo mejor para pareja: el viernes 9 cata de Barolo de Fontanafredda con Fabio Bosio (4–5 PM) o la Chef's Table del sábado 10 (6:30 PM). Es en interiores, así que la lluvia no lo arruina. Precios no publicados: reservar en la página del hotel o al +52 624 163 4300.",
      tags: [["especial","Una sola edición"],["","Gastronomía"]],
      url: "https://www.waldorfastorialoscabospedregal.com/culinary/chef-travis-swikard-culinary-weekend/"
    },
    {
      priority: 1,
      date: "Jue 8 – Sáb 10 · Programa completo en la liga",
      icon: "🦅",
      title: "2º Festival de las Aves Los Cabos",
      venue: "Hotel Krystal Grand Los Cabos, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Krystal+Grand+Los+Cabos+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Gratis y abierto al público: tres días de charlas con investigadores de México, EE.UU., Brasil y Panamá, salidas de campo y talleres de jardines para polinizadores con plantas nativas. Para ustedes el plato fuerte es el panel «Miradas que conservan: arte y comunicación visual para la protección de las aves». La sede registrada incluye también el Cerrito del Timbre, así que revisen qué actividad es dónde.",
      tags: [["free","Gratis"],["cultura","Naturaleza + arte"]],
      url: "https://gringogazette.com/event/2nd-los-cabos-bird-festival-2026/"
    },
    {
      priority: 2,
      date: "Mié 7 – Dom 11 · Pesca Jue 8 – Sáb 10",
      icon: "🎣",
      title: "Los Cabos Billfish Tournament — 28ª edición",
      venue: "Marina Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Marina+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "El torneo que abre la temporada de marlin, una semana antes de Bisbee's. Si no compiten, el plan es la marina por la tarde de jueves a sábado para ver regresar los barcos; el horario de pesajes no está publicado. Ojo: con tormenta eléctrica pronosticada miércoles y jueves, Capitanía de Puerto puede cerrar el puerto y mover los días de pesca.",
      tags: [["especial","Temporada de marlin"]],
      url: "https://www.marlinmag.com/tournaments/los-cabos-billfish-tournament"
    },
    {
      priority: 3,
      date: "Martes 6 · 7:00–9:00 PM",
      icon: "🎬",
      title: "Cine en el jardín: «Chavela» en Todos Santos",
      venue: "Librería El Tecolote, Todos Santos",
      mapsUrl: "https://maps.google.com/?q=Libreria+El+Tecolote+Todos+Santos",
      price: "$",
      reservation: true,
      why: "Proyección al aire libre de «Chavela» (sobre Chavela Vargas) en el jardín de la librería, con cena ligera opcional. Boleto $100 MXN en tecolotebookstore.com. Queda a una hora de Cabo: sirve como escapada de martes si lo combinan con cena en el pueblo. Hay 75% de probabilidad de llovizna, así que confirmen en el Facebook de la librería antes de manejar.",
      tags: [["cultura","Cine"],["especial","Una función"]],
      url: "https://gringogazette.com/event/garden-movie-night-chavela/"
    },
    {
      priority: 3,
      date: "Desde el 10 de octubre · Hora por confirmar",
      icon: "🎞️",
      title: "Cinema Pabellón — nuevo ciclo con la Cineteca Nacional",
      venue: "Pabellón Cultural de la República, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Pabellon+Cultural+de+la+Republica+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "El Pabellón Cultural acaba de reabrir tras su rehabilitación y estrena cartelera semanal con la Cineteca Nacional: cine de autor en CSL, algo que casi no hay. Detalle: el anuncio oficial dice «a partir del 10 de octubre, todos los viernes», pero el 10 cae en sábado. Película, hora y costo no están publicados; revisen las redes del Pabellón antes de ir.",
      tags: [["cultura","Cineteca Nacional"],["especial","Estreno de ciclo"]],
      url: "https://www.loscabos.gob.mx/realiza-instituto-de-la-cultura-y-las-artes-festival-agua-blanca-arte-para-todos-2026-y-reapertura-del-pabellon-cultural-de-la-republica/"
    },
    {
      priority: 3,
      date: "Domingo 11 · 7:00 PM (adelanto)",
      icon: "👑",
      title: "Certamen Reina de las Fiestas Tradicionales CSL 2026",
      venue: "Plaza Pública León Cota Collins, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Plaza+Publica+Leon+Cota+Collins+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Arranque de las fiestas patronales de San Lucas Evangelista: elección de la reina el domingo 11. Gratis y muy local, cero turismo. Lo que sigue: coronación el viernes 16 y la cabalgata tradicional el domingo 18 a las 3 PM. La cartelera de artistas todavía no se publica.",
      tags: [["free","Gratis"],["cultura","Fiestas patronales"]],
      url: "https://www.feriasenmexico.com.mx/fiestas-tradicionales-cabo-san-lucas/"
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
