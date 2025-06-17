export const quizSteps = [
  {
    id: 1,
    question: "¡NO DEJES QUE LA PERSONA QUE AMAS SALGA DE TU VIDA PARA SIEMPRE!",
    description:
      "Haz la prueba rápida de 2 minutos y descubre cómo aplicar el PLAN A - en tu caso específico.",
    subtext: "Selecciona tu género:",
    options: ["MASCULINO", "FEMENINO"],
    warning:
      "⚠️ ATENCIÓN: ¡Este método comprobado solo debe usarse si estás 100% comprometido en reconquistar tu amor perdido!",
    elements: {
      heartbeat: true,
      timer: "Prueba de 2 minutos",
    },
  },
  {
    id: 2,
    question: "¿CUÁL ES TU EDAD?",
    description: "(Esta información es crucial para personalizar tu plan de reconquista)",
    options: [
      "18-29 - Fase de descubrimientos emocionales",
      "29-39 - Período de consolidación de valores",
      "39-49 - Momento de reevaluación de prioridades",
      "50+ - Fase de madurez emocional",
    ],
    elements: {
      ageIcons: true,
      counter: "personas que ya hicieron la prueba hoy",
    },
  },
  {
    id: 3,
    question: "¿CUÁNTO TIEMPO LLEVÁIS SEPARADOS?",
    description: "(El tiempo es un factor crítico para tu estrategia de reconquista)",
    options: {
      masculino: [
        "Menos de una semana",
        "Hace 1 mes",
        "De 2 a 6 meses",
        "Más de 6 meses",
      ],
      feminino: [
        "Menos de una semana",
        "Hace 1 mes",
        "De 2 a 6 meses",
        "Más de 6 meses",
      ],
    },
    bonusUnlock: {
      id: 1,
      title: "21 GATILLOS EMOCIONALES QUE FUNCIONAN",
      value: 47,
      description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    },
  },
  {
    id: 4,
    question: {
      masculino: "¿CÓMO FUE VUESTRA SEPARACIÓN?",
      feminino: "¿CÓMO FUE VUESTRA SEPARACIÓN?",
    },
    description: "(Esta información es vital para determinar tu estrategia específica)",
    options: {
      masculino: [
        "Ella cortó conmigo",
        "Yo corté con ella",
        "Decidimos cortar de mutuo acuerdo",
      ],
      feminino: [
        "Él cortó conmigo",
        "Yo corté con él",
        "Decidimos cortar de mutuo acuerdo",
      ],
    },
    elements: {
      analysisText: "Calculando tasa de éxito para tu caso...",
      successRate: "¡Tu caso tiene características prometedoras!",
    },
  },
  {
    id: 5,
    question: "¿CUÁNTO TIEMPO ESTUVISTEIS JUNTOS?",
    description: "(La duración de la relación influye directamente en tu estrategia)",
    options: [
      "Más de 3 años",
      "De 1 a 3 años",
      "De 6 meses a 1 año",
      "Menos de 6 meses",
    ],
  },
  {
    id: 6,
    question: "¿CUÁL FUE LA PARTE MÁS DOLOROSA DE LA RUPTURA?",
    description: "(Identificar tu dolor principal es esencial para tu recuperación emocional y reconquista)",
    options: {
      masculino: [
        "😔 Lidiar con la soledad y el vacío",
        "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
        "😐 Lidiar con recuerdos y memorias",
        "💔 Imaginarla con otro tío",
        "🤔 Darme cuenta de que los planes que hicimos nunca se harán realidad",
        "⚡ Otro",
      ],
      feminino: [
        "😔 Lidiar con la soledad y el vacío",
        "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
        "😐 Lidiar con recuerdos y memorias",
        "💔 Imaginarlo con otra tía",
        "🤔 Darme cuenta de que los planes que hicimos nunca se harán realidad",
        "⚡ Otro",
      ],
    },
    elements: {
      profileAnalysis: "Personalizando tu estrategia emocional...",
      profileComplete: "46%",
    },
  },
  {
    id: 7,
    question: {
      masculino: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?",
      feminino: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?",
    },
    description: "(Esta información determinará tu punto de partida en el PLAN A)",
    options: {
      masculino: [
        "🧐 Estoy aplicando contacto cero",
        "😢 Ella pasa de mí completamente",
        "❌ Me ha bloqueado en todas las redes sociales",
        "🤝 Hablamos solo de cosas imprescindibles",
        "🤔 Charlamos de vez en cuando",
        "😌 Seguimos siendo colegas",
        "🔥 Hemos echado algún polvo después de la ruptura",
      ],
      feminino: [
        "🧐 Estoy aplicando contacto cero",
        "😢 Él pasa de mí completamente",
        "❌ Me ha bloqueado en todas las redes sociales",
        "🤝 Hablamos solo de cosas imprescindibles",
        "🤔 Charlamos de vez en cuando",
        "😌 Seguimos siendo colegas",
        "🔥 Hemos echado algún polvo después de la ruptura",
      ],
    },
    elements: {
      profileComplete: "62%",
      testimonialImage: "",
    },
  },
  {
    id: 8,
    question: {
      masculino: "¿ELLA YA ESTÁ LIÁNDOSE CON OTRA PERSONA?",
      feminino: "¿ÉL YA ESTÁ LIÁNDOSE CON OTRA PERSONA?",
    },
    description: "(Esta información es crucial para definir tu enfoque estratégico)",
    options: {
      masculino: [
        "🚫 No, está soltera",
        "🤔 No estoy seguro",
        "😔 Sí, se está liando con alguien",
        "💔 Sí, tiene una relación seria",
        "🔄 Se está liando con varios",
      ],
      feminino: [
        "🚫 No, está soltero",
        "🤔 No estoy segura",
        "😔 Sí, se está liando con alguien",
        "💔 Sí, tiene una relación seria",
        "🔄 Se está liando con varias",
      ],
    },
    bonusUnlock: {
      id: 2,
      title: "PROTOCOLO DE EMERGENCIA 72H",
      value: 37,
      description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    },
    elements: {
      profileComplete: "77%",
    },
  },
  {
    id: 9,
    question: {
      masculino: "¿CUÁNTO QUIERES RECUPERARLA?",
      feminino: "¿CUÁNTO QUIERES RECUPERARLO?",
    },
    description: "(Tu nivel de compromiso determinará tu éxito)",
    subtext: "El 91% de las personas que seleccionaron nivel 4 reconquistaron a su ex en menos de 21 días usando el PLAN A.",
    options: ["1 - No estoy seguro", "2 - Me lo estoy planteando", "3 - Lo quiero bastante", "4 - Lo quiero muchísimo"],
    note: "Solo trabajo con personas decididas a transformar su situación amorosa. El PLAN A fue desarrollado para quien está preparado para actuar.",
    elements: {
      thermometer: true,
      profileComplete: "85%",
    },
  },
  {
    id: 10,
    question: "EXPERTO ANALIZANDO TU CASO...",
    description: "Espera mientras analizo tus respuestas para crear tu estrategia personalizada.",
    options: [],
    autoAdvance: true,
    elements: {
      expertPhoto: true,
      expertImage: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-01T212625.544.png",
      autoMessage: "Basándome en 7 años de experiencia ayudando a personas como tú...",
      profileComplete: "90%",
    },
  },
  {
    id: 11,
    question: "¡ENHORABUENA! He analizado tus respuestas y tengo buenas noticias para ti.",
    description:
      "Basándome en tu perfil y situación específica, el PLAN A tiene un 90,5% de probabilidades de funcionar en tu caso.",
    options: ["¿VAMOS AL SIGUIENTE PASO?"],
    note: "Estoy aquí para guiarte personalmente en este viaje de reconquista. En los últimos 7 años, he ayudado a más de 3.847 personas a recuperar sus relaciones usando este método exclusivo.",
    elements: {
      expertPhoto: true,
      expertImage: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-01T212625.544.png",
      profileComplete: "95%",
      helpedCounter: "Personas ayudadas hoy: 17",
      compatibilityCalc: "90,5%",
    },
  },
  {
    id: 12,
    question: "RESULTADOS DEMOSTRADOS",
    subtext:
      "EL 91% DE MIS ALUMNOS VIERON RESULTADOS ESPECTACULARES EN LOS PRIMEROS 7 DÍAS APLICANDO EL PLAN A",
    description: "",
    options: ["¡YO TAMBIÉN QUIERO ESOS RESULTADOS!"],
    elements: {
      bigNumber: "91%",
      profileComplete: "98%",
      testimonialCarousel: {
        images: [
          "https://comprarplanseguro.shop/wp-content/uploads/2025/06/JOSE-DEP-CANVA.png",
          "https://comprarplanseguro.shop/wp-content/uploads/2025/06/3-JUAN-DEP-CANVA.png",
          "https://comprarplanseguro.shop/wp-content/uploads/2025/06/2-LUIS-DEP-CANVA.png"
        ],
        autoPlay: true,
        interval: 3000
      }
    },
  },
  {
    id: 13,
    question: "TU PLAN A - RECUPERACIÓN RÁPIDA DE 21 DÍAS",
    description: "Desarrollado específicamente para tu caso, basado en tus respuestas.",
    subtext:
      "Este sistema paso a paso ya ha ayudado a 3.847 personas a reconquistar a su ex y construir relaciones aún más sólidas que antes.",
    options: {
      masculino: ["¡SÍ, QUIERO RECONQUISTARLA AHORA!"],
      feminino: ["¡SÍ, QUIERO RECONQUISTARLO AHORA!"],
    },
    note: "¡Incluye los 2 bonos exclusivos (valor total: 84€) que aceleran tu reconquista!",
    elements: {
      plan21Days: true,
      profileComplete: "100%",
      allBonuses: true,
    },
  },
  {
    id: 14,
    question: {
      masculino: "DE RECHAZADO A DESEADO EN 21 DÍAS O MENOS",
      feminino: "DE RECHAZADA A DESEADA EN 21 DÍAS O MENOS",
    },
    description:
      "El único sistema paso a paso científicamente desarrollado para personas decididas a recuperar el amor de quien ha dejado un vacío en sus vidas.",
    options: {
      masculino: ["¡SÍ, QUIERO RECONQUISTARLA AHORA!"],
      feminino: ["¡SÍ, QUIERO RECONQUISTARLO AHORA!"],
    },
    finalPage: true,
    elements: {
      beforeAfter: true,
      fullSalesPage: true,
    },
  },
]

