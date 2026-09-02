import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoHeroSchema = z.object({
  eyebrow: i18nStringSchema,
  title: i18nStringSchema,
  lead: i18nStringSchema,
  body: i18nStringSchema,
  primaryLabel: i18nStringSchema,
  primaryHref: z.string().optional(),
  secondaryLabel: i18nStringSchema,
  secondaryHref: z.string().optional(),
  img: z.string().optional(),
  skylineImg: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoHeroSchema
