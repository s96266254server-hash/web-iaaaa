import { LucideIcon } from 'lucide-react';
import {
  PenLine, Megaphone, Code, GraduationCap, Stethoscope,
  Palette, Briefcase, TrendingUp, Scale, Languages,
  Film, HeartPulse, Brain, ShoppingCart,
} from 'lucide-react';

export interface UseCase {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  description: string;
  fields: UseCaseField[];
  tools: string[];
  promptHint: string;
}

export interface UseCaseField {
  name: string;
  description: string;
}

export const useCases: UseCase[] = [
  {
    id: 'escritura',
    icon: PenLine,
    title: 'Escritura y redacción',
    shortDesc: 'Correos, blogs, ensayos, guiones y todo tipo de textos',
    description: 'La IA puede redactar, corregir, traducir y adaptar cualquier tipo de texto. Desde un correo urgente hasta un artículo de blog completo, la IA es tu redactor junior disponible 24/7.',
    fields: [
      { name: 'Correos profesionales', description: 'Redacta correos con el tono perfecto para cualquier situación laboral.' },
      { name: 'Blogs y artículos', description: 'Genera borradores completos que tú solo tienes que editar y personalizar.' },
      { name: 'Corrección de textos', description: 'Detecta errores gramaticales, ortográficos y de estilo en segundos.' },
      { name: 'Guiones para vídeo', description: 'Crea guiones para YouTube, TikTok o presentaciones con estructura narrativa.' },
      { name: 'Traducción con contexto', description: 'Traduce manteniendo el tono, la cultura y las expresiones idiomáticas.' },
      { name: 'Resúmenes y síntesis', description: 'Convierte documentos de 50 páginas en un resumen de una página.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Jasper', 'Notion AI'],
    promptHint: 'Actúa como un redactor profesional y escribe un artículo sobre [TEMA]...',
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing y publicidad',
    shortDesc: 'Estrategias, campañas, copywriting y contenido para redes',
    description: 'La IA está revolucionando el marketing: genera copy persuasivo, planifica campañas, analiza competencia y crea contenido a escala que antes requería todo un equipo.',
    fields: [
      { name: 'Copywriting', description: 'Textos persuasivos para landing pages, anuncios y emails que convierten.' },
      { name: 'Estrategia de contenidos', description: 'Calendarios editoriales completos con temas, formatos y canales.' },
      { name: 'Análisis de competencia', description: 'Estudia a tus competidores y encuentra oportunidades de mercado.' },
      { name: 'SEO', description: 'Investigación de palabras clave, meta descripciones y contenido optimizado.' },
      { name: 'Redes sociales', description: 'Posts, hashtags, ideas virales y estrategias por plataforma.' },
      { name: 'Email marketing', description: 'Secuencias completas de emails, asuntos y newsletters.' },
    ],
    tools: ['ChatGPT', 'Jasper', 'Perplexity', 'Gamma'],
    promptHint: 'Actúa como un director de marketing y crea un plan para [PRODUCTO]...',
  },
  {
    id: 'programacion',
    icon: Code,
    title: 'Programación y desarrollo',
    shortDesc: 'Escribir, depurar y explicar código en cualquier lenguaje',
    description: 'Los copilotos de IA escriben funciones, corrigen bugs, generan tests y explican código ajeno. Programar con IA multiplica tu productividad y reduce barreras de entrada.',
    fields: [
      { name: 'Generación de código', description: 'Describe lo que necesitas y la IA escribe la función o componente completo.' },
      { name: 'Debugging', description: 'Pega tu código con error y la IA encuentra y soluciona el problema.' },
      { name: 'Explicación de código', description: 'Entiende cualquier fragmento de código, incluso sin documentación.' },
      { name: 'Tests automáticos', description: 'Genera unit tests y test de integración para tu código.' },
      { name: 'Refactoring', description: 'Mejora la estructura del código sin cambiar su funcionalidad.' },
      { name: 'Documentación', description: 'Crea documentación técnica y comentarios automáticamente.' },
    ],
    tools: ['GitHub Copilot', 'Cursor', 'Claude', 'ChatGPT'],
    promptHint: 'Actúa como un senior developer en [LENGUAJE] y revisa este código...',
  },
  {
    id: 'educacion',
    icon: GraduationCap,
    title: 'Educación y aprendizaje',
    shortDesc: 'Tutores personalizados, planes de estudio y explicaciones a medida',
    description: 'La IA democratiza el acceso a la educación con tutores personalizados disponibles 24/7, que adaptan el ritmo y el estilo a cada estudiante.',
    fields: [
      { name: 'Tutoría personalizada', description: 'La IA explica conceptos a tu ritmo y nivel, cuantas veces necesites.' },
      { name: 'Planes de estudio', description: 'Rutas de aprendizaje estructuradas con objetivos y recursos.' },
      { name: 'Preparación de exámenes', description: 'Preguntas de práctica, simulacros y explicación de respuestas.' },
      { name: 'Idiomas', description: 'Conversación práctica, corrección de pronunciación y gramática.' },
      { name: 'Investigación', description: 'Síntesis de fuentes, resumen de artículos científicos y bibliografía.' },
      { name: 'Feedback de trabajos', description: 'Revisión de redacciones y proyectos con sugerencias de mejora.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Perplexity', 'Duolingo Max'],
    promptHint: 'Actúa como un tutor de [MATERIA] y crea un plan de estudio para...',
  },
  {
    id: 'salud',
    icon: Stethoscope,
    title: 'Salud y bienestar',
    shortDesc: 'Información médica accesible, seguimiento de hábitos y apoyo mental',
    description: 'La IA no reemplaza al médico, pero ayuda a entender síntomas, llevar seguimiento de hábitos saludables y ofrece apoyo en salud mental las 24 horas.',
    fields: [
      { name: 'Información médica', description: 'Explicación de síntomas, medicamentos y condiciones en lenguaje claro.' },
      { name: 'Plan nutricional', description: 'Menús y dietas personalizados según tus objetivos y restricciones.' },
      { name: 'Rutinas de ejercicio', description: 'Planes de entrenamiento adaptados a tu nivel, tiempo y equipo.' },
      { name: 'Salud mental', description: 'Conversaciones de apoyo, técnicas de relajación y gestión del estrés.' },
      { name: 'Seguimiento de hábitos', description: 'Análisis de tu progreso y recomendaciones para mantener hábitos.' },
      { name: 'Preparación de consultas', description: 'Te ayuda a preparar preguntas para tu médico y entender el diagnóstico.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Perplexity'],
    promptHint: 'Actúa como un nutricionista y crea un plan de comidas para [OBJETIVO]...',
  },
  {
    id: 'diseno',
    icon: Palette,
    title: 'Diseño y creatividad',
    shortDesc: 'Imágenes, logos, ilustraciones y arte generado por IA',
    description: 'La IA generativa ha democratizado el diseño: cualquiera puede crear imágenes profesionales, ilustraciones y conceptos artísticos con una simple descripción de texto.',
    fields: [
      { name: 'Generación de imágenes', description: 'Crea cualquier imagen desde una descripción textual.' },
      { name: 'Diseño de logos', description: 'Prototipos de logos e identidad visual en segundos.' },
      { name: 'Ilustración', description: 'Arte digital para libros, artículos, portadas y más.' },
      { name: 'Edición de fotos', description: 'Elimina fondos, extiende imágenes y retoca con IA.' },
      { name: 'Presentaciones', description: 'Slides profesionales generadas a partir de un texto.' },
      { name: 'Diseño web', description: 'Maquetas y prototipos de interfaces con IA.' },
    ],
    tools: ['Midjourney', 'Stable Diffusion', 'Gamma', 'Leonardo AI'],
    promptHint: 'Genera una imagen de [DESCRIPCIÓN] en estilo [ESTILO]...',
  },
  {
    id: 'negocio',
    icon: Briefcase,
    title: 'Negocio y emprendimiento',
    shortDesc: 'Planes de negocio, análisis financiero y estrategia',
    description: 'La IA es como tener un consultor de McKinsey disponible en cualquier momento: analiza mercados, proyecta finanzas y ayuda a tomar decisiones estratégicas.',
    fields: [
      { name: 'Planes de negocio', description: 'Estructura completa: mercado, propuesta de valor, finanzas y estrategia.' },
      { name: 'Análisis financiero', description: 'Proyecciones, ratios y interpretación de estados financieros.' },
      { name: 'Estudio de mercado', description: 'Tamaño de mercado, tendencias, segmentación y competencia.' },
      { name: 'Estrategia de precios', description: 'Modelos de pricing, análisis de elasticidad y posicionamiento.' },
      { name: 'Pitch deck', description: 'Presentaciones para inversores con narrativa persuasiva.' },
      { name: 'Automatización de procesos', description: 'Identifica qué tareas delegar en IA y cómo implementarlo.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Perplexity', 'Notion AI'],
    promptHint: 'Actúa como un consultor de estrategia y analiza [MERCADO]...',
  },
  {
    id: 'productividad',
    icon: TrendingUp,
    title: 'Productividad y organización',
    shortDesc: 'Gestión del tiempo, automatización de tareas y organización personal',
    description: 'La IA te ayuda a organizar tu vida: prioriza tareas, resume reuniones, gestiona tu correo y automatiza lo repetitivo para que te concentres en lo importante.',
    fields: [
      { name: 'Gestión de tareas', description: 'Prioriza tu lista de tareas y crea un plan de acción diario.' },
      { name: 'Resumen de reuniones', description: 'Convierte notas o transcripciones en actas con tareas y decisiones.' },
      { name: 'Gestión de correo', description: 'Clasifica, redacta respuestas y archiva tu bandeja de entrada.' },
      { name: 'Planificación de proyectos', description: 'Desglosa proyectos en fases, hitos y entregables.' },
      { name: 'Toma de notas inteligente', description: 'Organiza y conecta tus notas automáticamente.' },
      { name: 'Automatizaciones', description: 'Conecta herramientas y automatiza flujos de trabajo.' },
    ],
    tools: ['Notion AI', 'ChatGPT', 'Perplexity', 'Gamma'],
    promptHint: 'Organiza mi semana con estas tareas: [LISTA]. Prioriza por urgencia e importancia...',
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal y administrativo',
    shortDesc: 'Contratos, documentos legales y comprensión de normativa',
    description: 'La IA no es un abogado, pero puede redactar contratos básicos, explicar cláusulas complejas y ayudarte a entender la normativa que afecta a tu negocio.',
    fields: [
      { name: 'Contratos básicos', description: 'Redacta contratos de servicios, NDA, prestación de servicios, etc.' },
      { name: 'Comprensión de cláusulas', description: 'Traduce el lenguaje legal a español claro y comprensible.' },
      { name: 'Documentos administrativos', description: 'Cartas formales, solicitudes y comunicaciones oficiales.' },
      { name: 'Cumplimiento normativo', description: 'Explica qué normativa aplica a tu actividad (RGPD, etc.).' },
      { name: 'Revisión de términos', description: 'Analiza términos y condiciones antes de aceptarlos.' },
      { name: 'Modelos de documentos', description: 'Genera plantillas reutilizables para tu negocio.' },
    ],
    tools: ['ChatGPT', 'Claude'],
    promptHint: 'Actúa como un abogado especializado en [ÁREA] y redacta un contrato de [TIPO]...',
  },
  {
    id: 'idiomas',
    icon: Languages,
    title: 'Idiomas y traducción',
    shortDesc: 'Traducción, conversación práctica y aprendizaje de idiomas',
    description: 'La IA es el compañero de idiomas perfecto: traduce con contexto, mantiene conversaciones en cualquier idioma y corrige tu pronunciación y gramática.',
    fields: [
      { name: 'Traducción contextual', description: 'Traduce manteniendo el significado, el tono y las expresiones idiomáticas.' },
      { name: 'Conversación práctica', description: 'Diálogos en el idioma que aprendes a tu nivel y sobre tu interés.' },
      { name: 'Corrección gramatical', description: 'Corrige tus textos y explica por qué algo es incorrecto.' },
      { name: 'Pronunciación', description: 'Guías de pronunciación y detección de errores comunes.' },
      { name: 'Localización', description: 'Adapta contenido a la cultura y variante regional del idioma.' },
      { name: 'Vocabulario especializado', description: 'Aprende terminología específica de tu profesión en otro idioma.' },
    ],
    tools: ['ChatGPT', 'Claude', 'ElevenLabs', 'Duolingo Max'],
    promptHint: 'Actúa como mi profesor de [IDIOMA]. Corrige mis errores y explícame por qué...',
  },
  {
    id: 'audiovisual',
    icon: Film,
    title: 'Audio y vídeo',
    shortDesc: 'Música, voz, edición de vídeo y transcripción automática',
    description: 'La IA genera canciones, sintetiza voces, transcribe audio y edita vídeo. La producción audiovisual al alcance de cualquiera, sin equipo técnico ni estudio.',
    fields: [
      { name: 'Generación de música', description: 'Crea canciones completas con voz, letra e instrumentación.' },
      { name: 'Síntesis de voz', description: 'Genera narraciones realistas en múltiples idiomas y voces.' },
      { name: 'Transcripción', description: 'Convierte audio o vídeo a texto con precisión profesional.' },
      { name: 'Edición de vídeo', description: 'Cortes automáticos, subtítulos y efectos visuales con IA.' },
      { name: 'Doblaje', description: 'Traduce y dobla tus vídeos a otros idiomas manteniendo el tono.' },
      { name: 'Podcasts', description: 'Edición, resúmenes, show notes y clips promocionales.' },
    ],
    tools: ['Suno AI', 'ElevenLabs', 'Runway ML', 'ChatGPT'],
    promptHint: 'Genera una canción de [GÉNERO] sobre [TEMA] con [ESTADO DE ÁNIMO]...',
  },
  {
    id: 'desarrollo-personal',
    icon: Brain,
    title: 'Desarrollo personal',
    shortDesc: 'Coaching, hábitos, reflexión y toma de decisiones',
    description: 'La IA puede ser tu coach personal: te ayuda a reflexionar, establecer metas, crear hábitos y tomar decisiones difíciles con un enfoque estructurado.',
    fields: [
      { name: 'Coaching personal', description: 'Conversaciones estructuradas que te ayudan a clarificar tus objetivos.' },
      { name: 'Creación de hábitos', description: 'Planes de hábitos basados en ciencia, con seguimiento y motivación.' },
      { name: 'Toma de decisiones', description: 'Análisis de pros y contras, escenarios y marcos de decisión.' },
      { name: 'Reflexión guiada', description: 'Preguntas poderosas que te ayudan a pensar con profundidad.' },
      { name: 'Gestión emocional', description: 'Técnicas de mindfulness, identificación de emociones y estrategias.' },
      { name: 'Definición de metas', description: 'Sistema SMART para establecer objetivos realistas y alcanzables.' },
    ],
    tools: ['ChatGPT', 'Claude'],
    promptHint: 'Actúa como mi coach personal. Quiero mejorar en [ÁREA] y necesito un plan...',
  },
];
