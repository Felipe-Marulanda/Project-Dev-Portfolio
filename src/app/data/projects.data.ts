import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    number: '01',
    title: 'Dev Portfolio',
    category: 'Portafolio personal',
    description:
      'Catálogo digital de proyectos y perfil profesional, construido como una aplicación Angular accesible y preparada para GitHub Pages.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Actions'],
    highlights: ['Diseño adaptable', 'Componentes standalone', 'Despliegue automatizado'],
    repositoryUrl: 'https://github.com/Felipe-Marulanda/Project-Dev-Portfolio',
    appUrl: 'https://felipe-marulanda.github.io/Project-Dev-Portfolio/',
  },
  {
    number: '02',
    title: 'Storage Manager',
    category: 'Librería y showcase',
    description:
      'Librería Angular para trabajar con LocalStorage y Cache Storage, acompañada por un showcase interactivo que demuestra sus operaciones.',
    technologies: ['Angular', 'TypeScript', 'LocalStorage', 'Cache API'],
    highlights: ['Persistencia en el navegador', 'Gestión de caché', 'Sin backend obligatorio'],
    repositoryUrl: 'https://github.com/Felipe-Marulanda/Project-Store-Manager',
    appUrl: 'https://felipe-marulanda.github.io/Project-Store-Manager/',
  },
  {
    number: '03',
    title: 'Taller Clean Architecture',
    category: 'Arquitectura de software',
    description:
      'Cliente Angular con datos locales de demostración para órdenes, categorías y publicaciones; Node.js y Spring Boot quedan como backends opcionales.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Spring Boot'],
    highlights: [
      'Separación por capas',
      'Contratos compartidos',
      'Datos locales sin backend',
    ],
    repositoryUrl: 'https://github.com/Felipe-Marulanda/Taller-Clean-Architecture',
    appUrl: 'https://felipe-marulanda.github.io/Taller-Clean-Architecture/',
  },
  {
    number: '04',
    title: 'Patrones de diseño con Deno',
    category: 'Patrones de diseño',
    description:
      'Colección de ejercicios TypeScript ejecutables con Deno que aplica patrones creacionales, estructurales y de comportamiento.',
    technologies: ['Deno', 'TypeScript', 'Patrones de diseño'],
    highlights: [    '24 ejemplos prácticos', 'Ejercicios independientes', 'Sin servicios externos'],
    repositoryUrl: 'https://github.com/Felipe-Marulanda/Uceva-Deno-Design-Patterns',
    appUrl: 'https://felipe-marulanda.github.io/Uceva-Deno-Design-Patterns/',
  },
  {
    number: '05',
    title: 'Uceva Pipeline App',
    category: 'Laboratorio CI/CD',
    description:
      'Aplicación Angular del laboratorio de pipelines de la UCEVA, con vistas de inicio, acerca de y contacto, y navegación por hash.',
    technologies: ['Angular', 'TypeScript', 'Vitest', 'GitHub Actions'],
    highlights: [
      'Sin backend obligatorio',
      'Hash routing para GitHub Pages',
      'Build y pruebas automatizados',
    ],
    repositoryUrl: 'https://github.com/Felipe-Marulanda/Uceva-Pipeline-App',
    appUrl: 'https://felipe-marulanda.github.io/Uceva-Pipeline-App/',
  },
];
