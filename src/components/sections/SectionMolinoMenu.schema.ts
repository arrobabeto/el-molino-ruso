import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const itemSchema = z.object({
  name: i18nStringSchema,
  price: i18nStringSchema,
  description: i18nStringSchema,
  img: z.string().optional(),
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
})

export const sectionMolinoMenuSchema = z.object({
  title: i18nStringSchema,
  lead: i18nStringSchema,
  items: z.array(itemSchema).optional(),
  disclaimer: i18nStringSchema,
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoMenuSchema
