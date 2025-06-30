import * as z from 'zod'

export const newsletterSchema = z.object({
  name: z.string().optional(),
  jobPosition: z.string().optional(),
  company: z.string().optional(),
  email: z.string().email('Bitte geben Sie eine gültige Email-Adresse ein.'),
  privacy: z.boolean().refine((val) => val, 'Bitte akzeptieren Sie unsere Datenschutzbestimmungen'),
})
export type NewsletterFormValues = z.infer<typeof newsletterSchema>
