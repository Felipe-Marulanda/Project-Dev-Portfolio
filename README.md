# Dev Portfolio

Portafolio digital de Juan Felipe Castro Marulanda, estudiante de Ingeniería de Sistemas en la UCEVA. Presenta su perfil, habilidades y proyectos en una aplicación Angular standalone preparada para GitHub Pages.

## Tecnologías

- Angular 22 y TypeScript estricto
- SCSS y componentes standalone
- Vitest para pruebas unitarias
- GitHub Actions y GitHub Pages

## Requisitos

- Node.js 24 o superior compatible con Angular 22
- npm

## Instalación y desarrollo

```bash
npm ci
npm start
```

La aplicación de desarrollo se sirve en `http://localhost:4200/`.

## Scripts

| Comando         | Descripción            |
| --------------- | ---------------------- |
| `npm start`     | Servidor de desarrollo |
| `npm test`      | Pruebas unitarias      |
| `npm run build` | Build de producción    |

## Publicación

- URL de GitHub Pages configurada: <https://felipe-marulanda.github.io/Project-Dev-Portfolio/>
- Repositorio: <https://github.com/Felipe-Marulanda/Project-Dev-Portfolio>

El workflow `.github/workflows/deploy.yml` ejecuta las pruebas, construye con el `base-href` del repositorio, publica el artefacto en GitHub Pages y verifica que la URL responda HTTP 200. La salida incluye `404.html` como fallback para las rutas de Angular.

## Estructura

```text
src/app/
  core/layout/       Navbar y footer
  components/        Tarjetas de proyecto y badges de habilidades
  data/              Datos tipados de proyectos, perfil y habilidades
  models/            Interfaces y tipos de dominio
  pages/             Inicio, catálogo de proyectos y perfil/contacto
```

## Convención de commits

Se usa Conventional Commits en español o inglés: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ci`, `build` y `style`. Cada cambio debe ser atómico y describir su propósito.

## Proyectos

El catálogo enlaza el repositorio y la URL de Pages prevista para cada proyecto. Storage Manager es una demostración de APIs del navegador; sus despliegues se completarán cuando GitHub Actions esté disponible.
