import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoBandCtaSchema = z.object({
  title: i18nStringSchema,
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
  variant: z.enum(["dark", "olive"]).optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoBandCtaSchema
