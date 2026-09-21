export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: Author;
  date: string;
  readingTime: number;
  coverImage: string;
  featured: boolean;
  content: string[];
  tags: string[];
}

export type ArticleCategory =
  | 'Guías'
  | 'Comparativas'
  | 'Noticias'
  | 'Tutoriales'
  | 'Opinión';

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface AITool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  pricing: 'Gratis' | 'Freemium' | 'De pago';
  rating: number;
  logo: string;
  features: string[];
  website: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export type ToolCategory =
  | 'Texto'
  | 'Imagen'
  | 'Video'
  | 'Audio'
  | 'Código'
  | 'Productividad'
  | 'Diseño'
  | 'Análisis'
  | 'Marketing'
  | 'Educación'
  | 'Investigación';
