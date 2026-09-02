import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const itemSchema = z.object({
  author: i18nStringSchema,
  rating: i18nStringSchema,
  quote: i18nStringSchema,
  source: i18nStringSchema,
})

export const sectionMolinoTestimonialsSchema = z.object({
  title: i18nStringSchema,
  lead: i18nStringSchema,
  img: z.string().optional(),
  items: z.array(itemSchema).optional(),
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoTestimonialsSchema
