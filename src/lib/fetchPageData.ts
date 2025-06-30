import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Page as PageProps } from '@/payload-types'
import { notFound } from 'next/navigation'

export const revalidate = 1

export const fetchPageData = async ({ slug, options }: { slug?: string; options?: any }) => {
  const payload = await getPayload({ config: configPromise })

  if (!slug) {
    const generalData = await payload.findGlobal({
      slug: 'general',
      select: { homepage: true },
    })
    return { data: generalData.homepage as PageProps }
  }

  const pageResult = await payload.find({
    collection: 'pages',
    depth: 2,
    limit: 1,
    pagination: false,
    //@ts-ignore
    ...options,
    where: {
      slug: { equals: slug },
    },
  })

  if (pageResult.docs.length > 1) throw new Error('NO UNIQUE SLUG')
  if (pageResult.docs.length === 0) return notFound()
  return { data: pageResult.docs[0] as PageProps }
}
