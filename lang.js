/* ═══════════════════════════════════════════════
   lang.js  —  Deltas in the Americas
   Taal-switcher: EN / ES / PT
   Gebruik: <script src="../lang.js"></script>   (delta-pagina's)
            <script src="lang.js"></script>       (index / compare / contact)
   ═══════════════════════════════════════════════ */

const TRANSLATIONS = {
  /* ── Universal nav & shared ── */
  nav_overview: { en: "← Overview", es: "← Resumen", pt: "← Visão Geral" },
  nav_compare: { en: "Compare", es: "Comparar", pt: "Comparar" },
  nav_contact: { en: "Contact", es: "Contacto", pt: "Contato" },
  nav_language: { en: "Language", es: "Idioma", pt: "Idioma" },
  delta_eyebrow: {
    en: "Expedition Field Notes",
    es: "Notas de Expedición",
    pt: "Notas de Expedição",
  },
  delta_field_notes: {
    en: "Field Notes",
    es: "Notas de Campo",
    pt: "Notas de Campo",
  },
  delta_activities: {
    en: "Activities &",
    es: "Actividades &",
    pt: "Atividades &",
  },
  delta_adventures: { en: "Adventures", es: "Aventuras", pt: "Aventuras" },
  delta_gallery: {
    en: "Delta Gallery",
    es: "Galería del Delta",
    pt: "Galeria do Delta",
  },
  delta_bay_gallery: {
    en: "Bay Gallery",
    es: "Galería de la Bahía",
    pt: "Galeria da Baía",
  },
  /* ── Homepage ── */
  home_intro_label: {
    en: "Field Notes",
    es: "Notas de Campo",
    pt: "Notas de Campo",
  },
  home_intro_h2: {
    en: "The Earth's Living Veins",
    es: "Las Venas Vivas de la Tierra",
    pt: "As Veias Vivas da Terra",
  },
  home_adventure_label: {
    en: "Next Step",
    es: "Próximo Paso",
    pt: "Próximo Passo",
  },
  home_adventure_h2: {
    en: "Plan Your Adventure",
    es: "Planifica tu Aventura",
    pt: "Planeje sua Aventura",
  },
  home_adventure_btn: {
    en: "Book your trip",
    es: "Reserva tu viaje",
    pt: "Reserve sua viagem",
  },
  home_section_h2_1: { en: "Explore the", es: "Explora los", pt: "Explore os" },
  home_section_h2_2: { en: "Delta's", es: "Deltas", pt: "Deltas" },
  home_explore_cta: { en: "Explore", es: "Explorar", pt: "Explorar" },
  /* ── Compare ── */
  compare_h1: {
    en: "Delta Explorer",
    es: "Explorador de Deltas",
    pt: "Explorador de Deltas",
  },
  /* ── Contact ── */
  contact_h1: { en: "Contact", es: "Contacto", pt: "Contato" },
  contact_h2_touch: {
    en: "Get in Touch",
    es: "Contáctanos",
    pt: "Entre em Contato",
  },
  contact_h2_info: {
    en: "Contact Info",
    es: "Info de Contacto",
    pt: "Info de Contato",
  },
  contact_label_name: { en: "Name", es: "Nombre", pt: "Nome" },
  contact_label_email: { en: "Email", es: "Correo electrónico", pt: "E-mail" },
  contact_label_subject: { en: "Subject", es: "Asunto", pt: "Assunto" },
  contact_label_msg: { en: "Message", es: "Mensaje", pt: "Mensagem" },
  contact_ph_name: {
    en: "Your full name",
    es: "Tu nombre completo",
    pt: "Seu nome completo",
  },
  contact_ph_email: {
    en: "your@email.com",
    es: "tu@email.com",
    pt: "seu@email.com",
  },
  contact_ph_msg: {
    en: "Write your message here...",
    es: "Escribe tu mensaje aquí...",
    pt: "Escreva sua mensagem aqui...",
  },
  contact_btn_send: {
    en: "Send Message",
    es: "Enviar Mensaje",
    pt: "Enviar Mensagem",
  },
  contact_success: {
    en: "Your message has been sent. We'll be in touch soon.",
    es: "Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.",
    pt: "Sua mensagem foi enviada. Entraremos em contato em breve.",
  },
  contact_opt_general: {
    en: "General Question",
    es: "Pregunta General",
    pt: "Pergunta Geral",
  },
  contact_opt_data: {
    en: "Delta Data / Statistics",
    es: "Datos del Delta / Estadísticas",
    pt: "Dados do Delta / Estatísticas",
  },
  contact_opt_collab: {
    en: "Collaboration",
    es: "Colaboración",
    pt: "Colaboração",
  },
  contact_opt_other: { en: "Other", es: "Otro", pt: "Outro" },
  miss_stat1_value: { en: "Mar–May", es: "Mar–May", pt: "Mar–Mai" },
  miss_stat1_label: {
    en: "Best Season",
    es: "Mejor Época",
    pt: "Melhor Época",
  },
  miss_stat1_desc: {
    en: "Warm weather & wildflowers",
    es: "Clima cálido y flores silvestres",
    pt: "Clima quente e flores silvestres",
  },
  miss_stat2_value: { en: "400+", es: "400+", pt: "400+" },
  miss_stat2_label: { en: "Species", es: "Especies", pt: "Espécies" },
  miss_stat2_desc: {
    en: "Wildlife to discover",
    es: "Fauna por descubrir",
    pt: "Fauna para descobrir",
  },
  miss_stat3_value: { en: "3,730 km", es: "3.730 km", pt: "3.730 km" },
  miss_stat3_label: {
    en: "River Length",
    es: "Longitud del Río",
    pt: "Comprimento do Rio",
  },
  miss_stat3_desc: {
    en: "To explore by boat",
    es: "Para explorar en barco",
    pt: "Para explorar de barco",
  },
  miss_stat4_value: {
    en: "World-class",
    es: "De primer nivel",
    pt: "De classe mundial",
  },
  miss_stat4_label: { en: "Cuisine", es: "Gastronomía", pt: "Gastronomia" },
  miss_stat4_desc: {
    en: "Creole & Cajun cooking",
    es: "Cocina Criolla y Cajún",
    pt: "Culinária Crioula e Cajun",
  },
  miss_ch1_title: {
    en: "When to Visit",
    es: "Cuándo Visitar",
    pt: "Quando Visitar",
  },
  miss_ch1_p1: {
    en: "Spring, from March through May, is the best time to visit the Mississippi Delta. The weather is warm and pleasant, wildflowers bloom across the wetlands, and migratory birds fill the skies. It is the perfect season to explore the bayous by boat, stroll through New Orleans' historic neighborhoods, and enjoy open-air festivals without the intense summer heat.",
    es: "La primavera, de marzo a mayo, es la mejor época para visitar el Delta del Mississippi. El clima es cálido y agradable, las flores silvestres florecen en los humedales y las aves migratorias llenan los cielos. Es la estación perfecta para explorar los bayous en barco, pasear por los barrios históricos de Nueva Orleans y disfrutar de festivales al aire libre sin el intenso calor del verano.",
    pt: "A primavera, de março a maio, é a melhor época para visitar o Delta do Mississippi. O clima é quente e agradável, as flores silvestres florescem nos pântanos e as aves migratórias enchem os céus. É a estação perfeita para explorar os bayous de barco, passear pelos bairros históricos de Nova Orleans e desfrutar de festivais ao ar livre sem o calor intenso do verão.",
  },
  miss_ch1_p2: {
    en: "Autumn is a great second option, with cooler temperatures and fewer crowds. If you love jazz and local culture, plan your trip around the New Orleans Jazz and Heritage Festival in late April and early May, one of the most celebrated music events in the world.",
    es: "El otoño es una excelente segunda opción, con temperaturas más frescas y menos afluencia de turistas. Si te encanta el jazz y la cultura local, planifica tu viaje en torno al Festival de Jazz y Patrimonio de Nueva Orleans a finales de abril y principios de mayo, uno de los eventos musicales más celebrados del mundo.",
    pt: "O outono é uma excelente segunda opção, com temperaturas mais amenas e menos multidões. Se você ama jazz e cultura local, planeje sua viagem em torno do Festival de Jazz e Patrimônio de Nova Orleans no final de abril e início de maio, um dos eventos musicais mais celebrados do mundo.",
  },
  miss_break1_label: {
    en: "New Orleans Jazz & Heritage Festival",
    es: "Festival de Jazz y Patrimonio de Nueva Orleans",
    pt: "Festival de Jazz e Patrimônio de Nova Orleans",
  },
  miss_ch2_title: {
    en: "Wildlife You Will Not Forget",
    es: "Fauna Que No Olvidarás",
    pt: "Fauna Que Você Não Vai Esquecer",
  },
  miss_ch2_p1: {
    en: "The Mississippi Delta is one of the most spectacular places in North America to experience wildlife up close. Over 400 species call this region home, from American alligators gliding through the cypress swamps to roseate spoonbills wading in the shallow marshes. Whether you are a keen birdwatcher or simply someone who loves nature, the delta will leave you speechless.",
    es: "El Delta del Mississippi es uno de los lugares más espectaculares de América del Norte para observar la fauna de cerca. Más de 400 especies llaman hogar a esta región, desde caimanes americanos deslizándose por los pantanos de cipreses hasta espátulas rosadas vadeando en los pantanos poco profundos. Tanto si eres un observador de aves entusiasta como si simplemente amas la naturaleza, el delta te dejará sin palabras.",
    pt: "O Delta do Mississippi é um dos lugares mais espetaculares da América do Norte para observar a fauna de perto. Mais de 400 espécies chamam esta região de lar, desde jacarés americanos deslizando pelos pântanos de ciprestes até colhereiros rosados vadejando nos pântanos rasos. Seja você um observador de aves entusiasmado ou simplesmente alguém que ama a natureza, o delta vai deixá-lo sem palavras.",
  },
  miss_ch2_p2: {
    en: "The delta sits along the Mississippi Flyway, one of the great bird migration routes of the continent. Every spring and autumn, millions of birds pass through, making it a dream destination for wildlife photographers and nature lovers alike.",
    es: "El delta se encuentra a lo largo de la Ruta Migratoria del Mississippi, una de las grandes rutas de migración de aves del continente. Cada primavera y otoño, millones de aves pasan por aquí, convirtiéndolo en un destino de ensueño tanto para fotógrafos de naturaleza como para amantes de la fauna.",
    pt: "O delta situa-se ao longo da Rota Migratória do Mississippi, uma das grandes rotas de migração de aves do continente. A cada primavera e outono, milhões de aves passam por aqui, tornando-o um destino dos sonhos para fotógrafos de natureza e amantes da fauna.",
  },
  miss_break2_label: {
    en: "Mississippi Flyway, millions of birds migrate each season",
    es: "Ruta Migratoria del Mississippi, millones de aves migran cada temporada",
    pt: "Rota Migratória do Mississippi, milhões de aves migram a cada temporada",
  },
  miss_ch3_title: {
    en: "A River Worth Exploring",
    es: "Un Río que Vale la Pena Explorar",
    pt: "Um Rio que Vale Explorar",
  },
  miss_ch3_p1: {
    en: "The Mississippi River stretches 3,730 kilometers from the forests of Minnesota all the way to the Gulf of Mexico, and its final stretch through Louisiana is unlike anything else on Earth. Here the river splits into a web of channels, bayous, and waterways that open up into a vast coastal landscape of marshes, barrier islands, and open water.",
    es: "El río Mississippi se extiende 3.730 kilómetros desde los bosques de Minnesota hasta el Golfo de México, y su tramo final a través de Luisiana es como ningún otro lugar en la Tierra. Aquí el río se divide en una red de canales, bayous y vías fluviales que se abren en un vasto paisaje costero de marismas, islas barrera y aguas abiertas.",
    pt: "O rio Mississippi se estende por 3.730 quilômetros desde as florestas de Minnesota até o Golfo do México, e seu trecho final pela Louisiana é diferente de qualquer outro lugar na Terra. Aqui o rio se divide em uma rede de canais, bayous e vias fluviais que se abrem em uma vasta paisagem costeira de pântanos, ilhas barreira e águas abertas.",
  },
  miss_ch3_p2: {
    en: "Renting a boat or joining a river cruise is one of the most memorable ways to take in the delta. You can glide past ancient cypress trees draped in Spanish moss, spot herons fishing along the banks, and watch the sun set over a horizon with no buildings in sight.",
    es: "Alquilar un barco o unirse a un crucero fluvial es una de las formas más memorables de recorrer el delta. Puedes deslizarte junto a antiguos cipreses cubiertos de musgo español, avistar garzas pescando a lo largo de las orillas y ver el sol ponerse sobre un horizonte sin edificios a la vista.",
    pt: "Alugar um barco ou participar de um cruzeiro fluvial é uma das formas mais memoráveis de conhecer o delta. Você pode deslizar por antigos ciprestes cobertos de musgo espanhol, avistar garças pescando ao longo das margens e assistir ao pôr do sol sobre um horizonte sem prédios à vista.",
  },
  miss_break3_label: {
    en: "Ancient cypress trees, some over 500 years old",
    es: "Antiguos cipreses, algunos de más de 500 años",
    pt: "Ciprestes antigos, alguns com mais de 500 anos",
  },
  miss_ch4_title: {
    en: "Eat, Drink & Discover",
    es: "Come, Bebe y Descubre",
    pt: "Comer, Beber e Descobrir",
  },
  miss_ch4_p1: {
    en: "No visit to the Mississippi Delta is complete without sitting down to a proper Creole or Cajun meal. The delta's waters produce some of the finest seafood in the world, and locals have been turning shrimp, crawfish, oysters, and blue crab into extraordinary dishes for generations.",
    es: "Ninguna visita al Delta del Mississippi está completa sin sentarse a comer una buena comida criolla o cajún. Las aguas del delta producen algunos de los mejores mariscos del mundo, y los lugareños llevan generaciones convirtiendo camarones, cangrejos de río, ostras y cangrejos azules en platos extraordinarios.",
    pt: "Nenhuma visita ao Delta do Mississippi está completa sem sentar-se para uma refeição criolla ou cajun. As águas do delta produzem alguns dos melhores frutos do mar do mundo, e os moradores locais há gerações transformam camarões, lagostins, ostras e caranguejos azuis em pratos extraordinários.",
  },
  miss_ch4_p2: {
    en: "Beyond the plate, the delta is a place of deep cultural richness. New Orleans is famous the world over for its music, its festivals, and its unique blend of French, African, and Caribbean influences. Wander through the French Quarter, catch a live jazz performance on Frenchmen Street, or explore the colorful markets and antique shops.",
    es: "Más allá del plato, el delta es un lugar de profunda riqueza cultural. Nueva Orleans es famosa en todo el mundo por su música, sus festivales y su singular mezcla de influencias francesas, africanas y caribeñas. Pasea por el Barrio Francés, asiste a una actuación de jazz en vivo en Frenchmen Street o explora los coloridos mercados y tiendas de antigüedades.",
    pt: "Além da mesa, o delta é um lugar de profunda riqueza cultural. Nova Orleans é famosa no mundo todo por sua música, seus festivais e sua mistura única de influências francesas, africanas e caribenhas. Passeie pelo Bairro Francês, assista a uma performance de jazz ao vivo na Frenchmen Street, ou explore os coloridos mercados e antiquários.",
  },
  miss_act_intro: {
    en: "Discover the many ways to experience the Mississippi Delta, from silent bayou cruises to the vibrant streets of New Orleans.",
    es: "Descubre las muchas formas de vivir el Delta del Mississippi, desde silenciosos cruceros por el bayou hasta las vibrantes calles de Nueva Orleans.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Mississippi, desde silenciosos cruzeiros pelo bayou até as vibrantes ruas de Nova Orleans.",
  },
  miss_act1_tag: { en: "Experience", es: "Experiencia", pt: "Experiência" },
  miss_act1_name: {
    en: "Swamp Tours",
    es: "Tours por los Pantanos",
    pt: "Tours pelo Pântano",
  },
  miss_act1_desc: {
    en: "Glide through ancient cypress swamps and encounter alligators, turtles, and exotic birds up close. Guided swamp tours offer an unforgettable look into the mysterious heart of the Louisiana bayou.",
    es: "Deslízate por antiguos pantanos de cipreses y encuentra de cerca caimanes, tortugas y aves exóticas. Los tours guiados por los pantanos ofrecen una visión inolvidable del misterioso corazón del bayou de Luisiana.",
    pt: "Deslize por antigos pântanos de cipreste e encontre de perto jacarés, tartarugas e aves exóticas. Os tours guiados pelos pântanos oferecem uma visão inesquecível do misterioso coração do bayou da Louisiana.",
  },
  miss_act2_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  miss_act2_name: {
    en: "Jazz & Cultural Heritage",
    es: "Jazz y Patrimonio Cultural",
    pt: "Jazz e Patrimônio Cultural",
  },
  miss_act2_desc: {
    en: "The birthplace of jazz, blues, and Creole culture. Explore vibrant music festivals and the rich culinary traditions of New Orleans.",
    es: "El lugar de nacimiento del jazz, el blues y la cultura criolla. Explora vibrantes festivales de música y las ricas tradiciones culinarias de Nueva Orleans.",
    pt: "O berço do jazz, do blues e da cultura crioula. Explore vibrantes festivais de música e as ricas tradições culinárias de Nova Orleans.",
  },
  miss_act3_tag: { en: "Thrill", es: "Emoción", pt: "Emoção" },
  miss_act3_name: {
    en: "Airboat Rides",
    es: "Paseos en Aerodeslizador",
    pt: "Passeios de Airboat",
  },
  miss_act3_desc: {
    en: "Race across shallow marshes on a thrilling airboat adventure, reaching the remote, untouched corners of the delta ecosystem.",
    es: "Cruza los pantanos poco profundos en una emocionante aventura en aerodeslizador, llegando a los rincones remotos e intactos del ecosistema del delta.",
    pt: "Percorra os pântanos rasos em uma emocionante aventura de airboat, chegando aos cantos remotos e intocados do ecossistema do delta.",
  },
  miss_act4_tag: { en: "City", es: "Ciudad", pt: "Cidade" },
  miss_act4_name: {
    en: "French Quarter",
    es: "Barrio Francés",
    pt: "Bairro Francês",
  },
  miss_act4_desc: {
    en: "Every street corner tells a story in this vibrant, history-soaked neighborhood.",
    es: "Cada esquina cuenta una historia en este vibrante barrio impregnado de historia.",
    pt: "Cada esquina conta uma história neste vibrante bairro impregnado de história.",
  },
  miss_gal1_cap: {
    en: "Aerial view of the Mississippi River branching into the Gulf of Mexico.",
    es: "Vista aérea del río Mississippi desembocando en el Golfo de México.",
    pt: "Vista aérea do rio Mississippi desembocando no Golfo do México.",
  },
  miss_gal2_cap: {
    en: "Ancient cypress trees draped in Spanish moss in the Louisiana bayou.",
    es: "Antiguos cipreses cubiertos de musgo español en el bayou de Luisiana.",
    pt: "Antigos ciprestes cobertos de musgo espanhol no bayou da Louisiana.",
  },
  miss_gal3_cap: {
    en: "Brown pelicans and egrets nesting along the Louisiana coastline.",
    es: "Pelícanos pardos y garzas anidando a lo largo de la costa de Luisiana.",
    pt: "Pelicanos pardos e garças aninhando ao longo da costa da Louisiana.",
  },
  miss_gal4_cap: {
    en: "Golden light over the winding waterways at dusk.",
    es: "Luz dorada sobre los sinuosos canales al anochecer.",
    pt: "Luz dourada sobre os sinuosos canais ao entardecer.",
  },
  miss_gal5_cap: {
    en: "American alligators at rest in the cypress swamps.",
    es: "Caimanes americanos en reposo en los pantanos de cipreses.",
    pt: "Jacarés americanos em repouso nos pântanos de cipreste.",
  },
  galv_stat1_value: { en: "1,600 km²", es: "1.600 km²", pt: "1.600 km²" },
  galv_stat1_label: { en: "Area", es: "Área", pt: "Área" },
  galv_stat1_desc: {
    en: "Total estuary surface",
    es: "Superficie total del estuario",
    pt: "Superfície total do estuário",
  },
  galv_stat2_value: { en: "~7 Million", es: "~7 Millones", pt: "~7 Milhões" },
  galv_stat2_label: { en: "Population", es: "Población", pt: "População" },
  galv_stat2_desc: {
    en: "Regional inhabitants",
    es: "Habitantes regionales",
    pt: "Habitantes regionais",
  },
  galv_stat3_value: { en: "600 km", es: "600 km", pt: "600 km" },
  galv_stat3_label: { en: "Coastline", es: "Costa", pt: "Costa" },
  galv_stat3_desc: {
    en: "Channels & shoreline",
    es: "Canales y costa",
    pt: "Canais e costa",
  },
  galv_stat4_value: {
    en: "$178 Billion",
    es: "$178 mil millones",
    pt: "$178 bilhões",
  },
  galv_stat4_label: {
    en: "Economic Value",
    es: "Valor Económico",
    pt: "Valor Econômico",
  },
  galv_stat4_desc: {
    en: "Annual contribution",
    es: "Contribución anual",
    pt: "Contribuição anual",
  },
  galv_ch1_title: {
    en: "Area & Geography",
    es: "Área y Geografía",
    pt: "Área e Geografia",
  },
  galv_ch1_p1: {
    en: "Explore the vast waters and winding channels of Galveston Bay, where freshwater from the Trinity and San Jacinto Rivers meets the Gulf of Mexico. Paddle through marshes, glide across open waters, and discover hidden coves teeming with wildlife. Every turn reveals a new view, from quiet tidal flats to sunlit oyster reefs.",
    es: "Explora las vastas aguas y los sinuosos canales de la Bahía de Galveston, donde el agua dulce de los ríos Trinity y San Jacinto se encuentra con el Golfo de México. Rema por los pantanos, deslízate por aguas abiertas y descubre calas escondidas repletas de vida silvestre. Cada giro revela una nueva vista, desde tranquilas llanuras de mareas hasta arrecifes de ostras bañados por el sol.",
    pt: "Explore as vastas águas e os sinuosos canais da Baía de Galveston, onde a água doce dos rios Trinity e San Jacinto encontra o Golfo do México. Reme pelos pântanos, deslize pelas águas abertas e descubra enseadas escondidas repletas de vida selvagem. Cada curva revela uma nova vista, desde tranquilas planícies de marés até recifes de ostras banhados pelo sol.",
  },
  galv_ch1_p2: {
    en: "Get ready to experience the bay's dramatic contrasts, from wide open expanses to narrow twisting waterways. Watch the tides shift and the wildlife come alive, making each visit a unique adventure. Photographers and nature lovers alike will find endless opportunities to capture the beauty of this dynamic ecosystem.",
    es: "Prepárate para experimentar los dramáticos contrastes de la bahía, desde amplias extensiones abiertas hasta estrechas vías fluviales sinuosas. Observa cómo cambian las mareas y cobra vida la fauna, convirtiendo cada visita en una aventura única. Tanto fotógrafos como amantes de la naturaleza encontrarán infinitas oportunidades para capturar la belleza de este dinámico ecosistema.",
    pt: "Prepare-se para experimentar os dramáticos contrastes da baía, desde amplas extensões abertas até estreitas vias fluviais sinuosas. Observe as marés mudarem e a vida selvagem ganhar vida, tornando cada visita uma aventura única. Tanto fotógrafos quanto amantes da natureza encontrarão infinitas oportunidades para capturar a beleza deste dinâmico ecossistema.",
  },
  galv_break1_label: {
    en: "Hidden coves and twisting waterways of Galveston Bay",
    es: "Calas escondidas y sinuosas vías fluviales de la Bahía de Galveston",
    pt: "Enseadas escondidas e vias fluviais sinuosas da Baía de Galveston",
  },
  galv_ch2_title: {
    en: "Nature & Ecosystem",
    es: "Naturaleza y Ecosistema",
    pt: "Natureza e Ecossistema",
  },
  galv_ch2_p1: {
    en: "Step into one of Texas' most vibrant ecosystems, home to hundreds of bird, fish, and plant species. Spot herons hunting along the shore, pelicans diving into the water, and egrets standing tall in the marshes. Discover oyster reefs and seagrass beds that shelter countless species and keep the bay healthy.",
    es: "Adéntrate en uno de los ecosistemas más vibrantes de Texas, hogar de cientos de especies de aves, peces y plantas. Avista garzas cazando a lo largo de la orilla, pelícanos zambulléndose en el agua y garcetas de pie en los pantanos. Descubre arrecifes de ostras y lechos de hierba marina que albergan incontables especies y mantienen sana la bahía.",
    pt: "Entre em um dos ecossistemas mais vibrantes do Texas, lar de centenas de espécies de aves, peixes e plantas. Aviste garças caçando ao longo da orla, pelicanos mergulhando na água e garças brancas em pé nos pântanos. Descubra recifes de ostras e leitos de erva marinha que abrigam inúmeras espécies e mantêm a baía saudável.",
  },
  galv_ch2_p2: {
    en: "Join guided tours or follow nature trails to get closer to wildlife and learn about the delicate balance of this ecosystem. From open waters to dense marshes, the bay invites you to explore, observe, and connect with nature in an unforgettable way.",
    es: "Únete a tours guiados o sigue senderos naturales para acercarte a la vida silvestre y aprender sobre el delicado equilibrio de este ecosistema. Desde aguas abiertas hasta densos pantanos, la bahía te invita a explorar, observar y conectar con la naturaleza de manera inolvidable.",
    pt: "Participe de passeios guiados ou siga trilhas naturais para se aproximar da vida selvagem e aprender sobre o delicado equilíbrio deste ecossistema. Das águas abertas aos densos pântanos, a baía convida você a explorar, observar e conectar-se com a natureza de forma inesquecível.",
  },
  galv_break2_label: {
    en: "Oyster reefs and seagrass beds, the foundation of the bay",
    es: "Arrecifes de ostras y lechos de hierba marina, la base de la bahía",
    pt: "Recifes de ostras e leitos de erva marinha, a base da baía",
  },
  galv_ch3_title: {
    en: "Coastline & Challenges",
    es: "Costa y Desafíos",
    pt: "Costa e Desafios",
  },
  galv_ch3_p1: {
    en: "Walk, kayak, or boat along Galveston Bay's ever-changing coastline and see how tides, storms, and shifting sediments shape the landscape. Discover hidden marshes, peaceful channels, and scenic overlooks that showcase the bay's natural beauty.",
    es: "Camina, haz kayak o navega a lo largo de la cambiante costa de la Bahía de Galveston y observa cómo las mareas, las tormentas y los sedimentos cambiantes dan forma al paisaje. Descubre pantanos escondidos, tranquilos canales y miradores pintorescos que muestran la belleza natural de la bahía.",
    pt: "Caminhe, pratique caiaque ou navegue ao longo da costa em constante mudança da Baía de Galveston e veja como as marés, tempestades e sedimentos em movimento moldam a paisagem. Descubra pântanos escondidos, canais tranquilos e mirantes panorâmicos que mostram a beleza natural da baía.",
  },
  galv_ch3_p2: {
    en: "Learn about the challenges this ecosystem faces, from erosion to rising seas. Join conservation efforts or simply witness how local initiatives are protecting wildlife and restoring wetlands. Every visit offers a chance to experience nature while understanding the importance of preserving this unique environment.",
    es: "Aprende sobre los desafíos que enfrenta este ecosistema, desde la erosión hasta el aumento del nivel del mar. Únete a los esfuerzos de conservación o simplemente observa cómo las iniciativas locales protegen la fauna y restauran los humedales. Cada visita ofrece la oportunidad de disfrutar de la naturaleza mientras se comprende la importancia de preservar este entorno único.",
    pt: "Aprenda sobre os desafios que este ecossistema enfrenta, desde a erosão até o aumento do nível do mar. Junte-se aos esforços de conservação ou simplesmente observe como as iniciativas locais estão protegendo a vida selvagem e restaurando os pântanos. Cada visita oferece a chance de vivenciar a natureza enquanto compreende a importância de preservar este ambiente único.",
  },
  galv_break3_label: {
    en: "Local conservation initiatives restoring the bay's wetlands",
    es: "Iniciativas de conservación locales que restauran los humedales de la bahía",
    pt: "Iniciativas de conservação locais restaurando os pântanos da baía",
  },
  galv_ch4_title: {
    en: "Economy & Human Impact",
    es: "Economía e Impacto Humano",
    pt: "Economia e Impacto Humano",
  },
  galv_ch4_p1: {
    en: "Experience the ways humans and nature coexist along Galveston Bay. Fishing, boating, and wildlife tours provide exciting outdoor activities while supporting local communities. Explore the bay and see how its natural resources sustain livelihoods and recreational adventures.",
    es: "Experimenta las formas en que humanos y naturaleza coexisten a lo largo de la Bahía de Galveston. La pesca, la navegación y los tours de fauna ofrecen emocionantes actividades al aire libre mientras apoyan a las comunidades locales. Explora la bahía y observa cómo sus recursos naturales sustentan los medios de vida y las aventuras recreativas.",
    pt: "Experimente as formas como humanos e natureza coexistem ao longo da Baía de Galveston. A pesca, a navegação e os passeios de observação da fauna oferecem atividades ao ar livre emocionantes enquanto apoiam as comunidades locais. Explore a baía e veja como seus recursos naturais sustentam meios de vida e aventuras recreativas.",
  },
  galv_ch4_p2: {
    en: "Understand the impact of pollution and urban development while witnessing the ongoing efforts to protect and restore habitats. By exploring responsibly, visitors can enjoy the beauty of the bay while supporting conservation and sustainable tourism.",
    es: "Comprende el impacto de la contaminación y el desarrollo urbano mientras observas los continuos esfuerzos por proteger y restaurar los hábitats. Al explorar de manera responsable, los visitantes pueden disfrutar de la belleza de la bahía mientras apoyan la conservación y el turismo sostenible.",
    pt: "Entenda o impacto da poluição e do desenvolvimento urbano enquanto testemunha os esforços contínuos para proteger e restaurar habitats. Ao explorar com responsabilidade, os visitantes podem desfrutar da beleza da baía enquanto apoiam a conservação e o turismo sustentável.",
  },
  galv_break4_label: {
    en: "Urban development and industry along the shores of Galveston Bay",
    es: "Desarrollo urbano e industria a lo largo de las costas de la Bahía de Galveston",
    pt: "Desenvolvimento urbano e indústria ao longo das margens da Baía de Galveston",
  },
  galv_act_intro: {
    en: "Discover the many ways to experience Galveston Bay, from quiet paddle routes through the marshes to world-class fishing on open water.",
    es: "Descubre las muchas formas de vivir la Bahía de Galveston, desde tranquilas rutas de remo por los pantanos hasta la pesca de primer nivel en aguas abiertas.",
    pt: "Descubra as muitas formas de vivenciar a Baía de Galveston, desde rotas tranquilas de remo pelos pântanos até a pesca de classe mundial em águas abertas.",
  },
  galv_act1_tag: { en: "Paddle", es: "Remo", pt: "Remo" },
  galv_act1_name: {
    en: "Kayaking & Boating",
    es: "Kayak y Navegación",
    pt: "Caiaque e Barco",
  },
  galv_act1_desc: {
    en: "Explore the marshes, wetlands and open waters of Galveston Bay. Kayaking offers a peaceful way to experience the rich coastal ecosystem up close.",
    es: "Explora los pantanos, humedales y aguas abiertas de la Bahía de Galveston. El kayak ofrece una forma tranquila de experimentar de cerca el rico ecosistema costero.",
    pt: "Explore os pântanos, zonas úmidas e águas abertas da Baía de Galveston. O caiaque oferece uma forma tranquila de vivenciar de perto o rico ecossistema costeiro.",
  },
  galv_act2_tag: { en: "Wildlife", es: "Fauna", pt: "Fauna" },
  galv_act2_name: {
    en: "Bird Watching",
    es: "Avistamiento de Aves",
    pt: "Observação de Aves",
  },
  galv_act2_desc: {
    en: "Spot hundreds of migratory species along the coastline. Galveston Bay is a paradise for bird lovers and wildlife photographers.",
    es: "Avista cientos de especies migratorias a lo largo de la costa. La Bahía de Galveston es un paraíso para los amantes de las aves y los fotógrafos de naturaleza.",
    pt: "Aviste centenas de espécies migratórias ao longo da costa. A Baía de Galveston é um paraíso para os amantes das aves e fotógrafos de natureza.",
  },
  galv_act3_tag: { en: "Sport", es: "Deporte", pt: "Esporte" },
  galv_act3_name: { en: "Fishing", es: "Pesca", pt: "Pesca" },
  galv_act3_desc: {
    en: "The bay is a popular destination for recreational and commercial fishing, offering rich waters filled with diverse marine life.",
    es: "La bahía es un destino popular para la pesca recreativa y comercial, ofreciendo aguas ricas llenas de diversa vida marina.",
    pt: "A baía é um destino popular para pesca recreativa e comercial, oferecendo águas ricas repletas de diversa vida marinha.",
  },
  galv_gal1_cap: {
    en: "An aerial view of the vast estuary and shipping channels.",
    es: "Una vista aérea del vasto estuario y los canales de navegación.",
    pt: "Uma vista aérea do vasto estuário e dos canais de navegação.",
  },
  galv_gal2_cap: {
    en: "Critical oyster reefs that filter water and protect the coastline.",
    es: "Arrecifes de ostras fundamentales que filtran el agua y protegen la costa.",
    pt: "Recifes de ostras essenciais que filtram a água e protegem a costa.",
  },
  galv_gal3_cap: {
    en: "The bustling industrial heart of the Texas coast.",
    es: "El animado corazón industrial de la costa de Texas.",
    pt: "O movimentado coração industrial da costa do Texas.",
  },
  galv_gal4_cap: {
    en: "Herons and pelicans thriving along the bay's rich shoreline.",
    es: "Garzas y pelícanos prosperando a lo largo de la rica orilla de la bahía.",
    pt: "Garças e pelicanos prosperando ao longo da rica orla da baía.",
  },
  galv_gal5_cap: {
    en: "Tidal marshes and channels wind through the bay's interior.",
    es: "Marismas de marea y canales serpentean por el interior de la bahía.",
    pt: "Pântanos de marés e canais serpenteiam pelo interior da baía.",
  },
  amaz_stat1_value: {
    en: "Igapó Forest",
    es: "Bosque Igapó",
    pt: "Floresta Igapó",
  },
  amaz_stat1_label: {
    en: "Unique Feature",
    es: "Característica Única",
    pt: "Característica Única",
  },
  amaz_stat1_desc: {
    en: "Canoe between the treetops",
    es: "Navega en canoa entre las copas de los árboles",
    pt: "Canoe entre as copas das árvores",
  },
  amaz_stat2_value: { en: "1,300+", es: "1.300+", pt: "1.300+" },
  amaz_stat2_label: {
    en: "Bird Species",
    es: "Especies de Aves",
    pt: "Espécies de Aves",
  },
  amaz_stat2_desc: {
    en: "More than any other delta",
    es: "Más que cualquier otro delta",
    pt: "Mais do que qualquer outro delta",
  },
  amaz_stat3_value: { en: "5.5M km²", es: "5,5M km²", pt: "5,5M km²" },
  amaz_stat3_label: {
    en: "Rainforest",
    es: "Selva Tropical",
    pt: "Floresta Tropical",
  },
  amaz_stat3_desc: {
    en: "Tropical forest cover",
    es: "Cobertura forestal tropical",
    pt: "Cobertura florestal tropical",
  },
  amaz_stat4_value: {
    en: "Açaí & Tucupi",
    es: "Açaí y Tucupi",
    pt: "Açaí e Tucupi",
  },
  amaz_stat4_label: { en: "Cuisine", es: "Gastronomía", pt: "Gastronomia" },
  amaz_stat4_desc: {
    en: "Unique Amazonian flavours",
    es: "Sabores amazónicos únicos",
    pt: "Sabores amazônicos únicos",
  },
  amaz_ch1_title: {
    en: "The Igapó: Forest Beneath the Water",
    es: "El Igapó: Bosque Bajo el Agua",
    pt: "O Igapó: Floresta Debaixo d'Água",
  },
  amaz_ch1_p1: {
    en: "The dry season, from June through November, is the best time to visit the Amazon Delta. Water levels drop to reveal sandy beaches along the riverbanks, wildlife concentrates around remaining water sources making animals easier to spot, and trails through the rainforest become accessible on foot. The reduced rainfall makes river travel more comfortable and boat tours far more rewarding.",
    es: "La temporada seca, de junio a noviembre, es la mejor época para visitar el Delta del Amazonas. Los niveles del agua bajan para revelar playas de arena a lo largo de las orillas del río, la fauna se concentra alrededor de las fuentes de agua restantes facilitando el avistamiento de animales, y los senderos por la selva tropical se vuelven accesibles a pie. La reducción de las lluvias hace que los viajes en río sean más cómodos y los tours en barco mucho más gratificantes.",
    pt: "A estação seca, de junho a novembro, é a melhor época para visitar o Delta do Amazonas. Os níveis da água baixam para revelar praias de areia ao longo das margens do rio, a fauna se concentra em torno das fontes de água restantes facilitando o avistamento de animais, e as trilhas pela floresta tropical tornam-se acessíveis a pé. A redução das chuvas torna as viagens fluviais mais confortáveis e os passeios de barco muito mais recompensadores.",
  },
  amaz_ch1_p2: {
    en: "The wet season, from December through May, brings its own dramatic beauty: the river rises by up to 14 metres, flooding vast areas of forest and creating the magical phenomenon known as the igapó, flooded forest where you can canoe between the treetops. If you are visiting for the Festival do Boto in Parintins, plan for late June, one of Brazil's most spectacular cultural celebrations.",
    es: "La temporada de lluvias, de diciembre a mayo, trae su propia belleza dramática: el río sube hasta 14 metros, inundando vastas áreas de bosque y creando el mágico fenómeno conocido como igapó, el bosque inundado donde puedes remar en canoa entre las copas de los árboles. Si visitas para el Festival do Boto en Parintins, planifica para finales de junio, una de las celebraciones culturales más espectaculares de Brasil.",
    pt: "A estação chuvosa, de dezembro a maio, traz sua própria beleza dramática: o rio sobe até 14 metros, inundando vastas áreas de floresta e criando o mágico fenômeno conhecido como igapó, floresta inundada onde você pode remar em canoa entre as copas das árvores. Se você está visitando para o Festival do Boto em Parintins, planeje para o final de junho, uma das celebrações culturais mais espetaculares do Brasil.",
  },
  amaz_break1_label: {
    en: "Igapó flooded forest during the wet season",
    es: "Bosque inundado Igapó durante la temporada de lluvias",
    pt: "Floresta inundada Igapó durante a estação chuvosa",
  },
  amaz_ch2_title: {
    en: "1,300 Bird Species & Counting",
    es: "1.300 Especies de Aves y Contando",
    pt: "1.300 Espécies de Aves e Contando",
  },
  amaz_ch2_p1: {
    en: "The Amazon Delta is home to the greatest concentration of biodiversity on the planet. With over 3,000 species of fish, more than 1,300 bird species, and countless mammals, reptiles, and insects, this is the ultimate destination for anyone who wants to experience nature in its most overwhelming and spectacular form. Pink river dolphins, giant river otters, and black caimans share the water with species found nowhere else on Earth.",
    es: "El Delta del Amazonas alberga la mayor concentración de biodiversidad del planeta. Con más de 3.000 especies de peces, más de 1.300 especies de aves, e innumerables mamíferos, reptiles e insectos, este es el destino definitivo para quien quiera experimentar la naturaleza en su forma más abrumadora y espectacular. Los delfines rosados de río, las nutrias gigantes de río y los caimanes negros comparten el agua con especies que no se encuentran en ningún otro lugar de la Tierra.",
    pt: "O Delta do Amazonas abriga a maior concentração de biodiversidade do planeta. Com mais de 3.000 espécies de peixes, mais de 1.300 espécies de aves e inúmeros mamíferos, répteis e insetos, este é o destino definitivo para quem quer vivenciar a natureza em sua forma mais avassaladora e espetacular. Golfinhos-cor-de-rosa, lontras gigantes de rio e jacarés negros compartilham a água com espécies não encontradas em nenhum outro lugar da Terra.",
  },
  amaz_ch2_p2: {
    en: "The vast Marajó Island at the river's mouth is one of the best places to observe wildlife without venturing deep into the forest. Here, enormous water buffalo wade through shallow grasslands, scarlet ibis gather in the mangroves at sunset, and manatees drift silently through the channels.",
    es: "La vasta Isla Marajó, en la desembocadura del río, es uno de los mejores lugares para observar la fauna sin adentrarse profundamente en el bosque. Aquí, enormes búfalos de agua vadean por las praderas poco profundas, el ibis escarlata se reúne en los manglares al atardecer, y los manatíes se deslizan silenciosamente por los canales.",
    pt: "A vasta Ilha Marajó, na foz do rio, é um dos melhores lugares para observar a vida selvagem sem se aventurar profundamente na floresta. Aqui, enormes búfalos-d'água vagam pelas pastagens rasas, o guará vermelho se reúne nos manguezais ao pôr do sol e os peixes-boi deslizam silenciosamente pelos canais.",
  },
  amaz_break2_label: {
    en: "Scarlet macaws or toucans in the Amazon rainforest canopy",
    es: "Guacamayos escarlata o tucanes en el dosel de la selva amazónica",
    pt: "Araras vermelhas ou tucanos no dossel da floresta amazônica",
  },
  amaz_ch3_title: {
    en: "5.5 Million km² of Living Rainforest",
    es: "5,5 Millones de km² de Selva Viva",
    pt: "5,5 Milhões de km² de Floresta Viva",
  },
  amaz_ch3_p1: {
    en: "The Amazon River stretches over 6,400 kilometres from the Andes to the Atlantic Ocean, discharging more freshwater into the sea than any other river on Earth, roughly one fifth of all the world's river water. At its mouth near Marajó Island, the river is so wide that you cannot see the opposite bank. Standing at the shore, it feels more like an inland sea than a river.",
    es: "El río Amazonas se extiende más de 6.400 kilómetros desde los Andes hasta el océano Atlántico, descargando más agua dulce en el mar que cualquier otro río de la Tierra, aproximadamente una quinta parte de toda el agua fluvial del mundo. En su desembocadura cerca de la Isla Marajó, el río es tan ancho que no se puede ver la orilla opuesta. De pie en la orilla, parece más un mar interior que un río.",
    pt: "O rio Amazonas se estende por mais de 6.400 quilômetros desde os Andes até o oceano Atlântico, descarregando mais água doce no mar do que qualquer outro rio da Terra, aproximadamente um quinto de toda a água fluvial do mundo. Em sua foz perto da Ilha Marajó, o rio é tão largo que você não consegue ver a margem oposta. De pé na orla, parece mais um mar interior do que um rio.",
  },
  amaz_ch3_p2: {
    en: "Exploring the Amazon by riverboat is the experience of a lifetime. Multi-day cruises depart from Belém and Manaus, weaving through narrow tributaries called igarapés, where the forest closes in on either side and the sounds of the jungle surround you.",
    es: "Explorar el Amazonas en barco fluvial es una experiencia de toda la vida. Los cruceros de varios días parten de Belém y Manaus, serpenteando por estrechos afluentes llamados igarapés, donde el bosque se cierra a ambos lados y los sonidos de la selva te rodean.",
    pt: "Explorar o Amazonas de barco fluvial é a experiência de uma vida. Cruzeiros de vários dias partem de Belém e Manaus, tecendo por estreitos afluentes chamados igarapés, onde a floresta se fecha em ambos os lados e os sons da selva o cercam.",
  },
  amaz_break3_label: {
    en: "Jungle eco-lodge or riverboat on a narrow Amazon tributary",
    es: "Ecolodge en la selva o barco fluvial en un estrecho afluente del Amazonas",
    pt: "Ecolodge na selva ou barco fluvial em um estreito afluente do Amazonas",
  },
  amaz_ch4_title: {
    en: "Açaí, Tucupi & the Flavours of Belém",
    es: "Açaí, Tucupi y los Sabores de Belém",
    pt: "Açaí, Tucupi e os Sabores de Belém",
  },
  amaz_ch4_p1: {
    en: "No visit to the Amazon Delta is complete without exploring the incredible food culture of Belém, the gateway city to the delta. The city's legendary Ver-o-Peso market is one of the largest open-air markets in Latin America, overflowing with exotic fruits like açaí, cupuaçu, and bacuri, alongside fresh river fish, herbal remedies, and handcrafted goods. Tacacá, maniçoba, and pato no tucupi are local dishes that reflect the deep indigenous roots of Amazonian cuisine.",
    es: "Ninguna visita al Delta del Amazonas está completa sin explorar la increíble cultura gastronómica de Belém, la ciudad de entrada al delta. El legendario mercado Ver-o-Peso de la ciudad es uno de los mercados al aire libre más grandes de América Latina, rebosante de frutas exóticas como açaí, cupuaçu y bacuri, junto con pescado fresco de río, remedios herbales y artesanías. Tacacá, maniçoba y pato no tucupi son platos locales que reflejan las profundas raíces indígenas de la cocina amazónica.",
    pt: "Nenhuma visita ao Delta do Amazonas está completa sem explorar a incrível cultura gastronômica de Belém, a cidade de entrada ao delta. O lendário mercado Ver-o-Peso da cidade é um dos maiores mercados ao ar livre da América Latina, transbordando de frutas exóticas como açaí, cupuaçu e bacuri, ao lado de peixe fresco de rio, remédios herbais e artesanato. Tacacá, maniçoba e pato no tucupi são pratos locais que refletem as profundas raízes indígenas da culinária amazônica.",
  },
  amaz_ch4_p2: {
    en: "The Amazon is home to hundreds of indigenous peoples, many of whom maintain deep connections to the forest and river. Belém itself is a vibrant city shaped by Portuguese colonial architecture, Afro-Brazilian culture, and indigenous heritage. The annual Círio de Nazaré procession, one of the largest religious events in the world, draws over two million people every October.",
    es: "El Amazonas es hogar de cientos de pueblos indígenas, muchos de los cuales mantienen profundas conexiones con el bosque y el río. La propia Belém es una ciudad vibrante moldeada por la arquitectura colonial portuguesa, la cultura afrobrasileña y el patrimonio indígena. La procesión anual del Círio de Nazaré, uno de los eventos religiosos más grandes del mundo, atrae a más de dos millones de personas cada octubre.",
    pt: "A Amazônia é lar de centenas de povos indígenas, muitos dos quais mantêm profundas conexões com a floresta e o rio. A própria Belém é uma cidade vibrante moldada pela arquitetura colonial portuguesa, cultura afro-brasileira e patrimônio indígena. A procissão anual do Círio de Nazaré, um dos maiores eventos religiosos do mundo, atrai mais de dois milhões de pessoas todo outubro.",
  },
  amaz_break4_label: {
    en: "Indigenous Amazon community or traditional ceremony",
    es: "Comunidad indígena amazónica o ceremonia tradicional",
    pt: "Comunidade indígena amazônica ou cerimônia tradicional",
  },
  amaz_act_intro: {
    en: "Discover the many ways to experience the Amazon Delta, from silent canoe trips through the jungle to wildlife watching on Marajó Island.",
    es: "Descubre las muchas formas de vivir el Delta del Amazonas, desde silenciosos viajes en canoa por la selva hasta la observación de fauna en la Isla Marajó.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Amazonas, desde silenciosas viagens de canoa pela selva até a observação de fauna na Ilha Marajó.",
  },
  amaz_act1_tag: { en: "Paddle", es: "Remo", pt: "Remo" },
  amaz_act1_name: {
    en: "Canoe & Riverboat Expeditions",
    es: "Expediciones en Canoa y Barco",
    pt: "Expedições de Canoa e Barco",
  },
  amaz_act1_desc: {
    en: "Paddle through narrow jungle waterways known as igarapés, or board a multi-day riverboat to explore the Amazon's most remote tributaries. These water-based journeys offer unmatched access to untouched rainforest and extraordinary wildlife encounters at every bend.",
    es: "Rema por estrechas vías fluviales de la selva conocidas como igarapés, o embarca en un barco fluvial de varios días para explorar los afluentes más remotos del Amazonas. Estos viajes acuáticos ofrecen un acceso incomparable a la selva tropical intacta y extraordinarios encuentros con la fauna en cada curva.",
    pt: "Reme por estreitas vias fluviais da selva conhecidas como igarapés, ou embarque em um barco fluvial de vários dias para explorar os afluentes mais remotos do Amazonas. Essas jornadas aquáticas oferecem acesso incomparável à floresta tropical intocada e extraordinários encontros com a fauna a cada curva.",
  },
  amaz_act2_tag: {
    en: "Wilderness",
    es: "Naturaleza Salvaje",
    pt: "Natureza Selvagem",
  },
  amaz_act2_name: {
    en: "Jungle Lodges & Night Safaris",
    es: "Lodges en la Selva y Safaris Nocturnos",
    pt: "Lodges na Selva e Safáris Noturnos",
  },
  amaz_act2_desc: {
    en: "Stay deep in the rainforest at an eco-lodge and join expert local guides on night safaris where the jungle truly comes alive.",
    es: "Alójate en lo profundo de la selva tropical en un ecolodge y únete a guías locales expertos en safaris nocturnos donde la selva cobra vida de verdad.",
    pt: "Fique no coração da floresta tropical em um ecolodge e junte-se a guias locais especializados em safáris noturnos onde a selva realmente ganha vida.",
  },
  amaz_act3_tag: { en: "Wildlife", es: "Fauna", pt: "Fauna" },
  amaz_act3_name: {
    en: "Marajó Island Wildlife",
    es: "Fauna de la Isla Marajó",
    pt: "Fauna da Ilha Marajó",
  },
  amaz_act3_desc: {
    en: "Explore the world's largest river island, where water buffalo roam the floodplains, scarlet ibis paint the mangroves red at dusk, and manatees drift through sheltered channels.",
    es: "Explora la isla fluvial más grande del mundo, donde los búfalos de agua pastan por las llanuras de inundación, el ibis escarlata tiñe los manglares de rojo al atardecer y los manatíes se deslizan por canales protegidos.",
    pt: "Explore a maior ilha fluvial do mundo, onde búfalos-d'água pastam pelas várzeas, o guará vermelho pinta os manguezais de vermelho ao entardecer e os peixes-boi deslizam por canais abrigados.",
  },
  amaz_gal1_cap: {
    en: "Aerial view of the Amazon River branching into the Atlantic Ocean near Marajó Island.",
    es: "Vista aérea del río Amazonas ramificándose hacia el océano Atlántico cerca de la Isla Marajó.",
    pt: "Vista aérea do rio Amazonas se ramificando para o oceano Atlântico perto da Ilha Marajó.",
  },
  amaz_gal2_cap: {
    en: "Paddling through the flooded igapó forest during the high-water season.",
    es: "Remando por el bosque igapó inundado durante la temporada de aguas altas.",
    pt: "Remando pela floresta igapó inundada durante a estação de águas altas.",
  },
  amaz_gal3_cap: {
    en: "Pink river dolphins, known as botos, surfacing in the golden light of the Amazon at dusk.",
    es: "Delfines rosados de río, conocidos como botos, saliendo a la superficie bajo la luz dorada del Amazonas al atardecer.",
    pt: "Golfinhos-cor-de-rosa, conhecidos como botos, emergindo na luz dourada do Amazonas ao entardecer.",
  },
  amaz_gal4_cap: {
    en: "Sandy beaches emerge along the Amazon riverbanks during low-water season.",
    es: "Playas de arena emergen a lo largo de las orillas del río Amazonas durante la temporada de aguas bajas.",
    pt: "Praias de areia emergem ao longo das margens do rio Amazonas durante a estação de águas baixas.",
  },
  amaz_gal5_cap: {
    en: "Belém's Ver-o-Peso market overflows with exotic Amazonian fruits and fresh river fish.",
    es: "El mercado Ver-o-Peso de Belém rebosa de frutas amazónicas exóticas y pescado fresco de río.",
    pt: "O mercado Ver-o-Peso de Belém transborda de frutas amazônicas exóticas e peixe fresco de rio.",
  },
  sanjuan_stat1_value: { en: "800 km²", es: "800 km²", pt: "800 km²" },
  sanjuan_stat1_label: {
    en: "Delta Area",
    es: "Área del Delta",
    pt: "Área do Delta",
  },
  sanjuan_stat1_desc: {
    en: "Largest on South America's Pacific coast",
    es: "El más grande en la costa del Pacífico de Sudamérica",
    pt: "O maior na costa do Pacífico da América do Sul",
  },
  sanjuan_stat2_value: { en: "11,000 mm", es: "11.000 mm", pt: "11.000 mm" },
  sanjuan_stat2_label: {
    en: "Annual Rainfall",
    es: "Precipitación Anual",
    pt: "Precipitação Anual",
  },
  sanjuan_stat2_desc: {
    en: "One of the wettest places on Earth",
    es: "Uno de los lugares más húmedos de la Tierra",
    pt: "Um dos lugares mais úmidos da Terra",
  },
  sanjuan_stat3_value: { en: "Chocó", es: "Chocó", pt: "Chocó" },
  sanjuan_stat3_label: { en: "Region", es: "Región", pt: "Região" },
  sanjuan_stat3_desc: {
    en: "Colombia's biodiversity hotspot",
    es: "El punto caliente de biodiversidad de Colombia",
    pt: "O hotspot de biodiversidade da Colômbia",
  },
  sanjuan_stat4_value: { en: "5,000 BP", es: "5.000 AP", pt: "5.000 AP" },
  sanjuan_stat4_label: {
    en: "Delta Age",
    es: "Edad del Delta",
    pt: "Idade do Delta",
  },
  sanjuan_stat4_desc: {
    en: "Years of continuous growth",
    es: "Años de crecimiento continuo",
    pt: "Anos de crescimento contínuo",
  },
  sanjuan_ch1_title: {
    en: "Where the Andes Meet the Pacific",
    es: "Donde los Andes Encuentran el Pacífico",
    pt: "Onde os Andes Encontram o Pacífico",
  },
  sanjuan_ch1_p1: {
    en: "The Río San Juan begins high in the Western Andes on Cerro Caramanta and travels 380 kilometres through the rainforests of Colombia's Chocó department before fanning out into the Pacific Ocean. Its delta, covering 800 square kilometres, is the largest on the entire Pacific coast of South America: a tide-dominated labyrinth of distributary channels, mangrove forests, and barrier islands shaped by the constant tug-of-war between river force and ocean swell.",
    es: "El Río San Juan nace en lo alto de los Andes Occidentales en el Cerro Caramanta y recorre 380 kilómetros a través de los bosques del departamento colombiano del Chocó antes de abrirse en abanico hacia el océano Pacífico. Su delta, que cubre 800 kilómetros cuadrados, es el más grande de toda la costa del Pacífico de Sudamérica: un laberinto dominado por las mareas de canales distribuidores, bosques de manglares e islas barrera moldeadas por la constante pugna entre la fuerza del río y el oleaje oceánico.",
    pt: "O Rio San Juan nasce nas alturas dos Andes Ocidentais no Cerro Caramanta e percorre 380 quilômetros através das florestas do departamento colombiano do Chocó antes de se abrir em leque para o oceano Pacífico. Seu delta, cobrindo 800 quilômetros quadrados, é o maior de toda a costa do Pacífico da América do Sul: um labirinto dominado pelas marés de canais distributários, florestas de mangue e ilhas barreira moldadas pela constante disputa entre a força do rio e a ondulação oceânica.",
  },
  sanjuan_ch1_p2: {
    en: "The dry season from December through March offers the best conditions for exploring the delta. Water levels settle, making boat navigation through the smaller channels easier, and wildlife concentrates along the distributaries. But this is Chocó, and even the dry season brings frequent rain, and the landscape is never anything less than lush, green, and overwhelmingly alive.",
    es: "La temporada seca de diciembre a marzo ofrece las mejores condiciones para explorar el delta. Los niveles del agua se estabilizan, facilitando la navegación en barco por los canales más pequeños, y la fauna se concentra a lo largo de los distribuidores. Pero esto es el Chocó, e incluso la temporada seca trae lluvias frecuentes, y el paisaje nunca es menos que exuberante, verde y abrumadoramente vivo.",
    pt: "A estação seca de dezembro a março oferece as melhores condições para explorar o delta. Os níveis da água se estabilizam, facilitando a navegação de barco pelos canais menores, e a fauna se concentra ao longo dos distributários. Mas este é o Chocó, e mesmo a estação seca traz chuvas frequentes, e a paisagem nunca é menos do que exuberante, verde e esmagadoramente viva.",
  },
  sanjuan_break1_label: {
    en: "The San Juan River at peak discharge, swelling toward the Pacific",
    es: "El Río San Juan en su caudal máximo, creciendo hacia el Pacífico",
    pt: "O Rio San Juan no pico de descarga, crescendo em direção ao Pacífico",
  },
  sanjuan_ch2_title: {
    en: "The Chocó: A Biodiversity Hotspot",
    es: "El Chocó: Un Punto Caliente de Biodiversidad",
    pt: "O Chocó: Um Hotspot de Biodiversidade",
  },
  sanjuan_ch2_p1: {
    en: "The San Juan Delta sits at the heart of the Chocó biogeographic region, one of the most biodiverse places on the planet. The extreme rainfall, up to 11,000 mm per year, feeds forests of extraordinary density and diversity. Poison dart frogs, harpy eagles, jaguars, giant anteaters, and several species of caiman share a landscape that has remained largely untouched by roads or industrial development.",
    es: "El Delta del San Juan se encuentra en el corazón de la región biogeográfica del Chocó, uno de los lugares más biodiversos del planeta. Las lluvias extremas, de hasta 11.000 mm al año, alimentan bosques de extraordinaria densidad y diversidad. Ranas dardo venenosas, águilas harpías, jaguares, osos hormigueros gigantes y varias especies de caimanes comparten un paisaje que ha permanecido en gran medida intacto por carreteras o desarrollo industrial.",
    pt: "O Delta do San Juan fica no coração da região biogeográfica do Chocó, um dos lugares mais biodiversos do planeta. As chuvas extremas, de até 11.000 mm por ano, alimentam florestas de extraordinária densidade e diversidade. Rãs venenosas, harpias, onças-pintadas, tamanduás-bandeira e várias espécies de jacaré compartilham uma paisagem que permaneceu amplamente intocada por estradas ou desenvolvimento industrial.",
  },
  sanjuan_ch2_p2: {
    en: "The mangrove forests fringing the delta's distributaries are among the most productive in the Americas. Dense stands of red and black mangrove provide shelter and nursery grounds for countless fish species, while pelicans, frigatebirds, and herons patrol the tidal channels. The Chocó's isolation has made it an evolutionary cradle, and a disproportionate number of species here are found nowhere else on Earth.",
    es: "Los bosques de manglares que bordean los distribuidores del delta se encuentran entre los más productivos de las Américas. Los densos rodales de mangle rojo y negro proporcionan refugio y áreas de cría para innumerables especies de peces, mientras que los pelícanos, los rabihorcados y las garzas patrullan los canales de marea. El aislamiento del Chocó lo ha convertido en una cuna evolutiva, y un número desproporcionado de especies aquí no se encuentran en ningún otro lugar de la Tierra.",
    pt: "As florestas de mangue que bordeiam os distributários do delta estão entre as mais produtivas das Américas. Densos agrupamentos de mangue vermelho e preto fornecem abrigo e locais de viveiro para inúmeras espécies de peixes, enquanto pelicanos, fragatas e garças patrulham os canais de maré. O isolamento do Chocó o tornou um berço evolutivo, e um número desproporcional de espécies aqui não é encontrado em nenhum outro lugar da Terra.",
  },
  sanjuan_break2_label: {
    en: "Dense mangrove channels threading through the delta interior",
    es: "Canales de manglares densos que se extienden por el interior del delta",
    pt: "Canais de mangue densos percorrendo o interior do delta",
  },
  sanjuan_ch3_title: {
    en: "The Fastest-Growing Delta on the West Coast",
    es: "El Delta de Más Rápido Crecimiento de la Costa Oeste",
    pt: "O Delta de Crescimento Mais Rápido da Costa Oeste",
  },
  sanjuan_ch3_p1: {
    en: "The Río San Juan carries an average of 2,550 cubic metres of water per second into the Pacific, the highest discharge of any river on the west coast of South America. This immense flow also carries an extraordinary sediment load of 16 million tonnes per year, making the San Juan one of the most productive delta-building rivers in the world. Analysis of shoreline changes over the past century shows consistent advance of the delta front, even as rising sea levels and tectonic activity work against it.",
    es: "El Río San Juan transporta una media de 2.550 metros cúbicos de agua por segundo al Pacífico, el caudal más alto de cualquier río en la costa oeste de Sudamérica. Este inmenso flujo también transporta una extraordinaria carga de sedimentos de 16 millones de toneladas al año, lo que hace del San Juan uno de los ríos formadores de deltas más productivos del mundo. El análisis de los cambios en la línea costera durante el último siglo muestra un avance consistente del frente del delta, incluso cuando el aumento del nivel del mar y la actividad tectónica trabajan en su contra.",
    pt: "O Rio San Juan carrega uma média de 2.550 metros cúbicos de água por segundo para o Pacífico, a maior descarga de qualquer rio na costa oeste da América do Sul. Esse imenso fluxo também carrega uma extraordinária carga de sedimentos de 16 milhões de toneladas por ano, tornando o San Juan um dos rios formadores de delta mais produtivos do mundo. A análise das mudanças na linha costeira ao longo do século passado mostra avanço consistente da frente do delta, mesmo com o aumento do nível do mar e a atividade tectônica trabalhando contra isso.",
  },
  sanjuan_ch3_p2: {
    en: "The Pacific coast of Colombia is one of the most geologically active zones on Earth. The Nazca oceanic plate grinds beneath the South American plate at 54 mm per year, producing frequent earthquakes and occasional tsunamis. This tectonic energy shapes the coastline around the delta in dramatic ways, creating a shoreline that is simultaneously advancing through sediment deposition and retreating through erosion and subsidence, a constant, dynamic balance.",
    es: "La costa del Pacífico de Colombia es una de las zonas geológicamente más activas de la Tierra. La placa oceánica de Nazca se hunde bajo la placa sudamericana a 54 mm por año, produciendo frecuentes terremotos y ocasionales tsunamis. Esta energía tectónica da forma a la costa alrededor del delta de maneras dramáticas, creando una línea costera que simultáneamente avanza por la deposición de sedimentos y retrocede por la erosión y la subsidencia, un equilibrio constante y dinámico.",
    pt: "A costa do Pacífico da Colômbia é uma das zonas geologicamente mais ativas da Terra. A placa oceânica de Nazca se submerge sob a placa sul-americana a 54 mm por ano, produzindo terremotos frequentes e tsunamis ocasionais. Essa energia tectônica molda a costa em torno do delta de formas dramáticas, criando uma linha costeira que simultaneamente avança pela deposição de sedimentos e recua pela erosão e subsidência, um equilíbrio constante e dinâmico.",
  },
  sanjuan_break3_label: {
    en: "Traditional Afro-Colombian fishing communities along the delta channels",
    es: "Comunidades pesqueras afrocolombianas tradicionales a lo largo de los canales del delta",
    pt: "Comunidades pesqueiras afro-colombianas tradicionais ao longo dos canais do delta",
  },
  sanjuan_ch4_title: {
    en: "Afro-Colombian Communities of the Chocó",
    es: "Comunidades Afrocolombianas del Chocó",
    pt: "Comunidades Afro-Colombianas do Chocó",
  },
  sanjuan_ch4_p1: {
    en: "The San Juan Delta and the surrounding Chocó lowlands are home to some of Colombia's most resilient communities. Afro-Colombian families have fished these waters and farmed these forests for generations, and indigenous Emberá and Wounaan peoples maintain deep ties to the river and its resources. Their traditional knowledge of the forest, the tides, and the fish cycles is extraordinary, built over centuries of intimate coexistence with one of the world's most demanding environments.",
    es: "El Delta del San Juan y las tierras bajas del Chocó circundantes albergan algunas de las comunidades más resilientes de Colombia. Las familias afrocolombianas han pescado estas aguas y cultivado estos bosques durante generaciones, y los pueblos indígenas Emberá y Wounaan mantienen profundos lazos con el río y sus recursos. Su conocimiento tradicional del bosque, las mareas y los ciclos del pez es extraordinario, construido durante siglos de íntima coexistencia con uno de los entornos más exigentes del mundo.",
    pt: "O Delta do San Juan e as terras baixas do Chocó ao redor são lar de algumas das comunidades mais resilientes da Colômbia. Famílias afro-colombianas pescaram essas águas e cultivaram essas florestas por gerações, e os povos indígenas Emberá e Wounaan mantêm laços profundos com o rio e seus recursos. Seu conhecimento tradicional da floresta, das marés e dos ciclos dos peixes é extraordinário, construído ao longo de séculos de íntima coexistência com um dos ambientes mais exigentes do mundo.",
  },
  sanjuan_ch4_p2: {
    en: "The delta region has historically been among the most isolated in Colombia, accessible only by river or sea, with no road connections to the interior. This isolation has preserved its extraordinary ecosystems and the cultural traditions of its communities, but it has also meant limited access to services and economic opportunity. Responsible ecotourism, guided by local Afro-Colombian and indigenous operators, is slowly emerging as a way to share this remarkable landscape with the world.",
    es: "La región del delta ha sido históricamente una de las más aisladas de Colombia, accesible solo por río o mar, sin conexiones por carretera con el interior. Este aislamiento ha preservado sus extraordinarios ecosistemas y las tradiciones culturales de sus comunidades, pero también ha supuesto un acceso limitado a los servicios y las oportunidades económicas. El ecoturismo responsable, guiado por operadores locales afrocolombianos e indígenas, está emergiendo lentamente como una forma de compartir este notable paisaje con el mundo.",
    pt: "A região do delta tem sido historicamente uma das mais isoladas da Colômbia, acessível apenas por rio ou mar, sem conexões rodoviárias com o interior. Esse isolamento preservou seus extraordinários ecossistemas e as tradições culturais de suas comunidades, mas também significou acesso limitado a serviços e oportunidades econômicas. O ecoturismo responsável, guiado por operadores locais afro-colombianos e indígenas, está emergindo lentamente como uma forma de compartilhar esta notável paisagem com o mundo.",
  },
  sanjuan_break4_label: {
    en: "Local fishing culture at the heart of delta life in Chocó",
    es: "La cultura pesquera local en el corazón de la vida del delta en el Chocó",
    pt: "A cultura pesqueira local no coração da vida do delta no Chocó",
  },
  sanjuan_act_intro: {
    en: "Discover the many ways to experience the San Juan Delta, from dugout canoe trips through pristine mangroves to birdwatching in one of Earth's richest forests.",
    es: "Descubre las muchas formas de vivir el Delta del San Juan, desde viajes en canoa por manglares prístinos hasta la observación de aves en uno de los bosques más ricos de la Tierra.",
    pt: "Descubra as muitas formas de vivenciar o Delta do San Juan, desde viagens de canoa por manguezais pristinos até a observação de aves em uma das florestas mais ricas da Terra.",
  },
  sanjuan_act1_tag: { en: "Paddle", es: "Remo", pt: "Remo" },
  sanjuan_act1_name: {
    en: "Canoe the Delta Channels",
    es: "Explora los Canales en Canoa",
    pt: "Canoa pelos Canais do Delta",
  },
  sanjuan_act1_desc: {
    en: "Travel by traditional dugout canoe through the delta's tidal distributaries, slipping between towering mangrove roots while local guides point out caimans, river otters, and the countless birds that make these waterways their home.",
    es: "Viaja en canoa tradicional por los distribuidores de marea del delta, deslizándote entre las imponentes raíces de los manglares mientras los guías locales señalan caimanes, nutrias de río y las innumerables aves que hacen de estas vías fluviales su hogar.",
    pt: "Viaje de canoa tradicional pelos distributários de maré do delta, deslizando entre as imponentes raízes dos manguezais enquanto guias locais apontam jacarés, lontras de rio e os inúmeros pássaros que fazem dessas vias fluviais seu lar.",
  },
  sanjuan_act2_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  sanjuan_act2_name: {
    en: "Community Visits",
    es: "Visitas a Comunidades",
    pt: "Visitas a Comunidades",
  },
  sanjuan_act2_desc: {
    en: "Meet the Afro-Colombian and Emberá communities who have lived along these rivers for generations, and learn about their traditions, fishing practices, and deep knowledge of the Chocó forest.",
    es: "Conoce las comunidades afrocolombianas y Emberá que han vivido a lo largo de estos ríos durante generaciones, y aprende sobre sus tradiciones, prácticas de pesca y profundo conocimiento del bosque del Chocó.",
    pt: "Conheça as comunidades afro-colombianas e Emberá que vivem ao longo desses rios há gerações, e aprenda sobre suas tradições, práticas de pesca e profundo conhecimento da floresta do Chocó.",
  },
  sanjuan_act3_tag: { en: "Wildlife", es: "Fauna", pt: "Fauna" },
  sanjuan_act3_name: {
    en: "Birdwatching in the Chocó",
    es: "Avistamiento de Aves en el Chocó",
    pt: "Observação de Aves no Chocó",
  },
  sanjuan_act3_desc: {
    en: "The Chocó is one of the world's premier birdwatching destinations, with hundreds of endemic species. Guided walks through the forest at dawn offer encounters with rare species found nowhere else on Earth.",
    es: "El Chocó es uno de los principales destinos de avistamiento de aves del mundo, con cientos de especies endémicas. Las caminatas guiadas por el bosque al amanecer ofrecen encuentros con especies raras que no se encuentran en ningún otro lugar de la Tierra.",
    pt: "O Chocó é um dos principais destinos de observação de aves do mundo, com centenas de espécies endêmicas. Caminhadas guiadas pela floresta ao amanhecer oferecem encontros com espécies raras não encontradas em nenhum outro lugar da Terra.",
  },
  sanjuan_gal1_cap: {
    en: "Aerial view of the Río San Juan fanning into the Pacific Ocean across 800 km² of delta plain.",
    es: "Vista aérea del Río San Juan abriéndose en abanico hacia el océano Pacífico a través de 800 km² de llanura deltaica.",
    pt: "Vista aérea do Rio San Juan se abrindo em leque para o oceano Pacífico através de 800 km² de planície deltaica.",
  },
  sanjuan_gal2_cap: {
    en: "Dense mangrove forests line the distributary channels, providing habitat for countless fish, birds, and mammals.",
    es: "Los densos bosques de manglares bordean los canales distribuidores, proporcionando hábitat para innumerables peces, aves y mamíferos.",
    pt: "Densas florestas de mangue bordeiam os canais distributários, fornecendo habitat para inúmeros peixes, aves e mamíferos.",
  },
  sanjuan_gal3_cap: {
    en: "The Pacific horizon at dusk, seen from the delta's advancing shoreline of barrier islands and beach ridges.",
    es: "El horizonte del Pacífico al atardecer, visto desde la línea costera en avance del delta de islas barrera y crestas de playa.",
    pt: "O horizonte do Pacífico ao entardecer, visto da linha costeira em avanço do delta de ilhas barreira e cristas de praia.",
  },
  sanjuan_gal4_cap: {
    en: "The Chocó bioregion surrounding the delta is home to a staggering density of endemic species.",
    es: "La biorregión del Chocó que rodea el delta alberga una asombrosa densidad de especies endémicas.",
    pt: "A biorregião do Chocó ao redor do delta abriga uma espantosa densidade de espécies endêmicas.",
  },
  sanjuan_gal5_cap: {
    en: "Afro-Colombian and Emberá communities build their lives directly over the water, perfectly adapted to the delta's rhythms.",
    es: "Las comunidades afrocolombianas y Emberá construyen sus vidas directamente sobre el agua, perfectamente adaptadas a los ritmos del delta.",
    pt: "Comunidades afro-colombianas e Emberá constroem suas vidas diretamente sobre a água, perfeitamente adaptadas aos ritmos do delta.",
  },
  rio_stat1_value: {
    en: "500+ Species",
    es: "500+ Especies",
    pt: "500+ Espécies",
  },
  rio_stat1_label: {
    en: "Bird Species",
    es: "Especies de Aves",
    pt: "Espécies de Aves",
  },
  rio_stat1_desc: {
    en: "On the Great Texas Coastal Flyway",
    es: "En la Gran Ruta Migratoria Costera de Texas",
    pt: "Na Grande Rota Migratória Costeira do Texas",
  },
  rio_stat2_value: { en: "Resacas", es: "Resacas", pt: "Resacas" },
  rio_stat2_label: { en: "Wetlands", es: "Humedales", pt: "Zonas Úmidas" },
  rio_stat2_desc: {
    en: "Ancient oxbow lakes of the delta",
    es: "Antiguos lagos de meandro del delta",
    pt: "Antigos lagos meandrantes do delta",
  },
  rio_stat3_value: { en: "2 Countries", es: "2 Países", pt: "2 Países" },
  rio_stat3_label: { en: "One Delta", es: "Un Delta", pt: "Um Delta" },
  rio_stat3_desc: {
    en: "Where the US meets Mexico",
    es: "Donde EE.UU. se encuentra con México",
    pt: "Onde os EUA encontram o México",
  },
  rio_stat4_value: { en: "Tex-Mex", es: "Tex-Mex", pt: "Tex-Mex" },
  rio_stat4_label: { en: "Cuisine", es: "Gastronomía", pt: "Gastronomia" },
  rio_stat4_desc: {
    en: "A fusion born on the border",
    es: "Una fusión nacida en la frontera",
    pt: "Uma fusão nascida na fronteira",
  },
  rio_ch1_title: {
    en: "500 Species on the Flyway",
    es: "500 Especies en la Ruta Migratoria",
    pt: "500 Espécies na Rota Migratória",
  },
  rio_ch1_p1: {
    en: "The Rio Grande Delta, known locally as the Lower Rio Grande Valley, sits at the convergence of four major ecological zones, making it one of the most important birdwatching destinations in all of North America. Over 500 bird species have been recorded here, drawn by the delta's unique mix of subtropical scrub, coastal wetlands, and riparian forest. The colourful green jay, the brilliant altamira oriole, and the elusive ferruginous pygmy owl are just a few of the species that draw birders from around the world.",
    es: "El Delta del Río Grande, conocido localmente como el Valle Bajo del Río Grande, se encuentra en la convergencia de cuatro grandes zonas ecológicas, lo que lo convierte en uno de los destinos de avistamiento de aves más importantes de toda América del Norte. Aquí se han registrado más de 500 especies de aves, atraídas por la mezcla única de matorral subtropical, humedales costeros y bosque ribereño del delta. El colorido chara verde, la brillante cacique de Altamira y el esquivo tecolote serrano son solo algunas de las especies que atraen a los observadores de aves de todo el mundo.",
    pt: "O Delta do Rio Grande, conhecido localmente como Vale Baixo do Rio Grande, fica na convergência de quatro grandes zonas ecológicas, tornando-o um dos destinos de observação de aves mais importantes de toda a América do Norte. Mais de 500 espécies de aves foram registradas aqui, atraídas pela mistura única de mato subtropical, áreas úmidas costeiras e floresta ripária do delta. O colorido gaio-verde, o brilhante corrupião-de-altamira e o esquivo caburé-dos-EUA são apenas algumas das espécies que atraem observadores de aves de todo o mundo.",
  },
  rio_ch1_p2: {
    en: "Every spring and autumn, millions of migratory birds funnel through the delta along the Great Texas Coastal Flyway, one of the most significant bird migration corridors in the Western Hemisphere. The Santa Ana National Wildlife Refuge and the Bentsen–Rio Grande Valley State Park are the premier spots to witness this annual spectacle, offering guided tours and tram rides through habitats that simply do not exist anywhere else in the United States.",
    es: "Cada primavera y otoño, millones de aves migratorias fluyen por el delta a lo largo de la Gran Ruta Migratoria Costera de Texas, uno de los corredores de migración de aves más significativos del hemisferio occidental. El Refugio Nacional de Vida Silvestre de Santa Ana y el Parque Estatal Bentsen del Valle del Río Grande son los principales lugares para presenciar este espectáculo anual, ofreciendo tours guiados y paseos en tranvía por hábitats que simplemente no existen en ningún otro lugar de los Estados Unidos.",
    pt: "A cada primavera e outono, milhões de aves migratórias fluem pelo delta ao longo da Grande Rota Migratória Costeira do Texas, um dos corredores de migração de aves mais significativos do hemisfério ocidental. O Refúgio Nacional de Vida Selvagem de Santa Ana e o Parque Estadual Bentsen do Vale do Rio Grande são os principais locais para testemunhar este espetáculo anual, oferecendo visitas guiadas e passeios de bonde por habitats que simplesmente não existem em nenhum outro lugar dos Estados Unidos.",
  },
  rio_break1_label: {
    en: "Millions of birds pass through the delta each season along the Great Texas Coastal Flyway",
    es: "Millones de aves pasan por el delta cada temporada a lo largo de la Gran Ruta Migratoria Costera de Texas",
    pt: "Milhões de aves passam pelo delta a cada temporada ao longo da Grande Rota Migratória Costeira do Texas",
  },
  rio_ch2_title: {
    en: "The Resacas: A Hidden Water World",
    es: "Las Resacas: Un Mundo Acuático Oculto",
    pt: "As Resacas: Um Mundo Aquático Oculto",
  },
  rio_ch2_p1: {
    en: "The Rio Grande Delta is defined by its extraordinary network of resacas, ancient oxbow lakes formed as the river slowly shifted its course over thousands of years. These crescent-shaped wetlands are now critical wildlife refuges, sheltering alligators, river turtles, roseate spoonbills, and dozens of species of wading birds within the heart of one of the most densely populated border regions in the United States.",
    es: "El Delta del Río Grande se define por su extraordinaria red de resacas, antiguos lagos de meandro formados a medida que el río fue cambiando lentamente su curso a lo largo de miles de años. Estos humedales en forma de media luna son ahora refugios críticos para la fauna, albergando caimanes, tortugas de río, espátulas rosadas y decenas de especies de aves zancudas en el corazón de una de las regiones fronterizas más densamente pobladas de los Estados Unidos.",
    pt: "O Delta do Rio Grande é definido por sua extraordinária rede de resacas, antigos lagos meandrantes formados enquanto o rio mudava lentamente seu curso ao longo de milhares de anos. Essas zonas úmidas em forma de meia-lua são agora refúgios críticos para a vida selvagem, abrigando jacarés, tartarugas de rio, colhereiros rosados e dezenas de espécies de aves pernaltas no coração de uma das regiões fronteiriças mais densamente povoadas dos Estados Unidos.",
  },
  rio_ch2_p2: {
    en: "The delta's thornscrub and riparian forest are among the last refuges for the endangered ocelot in the United States. Fewer than 60 individuals are estimated to remain in the wild here. Conservation efforts led by wildlife organisations and the US Fish and Wildlife Service have created wildlife corridors linking fragmented habitat patches, giving this secretive spotted cat a fighting chance of survival in the only place it still roams north of the Mexican border.",
    es: "El matorral espinoso y el bosque ribereño del delta se encuentran entre los últimos refugios para el ocelote en peligro de extinción en los Estados Unidos. Se estima que menos de 60 individuos permanecen en libertad aquí. Los esfuerzos de conservación liderados por organizaciones de fauna y el Servicio de Pesca y Vida Silvestre de EE.UU. han creado corredores de vida silvestre que conectan parches de hábitat fragmentados, dando a este secreto gato manchado una oportunidad de supervivencia en el único lugar donde aún deambula al norte de la frontera mexicana.",
    pt: "O mato espinhoso e a floresta ripária do delta estão entre os últimos refúgios para a onça-pintada em perigo de extinção nos Estados Unidos. Estima-se que menos de 60 indivíduos permaneçam em liberdade aqui. Os esforços de conservação liderados por organizações de vida selvagem e o Serviço de Pesca e Vida Selvagem dos EUA criaram corredores de vida selvagem ligando fragmentos de habitat, dando a este gato malhado secretivo uma chance de sobrevivência no único lugar onde ainda vagueia ao norte da fronteira mexicana.",
  },
  rio_break2_label: {
    en: "The endangered ocelot clings to survival in the last thornscrub of the Rio Grande Valley",
    es: "El ocelote en peligro de extinción se aferra a la supervivencia en el último matorral espinoso del Valle del Río Grande",
    pt: "O gato-maracajá em perigo de extinção se agarra à sobrevivência no último mato espinhoso do Vale do Rio Grande",
  },
  rio_ch3_title: {
    en: "Two Countries, One Living River",
    es: "Dos Países, Un Río Vivo",
    pt: "Dois Países, Um Rio Vivo",
  },
  rio_ch3_p1: {
    en: "The Rio Grande stretches over 3,000 kilometres from the Rocky Mountains of Colorado all the way to the Gulf of Mexico, forming the entire border between Texas and Mexico along its lower course. At its mouth near Boca Chica, the river arrives exhausted, heavily drained by agriculture and cities upstream, as a shallow ribbon of water that barely makes it to the sea. Yet the delta it has built over millennia remains a landscape of quiet, enduring beauty.",
    es: "El Río Grande se extiende más de 3.000 kilómetros desde las Montañas Rocosas de Colorado hasta el Golfo de México, formando toda la frontera entre Texas y México a lo largo de su curso inferior. En su desembocadura cerca de Boca Chica, el río llega agotado, muy drenado por la agricultura y las ciudades río arriba, como una cinta superficial de agua que apenas llega al mar. Sin embargo, el delta que ha construido a lo largo de milenios sigue siendo un paisaje de tranquila y duradera belleza.",
    pt: "O Rio Grande se estende por mais de 3.000 quilômetros desde as Montanhas Rochosas do Colorado até o Golfo do México, formando toda a fronteira entre o Texas e o México ao longo de seu curso inferior. Em sua foz perto de Boca Chica, o rio chega exausto, muito drenado pela agricultura e cidades a montante, como uma fita rasa de água que mal chega ao mar. No entanto, o delta que construiu ao longo de milênios permanece uma paisagem de beleza tranquila e duradoura.",
  },
  rio_ch3_p2: {
    en: "Boca Chica Beach at the river's mouth is one of the most remote corners of the Texas coast, a wide, wind-swept shoreline where the brown water of the Rio Grande dissolves into the green Gulf of Mexico. The surrounding Boca Chica State Park protects coastal dunes, tidal flats, and rare nesting sites for the endangered Kemp's ridley sea turtle, one of the world's rarest sea turtles, which still returns each season to lay its eggs on these quiet shores.",
    es: "La playa de Boca Chica en la desembocadura del río es uno de los rincones más remotos de la costa de Texas, una amplia y batida por el viento orilla donde el agua marrón del Río Grande se disuelve en el verde Golfo de México. El Parque Estatal de Boca Chica circundante protege dunas costeras, marismas de marea y raros sitios de anidación para la tortuga lora en peligro de extinción, una de las tortugas marinas más raras del mundo, que aún regresa cada temporada para poner sus huevos en estas tranquilas orillas.",
    pt: "A Praia de Boca Chica na foz do rio é um dos cantos mais remotos da costa do Texas, uma orla ampla e varrida pelo vento onde a água marrom do Rio Grande se dissolve no verde Golfo do México. O circundante Parque Estadual de Boca Chica protege dunas costeiras, planícies de maré e raros locais de nidificação para a tartaruga-de-kemps em perigo de extinção, uma das tartarugas marinhas mais raras do mundo, que ainda retorna a cada temporada para botar seus ovos nestas praias tranquilas.",
  },
  rio_break3_label: {
    en: "Boca Chica, where the Rio Grande finally reaches the Gulf of Mexico",
    es: "Boca Chica, donde el Río Grande finalmente alcanza el Golfo de México",
    pt: "Boca Chica, onde o Rio Grande finalmente alcança o Golfo do México",
  },
  rio_ch4_title: {
    en: "Tex-Mex: A Culture Born on the Border",
    es: "Tex-Mex: Una Cultura Nacida en la Frontera",
    pt: "Tex-Mex: Uma Cultura Nascida na Fronteira",
  },
  rio_ch4_p1: {
    en: "The Rio Grande Delta is the birthplace of Tex-Mex cuisine, a cooking tradition that grew from the blending of Mexican and Texan cultures along this shared border over hundreds of years. The Valley's famous Ruby Red grapefruit, grown in the subtropical delta soil, is one of the most prized citrus fruits in the world. Alongside it, chilli peppers, maize, and fresh Gulf seafood form the backbone of a local food culture that is entirely its own.",
    es: "El Delta del Río Grande es el lugar de nacimiento de la cocina Tex-Mex, una tradición culinaria que surgió de la fusión de las culturas mexicana y tejana a lo largo de esta frontera compartida durante cientos de años. La famosa toronja Ruby Red del Valle, cultivada en el suelo subtropical del delta, es una de las frutas cítricas más apreciadas del mundo. Junto a ella, los chiles, el maíz y el marisco fresco del Golfo forman la columna vertebral de una cultura gastronómica local que es completamente propia.",
    pt: "O Delta do Rio Grande é o berço da culinária Tex-Mex, uma tradição culinária que cresceu da mistura das culturas mexicana e texana ao longo desta fronteira compartilhada por centenas de anos. A famosa toranja Ruby Red do Vale, cultivada no solo subtropical do delta, é uma das frutas cítricas mais valorizadas do mundo. Ao lado dela, pimentas, milho e frutos do mar frescos do Golfo formam a espinha dorsal de uma cultura gastronômica local que é inteiramente própria.",
  },
  rio_ch4_p2: {
    en: "The twin cities of Brownsville, Texas and Matamoros, Mexico face each other across the river, connected by bridges and centuries of shared history. Exploring both sides gives visitors a genuine taste of border life, the music, the markets, the architecture, and the warmth of a community that has always lived between two worlds. The region's Tejano and norteño music traditions fill the air at festivals and restaurants, and the Historic Brownsville Museum tells the full story of this remarkable cultural crossroads.",
    es: "Las ciudades gemelas de Brownsville, Texas, y Matamoros, México, se enfrentan entre sí a través del río, conectadas por puentes y siglos de historia compartida. Explorar ambos lados da a los visitantes un auténtico sabor de la vida fronteriza, la música, los mercados, la arquitectura y la calidez de una comunidad que siempre ha vivido entre dos mundos. Las tradiciones musicales tejanas y norteñas de la región llenan el aire en festivales y restaurantes, y el Museo Histórico de Brownsville cuenta la historia completa de este notable cruce de culturas.",
    pt: "As cidades gêmeas de Brownsville, Texas, e Matamoros, México, se enfrentam através do rio, conectadas por pontes e séculos de história compartilhada. Explorar ambos os lados dá aos visitantes um gosto genuíno da vida na fronteira, a música, os mercados, a arquitetura e a cordialidade de uma comunidade que sempre viveu entre dois mundos. As tradições musicais tejanas e norteñas da região enchem o ar em festivais e restaurantes, e o Museu Histórico de Brownsville conta a história completa deste notável cruzamento cultural.",
  },
  rio_break4_label: {
    en: "The twin cities of Brownsville and Matamoros, sharing centuries of border culture",
    es: "Las ciudades gemelas de Brownsville y Matamoros, compartiendo siglos de cultura fronteriza",
    pt: "As cidades gêmeas de Brownsville e Matamoros, compartilhando séculos de cultura fronteiriça",
  },
  rio_act_intro: {
    en: "Discover the many ways to experience the Rio Grande Delta, from fishing in ancient resaca lakes to world-class birdwatching and cross-border cultural tours.",
    es: "Descubre las muchas formas de vivir el Delta del Río Grande, desde la pesca en antiguos lagos de resaca hasta el avistamiento de aves de primer nivel y los tours culturales transfronterizos.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Rio Grande, desde a pesca em antigos lagos de resaca até a observação de aves de classe mundial e tours culturais transfronteiriços.",
  },
  rio_act1_tag: { en: "Sport", es: "Deporte", pt: "Esporte" },
  rio_act1_name: {
    en: "Resaca & River Fishing",
    es: "Pesca en Resacas y el Río",
    pt: "Pesca em Resacas e no Rio",
  },
  rio_act1_desc: {
    en: "Cast a line in the delta's ancient resaca lakes or along the Rio Grande itself, where redfish, black drum, and catfish thrive in the warm, brackish waters. Guided fishing trips offer access to the most productive spots in this remarkably undervisited corner of Texas.",
    es: "Lanza una caña en los antiguos lagos de resaca del delta o a lo largo del propio Río Grande, donde el róbalo, el corvina negra y el bagre prosperan en las cálidas aguas salobres. Los viajes de pesca guiados ofrecen acceso a los lugares más productivos de este rincón notablemente poco visitado de Texas.",
    pt: "Lance uma linha nos antigos lagos de resaca do delta ou ao longo do próprio Rio Grande, onde o robalo, o tambor negro e o bagre prosperam nas águas quentes e salobras. As pescarias guiadas oferecem acesso aos pontos mais produtivos deste canto notavelmente pouco visitado do Texas.",
  },
  rio_act2_tag: { en: "Wildlife", es: "Fauna", pt: "Fauna" },
  rio_act2_name: {
    en: "World-Class Birdwatching",
    es: "Avistamiento de Aves de Clase Mundial",
    pt: "Observação de Aves de Classe Mundial",
  },
  rio_act2_desc: {
    en: "The Lower Rio Grande Valley is ranked among the top ten birdwatching destinations in the United States. Visit the Santa Ana National Wildlife Refuge or Bentsen State Park for guided tours through subtropical forest and wetlands teeming with species found nowhere else north of the border.",
    es: "El Valle Bajo del Río Grande está clasificado entre los diez mejores destinos de avistamiento de aves de los Estados Unidos. Visita el Refugio Nacional de Vida Silvestre de Santa Ana o el Parque Estatal Bentsen para tours guiados por bosques subtropicales y humedales repletos de especies que no se encuentran en ningún otro lugar al norte de la frontera.",
    pt: "O Vale Baixo do Rio Grande é classificado entre os dez melhores destinos de observação de aves dos Estados Unidos. Visite o Refúgio Nacional de Vida Selvagem de Santa Ana ou o Parque Estadual Bentsen para visitas guiadas por florestas subtropicais e zonas úmidas repletas de espécies não encontradas em nenhum outro lugar ao norte da fronteira.",
  },
  rio_act3_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  rio_act3_name: {
    en: "Cross-Border Culture Tours",
    es: "Tours Culturales Transfronterizos",
    pt: "Tours Culturais Transfronteiriços",
  },
  rio_act3_desc: {
    en: "Cross the international bridge into Matamoros and explore the vibrant markets, street food, and colonial architecture of one of Mexico's most accessible border cities. Then return to Brownsville for Tejano culture, live norteño music, and some of the finest Mexican-American food anywhere in Texas.",
    es: "Cruza el puente internacional hacia Matamoros y explora los vibrantes mercados, la comida callejera y la arquitectura colonial de una de las ciudades fronterizas más accesibles de México. Luego regresa a Brownsville para la cultura tejana, la música norteña en vivo y algo de la mejor comida mexicano-americana de todo Texas.",
    pt: "Cruze a ponte internacional para Matamoros e explore os vibrantes mercados, comida de rua e arquitetura colonial de uma das cidades fronteiriças mais acessíveis do México. Depois retorne a Brownsville para a cultura tejana, música norteña ao vivo e alguns dos melhores alimentos mexicano-americanos do Texas.",
  },
  rio_gal1_cap: {
    en: "Aerial view of the Rio Grande reaching the Gulf of Mexico at Boca Chica, Texas.",
    es: "Vista aérea del Río Grande llegando al Golfo de México en Boca Chica, Texas.",
    pt: "Vista aérea do Rio Grande chegando ao Golfo do México em Boca Chica, Texas.",
  },
  rio_gal2_cap: {
    en: "A resaca oxbow lake at sunset, an ancient trace of the Rio Grande's ever-shifting course.",
    es: "Un lago de resaca al atardecer, una huella antigua del curso siempre cambiante del Río Grande.",
    pt: "Um lago de resaca ao pôr do sol, um traço antigo do curso sempre mutável do Rio Grande.",
  },
  rio_gal3_cap: {
    en: "Roseate spoonbills wade through the shallow resacas of the Rio Grande Delta in search of food.",
    es: "Espátulas rosadas vadean por las poco profundas resacas del Delta del Río Grande en busca de alimento.",
    pt: "Colhereiros rosados vadeiam pelas resacas rasas do Delta do Rio Grande em busca de comida.",
  },
  rio_gal4_cap: {
    en: "The vivid green jay is one of the Valley's most celebrated and sought-after birds.",
    es: "La vistosa chara verde es una de las aves más celebradas y buscadas del Valle.",
    pt: "O vívido gaio-verde é uma das aves mais celebradas e procuradas do Vale.",
  },
  rio_gal5_cap: {
    en: "Boca Chica is one of the most remote and unspoilt stretches of the Texas Gulf Coast.",
    es: "Boca Chica es uno de los tramos más remotos e inalterados de la costa del Golfo de Texas.",
    pt: "Boca Chica é um dos trechos mais remotos e preservados da costa do Golfo do Texas.",
  },

  /* ── Homepage extra ── */
  home_intro_p1: {
    en: "River deltas are among the most dynamic and productive landscapes on our planet, shifting masterpieces where mighty rivers finally surrender to the sea. These vast, aquatic labyrinths are more than geographical landmarks; they are the Earth's living veins, carving out fertile sanctuaries and cradling some of the most unique ecosystems found in the Western Hemisphere.",
    es: "Los deltas fluviales se encuentran entre los paisajes más dinámicos y productivos de nuestro planeta, obras maestras cambiantes donde los grandes ríos finalmente se rinden al mar. Estos vastos laberintos acuáticos son más que accidentes geográficos; son las venas vivas de la Tierra, creando santuarios fértiles y acunando algunos de los ecosistemas más únicos del Hemisferio Occidental.",
    pt: "Os deltas fluviais estão entre as paisagens mais dinâmicas e produtivas do nosso planeta, obras-primas em constante mudança onde os grandes rios finalmente se rendem ao mar. Estes vastos labirintos aquáticos são mais do que marcos geográficos; são as veias vivas da Terra, criando santuários férteis e abrigando alguns dos ecossistemas mais únicos do Hemisfério Ocidental.",
  },
  home_intro_p2: {
    en: "In the Americas, the legendary Mississippi and the sprawling Paraná stand as titans of nature, sculpting the very terrain they inhabit. From the cypress-lined bayous of the North to the lush, tropical wetlands of the South, these deltas act as vital lifelines, sheltering rare wildlife, filtering our waters, and sustaining the vibrant cultures of the communities that call their banks home.",
    es: "En las Américas, el legendario Mississippi y el extenso Paraná se erigen como titanes de la naturaleza, esculpiendo el propio terreno que habitan. Desde los bayous bordeados de cipreses del Norte hasta los exuberantes humedales tropicales del Sur, estos deltas actúan como líneas de vida vitales, albergando fauna rara, filtrando nuestras aguas y sosteniendo las vibrantes culturas de las comunidades que llaman hogar a sus orillas.",
    pt: "Nas Américas, o lendário Mississippi e o vasto Paraná se erguem como titãs da natureza, esculpindo o próprio terreno que habitam. Dos bayous orlados de cipreste do Norte às exuberantes zonas úmidas tropicais do Sul, esses deltas atuam como linhas vitais de vida, abrigando fauna rara, filtrando nossas águas e sustentando as culturas vibrantes das comunidades que chamam suas margens de lar.",
  },
  home_intro_strong: {
    en: "The journey begins where the river ends.",
    es: "El viaje comienza donde el río termina.",
    pt: "A jornada começa onde o rio termina.",
  },
  home_section_sub: {
    en: "Nine extraordinary river deltas across the Americas, each with its own story to tell",
    es: "Nueve extraordinarios deltas fluviales en las Américas, cada uno con su propia historia que contar",
    pt: "Nove extraordinários deltas fluviais nas Américas, cada um com sua própria história para contar",
  },
  home_region_northamerica: {
    en: "North America",
    es: "América del Norte",
    pt: "América do Norte",
  },
  home_region_southamerica: {
    en: "South America",
    es: "América del Sur",
    pt: "América do Sul",
  },
  home_adventure_p: {
    en: "Ready to leave the map behind and step into the wild? Whether you are drawn to the slow drift of a bayou cruise, the raw power of the Amazon, or the haunting silence of the Yukon delta, we can help you plan a journey you will never forget.",
    es: "¿Listo para dejar el mapa atrás y adentrarte en lo salvaje? Ya sea que te atraiga la lenta deriva de un crucero por el bayou, el poder bruto del Amazonas o el silencio evocador del delta del Yukón, podemos ayudarte a planificar un viaje que nunca olvidarás.",
    pt: "Pronto para deixar o mapa para trás e mergulhar na natureza selvagem? Seja você atraído pela deriva lenta de um cruzeiro pelo bayou, o poder bruto do Amazonas ou o silêncio evocativo do delta do Yukon, podemos ajudá-lo a planejar uma jornada que nunca esquecerá.",
  },
  home_adventure_badge: {
    en: "Explore in person",
    es: "Explora en persona",
    pt: "Explore pessoalmente",
  },
  /* ── Compare page ── */
  compare_about_h2: {
    en: "About Deltas",
    es: "Sobre los Deltas",
    pt: "Sobre os Deltas",
  },
  compare_about_p1: {
    en: "Deltas are among the most fascinating and diverse landforms on Earth. They form where rivers slow down and deposit their sediment load as they meet a larger, calmer body of water, whether that's an ocean, sea, or lake. Over thousands of years, these deposits build up into intricate networks of channels, wetlands, and islands that are unlike anywhere else on the planet.",
    es: "Los deltas se encuentran entre las formas de relieve más fascinantes y diversas de la Tierra. Se forman donde los ríos se ralentizan y depositan su carga de sedimentos al encontrarse con una masa de agua mayor y más tranquila, ya sea un océano, un mar o un lago. A lo largo de miles de años, estos depósitos se acumulan en intrincadas redes de canales, humedales e islas que no tienen igual en ningún otro lugar del planeta.",
    pt: "Os deltas estão entre as formas de relevo mais fascinantes e diversas da Terra. Formam-se onde os rios desaceleram e depositam sua carga de sedimentos ao encontrar uma massa de água maior e mais calma, seja um oceano, mar ou lago. Ao longo de milhares de anos, esses depósitos se acumulam em intrincadas redes de canais, zonas úmidas e ilhas que não têm igual em nenhum outro lugar do planeta.",
  },
  compare_about_p2: {
    en: "For nature adventurers, deltas are a dream destination. They are home to extraordinary concentrations of wildlife: migratory birds, rare fish species, mammals, reptiles, and a dazzling variety of plant life all thrive in these transitional zones between freshwater and saltwater. Whether you're paddling through flooded forest, trekking along muddy riverbanks, or watching a flock of herons take flight at sunrise, a delta offers experiences that few other landscapes can match.",
    es: "Para los aventureros de la naturaleza, los deltas son un destino de ensueño. Albergan extraordinarias concentraciones de fauna: aves migratorias, raras especies de peces, mamíferos, reptiles y una deslumbrante variedad de flora prosperan en estas zonas de transición entre agua dulce y salada. Ya sea que remes por un bosque inundado, camines a lo largo de orillas fangosas o veas una bandada de garzas alzar el vuelo al amanecer, un delta ofrece experiencias que pocos otros paisajes pueden igualar.",
    pt: "Para aventureiros da natureza, os deltas são um destino dos sonhos. Eles abrigam concentrações extraordinárias de vida selvagem: aves migratórias, raras espécies de peixes, mamíferos, répteis e uma variedade deslumbrante de flora prosperam nessas zonas de transição entre água doce e salgada. Seja remando por floresta inundada, caminhando ao longo de margens lamacentas ou assistindo a um bando de garças levantar voo ao amanhecer, um delta oferece experiências que poucos outros paisagens podem igualar.",
  },
  compare_about_p3: {
    en: "From the icy, remote vastness of the Yukon Delta in Alaska to the dense, steaming jungle of the Amazon, every delta has its own character, rhythm, and set of wonders waiting to be explored.",
    es: "Desde la helada e inmensa lejanía del Delta del Yukón en Alaska hasta la densa y vaporosa selva del Amazonas, cada delta tiene su propio carácter, ritmo y conjunto de maravillas esperando ser exploradas.",
    pt: "Desde a gelada e remota vastidão do Delta do Yukon no Alasca até a densa e fumegante selva do Amazonas, cada delta tem seu próprio caráter, ritmo e conjunto de maravilhas esperando para ser exploradas.",
  },
  compare_compare_h2: {
    en: "Compare Deltas",
    es: "Comparar Deltas",
    pt: "Comparar Deltas",
  },
  compare_compare_p1: {
    en: "Not all deltas are created equal, and for the adventurous traveller, the differences matter. Do you want the delta with the highest number of wildlife species, or the one with the most kayak routes? Are you looking for a place with extensive hiking trails, or a well-protected natural reserve system?",
    es: "No todos los deltas son iguales, y para el viajero aventurero, las diferencias importan. ¿Quieres el delta con el mayor número de especies de fauna, o el que tiene más rutas de kayak? ¿Buscas un lugar con extensos senderos de senderismo o un sistema de reservas naturales bien protegido?",
    pt: "Nem todos os deltas são iguais, e para o viajante aventureiro, as diferenças importam. Você quer o delta com o maior número de espécies de fauna, ou aquele com mais rotas de caiaque? Você está procurando um lugar com extensas trilhas de caminhada, ou um sistema de reservas naturais bem protegido?",
  },
  compare_compare_p2: {
    en: "Use the tool below to compare deltas side by side. Select one or more deltas by clicking on them, then switch between metrics to find the destination that matches your sense of adventure.",
    es: "Usa la herramienta a continuación para comparar deltas uno al lado del otro. Selecciona uno o más deltas haciendo clic en ellos, luego cambia entre métricas para encontrar el destino que se adapte a tu espíritu aventurero.",
    pt: "Use a ferramenta abaixo para comparar deltas lado a lado. Selecione um ou mais deltas clicando neles, depois alterne entre as métricas para encontrar o destino que corresponde ao seu espírito aventureiro.",
  },
  compare_chart_prompt: {
    en: "Select a delta to begin",
    es: "Selecciona un delta para comenzar",
    pt: "Selecione um delta para começar",
  },
  compare_chart_hint: {
    en: "Select deltas above to see the comparison",
    es: "Selecciona deltas arriba para ver la comparación",
    pt: "Selecione deltas acima para ver a comparação",
  },
  compare_metrics_h2: {
    en: "Metric Explanations",
    es: "Explicación de Métricas",
    pt: "Explicação das Métricas",
  },
  compare_metric1_label: {
    en: "Wildlife Species:",
    es: "Especies de Fauna:",
    pt: "Espécies de Fauna:",
  },
  compare_metric1_desc: {
    en: "The total number of bird, mammal, reptile, and amphibian species recorded in and around the delta. A higher number means more opportunities for wildlife watching and nature photography.",
    es: "El número total de especies de aves, mamíferos, reptiles y anfibios registradas en y alrededor del delta. Un número mayor significa más oportunidades para observar fauna y fotografía de naturaleza.",
    pt: "O número total de espécies de aves, mamíferos, répteis e anfíbios registradas no delta e ao redor. Um número maior significa mais oportunidades para observação de fauna e fotografia de natureza.",
  },
  compare_metric2_label: {
    en: "Hiking Trails (km):",
    es: "Senderos de Senderismo (km):",
    pt: "Trilhas de Caminhada (km):",
  },
  compare_metric2_desc: {
    en: "The total length of marked and maintained hiking trails through the delta region. More kilometres means more ground to explore on foot, from short walks to multi-day treks.",
    es: "La longitud total de senderos marcados y mantenidos a través de la región del delta. Más kilómetros significa más terreno para explorar a pie, desde paseos cortos hasta caminatas de varios días.",
    pt: "O comprimento total de trilhas marcadas e mantidas pela região do delta. Mais quilômetros significa mais terreno para explorar a pé, desde curtas caminhadas até treks de vários dias.",
  },
  compare_metric3_label: {
    en: "Kayak Routes:",
    es: "Rutas de Kayak:",
    pt: "Rotas de Caiaque:",
  },
  compare_metric3_desc: {
    en: "The number of navigable kayak and canoe routes through the delta's waterways. Deltas with many routes offer the most variety for paddling adventurers, from calm backwaters to open channels.",
    es: "El número de rutas navegables de kayak y canoa a través de las vías fluviales del delta. Los deltas con muchas rutas ofrecen la mayor variedad para los aventureros del remo, desde remansos tranquilos hasta canales abiertos.",
    pt: "O número de rotas navegáveis de caiaque e canoa pelas vias fluviais do delta. Deltas com muitas rotas oferecem a maior variedade para aventureiros de remo, de remansos calmos a canais abertos.",
  },
  compare_metric4_label: {
    en: "Nature Reserves:",
    es: "Reservas Naturales:",
    pt: "Reservas Naturais:",
  },
  compare_metric4_desc: {
    en: "The number of officially protected nature areas within or directly bordering the delta. More reserves generally means better-preserved ecosystems, stricter conservation, and a wilder experience.",
    es: "El número de áreas naturales oficialmente protegidas dentro del delta o directamente adyacentes a él. Más reservas generalmente significa ecosistemas mejor conservados, conservación más estricta y una experiencia más salvaje.",
    pt: "O número de áreas naturais oficialmente protegidas dentro do delta ou diretamente na sua fronteira. Mais reservas geralmente significa ecossistemas melhor preservados, conservação mais rigorosa e uma experiência mais selvagem.",
  },
  compare_metric5_label: {
    en: "Water Visibility (m):",
    es: "Visibilidad del Agua (m):",
    pt: "Visibilidade da Água (m):",
  },
  compare_metric5_desc: {
    en: "The average underwater visibility in metres. Higher visibility is ideal for snorkelling, diving, and observing aquatic life. Many delta rivers carry heavy sediment, so visibility can vary greatly.",
    es: "La visibilidad media submarina en metros. Una mayor visibilidad es ideal para el snorkel, el buceo y la observación de la vida acuática. Muchos ríos de delta transportan mucho sedimento, por lo que la visibilidad puede variar mucho.",
    pt: "A visibilidade média subaquática em metros. Maior visibilidade é ideal para snorkeling, mergulho e observação da vida aquática. Muitos rios de delta carregam muito sedimento, então a visibilidade pode variar muito.",
  },
  compare_metric6_label: {
    en: "Best Season Score:",
    es: "Puntuación de Mejor Temporada:",
    pt: "Pontuação da Melhor Temporada:",
  },
  compare_metric6_desc: {
    en: "A score out of 10 reflecting how favourable the best visiting season is, based on weather conditions, accessibility, wildlife activity, and overall comfort for outdoor adventures. A 10 means near-perfect conditions during peak season, that is, the time of year most recommended for visiting that particular delta. Please note that these scores are our own estimates and should be treated as a general indication rather than a precise measurement.",
    es: "Una puntuación sobre 10 que refleja cuán favorable es la mejor temporada de visita, basada en las condiciones meteorológicas, la accesibilidad, la actividad de la fauna y el confort general para las aventuras al aire libre. Un 10 significa condiciones casi perfectas durante la temporada alta, es decir, la época del año más recomendada para visitar ese delta en particular. Ten en cuenta que estas puntuaciones son estimaciones propias y deben tratarse como una indicación general y no como una medida precisa.",
    pt: "Uma pontuação de 10 refletindo quão favorável é a melhor temporada de visita, com base nas condições climáticas, acessibilidade, atividade da fauna e conforto geral para aventuras ao ar livre. Um 10 significa condições quase perfeitas durante a alta temporada, ou seja, a época do ano mais recomendada para visitar aquele delta em particular. Observe que essas pontuações são estimativas próprias e devem ser tratadas como uma indicação geral, não como uma medida precisa.",
  },
  /* ── Contact page extra ── */
  contact_intro_p: {
    en: "Have a question about a delta, a suggestion, or want to collaborate? Fill in the form below and we'll get back to you as soon as possible.",
    es: "Tienes una pregunta sobre un delta, una sugerencia o quieres colaborar? Rellena el formulario a continuación y nos pondremos en contacto contigo lo antes posible.",
    pt: "Tem uma pergunta sobre um delta, uma sugestão ou quer colaborar? Preencha o formulário abaixo e entraremos em contato com você o mais rápido possível.",
  },
  contact_opt_select: {
    en: "-- Select a subject --",
    es: "-- Selecciona un asunto --",
    pt: "-- Selecione um assunto --",
  },
  contact_info_email_label: { en: "Email", es: "Correo", pt: "E-mail" },
  contact_info_location_label: {
    en: "Location",
    es: "Ubicación",
    pt: "Localização",
  },
  contact_info_location_val: {
    en: "Delta's in the Americas BV, Almere, Netherlands",
    es: "Delta's in the Americas BV, Almere, Países Bajos",
    pt: "Delta's in the Americas BV, Almere, Países Baixos",
  },

  /* ══════════════════════════════════════════════
     PARANÁ DELTA
  ══════════════════════════════════════════════ */
  para_stat1_value: {
    en: "Mar\u2013May",
    es: "Mar\u2013May",
    pt: "Mar\u2013Mai",
  },
  para_stat1_label: {
    en: "Best Season",
    es: "Mejor \u00c9poca",
    pt: "Melhor \u00c9poca",
  },
  para_stat1_desc: {
    en: "Mild weather & blooming wetlands",
    es: "Clima suave y humedales en flor",
    pt: "Clima ameno e zonas \u00famidas floridas",
  },
  para_stat2_value: { en: "300+", es: "300+", pt: "300+" },
  para_stat2_label: {
    en: "Bird Species",
    es: "Especies de Aves",
    pt: "Esp\u00e9cies de Aves",
  },
  para_stat2_desc: {
    en: "Plus capybaras & marsh deer",
    es: "Adem\u00e1s de capibaras y ciervos de los pantanos",
    pt: "Al\u00e9m de capivaras e veados do p\u00e2ntano",
  },
  para_stat3_value: { en: "4,880 km", es: "4.880 km", pt: "4.880 km" },
  para_stat3_label: {
    en: "River Length",
    es: "Longitud del R\u00edo",
    pt: "Comprimento do Rio",
  },
  para_stat3_desc: {
    en: "One of the world's longest rivers",
    es: "Uno de los r\u00edos m\u00e1s largos del mundo",
    pt: "Um dos rios mais longos do mundo",
  },
  para_stat4_value: { en: "Unique", es: "\u00danico", pt: "\u00danico" },
  para_stat4_label: {
    en: "Isle\u00f1o Life",
    es: "Vida Isle\u00f1a",
    pt: "Vida Insular",
  },
  para_stat4_desc: {
    en: "Boats as the only transport",
    es: "Los barcos como \u00fanico transporte",
    pt: "Barcos como \u00fanico transporte",
  },
  para_ch1_title: {
    en: "When to Visit",
    es: "Cu\u00e1ndo Visitar",
    pt: "Quando Visitar",
  },
  para_ch1_p1: {
    en: "Running from March through May, autumn is the ideal time to visit the Paran\u00e1 Delta. The summer heat gives way to comfortable temperatures, the wetlands are lush and teeming with wildlife, and the waterways run calm and clear. It is the perfect season to explore the labyrinth of islands by kayak, wander the stilt-house communities of Tigre, and watch the fog roll in over the channels at sunrise.",
    es: "De marzo a mayo, el oto\u00f1o es la \u00e9poca ideal para visitar el Delta del Paran\u00e1. El calor del verano da paso a temperaturas agradables, los humedales est\u00e1n exuberantes y llenos de vida silvestre, y las v\u00edas fluviales fluyen tranquilas y claras. Es la estaci\u00f3n perfecta para explorar el laberinto de islas en kayak, recorrer las comunidades de casas sobre pilotes de Tigre y ver c\u00f3mo la niebla se adentra por los canales al amanecer.",
    pt: "De mar\u00e7o a maio, o outono \u00e9 a \u00e9poca ideal para visitar o Delta do Paran\u00e1. O calor do ver\u00e3o d\u00e1 lugar a temperaturas agrad\u00e1veis, os p\u00e2ntanos s\u00e3o exuberantes e cheios de vida selvagem, e as vias fluviais correm calmas e claras. \u00c9 a esta\u00e7\u00e3o perfeita para explorar o labirinto de ilhas de caiaque, passear pelas comunidades de casas sobre palafitas de Tigre e ver a n\u00e9voa entrar pelos canais ao nascer do sol.",
  },
  para_ch1_p2: {
    en: "Spring (September to November) is an excellent second option, with pleasant warmth and spectacular birdlife as species return to nest. Avoid the height of summer, when humidity can be intense and seasonal flooding occasionally disrupts access to some islands.",
    es: "La primavera (de septiembre a noviembre) es una excelente segunda opci\u00f3n, con un calor agradable y una espectacular avifauna a medida que las especies regresan para anidar. Evita el pleno verano, cuando la humedad puede ser intensa y las inundaciones estacionales ocasionalmente interrumpen el acceso a algunas islas.",
    pt: "A primavera (setembro a novembro) \u00e9 uma excelente segunda op\u00e7\u00e3o, com calor agrad\u00e1vel e vida avi\u00e1ria espetacular enquanto as esp\u00e9cies retornam para nidificar. Evite o auge do ver\u00e3o, quando a umidade pode ser intensa e as inunda\u00e7\u00f5es sazonais ocasionalmente interrompem o acesso a algumas ilhas.",
  },
  para_break1_label: {
    en: "A labyrinth of islands, channels and wetlands",
    es: "Un laberinto de islas, canales y humedales",
    pt: "Um labirinto de ilhas, canais e zonas \u00famidas",
  },
  para_ch2_title: {
    en: "Wildlife You Will Not Forget",
    es: "Fauna Que No Olvidar\u00e1s",
    pt: "Fauna Que Voc\u00ea N\u00e3o Vai Esquecer",
  },
  para_ch2_p1: {
    en: "The Paran\u00e1 Delta is a biodiversity hotspot unlike any other in South America. Over 300 bird species inhabit its wetlands and forests, from the scarlet-headed blackbird to the jabiru stork. Along the water's edge, you may spot capybaras grazing in family groups, or the elusive Marsh Deer emerging from the reeds at dusk.",
    es: "El Delta del Paran\u00e1 es un punto caliente de biodiversidad como ning\u00fan otro en Am\u00e9rica del Sur. M\u00e1s de 300 especies de aves habitan sus humedales y bosques, desde el tordo de cabeza escarlata hasta la cig\u00fce\u00f1a jabir\u00fa. A orillas del agua, puedes avistar capibaras pastando en grupos familiares, o el esquivo ciervo de los pantanos emergiendo de los juncos al atardecer.",
    pt: "O Delta do Paran\u00e1 \u00e9 um hotspot de biodiversidade \u00fanico na Am\u00e9rica do Sul. Mais de 300 esp\u00e9cies de aves habitam seus p\u00e2ntanos e florestas, do p\u00e1ssaro-de-cabe\u00e7a-escarlate ao jabiru. \u00c0 beira da \u00e1gua, voc\u00ea pode avistar capivaras pastando em grupos familiares, ou o esquivo cervo-do-pantanal emergindo dos juncos ao entardecer.",
  },
  para_ch2_p2: {
    en: '"Monte Blanco" forests of ceibo, timb\u00f3, and sarand\u00ed line the islands, while vast floating meadows of water hyacinth drift through the channels. The entire ecosystem acts as a natural water purifier for the greater Buenos Aires region, making conservation here a matter of regional importance.',
    es: 'Los bosques de "Monte Blanco" de ceibo, timb\u00f3 y sarand\u00ed bordean las islas, mientras que vastas praderas flotantes de jacinto de agua se deslizan por los canales. El ecosistema act\u00faa como purificador natural del agua para la regi\u00f3n metropolitana de Buenos Aires, lo que hace de la conservaci\u00f3n aqu\u00ed un asunto de importancia regional.',
    pt: 'As florestas de "Monte Blanco" de ceibo, timb\u00f3 e sarand\u00ed bordejam as ilhas, enquanto vastas prad\u00e1rias flutuantes de aguap\u00e9 derivam pelos canais. O ecossistema atua como purificador natural de \u00e1gua para a grande regi\u00e3o de Buenos Aires, tornando a conserva\u00e7\u00e3o aqui uma quest\u00e3o de import\u00e2ncia regional.',
  },
  para_break2_label: {
    en: "The wetlands: home to 300+ bird species and countless mammals",
    es: "Los humedales: hogar de m\u00e1s de 300 especies de aves e innumerables mam\u00edferos",
    pt: "Os p\u00e2ntanos: lar de mais de 300 esp\u00e9cies de aves e in\u00fameros mam\u00edferos",
  },
  para_ch3_title: {
    en: "A River Worth Exploring",
    es: "Un R\u00edo que Vale la Pena Explorar",
    pt: "Um Rio que Vale Explorar",
  },
  para_ch3_p1: {
    en: "Stretching 4,880 kilometres from the Brazilian highlands to the R\u00edo de la Plata, the Paran\u00e1 is one of the great rivers of the world. Uniquely, its delta does not empty into the open ocean but into another river, creating a vast, freshwater maze of channels, oxbow lakes, and floating islands that shifts and changes shape with every flood season.",
    es: "Con 4.880 kil\u00f3metros desde las tierras altas de Brasil hasta el R\u00edo de la Plata, el Paran\u00e1 es uno de los grandes r\u00edos del mundo. De manera \u00fanica, su delta no desemboca en el oc\u00e9ano abierto sino en otro r\u00edo, creando un vasto laberinto de agua dulce con canales, lagunas y islas flotantes que cambian de forma con cada temporada de crecidas.",
    pt: "Com 4.880 quil\u00f4metros desde as terras altas do Brasil at\u00e9 o R\u00edo de la Plata, o Paran\u00e1 \u00e9 um dos grandes rios do mundo. De forma \u00fanica, seu delta n\u00e3o desemboca no oceano aberto, mas em outro rio, criando um vasto labirinto de \u00e1gua doce de canais, lagos meandrantes e ilhas flutuantes que mudam de forma a cada temporada de cheias.",
  },
  para_ch3_p2: {
    en: "Exploring by kayak or wooden rowboat is the most intimate way to experience the delta. You drift past vine-draped banks, hear nothing but birdsong and water, and arrive at tiny island communities reachable only by boat, where life moves at the pace of the current.",
    es: "Explorar en kayak o en bote de remos de madera es la forma m\u00e1s \u00edntima de vivir el delta. Te deslizas junto a orillas cubiertas de enredaderas, no escuchas nada m\u00e1s que el canto de los p\u00e1jaros y el agua, y llegas a peque\u00f1as comunidades isle\u00f1as solo accesibles en barco, donde la vida avanza al ritmo de la corriente.",
    pt: "Explorar de caiaque ou barco de remos de madeira \u00e9 a forma mais \u00edntima de vivenciar o delta. Voc\u00ea deriva por margens cobertas de trepadeiras, n\u00e3o ouve nada al\u00e9m do canto dos p\u00e1ssaros e da \u00e1gua, e chega a pequenas comunidades insulares acess\u00edveis apenas por barco, onde a vida avan\u00e7a no ritmo da correnteza.",
  },
  para_break3_label: {
    en: "Floating islands that shift and reshape with every flood season",
    es: "Islas flotantes que se desplazan y remodelan con cada temporada de crecidas",
    pt: "Ilhas flutuantes que se deslocam e se remodelam a cada temporada de cheias",
  },
  para_ch4_title: {
    en: "History, Culture & the Isle\u00f1o Way",
    es: "Historia, Cultura y el Estilo Isle\u00f1o",
    pt: "Hist\u00f3ria, Cultura e o Jeito Isle\u00f1o",
  },
  para_ch4_p1: {
    en: "The delta was first navigated by the Guaran\u00ed people, who mastered its waterways long before European contact. In the late 19th and early 20th centuries, waves of European immigrants settled the islands, building the distinctive palafitos, stilt houses perched above the floodwaters, that define the landscape of towns like Tigre today.",
    es: "El delta fue navegado por primera vez por el pueblo guaran\u00ed, que domin\u00f3 sus v\u00edas fluviales mucho antes del contacto europeo. A finales del siglo XIX y principios del XX, oleadas de inmigrantes europeos se establecieron en las islas, construyendo los caracter\u00edsticos palafitos, casas sobre pilotes elevadas sobre las aguas de las crecidas, que definen el paisaje de ciudades como Tigre hoy.",
    pt: "O delta foi navegado pela primeira vez pelo povo Guaran\u00ed, que dominou suas vias fluviais muito antes do contato europeu. No final do s\u00e9culo XIX e in\u00edcio do s\u00e9culo XX, ondas de imigrantes europeus se estabeleceram nas ilhas, construindo os caracter\u00edsticos palafitos, casas sobre pilares elevadas acima das cheias, que definem a paisagem de cidades como Tigre hoje.",
  },
  para_ch4_p2: {
    en: 'Modern delta life retains a remarkable sense of isolation and community. There are no cars on the islands. Boats are the school bus, the delivery van, the ambulance. Children row themselves to school. Neighbours call to each other across the water. This is the "Isle\u00f1o" way, and experiencing it even briefly is to step into a world that feels entirely its own.',
    es: 'La vida moderna en el delta conserva un notable sentido de aislamiento y comunidad. No hay coches en las islas. Los barcos son el autob\u00fas escolar, la furgoneta de reparto, la ambulancia. Los ni\u00f1os reman hasta la escuela. Los vecinos se llaman unos a otros a trav\u00e9s del agua. Este es el estilo "isle\u00f1o", y vivirlo aunque sea brevemente es adentrarse en un mundo completamente propio.',
    pt: 'A vida moderna no delta mant\u00e9m um not\u00e1vel senso de isolamento e comunidade. N\u00e3o h\u00e1 carros nas ilhas. Os barcos s\u00e3o o \u00f4nibus escolar, a van de entregas, a ambu\u00e2ncia. As crian\u00e7as remam at\u00e9 a escola. Os vizinhos se chamam uns aos outros atrav\u00e9s da \u00e1gua. Este \u00e9 o jeito "Isle\u00f1o", e vivenci\u00e1-lo mesmo que brevemente \u00e9 entrar em um mundo que parece inteiramente pr\u00f3prio.',
  },
  para_act_intro: {
    en: "Discover the many ways to experience the Paran\u00e1 Delta, from silent kayak journeys to the vibrant pulse of nearby Buenos Aires.",
    es: "Descubre las muchas formas de vivir el Delta del Paran\u00e1, desde silenciosos viajes en kayak hasta el vibrante pulso de Buenos Aires.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Paran\u00e1, desde silenciosas viagens de caiaque at\u00e9 o vibrante pulso de Buenos Aires.",
  },
  para_act1_tag: {
    en: "Experience",
    es: "Experiencia",
    pt: "Experi\u00eancia",
  },
  para_act1_name: {
    en: "Kayaking the Channels",
    es: "Kayak por los Canales",
    pt: "Caiaque pelos Canais",
  },
  para_act1_desc: {
    en: "Paddle through a living maze of waterways, slipping beneath overhanging branches and past floating islands alive with birdsong. Guided and self-guided routes available for all levels.",
    es: "Rema por un laberinto vivo de v\u00edas fluviales, desliz\u00e1ndote bajo ramas colgantes y junto a islas flotantes llenas de canto de aves. Rutas guiadas y autoguiadas disponibles para todos los niveles.",
    pt: "Reme por um labirinto vivo de vias fluviais, deslizando sob galhos pendentes e por ilhas flutuantes repletas de canto de p\u00e1ssaros. Rotas guiadas e autoguiadas dispon\u00edveis para todos os n\u00edveis.",
  },
  para_act2_tag: { en: "Nature", es: "Naturaleza", pt: "Natureza" },
  para_act2_name: {
    en: "Birdwatching",
    es: "Avistamiento de Aves",
    pt: "Observa\u00e7\u00e3o de Aves",
  },
  para_act2_desc: {
    en: "With over 300 species, the delta is one of Argentina's premier birdwatching destinations, from jabiru storks to kingfishers.",
    es: "Con m\u00e1s de 300 especies, el delta es uno de los principales destinos de avistamiento de aves de Argentina, desde cig\u00fce\u00f1as jabir\u00fa hasta martines pescadores.",
    pt: "Com mais de 300 esp\u00e9cies, o delta \u00e9 um dos principais destinos de observa\u00e7\u00e3o de aves da Argentina, de cegonhas-jabiru a martins-pescadores.",
  },
  para_act3_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  para_act3_name: {
    en: "Tigre & the Fruit Market",
    es: "Tigre y el Mercado de Frutas",
    pt: "Tigre e o Mercado de Frutas",
  },
  para_act3_desc: {
    en: "Explore the gateway town of Tigre, its colourful river market, and the Museum of Fine Arts before heading deeper into the islands.",
    es: "Explora la ciudad de entrada de Tigre, su colorido mercado fluvial y el Museo de Bellas Artes antes de adentrarte en las islas.",
    pt: "Explore a cidade de entrada de Tigre, seu colorido mercado fluvial e o Museu de Belas Artes antes de se aventurar mais fundo nas ilhas.",
  },
  para_act4_tag: { en: "City", es: "Ciudad", pt: "Cidade" },
  para_act4_name: {
    en: "Buenos Aires Day Trip",
    es: "Excursi\u00f3n a Buenos Aires",
    pt: "Excurs\u00e3o a Buenos Aires",
  },
  para_act4_desc: {
    en: "Just an hour away, the energy of Buenos Aires makes the perfect contrast to the delta's stillness.",
    es: "A solo una hora, la energ\u00eda de Buenos Aires es el contraste perfecto con la quietud del delta.",
    pt: "A apenas uma hora, a energia de Buenos Aires \u00e9 o contraste perfeito com a quietude do delta.",
  },
  para_gal1_cap: {
    en: "Aerial view of the Paran\u00e1 Delta's branching channels meeting the R\u00edo de la Plata.",
    es: "Vista a\u00e9rea de los canales ramificados del Delta del Paran\u00e1 que confluyen con el R\u00edo de la Plata.",
    pt: "Vista a\u00e9rea dos canais ramificados do Delta do Paran\u00e1 encontrando o R\u00edo de la Plata.",
  },
  para_gal2_cap: {
    en: "Traditional palafito stilt houses built to rise above seasonal floodwaters.",
    es: "Casas tradicionales de palafito construidas para elevarse sobre las aguas de las crecidas estacionales.",
    pt: "Casas tradicionais de palafita constru\u00eddas para se elevar acima das \u00e1guas das cheias sazonais.",
  },
  para_gal3_cap: {
    en: "A capybara family at rest on the riverbank at dusk.",
    es: "Una familia de capibaras descansando en la orilla del r\u00edo al atardecer.",
    pt: "Uma fam\u00edlia de capivaras descansando na margem do rio ao entardecer.",
  },
  para_gal4_cap: {
    en: "Morning mist over a quiet channel deep in the delta interior.",
    es: "Niebla matutina sobre un canal tranquilo en el interior profundo del delta.",
    pt: "N\u00e9voa matinal sobre um canal tranquilo no interior profundo do delta.",
  },
  para_gal5_cap: {
    en: "Floating meadows of water hyacinth, a defining feature of the delta ecosystem.",
    es: "Praderas flotantes de jacinto de agua, una caracter\u00edstica definitoria del ecosistema del delta.",
    pt: "Prad\u00e1rias flutuantes de aguap\u00e9, uma caracter\u00edstica definidora do ecossistema do delta.",
  },

  /* ══════════════════════════════════════════════
     MAGDALENA DELTA
  ══════════════════════════════════════════════ */
  magd_stat1_value: {
    en: "Dec\u2013Mar",
    es: "Dic\u2013Mar",
    pt: "Dez\u2013Mar",
  },
  magd_stat1_label: {
    en: "Best Season",
    es: "Mejor \u00c9poca",
    pt: "Melhor \u00c9poca",
  },
  magd_stat1_desc: {
    en: "Dry season & Carnival time",
    es: "Temporada seca y \u00e9poca de Carnaval",
    pt: "Esta\u00e7\u00e3o seca e \u00e9poca do Carnaval",
  },
  magd_stat2_value: { en: "300+", es: "300+", pt: "300+" },
  magd_stat2_label: {
    en: "Bird Species",
    es: "Especies de Aves",
    pt: "Esp\u00e9cies de Aves",
  },
  magd_stat2_desc: {
    en: "Scarlet ibis, storks & more",
    es: "Ibis escarlata, cig\u00fce\u00f1as y m\u00e1s",
    pt: "Guar\u00e1 vermelho, cegonhas e mais",
  },
  magd_stat3_value: { en: "1,528 km", es: "1.528 km", pt: "1.528 km" },
  magd_stat3_label: {
    en: "River Length",
    es: "Longitud del R\u00edo",
    pt: "Comprimento do Rio",
  },
  magd_stat3_desc: {
    en: "Colombia's greatest river",
    es: "El r\u00edo m\u00e1s grande de Colombia",
    pt: "O maior rio da Col\u00f4mbia",
  },
  magd_stat4_value: { en: "UNESCO", es: "UNESCO", pt: "UNESCO" },
  magd_stat4_label: {
    en: "Carnival Heritage",
    es: "Patrimonio Carnavalero",
    pt: "Patrim\u00f4nio do Carnaval",
  },
  magd_stat4_desc: {
    en: "Barranquilla's world-famous festival",
    es: "El festival mundialmente famoso de Barranquilla",
    pt: "O festival mundialmente famoso de Barranquilla",
  },
  magd_ch1_title: {
    en: "When to Visit",
    es: "Cu\u00e1ndo Visitar",
    pt: "Quando Visitar",
  },
  magd_ch1_p1: {
    en: "The best time to visit the Magdalena Delta is during the dry season, running from December through March. Skies are clear, the wetlands begin to recede, and wildlife concentrates around the remaining water channels, creating exceptional conditions for birdwatching and wildlife encounters throughout the coastal lagoons and ci\u00e9nagas of northern Colombia.",
    es: "La mejor \u00e9poca para visitar el Delta del Magdalena es durante la temporada seca, de diciembre a marzo. Los cielos est\u00e1n despejados, los humedales comienzan a retroceder y la fauna se concentra alrededor de los canales de agua restantes, creando condiciones excepcionales para el avistamiento de aves y encuentros con la fauna a lo largo de las lagunas costeras y ci\u00e9nagas del norte de Colombia.",
    pt: "A melhor \u00e9poca para visitar o Delta do Magdalena \u00e9 durante a esta\u00e7\u00e3o seca, de dezembro a mar\u00e7o. Os c\u00e9us est\u00e3o limpos, os p\u00e2ntanos come\u00e7am a recuar e a fauna se concentra nos canais de \u00e1gua restantes, criando condi\u00e7\u00f5es excepcionais para observa\u00e7\u00e3o de aves e encontros com a fauna ao longo das lagoas costeiras e ci\u00e9nagas do norte da Col\u00f4mbia.",
  },
  magd_ch1_p2: {
    en: "If you are drawn to Colombia's extraordinary cultural energy, time your visit for late January and early February, when Barranquilla erupts into the world-famous Carnival. Four electrifying days of cumbia, mapal\u00e9, and comparsas rival even Rio de Janeiro. The city transforms into a riot of colour, music, and warmth that is unmistakably Caribbean.",
    es: "Si te atrae la extraordinaria energ\u00eda cultural de Colombia, programa tu visita para finales de enero y principios de febrero, cuando Barranquilla estalla en el mundialmente famoso Carnaval. Cuatro electrizantes d\u00edas de cumbia, mapal\u00e9 y comparsas rivalizan incluso con R\u00edo de Janeiro. La ciudad se transforma en un estallido de color, m\u00fasica y calidez que es inconfundiblemente caribe\u00f1o.",
    pt: "Se voc\u00ea \u00e9 atra\u00eddo pela extraordin\u00e1ria energia cultural da Col\u00f4mbia, programe sua visita para o final de janeiro e in\u00edcio de fevereiro, quando Barranquilla explode no mundialmente famoso Carnaval. Quatro dias eletrizantes de cumbia, mapal\u00e9 e comparsas rivalizam at\u00e9 com o Rio de Janeiro. A cidade se transforma em uma explos\u00e3o de cor, m\u00fasica e calor inconfund\u00edvelmente caribenha.",
  },
  magd_break1_label: {
    en: "Carnival de Barranquilla, a UNESCO Intangible Cultural Heritage",
    es: "Carnaval de Barranquilla, Patrimonio Cultural Inmaterial de la UNESCO",
    pt: "Carnaval de Barranquilla, Patrim\u00f4nio Cultural Imaterial da UNESCO",
  },
  magd_ch2_title: {
    en: "Wildlife You Will Not Forget",
    es: "Fauna Que No Olvidar\u00e1s",
    pt: "Fauna Que Voc\u00ea N\u00e3o Vai Esquecer",
  },
  magd_ch2_p1: {
    en: "The Magdalena Delta is one of South America's most significant wetland ecosystems. Its mosaic of mangrove forests, freshwater lagoons, and coastal marshes shelters over 300 bird species, including the spectacular scarlet ibis, the jabiru stork, and countless herons and egrets that wheel over the water at sunrise in scenes that feel almost prehistoric.",
    es: "El Delta del Magdalena es uno de los ecosistemas de humedales m\u00e1s importantes de Am\u00e9rica del Sur. Su mosaico de manglares, lagunas de agua dulce y marismas costeras alberga m\u00e1s de 300 especies de aves, incluido el espectacular ibis escarlata, la cig\u00fce\u00f1a jabir\u00fa, e innumerables garzas y garcetas que sobrevuelan el agua al amanecer en escenas que parecen casi prehist\u00f3ricas.",
    pt: "O Delta do Magdalena \u00e9 um dos ecossistemas de zonas \u00famidas mais significativos da Am\u00e9rica do Sul. Seu mosaico de florestas de mangue, lagoas de \u00e1gua doce e p\u00e2ntanos costeiros abriga mais de 300 esp\u00e9cies de aves, incluindo o espetacular guar\u00e1 vermelho, a cegonha-jabiru e in\u00fameras gar\u00e7as que sobrevoam a \u00e1gua ao nascer do sol em cenas que parecem quase pr\u00e9-hist\u00f3ricas.",
  },
  magd_ch2_p2: {
    en: "Beneath the surface, the Magdalena River is home to the critically endangered Magdalena River turtle and several endemic freshwater fish species found nowhere else on Earth. West Indian manatees glide silently through the quieter backwaters, and the surrounding dry tropical forest shelters howler monkeys, capybaras, and the elusive ocelot. This is a destination that rewards those who slow down.",
    es: "Bajo la superficie, el r\u00edo Magdalena es hogar de la tortuga del r\u00edo Magdalena en peligro cr\u00edtico y de varias especies end\u00e9micas de peces de agua dulce que no se encuentran en ning\u00fan otro lugar de la Tierra. Los mana t\u00edos del Caribe se deslizan silenciosamente por las aguas m\u00e1s tranquilas, y el bosque tropical seco circundante alberga monos aulladores, capibaras y el esquivo ocelote. Es un destino que recompensa a quienes reducen el ritmo.",
    pt: "Sob a superf\u00edcie, o rio Magdalena \u00e9 lar da tartaruga do rio Magdalena em estado cr\u00edtico de amea\u00e7a e de v\u00e1rias esp\u00e9cies end\u00eamicas de peixes de \u00e1gua doce n\u00e3o encontradas em nenhum outro lugar da Terra. Os peixe-bois das \u00cdndias Ocidentais deslizam silenciosamente pelos remansos mais calmos, e a floresta tropical seca circundante abriga macacos-bugios, capivaras e o esquivo gato-maracat\u00e1. Este \u00e9 um destino que recompensa quem desacelera.",
  },
  magd_break2_label: {
    en: "Ci\u00e9naga Grande de Santa Marta, a Ramsar Wetland of International Importance",
    es: "Ci\u00e9naga Grande de Santa Marta, Humedal Ramsar de Importancia Internacional",
    pt: "Ci\u00e9naga Grande de Santa Marta, Zona \u00damida Ramsar de Import\u00e2ncia Internacional",
  },
  magd_ch3_title: {
    en: "A River Worth Exploring",
    es: "Un R\u00edo que Vale la Pena Explorar",
    pt: "Um Rio que Vale Explorar",
  },
  magd_ch3_p1: {
    en: "The R\u00edo Magdalena is Colombia's lifeline, a 1,528-kilometre artery that drains the heart of the Andes and empties into the Caribbean Sea near Barranquilla. Its lower delta is a spectacular maze of shifting channels, oxbow lakes, and the vast Ci\u00e9naga Grande de Santa Marta, one of the largest coastal lagoons in Latin America.",
    es: "El R\u00edo Magdalena es el eje vital de Colombia, una arteria de 1.528 kil\u00f3metros que drena el coraz\u00f3n de los Andes y desemboca en el mar Caribe cerca de Barranquilla. Su delta inferior es un espectacular laberinto de canales cambiantes, lagos de meandro y la vasta Ci\u00e9naga Grande de Santa Marta, una de las lagunas costeras m\u00e1s grandes de Am\u00e9rica Latina.",
    pt: "O Rio Magdalena \u00e9 a veia vital da Col\u00f4mbia, uma art\u00e9ria de 1.528 quil\u00f4metros que drena o cora\u00e7\u00e3o dos Andes e desemboca no mar do Caribe perto de Barranquilla. Seu delta inferior \u00e9 um espetacular labirinto de canais em constante mudan\u00e7a, lagos meandrantes e a vasta Ci\u00e9naga Grande de Santa Marta, uma das maiores lagoas costeiras da Am\u00e9rica Latina.",
  },
  magd_ch3_p2: {
    en: "Exploring the delta by wooden lancha boat is unforgettable. Narrow waterways open past stilted fishing villages where communities have lived in harmony with the river for centuries. And rising dramatically on the horizon, snow-capped and impossibly close to the sea, stands the Sierra Nevada de Santa Marta, the world's highest coastal mountain range.",
    es: "Explorar el delta en una lancha de madera es inolvidable. Estrechas v\u00edas fluviales se abren junto a pueblos pesqueros sobre pilotes donde las comunidades han vivido en armon\u00eda con el r\u00edo durante siglos. Y alz\u00e1ndose dr\u00e1maticamente en el horizonte, coronada de nieve e imposiblemente cerca del mar, se encuentra la Sierra Nevada de Santa Marta, la cordillera costera m\u00e1s alta del mundo.",
    pt: "Explorar o delta em uma lancha de madeira \u00e9 inesquec\u00edvel. Estreitas vias fluviais se abrem por vilas de pesca sobre palafitas onde as comunidades viveram em harmonia com o rio por s\u00e9culos. E se elevando dramaticamente no horizonte, coberta de neve e impossibilitavelmente perto do mar, est\u00e1 a Sierra Nevada de Santa Marta, a cordilheira costeira mais alta do mundo.",
  },
  magd_break3_label: {
    en: "Mompox, the timeless colonial city adrift on the Magdalena",
    es: "Mompox, la ciudad colonial atemporal a la deriva en el Magdalena",
    pt: "Mompox, a atemporal cidade colonial \u00e0 deriva no Magdalena",
  },
  magd_ch4_title: {
    en: "Eat, Drink & Discover",
    es: "Come, Bebe y Descubre",
    pt: "Comer, Beber e Descobrir",
  },
  magd_ch4_p1: {
    en: "The Caribbean coast of Colombia is a feast for all the senses. The delta's rich waters produce an abundance of fresh seafood, and local cooks transform mojarra fish, shrimp, and clams into dishes full of coconut, plantain, and aj\u00ed. Do not leave without trying a bowl of sancocho de pescado, a slow-simmered fish broth that is the soul food of the Colombian coast, or fresh ceviche by the waterfront in Barranquilla.",
    es: "La costa caribe\u00f1a de Colombia es un fest\u00edn para todos los sentidos. Las ricas aguas del delta producen una abundancia de mariscos frescos, y los cocineros locales transforman el pescado mojarra, los camarones y las almejas en platos llenos de coco, pl\u00e1tano y aj\u00ed. No te vayas sin probar un sancocho de pescado, un caldo de pescado a fuego lento que es el alimento del alma de la costa colombiana, o ceviche fresco junto al malec\u00f3n de Barranquilla.",
    pt: "A costa caribenha da Col\u00f4mbia \u00e9 um banquete para todos os sentidos. As ricas \u00e1guas do delta produzem uma abund\u00e2ncia de frutos do mar frescos, e os cozinheiros locais transformam peixe mojarra, camer\u00e3o e mariscos em pratos cheios de coco, banana-da-terra e aj\u00ed. N\u00e3o saia sem provar uma tigela de sancocho de pescado, um caldo de peixe cozido lentamente que \u00e9 a comida da alma da costa colombiana, ou ceviche fresco \u00e0 beira do porto em Barranquilla.",
  },
  magd_ch4_p2: {
    en: "Beyond the food, the delta region pulses with cultural life. Barranquilla's Carnival is a UNESCO Intangible Cultural Heritage of Humanity, and the city's music scene, rooted in cumbia, vallenato, and porro, is alive every weekend of the year. Nearby, the colonial city of Mompox drifts in a timeless haze along a quiet Magdalena backwater, its cobblestone streets seemingly untouched by the modern world.",
    es: "M\u00e1s all\u00e1 de la comida, la regi\u00f3n del delta pulsa con vida cultural. El Carnaval de Barranquilla es Patrimonio Cultural Inmaterial de la Humanidad de la UNESCO, y la escena musical de la ciudad, enraizada en la cumbia, el vallenato y el porro, est\u00e1 viva todos los fines de semana del a\u00f1o. Cerca, la ciudad colonial de Mompox se desliza en una atm\u00f3sfera atemporal a lo largo de un tranquilo remanso del Magdalena, con sus calles adoquinadas aparentemente intactas por el mundo moderno.",
    pt: "Al\u00e9m da comida, a regi\u00e3o do delta pulsa com vida cultural. O Carnaval de Barranquilla \u00e9 Patrim\u00f4nio Cultural Imaterial da Humanidade da UNESCO, e a cena musical da cidade, enraizada na cumbia, no vallenato e no porro, est\u00e1 viva todos os fins de semana do ano. Pr\u00f3xima, a cidade colonial de Mompox deriva em uma n\u00e9voa atemporal ao longo de um remanso tranquilo do Magdalena, com suas ruas de paralelepipedos aparentemente intocadas pelo mundo moderno.",
  },
  magd_act_intro: {
    en: "Discover the many ways to experience the Magdalena Delta, from silent lagoon paddles to the thundering rhythms of Barranquilla's Carnival.",
    es: "Descubre las muchas formas de vivir el Delta del Magdalena, desde silenciosos paseos en canoa por las lagunas hasta los atronadores ritmos del Carnaval de Barranquilla.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Magdalena, desde silenciosos passeios de canoa pelas lagoas at\u00e9 os trovejantes ritmos do Carnaval de Barranquilla.",
  },
  magd_act1_tag: { en: "Nature", es: "Naturaleza", pt: "Natureza" },
  magd_act1_name: {
    en: "Birdwatching & Wildlife Tours",
    es: "Avistamiento de Aves y Tours de Fauna",
    pt: "Observa\u00e7\u00e3o de Aves e Tours de Fauna",
  },
  magd_act1_desc: {
    en: "Explore the Ci\u00e9naga Grande de Santa Marta on a guided boat tour and witness flocks of scarlet ibis, flamingos, and herons in one of South America's most important wetland bird sanctuaries, a spectacle that stays with you for life.",
    es: "Explora la Ci\u00e9naga Grande de Santa Marta en un tour en barco guiado y presencia bandadas de ibis escarlata, flamencos y garzas en uno de los santuarios de aves m\u00e1s importantes de Am\u00e9rica del Sur, un espect\u00e1culo que permanece contigo de por vida.",
    pt: "Explore a Ci\u00e9naga Grande de Santa Marta em um passeio de barco guiado e testemunhe bandos de guar\u00e1 vermelho, flamingos e gar\u00e7as em um dos mais importantes santu\u00e1rios de aves de zonas \u00famidas da Am\u00e9rica do Sul, um espet\u00e1culo que fica com voc\u00ea para sempre.",
  },
  magd_act2_tag: {
    en: "Experience",
    es: "Experiencia",
    pt: "Experi\u00eancia",
  },
  magd_act2_name: {
    en: "River & Lagoon Canoeing",
    es: "Canoa por R\u00edos y Lagunas",
    pt: "Canoa por Rios e Lagoas",
  },
  magd_act2_desc: {
    en: "Paddle through narrow mangrove channels and open lagoons, drifting past stilted fishing villages into the heart of the delta's pristine waterways.",
    es: "Rema por estrechos canales de manglares y lagunas abiertas, desliz\u00e1ndote junto a pueblos pesqueros sobre pilotes hacia el coraz\u00f3n de las pristinas v\u00edas fluviales del delta.",
    pt: "Reme por estreitos canais de mangue e lagoas abertas, derivando por vilas de pesca sobre palafitas rumo ao cora\u00e7\u00e3o das pristinas vias fluviais do delta.",
  },
  magd_act3_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  magd_act3_name: {
    en: "Carnival de Barranquilla",
    es: "Carnaval de Barranquilla",
    pt: "Carnaval de Barranquilla",
  },
  magd_act3_desc: {
    en: "Four days of cumbia, mapal\u00e9, and comparsas that transform Barranquilla into a vibrant celebration of Colombia's African, Indigenous, and European heritage.",
    es: "Cuatro d\u00edas de cumbia, mapal\u00e9 y comparsas que transforman Barranquilla en una celebraci\u00f3n vibrante del patrimonio africano, ind\u00edgena y europeo de Colombia.",
    pt: "Quatro dias de cumbia, mapal\u00e9 e comparsas que transformam Barranquilla em uma vibrante celebra\u00e7\u00e3o do patrim\u00f4nio africano, ind\u00edgena e europeu da Col\u00f4mbia.",
  },
  magd_act4_tag: { en: "Heritage", es: "Patrimonio", pt: "Patrim\u00f4nio" },
  magd_act4_name: {
    en: "Colonial Mompox",
    es: "Mompox Colonial",
    pt: "Mompox Colonial",
  },
  magd_act4_desc: {
    en: "A UNESCO World Heritage city adrift in time on a quiet branch of the Magdalena.",
    es: "Una ciudad Patrimonio Mundial de la UNESCO a la deriva en el tiempo en un tranquilo afluente del Magdalena.",
    pt: "Uma cidade Patrim\u00f4nio Mundial da UNESCO \u00e0 deriva no tempo em um ramo tranquilo do Magdalena.",
  },
  magd_gal1_cap: {
    en: "Aerial view of the Magdalena River branching into the Caribbean Sea near Barranquilla.",
    es: "Vista a\u00e9rea del r\u00edo Magdalena ramific\u00e1ndose hacia el mar Caribe cerca de Barranquilla.",
    pt: "Vista a\u00e9rea do rio Magdalena se ramificando para o mar do Caribe perto de Barranquilla.",
  },
  magd_gal2_cap: {
    en: "The vast Ci\u00e9naga Grande de Santa Marta, a Ramsar Wetland and UNESCO Biosphere Reserve.",
    es: "La vasta Ci\u00e9naga Grande de Santa Marta, Humedal Ramsar y Reserva de Biosfera de la UNESCO.",
    pt: "A vasta Ci\u00e9naga Grande de Santa Marta, Zona \u00damida Ramsar e Reserva da Biosfera da UNESCO.",
  },
  magd_gal3_cap: {
    en: "Scarlet ibis and herons at rest in the mangrove wetlands of the northern delta.",
    es: "Ibis escarlata y garzas en reposo en los humedales de manglar del delta norte.",
    pt: "Guar\u00e1 vermelho e gar\u00e7as em repouso nos p\u00e2ntanos de mangue do delta norte.",
  },
  magd_gal4_cap: {
    en: "The timeless colonial town of Mompox, drifting on a quiet backwater of the Magdalena.",
    es: "La ciudad colonial atemporal de Mompox, a la deriva en un tranquilo remanso del Magdalena.",
    pt: "A atemporal cidade colonial de Mompox, \u00e0 deriva em um remanso tranquilo do Magdalena.",
  },
  magd_gal5_cap: {
    en: "Carnival de Barranquilla, four days of cumbia, colour, and Caribbean joy.",
    es: "Carnaval de Barranquilla, cuatro d\u00edas de cumbia, color y alegr\u00eda caribe\u00f1a.",
    pt: "Carnaval de Barranquilla, quatro dias de cumbia, cor e alegria caribenha.",
  },

  /* ══════════════════════════════════════════════
     YUKON DELTA
  ══════════════════════════════════════════════ */
  yuk_stat1_value: {
    en: "Jun\u2013Aug",
    es: "Jun\u2013Ago",
    pt: "Jun\u2013Ago",
  },
  yuk_stat1_label: {
    en: "Best Season",
    es: "Mejor \u00c9poca",
    pt: "Melhor \u00c9poca",
  },
  yuk_stat1_desc: {
    en: "Midnight sun & peak wildlife",
    es: "Sol de medianoche y fauna en su apogeo",
    pt: "Sol da meia-noite e fauna no auge",
  },
  yuk_stat2_value: { en: "Millions", es: "Millones", pt: "Milh\u00f5es" },
  yuk_stat2_label: {
    en: "Migratory Birds",
    es: "Aves Migratorias",
    pt: "Aves Migrat\u00f3rias",
  },
  yuk_stat2_desc: {
    en: "From every continent on Earth",
    es: "De todos los continentes de la Tierra",
    pt: "De todos os continentes da Terra",
  },
  yuk_stat3_value: {
    en: "129,500 km\u00b2",
    es: "129.500 km\u00b2",
    pt: "129.500 km\u00b2",
  },
  yuk_stat3_label: {
    en: "Delta Area",
    es: "\u00c1rea del Delta",
    pt: "\u00c1rea do Delta",
  },
  yuk_stat3_desc: {
    en: "One of the world's largest",
    es: "Uno de los m\u00e1s grandes del mundo",
    pt: "Um dos maiores do mundo",
  },
  yuk_stat4_value: { en: "Yup'ik", es: "Yup'ik", pt: "Yup'ik" },
  yuk_stat4_label: {
    en: "Indigenous Culture",
    es: "Cultura Ind\u00edgena",
    pt: "Cultura Ind\u00edgena",
  },
  yuk_stat4_desc: {
    en: "Thousands of years of heritage",
    es: "Miles de a\u00f1os de patrimonio",
    pt: "Milhares de anos de patrim\u00f4nio",
  },
  yuk_ch1_title: {
    en: "When to Visit",
    es: "Cu\u00e1ndo Visitar",
    pt: "Quando Visitar",
  },
  yuk_ch1_p1: {
    en: "Summer, from June through August, is the only practical window for visiting the Yukon-Kuskokwim Delta. The tundra thaws, the waterways open, and the landscape bursts into life under the long subarctic days. With up to 20 hours of daylight, there is time to explore vast wetlands, watch salmon runs, and witness one of the great wildlife spectacles on Earth.",
    es: "El verano, de junio a agosto, es la \u00fanica ventana pr\u00e1ctica para visitar el Delta de Yuk\u00f3n-Kuskokwim. La tundra se descongela, las v\u00edas fluviales se abren y el paisaje estalla en vida bajo los largos d\u00edas sub\u00e1rticos. Con hasta 20 horas de luz diurna, hay tiempo para explorar vastos humedales, observar las migraciones del salm\u00f3n y presenciar uno de los grandes espect\u00e1culos de fauna de la Tierra.",
    pt: "O ver\u00e3o, de junho a agosto, \u00e9 a \u00fanica janela pr\u00e1tica para visitar o Delta Yukon-Kuskokwim. A tundra descongela, as vias fluviais se abrem e a paisagem explode em vida sob os longos dias sub\u00e1rticos. Com at\u00e9 20 horas de luz do dia, h\u00e1 tempo para explorar vastos p\u00e2ntanos, observar as corridas de salm\u00e3o e testemunhar um dos grandes espet\u00e1culos de fauna da Terra.",
  },
  yuk_ch1_p2: {
    en: "Late May and early June offer the most dramatic birdlife, as millions of migratory birds arrive simultaneously to breed. Winters are extreme and largely inaccessible to visitors, though the frozen delta holds a haunting beauty of its own, traversed only by snowmobile and the communities who have called it home for millennia.",
    es: "Finales de mayo y principios de junio ofrecen la avifauna m\u00e1s espectacular, cuando millones de aves migratorias llegan simult\u00e1neamente para criar. Los inviernos son extremos y en gran medida inaccesibles para los visitantes, aunque el delta congelado tiene su propia belleza inquietante, atravesado \u00fanicamente en moto de nieve y por las comunidades que lo han llamado hogar durante milenios.",
    pt: "Final de maio e in\u00edcio de junho oferecem a vida avi\u00e1ria mais dram\u00e1tica, enquanto milh\u00f5es de aves migrat\u00f3rias chegam simultaneamente para se reproduzir. Os invernos s\u00e3o extremos e em grande parte inacess\u00edveis para visitantes, embora o delta congelado tenha sua pr\u00f3pria beleza assombrosa, percorrido apenas por snowmobile e pelas comunidades que o chamam de lar h\u00e1 mil\u00eanios.",
  },
  yuk_break1_label: {
    en: "The Yukon-Kuskokwim: a maze of tundra waterways",
    es: "El Yuk\u00f3n-Kuskokwim: un laberinto de v\u00edas fluviales en la tundra",
    pt: "O Yukon-Kuskokwim: um labirinto de vias fluviais na tundra",
  },
  yuk_ch2_title: {
    en: "Wildlife You Will Not Forget",
    es: "Fauna Que No Olvidar\u00e1s",
    pt: "Fauna Que Voc\u00ea N\u00e3o Vai Esquecer",
  },
  yuk_ch2_p1: {
    en: "The Yukon-Kuskokwim Delta is one of the most important wildlife refuges on the planet. Every summer, millions of birds converge here from six continents, among them the rare Emperor Goose, bar-tailed godwits, tundra swans, and vast flocks of shorebirds that darken the sky. No other delta in the Americas hosts a migration event of this scale.",
    es: "El Delta Yuk\u00f3n-Kuskokwim es uno de los refugios de fauna m\u00e1s importantes del planeta. Cada verano, millones de aves convergen aqu\u00ed desde seis continentes, entre ellas el raro ganso emperador, agujas colipintas, cisnes de la tundra y vastas bandadas de aves costeras que oscurecen el cielo. Ning\u00fan otro delta en las Am\u00e9ricas alberga un evento migratorio de esta escala.",
    pt: "O Delta Yukon-Kuskokwim \u00e9 um dos mais importantes ref\u00fagios de fauna do planeta. Cada ver\u00e3o, milh\u00f5es de aves convergem aqui de seis continentes, entre elas o raro ganso-imperador, ma\u00e7aricos-de-bico-direito, cisnes-da-tundra e vastos bandos de aves costeiras que escurecem o c\u00e9u. Nenhum outro delta nas Am\u00e9ricas hospeda um evento migrat\u00f3rio desta escala.",
  },
  yuk_ch2_p2: {
    en: "Beneath the surface, all five species of Pacific Salmon surge through the rivers in numbers that feed the entire ecosystem, from brown bears wading the banks to beluga whales gathering at the river mouths. The delta's thousands of lakes and ponds are nurseries for waterfowl that will eventually spread across the entire Western Hemisphere.",
    es: "Bajo la superficie, las cinco especies de salm\u00f3n del Pac\u00edfico surgen por los r\u00edos en cantidades que alimentan todo el ecosistema, desde osos pardos que vadean las orillas hasta belugas que se re\u00fanen en las desembocaduras. Los miles de lagos y estanques del delta son criaderos de aves acu\u00e1ticas que eventualmente se dispersar\u00e1n por todo el Hemisferio Occidental.",
    pt: "Sob a superf\u00edcie, todas as cinco esp\u00e9cies de salm\u00e3o do Pac\u00edfico surgem pelos rios em n\u00fameros que alimentam todo o ecossistema, desde ursos pardos vadeando as margens at\u00e9 baleias-brancas se reunindo nas fozas dos rios. Os milhares de lagos e lagoas do delta s\u00e3o viv\u00e9iros para aves aqu\u00e1ticas que eventualmente se espalhar\u00e3o por todo o Hemisf\u00e9rio Ocidental.",
  },
  yuk_break2_label: {
    en: "Millions of birds arrive each spring from across the globe",
    es: "Millones de aves llegan cada primavera desde todo el mundo",
    pt: "Milh\u00f5es de aves chegam a cada primavera de todo o mundo",
  },
  yuk_ch3_title: {
    en: "A Landscape Unlike Any Other",
    es: "Un Paisaje Como Ning\u00fan Otro",
    pt: "Uma Paisagem Como Nenhuma Outra",
  },
  yuk_ch3_p1: {
    en: "Covering 129,500 square kilometres, roughly the size of Louisiana, the Yukon-Kuskokwim Delta is one of the largest river deltas on Earth. It is a flat, treeless world of permafrost and peat, dotted with tens of thousands of lakes and threaded by channels that shift course with every spring thaw. There are no roads connecting the delta's villages to the outside world.",
    es: "Con 129.500 kil\u00f3metros cuadrados, aproximadamente del tama\u00f1o de Luisiana, el Delta Yuk\u00f3n-Kuskokwim es uno de los deltas fluviales m\u00e1s grandes de la Tierra. Es un mundo plano y sin \u00e1rboles de permafrost y turba, salpicado con decenas de miles de lagos y recorrido por canales que cambian de rumbo con cada deshielo primaveral. No hay carreteras que conecten los pueblos del delta con el mundo exterior.",
    pt: "Com 129.500 quil\u00f4metros quadrados, aproximadamente do tamanho da Louisiana, o Delta Yukon-Kuskokwim \u00e9 um dos maiores deltas fluviais da Terra. \u00c9 um mundo plano e sem \u00e1rvores de permafrost e turfa, salpicado com dezenas de milhares de lagos e entrecortado por canais que mudam de curso a cada degelo primaveril. N\u00e3o h\u00e1 estradas que conectem as aldeias do delta ao mundo exterior.",
  },
  yuk_ch3_p2: {
    en: 'The landscape is defined by extremes. In winter, the entire delta freezes solid under Arctic darkness. In summer, the permafrost beneath creates strange "drunken forests" of tilting black spruce at its margins, and the tundra blooms with cotton grass, lichens, and wildflowers in a brief, spectacular flourishing.',
    es: 'El paisaje est\u00e1 definido por extremos. En invierno, todo el delta se congela bajo la oscuridad \u00e1rtica. En verano, el permafrost bajo la superficie crea extra\u00f1os "bosques borrachos" de p\u00edcea negra inclinada en sus m\u00e1rgenes, y la tundra florece con hierba de algod\u00f3n, l\u00edquenes y flores silvestres en un breve y espectacular florecimiento.',
    pt: 'A paisagem \u00e9 definida por extremos. No inverno, todo o delta congela sob a escurid\u00e3o \u00e1rtica. No ver\u00e3o, o permafrost abaixo da superf\u00edcie cria estranhas "florestas b\u00eabadas" de abetos negros inclinados em suas margens, e a tundra floresce com capim-de-algod\u00e3o, l\u00edquens e flores silvestres em uma breve e espetacular flora\u00e7\u00e3o.',
  },
  yuk_break3_label: {
    en: "Subarctic tundra, vast, treeless, and teeming with life",
    es: "Tundra sub\u00e1rtica, vasta, sin \u00e1rboles y rebosante de vida",
    pt: "Tundra sub\u00e1rtica, vasta, sem \u00e1rvores e repleta de vida",
  },
  yuk_ch4_title: {
    en: "The Yup'ik People & a Threatened Homeland",
    es: "El Pueblo Yup'ik y una Patria Amenazada",
    pt: "O Povo Yup'ik e uma P\u00e1tria Amea\u00e7ada",
  },
  yuk_ch4_p1: {
    en: "For thousands of years, the delta has been the homeland of the Yup'ik and Cup'ik peoples, whose culture is woven from subsistence fishing, hunting, and a profound knowledge of the tundra and its seasons. Salmon, moose, beluga whale, and migratory birds have sustained these communities across generations, and that relationship remains central to life here today.",
    es: "Durante miles de a\u00f1os, el delta ha sido la patria de los pueblos Yup'ik y Cup'ik, cuya cultura est\u00e1 tejida de pesca de subsistencia, caza y un profundo conocimiento de la tundra y sus estaciones. El salm\u00f3n, el alce, la ballena beluga y las aves migratorias han sostenido a estas comunidades a trav\u00e9s de generaciones, y esa relaci\u00f3n sigue siendo central en la vida de aqu\u00ed hoy.",
    pt: "Por milhares de anos, o delta foi a p\u00e1tria dos povos Yup'ik e Cup'ik, cuja cultura \u00e9 tecida de pesca de subsist\u00eancia, ca\u00e7a e um profundo conhecimento da tundra e suas esta\u00e7\u00f5es. Salm\u00e3o, alce, baleia-branca e aves migrat\u00f3rias sustentaram essas comunidades ao longo de gera\u00e7\u00f5es, e essa rela\u00e7\u00e3o permanece central para a vida aqui hoje.",
  },
  yuk_ch4_p2: {
    en: "The delta now stands on the front lines of climate change. Rising sea levels and rapidly thawing permafrost are causing severe coastal erosion, threatening ancestral villages that have stood for centuries. Several communities face relocation, a crisis that has brought the Yup'ik people's story to international attention and made the Yukon Delta one of the most urgent conservation stories of our time.",
    es: "El delta ahora est\u00e1 en la primera l\u00ednea del cambio clim\u00e1tico. El aumento del nivel del mar y el r\u00e1pido deshielo del permafrost est\u00e1n causando una grave erosi\u00f3n costera, amenazando pueblos ancestrales que han existido durante siglos. Varias comunidades enfrentan la reubicaci\u00f3n, una crisis que ha llevado la historia del pueblo Yup'ik a la atenci\u00f3n internacional y ha convertido el Delta del Yuk\u00f3n en una de las historias de conservaci\u00f3n m\u00e1s urgentes de nuestro tiempo.",
    pt: "O delta agora est\u00e1 na linha de frente das mudan\u00e7as clim\u00e1ticas. O aumento do n\u00edvel do mar e o r\u00e1pido degelo do permafrost est\u00e3o causando grave eros\u00e3o costeira, amea\u00e7ando aldeias ancestrais que existiram por s\u00e9culos. V\u00e1rias comunidades enfrentam realoca\u00e7\u00e3o, uma crise que trouxe a hist\u00f3ria do povo Yup'ik \u00e0 aten\u00e7\u00e3o internacional e tornou o Delta do Yukon uma das hist\u00f3rias de conserva\u00e7\u00e3o mais urgentes de nosso tempo.",
  },
  yuk_act_intro: {
    en: "Discover the many ways to experience the Yukon Delta, from silent tundra hikes to salmon-rich river expeditions at the edge of the world.",
    es: "Descubre las muchas formas de vivir el Delta del Yuk\u00f3n, desde silenciosas caminatas por la tundra hasta expediciones fluviales ricas en salm\u00f3n en el fin del mundo.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Yukon, desde silenciosas caminhadas pela tundra at\u00e9 expedi\u00e7\u00f5es fluviais ricas em salm\u00e3o na beira do mundo.",
  },
  yuk_act1_tag: { en: "Nature", es: "Naturaleza", pt: "Natureza" },
  yuk_act1_name: {
    en: "Birdwatching Expeditions",
    es: "Expediciones de Avistamiento de Aves",
    pt: "Expedi\u00e7\u00f5es de Observa\u00e7\u00e3o de Aves",
  },
  yuk_act1_desc: {
    en: "Witness one of the planet's great wildlife spectacles as millions of birds converge on the tundra each spring. Emperor Geese, tundra swans, and shorebirds in numbers that must be seen to be believed.",
    es: "Presencia uno de los grandes espect\u00e1culos de fauna del planeta cuando millones de aves convergen en la tundra cada primavera. Gansos emperadores, cisnes de la tundra y aves costeras en n\u00fameros que hay que ver para creerlos.",
    pt: "Testemunhe um dos grandes espet\u00e1culos de fauna do planeta enquanto milh\u00f5es de aves convergem na tundra a cada primavera. Gansos-imperadores, cisnes-da-tundra e aves costeiras em n\u00fameros que precisam ser vistos para serem acreditados.",
  },
  yuk_act2_tag: {
    en: "Expedition",
    es: "Expedici\u00f3n",
    pt: "Expedi\u00e7\u00e3o",
  },
  yuk_act2_name: {
    en: "River Journeys",
    es: "Viajes Fluviales",
    pt: "Jornadas Fluviais",
  },
  yuk_act2_desc: {
    en: "Float the braided channels of the Yukon and Kuskokwim by raft or kayak, through a wilderness accessible only by water or air.",
    es: "Navega por los canales trenzados del Yuk\u00f3n y el Kuskokwim en balsa o kayak, a trav\u00e9s de una zona salvaje accesible solo por agua o aire.",
    pt: "Flutue pelos canais entra\u00e7ados do Yukon e Kuskokwim de balsas ou caiaque, atrav\u00e9s de uma regi\u00e3o selvagem acess\u00edvel apenas por \u00e1gua ou ar.",
  },
  yuk_act3_tag: {
    en: "Wilderness",
    es: "Naturaleza Salvaje",
    pt: "Natureza Selvagem",
  },
  yuk_act3_name: {
    en: "Tundra Hiking",
    es: "Senderismo en la Tundra",
    pt: "Caminhada na Tundra",
  },
  yuk_act3_desc: {
    en: "Trek across a landscape of permafrost, cotton grass, and open sky, a silence broken only by wind and birdsong.",
    es: "Camina por un paisaje de permafrost, hierba de algod\u00f3n y cielo abierto, un silencio roto solo por el viento y el canto de los p\u00e1jaros.",
    pt: "Caminhe por uma paisagem de permafrost, capim-de-algod\u00e3o e c\u00e9u aberto, um sil\u00eancio quebrado apenas pelo vento e pelo canto dos p\u00e1ssaros.",
  },
  yuk_act4_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  yuk_act4_name: {
    en: "Yup'ik Cultural Visits",
    es: "Visitas Culturales Yup'ik",
    pt: "Visitas Culturais Yup'ik",
  },
  yuk_act4_desc: {
    en: "Learn from communities whose traditions stretch back thousands of years.",
    es: "Aprende de comunidades cuyas tradiciones se remontan a miles de a\u00f1os.",
    pt: "Aprenda com comunidades cujas tradi\u00e7\u00f5es remontam a milhares de anos.",
  },
  yuk_gal1_cap: {
    en: "Aerial view of the Yukon-Kuskokwim Delta's vast network of lakes, channels, and tundra.",
    es: "Vista a\u00e9rea de la vasta red de lagos, canales y tundra del Delta Yuk\u00f3n-Kuskokwim.",
    pt: "Vista a\u00e9rea da vasta rede de lagos, canais e tundra do Delta Yukon-Kuskokwim.",
  },
  yuk_gal2_cap: {
    en: "Millions of birds gather on the delta each spring in one of nature's great migrations.",
    es: "Millones de aves se re\u00fanen en el delta cada primavera en una de las grandes migraciones de la naturaleza.",
    pt: "Milh\u00f5es de aves se re\u00fanem no delta a cada primavera em uma das grandes migra\u00e7\u00f5es da natureza.",
  },
  yuk_gal3_cap: {
    en: "The open subarctic tundra, treeless, vast, and luminous under the midnight sun.",
    es: "La tundra sub\u00e1rtica abierta, sin \u00e1rboles, vasta y luminosa bajo el sol de medianoche.",
    pt: "A tundra sub\u00e1rtica aberta, sem \u00e1rvores, vasta e luminosa sob o sol da meia-noite.",
  },
  yuk_gal4_cap: {
    en: "A Yup'ik village on the delta edge, reachable only by boat or small plane.",
    es: "Un pueblo Yup'ik en el borde del delta, accesible solo en barco o avi\u00f3n peque\u00f1o.",
    pt: "Uma aldeia Yup'ik na borda do delta, acess\u00edvel apenas por barco ou avi\u00e3o pequeno.",
  },
  yuk_gal5_cap: {
    en: "The braided waterways of the delta shift and reform with every spring flood.",
    es: "Las v\u00edas fluviales trenzadas del delta se desplazan y reforman con cada inundaci\u00f3n primaveral.",
    pt: "As vias fluviais entra\u00e7adas do delta se deslocam e se reformam a cada cheia primaveril.",
  },

  /* ══════════════════════════════════════════════
     COLORADO DELTA
  ══════════════════════════════════════════════ */
  col_stat1_value: { en: "Oct–Apr", es: "Oct–Abr", pt: "Out–Abr" },
  col_stat1_label: { en: "Best Season", es: "Mejor Época", pt: "Melhor Época" },
  col_stat1_desc: {
    en: "Mild desert winter & bird peaks",
    es: "Invierno desértico suave y picos de aves",
    pt: "Inverno desértico ameno e picos de aves",
  },
  col_stat2_value: { en: "~7,800 km²", es: "~7.800 km²", pt: "~7.800 km²" },
  col_stat2_label: {
    en: "Historic Area",
    es: "Área Histórica",
    pt: "Área Histórica",
  },
  col_stat2_desc: {
    en: "Once a lush desert estuary",
    es: "Antes un exuberante estuario desértico",
    pt: "Outrora um exuberante estuário desértico",
  },
  col_stat3_value: { en: "2,330 km", es: "2.330 km", pt: "2.330 km" },
  col_stat3_label: {
    en: "River Length",
    es: "Longitud del Río",
    pt: "Comprimento do Rio",
  },
  col_stat3_desc: {
    en: "Rarely reaching the sea today",
    es: "Rara vez llega al mar hoy en día",
    pt: "Raramente chegando ao mar hoje",
  },
  col_stat4_value: { en: "Cucapá", es: "Cucapá", pt: "Cucapá" },
  col_stat4_label: {
    en: "Indigenous People",
    es: "Pueblo Indígena",
    pt: "Povo Indígena",
  },
  col_stat4_desc: {
    en: "Over 1,000 years of river culture",
    es: "Más de 1.000 años de cultura fluvial",
    pt: "Mais de 1.000 anos de cultura fluvial",
  },
  col_ch1_title: {
    en: "When to Visit",
    es: "Cuándo Visitar",
    pt: "Quando Visitar",
  },
  col_ch1_p1: {
    en: "October through April is the ideal time to visit the Colorado River Delta. Desert winters are mild and clear, making hiking and paddling comfortable under vast open skies. Migratory waterbirds flood the remaining wetlands during these months, and the low winter light turns the cracked mudflats and salt flats into extraordinary landscapes of copper and gold.",
    es: "De octubre a abril es la época ideal para visitar el Delta del Río Colorado. Los inviernos desérticos son suaves y despejados, lo que hace que el senderismo y el remo sean cómodos bajo vastos cielos abiertos. Las aves acuáticas migratorias inundan los humedales restantes durante estos meses, y la tenue luz invernal convierte las agrietadas llanuras de lodo y sal en extraordinarios paisajes de cobre y oro.",
    pt: "De outubro a abril é a época ideal para visitar o Delta do Rio Colorado. Os invernos desérticos são amenos e claros, tornando a caminhada e o remo confortáveis sob vastos céus abertos. Aves aquáticas migratórias inundam as zonas úmidas restantes durante esses meses, e a luz fraca do inverno transforma as planícies de lama e sal rachadas em extraordinárias paisagens de cobre e ouro.",
  },
  col_ch1_p2: {
    en: "Spring, particularly March and April, brings an added spectacle: on rare years when binational pulse flows are released, water courses through the dry channels and the delta briefly comes alive with birdsong, blooming cottonwoods, and the distant glint of water reaching toward the sea. Summers are extreme, with temperatures regularly exceeding 45°C.",
    es: "La primavera, especialmente marzo y abril, trae un espectáculo adicional: en los raros años en que se liberan flujos de pulso binacionales, el agua corre por los canales secos y el delta cobra brevemente vida con el canto de los pájaros, los álamos en flor y el lejano destello del agua que se extiende hacia el mar. Los veranos son extremos, con temperaturas que regularmente superan los 45°C.",
    pt: "A primavera, especialmente março e abril, traz um espetáculo adicional: nos raros anos em que fluxos de pulso binacionais são liberados, a água corre pelos canais secos e o delta brevemente ganha vida com o canto dos pássaros, álamos florescendo e o distante brilho da água alcançando o mar. Os verões são extremos, com temperaturas regularmente excedendo 45°C.",
  },
  col_break1_label: {
    en: "A delta defined by absence and the fight to bring water back",
    es: "Un delta definido por la ausencia y la lucha por devolver el agua",
    pt: "Um delta definido pela ausência e a luta para trazer a água de volta",
  },
  col_ch2_title: {
    en: "Wildlife & the Fight for Restoration",
    es: "Fauna y la Lucha por la Restauración",
    pt: "Fauna e a Luta pela Restauração",
  },
  col_ch2_p1: {
    en: "Despite decades of water diversion, the Colorado Delta remains a critical stopover on the Pacific Flyway. The Ciénega de Santa Clara, the largest remaining wetland in the delta, shelters thousands of migratory waterbirds, including the endangered Yuma Ridgway's Rail and the southwestern willow flycatcher. Roseate spoonbills, great blue herons, and clouds of shorebirds wheel overhead during peak migration.",
    es: "A pesar de décadas de desviación de agua, el Delta del Colorado sigue siendo una escala crítica en la Ruta Migratoria del Pacífico. La Ciénega de Santa Clara, el mayor humedal restante del delta, alberga miles de aves acuáticas migratorias, incluido el rascón de Yuma en peligro y el papamoscas saucero del suroeste. Espátulas rosadas, garzas azules y nubes de aves costeras giran sobre las cabezas durante el pico de migración.",
    pt: "Apesar de décadas de desvio de água, o Delta do Colorado continua sendo uma escala crítica na Rota Migratória do Pacífico. A Ciénega de Santa Clara, a maior zona úmida restante no delta, abriga milhares de aves aquáticas migratórias, incluindo o frango-d'agua de Yuma em perigo e o papa-moscas-de-salgueiro do sudoeste. Colhereiros rosados, garças-azuis e nuvens de aves costeiras giram acima durante o pico da migração.",
  },
  col_ch2_p2: {
    en: "Binational agreements known as Minute 319 and Minute 323 have allowed conservation groups to release experimental pulse flows, mimicking natural spring floods. At restoration sites like Laguna Grande, native cottonwood and willow forests have returned, and with them, species not seen here in a generation. It is a slow, determined reclaiming of a lost landscape.",
    es: "Los acuerdos binacionales conocidos como Minuta 319 y Minuta 323 han permitido a grupos de conservación liberar flujos de pulso experimentales, imitando las inundaciones primaverales naturales. En sitios de restauración como Laguna Grande, los bosques nativos de álamo y sauce han regresado, y con ellos, especies no vistas aquí en una generación. Es una recuperación lenta y decidida de un paisaje perdido.",
    pt: "Acordos binacionais conhecidos como Minuto 319 e Minuto 323 permitiram que grupos de conservação liberassem fluxos de pulso experimentais, imitando as enchentes naturais de primavera. Em locais de restauração como Laguna Grande, florestas nativas de álamo e salgueiro retornaram, e com elas, espécies não vistas aqui em uma geração. É uma lenta e determinada recuperação de uma paisagem perdida.",
  },
  col_break2_label: {
    en: "Cottonwood and willow groves returning to restored delta sites",
    es: "Álamos y sauces regresando a los sitios restaurados del delta",
    pt: "Álamos e salgueiros retornando aos locais restaurados do delta",
  },
  col_ch3_title: {
    en: "A River Running Dry",
    es: "Un Río que se Seca",
    pt: "Um Rio que Seca",
  },
  col_ch3_p1: {
    en: "The Colorado River travels 2,330 kilometres from the Rocky Mountains to the Gulf of California, yet for most of the year it never arrives. So much water is drawn off for agriculture and cities across seven US states and two Mexican states that the river regularly runs dry miles before it reaches the sea.",
    es: "El Río Colorado recorre 2.330 kilómetros desde las Montañas Rocosas hasta el Golfo de California, pero durante la mayor parte del año nunca llega. Tanta agua se extrae para la agricultura y las ciudades de siete estados de EE.UU. y dos estados mexicanos que el río regularmente se seca a kilómetros antes de llegar al mar.",
    pt: "O Rio Colorado percorre 2.330 quilômetros desde as Montanhas Rochosas até o Golfo da Califórnia, mas durante a maior parte do ano nunca chega. Tanta água é desviada para agricultura e cidades em sete estados dos EUA e dois estados mexicanos que o rio regularmente seca a quilômetros antes de chegar ao mar.",
  },
  col_ch3_p2: {
    en: 'This is one of the most dramatic human alterations of a river system anywhere on Earth. What was once described as a "milk and honey wilderness," a vast, lush estuary, is now largely cracked mudflat and sand. Only the Rio Hardy maintains year-round flow, offering a narrow ribbon of the riparian beauty that once defined the entire delta.',
    es: 'Esta es una de las alteraciones humanas más dramáticas de un sistema fluvial en cualquier lugar de la Tierra. Lo que una vez se describió como un "paraíso de leche y miel", un vasto y exuberante estuario, es ahora en gran parte llanura de barro agrietada y arena. Solo el Río Hardy mantiene un caudal durante todo el año, ofreciendo una estrecha franja de la belleza ribereña que antes definía todo el delta.',
    pt: 'Esta é uma das alterações humanas mais dramáticas de um sistema fluvial em qualquer lugar da Terra. O que antes era descrito como um "paraíso de leite e mel", um vasto e exuberante estuário, é agora em grande parte planície de lama rachada e areia. Apenas o Rio Hardy mantém fluxo durante todo o ano, oferecendo uma estreita faixa da beleza ribeirinha que antes definia todo o delta.',
  },
  col_break3_label: {
    en: "The Upper Gulf of California, home to the world's most endangered porpoise",
    es: "El Alto Golfo de California, hogar de la marsopa más en peligro del mundo",
    pt: "O Alto Golfo da Califórnia, lar do boto mais ameaçado do mundo",
  },
  col_ch4_title: {
    en: "The Cucapá & a Binational Delta",
    es: "Los Cucapá y un Delta Binacional",
    pt: "Os Cucapá e um Delta Binacional",
  },
  col_ch4_p1: {
    en: "For over a thousand years, the Cucapá people, whose name means People of the River, have lived alongside the Colorado, fishing its channels and cultivating its floodplains. The delta has been their physical and spiritual home across generations. Today their fishing rights in the Upper Gulf of California are contested, and their traditional way of life is increasingly fragile.",
    es: "Durante más de mil años, el pueblo Cucapá, cuyo nombre significa Gente del Río, ha vivido junto al Colorado, pescando en sus canales y cultivando sus llanuras de inundación. El delta ha sido su hogar físico y espiritual a través de las generaciones. Hoy sus derechos de pesca en el Alto Golfo de California son disputados, y su forma de vida tradicional es cada vez más frágil.",
    pt: "Por mais de mil anos, o povo Cucapá, cujo nome significa Povo do Rio, viveu ao lado do Colorado, pescando em seus canais e cultivando suas várzeas. O delta tem sido seu lar físico e espiritual ao longo das gerações. Hoje seus direitos de pesca no Alto Golfo da Califórnia são contestados, e seu modo de vida tradicional é cada vez mais frágil.",
  },
  col_ch4_p2: {
    en: "The delta also sits at the heart of a complex binational economy. The surrounding Mexicali Valley is one of Mexico's most productive agricultural regions, irrigated by the very water that was once meant for the delta's wetlands. Managing these competing demands across the US-Mexico border is one of the defining environmental negotiations of the 21st century.",
    es: "El delta también se encuentra en el corazón de una compleja economía binacional. El circundante Valle de Mexicali es una de las regiones agrícolas más productivas de México, irrigada por el mismo agua que antes estaba destinada a los humedales del delta. Gestionar estas demandas en competencia a través de la frontera EE.UU.-México es una de las negociaciones ambientales definitorias del siglo XXI.",
    pt: "O delta também fica no coração de uma complexa economia binacional. O circundante Vale de Mexicali é uma das regiões agrícolas mais produtivas do México, irrigada pela própria água que antes era destinada aos pântanos do delta. Gerenciar essas demandas concorrentes através da fronteira EUA-México é uma das negociações ambientais definidoras do século XXI.",
  },
  col_act_intro: {
    en: "Discover the many ways to experience the Colorado Delta, from paddling the Rio Hardy to birdwatching at the Ciénega de Santa Clara.",
    es: "Descubre las muchas formas de vivir el Delta del Colorado, desde remar por el Río Hardy hasta el avistamiento de aves en la Ciénega de Santa Clara.",
    pt: "Descubra as muitas formas de vivenciar o Delta do Colorado, desde remar pelo Rio Hardy até observar aves na Ciénega de Santa Clara.",
  },
  col_act1_tag: { en: "Experience", es: "Experiencia", pt: "Experiência" },
  col_act1_name: {
    en: "Canoeing the Rio Hardy",
    es: "Canoa por el Río Hardy",
    pt: "Canoa pelo Rio Hardy",
  },
  col_act1_desc: {
    en: "Paddle the Rio Hardy, the only stretch of the delta with year-round water flow, drifting past restored cottonwood banks and reed beds alive with herons, rails, and kingfishers. A glimpse of the old delta's beauty.",
    es: "Rema por el Río Hardy, el único tramo del delta con flujo de agua durante todo el año, deslizándote junto a orillas de álamo restauradas y cañaverales vivos de garzas, rascones y martines pescadores. Un atisbo de la belleza del antiguo delta.",
    pt: "Reme pelo Rio Hardy, o único trecho do delta com fluxo de água durante todo o ano, derivando por margens de álamo restauradas e caniçais vivos de garças, frango-d'agua e martins-pescadores. Um vislumbre da beleza do antigo delta.",
  },
  col_act2_tag: { en: "Nature", es: "Naturaleza", pt: "Natureza" },
  col_act2_name: {
    en: "Avian Expeditions",
    es: "Expediciones de Aves",
    pt: "Expedições de Aves",
  },
  col_act2_desc: {
    en: "Visit the Ciénega de Santa Clara, the delta's largest remaining wetland, during migration season for some of the finest birdwatching in the American Southwest.",
    es: "Visita la Ciénega de Santa Clara, el mayor humedal restante del delta, durante la temporada de migración para disfrutar del mejor avistamiento de aves del suroeste americano.",
    pt: "Visite a Ciénega de Santa Clara, a maior zona úmida restante do delta, durante a temporada de migração para uma das melhores observações de aves do sudoeste americano.",
  },
  col_act3_tag: { en: "Culture", es: "Cultura", pt: "Cultura" },
  col_act3_name: {
    en: "Artisanal Fishing Tours",
    es: "Tours de Pesca Artesanal",
    pt: "Tours de Pesca Artesanal",
  },
  col_act3_desc: {
    en: "Join local Cucapá fishermen on traditional excursions in the Upper Gulf, where tidal nutrients still support rich marine life near the delta's mouth.",
    es: "Uúnete a pescadores cucapá locales en excursiones tradicionales en el Alto Golfo, donde los nutrientes de las mareas aún sustentan una rica vida marina cerca de la desembocadura del delta.",
    pt: "Junte-se a pescadores cucapá locais em excursões tradicionais no Alto Golfo, onde os nutrientes das marés ainda sustentam rica vida marinha perto da foz do delta.",
  },
  col_act4_tag: {
    en: "Wilderness",
    es: "Naturaleza Salvaje",
    pt: "Natureza Selvagem",
  },
  col_act4_name: {
    en: "Desert Trail Hiking",
    es: "Senderismo Desértico",
    pt: "Trilhas no Deserto",
  },
  col_act4_desc: {
    en: "Traverse the stark beauty where dunes meet restored wetland edges.",
    es: "Atraviesa la austera belleza donde las dunas se encuentran con los bordes de los humedales restaurados.",
    pt: "Atravesse a beleza austera onde as dunas encontram as bordas das zonas úmidas restauradas.",
  },
  col_gal1_cap: {
    en: "Aerial view of the Colorado River's branching channels as they fade into the desert before the Gulf of California.",
    es: "Vista aérea de los canales ramificados del Río Colorado al desvanecerse en el desierto antes del Golfo de California.",
    pt: "Vista aérea dos canais ramificados do Rio Colorado enquanto se dissipam no deserto antes do Golfo da Califórnia.",
  },
  col_gal2_cap: {
    en: "Restored cottonwood and willow groves at Laguna Grande, life returning to the delta.",
    es: "Álamos y sauces restaurados en Laguna Grande, la vida regresando al delta.",
    pt: "Álamos e salgueiros restaurados na Laguna Grande, a vida retornando ao delta.",
  },
  col_gal3_cap: {
    en: "The Ciénaga de Santa Clara, the largest remaining wetland in the delta and a refuge for endangered birds.",
    es: "La Ciénaga de Santa Clara, el mayor humedal restante del delta y refugio de aves en peligro.",
    pt: "A Ciénaga de Santa Clara, a maior zona úmida restante no delta e refúgio para aves em perigo.",
  },
  col_gal4_cap: {
    en: "Cracked mudflats where the Colorado once ran wide, a landscape awaiting water.",
    es: "Llanuras de barro agrietadas donde el Colorado una vez corrió ancho, un paisaje que espera el agua.",
    pt: "Planícies de lama rachadas onde o Colorado outrora correu largo, uma paisagem aguardando água.",
  },
  col_gal5_cap: {
    en: "The Upper Gulf of California at dusk, home to the critically endangered Vaquita porpoise.",
    es: "El Alto Golfo de California al atardecer, hogar de la vaquita marina en peligro crítico.",
    pt: "O Alto Golfo da Califórnia ao entardecer, lar do boto vaquita em estado crítico de ameaça.",
  },
  /* ── Stat labels (were missing) ── */
  galv_stat1_label: { en: "Area", es: "Área", pt: "Área" },
  galv_stat2_label: { en: "Population", es: "Población", pt: "População" },
  galv_stat3_label: { en: "Coastline", es: "Costa", pt: "Costa" },
  galv_stat4_label: {
    en: "Economic Value",
    es: "Valor Económico",
    pt: "Valor Econômico",
  },
  galv_ch1_title: {
    en: "Area & Geography",
    es: "Área y Geografía",
    pt: "Área e Geografia",
  },
  galv_ch2_title: {
    en: "Nature & Ecosystem",
    es: "Naturaleza y Ecosistema",
    pt: "Natureza e Ecossistema",
  },
  galv_ch3_title: {
    en: "Coastline & Challenges",
    es: "Costa y Desafíos",
    pt: "Costa e Desafios",
  },
  galv_ch4_title: {
    en: "Economy & Human Impact",
    es: "Economía e Impacto Humano",
    pt: "Economia e Impacto Humano",
  },
  galv_act1_name: {
    en: "Kayaking & Boating",
    es: "Kayak y Navegación",
    pt: "Caiaque e Barco",
  },

  amaz_stat1_label: {
    en: "Unique Feature",
    es: "Característica Única",
    pt: "Característica Única",
  },
  amaz_stat2_label: {
    en: "Bird Species",
    es: "Especies de Aves",
    pt: "Espécies de Aves",
  },
  amaz_stat3_label: {
    en: "Rainforest",
    es: "Selva Tropical",
    pt: "Floresta Tropical",
  },
  amaz_stat4_label: { en: "Cuisine", es: "Gastronomía", pt: "Gastronomia" },
  amaz_stat4_value: {
    en: "Açaí & Tucupi",
    es: "Açaí y Tucupi",
    pt: "Açaí e Tucupi",
  },
  amaz_ch2_title: {
    en: "1,300 Bird Species & Counting",
    es: "1.300 Especies de Aves y Contando",
    pt: "1.300 Espécies de Aves e Contando",
  },
  amaz_ch4_title: {
    en: "Açaí, Tucupi & the Flavours of Belém",
    es: "Açaí, Tucupi y los Sabores de Belém",
    pt: "Açaí, Tucupi e os Sabores de Belém",
  },
  amaz_act1_name: {
    en: "Canoe & Riverboat Expeditions",
    es: "Expediciones en Canoa y Barco",
    pt: "Expedições de Canoa e Barco",
  },
  amaz_act2_name: {
    en: "Jungle Lodges & Night Safaris",
    es: "Lodges en la Selva y Safaris Nocturnos",
    pt: "Lodges na Selva e Safáris Noturnos",
  },

  sanjuan_stat1_label: {
    en: "Delta Area",
    es: "Área del Delta",
    pt: "Área do Delta",
  },
  sanjuan_stat2_label: {
    en: "Annual Rainfall",
    es: "Precipitación Anual",
    pt: "Precipitação Anual",
  },
  sanjuan_stat3_label: { en: "Region", es: "Región", pt: "Região" },
  sanjuan_stat4_label: {
    en: "Delta Age",
    es: "Edad del Delta",
    pt: "Idade do Delta",
  },

  rio_stat1_label: {
    en: "Bird Species",
    es: "Especies de Aves",
    pt: "Espécies de Aves",
  },
  rio_stat2_label: { en: "Wetlands", es: "Humedales", pt: "Zonas Úmidas" },
  rio_stat3_label: { en: "One Delta", es: "Un Delta", pt: "Um Delta" },
  rio_stat4_label: { en: "Cuisine", es: "Gastronomía", pt: "Gastronomia" },
  rio_act1_name: {
    en: "Resaca & River Fishing",
    es: "Pesca en Resacas y el Río",
    pt: "Pesca em Resacas e no Rio",
  },
};

