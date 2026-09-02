import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoChefSchema = z.object({
  name: i18nStringSchema,
  eyebrow: i18nStringSchema,
  role: i18nStringSchema,
  paragraphs: z.array(i18nStringSchema).optional(),
  signOff: i18nStringSchema,
  signature: i18nStringSchema,
  img: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoChefSchema
