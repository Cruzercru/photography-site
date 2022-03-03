import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY_PUBLISHABLE!, {apiVersion: '2020-08-27'});
    }

    return stripePromise;
};

export default getStripe;