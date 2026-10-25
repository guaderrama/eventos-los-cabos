// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  weekLabel:     "Semana 25–31 Oct 2026",
  weekDates:     "25 – 31 de Octubre, 2026",
  generatedDate: "25 de Octubre, 2026",

  weather: [
    { day:"Dom 25", emoji:"🌤️", desc:"Mayormente despejado", max:32, min:24, rain:18 },
    { day:"Lun 26", emoji:"⛈️", desc:"Chubascos", max:31, min:23, rain:61 },
    { day:"Mar 27", emoji:"⛈️", desc:"Tormenta eléctrica", max:32, min:23, rain:94 },
    { day:"Mié 28", emoji:"⛈️", desc:"Tormenta eléctrica", max:26, min:23, rain:91 },
    { day:"Jue 29", emoji:"🌤️", desc:"Mayormente despejado", max:31, min:23, rain:59 },
    { day:"Vie 30", emoji:"🌧️", desc:"Llovizna intensa", max:28, min:23, rain:51 },
    { day:"Sáb 31", emoji:"🌦️", desc:"Llovizna ligera", max:30, min:23, rain:29 }
  ],

  archive: [
    { label:"Semana 18–24 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 11–17 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 4–10 Oct",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 23–29 Ago",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 2–8 Ago",       url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 19–25 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 12–18 Jul",     url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 5–11 Jul",      url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 28 Jun–4 Jul",  url:"https://guaderrama.github.io/eventos-los-cabos/" },
    { label:"Semana 21–27 Jun",     url:"https://guaderrama.github.io/eventos-los-cabos/" }
  ],

  specials: [
    {
      priority: 1,
      date: "Sáb 31 · Noche de Halloween (continúa 1–2 Nov)",
      icon: "🎃",
      title: "Halloween & Weekend of the Dead en El Squid Roe",
      venue: "El Squid Roe, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Squid+Roe+Cabo+San+Lucas",
      price: "$$",
      reservation: false,
      why: "Tres noches de fiesta (31 Oct–2 Nov) con concurso de disfraces (premio de $1,000 USD el 31), música en vivo y decoración temática; participan en el desfile del 2 de Nov. Hora y cover no publicados. Llovizna ligera probable el sábado.",
      tags: [["especial","Halloween"],["","Música en vivo"]],
      url: "https://www.visitloscabos.travel/event/halloween-in-cabo/3614/"
    },
    {
      priority: 1,
      date: "Sáb 31 · Hora por confirmar",
      icon: "👻",
      title: "Halloween en The Rooftop — concurso de disfraces",
      venue: "The Rooftop, The Cape, a Thompson Hotel",
      mapsUrl: "https://maps.google.com/?q=The+Cape+Thompson+Hotel+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "Cocteles con vista y concurso de disfraces con premios para los 3 mejores. La opción más elegante de la noche de Halloween; reserven con anticipación. Hora y precio no publicados.",
      tags: [["especial","Halloween"]],
      url: "https://www.visitaloscabos.travel/blog-spanish/post/halloween-en-los-cabos-disfraces-fiestas-musica-y-comunidad/"
    },
    {
      priority: 2,
      date: "31 Oct – 3 Nov · Sin horario específico",
      icon: "💀",
      title: "Día de Muertos Los Cabos 2026",
      venue: "Playa El Médano, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Playa+El+Medano+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Celebración cultural de varios días en El Médano (altares, ambiente tradicional); el desfile está anotado para el 2 de Nov. Programa y horarios por confirmar en Visit Los Cabos.",
      tags: [["cultura","Tradición"],["free","Probablemente gratis"]],
      url: "https://www.visitloscabos.travel/events/annual-events/day-of-the-dead"
    },
    {
      priority: 2,
      date: "Mié 28 · Hora por confirmar",
      icon: "🎷",
      title: "Daline Jones & The Diego Ramírez Trio",
      venue: "Jazz on the Rocks, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Jazz+on+the+Rocks+San+Jose+del+Cabo",
      price: "$$",
      reservation: false,
      why: "Show especial de jazz en vivo, fuera del jazz de rutina del venue. Ojo: pronóstico de tormenta eléctrica (91%) ese día; ideal por ser plan bajo techo.",
      tags: [["especial","Jazz"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 3,
      date: "Jue 29 · Hora por confirmar",
      icon: "🎨",
      title: "Música en vivo en Patricia Mendoza Art Gallery",
      venue: "Patricia Mendoza Art Gallery, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Patricia+Mendoza+Art+Gallery+San+Jose+del+Cabo",
      price: "$",
      reservation: false,
      why: "Noche de arte y música en vivo; combina bien con una vuelta por el Art District. Hora y costo no publicados.",
      tags: [["cultura","Arte"],["","Música en vivo"]],
      url: "https://www.visitloscabos.travel/events/"
    },
    {
      priority: 3,
      date: "Mar 27 · Atardecer y noche",
      icon: "🔥",
      title: "Moon Zipping Fire: UTVs al atardecer + tirolesas nocturnas",
      venue: "Wild Canyon Adventures",
      mapsUrl: "https://maps.google.com/?q=Wild+Canyon+Adventures+Los+Cabos",
      price: "$$$",
      reservation: true,
      why: "Aventura nocturna única de luna. Riesgo alto de cancelación: pronóstico de tormenta (94%) ese día; confirmen con el operador antes.",
      tags: [["especial","Aventura"]],
      url: "https://www.visitloscabos.travel/events/"
    }
  ],

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
