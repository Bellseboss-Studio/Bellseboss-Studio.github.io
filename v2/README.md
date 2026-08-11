# Bellseboss Studio v2

Sitio web del estudio de videojuegos, construido con Astro (estatico, zero JS runtime).

## Requisitos

- Node.js 18+
- npm

## Instalacion

```bash
cd v2
npm install
```

## Desarrollo (hot reload)

```bash
npm run dev
```

Abre `http://localhost:4300/v2` en el navegador. Los cambios se reflejan al instante.

## Compilacion para produccion

```bash
npm run build
```

Genera los archivos estaticos en `dist/`. Este es el contenido que se sube a GitHub Pages.

## Preview de produccion

```bash
npm run preview
```

Sirve el build de `dist/` localmente para verificar que todo funcione antes de deployar.

## Estructura

```
v2/
├── src/
│   ├── components/  # Nav, Hero, Games, Team, Services, Footer
│   ├── data/        # Contenido editable (juegos, equipo, estudio)
│   ├── layouts/     # Layout base con SEO
│   ├── pages/       # index, privacy, terms
│   └── styles/      # Design tokens y animaciones
├── public/images/   # Fotos del equipo
└── dist/            # Build de produccion (no editar)
```

## Editar contenido

- **Juegos:** edita `src/data/games.ts`
- **Equipo:** edita `src/data/team.ts`
- **Info del estudio:** edita `src/data/studio.ts`
