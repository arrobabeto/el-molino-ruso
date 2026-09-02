import { z } from "zod"
import { i18nStringSchema, orbiSchema } from "~/lib/section-schema-base"

const linkSchema = z.object({
  label: i18nStringSchema,
  href: z.string(),
})

export const sectionMolinoContactSchema = z.object({
  title: i18nStringSchema,
  phone: i18nStringSchema,
  email: i18nStringSchema,
  address: i18nStringSchema,
  callLabel: i18nStringSchema,
  whatsappLabel: i18nStringSchema,
  socialTitle: i18nStringSchema,
  socialLinks: z.array(linkSchema).optional(),
  followLabel: i18nStringSchema,
  _orbi: orbiSchema,
})

export default sectionMolinoContactSchema
