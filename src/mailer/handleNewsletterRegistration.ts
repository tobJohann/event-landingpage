import { mailerApi } from '@/mailer/api'

const { NEXT_PUBLIC_SERVER_URL } = process.env

type DoiData = {
  email: string
  ext_id?: string
  attributes: {
    FULL_NAME?: string | null
    COMPANY?: string | null
    JOB_TITLE?: string | null
  }
}

export const handleNewsletterRegistration = async (data: DoiData) => {
  if (!NEXT_PUBLIC_SERVER_URL) throw new Error('SERVER_URL not set')

  const mailerData = {
    ...data,
    params: {
      name: data.attributes.FULL_NAME,
    },
    includeListIds: [5],
    templateId: 6,
    redirectionUrl: `${NEXT_PUBLIC_SERVER_URL}/newsletter/success`,
  }
  await mailerApi.post('contacts/doubleOptinConfirmation', mailerData)
}
