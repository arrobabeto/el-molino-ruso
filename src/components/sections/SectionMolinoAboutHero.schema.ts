import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoAboutHeroSchema = z.object({
  title: i18nStringSchema,
  lead: i18nStringSchema,
  img: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoAboutHeroSchema
