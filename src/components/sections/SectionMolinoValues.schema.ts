import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const itemSchema = z.object({
  title: i18nStringSchema,
  text: i18nStringSchema,
})

export const sectionMolinoValuesSchema = z.object({
  title: i18nStringSchema,
  items: z.array(itemSchema).optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoValuesSchema
