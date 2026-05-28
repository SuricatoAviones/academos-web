# Academos Web

Sitio web institucional de **Academos**, academia de tecnologia enfocada en formacion para adultos, jovenes y diplomados.

## Tabla de contenidos

1. [Resumen](#resumen)
2. [Tecnologias](#tecnologias)
3. [Requisitos previos](#requisitos-previos)
4. [Instalacion y arranque local](#instalacion-y-arranque-local)
5. [Variables de entorno](#variables-de-entorno)
6. [Scripts disponibles](#scripts-disponibles)
7. [Arquitectura del proyecto](#arquitectura-del-proyecto)
8. [Rutas y navegacion](#rutas-y-navegacion)
9. [Gestion de contenido](#gestion-de-contenido)
10. [SEO y metadatos](#seo-y-metadatos)
11. [Build y despliegue](#build-y-despliegue)
12. [Despliegue en Plesk (Apache)](#despliegue-en-plesk-apache)
13. [Resolucion de problemas](#resolucion-de-problemas)
14. [Mejoras recomendadas](#mejoras-recomendadas)

## Resumen

Este proyecto implementa una landing institucional con:

- Hero principal
- Seccion sobre nosotros
- Catalogo de cursos para adultos
- Catalogo de cursos para jovenes
- Diplomados
- Contacto
- Redes sociales
- Pagina 404 personalizada
- Paginas estaticas de error por codigo HTTP en `/errores/[code]`

El proyecto esta construido como **sitio estatico** con Astro (`output: "static"`), listo para despliegue tradicional en hosting compartido (incluyendo Plesk).

## Tecnologias

- [Astro 6](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (integrado con Astro)
- TypeScript (configuracion estricta base de Astro)

## Requisitos previos

- Node.js 18.20+ (recomendado 20 LTS)
- npm 9+

Verifica versiones:

```bash
node -v
npm -v
```

## Instalacion y arranque local

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el entorno de desarrollo:

```bash
npm run dev
```

3. Abre el sitio en:

```text
http://localhost:4321
```

## Variables de entorno

La URL base del sitio se obtiene desde `astro.config.mjs` en este orden:

1. `PUBLIC_SITE_URL`
2. `SITE_URL`
3. Fallback: `https://www.academos.com.ve/`

Puedes crear un archivo `.env` en la raiz:

```env
PUBLIC_SITE_URL=https://www.tudominio.com/
```

> Recomendacion: define esta variable en desarrollo y produccion para que canonical y Open Graph apunten al dominio correcto.

## Scripts disponibles

Desde la raiz del proyecto:

- `npm run dev`: inicia servidor local de desarrollo
- `npm run build`: genera el build de produccion en `dist/`
- `npm run preview`: previsualiza el build generado
- `npm run astro`: ejecuta comandos de Astro CLI

## Arquitectura del proyecto

```text
/
├── public/                      # Archivos estaticos copiados tal cual al build
│   └── .htaccess               # Reglas Apache/Plesk para rutas y 404 personalizada
├── src/
│   ├── assets/
│   │   ├── img/                # Imagenes de cursos
│   │   └── logos/              # Logos institucionales
│   ├── components/
│   │   ├── Sections/Home/      # Secciones de la home
│   │   ├── cards/              # Tarjetas de cursos
│   │   ├── Sliders/            # Slider reutilizable
│   │   └── ui/                 # Header, Footer, ErrorPage
│   ├── const/
│   │   └── index.ts            # Catalogos de cursos y errores HTTP
│   ├── layouts/
│   │   └── Layout.astro        # Layout base (SEO, OG, Header/Footer)
│   ├── pages/
│   │   ├── index.astro         # Home
│   │   ├── 404.astro           # Pagina 404 principal
│   │   └── errores/[code].astro# Paginas por codigo HTTP
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### Convenciones relevantes

- Alias de imports: `@/*` apunta a `src/*`.
- Las paginas de Astro en `src/pages` se convierten automaticamente en rutas.
- El build final siempre se publica desde `dist/`.

## Rutas y navegacion

### Rutas principales

- `/` -> pagina principal
- `/404.html` -> pagina 404 personalizada
- `/errores/:code/` -> paginas de error estaticas por codigo (400, 401, ..., 511)

### Navegacion interna (anchors)

El Header utiliza enlaces a secciones de la home:

- `#cursos-adultos`
- `#cursos-jovenes`
- `#diplomados`
- `#nosotros`
- `#contacto`

## Gestion de contenido

La mayor parte del contenido editable vive en archivos declarativos y componentes.

### 1) Cursos y mensajes de error

Archivo: `src/const/index.ts`

Incluye:

- `cursosAdultos`
- `cursosJovenes`
- `diplomados`
- `errorPages`

Para agregar/editar un curso:

1. Importa la imagen en el bloque de imports.
2. Agrega un nuevo objeto al arreglo correspondiente con:
   - `bgColor`
   - `titulo`
   - `texto`
   - `icono`

Para agregar/editar un error HTTP:

1. Modifica el arreglo `errorPages`.
2. Astro regenerara las rutas de `errores/[code]` durante el build.

### 2) Contenido de secciones

Las secciones de la home se componen desde `src/pages/index.astro`.

Cada seccion puede editarse en:

- `src/components/Sections/Home/Hero.astro`
- `src/components/Sections/Home/Nosotros.astro`
- `src/components/Sections/Home/CursoAdultos.astro`
- `src/components/Sections/Home/CursoJovenes.astro`
- `src/components/Sections/Home/Diplomados.astro`
- `src/components/Sections/Home/Contacto.astro`
- `src/components/Sections/Home/Siguenos.astro`

## SEO y metadatos

El layout base (`src/layouts/Layout.astro`) administra:

- `<title>` y `<meta name="description">`
- Canonical dinamico basado en `Astro.site`
- Open Graph (`og:title`, `og:description`, `og:image`, etc.)
- Twitter Cards
- `meta robots` (`index, follow` o `noindex, nofollow`)
- `structuredData` con `EducationalOrganization`

Para marcar una pagina como no indexable, usa:

```astro
<Layout noindex={true} />
```

## Build y despliegue

### Build de produccion

```bash
npm run build
```

Salida en:

```text
dist/
```

### Preview local del build

```bash
npm run preview
```

## Despliegue en Plesk (Apache)

El proyecto ya incluye `public/.htaccess`, que Astro copia automaticamente al `dist/.htaccess`.

Ese archivo contempla:

- Resolucion de rutas limpias
- Proteccion de archivos/directorios existentes
- `ErrorDocument 404 /404.html` para usar la pagina 404 personalizada en lugar de la default de Plesk

### Pasos recomendados

1. Ejecuta `npm run build`.
2. Sube **todo el contenido de `dist/`** al `httpdocs` de Plesk.
3. Verifica que el archivo `.htaccess` haya sido subido (archivo oculto).
4. En Plesk, habilita **Custom error documents**.
5. Prueba una ruta inexistente para confirmar que responde con la 404 personalizada.

## Resolucion de problemas

### Se muestra la 404 por defecto de Plesk

- Verifica que `.htaccess` exista en la raiz publicada.
- Confirma que Apache este leyendo `.htaccess` (AllowOverride habilitado por hosting).
- Revisa que `ErrorDocument 404 /404.html` este presente.

### Las rutas sin `.html` no funcionan

- Revisa reglas `RewriteRule` en `.htaccess`.
- Asegura que el archivo `index.html` exista para esa ruta en `dist/`.

### Canonical / Open Graph con dominio incorrecto

- Configura `PUBLIC_SITE_URL` con tu dominio final.
- Reconstruye con `npm run build`.

### Los cambios no se reflejan

- Limpia cache del navegador/CDN.
- Asegura que reemplazaste todos los archivos en `httpdocs`.

## Mejoras recomendadas

- Agregar script de `lint` y `format` para estandarizar cambios.
- Incorporar validaciones de accesibilidad y Lighthouse en CI.
- Crear paginas reales para rutas legales enlazadas en footer:
  - `/terminos-y-condiciones`
  - `/politica-de-datos`
- Definir flujo de contribucion (ramas, PR, checklist de QA).
