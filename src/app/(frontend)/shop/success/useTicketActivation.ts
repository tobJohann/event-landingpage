import { useEffect, useState } from 'react'
import { FormState } from '@/types/form'
import { Participant } from '@/payload-types'
import { useParams, useSearchParams } from 'next/navigation'
import axios from 'axios'

const useTicketActivation = () => {
  const [state, setState] = useState<FormState>('loading')
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')
  const { slug } = useParams()

  useEffect(() => {
    axios
      .post('/api/ticket-activation', { sessionId, slug })
      .then(() => {
        setState('success')
      })
      .catch(() => {
        setState('error')
      })
  }, [])

  return { state }
}
export default useTicketActivation
