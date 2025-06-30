import { Participant } from '@/payload-types'
import { mailerApi } from './api'

export const sendParticipantConfirmation = async (data: Participant) => {
  const TEMPLATE_ID = 8

  const sendConfig = {
    to: [{ name: data.name, email: data.email }],
    templateId: TEMPLATE_ID,
  }
  try {
    await mailerApi.post('smtp/email', sendConfig)
  } catch (e) {
    console.log(e)
    throw e
  }
}
