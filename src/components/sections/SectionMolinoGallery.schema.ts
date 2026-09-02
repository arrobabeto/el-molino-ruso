import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const itemSchema = z.object({
  img: z.string().optional(),
  alt: i18nStringSchema,
})

export const sectionMolinoGallerySchema = z.object({
  title: i18nStringSchema,
  items: z.array(itemSchema).optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoGallerySchema
