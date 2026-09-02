import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoFinalCtaSchema = z.object({
  title: i18nStringSchema,
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoFinalCtaSchema
