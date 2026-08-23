// ═══════════════════════════════════════════════════════════════════
// DATOS DE LA SEMANA — ÚNICO ARCHIVO QUE CAMBIA CADA DOMINGO
// ═══════════════════════════════════════════════════════════════════
const WEEKLY_DATA = {

  /* ── META ── */
  weekLabel:     "Semana 23–29 Ago 2026",
  weekDates:     "23 – 29 de Agosto, 2026",
  generatedDate: "23 de Agosto, 2026",

  /* ── CLIMA (Open-Meteo, actualizar cada semana) ── */
  weather: [
    { day:"Dom 23", emoji:"🌦️", desc:"Llovizna",  max:34, min:27, rain:65 },
    { day:"Mié 26", emoji:"⛈️", desc:"Tormenta",  max:36, min:28, rain:88 },
    { day:"Vie 28", emoji:"☁️", desc:"Nublado",   max:35, min:27, rain:22 },
    { day:"Sáb 29", emoji:"🌦️", desc:"Llovizna",  max:34, min:28, rain:29 }
  ],

  /* ── ARCHIVO — últimas semanas (agregar una entrada cada domingo) ── */
  archive: [
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
      date: "Sábado 29 · Gran Final",
      icon: "👑",
      title: "Final Miss Universe México 2026",
      venue: "Rancho Tierra Sagrada by Cabo Adventures, CSL",
      mapsUrl: "https://maps.google.com/?q=Rancho+Tierra+Sagrada+Cabo+Adventures+Cabo+San+Lucas",
      price: "$$$",
      reservation: true,
      why: "El evento más grande del año en Los Cabos: 32 delegadas, una por estado, y transmisión nacional. Ojo con la sede — Wikipedia, Milenio y El Heraldo dicen Rancho Tierra Sagrada, pero Corazón Cabo también se anuncia como sede. El desempate: el paquete del hotel ofrece 'transportación a la Gran Final', así que la final NO es en el hotel. Confirmen el domicilio al comprar el boleto.",
      tags: [["especial","Único en el año"],["cultura","TV nacional"]],
      url: "https://instatickets.mx/event/DDKAKSPX1RV5RZ"
    },
    {
      priority: 1,
      date: "Viernes 28 · Hora por confirmar",
      icon: "🍷",
      title: "Beyond the Glass — Master class con Sébastien Pradal",
      venue: "Al Pairo, Solaz, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Al+Pairo+Solaz+San+Jose+del+Cabo",
      price: "$$$",
      reservation: true,
      why: "Pradal es sommelier francés y asesor de la serie 'Drops of God' de Apple TV+. No es un maridaje de menú fijo: es una master class de un solo día. El mejor plan de pareja de la semana. Hora y precio no están publicados — hay que llamar al (624) 144-2173.",
      tags: [["gastronomía","Vino"],["especial","Una sola fecha"]],
      url: "https://www.visitloscabos.travel/event/beyond-the-glass/4425/"
    },
    {
      priority: 1,
      date: "Charla Mié 26 · Galería hasta Vie 28",
      icon: "🎨",
      title: "\"Creativo Massivo Crac\" de Carlos Álvarez — últimos días",
      venue: "Galería Cerrito del Timbre, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Casa+de+la+Cultura+Cerrito+del+Timbre+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Exposición individual irreverente presentada con CALX y Condesa Gin. Cierra el 28 de agosto, así que esta es la última semana para verla. El miércoles 26 hay charla gratuita con el artista. Galería abierta miércoles a sábado de 12 a 8 PM, entrada libre.",
      tags: [["cultura","Gratis"],["especial","Cierra 28 ago"]],
      url: "https://culturaloscabos.gob.mx/actividades/exposicion-creativo-massivo-crac-en-galeria-cerrito-del-timbre-cabo-san-lucas/"
    },
    {
      priority: 2,
      date: "Sábado 29 · 5:00–9:00 PM",
      icon: "🐕",
      title: "Acre Paws Fest",
      venue: "Mango's Orchard, Acre Resort, San José del Cabo",
      mapsUrl: "https://maps.google.com/?q=Acre+Resort+San+Jose+del+Cabo",
      price: "$$",
      reservation: true,
      why: "Festival anual pet-friendly en el huerto de mangos: Puppy Pilates, concurso de belleza canina, música en vivo, vendors de mascotas y estaciones de comida. Lo más relajado y distinto del sábado si no quieren el circo de Miss Universe. Reservar a restaurant@acreresort.com o (624) 172 1021.",
      tags: [["cultura","Pet friendly"],["especial","Anual"]],
      url: "https://www.visitloscabos.travel/event/acre-paws-fest/4396/"
    },
    {
      priority: 2,
      date: "Domingo 23 · 7:30 PM",
      icon: "🎬",
      title: "Cine Verano en tu Playa — función en la arena",
      venue: "Playa El Corsario, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Playa+El+Corsario+Cabo+San+Lucas",
      price: "$",
      reservation: false,
      why: "Cine al aire libre con los pies en la arena, del ICA Los Cabos con Cinema Vagabundo y FOCINE. Gratis, sin reserva, lleven manta y botana. Ojo: hoy hay 65% de probabilidad de lluvia — confirmen en redes del ICA antes de salir.",
      tags: [["cultura","Gratis"],["especial","Hoy"]],
      url: "https://culturaloscabos.gob.mx/actividades/cine-verano-en-tu-playa-funciones-gratuitas-en-los-cabos/"
    },
    {
      priority: 2,
      date: "Jueves 27 y Viernes 28 · Corazón Cabo",
      icon: "✨",
      title: "Miss Universe — Preliminar, traje de baño y White Dinner",
      venue: "Corazón Cabo Resort & Rooftop 360°, Cabo San Lucas",
      mapsUrl: "https://maps.google.com/?q=Corazon+Cabo+Resort+Spa+Cabo+San+Lucas",
      price: "$$",
      reservation: true,
      why: "Si la Gran Final sale cara, los eventos satélite son la entrada barata al certamen: preliminar el jueves ($1,300), after party con meet & greet de las 32 delegadas ($700) y el viernes la competencia de traje de baño — la primera en la historia de Miss Universe México. Dress code total white en todos.",
      tags: [["especial","Boletos"],["cultura","Dress code blanco"]],
      url: "https://www.corazoncabo.com/miss-universe-mexico/"
    },
    {
      priority: 3,
      date: "Lunes 24 · Hora por confirmar",
      icon: "⛪",
      title: "305 Aniversario de la Misión de Santiago Apóstol",
      venue: "Casa de la Cultura, Santiago, Los Cabos",
      mapsUrl: "https://maps.google.com/?q=Casa+de+la+Cultura+Santiago+Los+Cabos+BCS",
      price: "$",
      reservation: false,
      why: "'Fiesta del Intercambio y la Memoria' por los 305 años de la misión (1721–2026): presentaciones de libros, exposiciones y charlas históricas. Gratis, una vez al año, y el único plan de la semana en los pueblos de la sierra. Cero turismo.",
      tags: [["cultura","Gratis"],["especial","Anual"]],
      url: "https://culturaloscabos.gob.mx/actividades/celebracion-del-305-aniversario-de-la-mision-de-santiago-apostol-en-los-cabos/"
    },
    {
      priority: 3,
      date: "Toda la semana · Temporada",
      icon: "🌶️",
      title: "Temporada de Chiles en Nogada — Chef José Lazcarro",
      venue: "Pitahayas, Hacienda del Mar, Corredor Turístico",
      mapsUrl: "https://maps.google.com/?q=Pitahayas+Hacienda+del+Mar+Los+Cabos",
      price: "$$$",
      reservation: true,
      why: "Menú de tres tiempos en $1,290 con copa de Santo Tomás. El chile en nogada solo existe en temporada y esta corre hasta el 30 de septiembre — si se les pasa, es hasta el año que viene.",
      tags: [["gastronomía","Menú temporada"],["especial","Hasta 30 sep"]],
      url: "https://activities.marriott.com/activity/XCWNYY"
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
