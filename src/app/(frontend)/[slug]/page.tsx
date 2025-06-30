import RenderHero from '@/heros/RenderHero'
import RenderBlocks from '@/blocks/RenderBlocks'
import { fetchPageData } from '@/lib/fetchPageData'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const Page = async ({ params: paramsPromise }: Args) => {
  const { slug } = await paramsPromise
  const { data: pageData } = await fetchPageData({ slug })

  return (
    <>
      <RenderHero data={pageData.hero} />
      <RenderBlocks blocks={pageData.layout} />
    </>
  )
}

export default Page
