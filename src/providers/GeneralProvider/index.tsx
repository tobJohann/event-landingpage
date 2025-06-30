import configPromise from '@/payload.config'
import { ReactNode } from 'react'
import { getPayload } from 'payload'
import GeneralClientProvider from '@/providers/GeneralProvider/GeneralClientProvider'

type Props = {
  children: ReactNode
}

const GeneralProvider: React.FC<Props> = async ({ children }) => {
  const data = await fetchGeneralData()
  return <GeneralClientProvider data={data}>{children}</GeneralClientProvider>
}

const fetchGeneralData = async () => {
  const payload = await getPayload({ config: configPromise })
  return await payload.findGlobal({ slug: 'general' })
}

export default GeneralProvider
