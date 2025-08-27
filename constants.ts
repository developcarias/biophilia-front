

import { PageContent } from './types';

export const INITIAL_CONTENT: PageContent = {
  hero: [
    {
      id: "slide_1",
      title: {
        en: "Biophilia",
        es: "Biophilia"
      },
      subtitle: {
        en: "It is the human being's innate affinity to interact with natural environments, key in environmental psychology and evolutionary biology. We seek to awaken and strengthen that bond to care for our ecosystems and our health.",
        es: "Es la afinidad innata del ser humano a interactuar con entornos naturales, clave en la psicología ambiental y la biología evolutiva. Buscamos despertar y fortalecer ese vínculo para cuidar nuestros ecosistemas y nuestra salud."
      },
      imageUrl: "https://biophiliaweb.org/images/banners-home/1.jpg"
    }
  ],
  actionLines: {
    title: { en: 'Lines of Action', es: 'Líneas de acción' },
    items: [
      {
        id: 'action_education',
        title: { en: 'Education', es: 'Educación' },
        text: { en: 'We design educational experiences that promote connection with nature and scientific knowledge for the care of ecosystems.', es: 'Diseñamos experiencias educativas que promueven la conexión con la naturaleza y el conocimiento científico para el cuidado de los ecosistemas.' },
        icon: 'BookOpenIcon'
      },
      {
        id: 'action_conservation',
        title: { en: 'Conservation', es: 'Conservación' },
        text: { en: 'We promote conservation and ecological restoration actions with community participation to protect local ecosystems.', es: 'Impulsamos acciones de conservación y restauración ecológica con participación comunitaria para proteger los ecosistemas locales.' },
        icon: 'LeafIcon'
      },
      {
        id: 'action_sustainability',
        title: { en: 'Sustainability', es: 'Sostenibilidad' },
        text: { en: 'We promote sustainable solutions based on science and local action to improve quality of life and environmental resilience.', es: 'Promovemos soluciones sostenibles basadas en ciencia y acción local para mejorar la calidad de vida y la resiliencia ambiental.' },
        icon: 'SustainabilityIcon'
      },
      {
        id: 'action_leadership',
        title: { en: 'Hispanic Leadership', es: 'Liderazgo hispano' },
        text: { en: 'We strengthen Hispanic environmental leadership through training in Spanish, strategic alliances, and advocacy in public policies.', es: 'Fortalecemos el liderazgo ambiental hispano a través de formación en español, alianzas estratégicas e incidencia en políticas públicas.' },
        icon: 'MegaphoneIcon'
      },
    ]
  },
  home: [
    {
      id: "home_welcome",
      title: { en: "Welcome to Biophilia Institute", es: "Bienvenidos a Biophilia Institute" },
      text: { 
        en: "We are a 501(c)(3) non-profit organization, established for charitable, educational, and scientific purposes. We connect people with nature to build sustainable, resilient, and conscious communities. We work with passion for environmental education, ecosystem conservation, and sustainable development, especially in vulnerable communities in the U.S.",
        es: "Somos una organización sin fines de lucro 501(c)(3), constituida con fines benéficos, educativos y científicos. Conectamos a las personas con la naturaleza, para construir comunidades sostenibles, resilientes y conscientes. Trabajamos con pasión por la educación ambiental, la conservación de ecosistemas y el desarrollo sostenible, especialmente en comunidades vulnerables de EE.UU."
      },
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=600&fit=crop",
      imageAlt: "A diverse group of people listening to a presentation"
    }
  ],
  about: {
    title: { en: "About Us", es: "Nosotros" },
    history: {
      title: { en: "Our History", es: "Nuestra Historia" },
      text: {
        en: "Biophilia Institute arises from the concern of a group of professionals specialized in environmental matters and sustainability, who, based on our experience, identified the need to connect and educate citizens with the aquatic and terrestrial ecosystems where they live, to foster experiential learning that increases their understanding, appreciation, and participation in their conservation.\nWe began in June 2020, supporting and organizing actions together with various social and environmental organizations in Orlando and Central Florida. In 2023, we created the Hispanic Environmental Observatory (OAH), a coalition of organizations to incorporate the Hispanic community, providing information and actions in Spanish, to increase their participation in the State's environmental movement. In 2025, we formalized Biophilia Institute, a non-profit organization established exclusively for charitable, educational, and scientific purposes, as provided in Section 501(c)(3) of the Internal Revenue Code (IRS), to promote environmental leadership in the Hispanic community, promoting education, conservation, and sustainable development projects in connection with nature to achieve well-being, prosperity, and a sustainable future in all communities, especially minority and vulnerable communities in the U.S.",
        es: "Biophilia Institute, surge de la inquietud de un grupo de profesionales especializados en materia ambiental y sostenibilidad, quienes, basados en nuestra experiencia, identificamos la necesidad de conectar y educar a los ciudadanos con los ecosistemas acuáticos y terrestres donde habitan, para propiciar aprendizajes vivenciales que aumenten su entendimiento, valoración y participación en la conservación de los mismos.\nComenzamos en junio de 2020, apoyando y organizando acciones junto con diversas organizaciones sociales y ambientales de Orlando y la Florida Central. En 2023, creamos el Observatorio Ambiental Hispano (OAH), una coalición de organizaciones para incorporar a la comunidad hispana, facilitando información y acciones en español, con el fin de aumentar su participación en el movimiento ambiental del Estado. En 2025, formalizamos a Biophilia Institute, una organización sin fines de lucro constituida exclusivamente con fines benéficos, educativos y científicos, según lo dispuesto en la Sección 501(c)(3) del Código de Rentas Internas (IRS), para impulsar el liderazgo ambiental en la comunidad hispana, promoviendo proyectos de educación, conservación y desarrollo sostenible en conexión con la naturaleza para lograr bienestar, prosperidad y un futuro sostenible en todas las comunidades, especialmente comunidades minoritarias y vulnerables en EE.UU."
      }
    },
    historyImageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&h=600&fit=crop",
    biophiliaExplanation: {
      title: { en: "Our Name", es: "Nuestro Nombre" },
      text: {
        en: "Our name comes from the term Biophilia, which means the innate connection that we humans have with nature. Erich Fromm was the first to use the term, and later, Harvard biologist Edward O. Wilson developed the concept, motivating scientists and educators to increase people's experiential experiences with natural environments, as an expedient way for them to understand, value, and conserve ecosystems, and in turn, their quality of life and that of their surroundings.",
        es: "Nuestro nombre proviene del término Biophilia que significa la conexión innata que tenemos los seres humanos con la naturaleza. Erich Fromm fue el primero en utilizar el término, y luego, Edward O. Wilson, biólogo de Harvard, desarrolló el concepto, motivando a científicos y educadores a aumentar experiencias vivenciales de personas con entornos naturales, como vía expedita para que puedan entender, valorar y conservar los ecosistemas, y a su vez, su calidad de vida y la de su entorno."
      }
    },
    mission: {
      id: "about_mission",
      title: { en: "Mission", es: "Misión" },
      text: { 
        en: "To strengthen sustainable and resilient communities, through scientific, educational, and local leadership tools, in harmony with nature, to promote ecosystem conservation and sustainable development.",
        es: "Fortalecer comunidades sostenibles y resilientes, mediante herramientas científicas, educativas y de liderazgo local, en armonía con la naturaleza, para promover la conservación de ecosistemas y el desarrollo sostenible."
      },
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=600&fit=crop",
      imageAlt: "A person's hands drawing a business plan on a whiteboard"
    },
    vision: {
      id: "about_vision",
      title: { en: "Vision", es: "Visión" },
      text: {
        en: "To be a benchmark in the conservation of local ecosystems, by consolidating resilient and sustainable communities, through education, applied science, and local leadership.",
        es: "Ser un referente en la conservación de ecosistemas locales, mediante la consolidación de comunidades resilientes y sostenibles, a través de la educación, la ciencia aplicada y el liderazgo local."
      },
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&h=600&fit=crop",
      imageAlt: "A team collaborating around a table with laptops"
    },
    work: {
      id: 'about_work',
      title: { en: "Our Work", es: "Nuestro Trabajo" },
      text: {
        en: "We design and lead educational programs focused on vulnerable communities, always integrating a deep connection with nature. Our goal is to promote the conservation of local ecosystems, community environmental empowerment, and the valuation of biodiversity as key tools to improve the quality of life and build a sustainable future.\nWe develop a wide range of activities, including: practical workshops, forums, conferences, guided tours, recreational activities, and training spaces that address topics such as: sustainable urban agriculture, urban forests, community gardens, hydroponic production, biodiversity conservation, sea turtles, environmental education, climate resilience, sustainable development, clean energies, among others.\nWe carry out this work in alliance with public and private organizations that provide us with economic, institutional, and operational support, thus strengthening our impact in the territories where we operate.",
        es: "Diseñamos y lideramos programas educativos enfocados en comunidades vulnerables, integrando siempre una profunda conexión con la naturaleza. Nuestro objetivo es promover la conservación de los ecosistemas locales, el empoderamiento ambiental comunitario y la valorización de la biodiversidad como herramientas clave para mejorar la calidad de vida y construir un futuro sostenible.\nDesarrollamos una amplia gama de actividades, entre ellas: talleres prácticos, foros, conferencias, recorridos guiados, actividades recreativas y espacios formativos que abordan temas como: agricultura urbana sostenible, bosques urbanos, jardines comunitarios, producción hidropónica, conservación de la biodiversidad, tortugas marinas, educación ambiental, resiliencia climática, desarrollo sustentable, energías limpias, entre otros.\nEste trabajo lo realizamos en alianza con organizaciones públicas y privadas que nos brindan respaldo económico, institucional y operativo, fortaleciendo así nuestro impacto en los territorios donde actuamos."
      },
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&h=600&fit=crop',
      imageAlt: 'People working together in a workshop'
    },
    values: {
      title: { en: 'Institutional Values', es: 'Valores Institucionales' },
      items: [
        { id: 'value_1', title: { en: 'Transformative Education', es: 'Educación transformadora' }, text: { en: 'We believe in education as an engine of change for individual, community, and sustainable development.', es: 'Creemos en la educación como motor de cambio para el desarrollo individual, comunitario y sostenible.' }, icon: 'BookOpenIcon' },
        { id: 'value_2', title: { en: 'Science with Purpose', es: 'Ciencia con propósito' }, text: { en: 'We use scientific knowledge to design concrete solutions to social and environmental challenges.', es: 'Utilizamos el conocimiento científico para diseñar soluciones concretas a los desafíos sociales y ambientales.' }, icon: 'BeakerIcon' },
        { id: 'value_3', title: { en: 'Connection with Nature', es: 'Conexión con la naturaleza' }, text: { en: 'We foster the connection with the natural environment as the basis for a healthy and conscious life.', es: 'Fomentamos la conexión con el entorno natural como base para una vida saludable y consciente.' }, icon: 'LeafIcon' },
        { id: 'value_4', title: { en: 'Community Leadership', es: 'Liderazgo comunitario' }, text: { en: 'We promote local protagonism as the central axis of sustainable change.', es: 'Impulsamos el protagonismo local como eje central del cambio sostenible.' }, icon: 'UsersIcon' },
        { id: 'value_5', title: { en: 'Collaboration', es: 'Colaboración' }, text: { en: 'We believe in the power of joint work between communities, institutions, and diverse sectors to generate impact.', es: 'Creemos en el poder del trabajo conjunto entre comunidades, instituciones y sectores diversos para generar impacto.' }, icon: 'HandshakeIcon' },
        { id: 'value_6', title: { en: 'Social Equity', es: 'Equidad social' }, text: { en: 'We work with and for vulnerable communities, respecting diversity and promoting inclusion.', es: 'Trabajamos con y para comunidades vulnerables, respetando la diversidad y promoviendo la inclusión.' }, icon: 'EquityIcon' },
      ],
    },
  },
  projectsIntro: {
    en: "We start from the principle of transforming ideas into concrete actions, acting at a local level with a global vision. We design and implement projects based on scientific evidence, focused on environmental education, ecosystem conservation, and sustainable development. Our work is aimed at strengthening community capacities and promoting resilient and sustainable management models, with the purpose of improving the quality of life in vulnerable communities in the United States.",
    es: "Partimos del principio de transformar las ideas en acciones concretas, actuando a nivel local con una visión global. Diseñamos e implementamos proyectos basados en evidencia científica, enfocados en la educación ambiental, la conservación de ecosistemas y el desarrollo sostenible. Nuestro trabajo se orienta al fortalecimiento de capacidades comunitarias y a la promoción de modelos de gestión resilientes y sostenibles, con el propósito de mejorar la calidad de vida en comunidades vulnerables de los Estados Unidos."
  },
  projects: [
    {
      id: 'project_forest',
      title: { en: "Faith Community Forest, an urban ecological corridor in Central Florida", es: "Bosque comunitario de la Fé, un corredor ecológico urbano en la Florida Central" },
      description: { en: "In June we started this project, where we will develop training, reforestation and conservation actions of the urban forest in the community of Azalea Park, in Orlando. The project is for two years, financed through the \"Nuestros Bosques\" program, promoted by the Hispanic Access Foundation together with the United States Forest Service.", es: "In June we started this project, where we will develop training, reforestation and conservation actions of the urban forest in the community of Azalea Park, in Orlando. The project is for two years, financed through the \"Nuestros Bosques\" program, promoted by the Hispanic Access Foundation together with the United States Forest Service." },
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Lush green forest corridor'
    },
    {
      id: 'project_agriculture',
      title: { en: "Sustainable urban agriculture", es: "Sustainable urban agriculture" },
      description: { en: "Starting in January 2025, in partnership with the Engelwood Neighborhood Center in Orlando, we are restoring its community garden and launching a continuing education program in sustainable urban agriculture for children, youth, and seniors visiting the center.", es: "Starting in January 2025, in partnership with the Engelwood Neighborhood Center in Orlando, we are restoring its community garden and launching a continuing education program in sustainable urban agriculture for children, youth, and seniors visiting the center." },
      imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Hands holding a small plant in a community garden'
    },
    {
      id: 'project_hydroponic',
      title: { en: "Training in hydroponic production", es: "Training in hydroponic production" },
      description: { en: "Through the same partnership with the Engelwood Neighborhood Center in Orlando, since January we have been holding training workshops on hydroponic food production, aimed at children, youth, and seniors who visit the center.", es: "Through the same partnership with the Engelwood Neighborhood Center in Orlando, since January we have been holding training workshops on hydroponic food production, aimed at children, youth, and seniors who visit the center." },
      imageUrl: 'https://images.unsplash.com/photo-1598997316248-284534152112?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Hydroponic farming system with green lettuce'
    },
    {
      id: 'project_turtles',
      title: { en: "Educational Project Friends of Sea Turtles", es: "Educational Project Amigos de las tortugas marinas" },
      description: { en: "We are ambassadors for Central Florida for the educational project \"Amigos de las tortugas marinas\". To date, we have reached out to at least 210 people of all ages, who have learned in a practical way about the characteristics, types, habits, and ways to contribute to the conservation of this species.", es: "We are ambassadors for Central Florida for the educational project \"Amigos de las tortugas marinas\", To date, we have reached out to at least 210 people of all ages, who have learned in a practical way about the characteristics, types, habits, and ways to contribute to the conservation of this species." },
      imageUrl: 'https://images.unsplash.com/photo-1551922253-06630b7396c2?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A sea turtle swimming in the ocean'
    },
    {
      id: 'project_hispanics',
      title: { en: "Connecting Hispanics with ecosystems", es: "Connecting Hispanics with ecosystems" },
      description: { en: "More than 180 Hispanics have participated in educational field trips in Spanish, connecting them with local ecosystems in Orlando and Central Florida. The goal is to foster experiential learning, promote the value of these ecosystems, minimize the language barrier, and foster professional connections with conservation organizations.", es: "More than 180 Hispanics have participated in educational field trips in Spanish, connecting them with local ecosystems in Orlando and Central Florida. The goal is to foster experiential learning, promote the value of these ecosystems, minimize language barrier, and foster professional connections with conservation organizations." },
      imageUrl: 'https://images.unsplash.com/photo-1569163139500-5e3952516854?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A group of people on a field trip in a natural setting'
    },
    {
      id: 'project_meteo',
      title: { en: "Adverse meteorological events", es: "Adverse meteorological events" },
      description: { en: "In partnership with the Hispanic Federation, we conducted a study on the vulnerability of older adults to adverse meteorological events. We promote actions and design projects to minimize risks in vulnerable communities during adverse meteorological events.", es: "In partnership with the Hispanic Federation, we conducted a study on the vulnerability of older adults to adverse metereological events. We promote actions and design projects to minimize risks in vulnerable communities during adverse metereological events." },
      imageUrl: 'https://images.unsplash.com/photo-1594225002094-1a3b118b6932?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Stormy clouds over a coastal area'
    },
    {
      id: 'project_leadership',
      title: { en: "Hispanic Environmental Leadership", es: "Hispanic Environmental Leadership" },
      description: { en: "We participate in events and meetings on educational topics, ecosystem conservation, and sustainability, in partnership with various social and environmental organizations, to consolidate Hispanic leadership in Orlando and the State of Florida.", es: "We participate in events and meetings on educational topics, ecosystem conservation, and sustainability, in partnership with various social and environmental organizations, to consolidate Hispanic leadership in Orlando and the State of Florida." },
      imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A group of leaders in a meeting'
    }
  ],
  team: [
    { id: 'team_faruk', name: 'FARUK BAGDAH', role: { en: 'President/CEO', es: 'Presidente/CEO' }, bio: { en: '', es: '' }, imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of FARUK BAGDAH' },
    { id: 'team_victor', name: 'VICTOR MARTINEZ', role: { en: 'Director/Treasurer', es: 'Director/Tesorero' }, bio: { en: '', es: '' }, imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of VICTOR MARTINEZ' },
    { id: 'team_oliver', name: 'OLIVER SANRONA', role: { en: 'Director', es: 'Director' }, bio: { en: '', es: '' }, imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of OLIVER SANRONA' },
    { id: 'team_giuseppe', name: 'GIUSEPPE BERARDI', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: '', es: '' }, imageUrl: 'https://images.unsplash.com/photo-1542740348-39501a69525a?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of GIUSEPPE BERARDI' },
    { id: 'team_simon', name: 'SIMON TENORIO', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: '', es: '' }, imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of SIMON TENORIO' },
  ],
  blog: [],
  contact: {
    title: { en: "Contact Us", es: "Contáctanos" },
    intro: { en: "We'd love to hear from you. Whether you have a question about our projects, partnerships, or just want to say hello, our team is ready to answer all your questions.", es: "Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestros proyectos, alianzas o simplemente quieras saludar, nuestro equipo está listo para responder a todas tus preguntas." },
    address: "Orlando, Florida, USA",
    phone: "(123) 456-7890",
    email: "contact@biophiliainstitute.org",
    socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        twitter: "#",
    },
  },
  alliances: {
    title: { en: "Our Alliances", es: "Nuestras Alianzas" },
    description: { en: "We collaborate with public and private organizations that strengthen our impact.", es: "Colaboramos con organizaciones públicas y privadas que fortalecen nuestro impacto." },
    partners: [
      { id: 'partner_haf', name: 'Hispanic Access Foundation', logoUrl: 'https://hispanicaccess.org/images/logos/HAF-Logo-Horiz-2-Color-Full-RGB-1.png' },
      { id: 'partner_usfs', name: 'United States Forest Service', logoUrl: 'https://www.fs.usda.gov/themes/forestservice/images/usfs-logo.png' },
      { id: 'partner_hf', name: 'Hispanic Federation', logoUrl: 'https://hispanicfederation.org/media/2021/04/HF-Logo-horizontal-1-e1617833075841.png' },
    ]
  }
};