export const bonuses = [
  {
    id: 1,
    title: "21 GATILLOS EMOCIONALES QUE FUNCIONAN",
    value: 47,
    description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    details: [
      "✓ 7 Gatillos de Nostalgia",
      "✓ 7 Gatillos de Curiosidad",
      "✓ 7 Gatillos de Deseo"
    ]
  },
  {
    id: 2,
    title: "PROTOCOLO DE EMERGENCIA 72H",
    value: 37,
    description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    details: [
      "✓ Plan de Acción Inmediata",
      "✓ Independencia Emocional",
      "✓ Comunicación Magnética"
    ]
  }
]

export const testimonials = [
  {
    name: "Carlos M., 34 años",
    text: "¡Volvió a responderme al 3er día y me propuso quedar al 6º día!",
    rating: 5,
  },
  {
    name: "Rafael, 32 años",
    text: "Estaba perdido después de la ruptura. El Plan A me dio rumbo y confianza. ¡Hoy estamos más unidos que nunca!",
    rating: 5,
  },
  {
    name: "André, 28 años",
    text: "En solo 2 semanas siguiendo el Plan A, conseguí reconquistar a mi ex. ¡Los guiones funcionaron perfectamente!",
    rating: 5,
  },
  {
    name: "Marcelo, 41 años",
    text: "Después de 6 meses separados, pensé que ya no tenía oportunidad. En el día 12 del Plan A me llamó llorando queriendo volver.",
    rating: 5,
  },
]

