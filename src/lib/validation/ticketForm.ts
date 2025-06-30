import * as z from 'zod'
import { ZodError, ZodIssue } from 'zod'

export const validateDuplicateEmailsInTickets = (ticketData: { email: string }[]) => {
  const seen = new Map<string, number[]>()

  ticketData.forEach((ticket, index) => {
    const email = ticket.email.toLowerCase()
    if (!seen.has(email)) {
      seen.set(email, [index])
    } else {
      seen.get(email)!.push(index)
    }
  })

  const issues: ZodIssue[] = []

  seen.forEach((indexes, email) => {
    if (indexes.length > 1) {
      indexes.forEach((index) => {
        issues.push({
          code: 'custom',
          message: `Die E-Mail-Adresse "${email}" wurde mehrfach verwendet.`,
          path: ['ticketData', index, 'email'],
        })
      })
    }
  })

  if (issues.length > 0) throw new ZodError(issues)
}

export const basicSchema = z.object({
  ticketData: z
    .array(
      z.object({
        name: z.string().min(1, 'Bitte geben Sie einen Namen an.'),
        email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse an.'),
        company: z.string().optional(),
        jobPosition: z.string().optional(),
      }),
    )
    .min(1),

  newsletter: z.boolean(),
  privacy: z.boolean().refine((val) => val, {
    message: 'Bitte bestätigen Sie die Datenschutzerklärung und AGB.',
  }),
})

export const ticketFormSchema = {
  ...basicSchema,
  parse: (data: TicketFormData) => {
    const res = basicSchema.parse(data)
    validateDuplicateEmailsInTickets(data.ticketData)
    return res
  },
}

export type TicketFormData = z.infer<typeof basicSchema>
