import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoHoursSchema = z.object({
  scheduleTitle: i18nStringSchema,
  scheduleValue: i18nStringSchema,
  promoTitle: i18nStringSchema,
  promoValue: i18nStringSchema,
  _orbi: orbiSchema,
})

export default sectionMolinoHoursSchema
