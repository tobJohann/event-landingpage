import { mailerApi } from '@/mailer/api'
import { Participant } from '@/payload-types'
import { AxiosError } from 'axios'

const MAILING_LISTS = {
  event_participants: 15,
  event_newsletter: 5,
}

export const addUserToMailingList = async (data: Participant, list: keyof typeof MAILING_LISTS) => {
  try {
    await mailerApi.post('contacts', {
      email: data.email,
      listIds: [MAILING_LISTS[list]],
      updateEnabled: true,
      ext_id: `PPM_EP:${data.id}`,
      attributes: {
        EMAIL: data.email,
        FULL_NAME: data.name,
        JOB_TITLE: data.position,
        COMPANY: data.company,
      },
    })
  } catch (e) {
    console.error('BREVO ERROR')
    if (e instanceof AxiosError && e.response) {
      console.error(e.response.data)
    }
    throw e
  }
}
