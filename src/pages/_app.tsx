import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store/store';
import { CartProvider } from 'use-shopping-cart';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight, faChevronRight, faChevronLeft, faTimes, faBars, faChevronDown, faCartArrowDown, faCircleCheck, faTruckFast, faShield, faPaintBrush, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
import 'styles/global.css';

library.add(
    faArrowCircleRight, 
    faChevronRight,
    faChevronLeft,
    faChevronDown,
    faTimes,
    faBars,
    faInstagram,
    faFacebook,
    faCartArrowDown,
    faPaintBrush,
    faCircleCheck,
    faTruckFast,
    faShield,
    faShoppingCart
);

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <CartProvider
                cartMode="checkout-session"
                stripe={process.env.NEXT_PUBLIC_STRIPE_KEY_PUBLISHABLE || ''}
                currency="AUD"
            >
                <Component {...pageProps} />
            </CartProvider>
        </Provider>
    );
}

export default MyApp;