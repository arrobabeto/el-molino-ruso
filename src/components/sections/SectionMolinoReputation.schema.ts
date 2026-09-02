import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const badgeSchema = z.object({
  label: i18nStringSchema,
  value: i18nStringSchema,
})

export const sectionMolinoReputationSchema = z.object({
  title: i18nStringSchema,
  badges: z.array(badgeSchema).optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoReputationSchema
