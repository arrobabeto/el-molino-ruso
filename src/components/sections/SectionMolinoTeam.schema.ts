import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoTeamSchema = z.object({
  title: i18nStringSchema,
  lead: i18nStringSchema,
  img: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoTeamSchema
