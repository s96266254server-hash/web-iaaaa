export type Category =
  | 'texto'
  | 'imagenes'
  | 'video'
  | 'audio'
  | 'codigo'
  | 'datos'
  | 'productividad'
  | 'diseno';

export type Pricing = 'gratis' | 'freemium' | 'de-pago';

export interface AITool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  pricing: Pricing;
  rating: number;
  url: string;
  features: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  tags: string[];
}

export const categoryLabels: Record<Category, string> = {
  texto: 'Texto y Chat',
  imagenes: 'Generación de Imágenes',
  video: 'Video y Animación',
  audio: 'Audio y Voz',
  codigo: 'Código y Desarrollo',
  datos: 'Análisis de Datos',
  productividad: 'Productividad',
  diseno: 'Diseño',
};

export const categoryIcons: Record<Category, string> = {
  texto: 'MessageSquare',
  imagenes: 'Image',
  video: 'Video',
  audio: 'AudioLines',
  codigo: 'Code2',
  datos: 'BarChart3',
  productividad: 'Zap',
  diseno: 'Palette',
};

export const pricingLabels: Record<Pricing, string> = {
  gratis: 'Gratis',
  freemium: 'Freemium',
  'de-pago': 'De Pago',
};

export const aiTools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'El asistente conversacional más popular del mundo',
    description:
      'ChatGPT es un modelo de lenguaje avanzado capaz de mantener conversaciones naturales, responder preguntas, redactar textos, traducir, programar y mucho más. Desarrollado por OpenAI, es la herramienta de IA más utilizada a nivel mundial.',
    category: 'texto',
    pricing: 'freemium',
    rating: 4.8,
    url: 'https://chat.openai.com',
    features: [
      'Conversaciones multiturno con memoria',
      'Generación y depuración de código',
      'Análisis de imágenes (GPT-4o)',
      'Búsqueda web integrada',
      'Creación de GPTs personalizados',
    ],
    useCases: [
      'Redacción de correos y documentos',
      'Aprendizaje y tutoría personalizada',
      'Brainstorming de ideas',
      'Resumen y análisis de textos largos',
    ],
    pros: ['Versátil y fácil de usar', 'Amplia base de conocimiento', 'Comunidad enorme', 'Integraciones con múltiples plataformas'],
    cons: ['La versión gratuita tiene límites', 'Puede cometer errores en datos específicos', 'Sin acceso a tiempo real sin búsqueda'],
    tags: ['OpenAI', 'GPT-4o', 'conversacional', 'multimodal'],
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'IA conversacional con razonamiento profundo',
    description:
      'Claude, desarrollado por Anthropic, destaca por su capacidad de razonamiento extendido, análisis de documentos largos y respuestas cuidadosas y matizadas. Es conocido por su enfoque en la seguridad y la honestidad.',
    category: 'texto',
    pricing: 'freemium',
    rating: 4.7,
    url: 'https://claude.ai',
    features: [
      'Ventana de contexto de 200K tokens',
      'Análisis de documentos extensos',
      'Razonamiento extendido (thinking)',
      'Generación de artefactos interactivos',
      'Integración con herramientas externas',
    ],
    useCases: [
      'Análisis legal y de contratos',
      'Programación compleja',
      'Investigación académica',
      'Redacción creativa de larga forma',
    ],
    pros: ['Excelente razonamiento', 'Maneja documentos muy largos', 'Respuestas menos propensas a alucinaciones', 'Artefactos interactivos'],
    cons: ['Menos integraciones que ChatGPT', 'Versión gratuita con límites de uso', 'Sin generación de imágenes propio'],
    tags: ['Anthropic', 'Claude 3.5', 'razonamiento', 'documentos'],
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    tagline: 'La IA multimodal de Google integrada en tu ecosistema',
    description:
      'Gemini es la familia de modelos de Google DeepMind, integrada en servicios de Google como Workspace, Search y Android. Destaca por su capacidad multimodal nativa y su acceso a información en tiempo real.',
    category: 'texto',
    pricing: 'freemium',
    rating: 4.5,
    url: 'https://gemini.google.com',
    features: [
      'Integración nativa con Google Workspace',
      'Acceso a búsqueda en tiempo real',
      'Capacidad multimodal (texto, imagen, video, audio)',
      'Generación de imágenes con Imagen',
      'Asistente en Android e iOS',
    ],
    useCases: [
      'Resumen de correos y documentos de Google',
      'Búsqueda con información actualizada',
      'Asistencia en móvil',
      'Generación de presentaciones',
    ],
    pros: ['Integración con el ecosistema Google', 'Información en tiempo real', 'Multimodal nativo', 'Plan gratuito generoso'],
    cons: ['Menos preciso en código que competidores', 'Dependencia del ecosistema Google', 'Respuestas a veces superficiales'],
    tags: ['Google', 'Gemini', 'multimodal', 'Workspace'],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'La mejor IA para crear imágenes artísticas',
    description:
      'Midjourney es la plataforma líder en generación de imágenes artísticas con IA. Conocida por su calidad estética superior, permite crear ilustraciones, fotorealismo, conceptos de diseño y arte digital con prompts de texto.',
    category: 'imagenes',
    pricing: 'de-pago',
    rating: 4.7,
    url: 'https://www.midjourney.com',
    features: [
      'Calidad estética líder en la industria',
      'Control de estilo y aspecto avanzado',
      'Función de variación y remezcla',
      'Ampliación y reencuadre de imágenes',
      'Comunidad activa en Discord y web',
    ],
    useCases: [
      'Arte conceptual y ilustración',
      'Diseño de portadas y marketing',
      'Conceptos de producto y arquitectura',
      'Contenido creativo para redes sociales',
    ],
    pros: ['Calidad visual excepcional', 'Estilos artísticos diversos', 'Comunidad muy activa', 'Mejora constante del modelo'],
    cons: ['Sin plan gratuito', 'Interfaz inicialmente solo en Discord', 'Menos control técnico que competidores'],
    tags: ['Midjourney', 'arte', 'ilustración', 'fotorealismo'],
  },
  {
    id: 'dalle3',
    name: 'DALL·E 3',
    tagline: 'Generación de imágenes integrada en ChatGPT',
    description:
      'DALL·E 3 de OpenAI es un generador de imágenes integrado en ChatGPT que destaca por su comprensión precisa de prompts y su capacidad para renderizar texto dentro de las imágenes.',
    category: 'imagenes',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://openai.com/dall-e-3',
    features: [
      'Integración directa con ChatGPT',
      'Comprensión avanzada de prompts complejos',
      'Renderizado de texto en imágenes',
      'Edición conversacional de imágenes',
      'Múltiples estilos artísticos',
    ],
    useCases: [
      'Creación rápida de imágenes con prompts simples',
      'Infografías y materiales educativos',
      'Prototipos visuales',
      'Imágenes con texto integrado',
    ],
    pros: ['Fácil de usar desde ChatGPT', 'Excelente comprensión de instrucciones', 'Renderiza texto correctamente', 'Incluido en plan ChatGPT Plus'],
    cons: ['Menos calidad artística que Midjourney', 'Límites de uso en plan gratuito', 'Menos opciones de control fino'],
    tags: ['OpenAI', 'DALL-E', 'imágenes', 'ChatGPT'],
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    tagline: 'Generación de imágenes de código abierto',
    description:
      'Stable Diffusion de Stability AI es el modelo de generación de imágenes de código abierto más popular. Puede ejecutarse localmente o en la nube, y ofrece control total sobre el proceso de generación.',
    category: 'imagenes',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://stability.ai',
    features: [
      'Código abierto y ejecutable localmente',
      'Control total con ControlNet y LoRA',
      'Amplia comunidad de modelos personalizados',
      'Sin censura en ejecución local',
      'Integración con múltiples herramientas',
    ],
    useCases: [
      'Generación de imágenes con hardware propio',
      'Prototipado y experimentación',
      'Pipelines de producción automatizados',
      'Modelos personalizados para nichos específicos',
    ],
    pros: ['Gratuito y de código abierto', 'Control técnico sin igual', 'Comunidad enorme de modelos', 'Privacidad total en ejecución local'],
    cons: ['Requiere conocimientos técnicos', 'Necesita hardware potente para ejecución local', 'Calidad base inferior a Midjourney'],
    tags: ['Stability AI', 'open source', 'ControlNet', 'local'],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'Tu par de programación con IA',
    description:
      'GitHub Copilot es el asistente de programación con IA más integrado en el flujo de desarrollo. Sugiere código, completa funciones, explica errores y ayuda con tests directamente en tu editor.',
    category: 'codigo',
    pricing: 'de-pago',
    rating: 4.6,
    url: 'https://github.com/features/copilot',
    features: [
      'Autocompletado inteligente en el editor',
      'Chat con contexto del repositorio',
      'Generación de tests y documentación',
      'Soporte para decenas de lenguajes',
      'Integración con VS Code, JetBrains, Neovim',
    ],
    useCases: [
      'Aceleración de desarrollo diario',
      'Aprendizaje de nuevos lenguajes',
      'Documentación automática',
      'Refactoring y debugging asistido',
    ],
    pros: ['Integración nativa en el editor', 'Contexto del repositorio completo', 'Soporte multilenguaje', 'Mejora continua del modelo'],
    cons: ['Suscripción de pago', 'A veces sugiere código incorrecto', 'Preocupaciones de licencia en código generado'],
    tags: ['GitHub', 'programación', 'IDE', 'autocomplete'],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    tagline: 'El editor de código con IA nativa',
    description:
      'Cursor es un editor de código basado en VS Code con IA integrada a nivel profundo. Permite editar múltiples archivos con instrucciones naturales, hacer preguntas sobre toda la codebase y generar proyectos completos.',
    category: 'codigo',
    pricing: 'freemium',
    rating: 4.7,
    url: 'https://cursor.sh',
    features: [
      'Edición multilenguaje con instrucciones naturales',
      'Chat con contexto completo de la codebase',
      'Composer para generar features completas',
      'Compatible con extensiones de VS Code',
      'Modelos a elegir (Claude, GPT-4, etc.)',
    ],
    useCases: [
      'Desarrollo full-stack acelerado',
      'Onboarding en codebases desconocidas',
      'Generación de features completas',
      'Debugging con contexto profundo',
    ],
    pros: ['IA verdaderamente integrada', 'Composer para cambios multi-archivo', 'Compatibilidad con VS Code', 'Elección de modelo subyacente'],
    cons: ['Herramienta relativamente nueva', 'Plan gratuito limitado', 'Puede ser costoso para uso intensivo'],
    tags: ['Cursor', 'IDE', 'programación', 'multi-archivo'],
  },
  {
    id: 'runway',
    name: 'Runway',
    tagline: 'Creatividad en video con IA',
    description:
      'Runway es la plataforma líder en generación y edición de video con IA. Permite crear clips de video desde texto, modificar videos existentes, generar efectos visuales y mucho más.',
    category: 'video',
    pricing: 'freemium',
    rating: 4.4,
    url: 'https://runwayml.com',
    features: [
      'Generación de video desde texto (Gen-3)',
      'Image-to-video y video-to-video',
      'Eliminación de fondos y objetos',
      'Control de cámara y movimiento',
      'Edición no destructiva',
    ],
    useCases: [
      'Creación de contenido para redes sociales',
      'Prototipos de video comercial',
      'Efectos visuales sin equipo profesional',
      'Animación de imágenes estáticas',
    ],
    pros: ['Líder en generación de video', 'Interfaz intuitiva', 'Herramientas múltiples integradas', 'Plan gratuito de prueba'],
    cons: ['Los videos generados son cortos', 'Uso intensivo de créditos', 'Calidad variable según prompt'],
    tags: ['Runway', 'video', 'Gen-3', 'efectos visuales'],
  },
  {
    id: 'suno',
    name: 'Suno',
    tagline: 'Crea canciones completas con IA',
    description:
      'Suno es una plataforma de generación musical con IA que crea canciones completas con letra, melodía y voz a partir de una descripción de texto. Ideal para músicos, creadores de contenido y aficionados.',
    category: 'audio',
    pricing: 'freemium',
    rating: 4.5,
    url: 'https://suno.com',
    features: [
      'Generación de canciones completas con voz',
      'Múltiples géneros y estilos musicales',
      'Letras personalizadas o generadas',
      'Extensiones y remixes',
      'Modo instrumental',
    ],
    useCases: [
      'Música para contenido y podcasts',
      'Prototipos de canciones originales',
      'Banda sonora para videos y juegos',
      'Experimentación musical creativa',
    ],
    pros: ['Calidad musical impresionante', 'Voces realistas', 'Fácil de usar', 'Plan gratuito con créditos diarios'],
    cons: ['Derechos de autor en evolución', 'A veces repetitivo', 'Control fino limitado'],
    tags: ['Suno', 'música', 'canciones', 'voz'],
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Voces sintéticas ultra realistas',
    description:
      'ElevenLabs es la plataforma líder en síntesis de voz con IA. Ofrece clonación de voz, text-to-speech en múltiples idiomas y voces emocionales de altísima calidad.',
    category: 'audio',
    pricing: 'freemium',
    rating: 4.6,
    url: 'https://elevenlabs.io',
    features: [
      'Text-to-speech en 30+ idiomas',
      'Clonación de voz con minutos de audio',
      'Control de emoción y entonación',
      'API para desarrolladores',
      'Sonidos y efectos generados con IA',
    ],
    useCases: [
      'Audiolibros y narración',
      'Doblaje y localización de contenido',
      'Asistentes de voz personalizados',
      'Accibilidad para contenido visual',
    ],
    pros: ['Las voces más realistas del mercado', 'Soporte multilingüe excelente', 'API potente', 'Plan gratuito funcional'],
    cons: ['Clonación de voz plantea cuestiones éticas', 'Plan gratuito limitado en caracteres', 'Latencia en tiempo real'],
    tags: ['ElevenLabs', 'voz', 'TTS', 'clonación'],
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    tagline: 'IA integrada en tu espacio de trabajo',
    description:
      'Notion AI integra asistencia de inteligencia artificial directamente en tu workspace de Notion. Resume páginas, redacta contenido, traduce, responde preguntas sobre tus notas y automatiza tareas.',
    category: 'productividad',
    pricing: 'de-pago',
    rating: 4.3,
    url: 'https://www.notion.so/product/ai',
    features: [
      'Resumen automático de páginas y bases de datos',
      'Generación y mejora de texto inline',
      'Q&A sobre todo tu workspace',
      'Extracción de acciones y decisiones',
      'Traducción y corrección',
    ],
    useCases: [
      'Gestión del conocimiento en equipos',
      'Resumen de reuniones y documentos',
      'Búsqueda inteligente en notas',
      'Automatización de tareas repetitivas',
    ],
    pros: ['Integración perfecta con Notion', 'Contexto de todo el workspace', 'Fácil adopción para equipos', 'Mejora continua'],
    cons: ['Solo disponible dentro de Notion', 'Costo adicional a la suscripción', 'Menos potente que IA dedicada'],
    tags: ['Notion', 'productividad', 'workspace', 'Q&A'],
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    tagline: 'El motor de búsqueda con IA que cita fuentes',
    description:
      'Perplexity combina búsqueda web con IA conversacional, proporcionando respuestas con citas verificables. Ideal para investigación, estudio y preguntas que requieren información actualizada.',
    category: 'texto',
    pricing: 'freemium',
    rating: 4.5,
    url: 'https://www.perplexity.ai',
    features: [
      'Respuestas con citas de fuentes reales',
      'Búsqueda en tiempo real',
      'Páginas de investigación con fuentes organizadas',
      'Focus en dominios específicos',
      'Subidas de archivos para análisis',
    ],
    useCases: [
      'Investigación académica y profesional',
      'Verificación de hechos',
      'Resumen de temas actuales',
      'Comparación de fuentes de información',
    ],
    pros: ['Cita sus fuentes', 'Información actualizada', 'Excelente para investigación', 'Plan gratuito útil'],
    cons: ['Menos capaz en razonamiento profundo', 'A veces las fuentes no son las mejores', 'Pro Focus con costo adicional'],
    tags: ['Perplexity', 'búsqueda', 'citas', 'investigación'],
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    tagline: 'Diseño asistido por IA en Figma',
    description:
      'Figma AI trae capacidades de inteligencia artificial al editor de diseño más popular. Genera layouts, renombra capas, busca componentes, crea prototipos rapid y escribe código a partir de diseños.',
    category: 'diseno',
    pricing: 'freemium',
    rating: 4.2,
    url: 'https://www.figma.com/ai',
    features: [
      'Generación de layouts desde texto',
      'Renombrado automático de capas',
      'Búsqueda visual de componentes',
      'Make it pretty: mejora estética automática',
      'Conversión de diseño a código',
    ],
    useCases: [
      'Prototipado rápido de interfaces',
      'Organización de archivos de diseño',
      'Generación de variantes de diseño',
      'Handoff diseño a código',
    ],
    pros: ['Integrado en la herramienta líder de diseño', 'Ahorra tiempo en tareas repetitivas', 'Mejora continua', 'Disponible en plan gratuito'],
    cons: ['Funcionalidades aún en desarrollo', 'Resultados a veces requieren ajuste', 'Limitado al ecosistema Figma'],
    tags: ['Figma', 'diseño', 'UI', 'prototipado'],
  },
  {
    id: 'canva-ai',
    name: 'Canva Magic Studio',
    tagline: 'Suite de IA para diseño sin experiencia',
    description:
      'Canva Magic Studio es un conjunto de herramientas de IA dentro de Canva que permite generar diseños, imágenes, textos y presentaciones con instrucciones simples, sin necesidad de conocimientos de diseño.',
    category: 'diseno',
    pricing: 'freemium',
    rating: 4.3,
    url: 'https://www.canva.com/magic-studio',
    features: [
      'Magic Design: diseños completos desde texto',
      'Magic Write: generación y mejora de texto',
      'Magic Edit: edición de imágenes con IA',
      'Magic Presentation: presentaciones automáticas',
      'Traducción y redimensionamiento automático',
    ],
    useCases: [
      'Diseño de redes sociales sin experiencia',
      'Presentaciones rápidas',
      'Marketing para pequeñas empresas',
      'Materiales educativos visuales',
    ],
    pros: ['Muy fácil de usar', 'Todo en una plataforma', 'Plan gratuito generoso', 'Ideal para no diseñadores'],
    cons: ['Menos control profesional', 'Resultados genéricos a veces', 'Funciones avanzadas de pago'],
    tags: ['Canva', 'diseño', 'marketing', 'presentaciones'],
  },
];

export function getToolById(id: string): AITool | undefined {
  return aiTools.find((t) => t.id === id);
}

export function getToolsByCategory(category: Category): AITool[] {
  return aiTools.filter((t) => t.category === category);
}

export function searchTools(query: string): AITool[] {
  const q = query.toLowerCase().trim();
  if (!q) return aiTools;
  return aiTools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      t.useCases.some((uc) => uc.toLowerCase().includes(q))
  );
}
