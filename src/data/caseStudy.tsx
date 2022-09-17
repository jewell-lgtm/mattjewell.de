import { z } from "zod"

export const CaseStudy = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  md: z.string(),
})

export type CaseStudy = z.infer<typeof CaseStudy>
