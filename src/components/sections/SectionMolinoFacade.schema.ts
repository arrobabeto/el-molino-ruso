import { z } from "zod"
import { orbiSchema } from "~/lib/section-schema-base"

export const sectionMolinoFacadeSchema = z.object({
  img: z.string().optional(),
  _orbi: orbiSchema,
})

export default sectionMolinoFacadeSchema