export const socialProofMessages = [
  "¡Estás entre el 17% más decidido a reconquistar!",
  "¡Tu perfil muestra compatibilidad!",
  "¡Bonificación liberada por desbloqueo!",
  "¡Has desbloqueado los 2 bonos - valor total de 84€!",
  "El 87% de las personas en tu situación lograron resultados en menos de 14 días",
  "Estás más comprometido que el 73% de las personas que hicieron esta prueba",
]

// Componente React para o carrossel de depoimentos
export const TestimonialCarousel = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="testimonial-carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img 
                  src={image} 
                  alt={`Testimonio ${index + 1}`}
                  className="testimonial-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={goToPrevious}
          aria-label="Testimonio anterior"
        >
          ‹
        </button>
        <button 
          className="carousel-btn carousel-btn-next"
          onClick={goToNext}
          aria-label="Siguiente testimonio"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-carousel {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          width: ${images.length * 100}%;
        }

        .carousel-slide {
          width: ${100 / images.length}%;
          flex-shrink: 0;
        }

        .testimonial-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          z-index: 2;
          transition: background-color 0.3s ease;
        }

        .carousel-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .carousel-btn-prev {
          left: 10px;
        }

        .carousel-btn-next {
          right: 10px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 15px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .indicator.active {
          background: #007bff;
        }

        .indicator:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .indicator.active:hover {
          background: #0056b3;
        }

        @media (max-width: 768px) {
          .carousel-btn {
            width: 35px;
            height: 35px;
            font-size: 16px;
          }

          .carousel-btn-prev {
            left: 5px;
          }

          .carousel-btn-next {
            right: 5px;
          }
        }
      `}</style>
    </div>
  );
};

// Função utilitaria para personalizar textos basados en el género
export function getPersonalizedContent(content, gender) {
  if (typeof content === "string") {
    return content
  }

  if (typeof content === "object" && content !== null) {
    if (content.masculino && content.feminino) {
      return gender === "MASCULINO" ? content.masculino : content.feminino
    }
    return content
  }

  return content
}