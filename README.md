# Portafolio — React + Tailwind

Plantilla base de portafolio creada con Vite, React y Tailwind CSS. Incluye una estructura mínima de componentes y ejemplos de proyectos.

Contenido
 - `index.html` — entrada HTML
 - `src/main.jsx` — punto de montaje
 - `src/App.jsx` — componente principal
 - `src/index.css` — estilos (Tailwind)
 - `src/components/` — componentes reutilizables (`Header`, `ProjectCard`)
 - `src/data/projects.js` — datos de ejemplo para los proyectos

Scripts

- `npm run dev` — inicia el servidor de desarrollo (Vite)
- `npm run build` — construye la app para producción
- `npm run preview` — sirve la build de producción localmente

Instalación rápida

1. Instalar dependencias (si aún no están instaladas):

```powershell
npm install react react-dom
npm install -D vite tailwindcss postcss autoprefixer @tailwindcss/postcss
```

2. Iniciar servidor de desarrollo:

```powershell
npm run dev
```

Estructura y personalización

 - Reemplaza el contenido de `src/data/projects.js` con tus proyectos reales.
 - Añade más componentes dentro de `src/components/` (por ejemplo `Footer`, `ProjectList`, etc.).
 - Si quieres rutas/ páginas separadas, puedes añadir `react-router-dom` y crear un sistema de rutas.

Despliegue

 - Puedes desplegar la carpeta `dist/` (generada por `npm run build`) en servicios estáticos como GitHub Pages, Netlify o Vercel.

Consideraciones

 - Esta plantilla no incluye linters ni TypeScript por defecto. Si quieres que añada ESLint/Prettier o migre a TypeScript, dime y lo hago.

Contribuir

1. Haz un fork o crea una rama nueva.
2. Haz tus cambios y abre un Pull Request explicando lo que añadiste.

Licencia

MIT — ver `LICENSE`.