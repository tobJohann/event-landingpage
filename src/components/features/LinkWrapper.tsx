import { HeaderNavProps, LinkProps } from '@/payload-types'
import { Box } from '@mui/material'
import Link from 'next/link'

type Props = {
  data: HeaderNavProps[0]['link']
  children: React.ReactNode
}

const LinkWrapper: React.FC<Props> = ({ data, children }) => {
  if (
    !data ||
    (data.type === 'reference' && data.reference && typeof data.reference.value === 'string')
  )
    return <>{children}</>

  switch (data.type) {
    case 'custom':
      return (
        <Box component={'a'} href={data.url ?? ''} target={data.newTab ? '_blank' : '_self'}>
          {children}
        </Box>
      )
    case 'reference':
      if (data.reference && typeof data.reference.value !== 'string' && data.reference.value.slug)
        return <Link href={`/${data.reference.value.slug}`}>{children}</Link>
    //@ts-ignore
    case 'anchor':
      //@ts-ignore
      if (data.anchor) return <Link href={`/#${data.anchor}`}>{children}</Link>
    case 'callToAction':
      return <Link href={'/shop'}>{children}</Link>
  }

  return <>{children}</>
}
export default LinkWrapper
