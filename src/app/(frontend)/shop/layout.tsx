import { ReactNode } from 'react'
import CenterPaperLayout from '@/components/layout/CenterPaperLayout'

interface ShopLayoutProps {
  children: ReactNode
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  return <CenterPaperLayout headline={'Ticketshop'}>{children}</CenterPaperLayout>
}
export default ShopLayout
