

import { PageContent } from './types';

export const INITIAL_CONTENT: PageContent = {
  global: {
    logoUrl: "https://biophiliaweb.org/images/logos/biophilia_png-blanco.png",
    navigation: [
      { id: 'nav1', to: "/", label: { en: 'Home', es: 'Inicio' }, end: true },
      { id: 'nav2', to: "/about", label: { en: 'About Us', es: 'Nosotros' } },
      { id: 'nav3', to: "/projects", label: { en: 'Projects', es: 'Proyectos' } },
      { id: 'nav4', to: "/team", label: { en: 'Our Team', es: 'Nuestro Equipo' } },
      { id: 'nav5', to: "/blog", label: { en: 'Blog', es: 'Blog' } },
      { id: 'nav6', to: "/contact", label: { en: 'Contact', es: 'Contacto' } },
    ],
    socialLinks: [
      { id: 'facebook', url: "#" },
      { id: 'instagram', url: "#" },
      { id: 'linkedin', url: "#" },
      { id: 'twitter', url: "#" },
    ],
    footer: {
      slogan: { en: "Fostering the love of life and the living world.", es: "Fomentando el amor por la vida y el mundo vivo." },
      copyright: { en: "Biophilia Institute. All rights reserved.", es: "Biophilia Institute. Todos los derechos reservados." },
      contact: {
        address: "Orlando, Florida, USA",
        email: "contact@biophiliainstitute.org",
      },
    },
  },
  ui: {
    donateNow: { en: 'Donate Now', es: 'Dona Ahora' },
    supportMission: { en: 'Support Our Mission', es: 'Apoya Nuestra Misión' },
    viewAllProjects: { en: 'View All Projects', es: 'Ver Todos los Proyectos' },
    learnMore: { en: 'Learn More', es: 'Saber Más' },
    readMore: { en: 'Read More', es: 'Leer Más' },
    contact: { en: 'Contact Us', es: 'Contáctanos' },
  },
  homePage: {
    heroSlides: [
      {
        id: "slide_1",
        title: {
          en: "First tree of the Faith Community Forest project in Orlando, FL.",
          es: "Primer árbol del proyecto Bosque Comunitario de la Fe, en Orlando. FL."
        },
        subtitle: {
          en: "More than 1000 trees will be planted, and an urban ecological corridor will be consolidated.",
          es: "Se plantarán más de 1000 árboles, y se consolidará un corredor ecológico urbano."
        },
        imageUrl: "https://biophiliaweb.org/images/banners-home/1.1.jpg"
      },
      {
        id: "slide_2",
        title: {
          en: "Papayas, seedlings, and mental health in the Engelwood garden in Orlando.",
          es: "Papayas, semilleros y salud mental en el huerto de Engelwood, en Orlando."
        },
        subtitle: {
          en: "At least 14 seniors shared knowledge and experiences during the day.",
          es: "Al menos 14 adultos mayores compartieron saberes y experiencias durante la jornada."
        },
        imageUrl: "https://biophiliaweb.org/images/banners-home/2.3.png"
      },
      {
        id: "slide_3",
        title: {
          en: "Marine turtles workshop teaches youth to protect our oceans.",
          es: "Taller de tortugas marinas enseña a jóvenes a proteger nuestros océanos."
        },
        subtitle: {
          en: "32 youth from Orlando raised awareness and received ocean conservation kits.",
          es: "32 jóvenes de Orlando sensibilizados y recibieron kit de conservación de océanos."
        },
        imageUrl: "https://biophiliaweb.org/images/banners-home/3.1.jpg"
      },
      {
        id: "slide_4",
        title: {
          en: "From branch to forest: science and community in Azalea Park, Orlando. FL.",
          es: "De la rama al bosque: ciencia y comunidad en Azalea Park, Orlando. FL."
        },
        subtitle: {
          en: "30 youth learned to propagate trees from branches, using air layering.",
          es: "30 jóvenes aprendieron a propagar arboles desde la rama, con acodos aéreos."
        },
        imageUrl: "https://biophiliaweb.org/images/banners-home/4.1.jpg"
      }
    ],
    welcome: {
      titlePart1: { en: "Welcome to", es: "Bienvenidos a" },
      titlePart2: { en: "Biophilia Institute", es: "Biophilia Institute" },
      text: {
        en: "We are a 501(c)(3) non-profit organization, established for charitable, educational, and scientific purposes. We connect people with nature to build sustainable, resilient, and conscious communities. We work with passion for environmental education, ecosystem conservation, and sustainable development, especially in vulnerable communities in the U.S.",
        es: "Somos una organización sin fines de lucro 501(c)(3), constituida con fines benéficos, educativos y científicos. Conectamos a las personas con la naturaleza, para construir comunidades sostenibles, resilientes y conscientes. Trabajamos con pasión por la educación ambiental, la conservación de ecosistemas y el desarrollo sostenible, especialmente en comunidades vulnerables de EE.UU."
      },
      imageUrl: "https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/1.bienvenidos.jpg",
      imageAlt: "A diverse group of people listening to a presentation"
    },
    actionLines: {
      title: { en: 'Lines of Action', es: 'Líneas de acción' },
      items: [
        {
          id: 'action_education', title: {
            en: 'Education',
            es: 'Educación'
          },
          text: {
            en: 'We design educational experiences that promote connection with nature and scientific knowledge for the care of ecosystems.',
            es: 'Diseñamos experiencias educativas que promueven la conexión con la naturaleza y el conocimiento científico para el cuidado de los ecosistemas.'
          },
          icon: 'BookOpenIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/2.educacion.jpg'
        },
        {
          id: 'action_conservation',
          title: {
            en: 'Conservation',
            es: 'Conservación'
          }, text: {
            en: 'We promote conservation and ecological restoration actions with community participation to protect local ecosystems.',
            es: 'Impulsamos acciones de conservación y restauración ecológica con participación comunitaria para proteger los ecosistemas locales.'
          },
          icon: 'LeafIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/3.conservacion.jpg'
        },
        {
          id: 'action_sustainability',
          title: {
            en: 'Sustainability',
            es: 'Sostenibilidad'
          }, text: {
            en: 'We promote sustainable solutions based on science and local action to improve quality of life and environmental resilience.',
            es: 'Promovemos soluciones sostenibles basadas en ciencia y acción local para mejorar la calidad de vida y la resiliencia ambiental.'
          },
          icon: 'SustainabilityIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/4.sostenibilidad.jpg'
        },
        {
          id: 'action_leadership',
          title: { en: 'Leadership', es: 'Liderazgo' },
          text: {
            en: 'We strengthen Hispanic environmental leadership through training in Spanish, strategic alliances, and advocacy in public policies.',
            es: 'Fortalecemos el liderazgo ambiental hispano a través de formación en español, alianzas estratégicas e incidencia en políticas públicas.'
          },
          icon: 'MegaphoneIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/5.liderazo.jpg'
        },
      ]
    },
    latestProjects: {
      title: { en: 'Our Projects', es: 'Nuestros Proyectos' },
      subtitle: {
        en: "See how we're making a difference in our communities.",
        es: 'Vea cómo estamos marcando la diferencia en nuestras comunidades.'
      }
    },
    parallax1: {
      title: { en: 'Make a Difference', es: 'Haz la Diferencia' },
      text: { en: 'Your generous contribution helps us continue our work of connecting communities with nature and building a sustainable future.', es: 'Tu generosa contribución nos ayuda a continuar nuestro trabajo de conectar comunidades con la naturaleza y construir un futuro sostenible.' },
      imageUrl: 'https://biophiliaweb.org/images/parallax/1.jpg'
    },
    values: {
      title: { en: 'Our Values', es: 'Nuestros Valores' },
      items: [
        { id: 'value_1', title: { en: 'Transformative Education', es: 'Educación transformadora' }, text: { en: 'We believe in education as an engine of change for individual, community, and sustainable development.', es: 'Creemos en la educación como motor de cambio para el desarrollo individual, comunitario y sostenible.' }, icon: 'BookOpenIcon' },
        { id: 'value_2', title: { en: 'Science with Purpose', es: 'Ciencia con propósito' }, text: { en: 'We use scientific knowledge to design concrete solutions to social and environmental challenges.', es: 'Utilizamos el conocimiento científico para diseñar soluciones concretas a los desafíos sociales y ambientales.' }, icon: 'BeakerIcon' },
        { id: 'value_3', title: { en: 'Connection with Nature', es: 'Conexión con la naturaleza' }, text: { en: 'We foster the connection with the natural environment as the basis for a healthy and conscious life.', es: 'Fomentamos la conexión con el entorno natural como base para una vida saludable y consciente.' }, icon: 'LeafIcon' },
        { id: 'value_4', title: { en: 'Community Leadership', es: 'Liderazgo comunitario' }, text: { en: 'We promote local protagonism as the central axis of sustainable change.', es: 'Impulsamos el protagonismo local como eje central del cambio sostenible.' }, icon: 'UsersIcon' },
        { id: 'value_5', title: { en: 'Collaboration', es: 'Colaboración' }, text: { en: 'We believe in the power of joint work between communities, institutions, and diverse sectors to generate impact.', es: 'Creemos en el poder del trabajo conjunto entre comunidades, instituciones y sectores diversos para generar impacto.' }, icon: 'HandshakeIcon' },
        { id: 'value_6', title: { en: 'Social Equity', es: 'Equidad social' }, text: { en: 'We work with and for vulnerable communities, respecting diversity and promoting inclusion.', es: 'Trabajamos con y para comunidades vulnerables, respetando la diversidad y promoviendo la inclusión.' }, icon: 'EquityIcon' },
      ],
    },
    alliances: {
      title: { en: "Our Alliances", es: "Nuestras Alianzas" },
      description: { en: "We collaborate with public and private organizations that strengthen our impact.", es: "Colaboramos con organizaciones públicas y privadas que fortalecen nuestro impacto." },
      partners: [
        {
          id: 'aliance_1',
          name: 'Hispanic Federation',
          logoUrl: 'https://biophiliaweb.org/images/aliados/1.png'
        },
        {
          id: 'aliance_2',
          name: 'Hispanic Access Foundation',
          logoUrl: 'https://biophiliaweb.org/images/aliados/2.png'
        },
        {
          id: 'aliance_3',
          name: 'City of Orlando',
          logoUrl: 'https://biophiliaweb.org/images/aliados/3.png'
        },
        {
          id: 'aliance_4',
          name: 'Inwater Research Group',
          logoUrl: 'https://biophiliaweb.org/images/aliados/4.jpg'
        },
        {
          id: 'aliance_5',
          name: 'Orange Audubon',
          logoUrl: 'https://biophiliaweb.org/images/aliados/5.jpg'
        },
        {
          id: 'aliance_6',
          name: 'The Episcopal Churches of Christ the King and Jesús de Nazaret',
          logoUrl: 'https://biophiliaweb.org/images/aliados/6.png'
        },
        {
          id: 'aliance_7',
          name: 'Renacer Foundation',
          logoUrl: 'https://biophiliaweb.org/images/aliados/7.png'
        },
        {
          id: 'aliance_8',
          name: 'Casa de Venezuela Orlando',
          logoUrl: 'https://biophiliaweb.org/images/aliados/8.png'
        },
        {
          id: 'aliance_9',
          name: 'Mi familia en Acción',
          logoUrl: 'https://biophiliaweb.org/images/aliados/9.png'
        },
        {
          id: 'aliance_10',
          name: 'Nuestra cultura Outdoors',
          logoUrl: 'https://biophiliaweb.org/images/aliados/10.jpg'
        },
        {
          id: 'aliance_11',
          name: 'Observatorio Ambiental Hispano',
          logoUrl: 'https://biophiliaweb.org/images/aliados/11.jpg'
        },
      ]
    },
    parallax2: {
      title: { en: 'Join our EcoVolunteer Network', es: 'Únete a nuestra Red de EcoVoluntarios' },
      text: { en: 'Become part of the change. Volunteer your time and skills to help restore ecosystems and educate our communities.', es: 'Sé parte del cambio. Ofrece tu tiempo y habilidades como voluntario para ayudar a restaurar ecosistemas y educar a nuestras comunidades.' },
      imageUrl: 'https://biophiliaweb.org/images/parallax/2.jpg'
    }
  },
  aboutPage: {
    banner: {
      title: { en: "About Us", es: "Nosotros" },
      imageUrl: "https://biophiliaweb.org/images/nosotros/nostros.jpg"
    },
    history: {
      title: { en: "Our History", es: "Nuestra Historia" },
      text: {
        en: "Biophilia Institute arises from the concern of a group of professionals specialized in environmental matters and sustainability, who, based on our experience, identified the need to connect and educate citizens with the aquatic and terrestrial ecosystems where they live, to foster experiential learning that increases their understanding, appreciation, and participation in their conservation.\nWe began in June 2020, supporting and organizing actions together with various social and environmental organizations in Orlando and Central Florida. In 2023, we created the Hispanic Environmental Observatory (OAH), a coalition of organizations to incorporate the Hispanic community, providing information and actions in Spanish, to increase their participation in the State's environmental movement. In 2025, we formalized Biophilia Institute, a non-profit organization established exclusively for charitable, educational, and scientific purposes, as provided in Section 501(c)(3) of the Internal Revenue Code (IRS), to promote environmental leadership in the Hispanic community, promoting education, conservation, and sustainable development projects in connection with nature to achieve well-being, prosperity, and a sustainable future in all communities, especially minority and vulnerable communities in the U.S.",
        es: "Biophilia Institute, surge de la inquietud de un grupo de profesionales especializados en materia ambiental y sostenibilidad, quienes, basados en nuestra experiencia, identificamos la necesidad de conectar y educar a los ciudadanos con los ecosistemas acuáticos y terrestres donde habitan, para propiciar aprendizajes vivenciales que aumenten su entendimiento, valoración y participación en la conservación de los mismos.\nComenzamos en junio de 2020, apoyando y organizando acciones junto con diversas organizaciones sociales y ambientales de Orlando y la Florida Central. En 2023, creamos el Observatorio Ambiental Hispano (OAH), una coalición de organizaciones para incorporar a la comunidad hispana, facilitando información y acciones en español, con el fin de aumentar su participación en el movimiento ambiental del Estado. En 2025, formalizamos a Biophilia Institute, una organización sin fines de lucro constituida exclusivamente con fines benéficos, educativos y científicos, según lo dispuesto en la Sección 501(c)(3) del Código de Rentas Internas (IRS), para impulsar el liderazgo ambiental en la comunidad hispana, promoviendo proyectos de educación, conservación y desarrollo sostenible en conexión con la naturaleza para lograr bienestar, prosperidad y un futuro sostenible en todas las comunidades, especialmente comunidades minoritarias y vulnerables en EE.UU."
      },
      imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&h=600&fit=crop"
    },
    biophiliaExplanation: {
      title: { en: "Our Name", es: "Nuestro Nombre" },
      text: {
        en: "Our name comes from the term Biophilia, which means the innate connection that we humans have with nature. Erich Fromm was the first to use the term, and later, Harvard biologist Edward O. Wilson developed the concept, motivating scientists and educators to increase people's experiential experiences with natural environments, as an expedient way for them to understand, value, and conserve ecosystems, and in turn, their quality of life and that of their surroundings.",
        es: "Nuestro nombre proviene del término Biophilia que significa la conexión innata que tenemos los seres humanos con la naturaleza. Erich Fromm fue el primero en utilizar el término, y luego, Edward O. Wilson, biólogo de Harvard, desarrolló el concepto, motivando a científicos y educadores a aumentar experiencias vivenciales de personas con entornos naturales, como vía expedita para que puedan entender, valorar y conservar los ecosistemas, y a su vez, su calidad de vida y la de su entorno."
      }
    },
    mission: {
      title: { en: "Mission", es: "Misión" },
      text: {
        en: "To strengthen sustainable and resilient communities, through scientific, educational, and local leadership tools, in harmony with nature, to promote ecosystem conservation and sustainable development.",
        es: "Fortalecer comunidades sostenibles y resilientes, mediante herramientas científicas, educativas y de liderazgo local, en armonía con la naturaleza, para promover la conservación de ecosistemas y el desarrollo sostenible."
      },
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=600&fit=crop",
      imageAlt: "A person's hands drawing a business plan on a whiteboard"
    },
    vision: {
      title: { en: "Vision", es: "Visión" },
      text: {
        en: "To be a benchmark in the conservation of local ecosystems, by consolidating resilient and sustainable communities, through education, applied science, and local leadership.",
        es: "Ser un referente en la conservación de ecosistemas locales, mediante la consolidación de comunidades resilientes y sostenibles, a través de la educación, la ciencia aplicada y el liderazgo local."
      },
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&h=600&fit=crop",
      imageAlt: "A team collaborating around a table with laptops"
    },
    work: {
      title: { en: "Our Work", es: "Nuestro Trabajo" },
      text: {
        en: "We design and lead educational programs focused on vulnerable communities, always integrating a deep connection with nature. Our goal is to promote the conservation of local ecosystems, community environmental empowerment, and the valuation of biodiversity as key tools to improve the quality of life and build a sustainable future.\nWe develop a wide range of activities, including: practical workshops, forums, conferences, guided tours, recreational activities, and training spaces that address topics such as: sustainable urban agriculture, urban forests, community gardens, hydroponic production, biodiversity conservation, sea turtles, environmental education, climate resilience, sustainable development, clean energies, among others.\nWe carry out this work in alliance with public and private organizations that provide us with economic, institutional, and operational support, thus strengthening our impact in the territories where we operate.",
        es: "Diseñamos y lideramos programas educativos enfocados en comunidades vulnerables, integrando siempre una profunda conexión con la naturaleza. Nuestro objetivo es promover la conservación de los ecosistemas locales, el empoderamiento ambiental comunitario y la valorización de la biodiversidad como herramientas clave para mejorar la calidad de vida y construir un futuro sostenible.\nDesarrollamos una amplia gama de actividades, entre ellas: talleres prácticos, foros, conferencias, recorridos guiados, actividades recreativas y espacios formativos que abordan temas como: agricultura urbana sostenible, bosques urbanos, jardines comunitarios, producción hidropónica, conservación de la biodiversidad, tortugas marinas, educación ambiental, resiliencia climática, desarrollo sustentable, energías limpias, entre otros.\nEste trabajo lo realizamos en alianza con organizaciones públicas y privadas que nos brindan respaldo económico, institucional y operativo, fortaleciendo así nuestro impacto en los territorios donde actuamos."
      },
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&h=600&fit=crop',
      imageAlt: 'People working together in a workshop'
    },
  },
  projectsPage: {
    banner: {
      title: { en: 'Our Projects', es: 'Nuestros Proyectos' },
      imageUrl: "https://biophiliaweb.org/images/proyectos/Imaen de fondo.jpg"
    },
    intro: {
      en: "We start from the principle of transforming ideas into concrete actions, acting at a local level with a global vision. We design and implement projects based on scientific evidence, focused on environmental education, ecosystem conservation, and sustainable development. Our work is aimed at strengthening community capacities and promoting resilient and sustainable management models, with the purpose of improving the quality of life in vulnerable communities in the United States.",
      es: "Partimos del principio de transformar las ideas en acciones concretas, actuando a nivel local con una visión global. Diseñamos e implementamos proyectos basados en evidencia científica, enfocados en la educación ambiental, la conservación de ecosistemas y el desarrollo sostenible. Nuestro trabajo se orienta al fortalecimiento de capacidades comunitarias y a la promoción de modelos de gestión resilientes y sostenibles, con el propósito de mejorar la calidad de vida en comunidades vulnerables de los Estados Unidos."
    }
  },
  projectDetailPage: {
    backToProjects: { en: 'Back to All Projects', es: 'Volver a Todos los Proyectos' }
  },
  teamPage: {
    banner: {
      title: { en: 'Meet Our Team', es: 'Conoce a Nuestro Equipo' },
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&h=1080&fit=crop"
    }
  },
  blogPage: {
    banner: {
      title: { en: 'Our Blog', es: 'Nuestro Blog' },
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&h=1080&fit=crop"
    },
    featuredPostTitle: { en: 'Featured Post', es: 'Artículo Destacado' },
    recentPostsTitle: { en: 'Recent Posts', es: 'Publicaciones Recientes' },
    sharePostTitle: { en: 'Share this post', es: 'Compartir este artículo' },
  },
  contactPage: {
    banner: {
      title: { en: "Contact Us", es: "Contáctanos" },
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&h=1080&fit=crop"
    },
    intro: { en: "We'd love to hear from you. Whether you have a question about our projects, partnerships, or just want to say hello, our team is ready to answer all your questions.", es: "Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestros proyectos, alianzas o simplemente quieras saludar, nuestro equipo está listo para responder a todas tus preguntas." },
    addressTitle: { en: 'Address', es: 'Dirección' },
    phoneTitle: { en: 'Phone', es: 'Teléfono' },
    emailTitle: { en: 'Email', es: 'Correo Electrónico' },
    form: {
      title: { en: "Send us a Message", es: "Envíanos un Mensaje" },
      nameLabel: { en: "Name", es: "Nombre" },
      emailLabel: { en: "Email Address", es: "Correo Electrónico" },
      messageLabel: { en: "Message", es: "Mensaje" },
      buttonText: { en: "Send Message", es: "Enviar Mensaje" },
    }
  },
  donatePage: {
    banner: {
      title: { en: 'Make a Difference Today', es: 'Haz la Diferencia Hoy' },
      imageUrl: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1920&h=1080&fit=crop"
    },
    intro: { en: "Your contribution empowers our community. Every donation, big or small, makes a significant impact.", es: "Tu contribución empodera a nuestra comunidad. Cada donación, grande o pequeña, tiene un impacto significativo." },
    form: {
      chooseAmount: { en: 'Choose an amount', es: 'Elige una cantidad' },
      customAmount: { en: 'Or enter a custom amount', es: 'O ingresa una cantidad personalizada' },
      firstName: { en: 'First Name', es: 'Nombre' },
      lastName: { en: 'Last Name', es: 'Apellido' },
      emailAddress: { en: 'Email Address', es: 'Correo Electrónico' },
      paymentPlaceholder: { en: 'Payment processor (e.g., Stripe, PayPal) would be integrated here.', es: 'El procesador de pagos (ej. Stripe, PayPal) se integraría aquí.' },
      donateAmount: { en: 'Donate ${{amount}} Now', es: 'Donar ${{amount}} Ahora' }
    },
    thankYou: {
      title: { en: 'Thank You!', es: '¡Gracias!' },
      text: { en: 'Your generous donation of ${{amount}} has been received. Your support helps us continue our vital work. A confirmation email has been sent to you.', es: 'Tu generosa donación de ${{amount}} ha sido recibida. Tu apoyo nos ayuda a continuar nuestro trabajo vital. Se te ha enviado un correo de confirmación.' }
    }
  },
  projects: [
    {
      id: 'project_forest',
      title: { en: "Faith Community Forest, an urban ecological corridor in Central Florida", es: "Bosque comunitario de la Fé, un corredor ecológico urbano en la Florida Central" },
      description: { en: "In June we started this project, where we will develop training, reforestation and conservation actions of the urban forest in the community of Azalea Park, in Orlando. The project is for two years, financed through the \"Nuestros Bosques\" program, promoted by the Hispanic Access Foundation together with the United States Forest Service.", es: "In June we started this project, where we will develop training, reforestation and conservation actions of the urban forest in the community of Azalea Park, in Orlando. The project is for two years, financed through the \"Nuestros Bosques\" program, promoted by the Hispanic Access Foundation together with the United States Forest Service." },
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Lush green forest corridor',
      details: { en: 'Detailed information about the Faith Community Forest project. This initiative focuses on restoring urban green spaces to create a biodiverse corridor. We partner with local communities to plant native trees, remove invasive species, and conduct educational workshops on the importance of urban forests for both ecological health and human well-being. The project aims to improve air quality, reduce urban heat island effect, and provide a natural sanctuary for residents.', es: 'Información detallada sobre el proyecto Bosque Comunitario de la Fé. Esta iniciativa se enfoca en restaurar espacios verdes urbanos para crear un corredor biodiverso. Nos asociamos con comunidades locales para plantar árboles nativos, eliminar especies invasoras y realizar talleres educativos sobre la importancia de los bosques urbanos para la salud ecológica y el bienestar humano. El proyecto tiene como objetivo mejorar la calidad del aire, reducir el efecto de isla de calor urbano y proporcionar un santuario natural para los residentes.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1542601906-8b6a35da7528?q=80&w=800&fit=crop',
    },
    {
      id: 'project_agriculture',
      title: { en: "Sustainable urban agriculture", es: "Sustainable urban agriculture" },
      description: { en: "Starting in January 2025, in partnership with the Engelwood Neighborhood Center in Orlando, we are restoring its community garden and launching a continuing education program in sustainable urban agriculture for children, youth, and seniors visiting the center.", es: "Starting in January 2025, in partnership with the Engelwood Neighborhood Center in Orlando, we are restoring its community garden and launching a continuing education program in sustainable urban agriculture for children, youth, and seniors visiting the center." },
      imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Hands holding a small plant in a community garden',
      details: { en: 'This project promotes food security and community bonding through sustainable urban agriculture. We provide workshops on composting, organic gardening, and water conservation techniques. The community garden serves as an outdoor classroom and a source of fresh, healthy produce for the neighborhood. Our goal is to empower residents with the skills to grow their own food and foster a more sustainable local food system.', es: 'Este proyecto promueve la seguridad alimentaria y los lazos comunitarios a través de la agricultura urbana sostenible. Ofrecemos talleres sobre compostaje, jardinería orgánica y técnicas de conservación de agua. El jardín comunitario sirve como un aula al aire libre y una fuente de productos frescos y saludables para el vecindario. Nuestro objetivo es capacitar a los residentes con las habilidades para cultivar sus propios alimentos y fomentar un sistema alimentario local más sostenible.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&fit=crop',
    },
    {
      id: 'project_hydroponic',
      title: { en: "Resilient Communities", es: "Comunidades resilientes" },
      description: { en: "Through the same partnership with the Engelwood Neighborhood Center in Orlando, since January we have been holding training workshops on hydroponic food production, aimed at children, youth, and seniors who visit the center.", es: "Through the same partnership with the Engelwood Neighborhood Center in Orlando, since January we have been holding training workshops on hydroponic food production, aimed at children, youth, and seniors who visit the center." },
      imageUrl: 'https://images.unsplash.com/photo-1598997316248-284534152112?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Hydroponic farming system with green lettuce',
      details: { en: 'Our Resilient Communities program focuses on innovative and space-efficient food production methods like hydroponics. These workshops teach participants how to set up and maintain hydroponic systems, enabling them to grow fresh produce year-round with minimal water and space. This initiative is key to building climate resilience and ensuring access to nutritious food in urban environments.', es: 'Nuestro programa de Comunidades Resilientes se enfoca en métodos de producción de alimentos innovadores y eficientes en el espacio como la hidroponía. Estos talleres enseñan a los participantes cómo instalar y mantener sistemas hidropónicos, permitiéndoles cultivar productos frescos durante todo el año con un mínimo de agua y espacio. Esta iniciativa es clave para construir resiliencia climática y garantizar el acceso a alimentos nutritivos en entornos urbanos.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1617196034183-42491566a38b?q=80&w=800&fit=crop',
    },
    {
      id: 'project_turtles',
      title: { en: "Ocean Guardians", es: "Guardianes del Océano" },
      description: { en: "We are ambassadors for Central Florida for the educational project \"Amigos de las tortugas marinas\". To date, we have reached out to at least 210 people of all ages, who have learned in a practical way about the characteristics, types, habits, and ways to contribute to the conservation of this species.", es: "We are ambassadors for Central Florida for the educational project \"Amigos de las tortugas marinas\", To date, we have reached out to at least 210 people of all ages, who have learned in a practical way about the characteristics, types, habits, and ways to contribute to the conservation of this species." },
      imageUrl: 'https://images.unsplash.com/photo-1551922253-06630b7396c2?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A sea turtle swimming in the ocean',
      details: { en: 'As "Ocean Guardians," we raise awareness about marine conservation, focusing on threatened species like sea turtles. Our educational outreach includes beach clean-ups, workshops on reducing plastic pollution, and informational sessions at schools and community centers. We aim to inspire a new generation of environmental stewards dedicated to protecting our precious marine ecosystems.', es: 'Como "Guardianes del Océano", creamos conciencia sobre la conservación marina, enfocándonos en especies amenazadas como las tortugas marinas. Nuestro alcance educativo incluye limpiezas de playas, talleres sobre la reducción de la contaminación plástica y sesiones informativas en escuelas y centros comunitarios. Nuestro objetivo es inspirar a una nueva generación de administradores ambientales dedicados a proteger nuestros preciosos ecosistemas marinos.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1506241537240-57a5e0f58469?q=80&w=800&fit=crop',
    },
    {
      id: 'project_hispanics',
      title: { en: "Connecting Hispanics with ecosystems", es: "Connecting Hispanics with ecosystems" },
      description: { en: "More than 180 Hispanics have participated in educational field trips in Spanish, connecting them with local ecosystems in Orlando and Central Florida. The goal is to foster experiential learning, promote the value of these ecosystems, minimize the language barrier, and foster professional connections with conservation organizations.", es: "More than 180 Hispanics have participated in educational field trips in Spanish, connecting them with local ecosystems in Orlando and Central Florida. The goal is to foster experiential learning, promote the value of these ecosystems, minimize language barrier, and foster professional connections with conservation organizations." },
      imageUrl: 'https://images.unsplash.com/photo-1569163139500-5e3952516854?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A group of people on a field trip in a natural setting',
      details: { en: 'This program is designed to bridge the gap between the Hispanic community and local environmental initiatives. By offering guided tours, workshops, and informational materials in Spanish, we ensure that language is not a barrier to participation. We facilitate meaningful connections with nature and empower the community to take an active role in local conservation efforts.', es: 'Este programa está diseñado para cerrar la brecha entre la comunidad hispana y las iniciativas ambientales locales. Al ofrecer visitas guiadas, talleres y materiales informativos en español, nos aseguramos de que el idioma no sea una barrera para la participación. Facilitamos conexiones significativas con la naturaleza y empoderamos a la comunidad para que tome un papel activo en los esfuerzos de conservación locales.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=800&fit=crop',
    },
    {
      id: 'project_meteo',
      title: { en: "Adverse meteorological events", es: "Adverse meteorological events" },
      description: { en: "In partnership with the Hispanic Federation, we conducted a study on the vulnerability of older adults to adverse meteorological events. We promote actions and design projects to minimize risks in vulnerable communities during adverse meteorological events.", es: "In partnership with the Hispanic Federation, we conducted a study on the vulnerability of older adults to adverse metereological events. We promote actions and design projects to minimize risks in vulnerable communities during adverse metereological events." },
      imageUrl: 'https://images.unsplash.com/photo-1594225002094-1a3b118b6932?q=80&w=800&h=600&fit=crop',
      imageAlt: 'Stormy clouds over a coastal area',
      details: { en: 'Focused on climate change adaptation, this project assesses and addresses the vulnerabilities of specific community groups, particularly older adults, to extreme weather events. We work to develop early warning systems, create community resilience plans, and provide resources and training to help residents prepare for and respond to events like hurricanes, floods, and heatwaves.', es: 'Enfocado en la adaptación al cambio climático, este proyecto evalúa y aborda las vulnerabilidades de grupos comunitarios específicos, particularmente los adultos mayores, a eventos climáticos extremos. Trabajamos para desarrollar sistemas de alerta temprana, crear planes de resiliencia comunitaria y proporcionar recursos y capacitación para ayudar a los residentes a prepararse y responder a eventos como huracanes, inundaciones y olas de calor.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1561485132-59e214bab543?q=80&w=800&fit=crop',
    },
    {
      id: 'project_leadership',
      title: { en: "Hispanic Environmental Leadership", es: "Hispanic Environmental Leadership" },
      description: { en: "We participate in events and meetings on educational topics, ecosystem conservation, and sustainability, in partnership with various social and environmental organizations, to consolidate Hispanic leadership in Orlando and the State of Florida.", es: "We participate in events and meetings on educational topics, ecosystem conservation, and sustainability, in partnership with various social and environmental organizations, to consolidate Hispanic leadership in Orlando and the State of Florida." },
      imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A group of leaders in a meeting',
      details: { en: 'Fostering the next generation of environmental leaders within the Hispanic community is the core of this initiative. We provide mentorship, leadership training, and networking opportunities to empower individuals to advocate for environmental justice and sustainability in their communities. By amplifying diverse voices, we aim to create a more inclusive and effective environmental movement.', es: 'Fomentar la próxima generación de líderes ambientales dentro de la comunidad hispana es el núcleo de esta iniciativa. Brindamos tutoría, capacitación en liderazgo y oportunidades de establecer contactos para capacitar a las personas para que aboguen por la justicia ambiental y la sostenibilidad en sus comunidades. Al amplificar diversas voces, nuestro objetivo es crear un movimiento ambiental más inclusivo y eficaz.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=800&fit=crop',
    },
    {
      id: 'project_youth',
      title: { en: "Youth Project", es: "Proyecto de jóvenes" },
      description: { en: "Empowering the next generation of environmental stewards through workshops, mentorship, and community action projects.", es: "Empoderando a la próxima generación de custodios ambientales a través de talleres, mentorías y proyectos de acción comunitaria." },
      imageUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&h=600&fit=crop',
      imageAlt: 'A group of young people working together on an environmental project',
      details: { en: 'Our Youth Project is designed to engage young people aged 14-20 in environmental conservation. Participants learn about local ecosystems, develop leadership skills, and implement their own green projects, from creating community gardens to organizing recycling drives. We aim to inspire a lifelong passion for nature and sustainability.', es: 'Nuestro Proyecto de Jóvenes está diseñado para involucrar a personas de 14 a 20 años en la conservación del medio ambiente. Los participantes aprenden sobre los ecosistemas locales, desarrollan habilidades de liderazgo e implementan sus propios proyectos ecológicos, desde la creación de huertos comunitarios hasta la organización de campañas de reciclaje. Nuestro objetivo es inspirar una pasión para toda la vida por la naturaleza y la sostenibilidad.'},
      detailImageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&fit=crop',
    }
  ],
  team: [
    { id: 'team_faruk', name: 'FARUK BAGDAH', role: { en: 'President/CEO', es: 'Presidente/CEO' }, bio: { en: 'With over 20 years of experience in environmental science and non-profit management, Faruk is dedicated to creating sustainable solutions for urban communities. His vision is to bridge the gap between humanity and nature.', es: 'Con más de 20 años de experiencia en ciencias ambientales y gestión de organizaciones sin fines de lucro, Faruk se dedica a crear soluciones sostenibles para comunidades urbanas. Su visión es cerrar la brecha entre la humanidad y la naturaleza.' }, imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of FARUK BAGDAH' },
    { id: 'team_victor', name: 'VICTOR MARTINEZ', role: { en: 'Director/Treasurer', es: 'Director/Tesorero' }, bio: { en: "Victor brings a wealth of financial expertise, ensuring the organization's long-term sustainability. He is passionate about channeling resources effectively to support grassroots conservation and educational programs.", es: 'Víctor aporta una vasta experiencia financiera, asegurando la sostenibilidad a largo plazo de la organización. Le apasiona canalizar recursos de manera efectiva para apoyar la conservación de base y los programas educativos.' }, imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of VICTOR MARTINEZ' },
    { id: 'team_oliver', name: 'OLIVER SANRONA', role: { en: 'Director', es: 'Director' }, bio: { en: 'As a community outreach specialist, Oliver excels at building strong partnerships and engaging diverse groups in our environmental initiatives. He believes in the power of collective action to create lasting change.', es: 'Como especialista en alcance comunitario, Oliver se destaca en la construcción de alianzas sólidas y en la participación de diversos grupos en nuestras iniciativas ambientales. Cree en el poder de la acción colectiva para crear un cambio duradero.' }, imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of OLIVER SANRONA' },
    { id: 'team_giuseppe', name: 'GIUSEPPE BERARDI', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: 'Giuseppe provides strategic guidance based on his extensive background in ecological research. He is committed to ensuring all our projects are grounded in sound science for maximum impact.', es: 'Giuseppe proporciona orientación estratégica basada en su amplia experiencia en investigación ecológica. Está comprometido a garantizar que todos nuestros proyectos se basen en ciencia sólida para un impacto máximo.' }, imageUrl: 'https://images.unsplash.com/photo-1542740348-39501a69525a?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of GIUSEPPE BERARDI' },
    { id: 'team_simon', name: 'SIMON TENORIO', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: "With a focus on public policy and advocacy, Simon helps amplify Biophilia's voice to influence environmental policy. He is dedicated to creating systemic change for a more sustainable future.", es: 'Con un enfoque en políticas públicas y defensa, Simón ayuda a amplificar la voz de Biophilia para influir en la política ambiental. Se dedica a crear un cambio sistémico para un futuro más sostenible.' }, imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop', imageAlt: 'Photo of SIMON TENORIO' },
  ],
  blog: [
    {
      id: 'blog_post_1',
      slug: 'the-roots-of-our-city-why-urban-forests-matter',
      title: { en: "The Roots of Our City: Why Urban Forests Matter", es: "Las Raíces de Nuestra Ciudad: Por Qué los Bosques Urbanos Importan" },
      author: "Faruk Bagdah, President/CEO",
      date: '2024-05-15',
      summary: { en: "Urban forests are more than just a collection of trees; they are vital ecosystems that clean our air, cool our streets, and connect our communities. Discover the impact of projects like the Faith Community Forest.", es: "Los bosques urbanos son más que una colección de árboles; son ecosistemas vitales que limpian nuestro aire, refrescan nuestras calles y conectan nuestras comunidades. Descubre el impacto de proyectos como el Bosque Comunitario de la Fé." },
      content: { 
        en: `In the heart of our bustling cities, a quiet revolution is taking place. It's not a revolution of machines or technology, but of leaves, branches, and roots. We're talking about urban forests, the green lungs of our metropolitan areas.\n\nAt Biophilia Institute, we've long understood that trees are not mere decorations. They are critical infrastructure. Through initiatives like our Faith Community Forest project in Orlando, we are working to expand this vital green canopy. Urban forests provide immense benefits: they filter air pollutants, reduce the urban heat island effect, manage stormwater runoff, and provide crucial habitats for wildlife.\n\nBut the benefits don't stop there. Studies have repeatedly shown the positive impact of green spaces on human mental and physical health. A walk through a tree-lined street can reduce stress, improve mood, and encourage physical activity. These natural spaces also serve as community hubs, bringing people together and fostering a shared sense of ownership and pride. Join us in nurturing the roots of our city for a healthier, more resilient future.`, 
        es: `En el corazón de nuestras bulliciosas ciudades, se está produciendo una revolución silenciosa. No es una revolución de máquinas o tecnología, sino de hojas, ramas y raíces. Hablamos de los bosques urbanos, los pulmones verdes de nuestras áreas metropolitanas.\n\nEn Biophilia Institute, hemos entendido desde hace mucho tiempo que los árboles no son meras decoraciones. Son infraestructura crítica. A través de iniciativas como nuestro proyecto Bosque Comunitario de la Fé en Orlando, estamos trabajando para expandir este vital dosel verde. Los bosques urbanos proporcionan inmensos beneficios: filtran los contaminantes del aire, reducen el efecto de isla de calor urbano, gestionan la escorrentía de aguas pluviales y proporcionan hábitats cruciales para la vida silvestre.\n\nPero los beneficios no terminan ahí. Los estudios han demostrado repetidamente el impacto positivo de los espacios verdes en la salud mental y física de las personas. Un paseo por una calle arbolada puede reducir el estrés, mejorar el estado de ánimo y fomentar la actividad física. Estos espacios naturales también sirven como centros comunitarios, uniendo a las personas y fomentando un sentido compartido de propiedad y orgullo. Únete a nosotros para nutrir las raíces de nuestra ciudad para un futuro más saludable y resiliente.` 
      },
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&h=600&fit=crop',
      imageAlt: "Lush green forest corridor with sunbeams"
    },
    {
      id: 'blog_post_2',
      slug: 'growing-together-the-power-of-community-gardens',
      title: { en: "Growing Together: The Power of Community Gardens", es: "Creciendo Juntos: El Poder de los Huertos Comunitarios" },
      author: "Biophilia Team",
      date: '2024-04-22',
      summary: { en: "From fostering food security to building neighborhood bonds, community gardens are transforming urban landscapes. Learn how our sustainable urban agriculture project is making a difference.", es: "Desde fomentar la seguridad alimentaria hasta construir lazos vecinales, los huertos comunitarios están transformando los paisajes urbanos. Aprende cómo nuestro proyecto de agricultura urbana sostenible está marcando la diferencia." },
      content: { 
        en: `There's something magical about planting a seed and watching it grow. That magic is amplified when it happens in a community setting. Community gardens are powerful tools for social and environmental change, turning underutilized plots of land into vibrant hubs of activity, learning, and nourishment.\n\nOur sustainable urban agriculture projects, in partnership with centers like the Engelwood Neighborhood Center, are a testament to this power. These gardens are more than just a source of fresh, healthy produce; they are outdoor classrooms where children, adults, and seniors learn about nutrition, ecology, and sustainable living. They are spaces where neighbors connect, share knowledge, and build stronger, more resilient communities.\n\nBy getting our hands dirty together, we are not just growing food—we are cultivating a deeper connection to our food system, to the earth, and to each other. Every tomato harvested and every seed planted is a step towards a more sustainable and equitable future.`, 
        es: `Hay algo mágico en plantar una semilla y verla crecer. Esa magia se amplifica cuando ocurre en un entorno comunitario. Los huertos comunitarios son herramientas poderosas para el cambio social y ambiental, convirtiendo terrenos subutilizados en vibrantes centros de actividad, aprendizaje y nutrición.\n\Nuestros proyectos de agricultura urbana sostenible, en asociación con centros como el Engelwood Neighborhood Center, son un testimonio de este poder. Estos huertos son más que una fuente de productos frescos y saludables; son aulas al aire libre donde niños, adultos y personas mayores aprenden sobre nutrición, ecología y vida sostenible. Son espacios donde los vecinos se conectan, comparten conocimientos y construyen comunidades más fuertes y resilientes.\n\nAl ensuciarnos las manos juntos, no solo estamos cultivando alimentos, sino que estamos cultivando una conexión más profunda con nuestro sistema alimentario, con la tierra y entre nosotros. Cada tomate cosechado y cada semilla plantada es un paso hacia un futuro más sostenible y equitativo.` 
      },
      imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&h=600&fit=crop',
      imageAlt: "A person holding fresh vegetables in a community garden"
    }
  ],
};