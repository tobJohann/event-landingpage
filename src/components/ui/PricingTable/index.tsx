import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface PricingTableProps {
  taxRate?: number
  items: {
    amount: number
    price: number
    name: string
  }[]
}

const TableBlock: React.FC<{ children: ReactNode; hideDivider?: boolean }> = ({
  children,
  hideDivider = false,
}) => {
  return (
    <Box
      sx={{
        py: 3,
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        justifyContent: 'space-between',
        textAlign: 'right',
        columnGap: '1.5rem',
        borderBottom: hideDivider ? 'none' : '2px solid hsla(0, 0%, 36%, 1)',
        width: '100%',
      }}
    >
      {children}
    </Box>
  )
}

const PricingTable: React.FC<PricingTableProps> = ({ taxRate = 0.19, items }) => {
  const handleItem = (item: PricingTableProps['items'][0], index: number) => {
    return (
      <>
        <Typography sx={{ textAlign: 'left' }}>
          <strong>{item.amount}</strong> × {item.name}
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>{(item.price * item.amount).toFixed(2)} €</Typography>
      </>
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.amount, 0)
  const tax = total * taxRate
  const totalWithTax = total + tax

  return (
    <Box sx={{ my: 1.5 }}>
      <TableBlock>{items.map(handleItem)}</TableBlock>
      <TableBlock>
        <Typography>Nettopreis</Typography>
        <Typography>{total.toFixed(2)} €</Typography>
        <Typography>19% MwSt.</Typography>
        <Typography>{tax.toFixed(2)} €</Typography>
      </TableBlock>
      <TableBlock hideDivider>
        <Typography sx={{ fontWeight: 700 }}>Gesamtpreis</Typography>
        <Typography sx={{ fontWeight: 700 }}>{totalWithTax.toFixed(2)} €</Typography>
      </TableBlock>
    </Box>
  )
}
export default PricingTable
