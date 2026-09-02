import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoLocationSchema = z.object({
  title: i18nStringSchema,
  address: i18nStringSchema,
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
  mapEmbed: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoLocationSchema
