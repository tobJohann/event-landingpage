import RenderSteps from './_steps/RenderSteps'
import PageClient from './page.client'
import ShopProvider from './ShopProvider'
import { fetchActiveEvent } from '@/lib/fetchActiveEvent'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Args = {
  params: Promise<{
    context?: string
    slug?: string
  }>
}

const Shop = async ({ params: paramsPromise }: Args) => {
  const [{ context }, event] = await Promise.all([paramsPromise, fetchActiveEvent()])

  if (!context) return notFound()

  return (
    <ShopProvider event={event} context={context}>
      <Suspense>
        <PageClient eventData={event} ctx={context}>
          <RenderSteps />
        </PageClient>
      </Suspense>
    </ShopProvider>
  )
}
export default Shop
