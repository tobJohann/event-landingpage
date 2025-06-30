import { fetchActiveEvent } from '@/lib/fetchActiveEvent'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import { LineItem } from '@/payment'

const handlePriceItems = async (count: number, priceSlug: string): Promise<LineItem[]> => {
  const event = await fetchActiveEvent()
  const price = event.prices.find((price) => price.slug === priceSlug)
  if (!price) throw new PageNotFoundError('Price not found')

  if (!price.hasDiscount || (price.discount && price.discount.minTickets > count))
    return [{ quantity: count, price: price.stripeId }]

  if (price.hasDiscount && price.discount)
    return [
      {
        quantity: price.discount.minTickets,
        price: price.stripeId,
      },
      {
        quantity: count - price.discount.minTickets,
        price: price.discount.stripeId,
      },
    ]

  return []
}
export default handlePriceItems
