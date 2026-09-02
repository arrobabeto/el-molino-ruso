import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoDifferentiatorsSchema = z.object({
  title: i18nStringSchema,
  paragraphs: z.array(i18nStringSchema).optional(),
  ctaLabel: i18nStringSchema,
  ctaHref: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoDifferentiatorsSchema
