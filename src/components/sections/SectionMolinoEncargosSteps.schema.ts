import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const stepSchema = z.object({
  label: i18nStringSchema,
  value: i18nStringSchema,
})

export const sectionMolinoEncargosStepsSchema = z.object({
  title: i18nStringSchema,
  lead: i18nStringSchema,
  steps: z.array(stepSchema).optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoEncargosStepsSchema
