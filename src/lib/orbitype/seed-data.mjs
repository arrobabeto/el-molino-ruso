/** Starter CMS rows — single source for mock mode and `pnpm run cms:seed`. */

const now = () => new Date().toISOString()

const API_KEYS_URL = "https://app.orbitype.com/settings/api-keys"

export function buildSeedPages({
  hasSqlKeyConfigured = false,
  apiKeysUrl = API_KEYS_URL,
} = {}) {
  void hasSqlKeyConfigured
  void apiKeysUrl

  return [
    {
      id: "seed-home",
      slug: "home",
      title: {
        es: "Inicio",
        en: "Home",
      },
      lead: {
        es: "Panadería de especialidad en el corazón de San Luis Potosí.",
        en: "Specialty bakery in the heart of San Luis Potosí.",
      },
      img: "",
      keywords: [
        "panadería",
        "san luis potosí",
        "pan artesanal",
        "el molino ruso",
      ],
      head: {},
      created_at: now(),
      updated_at: now(),
      sections: [
        {
          title: {
            es: "El Molino Ruso",
            en: "El Molino Ruso",
          },
          lead: {
            es: "Pan artesanal, repostería y tradición rusa con ingredientes de calidad. Horneamos cada día en San Luis Potosí.",
            en: "Artisan bread, pastries and Russian tradition with quality ingredients. Baked fresh daily in San Luis Potosí.",
          },
          ctaLabel: {
            es: "Conoce nuestros productos",
            en: "Discover our products",
          },
          ctaHref: "/posts",
          img: "",
          _orbi: { component: "SectionHero" },
        },
        {
          title: {
            es: "Lo que nos distingue",
            en: "What sets us apart",
          },
          lead: {
            es: "Recetas de tradición europea, fermentación lenta y productos hechos a mano.",
            en: "European tradition recipes, slow fermentation and handmade products.",
          },
          items: [
            {
              title: {
                es: "Pan de fermentación lenta",
                en: "Slow-fermented bread",
              },
              text: {
                es: "Masa madre y tiempos de reposo que desarrollan sabor y textura únicos.",
                en: "Sourdough and resting times that develop unique flavor and texture.",
              },
            },
            {
              title: {
                es: "Repostería de especialidad",
                en: "Specialty pastries",
              },
              text: {
                es: "Brioche, croissants, pasteles y dulces inspirados en la tradición rusa y europea.",
                en: "Brioche, croissants, cakes and sweets inspired by Russian and European tradition.",
              },
            },
            {
              title: {
                es: "Ingredientes selectos",
                en: "Select ingredients",
              },
              text: {
                es: "Harinas de calidad, mantequilla europea y recetas cuidadas en cada lote.",
                en: "Quality flours, European butter and carefully crafted recipes in every batch.",
              },
            },
          ],
          _orbi: { component: "SectionFeatureGrid" },
        },
        {
          title: {
            es: "Visítanos en San Luis Potosí",
            en: "Visit us in San Luis Potosí",
          },
          lead: {
            es: "Pasa por nuestra panadería y descubre el aroma del pan recién horneado.",
            en: "Stop by our bakery and discover the aroma of freshly baked bread.",
          },
          ctaLabel: {
            es: "Contáctanos",
            en: "Contact us",
          },
          ctaHref: "/contacto",
          _orbi: { component: "SectionCta" },
        },
      ],
    },
  ]
}

export function buildSeedPosts() {
  return [
    {
      id: "seed-post-1",
      title: {
        es: "Nuestra historia",
        en: "Our story",
      },
      lead: {
        es: "<p>El Molino Ruso nace de la pasión por el pan artesanal y las recetas de tradición europea en San Luis Potosí.</p>",
        en: "<p>El Molino Ruso was born from a passion for artisan bread and European tradition recipes in San Luis Potosí.</p>",
      },
      img: "",
      status: {
        options: ["draft", "review", "published"],
        value: "published",
      },
      keywords: ["historia", "panadería", "san luis potosí"],
      created_at: now(),
      updated_at: now(),
      sections: [
        {
          title: {
            es: "Tradición y oficio",
            en: "Tradition and craft",
          },
          content: {
            es: "<p>Cada pieza que sale de nuestro horno refleja años de aprendizaje, técnicas de fermentación lenta y el cuidado por los detalles. En El Molino Ruso combinamos la herencia de la panadería rusa con ingredientes locales de la mejor calidad.</p>",
            en: "<p>Every item from our oven reflects years of learning, slow fermentation techniques and attention to detail. At El Molino Ruso we combine Russian baking heritage with the finest local ingredients.</p>",
          },
          _orbi: { component: "SectionProse" },
        },
      ],
    },
  ]
}
