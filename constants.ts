

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
        en: "We are a 501(c)(3) non-profit organization, established for charitable, educational, and scientific purposes. We connect people with nature to build sustainable, resilient, and conscious communities. We work with passion for environmental education, ecosystem conservation, and sustainable development, especially in vulnerable communities in the U.S.\n\nWe invite you to learn about our projects and join our mission, to contribute together to a just and sustainable future for all generations.\n\n\"Our affinity with nature is innate. Conserving it is vital.\"",
        es: "Somos una organización sin fines de lucro 501(c)(3), constituida con fines benéficos, educativos y científicos. Conectamos a las personas con la naturaleza, para construir comunidades sostenibles, resilientes y conscientes. Trabajamos con pasión por la educación ambiental, la conservación de ecosistemas y el desarrollo sostenible, especialmente en comunidades vulnerables de EE.UU.\n\nTe invitamos a conocer nuestros proyectos e incorporarte a nuestra misión, para juntos contribuir a un futuro justo y sostenible para todas las generaciones.\n\n\"Nuestra afinidad con la naturaleza es innata. Conservarla es vital.\""
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
            en: '"We only conserve what we love, and we only love what we understand."\nWe facilitate transformative learning processes that connect scientific knowledge with direct experience in nature, sowing understanding and sensitivity as the foundation for its care.',
            es: '"Solo conservamos lo que amamos, y solo amamos lo que entendemos."\nFacilitamos procesos de aprendizaje transformadores que conectan el saber científico con la vivencia directa en la naturaleza, sembrando comprensión y sensibilidad como cimiento para su cuidado.'
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
            en: '"Nature is resilient, but not infinite."\nWe develop conservation and ecological restoration initiatives, involving communities through collaborative actions that reinforce the bond between people and their environment.',
            es: '"La naturaleza es resiliente, pero no infinita."\nDesarrollamos iniciativas de conservación y restauración ecológica, involucrando a comunidades mediante acciones colaborativas que refuerzan el vínculo entre las personas y su entorno.'
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
            en: '"Living with respect and acting with awareness are the basis of sustainability."\nWe promote sustainable practices that integrate knowledge, culture, and local action, strengthening healthy environments and ways of life in balance with the natural environment.',
            es: '"Vivir con respeto y actuar con conciencia son la base de la sostenibilidad."\nImpulsamos prácticas sostenibles que integran conocimiento, cultura y acción local, fortaleciendo entornos sanos y formas de vida en equilibrio con el entorno natural.'
          },
          icon: 'SustainabilityIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/4.sostenibilidad.jpg'
        },
        {
          id: 'action_leadership',
          title: { en: 'Leadership', es: 'Liderazgo' },
          text: {
            en: '"Science guides, leadership transforms."\nWe train committed environmental leaders, capable of articulating science, identity, and collective action to generate lasting changes in their communities and ecosystems.',
            es: '"La ciencia guía, el liderazgo transforma."\nFormamos líderes ambientales comprometidos, capaces de articular ciencia, identidad y acción colectiva para generar cambios duraderos en sus comunidades y ecosistemas.'
          },
          icon: 'MegaphoneIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/5.liderazo.jpg'
        },
      ]
    },
    latestProjects: {
      title: { en: 'Our Projects', es: 'Nuestros Proyectos' },
      subtitle: {
        en: "“We transform ideas into action, to act locally and influence globally.”\nWe base our projects on scientific evidence, providing educational and conservation tools to develop resilient and sustainable models that improve the quality of life in vulnerable communities in the U.S.",
        es: '“Transformamos las ideas en acción, para actuar localmente e incidir globalmente”.\nFundamentamos nuestros proyectos en evidencia científica, proporcionando herramientas educativas y de conservación para desarrollar modelos resilientes y sostenibles que mejoren la calidad de vida en comunidades vulnerables de EE.UU.'
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
        { id: 'value_1', title: { en: 'Connection with Nature', es: 'Conexión con la naturaleza' }, text: { en: 'We foster the connection with the natural environment as the basis for a healthy and conscious life.', es: 'Fomentamos la conexión con el entorno natural como base para una vida saludable y consciente.' }, icon: 'LeafIcon' },
        { id: 'value_2', title: { en: 'Transformative Education', es: 'Educación transformadora' }, text: { en: 'We believe in education as a driver of change for individual, community, and sustainable development.', es: 'Creemos en la educación como motor de cambio para el desarrollo individual, comunitario y sostenible.' }, icon: 'BookOpenIcon' },
        { id: 'value_3', title: { en: 'Science with Purpose', es: 'Ciencia con propósito' }, text: { en: 'We use scientific knowledge to design concrete solutions to social and environmental challenges.', es: 'Utilizamos el conocimiento científico para diseñar soluciones concretas a los desafíos sociales y ambientales.' }, icon: 'BeakerIcon' },
        { id: 'value_4', title: { en: 'Social Equity', es: 'Equidad social' }, text: { en: 'We work with and for vulnerable communities, respecting diversity and promoting inclusion.', es: 'Trabajamos con y para comunidades vulnerables, respetando la diversidad y promoviendo la inclusión.' }, icon: 'EquityIcon' },
        { id: 'value_5', title: { en: 'Community Leadership', es: 'Liderazgo comunitario' }, text: { en: 'We promote local leadership as the central axis of sustainable change.', es: 'Impulsamos el protagonismo local como eje central del cambio sostenible.' }, icon: 'UsersIcon' },
        { id: 'value_6', title: { en: 'Collaboration', es: 'Colaboración' }, text: { en: 'We believe in the power of joint work between communities, institutions, and diverse sectors to generate impact.', es: 'Creemos en el poder del trabajo conjunto entre comunidades, instituciones y sectores diversos para generar impacto.' }, icon: 'HandshakeIcon' },
      ],
    },
    alliances: {
      title: { en: "Our Alliances", es: "Alianzas" },
      description: { en: "We collaborate with public and private organizations that strengthen our impact.", es: "Colaboramos con organizaciones públicas y privadas que fortalecen nuestro impacto." },
      partners: [
        { id: 'aliance_1', name: 'Hispanic Federation', logoUrl: 'https://biophiliaweb.org/images/aliados/1.png' },
        { id: 'aliance_2', name: 'Hispanic Access Foundation', logoUrl: 'https://biophiliaweb.org/images/aliados/2.png' },
        { id: 'aliance_3', name: 'City of Orlando', logoUrl: 'https://biophiliaweb.org/images/aliados/3.png' },
        { id: 'aliance_4', name: 'Inwater Research Group', logoUrl: 'https://biophiliaweb.org/images/aliados/4.jpg' },
        { id: 'aliance_5', name: 'Orange Audubon', logoUrl: 'https://biophiliaweb.org/images/aliados/5.jpg' },
        { id: 'aliance_6', name: 'The Episcopal Churches of Christ the King and Jesús de Nazaret', logoUrl: 'https://biophiliaweb.org/images/aliados/6.png' },
        { id: 'aliance_7', name: 'Renacer Foundation', logoUrl: 'https://biophiliaweb.org/images/aliados/7.png' },
        { id: 'aliance_8', name: 'Casa de Venezuela Orlando', logoUrl: 'https://biophiliaweb.org/images/aliados/8.png' },
        { id: 'aliance_9', name: 'Mi familia en Acción', logoUrl: 'https://biophiliaweb.org/images/aliados/9.png' },
        { id: 'aliance_10', name: 'Nuestra cultura Outdoors', logoUrl: 'https://biophiliaweb.org/images/aliados/10.jpg' },
        { id: 'aliance_11', name: 'Observatorio Ambiental Hispano', logoUrl: 'https://biophiliaweb.org/images/aliados/11.jpg' },
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
      title: { en: "About Us", es: "NOSOTROS" },
      imageUrl: "https://biophiliaweb.org/images/nosotros/nostros.jpg"
    },
    history: {
      title: { en: "Our History", es: "Nuestra Historia" },
      text: {
        en: "Biophilia Institute was born from the concern of a group of professionals in environment and sustainability, who, from our experience, identified the need to connect and educate citizens about the aquatic and terrestrial ecosystems they inhabit. Our purpose is to generate experiential experiences that promote understanding, appreciation, and participation in their conservation.\n\nSince June 2020, we have promoted initiatives with social and environmental organizations in Orlando and Central Florida. In 2023, we created the Hispanic Environmental Observatory (OAH), a coalition that provides information and actions in Spanish to strengthen the Hispanic community's participation in the environmental movement. In 2025, we formalized Biophilia Institute as a 501(c)(3) non-profit organization, for educational, scientific, and public benefit purposes, focused on promoting education, conservation, and sustainability projects aimed at well-being and equity, and a sustainable future in all communities, especially minority and vulnerable communities in the U.S.",
        es: "Biophilia Institute nace de la inquietud de un grupo de profesionales en ambiente y sostenibilidad, quienes, a partir de nuestra experiencia, identificamos la necesidad de conectar y educar a la ciudadanía sobre los ecosistemas acuáticos y terrestres que habitan. Nuestro propósito es generar experiencias vivenciales que fomenten el entendimiento, la valoración y la participación en su conservación.\n\nDesde junio de 2020 hemos impulsado iniciativas junto a organizaciones sociales y ambientales de Orlando y Florida Central. En 2023 creamos el Observatorio Ambiental Hispano (OAH), una coalición que brinda información y acciones en español para fortalecer la participación de la comunidad hispana en el movimiento ambiental. En 2025 formalizamos a Biophilia Institute como una organización sin fines de lucro 501(c)(3), con fines educativos, científicos y de beneficio público, centrada en promover proyectos de educación, conservación y sostenibilidad orientados al bienestar y la equidad, y un futuro sostenible en todas las comunidades, especialmente comunidades minoritarias y vulnerables en EE.UU."
      },
      imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&h=600&fit=crop"
    },
    biophiliaExplanation: {
      title: { en: "Our Name", es: "Nuestro Nombre" },
      text: {
        en: "The name comes from the concept of “Biophilia”, coined by Erich Fromm and developed by biologist Edward O. Wilson, which refers to the innate connection of human beings with nature. This principle is our guide, to facilitate transformative experiences with natural environments as a basis for greater ecological awareness, community resilience, and improvement of quality of life.",
        es: "El nombre proviene del concepto “Biophilia”, acuñado por Erich Fromm y desarrollado por el biólogo Edward O. Wilson, que alude a la conexión innata del ser humano con la naturaleza. Este principio es nuestra guía, para facilitar experiencias transformadoras con entornos naturales como base para una mayor conciencia ecológica, resiliencia comunitaria y mejora de la calidad de vida."
      }
    },
    mission: {
      title: { en: "Mission", es: "Misión" },
      text: {
        en: "To promote the conservation of ecosystems and sustainable development through a continuous connection with nature, using scientific and educational tools that strengthen local leadership and contribute to the construction of sustainable and resilient communities.",
        es: "Promover la conservación de los ecosistemas y el desarrollo sostenible a través de una conexión continua con la naturaleza, utilizando herramientas científicas y educativas que fortalezcan el liderazgo local y contribuyan a la construcción de comunidades sostenibles y resilientes."
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
        en: "At Biophilia Institute, we promote comprehensive environmental solutions that combine science, education, and community action, with a special focus on historically underrepresented communities. Our projects promote ecosystem conservation, ecological restoration, urban agriculture, community resilience, and youth leadership, applying methodologies based on scientific evidence and experiential learning.\n\nWe facilitate access to environmental information in Spanish to strengthen Hispanic participation in decision-making, and we articulate alliances with public, academic, and community institutions to expand the impact of our actions. Inspired by the principle of biophilia, we recognize the innate connection between people and nature as an essential foundation for building more conscious, resilient, and sustainable societies.",
        es: "En Biophilia Institute impulsamos soluciones ambientales integrales que combinan ciencia, educación y acción comunitaria, con un enfoque especial en comunidades históricamente subrepresentadas. Nuestros proyectos promueven la conservación de ecosistemas, la restauración ecológica, la agricultura urbana, la resiliencia comunitaria y el liderazgo juvenil, aplicando metodologías basadas en evidencia científica y aprendizaje vivencial.\n\nFacilitamos el acceso a información ambiental en español para fortalecer la participación hispana en la toma de decisiones, y articulamos alianzas con instituciones públicas, académicas y comunitarias para ampliar el impacto de nuestras acciones. Inspirados en el principio de biophilia, reconocemos la conexión innata entre las personas y la naturaleza como fundamento esencial para construir sociedades más conscientes, resilientes y sostenibles."
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
      en: "We base our projects on scientific evidence, providing educational and conservation tools to develop resilient and sustainable models that improve the quality of life in vulnerable communities in the U.S.",
      es: "Fundamentamos nuestros proyectos en evidencia científica, proporcionando herramientas educativas y de conservación para desarrollar modelos resilientes y sostenibles que mejoren la calidad de vida en comunidades vulnerables de EE.UU."
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
      title: { en: 'Articles & News', es: 'Artículos y Noticias' },
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
      id: 'project_urban_forest',
      title: { en: "Urban Forest & Biodiversity Project", es: "Urban Forest & Biodiversity Project" },
      description: { en: "An interdisciplinary initiative based on urban ecology principles, seeking to design, restore, and conserve a functional network of biodiverse urban forests, ecological corridors, and multifunctional green spaces in Central Florida.", es: "Es una iniciativa interdisciplinaria basada en principios de ecología urbana, que busca diseñar, restaurar y conservar una red funcional de bosques urbanos biodiversos, corredores ecológicos y espacios verdes multifuncionales en Florida Central." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/1.Urban Forest & Biodiversity Project.jpg',
      imageAlt: 'Lush green forest corridor',
      details: { en: 'An interdisciplinary initiative based on urban ecology principles, seeking to design, restore, and conserve a functional network of biodiverse urban forests, ecological corridors, and multifunctional green spaces in Central Florida. It integrates criteria of sustainable urban forestry, ecological engineering, and community governance, in order to mitigate high temperatures, improve air quality, restore key habitats, strengthen ecological and social resilience, and promote healthier cities in a context of rapid urban growth.\n“Since June 2025, we have been developing the project “Faith Community Forest, an ecological corridor in Central Florida”, in alliance with...”', es: 'Es una iniciativa interdisciplinaria basada en principios de ecología urbana, que busca diseñar, restaurar y conservar una red funcional de bosques urbanos biodiversos, corredores ecológicos y espacios verdes multifuncionales en Florida Central. Integra criterios de silvicultura urbana sostenible, ingeniería ecológica y gobernanza comunitaria, con el fin de mitigar las altas temperaturas, mejorar la calidad del aire, restaurar hábitats clave, fortalecer la resiliencia ecológica y social, y promover ciudades más saludables en un contexto de rápido crecimiento urbano.\n“Desde junio 2025 desarrollamos en el proyecto “Bosque comunitario de la Fe, un corredor ecoloico en la Florida Central”, en alianza con…...”' },
      detailImageUrl: 'https://images.unsplash.com/photo-1542601906-8b6a35da7528?q=80&w=800&fit=crop',
    },
    {
      id: 'project_urban_harvest',
      title: { en: "Urban Harvest Project", es: "Urban Harvest project" },
      description: { en: "We are developing an educational and participatory model of sustainable urban agriculture that promotes regenerative agricultural practices, local food security, and intergenerational connection (children, youth, and seniors) around ecological cultivation in urban contexts.", es: "Desarrollamos un modelo educativo y participativo de agricultura urbana sostenible que promueve prácticas agrícolas regenerativas, seguridad alimentaria local y conexión intergeneracional (niños, jóvenes y adultos mayores) en torno al cultivo ecológico en contextos urbanos." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/2.Urban Harvest project.jpg',
      imageAlt: 'Hands holding a small plant in a community garden',
      details: { en: 'We are developing an educational and participatory model of sustainable urban agriculture that promotes regenerative agricultural practices, local food security, and intergenerational connection (children, youth, and seniors) around ecological cultivation in urban contexts.\n“Since February 2025, we have been developing it in the community garden of the Engelwood Neighborhood Center, in alliance with the city of Orlando.”', es: 'Desarrollamos un modelo educativo y participativo de agricultura urbana sostenible que promueve prácticas agrícolas regenerativas, seguridad alimentaria local y conexión intergeneracional (niños, jóvenes y adultos mayores) en torno al cultivo ecológico en contextos urbanos.\n“Desde febrero de 2025 lo desarrollamos en el Jardín comunitario del Engelwood Neighborhood Center, en alianza con la ciudad de Orlando.”' },
      detailImageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&fit=crop',
    },
    {
      id: 'project_ocean_guardians',
      title: { en: "Ocean Guardians Project", es: "Ocean guardians Project" },
      description: { en: "We promote experiential learning for the conservation of biodiversity and restoration of marine ecosystems, through environmental education and participatory workshops for the reduction of plastics and restoration of marine habitats.", es: "Promovemos aprendizaje experiencial para la conservación de la biodiversidad y restauración de ecosistemas marinos, a través de educación ambiental y jornadas participativas para la reducción de plásticos y restauración de hábitat marinos, incorporando a la comunidad y en alianza con organizaciones científicas y ambientales." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/3. Ocean guardians Project.jpg',
      imageAlt: 'A sea turtle swimming in the ocean',
      details: { en: 'We promote experiential learning for the conservation of biodiversity and restoration of marine ecosystems, through environmental education and participatory workshops for the reduction of plastics and restoration of marine habitats, incorporating the community and in alliance with scientific and environmental organizations.\n“We are ambassadors in Central Florida for the educational program -Friends of the Sea Turtles- through an alliance with Inwater Research Group.”', es: 'Promovemos aprendizaje experiencial para la conservación de la biodiversidad y restauración de ecosistemas marinos, a través de educación ambiental y jornadas participativas para la reducción de plásticos y restauración de hábitat marinos, incorporando a la comunidad y en alianza con organizaciones científicas y ambientales.\n“Somos embajadores en la Florida Central, del programa educativo -Amigos de las tortugas marinas- a través de alianza con Iwater Group”' },
      detailImageUrl: 'https://images.unsplash.com/photo-1506241537240-57a5e0f58469?q=80&w=800&fit=crop',
    },
    {
      id: 'project_symbiosis',
      title: { en: "Symbiosis Project", es: "Symbiosis Project" },
      description: { en: "We foster experiential learning as a tool to strengthen the relationship between people and ecosystems, recognizing their interdependence as the basis for mutual and sustainable well-being in Central Florida.", es: "Fomentamos el aprendizaje experiencial, como herramienta para fortalecer la relación entre las personas y los ecosistemas, reconociendo su interdependencia como base para el bienestar mutuo y sostenible en la Florida Central." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/4. Symbiosis Project.jpg',
      imageAlt: 'A group of people on a field trip in a natural setting',
      details: { en: 'We foster experiential learning as a tool to strengthen the relationship between people and ecosystems, recognizing their interdependence as the basis for mutual and sustainable well-being in Central Florida.\n“Symbiosis not only educates, but also transforms perception and behavior towards the natural environment, creating bridges between scientific knowledge, community knowledge, and conservation practices.”', es: 'Fomentamos el aprendizaje experiencial, como herramienta para fortalecer la relación entre las personas y los ecosistemas, reconociendo su interdependencia como base para el bienestar mutuo y sostenible en la Florida Central.\n“Symbiosis no solo educa, sino que transforma la percepción y el comportamiento hacia el entorno natural, creando puentes entre el conocimiento científico, el saber comunitario y las prácticas de conservación”.' },
      detailImageUrl: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=800&fit=crop',
    },
    {
      id: 'project_eco_resilience',
      title: { en: "Urban Eco-Resilience Project", es: "Urban Eco-Resilience Project" },
      description: { en: "An integral project aimed at strengthening the adaptation and response capacity of vulnerable communities to adverse weather events, through a multisectoral approach based on environmental education, climate action, and food security.", es: "Proyecto integral orientado a fortalecer la capacidad de adaptación y respuesta de comunidades vulnerables frente a eventos meteorológicos adversos, a través de un enfoque multisectorial basado en la educación ambiental, la acción climática y la seguridad alimentaria." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/5. Urban Eco-Resilience Project.jpg',
      imageAlt: 'Stormy clouds over a coastal area',
      details: { en: 'An integral project aimed at strengthening the adaptation and response capacity of vulnerable communities to adverse weather events, through a multisectoral approach based on environmental education, climate action, and food security.\nThe initiative combines training in food production, scientific assessment of climate risk, and participatory planning, to build a social and ecological resilience network that involves seniors, children, youth, and community leaders.', es: 'Proyecto integral orientado a fortalecer la capacidad de adaptación y respuesta de comunidades vulnerables frente a eventos meteorológicos adversos, a través de un enfoque multisectorial basado en la educación ambiental, la acción climática y la seguridad alimentaria.\nLa iniciativa combina la capacitación en producción de alimentos, la evaluación científica del riesgo climático y la planificación participativa, para construir una red de resiliencia social y ecológica que involucra a personas mayores, niños, jóvenes y líderes comunitarios.' },
      detailImageUrl: 'https://images.unsplash.com/photo-1561485132-59e214bab543?q=80&w=800&fit=crop',
    },
    {
      id: 'project_ecopro_youth',
      title: { en: "EcoPro Youth Project", es: "EcoPro Youth Project" },
      description: { en: "Developing scientific and technical capacities in young people in Central Florida, strengthening youth human capital to access higher education and green jobs, through comprehensive training that combines theory, field practices, mentoring, scientific conferences, and internships.", es: "Desarrollar capacidades científicas y técnicas en jóvenes de Florida Central, fortaleciendo el capital humano juvenil para acceder a estudios superiores y empleos verdes, mediante una formación integral que combina teoría, prácticas de campo, mentorías, conferencias científicas y pasantías." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/6. EcoPro Youth Project.jpg',
      imageAlt: 'A group of young people working together on an environmental project',
      details: { en: 'Developing scientific and technical capacities in young people in Central Florida, strengthening youth human capital to access higher education and green jobs, through comprehensive training that combines theory, field practices, mentoring, scientific conferences, and internships. It addresses key topics such as conservation, biodiversity, sustainable ecotourism, urban agriculture, renewable energies, and environmental communication. The project contributes to reducing educational and labor gaps, articulating with universities, NGOs, companies, and public entities committed to regional sustainability.', es: 'Desarrollar capacidades científicas y técnicas en jóvenes de Florida Central, fortaleciendo el capital humano juvenil para acceder a estudios superiores y empleos verdes, mediante una formación integral que combina teoría, prácticas de campo, mentorías, conferencias científicas y pasantías. Aborda temas clave como conservación, biodiversidad, ecoturismo sostenible, agricultura urbana, energías renovables y comunicación ambiental. El proyecto contribuye a reducir brechas educativas y laborales, articulándose con universidades, ONGs, empresas y entidades públicas comprometidas con la sostenibilidad regional.' },
      detailImageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&fit=crop',
    },
    {
      id: 'project_observatorio',
      title: { en: "Hispanic Environmental Observatory", es: "Observatorio Ambiental Hispano" },
      description: { en: "We promote Hispanic environmental leadership in the U.S. through a platform of scientific information, training, and community action in Spanish. The purpose is to reduce Hispanic underrepresentation in environmental decision-making spaces, and increase their participation in solving socio-environmental problems and local projects.", es: "Impulsamos el liderazgo ambiental hispano en EE.UU. mediante una plataforma de información científica, formación y acción comunitaria en español. Con el propósito de reducir la subrepresentación hispana en los espacios de decisión ambiental, y aumentar su participación en la solución de problemáticas socioambientales y proyectos locales." },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/7.Observatorio Ambiental Hispano.jpg',
      imageAlt: 'A group of leaders in a meeting',
      details: { en: 'We promote Hispanic environmental leadership in the U.S. through a platform of scientific information, training, and community action in Spanish. The purpose is to reduce Hispanic underrepresentation in environmental decision-making spaces, and increase their participation in solving socio-environmental problems and local projects. Through alliances with various organizations to strengthen a network of leaders committed to sustainability and environmental justice.', es: 'Impulsamos el liderazgo ambiental hispano en EE.UU. mediante una plataforma de información científica, formación y acción comunitaria en español. Con el propósito de reducir la subrepresentación hispana en los espacios de decisión ambiental, y aumentar su participación en la solución de problemáticas socioambientales y proyectos locales. A través de alianzas con diversas organizaciones para fortalecer una red de líderes comprometidos con la sostenibilidad y la justicia ambiental.' },
      detailImageUrl: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=800&fit=crop',
    }
  ],
  team: [
    { id: 'team_faruk', name: 'FARUK BAGDAH', role: { en: 'President/CEO', es: 'Presidente/CEO' }, bio: { en: 'Leading the strategic vision of the institute, Faruk brings years of experience in environmental project management and a passion for connecting communities with nature to foster sustainable development.', es: 'Liderando la visión estratégica del instituto, Faruk aporta años de experiencia en la gestión de proyectos ambientales y una pasión por conectar a las comunidades con la naturaleza para fomentar el desarrollo sostenible.' }, imageUrl: 'https://biophiliaweb.org/images/team/Faruk Bagdah.png', imageAlt: 'Photo of FARUK BAGDAH' },
    { id: 'team_victor', name: 'VICTOR MARTINEZ', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: "Victor provides expert guidance on our projects and strategic direction, leveraging his background in community development to ensure our initiatives create a lasting and positive impact.", es: 'Víctor proporciona orientación experta en nuestros proyectos y dirección estratégica, aprovechando su experiencia en desarrollo comunitario para asegurar que nuestras iniciativas creen un impacto duradero y positivo.' }, imageUrl: 'https://biophiliaweb.org/images/team/Victor Martínez.jpg', imageAlt: 'Photo of VICTOR MARTINEZ' },
    { id: 'team_oliver', name: 'OLIVER SANRONA', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: 'As a key advisor, Oliver helps shape our educational programs and conservation strategies. His expertise in ecology is fundamental to the scientific rigor of our work.', es: 'Como asesor clave, Oliver ayuda a dar forma a nuestros programas educativos y estrategias de conservación. Su experiencia en ecología es fundamental para el rigor científico de nuestro trabajo.' }, imageUrl: 'https://biophiliaweb.org/images/team/Oliver Sangona.jpg', imageAlt: 'Photo of OLIVER SANRONA' },
    { id: 'team_giuseppe', name: 'GIUSEPPE BERARDI', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: 'Giuseppe offers strategic advice on community engagement and partnerships. He is dedicated to ensuring that our projects are inclusive and effectively meet the needs of the communities we serve.', es: 'Giuseppe ofrece asesoramiento estratégico sobre la participación comunitaria y las alianzas. Se dedica a garantizar que nuestros proyectos sean inclusivos y satisfagan eficazmente las necesidades de las comunidades a las que servimos.' }, imageUrl: 'https://biophiliaweb.org/images/team/Giuseppe Berardi.jpg', imageAlt: 'Photo of GIUSEPPE BERARDI' },
    { id: 'team_simon', name: 'SIMON TENORIO', role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: "With a focus on sustainability and policy, Simon helps guide our advocacy efforts and ensures our projects align with broader environmental goals for a resilient future.", es: 'Con un enfoque en la sostenibilidad y las políticas, Simón ayuda a guiar nuestros esfuerzos de promoción y se asegura de que nuestros proyectos se alineen con objetivos ambientales más amplios para un futuro resiliente.' }, imageUrl: 'https://biophiliaweb.org/images/team/Simon Tenorio.jpg', imageAlt: 'Photo of SIMON TENORIO' },
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