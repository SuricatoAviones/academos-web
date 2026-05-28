# Academos Web
Sitio web institucional de **Academos**, academia de tecnología orientada a formación para adultos, jóvenes y diplomados.

## Descripción
Este proyecto implementa la landing principal del portal con secciones de:
- Hero principal
- Sobre nosotros (misión y visión)
- Cursos para adultos
- Cursos para jóvenes
- Diplomados
- Contacto
- Bloque de redes sociales

Además, incluye páginas de error dinámicas por código HTTP en la ruta `errores/[code]`.

## Stack
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

## Estructura principal
```text
/
├── public/                      # Recursos públicos (imágenes estáticas globales)
├── src/
│   ├── assets/                  # Imágenes de cursos y logos
│   ├── components/
│   │   ├── Sections/Home/       # Secciones de la página principal
│   │   ├── Sliders/             # Slider reutilizable para cursos
│   │   ├── cards/               # Tarjeta de curso
│   │   └── ui/                  # Header, Footer y ErrorPage
│   ├── const/                   # Catálogos de cursos y errores HTTP
│   ├── layouts/                 # Layout base SEO/head/body
│   └── pages/                   # Rutas (index, 404 y errores dinámicos)
├── astro.config.mjs
└── package.json
```

## Scripts disponibles
Ejecuta estos comandos desde la raíz del proyecto:

- `npm install`: instala dependencias
- `npm run dev`: levanta servidor de desarrollo
- `npm run build`: genera build de producción
- `npm run preview`: previsualiza el build local
- `npm run astro`: ejecuta Astro CLI

## Notas
- El catálogo de cursos y los mensajes de errores HTTP se gestionan desde `src/const/index.ts`.
- La página principal se compone en `src/pages/index.astro`.
