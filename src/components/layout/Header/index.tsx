import Navigation from '@/components/features/Navigation'
import { fetchHeaderData } from '@/lib/fetchHeaderData'
import Logo from '@/components/ui/Logo'
import HeaderWrapper from '@/components/layout/Header/HeaderWrapper'

const Header = async () => {
  const headerData = await fetchHeaderData()

  return (
    <HeaderWrapper>
      <Logo />
      <Navigation items={headerData.header} />
    </HeaderWrapper>
  )
}

export default Header
