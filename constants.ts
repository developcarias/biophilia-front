

import { PageContent } from './types';

export const INITIAL_CONTENT: PageContent = {
  hero: [
    {
      id: "slide_1",
      title: {
        en: "Connecting Humanity with Nature",
        es: "Conectando la Humanidad con la Naturaleza"
      },
      subtitle: {
        en: "We are dedicated to fostering the love of life and the living world, creating a sustainable future for all.",
        es: "Nos dedicamos a fomentar el amor por la vida y el mundo vivo, creando un futuro sostenible para todos."
      },
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1920&h=1080&fit=crop"
    },
    {
      id: "slide_2",
      title: {
        en: "Protect Our Planet's Lungs",
        es: "Protege los Pulmones de Nuestro Planeta"
      },
      subtitle: {
        en: "Join our reforestation efforts to restore vital ecosystems and combat climate change.",
        es: "Únete a nuestros esfuerzos de reforestación para restaurar ecosistemas vitales y combatir el cambio climático."
      },
      imageUrl: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=1920&h=1080&fit=crop"
    },
    {
      id: "slide_3",
      title: {
        en: "Defend Our Oceans",
        es: "Defiende Nuestros Océanos"
      },
      subtitle: {
        en: "From coral reefs to marine wildlife, we work to preserve the delicate balance of our blue planet.",
        es: "Desde los arrecifes de coral hasta la vida silvestre marina, trabajamos para preservar el delicado equilibrio de nuestro planeta azul."
      },
      imageUrl: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=1920&h=1080&fit=crop"
    },
    {
      id: "slide_4",
      title: {
        en: "Your Action Creates Change",
        es: "Tu Acción Genera el Cambio"
      },
      subtitle: {
        en: "Every contribution helps us protect biodiversity and build a greener tomorrow.",
        es: "Cada contribución nos ayuda a proteger la biodiversidad y construir un mañana más verde."
      },
      imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1920&h=1080&fit=crop"
    }
  ],
  home: [
    {
      id: "home_our_work",
      title: { en: "Our Work", es: "Nuestro Trabajo" },
      text: { 
        en: "We focus on key areas to heal our planet: reforestation, ocean conservation, wildlife protection, and environmental education. Our programs are community-driven, ensuring a lasting, positive impact on local ecosystems.",
        es: "Nos enfocamos en áreas clave para sanar nuestro planeta: reforestación, conservación de océanos, protección de la vida silvestre y educación ambiental. Nuestros programas son impulsados por la comunidad, asegurando un impacto duradero y positivo en los ecosistemas locales."
      },
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&h=400&fit=crop",
      imageAlt: "Volunteers planting trees in a field"
    },
    {
      id: "home_get_involved",
      title: { en: "Get Involved", es: "Involúcrate" },
      text: { 
        en: "Your support can help us grow forests and protect endangered species. Whether you donate, volunteer, or partner with us, you are joining a global movement to restore our planet's health.",
        es: "Tu apoyo puede ayudarnos a hacer crecer bosques y proteger especies en peligro de extinción. Ya sea que dones, te ofrezcas como voluntario o te asocies con nosotros, te unes a un movimiento global para restaurar la salud de nuestro planeta."
       },
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&h=400&fit=crop",
      imageAlt: "Person holding a small plant in their hands"
    }
  ],
  about: {
    title: { en: "About Biophilia", es: "Sobre Biophilia" },
    mainText: { 
      en: "Founded on the principle of 'biophilia'—the innate human tendency to connect with nature—our foundation has been a champion for the environment since 2015. We build bridges between communities and conservation efforts worldwide.",
      es: "Fundada en el principio de 'biofilia'—la tendencia humana innata a conectar con la naturaleza—nuestra fundación ha sido una defensora del medio ambiente desde 2015. Construimos puentes entre las comunidades y los esfuerzos de conservación en todo el mundo."
     },
    mission: {
      id: "about_mission",
      title: { en: "Our Mission", es: "Nuestra Misión" },
      text: { 
        en: "Our mission is to inspire and empower humanity to live in harmony with nature. We provide resources, support, and advocacy to protect biodiversity and promote sustainable living for a thriving planet.",
        es: "Nuestra misión es inspirar y empoderar a la humanidad para que viva en armonía con la naturaleza. Proveemos recursos, apoyo y defensa para proteger la biodiversidad y promover una vida sostenible para un planeta próspero."
      },
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&h=400&fit=crop",
      imageAlt: "Sunlight filtering through a lush green forest canopy"
    }
  },
  projects: [
    {
      id: "proj_amazon",
      title: { en: "Amazon Rainforest Restoration", es: "Restauración de la Selva Amazónica" },
      description: {
        en: "Partnering with local indigenous communities to reforest over 10,000 hectares of the Amazon, focusing on native species and sustainable land management.",
        es: "Nos asociamos con comunidades indígenas locales para reforestar más de 10,000 hectáreas del Amazonas, enfocándonos en especies nativas y manejo sostenible de la tierra."
      },
      imageUrl: "https://images.unsplash.com/photo-1505765050453-c899951b9469?q=80&w=600&h=400&fit=crop",
      imageAlt: "A monkey in the dense Amazon rainforest"
    },
    {
      id: "proj_coral",
      title: { en: "Coral Reef Revival Initiative", es: "Iniciativa de Recuperación de Arrecifes de Coral" },
      description: {
        en: "Our team of marine biologists is working to restore damaged coral reefs through innovative micro-fragmentation techniques in the Caribbean.",
        es: "Nuestro equipo de biólogos marinos está trabajando para restaurar los arrecifes de coral dañados a través de técnicas innovadoras de micro-fragmentación en el Caribe."
      },
      imageUrl: "https://images.unsplash.com/photo-1559931835-0a3f00a5e8a4?q=80&w=600&h=400&fit=crop",
      imageAlt: "Sea turtle swimming over a colorful coral reef"
    }
  ],
  team: [
    {
      id: "team_jane",
      name: "Dr. Aris Thorne",
      role: { en: "Founder & Chief Ecologist", es: "Fundador y Ecólogo Jefe" },
      bio: {
        en: "Aris has dedicated his life to understanding complex ecosystems. His vision guides our foundation's strategic direction and conservation efforts.",
        es: "Aris ha dedicado su vida a comprender ecosistemas complejos. Su visión guía la dirección estratégica de nuestra fundación y los esfuerzos de conservación."
      },
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
      imageAlt: "Headshot of Dr. Aris Thorne"
    },
    {
      id: "team_aisha",
      name: "Elara Vance",
      role: { en: "Director of Global Programs", es: "Directora de Programas Globales" },
      bio: {
        en: "Elara coordinates our worldwide projects, ensuring that our resources are deployed effectively to create the greatest possible impact.",
        es: "Elara coordina nuestros proyectos a nivel mundial, asegurando que nuestros recursos se implementen de manera efectiva para crear el mayor impacto posible."
      },
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
      imageAlt: "Headshot of Elara Vance"
    }
  ],
  blog: [
    {
      id: "blog_1",
      slug: "the-silent-guardians-of-our-planet",
      title: { en: "The Silent Guardians of Our Planet", es: "Los Guardianes Silenciosos de Nuestro Planeta" },
      author: "Dr. Aris Thorne",
      date: "2024-05-15",
      summary: {
        en: "Discover the vital role that ancient trees play in maintaining biodiversity and combating climate change. A deep dive into the world of our planet's oldest living organisms.",
        es: "Descubre el papel vital que juegan los árboles ancestrales en el mantenimiento de la biodiversidad y la lucha contra el cambio climático. Una inmersión profunda en el mundo de los organismos vivos más antiguos de nuestro planeta."
      },
      content: {
        en: "Full blog post content goes here. It would be a longer version of the summary, with more details, quotes, and scientific data to back up the claims. This section can be multiple paragraphs long.",
        es: "El contenido completo del blog va aquí. Sería una versión más larga del resumen, con más detalles, citas y datos científicos para respaldar las afirmaciones. Esta sección puede tener varios párrafos."
      },
      imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=800&h=400&fit=crop",
      imageAlt: "A deer standing in a sunlit forest"
    }
  ],
  contact: {
    title: { en: "Get In Touch", es: "Ponte en Contacto" },
    intro: {
      en: "We'd love to hear from you. Whether you have a question about our projects, partnerships, or just want to say hello, our team is ready to answer all your questions.",
      es: "Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestros proyectos, asociaciones o simplemente quieras saludar, nuestro equipo está listo para responder a todas tus preguntas."
    },
    address: "123 Nature Lane, Green Valley, USA 12345",
    phone: "(555) 123-4567",
    email: "contact@biophilia.org"
  }
};