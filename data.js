// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 11–17 Oct 2026",
  weekDates:     "11 – 17 de Octubre, 2026",
  generatedDate: "11 de Octubre, 2026",

  /* ── CLIMA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Dom 11", emoji:"☁️", desc:"Nublado",              max:32, min:24, rain:2 },
    { day:"Lun 12", emoji:"☁️", desc:"Nublado",              max:32, min:24, rain:12 },
    { day:"Mar 13", emoji:"☁️", desc:"Nublado",              max:32, min:24, rain:14 },
    { day:"Mié 14", emoji:"🌧️", desc:"Llovizna ligera",      max:32, min:24, rain:12 },
    { day:"Jue 15", emoji:"☁️", desc:"Nublado",              max:32, min:24, rain:28 },
    { day:"Vie 16", emoji:"🌤️", desc:"Mayormente despejado", max:30, min:23, rain:8 },
    { day:"Sáb 17", emoji:"☀️", desc:"Despejado",            max:29, min:22, rain:14 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
    { label:"Semana 4–10 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
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
  ══════════════════════════════════════════════════════════════════ */
  specials: [
    {
      priority: 1,
      date: "Dom 11 y Mar 13 · Noche 2 y Noche 3",
      icon: "🎸",
      title: "Sammy Hagar's Birthday Bash — noches 2 y 3",
      venue: "Cabo Wabo Cantina, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Cabo+Wabo+Cantina+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "El show anual más legendario de Cabo: Sammy Hagar y su banda en una cantina de ~600 personas, con invitados sorpresa (el año pasado hubo Belinda Carlisle, Jerry Cantrell y Chad Kroeger). Quedan solo estas dos fechas; la preventa se anunciaba como «última oportunidad» desde agosto, así que es probable que las entradas estén agotadas o solo en reventa. Confirmen disponibilidad en redrocker.com antes de planear.",
      tags: [["especial","Una vez al año"],["","Rock en vivo"]],
      url: "https://www.redrocker.com/"
    },
    {
      priority: 2,
      date: "Mar 13 – Sáb 17 · Llegada de barcos por la tarde",
      icon: "🎣",
      title: "Bisbee's Los Cabos Offshore",
      venue: "Marina Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Marina+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "El torneo de pesca que precede al Black & Blue (20–24 Oct). Gratis para mirar: la marina se llena de ambiente a la hora del pesaje y las tardes de jueves a sábado son lo mejor. Con clima mayormente nublado y baja probabilidad de lluvia, no debería haber cierres de puerto. Horarios exactos de pesaje no publicados.",
      tags: [["free","Gratis"],["especial","Temporada de marlin"]],
      url: "https://www.bisbees.com/tournaments/bisbees-los-cabos-offshore"
    },
    {
      priority: 2,
      date: "Vie 16 · Coronación + Ingrid Contreras y Perdidos de Sinaloa · Sáb 17 · Banda MS",
      icon: "🎪",
      title: "Fiestas Tradicionales de Cabo San Lucas 2026 — arranque",
      venue: "Teatro del Pueblo, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Teatro+del+Pueblo+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Arrancan las fiestas patronales de San Lucas Evangelista (16–20 Oct): coronación de la reina el viernes, Banda MS el sábado. Muy local, ambiente de feria con música regional. Lo que sigue la próxima semana: cabalgata el domingo 18 a las 3 PM y Alfredo Olivas esa noche. Horarios y costo de entrada no publicados en las fuentes: confirmen en el Facebook del Ayuntamiento de Los Cabos.",
      tags: [["cultura","Fiestas patronales"],["especial","Banda MS"]],
      url: "https://www.feriasenmexico.com.mx/fiestas-tradicionales-cabo-san-lucas/"
    },
    {
      priority: 3,
      date: "Vie 16 · Hora por confirmar",
      icon: "🎞️",
      title: "Cinema Pabellón — ciclo Cineteca Nacional",
      venue: "Pabellón Cultural de la República, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Pabellon+Cultural+de+la+Republica+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Cine de autor semanal en la marina de CSL, con el Pabellón recién reabierto. Se anunció «todos los viernes» desde el 10 de octubre. Película, hora y costo no están publicados; revisen las redes del Pabellón. Plan tranquilo si buscan algo distinto a las fiestas.",
      tags: [["cultura","Cineteca Nacional"],["free","Posiblemente gratis"]],
      url: "https://www.loscabos.gob.mx/realiza-instituto-de-la-cultura-y-las-artes-festival-agua-blanca-arte-para-todos-2026-y-reapertura-del-pabellon-cultural-de-la-republica/"
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
