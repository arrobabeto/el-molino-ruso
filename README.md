# El Molino Ruso

Sitio web de **El Molino Ruso**, panadería de especialidad en San Luis Potosí, México. Construido con [Astro](https://astro.build) y [Orbitype](https://www.orbitype.com) como CMS.

Pan artesanal, repostería y tradición rusa con ingredientes de calidad. Las páginas se componen desde secciones JSON del CMS, el SEO se renderiza en servidor y el caché CDN usa tags nativos de Astro/`@astrojs/vercel`.

> Proyecto basado en el template [orbitype-astro-template](https://github.com/arrobabeto/orbitype-astro-template).

---

## Inicio rápido

```bash
corepack enable
pnpm install
pnpm run setup
pnpm dev
```

Abre `http://localhost:4321`. No se necesitan credenciales — el proyecto arranca en **modo mock** con contenido de ejemplo hasta conectar el CMS.

Nota: usa `pnpm run setup` (con `run`). `pnpm setup` es un comando integrado de pnpm y no ejecuta el script del proyecto.

## Requisitos

- Node **24.x** (ver `.nvmrc` / `.node-version` / `engines`)
- pnpm 11, vía `corepack enable`

## Scripts

| Script                  | Propósito                                              |
| ----------------------- | ------------------------------------------------------ |
| `pnpm dev`              | Servidor de desarrollo en el puerto 4321               |
| `pnpm run build`        | Build de producción (según `RENDER_MODE`)              |
| `pnpm run build:server` | Build en modo servidor                                 |
| `pnpm run build:static` | Build con prerender estático                           |
| `pnpm run setup`        | Crea `.env` desde `.env.example`, sync de tipos, husky |
| `pnpm run cms:install`  | Instala el schema del CMS (CLI)                        |
| `pnpm run cms:seed`     | Siembra contenido inicial                              |
| `pnpm run lint`         | ESLint                                                 |
| `pnpm run typecheck`    | `astro check`                                          |
| `pnpm run verify`       | Lint, typecheck, e2e y builds (mock)                   |

No hay script `astro preview`: `@astrojs/vercel` no lo soporta. Usa `pnpm dev` localmente o un deploy de preview en Vercel.

## Configuración del proyecto

| Variable                   | Valor actual                                                   |
| -------------------------- | -------------------------------------------------------------- |
| `PUBLIC_SITE_NAME`         | El Molino Ruso                                                 |
| `PUBLIC_ORGANIZATION_NAME` | El Molino Ruso                                                 |
| `PUBLIC_SITE_DESCRIPTION`  | Panadería de especialidad en San Luis Potosí                   |
| `PUBLIC_SITE_URL` (prod)   | `https://elmolinoruso.com` (pendiente de configurar en Vercel) |
| Locale                     | `es` (español)                                                 |

### Conectar Orbitype CMS

1. Reemplaza `public/favicon.svg` con el logo de la panadería.
2. Configura las variables `PUBLIC_*` en `.env` — en producción usa `https://`, nunca localhost.
3. Crea una API key SQL en Orbitype; configura `ORBITYPE_API_SQL_KEY` y `ORBITYPE_MOCK=false`.
4. Ejecuta `pnpm run cms:install` y luego `pnpm run cms:seed` desde una máquina autorizada.
5. Ajusta los tokens de diseño en `src/styles/global.css` (colores cálidos de panadería ya aplicados).
6. Edita el contenido del CMS: home con `SectionHero`, `SectionFeatureGrid` y `SectionCta`.

## Documentación del template

| Documento                                                      | Contenido                            |
| -------------------------------------------------------------- | ------------------------------------ |
| [docs/00-TEMPLATE-BLUEPRINT.md](docs/00-TEMPLATE-BLUEPRINT.md) | Arquitectura y contrato Orbitype     |
| [docs/01-orbitype-cms.md](docs/01-orbitype-cms.md)             | Guía del CMS para operadores         |
| [docs/03-deployment.md](docs/03-deployment.md)                 | Vercel, modos de render y revalidate |
| [docs/02-sections-cookbook.md](docs/02-sections-cookbook.md)   | Catálogo de secciones disponibles    |

## Licencia

Propietario — El Molino Ruso.