/* ═══════════════════════════════════════════════
   TAAL-SWITCHER DROPDOWN — inject in every page
   ═══════════════════════════════════════════════ */
(function () {
  const LANGS = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Português" },
  ];

  function getCurrentLang() {
    return localStorage.getItem("dita_lang") || "en";
  }

  function setLang(code) {
    localStorage.setItem("dita_lang", code);
    applyTranslations(code);
    updateDropdownLabel(code);
  }

  function updateDropdownLabel(code) {
    const btn = document.getElementById("lang-btn-label");
    if (btn)
      btn.textContent = LANGS.find((l) => l.code === code)?.label || "Language";
  }

  /* Injecteer de dropdown naast de bestaande nav */
  function injectDropdown() {
    const nav = document.querySelector(".top-nav");
    if (!nav || document.getElementById("lang-switcher")) return;

    const wrapper = document.createElement("div");
    wrapper.id = "lang-switcher";
    wrapper.style.cssText = "position:relative;display:inline-block";

    const cur = getCurrentLang();
    wrapper.innerHTML = `
      <button id="lang-btn" aria-haspopup="true" aria-expanded="false"
        style="background:none;border:none;cursor:pointer;
               font-family:'Oswald',sans-serif;font-weight:300;font-size:0.85rem;
               letter-spacing:2px;text-transform:uppercase;
               color:rgba(255,255,255,0.8);padding:0;display:flex;align-items:center;gap:6px">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
        </svg>
        <span id="lang-btn-label">${LANGS.find((l) => l.code === cur)?.label || "Language"}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div id="lang-menu" role="menu"
        style="display:none;position:absolute;top:calc(100% + 10px);right:0;
               background:#1a0f07;border:1px solid #4a3520;border-radius:4px;
               min-width:130px;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.5);
               overflow:hidden">
        ${LANGS.map(
          (l) => `
          <button role="menuitem" data-lang="${l.code}"
            style="display:block;width:100%;text-align:left;background:none;border:none;
                   cursor:pointer;padding:10px 16px;
                   font-family:'Oswald',sans-serif;font-weight:300;font-size:0.82rem;
                   letter-spacing:2px;text-transform:uppercase;color:rgba(232,220,200,0.8);
                   transition:background 0.2s,color 0.2s"
            onmouseover="this.style.background='rgba(201,169,110,0.12)';this.style.color='#c9a96e'"
            onmouseout="this.style.background='none';this.style.color='rgba(232,220,200,0.8)'">
            ${l.label}
          </button>`,
        ).join("")}
      </div>`;

    /* Vervang de "Language" anchor als die er is, anders append */
    const langAnchor = [...nav.querySelectorAll("a")].find(
      (a) =>
        a.dataset.langKey === "nav_language" ||
        a.textContent.trim().toLowerCase() === "language" ||
        a.textContent.trim().toLowerCase() === "idioma" ||
        a.getAttribute("href") === "#",
    );
    if (langAnchor) {
      nav.replaceChild(wrapper, langAnchor);
    } else {
      nav.appendChild(wrapper);
    }

    /* Toggle */
    const btn = wrapper.querySelector("#lang-btn");
    const menu = wrapper.querySelector("#lang-menu");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = menu.style.display === "block";
      menu.style.display = open ? "none" : "block";
      btn.setAttribute("aria-expanded", !open);
    });

    document.addEventListener("click", () => {
      menu.style.display = "none";
      btn.setAttribute("aria-expanded", false);
    });

    menu.querySelectorAll("[data-lang]").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        setLang(item.dataset.lang);
        menu.style.display = "none";
        btn.setAttribute("aria-expanded", false);
      });
    });
  }

  /* ─── Vertaalengine ───────────────────────────── */
  function t(key, lang) {
    return TRANSLATIONS[key]?.[lang] ?? TRANSLATIONS[key]?.en ?? "";
  }

  function applyTranslations(lang) {
    /* Alle elementen met data-lang-key attribuut */
    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.dataset.langKey;
      const val = t(key, lang);
      if (!val) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else if (el.tagName === "OPTION") {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });

    /* Elementen met data-lang-html (HTML toegestaan) */
    document.querySelectorAll("[data-lang-html]").forEach((el) => {
      const key = el.dataset.langHtml;
      const val = t(key, lang);
      if (val) el.innerHTML = val;
    });
  }

  /* ─── Init ────────────────────────────────────── */
  function init() {
    injectDropdown();
    applyTranslations(getCurrentLang());
  }

  /* Run as early as possible */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    /* DOM already ready (script is deferred or at end of body) */
    init();
  }
})();
