const { STRIPE_KEY, STRIPE_PRICE_ID, NEXT_PUBLIC_SERVER_URL } = process.env
// eslint-disable-next-line @typescript-eslint/no-require-imports
const stripe = require('stripe')(STRIPE_KEY)

export type LineItem = {
  price: string
  quantity: number
}

export const checkout = async (items: LineItem[], priceSlug: string) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: `${NEXT_PUBLIC_SERVER_URL}/shop/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${NEXT_PUBLIC_SERVER_URL}/shop/${priceSlug}?sessionId={CHECKOUT_SESSION_ID}`,
    invoice_creation: { enabled: true },
    automatic_tax: { enabled: true },
    line_items: items,
  })
  return session
}

export const validate = async (sessionId: string) => {
  const session = await getSession(sessionId)
  return session.payment_status === 'paid'
}
export const getSession = async (sessionId: string) =>
  await stripe.checkout.sessions.retrieve(sessionId)
