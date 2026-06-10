import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TgPmv9HXG5BNw4ISI4z47Rc',
    'seeker_premium': 'price_1TgU7H9HXG5BNw4IOQC2m0WT',
    'recruiter_growth': 'price_1TgU889HXG5BNw4INw7FGOAg',
    'recruiter_enterprise': 'price_1TgU8o9HXG5BNw4IKcmJS1bF'
}