import { handleNewsletterRegistration } from '@/mailer/handleNewsletterRegistration'
import { newsletterSchema } from '@/lib/validation/newsletterRegisterForm'
import { ZodError } from 'zod'
import { Axios, AxiosError } from 'axios'

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const data = newsletterSchema.parse(body)
    await handleNewsletterRegistration({
      email: data.email,
      attributes: {
        FULL_NAME: data.name,
        JOB_TITLE: data.jobPosition,
        COMPANY: data.company,
      },
    })

    return new Response(JSON.stringify({ message: 'ok' }), { status: 201 })
  } catch (e) {
    if (e instanceof ZodError)
      return new Response(JSON.stringify(e), { status: 423, statusText: 'ZodError' })

    console.error(e)
    if (e instanceof AxiosError && e.response) console.error(e.response)
    return new Response(JSON.stringify({ message: 'Server Error' }), { status: 500 })
  }
}
