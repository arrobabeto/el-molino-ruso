import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const blockSchema = z.object({
  title: i18nStringSchema,
  paragraphs: z.array(i18nStringSchema).optional(),
})

export const sectionMolinoStorySchema = z.object({
  blocks: z.array(blockSchema).optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoStorySchema
