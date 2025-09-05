

import { PageContent } from './types';

export const INITIAL_CONTENT: PageContent = {
  global: {
    logoUrl: "https://biophiliaweb.org/images/logos/biophilia_png-blanco.png",
    navigation: [
      { id: 'nav1', to: "/", label: { en: 'Home', es: 'Inicio' }, end: true },
      { id: 'nav2', to: "/about", label: { en: 'About Us', es: 'Nosotros' } },
      { id: 'nav3', to: "/projects", label: { en: 'Our Programs', es: 'Nuestros Programas' } },
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
    supportMission: { en: 'Learn More', es: 'Saber Más' },
    viewAllProjects: { en: 'View All Programs', es: 'Ver Todos los Programas' },
    learnMore: { en: 'Learn More', es: 'Saber Más' },
    readMore: { en: 'Read More', es: 'Leer Más' },
    contact: { en: 'Contact Us', es: 'Contáctanos' },
    viewActions: { en: 'See Actions', es: 'Ver Acciones' },
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
        imageUrl: "https://biophiliaweb.org/images/banners-home/1.1.jpg",
        projectId: "project_urban_forest",
        activityId: "activity_urban_forest_1"
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
        imageUrl: "https://biophiliaweb.org/images/banners-home/2.3.png",
        projectId: "project_urban_harvest",
        activityId: "activity_urban_harvest_1"
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
        imageUrl: "https://biophiliaweb.org/images/banners-home/3.1.jpg",
        projectId: "project_ocean_guardians",
        activityId: "activity_ocean_guardians_1"
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
        imageUrl: "https://biophiliaweb.org/images/actividades/1.Urban%20Forest%20&%20Biodiversity%20Project/1.3.1.jpg",
        projectId: "project_urban_forest",
        activityId: "activity_urban_forest_2"
      }
    ],
    welcome: {
      titlePart1: { en: "Welcome to", es: "Bienvenidos a" },
      titlePart2: { en: "Biophilia Institute", es: "Biophilia Institute" },
      slogan: {
        en: "Our affinity with nature is innate. Conserving it is vital.",
        es: "Nuestra afinidad con la naturaleza es innata. Conservarla es vital."
      },
      text: {
        en: "We are a 501(c)(3) non-profit organization, established for charitable, educational, and scientific purposes. We connect people with nature to build sustainable, resilient, and conscious communities. We work with passion for environmental education, ecosystem conservation, and sustainable development, especially in vulnerable communities in the U.S.\n\nWe invite you to learn about our programs and join our mission, to contribute together to a just and sustainable future for all generations.",
        es: "Somos una organización sin fines de lucro 501(c)(3), constituida con fines benéficos, educativos y científicos. Conectamos a las personas con la naturaleza, para construir comunidades sostenibles, resilientes y conscientes. Trabajamos con pasión por la educación ambiental, la conservación de ecosistemas y el desarrollo sostenible, especialmente en comunidades vulnerables de EE.UU.\n\nTe invitamos a conocer nuestros programas e incorporarte a nuestra misión, para juntos contribuir a un futuro justo y sostenible para todas las generaciones."
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
          slogan: {
            en: 'We only conserve what we love, and we only love what we understand.',
            es: 'Solo conservamos lo que amamos, y solo amamos lo que entendemos.'
          },
          text: {
            en: 'We facilitate transformative learning processes that connect scientific knowledge with direct experience in nature, sowing understanding and sensitivity as the foundation for its care.',
            es: 'Facilitamos procesos de aprendizaje transformadores que conectan el saber científico con la vivencia directa en la naturaleza, sembrando comprensión y sensibilidad como cimiento para su cuidado.'
          },
          icon: 'BookOpenIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/2.educacion.jpg'
        },
        {
          id: 'action_conservation',
          title: {
            en: 'Conservation',
            es: 'Conservación'
          }, 
          slogan: {
            en: 'Nature is resilient, but not infinite.',
            es: 'La naturaleza es resiliente, pero no infinita.'
          },
          text: {
            en: 'We develop conservation and ecological restoration initiatives, involving communities through collaborative actions that reinforce the bond between people and their environment.',
            es: 'Desarrollamos iniciativas de conservación y restauración ecológica, involucrando a comunidades mediante acciones colaborativas que refuerzan el vínculo entre las personas y su entorno.'
          },
          icon: 'LeafIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/3.conservacion.jpg'
        },
        {
          id: 'action_sustainability',
          title: {
            en: 'Sustainability',
            es: 'Sostenibilidad'
          }, 
          slogan: {
            en: 'Living with respect and acting with awareness are the basis of sustainability.',
            es: 'Vivir con respeto y actuar con conciencia son la base de la sostenibilidad.'
          },
          text: {
            en: 'We promote sustainable practices that integrate knowledge, culture, and local action, strengthening healthy environments and ways of life in balance with the natural environment.',
            es: 'Impulsamos prácticas sostenibles que integran conocimiento, cultura y acción local, fortaleciendo entornos sanos y formas de vida en equilibrio con el entorno natural.'
          },
          icon: 'SustainabilityIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/4.sostenibilidad.jpg'
        },
        {
          id: 'action_leadership',
          title: { en: 'Leadership', es: 'Liderazgo' },
          slogan: {
            en: 'Science guides, leadership transforms.',
            es: 'La ciencia guía, el liderazgo transforma.'
          },
          text: {
            en: 'We train committed environmental leaders, capable of articulating science, identity, and collective action to generate lasting changes in their communities and ecosystems.',
            es: 'Formamos líderes ambientales comprometidos, capaces de articular ciencia, identidad y acción colectiva para generar cambios duraderos en sus comunidades y ecosistemas.'
          },
          icon: 'MegaphoneIcon',
          imageUrl: 'https://biophiliaweb.org/images/bienvenidos-lineas-de-accion/5.liderazo.jpg'
        },
      ]
    },
    latestProjects: {
      title: { en: 'Our Programs', es: 'Nuestros Programas' },
      slogan: {
        en: "We transform ideas into action, to act locally and influence globally.",
        es: "Transformamos las ideas en acción, para actuar localmente e incidir globalmente."
      },
      subtitle: {
        en: "We base our programs on scientific evidence, providing educational and conservation tools to develop resilient and sustainable models that improve the quality of life in vulnerable communities in the U.S.",
        es: 'Fundamentamos nuestros programas en evidencia científica, proporcionando herramientas educativas y de conservación para desarrollar modelos resilientes y sostenibles que mejoren la calidad de vida en comunidades vulnerables de EE.UU.'
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
    ourNumbers: {
      title: { en: "Our Numbers", es: "Nuestros Números" },
      stats: [
        { id: 'stat1', icon: 'LeafIcon', value: '+1,000', label: { en: 'Trees Planted', es: 'Árboles Plantados' } },
        { id: 'stat2', icon: 'BookOpenIcon', value: '+50', label: { en: 'Workshops Held', es: 'Talleres Realizados' } },
        { id: 'stat3', icon: 'UsersIcon', value: '+500', label: { en: 'Community Volunteers', es: 'Voluntarios Comunitarios' } },
      ],
      galleryImages: [
        { id: 'gal1', url: 'https://biophiliaweb.org/images/actividades/3.Ocean%20guardians%20Project/3.2.1.jpg', alt: 'Children learning about sea turtles' },
        { id: 'gal2', url: 'https://biophiliaweb.org/images/actividades/2.Urban%20Harvest%20project/2.1.1.jpg', alt: 'Youth working in a community garden' },
        { id: 'gal3', url: 'https://biophiliaweb.org/images/actividades/4.Symbiosis%20Project/4.1.1.jpg', alt: 'Community members exploring a state park' },
        { id: 'gal4', url: 'https://biophiliaweb.org/images/actividades/1.Urban%20Forest%20&%20Biodiversity%20Project/1.2.1.jpg', alt: 'Practical workshop on trees' },
        { id: 'gal5', url: 'https://biophiliaweb.org/images/actividades/7.Observatorio%20Ambiental%20Hispano/7.2.1.jpg', alt: 'Community connection event' },
        { id: 'gal6', url: 'https://biophiliaweb.org/images/actividades/5.Urban%20Eco-Resilience%20Project/5.2.1.jpg', alt: 'Informative session about hurricane preparedness' },
      ]
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
        { id: 'aliance_10', name: 'Nuestra cultura Outdoors', logoUrl: 'https://biophiliaweb.org/images/aliados/10.jpg' }
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
      imageUrl: "https://biophiliaweb.org/images/nosotros/banner nosotros.jpg"
    },
    history: {
      title: { en: "Our History", es: "Nuestra Historia" },
      text: {
        en: "Biophilia Institute was born from the concern of a group of professionals in environment and sustainability, who, from our experience, identified the need to connect and educate citizens about the aquatic and terrestrial ecosystems they inhabit. Our purpose is to generate experiential experiences that promote understanding, appreciation, and participation in their conservation.\n\nSince June 2020, we have promoted initiatives with social and environmental organizations in Orlando and Central Florida. In 2023, we created the Hispanic Environmental Observatory (OAH), a coalition that provides information and actions in Spanish to strengthen the Hispanic community's participation in the environmental movement. In 2025, we formalized Biophilia Institute as a 501(c)(3) non-profit organization, for educational, scientific, and public benefit purposes, focused on promoting education, conservation, and sustainability projects aimed at well-being and equity, and a sustainable future in all communities, especially minority and vulnerable communities in the U.S.",
        es: "Biophilia Institute nace de la inquietud de un grupo de profesionales en ambiente y sostenibilidad, quienes, a partir de nuestra experiencia, identificamos la necesidad de conectar y educar a la ciudadanía sobre los ecosistemas acuáticos y terrestres que habitan. Nuestro propósito es generar experiencias vivenciales que fomenten el entendimiento, la valoración y la participación en su conservación.\n\nDesde junio de 2020 hemos impulsado iniciativas junto a organizaciones sociales y ambientales de Orlando y Florida Central. En 2023 creamos el Observatorio Ambiental Hispano (OAH), una coalición que brinda información y acciones en español para fortalecer la participación de la comunidad hispana en el movimiento ambiental. En 2025 formalizamos a Biophilia Institute como una organización sin fines de lucro 501(c)(3), con fines educativos, científicos y de beneficio público, centrada en promover proyectos de educación, conservación y sostenibilidad orientados al bienestar y la equidad, y un futuro sostenible en todas las comunidades, especialmente comunidades minoritarias y vulnerables en EE.UU."
      },
      imageUrl: "https://biophiliaweb.org/images/nosotros/Nuestra Historia.jpg"
    },
    mission: {
      title: { en: "Mission", es: "Misión" },
      text: {
        en: "To promote the conservation of ecosystems and sustainable development through a continuous connection with nature, using scientific and educational tools that strengthen local leadership and contribute to the construction of sustainable and resilient communities.",
        es: "Promover la conservación de los ecosistemas y el desarrollo sostenible a través de una conexión continua con la naturaleza, utilizando herramientas científicas y educativas que fortalezcan el liderazgo local y contribuyan a la construcción de comunidades sostenibles y resilientes."
      },
      imageUrl: "https://biophiliaweb.org/images/nosotros/mision.jpg",
      imageAlt: "A person's hands drawing a business plan on a whiteboard"
    },
    vision: {
      title: { en: "Vision", es: "Visión" },
      text: {
        en: "To be a benchmark in the conservation of local ecosystems, by consolidating resilient and sustainable communities, through education, applied science, and local leadership.",
        es: "Ser un referente en la conservación de ecosistemas locales, mediante la consolidación de comunidades resilientes y sostenibles, a través de la educación, la ciencia aplicada y el liderazgo local."
      },
      imageUrl: "https://biophiliaweb.org/images/nosotros/Vision.jpg",
      imageAlt: "A team collaborating around a table with laptops"
    },
    work: {
      title: { en: "Our Work", es: "Nuestro Trabajo" },
      text: {
        en: "At Biophilia Institute, we promote comprehensive environmental solutions that combine science, education, and community action, with a special focus on historically underrepresented communities. Our projects promote ecosystem conservation, ecological restoration, urban agriculture, community resilience, and youth leadership, applying methodologies based on scientific evidence and experiential learning.\n\nWe facilitate access to environmental information in Spanish to strengthen Hispanic participation in decision-making, and we articulate alliances with public, academic, and community institutions to expand the impact of our actions. Inspired by the principle of biophilia, we recognize the innate connection between people and nature as an essential foundation for building more conscious, resilient, and sustainable societies.",
        es: "En Biophilia Institute impulsamos soluciones ambientales integrales que combinan ciencia, educación y acción comunitaria, con un enfoque especial en comunidades históricamente subrepresentadas. Nuestros proyectos promueven la conservación de ecosistemas, la restauración ecológica, la agricultura urbana, la resiliencia comunitaria y el liderazgo juvenil, aplicando metodologías basadas en evidencia científica y aprendizaje vivencial.\n\nFacilitamos el acceso a información ambiental en español para fortalecer la participación hispana en la toma de decisiones, y articulamos alianzas con instituciones públicas, académicas y comunitarias para ampliar el impacto de nuestras acciones. Inspirados en el principio de biophilia, reconocemos la conexión innata entre las personas y la naturaleza como fundamento esencial para construir sociedades más conscientes, resilientes y sostenibles."
      },
      imageUrl: 'https://biophiliaweb.org/images/nosotros/nuestro trabajo.jpg',
      imageAlt: 'People working together in a workshop'
    },
  },
  projectsPage: {
    banner: {
      title: { en: 'Our Programs', es: 'Nuestros Programas' },
      imageUrl: "https://biophiliaweb.org/images/banner-proyectos/Banner proyectos.jpg"
    },
    intro: {
      en: "We base our programs on scientific evidence, providing educational and conservation tools to develop resilient and sustainable models that improve the quality of life in vulnerable communities in the U.S.",
      es: "Fundamentamos nuestros programas en evidencia científica, proporcionando herramientas educativas y de conservación para desarrollar modelos resilientes y sostenibles que mejoren la calidad de vida en comunidades vulnerables de EE.UU."
    }
  },
  projectDetailPage: {
    backToProjects: { en: 'Back to All Programs', es: 'Volver a Todos los Programas' }
  },
  teamPage: {
    banner: {
      title: { en: 'Meet Our Team', es: 'Conoce a Nuestro Equipo' },
      imageUrl: "https://biophiliaweb.org/images/nosotros/nuestro equipo.jpg"
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
    intro: {
        en: "Your donation empowers us to continue our vital work. Every contribution, big or small, helps us foster a deeper connection between communities and nature, creating a sustainable future for all. All donations are tax-deductible. Thank you for your support!",
        es: "Tu donación nos permite continuar con nuestro vital trabajo. Cada contribución, grande o pequeña, nos ayuda a fomentar una conexión más profunda entre las comunidades y la naturaleza, creando un futuro sostenible para todos. Todas las donaciones son deducibles de impuestos. ¡Gracias por tu apoyo!"
    },
    form: {
        chooseAmount: { en: "Choose an amount", es: "Elige una cantidad" },
        customAmount: { en: "Or enter a custom amount", es: "O ingresa una cantidad personalizada" },
        firstName: { en: "First Name", es: "Nombre" },
        lastName: { en: "Last Name", es: "Apellido" },
        emailAddress: { en: "Email Address", es: "Correo Electrónico" },
        paymentPlaceholder: { en: "Secure payment processing will be handled here.", es: "El procesamiento de pago seguro se manejará aquí." },
        donateAmount: { en: "Donate ${{amount}}", es: "Donar ${{amount}}" },
    },
    thankYou: {
        title: { en: "Thank You for Your Generosity!", es: "¡Gracias por tu Generosidad!" },
        text: { en: "We have received your generous donation of ${{amount}}. A confirmation has been sent to your email. Your support is crucial for our mission to build a sustainable and resilient future. Thank you for being a part of the change!", es: "Hemos recibido tu generosa donación de ${{amount}}. Se ha enviado una confirmación a tu correo electrónico. Tu apoyo es crucial para nuestra misión de construir un futuro sostenible y resiliente. ¡Gracias por ser parte del cambio!" },
    }
  },
  projects: [
    {
      id: 'project_urban_forest',
      title: { en: 'Urban Forest & Biodiversity', es: 'Bosque Urbano y Biodiversidad' },
      description: { en: 'This project focuses on increasing the urban canopy and biodiversity through community tree planting and ecological corridor consolidation.', es: 'Este proyecto se enfoca en aumentar la copa arbórea urbana y la biodiversidad a través de la siembra comunitaria de árboles y la consolidación de corredores ecológicos.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/1.Urban Forest & Biodiversity Project.jpg',
      imageAlt: 'People planting a tree in a community.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/1. BANNER Urban Forest & Biodiversity Project.jpg',
      activities: [
        {
          id: 'activity_urban_forest_1',
          date: '2024-08-18',
          title: { en: 'First Tree of the Community Faith Forest Project', es: 'Primer árbol del proyecto Bosque Comunitario de la Fe' },
          description: { en: 'On August 18, in the Azalea Park community in Orlando, Florida, we initiated the project: "Community Faith Forest, an ecological corridor in Central Florida." Neighbors and leading organizations gathered at a resident\'s home to plant the first tree, marking the beginning of our efforts to strengthen the tree canopy and urban forest of this community. The event was attended by Commissioner Tony Ortiz of Orlando\'s District 2, who, along with organizations and neighbors, reaffirmed our commitment to the conservation of the area\'s trees and forests, highlighting their importance for the well-being and quality of life of the entire community. The project is executed by Christ the King Episcopal Church in Orlando, FL, in partnership with Renacer Foundation, the Hispanic Environmental Observatory, Calao Corp, and Corpus Care, with funding from the #NuestrosBosques program of the Hispanic Access Foundation.', es: 'El 18 de agosto, en la comunidad de Azalea Park, en Orlando, Florida, iniciamos el proyecto: “Bosque Comunitario de Fe, un corredor ecológico en la Florida Central”, donde vecinos y las organizaciones que lideran el proyecto, nos reunimos en casa de una residente de la comunidad para plantar el primer árbol, lo que marca el inicio de nuestros esfuerzos para fortalecer el arbolado y el bosque urbano de esta comunidad. La actividad, contó con la participación del Comisionado Tony Ortiz, del Distrito 2 de la Ciudad de Orlando, quien junto a las organizaciones y vecinos reafirmamos nuestro compromiso con la conservación de los árboles y bosques de la zona, destacando su importancia para el bienestar y la mejora de la calidad de vida de toda la comunidad. El proyecto, "Bosque Comunitario de Fe, un corredor ecológico en la Florida Central", está ejecutado por Christ the King Episcopal Church in Orlando, FL, en alianza con Renacer Foundation, el Observatorio Ambiental Hispano, Calao Corp y Corpus Care, mediante el financiamiento del programa #NuestrosBosques de la Hispanic Access Foundation.' },
          imageUrl: 'https://biophiliaweb.org/images/banners-home/1.1.jpg'
        },
        {
          id: 'activity_urban_forest_2',
          date: '2024-08-01',
          title: { en: 'From Branch to Forest: Science and Community in Azalea Park', es: 'De la rama al bosque: ciencia y comunidad en Azalea Park, Orlando. FL.' },
          description: { en: 'On August 1, we held a practical workshop: "Tree Propagation Techniques in Urban Ecosystems," for 30 youth in Azalea Park, Orlando. Participants learned about tree propagation through air layering, practiced making incisions on selected branches, applying rooting hormone, and using recycled plastic to keep the substrate moist at the incision point. The treated areas were wrapped in black plastic to simulate optimal rooting conditions. They also observed root formation on branches (from the first workshop in June with youth from the same area), cut the branches, and transplanted them into pots. The experience was a blend of science and community action for urban forest conservation. These activities are part of the "Community Faith Forest, an urban ecological corridor in Central Florida" project, executed by Christ the King Episcopal Church in Orlando, FL, in partnership with Renacer Foundation, the Hispanic Environmental Observatory, Calao Corp, and Corpus Care, with funding from the #NuestrosBosques program of the Hispanic Access Foundation.', es: 'El pasado 1 de agosto, realizamos el taller práctico: "Técnicas de propagación de árboles en ecosistemas urbanos", dirigido a 30 jóvenes del Parque Azalea de Orlando. Durante la jornada, los participantes aprendieron sobre la propagación de árboles mediante la técnica de acodo aéreo, practicaron la realización de incisiones en ramas seleccionadas, la aplicación de hormona de enraizamiento y el uso de plástico reciclado para mantener el sustrato húmedo en el punto de incisión. Las áreas tratadas se envolvieron en plástico negro para simular condiciones óptimas de enraizamiento. También observaram a formação de raízes nas ramas (resultado do primeiro taller em junho, com jovens da mesma zona). Cortaram a rama e a trasplantaram a macetas. A experiência foi uma combinação de ciência e ação comunitária para a conservação dos bosques urbanos. Estas atividades se desenvolvem dentro do projeto "Bosque Comunitario de la Fe, un corredor ecológico urbano en Florida Central”. executado por Christ the King Episcopal Church in Orlando, FL, en alianza con Renacer Foundation, el Observatorio Ambiental Hispano, Calao Corp y Corpus Care, mediante el financiamiento del programa #NuestrosBosques de la Hispanic Access Foundation.' },
          imageUrl: 'https://biophiliaweb.org/images/banners-home/4.1.jpg'
        },
                {
          id: 'activity_urban_forest_3',
          date: '2025-06-12',
          title: { en: 'Workshop: "Heat Islands and Urban Forests"', es: 'Taller: "Islas de calor y bosque urbano".' },
          description: { en: 'On July 16, 2025, we held the workshop: "Heat Islands and the Urban Forest." It was aimed at 35 young people in Orlando, Florida, who were participants in the summer youth program developed by the Renacer Foundation and CareerSource Central Florida. During the activity, the young people from the sustainability team raised awareness among their peers about the consequences of high temperatures in urban environments and the role of trees as temperature regulators. To this end, they took temperature readings at different points in the Azalea Park community to analyze and learn about the causes, consequences, and effects of heat islands on citizens and ecosystems. They also learned about the importance of the tree canopy and the urban forest as key factors in mitigating heat islands. This activity was developed within the framework of the project "Community Faith Forest, an urban ecological corridor in Central Florida," implemented by Christ the King Episcopal Church in Orlando, FL, with support from the Renacer Foundation, the Hispanic Environmental Observatory, Callao Corp., and Corpus Care, through the "Nuestros Bosques" program, implemented nationally by the Hispanic Access Foundation.', es: 'El 16 de julio 2025, realizamos el taller: "Islas de calor y bosque urbano". Dirigido a 35 jóvenes en la ciudad de Orlando, Florida, participantes del programa juvenil de verano, desarrollado por Renacer Foundation y CareerSource Central Florida Durante la actividad, los jóvenes del equipo de sostenibilidad, sensibilizaron a sus compañeros sobre las consecuencias de las altas temperaturas en entornos urbanos y el rol de los árboles como reguladores de temperatura, para ello, realizaron tomas de lecturas de temperatura en diferentes puntos de la comunidad de Azalea Park, para analizar y aprender sobre las causas, consecuencias y efectos de las islas de calor en los ciudadanos y los ecosistemas. Y a su vez, conocer la importancia del dosel de los árboles, y el bosque urbano, como factores elementales en la mitigación de las islas de calor. Esta actividad se desarrolló dentro del proyecto: "Bosque Comunitario de la Fe, un corredor ecológico urbano en Florida Central", que ejecuta Christ the King Episcopal Church in Orlando, FL con el apoyo de Renacer Foundation, el Observatorio Ambiental Hispano , Callao corp. y Corpus Care. A través del programa "Nuestros Bosques", ejecutado a nivel nacional por la Hispanic Access Foundation .' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/1.Urban Forest & Biodiversity Project/1.1.2.jpg'
        },
        {
          id: 'activity_urban_forest_4',
          date: '2025-06-12',
          title: { en: 'Practical Workshop: "Importance of Trees in Urban Ecosystems"', es: 'Taller práctico: “Importancia de los árboles en los ecosistemas urbanos”.' },
          description: { en: 'On June 12, 2025, we held the practical workshop: "Importance of Trees in Urban Ecosystems," for 32 youth from the 2025 Summer Youth Program in Orlando, led by Christ the King Episcopal Church in Orlando. During the session, participants learned about the ecological function of trees in urban environments and tree propagation through the air layering technique, a vegetative propagation method that allows reproducing species without seeds by making an incision in a branch, applying rooting agent and moist substrate, thus promoting root development from the branches themselves. This experience integrated scientific knowledge and community action for urban forest conservation.', es: 'El 12 de Junio de 2025, realizamos el taller práctico: “Importancia de los árboles en los ecosistemas urbanos”, dirigido a 32 jóvenes del Summer Youth Program 2025 en la ciudad de Orlando, liderado por Christ the King Episcopal Church in Orlando . Durante la jornada, los participantes aprendieron sobre la función ecológica de los árboles en entornos urbanos, y aprendieron sobre la propagación de árboles mediante la técnica del acodo aéreo, un método de propagación vegetativa que permite reproducir especies sin semilla, mediante una incisión en la rama, aplicación de enraizante y sustrato húmedo, favoreciendo así, el desarrollo de las raíces desde las propias ramas. Esta experiencia, integró conocimiento científico y la acción comunitaria para la conservación del bosque urbano.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/1.Urban Forest & Biodiversity Project/1.2.1.jpg'
        },
        {
          id: 'activity_urban_forest_5',
          date: '2025-06-28',
          title: { en: 'Invasive Plant Removal Day at Apopka Birding Park Forest', es: 'Jornada de remoción de plantas invasoras en el bosque del Apopka Birding Park.' },
          description: { en: 'On June 28, 2025, at least 30 Hispanics joined to support the Orange Audubon Society in a day of invasive plant removal in the forest of the wildlife route at Lake Apopka, an area part of the "Apopka Birding Park" nature center and habitat restoration project. During the activity, volunteers from Christ the King Episcopal Church in Orlando, FL, Nuestra Cultura Outdoors, Renacer Foundation, the Hispanic Environmental Observatory, and Vente Venezuela removed plants harmful to this ecosystem, collected debris, built birdhouses, and reflected on the importance of forests as support for these ecosystems and their influence on improving our quality of life.', es: 'El 28 de junio de 2025, al menos 30 hispanos nos unimos para apoyar a Orange Audubon Society, en una jornada de remoción de plantas invasoras en el bosque de la ruta de vida silvestre en el Lago de Apopka, area que forma parte del proyecto del centro natural y restauración de hábitats: "Apopka Birding Park". Durante la actividad, voluntarios de las organizaciones Christ the King Episcopal Church in Orlando, FL Nuestra Cultura Outdoors, Renacer Foundation, el Observatorio Ambiental Hispano y Vente Venezuela, desarrollamos remoción de plantas nocivas para este ecosistema, recogimos escombros, realizamos casas para aves, y además, reflexionamos sobre la importancia de los bosques como soporte para estos ecosystems e influencia en el aumento de nuestra calidad de vida.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/1.Urban Forest & Biodiversity Project/1.3.1.jpg'
        },
        {
          id: 'activity_urban_forest_6',
          date: '2025-04-26',
          title: { en: 'Workshop: "My Friend the Tree", as part of the Paths to Science program', es: 'Taller: “Mi amigo el árbol”, en el marco del programa Senderos a la ciencia.' },
          description: { en: 'On April 26, 2025, we held the workshop: "My Friend the Tree," as part of the "Paths to Science" program, developed by Hispanic Access Foundation and Renacer Foundation. The activity was part of the "Tree Festival," a beautiful Eco-Citizen gathering that united organizations and neighbors to celebrate #arborday. Participants learned about the role and importance of trees and the urban forest, drew their favorite tree, created seedlings, took home plants they transplanted themselves, planted fruit trees, took temperature readings to demonstrate the role of trees in their community, and learned how to get involved in environmental science careers and the organizations that offer support in these fields. Participating organizations also gave away plants and held raffles with gifts related to tree conservation.', es: 'El 26 de abril de 2025, desarrollamos el taller: “Mi amigo el árbol”, en el marco del programa "Senderos a la ciencia", el cual es desarrollado por Hispanic Access Foundation y Renacer Foundation. La actividad se enmarcó en el "Festival del árbol", un hermoso encuentro Eco-Ciudadano que unió a organizaciones y vecinos para celebrar el #arborday. Los participantes aprendieron sobre el rol e importancia de los árboles y el bosque urbano, dibujaron su árbol favorito, desarrollaron semilleros, llevaron plantas a sus hogares que ellos mismos trasplantaron, sembramos árboles frutales, hicieron lectura de temperaturas para evidenciar el rol de los árboles en su comunidad, conocieron como vincularse a carreras de ciencias ambientales, y a las organizaciones que ofrecen apoyo en estas carreras. A su vez, organizaciones participantes entregaron plantas y realizaron rifas con regalos vinculados a la conservación de los árboles.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/1.Urban Forest & Biodiversity Project/1.4.1.jpg'
        },
        {
          id: 'activity_urban_forest_7',
          date: '2025-04-10',
          title: { en: 'Workshop: "Heat Islands and Urban Forests in Orlando"', es: 'Taller: “Islas de calor y bosques urbano en Orlando”' },
          description: { en: 'On April 10, 2025, in Orlando, Florida, we conducted the workshop: "Heat Islands and Urban Forests." It was aimed at 25 youth from the Little Steps Academy, as part of the "Innovation programming for youth" project, developed by Christ the King Episcopal Church in Orlando, FL, and Orange County. During the workshop, participants took temperature readings in different reference areas of the community to analyze and discuss the causes, consequences, and effects of heat islands on citizens and ecosystems. They also learned about the importance of the urban forest and the role of trees as a key factor in mitigating heat islands. The activity is part of our #EarthMonth celebration and was developed in partnership with Renacer Foundation, Christ the King Episcopal Church, Little Steps Academy, and the Hispanic Environmental Observatory. We thank Director Rut Ayala for her support, as well as the teachers and young participants.', es: 'El 10 de abril de 2025, en la ciudad de Orlando, Florida, realizamos el taller: “Islas de calor y bosques urbano”. Dirigido a 25 jóvenes del Little Steps Academy, en el marco del proyecto "Innovation programming for youth", que desarrolla la Christ the King Episcopal Church in Orlando, FL y Orange County. Durante el taller, los participantes realizaron toma de lectura de temperatura en diferentes zonas referenciales de la comunidad, para analizar y dialogar sobre causas, consecuencias y efectos de las islas de calor en los ciudadanos y ecosistemas. Y a su vez, conocer la importancia del bosque urbano y el rol de los árboles como factor elemental en la mitigación de las islas de calor. La actividad, forma parte de nuestra celebración del #EarthMonth y fue desarrollada en alianza entre Renacer Foundation, Christ the King Episcopal Church, la Little Steps Academy, y el Observatorio Ambiental Hispano. Agradecemos a la Directora Rut Ayala por el apoyo, a los profesores y a jóvenes participantes.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/1.Urban Forest & Biodiversity Project/1.5.1.jpg'
        }
      ]
    },
    {
      id: 'project_urban_harvest',
      title: { en: 'Sustainable Urban Agriculture', es: 'Agricultura Urbana Sostenible' },
      description: { en: 'Promoting food security and sustainable urban agriculture through community gardens, workshops, and hands-on learning experiences.', es: 'Promoviendo la seguridad alimentaria y la agricultura urbana sostenible a través de huertos comunitarios, talleres y experiencias de aprendizaje práctico.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/2.Urban Harvest project.jpg',
      imageAlt: 'People harvesting vegetables from a community garden.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/2. BANNER Urban Harvest project.jpg',
      activities: [
        {
          id: 'activity_urban_harvest_1',
          date: '2024-08-26',
          title: { en: 'Papayas, Seedlings, and Mental Health in the Engelwood Garden', es: 'Papayas, semilleros y salud mental en el huerto de Engelwood, en Orlando.' },
          description: { en: 'On August 26, we held the "Garden and Coffee" learning day at the Engelwood Neighborhood Center community garden in Orlando. The activity involved seniors from the center and Magnolias residence, who learned about food production using agricultural and hydroponic techniques, harvested papayas, and helped prepare lettuce seedlings. They also shared breakfast and received a mental health talk from the Renacer Foundation team. This activity is part of the "Community Faith Forest, an ecological corridor in Central Florida" project, executed by Christ the King Episcopal Church in Orlando, FL, in partnership with Renacer Foundation, the Hispanic Environmental Observatory, Calao Corp, and Corpus Care, with funding from the #NuestrosBosques program of the Hispanic Access Foundation.', es: 'El 26 de agosto, desarrollamos la jornada de aprendizaje “Huerto y café”, en el huerto comunitario del Engelwood Neighborhood Center en Orlando, la actividad contó con la participación de adultos mayores del mencionado centro y de la residencia Magnolias, quienes aprendieron sobre la producción de alimentos mediante técnicas agrícolas e hidropónicas, cosecharon papayas, y ayudaron a desarrollar semilleros de lechugas. Además, compartieron un desayuno y recibieron una charla de salud mental del equipo de Renacer Foundation. La actividad, forma parte de las acciones previstas en el proyecto, "Bosque Comunitario de Fe, un corredor ecológico en la Florida Central", ejecutado por Christ the King Episcopal Church in Orlando, FL, en alianza con Renacer Foundation, el Observatorio Ambiental Hispano, Calao Corp y Corpus Care, mediante el financiamiento del programa #NuestrosBosques de la Hispanic Access Foundation.' },
          imageUrl: 'https://biophiliaweb.org/images/banners-home/2.3.png'
        },
        {
          id: 'activity_urban_harvest_2',
          date: '2024-07-17',
          title: { en: 'Practical Workshop: "Community Garden: Agriculture in Our Backyard"', es: 'Taller practico: "Huerto comunitario: la agricultura en nuestro patio".' },
          description: { en: 'On July 17, 2024, we held the practical workshop: "Community Garden: Agriculture in Our Backyard," for 22 youth in Orlando, Florida, participating in the summer youth program developed at the Episcopal Churches of Christ the King in Orlando, FL, and CareerSource Central Florida. During the activity, the youth learned concepts about urban agriculture while performing maintenance, harvesting, transplanting crops, and preparing seedlings. They also learned about the various benefits of growing our own food at home.', es: 'El 17 de julio DE 2024, desarrollamos el taller practico: "Huerto comunitario: la agricultura en nuestro patio". Dirigido a 22 jóvenes de Orlando, Florida, participantes del programa juvenil de verano desarrollado por en la Episcopal Churches of Christ the King Episcopal Church in Orlando, FL , y CareerSource Central Florida. Durante la actividad, los jóvenes aprendieron conceptos sobre agricultura urbana, mientras realizaban actividades de mantenimiento, cosecha, transplante de cultivos y semilleros. Y a su vez, conocieron los diferentes beneficios que tiene la producción de nuestros propios alimentos en casa.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/2.Urban Harvest project/2.1.1.jpg'
        },
        {
          id: 'activity_urban_harvest_3',
          date: '2025-05-23',
          title: { en: 'Volunteer Day at the Engelwood Neighborhood Center Community Garden', es: '“Jornada de voluntariado en el huerto comunitario del Engelwood Neighborhood Center ".' },
          description: { en: 'On May 23, 2025, we held a maintenance and harvesting day at the Engelwood Neighborhood Center community garden in Orlando, with the support of volunteers from Renacer Foundation and local community leaders. During the activity, volunteers learned about urban agriculture, community gardens, and food production while performing tasks such as cleaning garden beds, pruning tomato plants, staking crops, harvesting, and more. Join our volunteer days, where you will learn all about sustainable urban agriculture and hydroponics in the workshops we conduct at the community garden for free and on an ongoing basis.', es: 'El 23 de mayo de 2025, desarrollamos una jornada de mantenimiento y cosecha en el huerto comunitario del Engelwood Neighborhood Center in Orlando, con el apoyo del voluntariado de Renacer Foundation y líderes comunitarios de la zona. Durante la actividad, los voluntarios conocieron sobre agricultura urbana, huertos comunitarios y la producción de alimentos, mientras realizaron tareas de limpieza de canteros, poda plantas de tomate, aparcamiento de los cultivos, cosecha, entre otros. Únete a nuestras jornadas voluntarias, dónde aprenderás todo sobre agricultura urbana sostenible y hidroponía en los talleres que desarrollamos en el huerto comunitario de manera gratuita y permanente.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/2.Urban Harvest project/2.2.1.jpg'
        },
        {
            id: 'activity_urban_harvest_4',
            date: '2025-05-14',
            title: { en: 'Session: "Learning to Plant in the Community Garden"', es: 'Jornada: “Aprendiendo a sembrar en el huerto comunitario"' },
            description: { en: 'On May 14, 2025, we held the session "Learning to Plant in the Community Garden," an activity for 21 children from the Engelwood Neighborhood Center in Orlando. We connected and taught the children how to work with the soil, observe plant growth, how plants relate to each other, how to harvest, and how to collaborate as a community, fostering values of sustainability, healthy eating, ecology, and cooperativism. "Without connection, there is no transformation: By experiencing our connection with other living beings and natural environments within the urban context, we strengthen the understanding that we are nature and co-inhabit the same ecosystem."', es: 'El 14 de mayo de 2025, desarrollamos la jornada “Aprendiendo a sembrar en el huerto comunitario”, una actividad dirigida a 21 niños del Engelwood Neighborhood Center de la ciudad de Orlando, conectamos y enseñamos a los niños a trabajar con la tierra, observar el crecimiento de las plantas, como se vinculan entre si, como cosechar, y colaborar en comunidad. Estimulando valores de sostenibilidad, alimentación saludable, ecología y cooperativismo. "Sin conexión, no hay transformación: Al experimentar nuestra conexión con otros seres vivos y entornos naturales dentro del contexto urbano, afianzamos el entendimiento de que somos naturaleza y co-habitamos en un mismo ecosistema".' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/2.Urban Harvest project/2.3.1.jpg'
        },
        {
            id: 'activity_urban_harvest_5',
            date: '2025-04-30',
            title: { en: 'Informative Session: "The Garden, Cultivating Healthy Food"', es: 'Jornada informativa: “El huerto, cultivando alimentos sanos”.' },
            description: { en: 'On April 30, 2025, we began our partnership with the Engelwood Neighborhood Center of the City of Orlando with an informative session "The Garden, Cultivating Healthy Food," aimed at seniors who frequent this community center. On this occasion, participants learned about the concepts and importance of sustainable urban agriculture and growing our own food, while we weeded the garden beds and harvested some vegetables. The partnership includes a training program in sustainable urban agriculture in the community garden. The program will promote weekly practical workshops for citizens of all ages who participate in the center\'s various activities. Additionally, we will develop a monthly practical workshop and forum for leaders and residents of different Orlando communities. All workshops use the "learning-by-doing" method.', es: 'El 30 de abril de 2025, iniciamos la alianza con el Engelwood Neighborhood Center de la Ciudad de Orlando, con una jornada informativa “El huerto, cultivando alimentos sanos”, dirigido a adultos mayores que hacen vida este centro comunitario. En esta ocasión, los participantes aprendieron sobre conceptos e importancia de la agricultura urbana sostenible y la producción de nuestros propios alimentos, a la vez, que quitamos hierbas en los canteros, y cosechamos algunos vegetales. La alianza contempla, un programa de formación en agricultura urbana sostenible en el jardín comunitario. El programa, promoverá talleres prácticos semanalmente, dirigidos a ciudadanos de todas las edades que participan en las diferentes actividades de este centro. Y además, desarrollaremos un taller práctico y un foro mensual dirigido a líderes y vecinos de las diferentes comunidades de Orlando. Todos los talleres lo hacemos usando el método de "aprender-haciendo".' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/2.Urban Harvest project/2.4.1.jpg'
        },
        {
            id: 'activity_urban_harvest_6',
            date: '2025-02-26',
            title: { en: 'Practical Workshop on Planting Vegetables by Transplant. Orlando.', es: 'Taller práctico sobre siembra de hortalizas por trasplante. Orlando.' },
            description: { en: 'On February 26, 2025, at the community garden of the Engelwood Neighborhood Center in Orlando, we continued our urban agriculture training activities for youth beneficiaries of the "Innovation programming for youth," developed by Christ the King Episcopal Church in partnership with Orange County. On this occasion, we conducted the "Practical Workshop on Planting Vegetables by Transplant." Through the workshop, participants went through the entire process of preparing garden beds, substrate, checking the irrigation system, selecting and combining plants, and planting. This way, they could "learn-by-doing" while we discussed concepts and the importance of urban agriculture and producing food in our own backyards.', es: 'El 26 de febrero de 2025, en el jardín comunitario del Engelwood Neighborhood Center de la ciudad de Orlando, continuamos con las actividades de formación en agricultura urbana a jóvenes beneficiarios del "Innovation programming for youth", que desarrolla la Christ the King Episcopal Church en alianza con Orange County. En esta ocasión, desarrollamos el "Taller práctico sobre siembra de hortalizas por trasplante". Mediante el taller, los participantes desarrollaron todo el proceso de preparación de canteros, sustrato, revisión del sistema de riego, selección y combinación de plantas y la siembra. De esta manera, pudieron "aprender-haciendo", mientras dialogamos sobre conceptos e importancia de la agricultura urbana y la producción de nuestros patios alimentos.' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/2.Urban Harvest project/2.5.1.jpg'
        }
      ]
    },
    {
      id: 'project_ocean_guardians',
      title: { en: 'Ocean Guardians', es: 'Guardianes del Océano' },
      description: { en: 'Dedicated to marine conservation through educational workshops, raising awareness about sea turtles and empowering youth to protect our oceans.', es: 'Dedicado a la conservación marina a través de talleres educativos, creando conciencia sobre las tortugas marinas y empoderando a los jóvenes para proteger nuestros océanos.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/3. Ocean guardians Project.jpg',
      imageAlt: 'A sea turtle swimming in the ocean.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/3. BANNER Ocean guardians Project.jpg',
      activities: [
        {
          id: 'activity_ocean_guardians_1',
          date: '2024-08-05',
          title: { en: 'Marine Turtle Workshop Teaches Youth to Protect Our Oceans', es: 'Taller de tortugas marinas enseña a jóvenes a proteger nuestros océanos' },
          description: { en: 'On August 5, we held the "Friends of the Turtles" workshop for 32 youth from Orlando participating in the Summer Youth Program run by Christ the King Episcopal Church and CareerSource Central Florida. During the activity, the youth learned in a fun and practical way about the importance of sea turtles, their characteristics, types, habits, reproduction, and how we can contribute to their conservation. They also received an ocean conservation kit. The workshop was possible thanks to the partnership between Biophilia Institute, the Hispanic Environmental Observatory, and Inwater Research Group, to continue training ocean guardians in Central Florida.', es: 'El pasado 5 de agosto, desarrollamos el taller: "Amigos de las tortugas", dirigido a 32 jóvenes de la ciudad de Orlando, participantes del Summer Youth Program ejecutado por la Christ the King Episcopal Church, junto a CareerSource Central Florida. Durante la actividad, los jóvenes aprendieron, de manera divertida y práctica, sobre la importancia de las tortugas marinas, características, tipos, hábitos, reproducción y cómo podemos contribuir a su conservación. También recibieron un kit de conservación de océanos. El taller fue posible, gracias a la alianza entre Biophilia Institute, el Observatorio Ambiental Hispano y Inwater Research Group, para seguir formando guardianes del océano en Florida Central.' },
          imageUrl: 'https://biophiliaweb.org/images/banners-home/3.1.jpg'
        },
        {
          id: 'activity_ocean_guardians_2',
          date: '2025-07-05',
          title: { en: '"Friends of the Turtles" Workshop for the AMOR AL PRÓJIMO Association in Apopka, Florida', es: 'Taller: “Amigos de las tortugas”, dirigido a la Asociación AMOR AL PRÓJIMO, en Apopka, Florida.' },
          description: { en: 'On July 5, 2025, we held the "Friends of the Turtles" workshop for families of the AMOR AL PRÓJIMO Association, located in the rural area of Apopka, Florida. The event was attended by 28 Hispanics, including children, youth, and adults, who learned in a fun and practical way about the importance of sea turtles, their characteristics, types, habits, reproduction, and how we can contribute to their conservation. This activity was carried out in support of the "Por Nosotros" program, currently facilitated by the Crecemos Todos Foundation in coordination with the Hispanic Federation and Advent Health. The "Friends of the Turtles" workshop was developed thanks to our partnership with Inwater Research Group, which received support from the Sea Turtle License Plate Grant to continue forming ocean guardians in Central Florida.', es: 'El 5 de julio de 2025, desarrollamos el taller: “Amigos de las tortugas”, dirigido a familias de la Asociación AMOR AL PRÓJIMO, ubicada en la zona rural de Apopka, Florida. La jornada, contó con la participación de 28 hispanos entre niños, jóvenes y adultos, quienes aprendieron de manera divertida y práctica, sobre la importancia de las tortugas marinas, características, tipos, hábitos, reproducción y como podemos contribuir a su conservación. Esta actividad se realizó en apoyo al programa “Por Nosotros”, que actualmente facilita la Fundación Crecemos Todos en coordinación con Hispanic Federation y Advent Health. El taller: "Amigos de las tortugas", lo desarrollamos gracias a nuestra alianza con Inwater Research Group quien recibido apoyo de Sea Turtle License Plate Grant, para seguir formando guardianes del océano en Florida Central.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/3.Ocean guardians Project/3.1.1.jpg'
        },
        {
          id: 'activity_ocean_guardians_3',
          date: '2025-06-16',
          title: { en: '"Friends of the Turtles" Workshop with Youth from Orlando, Florida', es: 'Taller: "Amigos de las Tortugas con jóvenes de Orlando, Florida”.' },
          description: { en: 'On June 16, 2025, in celebration of #WorldSeaTurtleDay, we held the "Friends of the Turtles" workshop with 32 youth from the CareerSource Central Florida Summer Youth Program. They learned in a fun and practical way about the world of sea turtles: their habits, habitats, and how to protect them. They also took home a conservation kit to share with their families! Thanks to the support of Inwater Research Group @inwaterresearch and the Sea Turtle License Plate Grant, we continue to form ocean guardians in Central Florida.', es: 'El 16 de junio de 2025, en el marco del #Día Mundial De Las Tortugas Marinas, realizamos el taller "Amigos de las Tortugas" con 32 Jóvenes del Summer Youth Program de CareerSource Central Florida aprendieron, de forma divertida y práctica, sobre el mundo de las tortugas marinas: sus hábitos, hábitats y cómo protegerlas. Además, ¡se llevaron a casa un kit de conservación para compartir en familia! Gracias al apoyo de Inwater Research Group @inwaterresearch y el Sea Turtle License Plate Grant, seguimos formando guardianes del océano en Florida Central.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/3.Ocean guardians Project/3.2.1.jpg'
        },
        {
          id: 'activity_ocean_guardians_4',
          date: '2025-04-16',
          title: { en: '"Friends of the Turtles" Workshop at the Engelwood Neighborhood Center, Orlando', es: 'Taller: “Amigos de las tortugas. en el Engelwood Neighborhood Center. Orlando”' },
          description: { en: 'On April 16, 2025, at the Engelwood Neighborhood Center in Orlando, at least 15 children participated in our fourth "Friends of the Turtles" workshop. During the workshop, participants learned in a practical way about the importance, characteristics, types, habits, reproduction, and how to contribute to the conservation of sea turtles. The activity was an opportunity for Ivette Fernández, coordinator of this educational project led by Inwater Research Group in Florida, to formalize our partnership by delivering the educational kit (suitcase) with all the materials to develop this workshop in Central Florida. If you want to bring this workshop to your educational institution or community, contact us, it\'s free.', es: 'El 16 de abril de 2025, en el Engelwood Neighborhood Center de la ciudad de Orlando, al menos 15 niños participaron en nuestro cuarto taller “Amigos de las tortugas”. Durante el taller, los participantes aprendieron de manera práctica sobre la importancia, características, tipos, hábitos, reproducción y como contribuir en la conservación de las tortugas marinas. La actividad fue propicia para que Ivette Fernández, coordinadora de este proyecto educativo dirigido por Inwater Research Group en Florida, formalizara nuestra alianza, haciendo entrega del kit (maleta) educativo con todos los materiales para desarrollar este taller en la Florida Central. Si deseas llevar este taller a tu institución educativa o comunidad contáctanos, es gratuito.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/3.Ocean guardians Project/3.3.1.jpg'
        }
      ]
    },
    {
      id: 'project_symbiosis',
      title: { en: 'Symbiosis', es: 'Simbiosis' },
      description: { en: 'Fostering a mutualistic relationship between communities and their local ecosystems through environmental action, exploration, and education.', es: 'Fomentando una relación mutualista entre las comunidades y sus ecosistemas locales a través de la acción ambiental, la exploración y la educación.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/4. Symbiosis Project.jpg',
      imageAlt: 'A group of people hiking through a lush forest.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/4. BANNER Symbiosos.jpg',
      activities: [
        {
          id: 'activity_symbiosis_1',
          date: '2025-06-07',
          title: { en: 'Session: "Exploring Wekiwa Springs State Park, Apopka. Florida"', es: 'Jornada: "Explorando el Wekiwa Springs State Park, Apopka. Florida".' },
          description: { en: 'On June 7, 2025, in celebration of World Environment Day and Hiking Day, we held the "Exploring Wekiwa Springs State Park" session, where at least 30 Hispanic participants of different ages ventured into the forest and were able to connect, learn, and help in the conservation of this ecosystem by collecting solid waste. It was an extraordinary community environmental action activity, organized by Nuestra Cultura Outdoors, Renacer Foundation, Casa Venezuela Orlando, and the Hispanic Environmental Observatory. An experience full of health, ecology, and entertainment, which allowed participants to enjoy the river and the natural resources offered by Wekiwa Springs State Park.', es: 'El 7 de junio de 2025, a propósito de las celebraciones del Día Mundial del Ambiente y Día del Senderismo, desarrollamos la jornada "Explorando el Wekiwa Springs State Park", donde al menos 30 participantes hispanos de diferentes edades, nos adentramos en el bosque y pudimos conectarnos, aprender y ayudar en la conservación de este ecosistema mediante la recolección de residuos sólidos. Fue una extraordinaria actividad de acción ambiental comunitaria, organizada por Nuestra Cultura Outdoors, Renacer Foundation, Casa Venezuela Orlando y el Observatorio Ambiental Hispano. Una experiencia llena de salud, ecología y entretenimiento, que permitió a los participantes disfrutar del río y los recursos naturales que ofrece el Parque Estadal Wekiwa Springs.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/4.Symbiosis Project/4.1.1.jpg'
        },
        {
          id: 'activity_symbiosis_2',
          date: '2025-04-16',
          title: { en: 'Youth Environmental Day at the University of Central Florida', es: 'Jornada ambiental juvenil en la Universidad Central de Florida' },
          description: { en: 'On April 16, 2025, as part of the #EarthMonth celebrations, we were invited by the Hispanic Federation to accompany them on a youth environmental day at the University of Central Florida, with the goal of raising awareness about the importance of voting and how it can lead to having representatives who promote environmental public policies that guarantee sustainability on the planet!', es: 'El 16 de abril de 2025, en el marco de las celebraciones del #EarthMonth , fuimos invitados por Hispanic Federation para acompañarlos en una jornada ambiental juvenil en la Universidad Central de Florida, con el objetivo de sensibilizar sobre la importancia del voto, y como el mismo, puede incidir en tener representantes que promuevan políticas públicas ambientales que nos garantice la sustentabilidad en el planeta!' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/4.Symbiosis Project/4.2.3.jpg'
        },
        {
          id: 'activity_symbiosis_3',
          date: '2025-03-08',
          title: { en: 'Walk: "Bird Watching at Orlando Wetlands"', es: 'Paseo: "Buscando pájaros en el Orlando Wetlands”.' },
          description: { en: 'On March 8, 2025, 20 Hispanics, including children, youth, and adults, attended the "Bird Watching at Orlando Wetlands" event. During the event, participants enjoyed a tour with excellent guidance in Spanish from Gilberto Sánchez, an active volunteer at #OrlandoWetlands and a specialist in bird watching, in addition to all the environmental information and history of this wetland. They were also able to observe and learn about the species, their ecological role, conservation needs, and the importance of the wetland. The activity also helped to consolidate alliances to bring environmental sciences to the Hispanic community, breaking language barriers and encouraging their participation in ecosystem conservation. This is the fourth consecutive year that Orange Audubon has promoted this activity aimed at the Spanish-speaking community and the third year that the Hispanic Environmental Observatory has joined in its development.', es: 'El 8 de marzo de 2025, 20 hispanos entre niños, jóvenes y adultos se hicieron presentes en el evento "Buscando pájaros en el Orlando Wetlands", durante el mismo, los participantes disfrutaron de un recorrido con excelente guiatura en español a través de Gilberto Sánchez, un voluntario activo del #OrlandoWetlands y especializado en observación de aves, además de toda la información ambiental e historia de este humedal. Igualmente, pudieron observar y aprender sobre las especies, su rol ecológico, las necesidades de conservación y la importancia que tiene dicho humedal. Además, la actividad permitió consolidar alianzas para llevar ciencias ambientales a la comunidad hispana, rompiendo barreras del idioma y estimulando la participación de los mismos en la conservación de los ecosistemas. Este es el cuarto año consecutivo que Orange Audubon promueve esta actividad dirigida a la comunidad hispanohablante y tercer año que el Observatorio Ambiental Hispano se une para el desarrollo de la misma.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/4.Symbiosis Project/4.2.1.jpg'
        }
      ]
    },
    {
      id: 'project_eco_resilience',
      title: { en: 'Urban Eco-Resilience', es: 'Eco-Resiliencia Urbana' },
      description: { en: 'Building community resilience to environmental challenges like extreme heat and hurricanes through education, planning, and sustainable technologies.', es: 'Construyendo resiliencia comunitaria ante desafíos ambientales como el calor extremo y los huracanes, a través de la educación, la planificación y las tecnologías sostenibles.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/5. Urban Eco-Resilience Project.jpg',
      imageAlt: 'A diagram showing a plan for hurricane preparedness.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/5.BANNER Urban Eco-Resilience Project2.jpg',
      activities: [
        {
          id: 'activity_eco_resilience_1',
          date: '2025-07-31',
          title: { en: 'Spanish-language citizen campaign for extreme heat', es: 'Campaña ciudadana en español por calor extremo.' },
          description: { en: 'On July 31, 2025, we launched a social media campaign to alert citizens about the health impacts of extreme heat. In recent days in Central Florida, we have experienced oppressive heat, with high temperatures exceeding the averages of recent years. We share this information with you so that you can be prepared and take timely measures against heat-related symptoms and their impact on your health.', es: 'El 31 de julio 2025, realizamos una campaña en redes sociales para alertar a la ciudadanía sobre las incidencias en la salud del calor extremo. Los últimos días en la Florida Central, hemos experimentado calores agobiantes, con altas temperaturas que superan los promedios en los últimos años. Compartimos con ustedes, está información para que estén prevenidos y puedan tomar medidas oportunas ante sintonías que relacionadas al calor y su salud.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/5.Urban Eco-Resilience Project/5.1.1.jpg'
        },
        {
            id: 'activity_eco_resilience_2',
            date: '2025-06-10',
            title: { en: 'Informative Sessions: "From Calm: How to Assemble Your Hurricane Plan"', es: 'Jornadas informativas: "Desde la calma: Cómo armar tu plan de huracanes ".' },
            description: { en: 'Between June 10 and 14, 2025, to mark the start of hurricane season, we organized with the Hispanic Federation the informative sessions: "From Calm: How to Assemble Your Hurricane Plan," virtual coffee talks with specialists from NOAA, the City of Orlando, and the American Red Cross. The objective is to facilitate spaces for information and connection between the Hispanic community, authorities, and leading organizations on the subject. The meetings were moderated by Laudi Campo, Director of Hispanic Federation Florida, and Faruk Bagdah, CEO of Biophilia Institute. During the sessions, specialists such as Manuel Soto, Emergency Manager for the City of Orlando, spoke about the key steps to creating a family plan, common mistakes to avoid, and available resources in Florida, sharing clear and useful information for you and your family to be prepared this season. Additionally, Armando Falcón, Community Engagement and Partnerships Manager for the American Red Cross, discussed the role of the Red Cross and its strategies for addressing vulnerable Hispanic populations, available resources for the community, and clear recommendations for assembling your family emergency plan.', es: 'Entre el 10 y 14 de junio de 2025, con motivo del inicio de la temporada de huracanes, oranizamos junto a Hispanic Federation, las jornadas informativas: "Desde la calma: Cómo armar tu plan de huracanes ", cafecitos virtuales con especialistas de la NOAA, La Ciudad de Orlando y la Cruz Roja de los EEUU. El objetivo es facilitar espacios de información y conexión entre la comunidad hispana, autoridades y organizaciones líderes en el tema. Los encuentros fueron moderados por Laudi Campo, Directora de Hispanic Federation Florida, y Faruk Bagdah, CEO de Biophilia Institute. Durante las jornadas, participaron especialista en la materia como Manuel Soto, Gerente de Emergencias de la Ciudad de Orlando, quien habló sobre los pasos claves para crear un plan familiar, errores comunes que debes evitar y los recursos disponibles en Florida. Compartiendo información clara y útil para que tú y tu familia estén preparados esta temporada. Además, Armando Falcón, Gerente de Participación Comunitaria y Alianzas de la Cruz Roja de EEUU, quien conversó sobre el rol de la Cruz Roja y sus estrategias de abordaje a poblaciones hispanas vulnerables, recursos disponibles con los que cuentan para la comunidad y recomendaciones claras para armar tu plan familiar ante emergencias.' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/5.Urban Eco-Resilience Project/5.2.1.jpg'
        },
        {
            id: 'activity_eco_resilience_3',
            date: '2025-04-30',
            title: { en: 'Workshop: "Community Food Production through Hydroponics"', es: 'Taller: “Producción comunitaria de alimentos mediante la hidroponía”' },
            description: { en: 'On April 30, 2025, we held a workshop: "Community Food Production through Hydroponics," aimed at seniors served at the Engelwood Neighborhood Center, who learned about community food production using hydroponic techniques, concepts, and its importance for food sovereignty. They also reviewed and evaluated the system\'s operation, production panels, irrigation system, and the progress of the planted seedlings, among other aspects. We will conduct ongoing workshops for participants of all ages on hydroponic food production in the community garden\'s hydroponic system. The training is free, and we aim to contribute to food sovereignty in communities, creating new economic opportunities, as well as promoting education and research to produce healthy food using sustainable techniques.', es: 'El 30 de abril de 2025, realizamos un taller: “Producción comunitaria de alimentos mediante la hidroponía”, dirigido a adultos mayores atendidos en el Engelwood Neighborhood Center, quienes aprendieron sobre la producción comunitaria de alimentos mediante técnicas hidropónicas, conceptos e importancia para la soberanía alimentaria. También revisaron y evaluaron el funcionamiento del sistema, los paneles de producción, el sistema de riego y el progreso de las plántulas plantadas, entre otros aspectos. Realizaremos talleres continuos para participantes de todas las edades, sobre producción hidropónica de alimentos en el sistema hidropónico del huerto comunitario. La capacitación es gratuita, y buscamos contribuir a la soberanía alimentaria en las comunidades, generando nuevas oportunidades económicas, además de promover la educación y la investigación para producir alimentos saludables utilizando técnicas sostenibles.' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/5.Urban Eco-Resilience Project/5.3.1.jpg'
        },
        {
            id: 'activity_eco_resilience_4',
            date: '2025-03-26',
            title: { en: 'Maintenance Session for the Hydroponic System at Engelwood Neighborhood Center', es: 'Jornada de mantenimiento del sistema hidropónico del Engelwood Neighborhood Center. Orlando' },
            description: { en: 'With the goal of providing community training on food production using hydroponic techniques, on March 26 and 27, 2025, along with volunteers from Orlando, we conducted an evaluation and maintenance of the hydroponic system in the community garden of the Engelwood Neighborhood Center in Orlando. During the activities, the benefits of producing food with this technique were discussed, and at the same time, the production panels and the operation of the irrigation system were reviewed and evaluated, and we began propagating seedlings to be used in the system. Hydroponics refers to a system of growing in water, where plant roots grow in a nutrient solution instead of soil. It allows for food production in small spaces with efficient water use. This helps promote sustainable food security, generate economic opportunities, and foster education and research.', es: 'Con el objetivo de brindar capacitación comunitaria sobre la producción de alimentos mediante técnicas hidropónicas, el 26 y 27 de marzo de 2025, junto a voluntarios de Orlando, realizamos evaluación y mantenimiento del sistema hidropónico en el huerto comunitario del del Engelwood Neighborhood Center de Orlando. Durante las actividades, se discutieron los beneficios de producir alimentos mediante esta técnica, y al mismo tiempo, se revisaron y evaluaron los paneles de producción, el funcionamiento del sistema de riego, e iniciamos la propagación de plántulas que se utilizarán en el sistema. La hidroponía, se refiere a un sistema de cultivar en agua, donde las raíces de las plantas crecen en una solución nutritiva en lugar de en el suelo. Permite producir alimentos en espacios reducidos y con un uso eficiente del agua. Esto contribuye a promover la seguridad alimentaria sostenible, generar oportunidades económicas, fomentar la educación y la investigación.' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/5.Urban Eco-Resilience Project/5.4.1.jpg'
        },
        {
            id: 'activity_eco_resilience_5',
            date: '2025-03-20',
            title: { en: 'Organic Fertilization Day, Substrate Preparation, and Vegetable Sowing', es: 'Jornada de fertilización orgánica, preparamos sustratos y siembra de hortalizas' },
            description: { en: 'On March 20, 2025, in the community garden of the Engelwood Neighborhood Center in Orlando, we continued to provide experiential learning spaces (learning by doing) on sustainable urban agriculture with youth from Orlando, Florida. On this occasion, we worked with participants on organic crop fertilization, prepared substrates, and sowed vegetables in new garden beds. All this while discussing concepts, types, and the importance of organic fertilization, and the benefits of producing our own food.', es: 'El 20 de marzo de 2025, en el jardín comunitario del Engelwood Neighborhood Center de la ciudad de Orlando, continuamos propiciando espacios de aprendizaje vivencial (aprender haciendo) sobre agricultura urbana sostenible, con jóvenes de la ciudad de Orlando, Florida. En esta ocasión, trabajamos con los participantes en la fertilización orgánica de los cultivos, preparamos sustratos y sembramos hortalizas en nuevos canteros. Todo esto, mientras dialogamos sobre conceptos, tipos e importancia de la fertilización orgánica, y los beneficios de producir nuestros propios alimentos.' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/5.Urban Eco-Resilience Project/5.5.1.jpg'
        },
        {
            id: 'activity_eco_resilience_6',
            date: '2025-02-24',
            title: { en: 'Dialogue Meetings on Vulnerability to Adverse Weather Events', es: 'Encuentros de dialogo sobre la vulnerabilidad ante eventos meteorológicos adversos' },
            description: { en: 'As part of the actions planned in our project with the Hispanic Federation, between February 24 and 25, 2025, we held two pleasant citizen meetings to discuss the vulnerability of our seniors to adverse weather events. During the dialogue, we talked about the risk factors that seniors face in their respective homes and communities in Orlando, Florida. We used a data collection tool that will serve as input for the Hispanic Federation to analyze and promote future projects that minimize the risks for seniors in the face of adverse weather events! "A person is vulnerable when they have little or no ability to protect themselves against a risk."', es: 'En el marco de las acciones previstas en nuestro proyecto con Hispanic Federation, entre el 24 y 25 de febrero de 2025, desarrollamos dos agradables encuentros ciudadanos, para dialogar sobre la vulnerabilidad de nuestros adultos mayores ante eventos meteorológicos adversos. Durante el diálogo, conversamos sobre los factores de riesgo que tienen los adultos mayores en sus respectivos hogares y comunidades en Orlando, Florida. ¡Aplicamos un instrumento de recolección de datos que servirá como insumo a Hispanic Federation para analizar y promover proyectos futuros que minimicen los riesgos de adultos mayores ante eventos meteorológicos adversos! “Una persona es vulnerable cuando tiene poca o nula capacidad de protegerse frente a un riesgo”.' },
            imageUrl: 'https://biophiliaweb.org/images/actividades/5.Urban Eco-Resilience Project/5.5.6.jpg'
        }
      ]
    },
    {
      id: 'project_ecopro_youth',
      title: { en: 'EcoPro Youth', es: 'Jóvenes EcoPro' },
      description: { en: 'Empowering the next generation of environmental leaders through hands-on educational programs focused on sustainability and climate action.', es: 'Empoderando a la próxima generación de líderes ambientales a través de programas educativos prácticos centrados en la sostenibilidad y la acción climática.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/6. EcoPro Youth Project.jpg',
      imageAlt: 'A group of young people participating in an environmental workshop.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/6. BANNER .EcoPro Youth Project.jpg',
      activities: [
        {
          id: 'activity_ecopro_youth_1',
          date: '2025-07-16',
          title: { en: 'Workshop: "Heat Islands and Urban Forest"', es: 'Taller: "Islas de calor y bosque urbano".' },
          description: { en: 'On July 16, 2025, we held the workshop: "Heat Islands and Urban Forest." It was aimed at 35 youth in the city of Orlando, Florida, participants of the summer youth program, developed by Renacer Foundation and CareerSource Central Florida. During the activity, the youth from the sustainability team raised awareness among their peers about the consequences of high temperatures in urban environments and the role of trees as temperature regulators. To do this, they took temperature readings at different points in the Azalea Park community to analyze and learn about the causes, consequences, and effects of heat islands on citizens and ecosystems. At the same time, they learned about the importance of the tree canopy and the urban forest as elementary factors in mitigating heat islands. This activity was developed within the project: "Community Faith Forest, an urban ecological corridor in Central Florida," which is executed by Christ the King Episcopal Church in Orlando, FL, with the support of Renacer Foundation, the Hispanic Environmental Observatory, Callao Corp., and Corpus Care, through the "Nuestros Bosques" program, executed nationwide by the Hispanic Access Foundation.', es: 'El 16 de julio 2025, realizamos el taller: "Islas de calor y bosque urbano". Dirigido a 35 jóvenes en la ciudad de Orlando, Florida, participantes del programa juvenil de verano, desarrollado por Renacer Foundation y CareerSource Central Florida. Durante la actividad, los jóvenes del equipo de sostenibilidad, sensibilizaron a sus compañeros sobre las consecuencias de las altas temperaturas en entornos urbanos y el rol de los árboles como reguladores de temperatura, para ello, realizaron tomas de lecturas de temperatura en diferentes puntos de la comunidad de Azalea Park, para analizar y aprender sobre las causas, consecuencias y efectos de las islas de calor en los ciudadanos y los ecosistemas. Y a su vez, conocer la importancia del dosel de los árboles, y el bosque urbano, como factores elementales en la mitigación de las islas de calor. Esta actividad se desarrolló dentro del proyecto: "Bosque Comunitario de la Fe, un corredor ecológico urbano en Florida Central", que ejecuta Christ the King Episcopal Church in Orlando, FL con el apoyo de Renacer Foundation, el Observatorio Ambiental Hispano , Callao corp. y Corpus Care. A través del programa "Nuestros Bosques", ejecutado a nivel nacional por la Hispanic Access Foundation .' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/6.EcoPro Youth Project/6.1.1.jpg'
        }
      ]
    },
    {
      id: 'project_observatorio_ambiental',
      title: { en: 'Hispanic Environmental Observatory', es: 'Observatorio Ambiental Hispano' },
      description: { en: 'A coalition providing environmental information and actions in Spanish to strengthen the Hispanic community\'s participation in the environmental movement.', es: 'Una coalición que brinda información y acciones ambientales en español para fortalecer la participación de la comunidad hispana en el movimiento ambiental.' },
      imageUrl: 'https://biophiliaweb.org/images/proyectos/7.Observatorio Ambiental Hispano.jpg',
      imageAlt: 'A group of people at a community event with informational banners.',
      detailImageUrl: 'https://biophiliaweb.org/images/banner-proyectos/7. BANNER Observatorio Ambiental Hispano.jpg',
      activities: [
        {
          id: 'activity_observatorio_1',
          date: '2025-07-05',
          title: { en: 'Recognition from Casa Venezuela Orlando', es: 'Reconocimiento de Casa Venezuela Orlando' },
          description: { en: 'On July 5, 2025, we received recognition for our work. Thank you to Casa Venezuela Orlando for this important recognition of our efforts on behalf of the Hispanic community here in the United States, in the context of Venezuela\'s Independence Day. It is an honor! #TheGoodGuysAreMore', es: 'El 5 de julio 2025, recibimos un reconocimiento a nuestra labor. Gracias a Casa Venezuela Orlando por este importante reconocimiento a nuestra labor en pro de la comunidad hispana acá en Estados Unidos. en el marco del Día de la Independencia de Venezuela. Es un honor! #LosBuenosSomosMas' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.1.1.jpg'
        },
        {
          id: 'activity_observatorio_2',
          date: '2025-06-11',
          title: { en: '"Cafecito & Connection" sessions at Orlando Wetlands', es: 'Jornadas de "Cafecito & Connection en el Orlando Wetlands ".' },
          description: { en: 'On June 11 and 13, 2025, we participated in two "Cafecito & Connection" sessions, organized by Hispanic Access Foundation. On the first day, we were invited as panelists in a Virtual Round Table that brought together various non-profit organizations and project management specialists, who shared their experiences, perspectives, and resources. On the second day, we met in person at the Orlando Wetlands, where we shared experiences and resources with various social and environmental organizations in Central Florida, strengthening ties and connections for future actions together. We also took a walk through the wetland and visited its museum, an extraordinary experience of connection with this ecosystem. Additionally, Kelley Galvis from the Florida Trail Association kindly donated 30 young explorer guides: "My Adventure on the Florida Trail," which they designed in Spanish with the USDA and the Florida Forest Service, and which we will soon use in our environmental training programs.', es: 'El 11 y 13 de junio de 2025, participamos en dos jornadas de "Cafecito & Connection", organizada por Hispanic Access Foundation. Durante el primer día, fuimos invitados como panelistas en una Mesa Redonda Virtual que reunió diversas organizaciones sin fines de lucro y especialistas en la gestión de proyectos, quienes compartieron sus experiencias, perspectivas y recursos. Para el segundo día, nos reunimos de manera presencial en el Orlando Wetlands, dónde compartimos experiencias y recursos con diversas organizaciones sociales y ambientales de la Florida Central, estrechando lazos y conexiones para futuras acciones juntos. Además, realizamos una caminata por el humedal y conocimos el museo del mismo, una extraordinaria experiencia de conexión con este ecosistema. Adicionalmente, Kelley Galvis de Florida Trail Association, gentilmente nos donó 30 guias de jóvenes exploradores:"Mi aventura en el camino de Florida", quienes la diseñaron en español junto a la USDA y el Servicio Forestal de Florida, y que pronto utilizaremos en nuestros programas de formación ambiental.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.2.1.jpg'
        },
        {
          id: 'activity_observatorio_3',
          date: '2025-05-22',
          title: { en: '"II Green Citizenship Meeting in the United States"', es: '"II encuentro de ciudadanía verde en los Estados Unidos"' },
          description: { en: 'On May 22, 2025, we participated as speakers in the "II Green Citizenship Meeting in the United States," a virtual event organized by Funvive, which brought together more than 80 Venezuelan professionals dedicated to environmental management and conservation in the United States. During the activity, we had the opportunity to share the experience and actions that Biophilia Institute develops through the Hispanic Environmental Observatory in Central Florida. We thank the FUNVIVE team for the invitation!', es: 'El 22 de mayo de 2025, participamos como ponentes en el "II encuentro de ciudadanía verde en los Estados Unidos", un evento virtual organizado por Funvive, que reunió a más de 80 Venezolanos profesionales dedicados a la gestión y conservación ambiental en Estados Unidos. Durante la actividad, tuvimos la oportunidad de dar a conocer la experiencia y acciones que desarrolla Biophilia Institute a través del Observatorio Ambiental Hispano en la Florida Central. Agradecemos al equipo de FUNVIVE por la invitación!' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.3.1.jpg'
        },
        {
          id: 'activity_observatorio_4',
          date: '2025-05-26',
          title: { en: '"II Familia Day 2025" community event', es: '"II jornada comunitaria Familia Day 2025"' },
          description: { en: 'On May 26, 2025, in Orlando, we participated in the #FamiliaDay 2025 community event, organized by Renacer Foundation. During the activity, Dr. Mónica Vargas from Fundacion Crecemos Todos gave a conference on "university opportunities for youth," as part of the "Paths to Science" project, developed by Hispanic Access Foundation with Renacer Foundation. In addition, different organizations provided free services to participants in health, education, and the environment, and food bags and supplies for pregnant women were distributed. Through our information table, we raised awareness among participants about the effects of extreme heat, how to grow vegetables at home in pots, recipes for medicinal plants, distributed seeds, provided guidance on the importance of trees in the city, and gave away two tomato plants already producing fruit. It was a wonderful day, with great participation and joy for our #Hispanic community. Thanks to Renacer Foundation for this invitation!', es: 'El 26 de mayo de 2025, en la ciudad de Orlando, participamos en la jornada comunitaria #FamiliaDay 2025. Organizada por Renacer Foundation. Durante la actividad, la Dra. Mónica Vargas de Fundacion Crecemos Todos, dió una conferencia sobre "oportunidades universitarias para jóvenes", enmarcada en el proyecto "Senderos a la ciencia", que desarrolla Hispanic Access Foundation junto a Renacer Foundation. Además, diferentes organizaciones brindaron servicios gratuitos a los participantes en el área de salud, educación y ambiente, se entregaron bolsas de comida e insumos para mujeres embarazadas. A traves de nuestra mesa informativa, sensibilizamos a los participantes sobre los efectos del calor extremo, como sembrar hortalizas en casa a través de macetas, recetas de plantas medicinales, entregamos semillas, orientamos sobre la importancia de los árboles en la ciudad, y regalamos dos plantas de tomate ya produciendo. Fue un día maravilloso, con mucha participación y alegría para nuestra comunidad #hispana Gracias a Renacer Foundation por esta invitación!' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.4.1.jpg'
        },
        {
          id: 'activity_observatorio_5',
          date: '2025-04-23',
          title: { en: '"Panel on Renewable Energies and Environment"', es: '“Panel sobre Energías Renovables y Medioambiente”' },
          description: { en: 'On Wednesday, April 23, 2025, we were invited to be part of the "Panel on Renewable Energies and Environment," organized by Florida Puerto Rican Parade, Inc., as part of the #EarthMonth celebrations. During the activity, we discussed the importance of developing clean energy programs in communities to contribute to sustainability, the role of Hispanic participation as a key element in this process, and we also learned about the different initiatives of the panelist organizations to contribute to the sustainable development of cities, especially in Central Florida. It was an honor for us to share the panel with Rafa Almonte, Carrie Black, Orlyn Itriago, Alejandro Florez, and the excellent moderation of Luis Martinez. We thank Soraya Márquez for the kind arrangements and inclusion.', es: 'El miércoles 23 de abril de 2025, fuimos invitados a formar parte del “Panel sobre Energías Renovables y Medioambiente”, organizado por Florida Puerto Rican Parade, Inc. En el marco de las celebraciones del #EarthMonth. Durante la actividad, dialogamos sobre la importancia del desarrollo de programas de energías limpias en comunidades para contribuir a la sostenibilidad, sobre el rol de la participación hispana como elemento clave en este proceso, y además, conocimos las diferentes iniciativas de organizaciones panelistas para contribuir al desarrollo sostenible de las ciudades, en especial en la Florida Central. Fue un honor para nosotros compartir el panel con Rafa Almonte, Carrie Black, Orlyn Itriago, Alejandro Florez, y la excelente moderación de Luis Martinez. Agradecemos a Soraya Márquez por las amables gestiones e incorporación.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.5.1.jpg'
        },
        {
          id: 'activity_observatorio_6',
          date: '2025-04-22',
          title: { en: 'Cleanup of the nature and habitat restoration center in Apopka', es: 'Jornada de limpieza del centro natural y de restauración del hábitat en Apopka' },
          description: { en: 'On April 22, 2025, in celebration of Earth Day, we joined Orange Audubon Society for a cleanup day to create the nature center and habitat restoration area at the Apopka Birding Park, located next to the Lake Apopka Wildlife Trail. During the activity, we performed several tasks, from cleaning and removing debris from the old nursery to removing invasive plants from a beautiful oak tree. We thank the Orange Audubon family for the invitation and hope to continue supporting the consolidation of their nature center project.', es: 'El 22 de abril de 2025, en el marco de la celebración del Earth Day, nos unimos a Orange Audubon Society en una jornada de limpieza para la creación del centro natural y área de restauración del hábitat en el Parque de Observación de Aves de Apopka, ubicado aledaño al Sendero de Vida Silvestre del Lago Apopka. Durante la actividad, realizamos varias actividades, desde limpiar, botar escombros del antigüo vivero y hasta retirar plantas invasoras de una hermoso roble. Agradecemos a la familia Orange Audubon por la invitación y esperamos seguir apoyando en la consolidación de su proyecto del centro natural.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.6.1.jpg'
        },
        {
          id: 'activity_observatorio_7',
          date: '2025-03-12',
          title: { en: 'Annual Climate Correction 2025 Conference, Orlando', es: 'Conferencia anual Climate Correction 2025, Orlando' },
          description: { en: 'On March 12 and 13, 2025, at the Hotel Celeste in Orlando, Florida, we participated in the "Climate Correction 2025" conference, an event organized annually by the VoLo Foundation. This year\'s theme was "Leaders in Action," where individuals, communities, and organizations leading in innovation and climate resilience gathered to share experiences and update knowledge on the current climate reality. During the event, various workshops, conferences, and art and technology exhibitions related to the environmental theme and climate change were held. We thank the VoLo Foundation team for the excellent organization and annual initiative to highlight the issue of climate change in Florida.', es: 'El 12 y 13 de marzo de 2025, en el Hotel Celeste en la ciudad de Orlando. Florida, participamos en la conferencia "Climate Correction 2025", una conferencia organizada todos los años por VoLo Foundation. El tema de este año fue "Líderes en Acción", donde personas, comunidades y organizaciones líderes en innovación y resiliencia climática nos reunimos para compartir experiencias y actualizar conocimientos sobre la realidad climática actual. Durante la actividad, se desarrollaron diversos talleres, conferencias, exposiciones de arte y tecnología vinculadas al tema ambiental y el cambio climático. Agradecemos al equipo de VoLo Foundation por la excelente organización e iniciativa anual para realzar el tema de cambio climático en la Florida.' },
          imageUrl: 'https://biophiliaweb.org/images/actividades/7.Observatorio Ambiental Hispano/7.7.1.jpg'
        }
      ]
    }
  ],
  team: [
    { id: 'team_faruk', name: { en: 'FARUK BAGDAH', es: 'FARUK BAGDAH' }, role: { en: 'President/CEO', es: 'Presidente/CEO' }, bio: { en: 'Leading the strategic vision of the institute, Faruk brings years of experience in environmental project management and a passion for connecting communities with nature to foster sustainable development.', es: 'Liderando la visión estratégica del instituto, Faruk aporta años de experiencia en la gestión de proyectos ambientales y una pasión por conectar a las comunidades con la naturaleza para fomentar el desarrollo sostenible.' }, imageUrl: 'https://biophiliaweb.org/images/team/Faruk Bagdah.png', imageAlt: 'Photo of FARUK BAGDAH' },
    { id: 'team_victor', name: { en: 'VICTOR MARTINEZ', es: 'VICTOR MARTINEZ' }, role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: "Victor provides expert guidance on our projects and strategic direction, leveraging his background in community development to ensure our initiatives create a lasting and positive impact.", es: 'Víctor proporciona orientación experta en nuestros proyectos y dirección estratégica, aprovechando su experiencia en desarrollo comunitario para asegurar que nuestras iniciativas creen un impacto duradero y positivo.' }, imageUrl: 'https://biophiliaweb.org/images/team/Victor Martínez.jpg', imageAlt: 'Photo of VICTOR MARTINEZ' },
    { id: 'team_oliver', name: { en: 'OLIVER SANRONA', es: 'OLIVER SANRONA' }, role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: 'As a key advisor, Oliver helps shape our educational programs and conservation strategies. His expertise in ecology is fundamental to the scientific rigor of our work.', es: 'Como asesor clave, Oliver ayuda a dar forma a nuestros programas educativos y estrategias de conservación. Su experiencia en ecología es fundamental para el rigor científico de nuestro trabajo.' }, imageUrl: 'https://biophiliaweb.org/images/team/Oliver Sangona.jpg', imageAlt: 'Photo of OLIVER SANRONA' },
    { id: 'team_giuseppe', name: { en: 'GIUSEPPE BERARDI', es: 'GIUSEPPE BERARDI' }, role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: 'Giuseppe offers strategic advice on community engagement and partnerships. He is dedicated to ensuring that our projects are inclusive and effectively meet the needs of the communities we serve.', es: 'Giuseppe ofrece asesoramiento estratégico sobre la participación comunitaria y las alianzas. Se dedica a garantizar que nuestros proyectos sean inclusivos y satisfagan eficazmente las necesidades de las comunidades a las que servimos.' }, imageUrl: 'https://biophiliaweb.org/images/team/Giuseppe Berardi.jpg', imageAlt: 'Photo of GIUSEPPE BERARDI' },
    { id: 'team_simon', name: { en: 'SIMON TENORIO', es: 'SIMON TENORIO' }, role: { en: 'Director/Advisor', es: 'Director/Asesor' }, bio: { en: "With a focus on sustainability and policy, Simon helps guide our advocacy efforts and ensures our projects align with broader environmental goals for a resilient future.", es: 'Con un enfoque en la sostenibilidad y las políticas, Simón ayuda a guiar nuestros esfuerzos de promoción y se asegura de que nuestros proyectos se alineen con objetivos ambientales más amplios para un futuro resiliente.' }, imageUrl: 'https://biophiliaweb.org/images/team/Simon Tenorio.jpg', imageAlt: 'Photo of SIMON TENORIO' },
  ],
  blog: [
    {
      id: 'blog_1',
      slug: 'the-importance-of-urban-forests',
      title: { en: 'The Importance of Urban Forests for Community Well-being', es: 'La Importancia de los Bosques Urbanos para el Bienestar Comunitario' },
      author: 'Faruk Bagdah',
      date: '2024-07-15',
      summary: { en: 'Urban forests are more than just clusters of trees; they are essential for the health of our cities and communities. Discover their benefits and how you can get involved.', es: 'Los bosques urbanos son más que simples conjuntos de árboles; son esenciales para la salud de nuestras ciudades y comunidades. Descubre sus beneficios y cómo puedes involucrarte.' },
      content: { en: 'Full blog post content about the importance of urban forests goes here. It would detail ecological, social, and health benefits, supported by data and examples from Biophilia\'s work.', es: 'El contenido completo del artículo sobre la importancia de los bosques urbanos iría aquí. Detallaría los beneficios ecológicos, sociales y de salud, con datos y ejemplos del trabajo de Biophilia.' },
      imageUrl: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=1920&h=1080&fit=crop',
      imageAlt: 'A dense urban forest with sunlight filtering through the trees.'
    },
    {
      id: 'blog_2',
      slug: 'guardians-of-the-ocean-saving-sea-turtles',
      title: { en: 'Guardians of the Ocean: How We Can Help Save Sea Turtles', es: 'Guardianes del Océano: Cómo Podemos Ayudar a Salvar a las Tortugas Marinas' },
      author: 'Verónica Flores',
      date: '2024-06-28',
      summary: { en: 'Sea turtles face numerous threats, but through education and community action, we can make a significant impact on their survival. Learn about our "Ocean Guardians" project.', es: 'Las tortugas marinas enfrentan numerosas amenazas, pero a través de la educación y la acción comunitaria, podemos tener un impacto significativo en su supervivencia. Conoce nuestro proyecto "Guardianes del Océano".' },
      content: { en: 'Full blog post content about sea turtle conservation would go here. It would discuss threats, conservation strategies, and the role of community education, highlighting the "Friends of the Turtles" workshop.', es: 'El contenido completo del artículo sobre la conservación de tortugas marinas iría aquí. Discutiría las amenazas, estrategias de conservación y el rol de la educación comunitaria, destacando el taller "Amigos de las Tortugas".' },
      imageUrl: 'https://images.unsplash.com/photo-1589488313398-298a4a5b3a2a?q=80&w=1920&h=1080&fit=crop',
      imageAlt: 'A close-up of a sea turtle\'s head.'
    },
  ]
};