export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: PromptCategory;
  prompt: string;
  tips: string[];
}

export type PromptCategory =
  | 'Escritura'
  | 'Marketing'
  | 'Programación'
  | 'Educación'
  | 'Productividad'
  | 'Negocio'
  | 'Creatividad'
  | 'Análisis';

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'p1',
    title: 'Redactar un correo profesional',
    description: 'Genera un correo de trabajo con el tono y la estructura correctos.',
    category: 'Escritura',
    prompt: 'Actúa como un profesional de la comunicación. Redacta un correo electrónico para [SITUACIÓN: presentar un proyecto a mi jefe / pedir un aumento / rechazar una oferta / etc.]. El tono debe ser profesional pero cercano. El correo debe tener: un asunto claro, un saludo, una introducción breve, el cuerpo del mensaje con los puntos clave, y un cierre con llamada a la acción. Mantén el texto conciso (máximo 150 palabras).',
    tips: ['Sustituye [SITUACIÓN] por tu caso concreto', 'Puedes añadir "usa un tono más formal" o "más informal"', 'Pide varias versiones y elige la mejor'],
  },
  {
    id: 'p2',
    title: 'Crear un plan de marketing completo',
    description: 'Genera un plan de marketing estructurado para tu producto o servicio.',
    category: 'Marketing',
    prompt: 'Actúa como un director de marketing con 15 años de experiencia. Crea un plan de marketing para [PRODUCTO/SERVICIO] dirigido a [PÚBLICO OBJETIVO]. El plan debe incluir: 1) Análisis de la competencia, 2) Propuesta de valor, 3) Canales de marketing recomendados, 4) Calendario de contenidos para 3 meses, 5) KPIs para medir el éxito, 6) Presupuesto estimado. Presenta la información en formato de tabla donde sea posible.',
    tips: ['Cuanto más específico seas sobre el producto y el público, mejor', 'Pide que se enfoque en un canal concreto (Instagram, LinkedIn, etc.)', 'Solicita un calendario semana a semana'],
  },
  {
    id: 'p3',
    title: 'Depurar y explicar código',
    description: 'La IA encuentra errores en tu código y te los explica en español.',
    category: 'Programación',
    prompt: 'Actúa como un senior developer experto en [LENGUAJE]. Revisa el siguiente código y: 1) Identifica cualquier bug o error, 2) Explica qué hace cada parte del código en español, 3) Sugiere mejoras de rendimiento, 4) Reescribe el código corregido con comentarios en español. Aquí está el código:\n\n[CÓDIGO]',
    tips: ['Especifica siempre el lenguaje de programación', 'Puedes pedir que explique como si tuvieras 10 años para entenderlo mejor', 'Pide también tests para el código corregido'],
  },
  {
    id: 'p4',
    title: 'Crear un plan de estudio personalizado',
    description: 'Diseña un plan de aprendizaje adaptado a tu nivel y tiempo disponible.',
    category: 'Educación',
    prompt: 'Actúa como un tutor experto en [MATERIA]. Crea un plan de estudio para aprender [TEMA] desde cero hasta nivel intermedio. Tengo [X HORAS] disponibles a la semana y [X MESES] para alcanzar el objetivo. El plan debe incluir: 1) Objetivos semanales, 2) Recursos gratuitos recomendados, 3) Ejercicios prácticos, 4) Hitos de evaluación, 5) Consejos para mantener la motivación. Adapta el ritmo a alguien que [NIVEL ACTUAL: no tiene experiencia previa / tiene conocimientos básicos / etc.].',
    tips: ['Sé honesto sobre tu nivel actual para que el plan sea realista', 'Pide recursos en español si lo prefieres', 'Pide un plan de repaso al final'],
  },
  {
    id: 'p5',
    title: 'Resumir reuniones y extraer tareas',
    description: 'Convierte las notas de una reunión en un resumen con tareas accionables.',
    category: 'Productividad',
    prompt: 'Actúa como un asistente de proyectos. A partir de las siguientes notas de la reunión, genera: 1) Un resumen ejecutivo de 3-4 líneas, 2) Los puntos clave discutidos en formato lista, 3) Las decisiones tomadas, 4) Una tabla de tareas con: tarea, responsable y fecha límite, 5) Los temas pendientes para la próxima reunión. Notas de la reunión:\n\n[NOTAS]',
    tips: ['Funciona también con transcripciones de reuniones', 'Puedes pedir que el resumen sea más corto o más detallado', 'Pide que priorice las tareas por urgencia'],
  },
  {
    id: 'p6',
    title: 'Analizar a la competencia',
    description: 'Análisis estructurado de tus competidores con oportunidades y amenazas.',
    category: 'Negocio',
    prompt: 'Actúa como un consultor de estrategia empresarial. Realiza un análisis competitivo de [TU EMPRESA] frente a [COMPETIDOR 1, COMPETIDOR 2]. Incluye: 1) Tabla comparativa con: producto, precio, público, fortalezas, debilidades, 2) Análisis DAFO de cada competidor, 3) Oportunidades que mi empresa puede aprovechar, 4) Amenazas a las que debo prestar atención, 5) 3 recomendaciones estratégicas concretas. Basa el análisis en información pública y reciente.',
    tips: ['Proporciona tu URL y las de tus competidores para mayor contexto', 'Pide que se enfoque en un mercado geográfico concreto', 'Solicita un análisis de posicionamiento de marca'],
  },
  {
    id: 'p7',
    title: 'Generar ideas de contenido creativo',
    description: 'Lluvia de ideas estructurada para contenido original en redes sociales.',
    category: 'Creatividad',
    prompt: 'Actúa como un creador de contenido viral. Genera 15 ideas de contenido para [PLATAFORMA: Instagram / TikTok / YouTube / Blog] sobre el tema [TEMA]. Para cada idea incluye: 1) Título atractivo, 2) Formato (video, carrusel, post, etc.), 3) Gancho para captar atención en los primeros 3 segundos, 4) Estructura del contenido, 5) Llamada a la acción. Las ideas deben ser originales, no genéricas, y adaptadas al algoritmo de la plataforma.',
    tips: ['Especifica el nicho y el tono de tu marca', 'Pide que evite topicos sobreexplotados', 'Selecciona las 3 mejores y pide que las desarrolle completamente'],
  },
  {
    id: 'p8',
    title: 'Analizar datos de ventas',
    description: 'Sube tus datos y obtén conclusiones accionables en segundos.',
    category: 'Análisis',
    prompt: 'Actúa como un analista de datos de negocio. Analiza los siguientes datos de ventas y genera: 1) Un resumen de los resultados generales, 2) Las 3 tendencias más importantes, 3) Los productos más vendidos y los que no funcionan, 4) Comparativa con el periodo anterior, 5) 5 recomendaciones para aumentar las ventas, 6) Preguntas que debería hacerme como responsable de negocio. Datos:\n\n[DATOS]',
    tips: ['Puedes pegar datos de Excel o CSV directamente', 'Pide que genere gráficos si usas ChatGPT con análisis de datos', 'Solicita un pronóstico para el próximo trimestre'],
  },
  {
    id: 'p9',
    title: 'Escribir una historia o relato corto',
    description: 'Crea narrativa creativa con personajes, conflicto y resolución.',
    category: 'Creatividad',
    prompt: 'Actúa como un escritor de relatos cortos. Escribe un relato de aproximadamente 800 palabras sobre [TEMA/PREMISA]. El relato debe tener: 1) Un personaje principal con una motivación clara, 2) Un conflicto o conflicto central, 3) Un giro inesperado en la mitad, 4) Una resolución satisfactoria pero no obvia, 5) Un estilo narrativo [ESTILO: realista mágico / thriller / ciencia ficción / etc.]. Usa descripciones vívidas y diálogos naturales en español.',
    tips: ['Define el tono: oscuro, humorístico, melancólico...', 'Pide que lo adapte a un público específico (joven adulto, infantil...)', 'Puedes pedir una serie de relatos relacionados'],
  },
  {
    id: 'p10',
    title: 'Preparar una entrevista de trabajo',
    description: 'Simula una entrevista de trabajo con preguntas y feedback.',
    category: 'Productividad',
    prompt: 'Actúa como un entrevistador de recursos humanos para el puesto de [PUESTO] en [TIPO DE EMPRESA: startup / multinacional / agencia / etc.]. Realiza una entrevista simulada conmigo siguiendo estos pasos: 1) Hazme una pregunta a la vez y espera mi respuesta, 2) Después de cada respuesta, dame feedback sobre qué di bien y qué puedo mejorar, 3) Haz un total de 8 preguntas que cubran: experiencia técnica, habilidades blandas, resolución de problemas y cultura de empresa, 4) Al final, dame una valoración general y consejos para mejorar. Empieza con la primera pregunta.',
    tips: ['Especifica tu nivel de experiencia para que las preguntas se ajusten', 'Pide que sea más exigente o más relajado', 'Puedes pedir preguntas en inglés si es para un puesto internacional'],
  },
  {
    id: 'p11',
    title: 'Crear descripciones de productos que venden',
    description: 'Textos persuasivos para e-commerce optimizados para conversión.',
    category: 'Marketing',
    prompt: 'Actúa como un copywriter experto en e-commerce. Escribe 3 versiones de una descripción de producto para [PRODUCTO] dirigido a [PÚBLICO]. Cada versión debe tener: 1) Un título que capte atención, 2) Una descripción de 80-120 palabras que destaque beneficios (no solo características), 3) 5 bullets points con beneficios clave, 4) Una frase de cierre que invite a comprar, 5) Palabras clave SEO incluidas de forma natural. Las 3 versiones deben tener tonos diferentes: profesional, cercano y emocional.',
    tips: ['Incluye el precio aproximado para que el copy sea coherente', 'Pide que añada emoji si es para Instagram o una tienda informal', 'Solicita también textos para anuncios'],
  },
  {
    id: 'p12',
    title: 'Explicar un concepto complejo de forma sencilla',
    description: 'La IA traduce temas difíciles a explicaciones que cualquiera entiende.',
    category: 'Educación',
    prompt: 'Actúa como un profesor divulgador experto. Explícame [CONCEPTO COMPLEJO] de forma que pueda entenderlo alguien sin conocimientos previos. Usa: 1) Una analogía de la vida cotidiana, 2) Una explicación paso a paso en lenguaje sencillo, 3) Un ejemplo práctico, 4) Un resumen de 3 puntos clave, 5) Una respuesta a la pregunta "¿y esto para qué me sirve en el día a día?". Evita jerga técnica y si usas algún término, explícalo inmediatamente.',
    tips: ['Pide que lo explique como si tuvieras 5, 10 o 15 años para ajustar el nivel', 'Solicita una segunda analogía diferente', 'Pide ejemplos relacionados con tu profesión o interés'],
  },
];
