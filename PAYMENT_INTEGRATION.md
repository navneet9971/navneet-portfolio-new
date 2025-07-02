# Payment Integration Guide

This guide explains how to integrate real payment gateways with the current setup.

## Current Implementation

The current implementation includes:
- Direct "Buy Now" buttons on product cards
- A payment form modal for collecting payment details
- A payment success page for handling successful payments
- Removed cart functionality as requested

## Files Modified

1. **`components/ProductCard.js`** - Removed cart and wishlist functionality, added direct buy button
2. **`components/ProductDetail.js`** - Removed cart and wishlist functionality, added direct buy button
3. **`pages/products.js`** - Removed cart state management and ShoppingCart component
4. **`components/ShoppingCart.js`** - Deleted (no longer needed)
5. **`utils/payment.js`** - Created payment utility with form and gateway integration
6. **`pages/payment-success.js`** - Created success page for payment completion

## Integration Options

### Option 1: Stripe Integration

1. Install Stripe:
```bash
npm install @stripe/stripe-js
```

2. Update `utils/payment.js`:
```javascript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

export const handleBuyNow = async (product) => {
  if (!product.inStock) {
    alert('Sorry, this product is currently out of stock.');
    return;
  }
  
  const stripe = await stripePromise;
  
  // Create checkout session on your backend
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId: product.id,
      productName: product.name,
      amount: product.price,
    }),
  });
  
  const session = await response.json();
  
  // Redirect to Stripe Checkout
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
  
  if (result.error) {
    alert(result.error.message);
  }
};
```

3. Create API route `pages/api/create-checkout-session.js`:
```javascript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { productId, productName, amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/products`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
```

### Option 2: PayPal Integration

1. Install PayPal SDK:
```bash
npm install @paypal/react-paypal-js
```

2. Update `utils/payment.js`:
```javascript
export const handleBuyNow = (product) => {
  if (!product.inStock) {
    alert('Sorry, this product is currently out of stock.');
    return;
  }
  
  // Redirect to PayPal
  const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your-paypal-email&item_name=${encodeURIComponent(product.name)}&amount=${product.price}&currency_code=USD&return=${encodeURIComponent(window.location.origin + '/payment-success')}&cancel_return=${encodeURIComponent(window.location.origin + '/products')}`;
  
  window.location.href = paypalUrl;
};
```

### Option 3: Razorpay Integration (for Indian payments)

1. Install Razorpay:
```bash
npm install razorpay
```

2. Update `utils/payment.js`:
```javascript
export const handleBuyNow = (product) => {
  if (!product.inStock) {
    alert('Sorry, this product is currently out of stock.');
    return;
  }
  
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: product.price * 100, // Convert to paise
    currency: 'INR',
    name: 'Your Company Name',
    description: product.name,
    handler: function(response) {
      // Handle successful payment
      window.location.href = `/payment-success?product=${product.id}&name=${encodeURIComponent(product.name)}&amount=${product.price}`;
    },
    prefill: {
      email: '',
      contact: ''
    },
    theme: {
      color: '#3B82F6'
    }
  };
  
  const rzp = new Razorpay(options);
  rzp.open();
};
```

## Environment Variables

Add these to your `.env.local` file:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## Backend Integration

For production, you'll need to:

1. **Create a backend API** to handle payment processing
2. **Store order information** in a database
3. **Send confirmation emails** to customers
4. **Handle webhooks** from payment gateways
5. **Implement proper security** measures

## Security Considerations

1. **Never expose secret keys** in client-side code
2. **Validate payments** on the server side
3. **Use HTTPS** in production
4. **Implement proper error handling**
5. **Add rate limiting** to prevent abuse
6. **Validate product availability** before processing payments

## Testing

1. Use test credentials provided by payment gateways
2. Test both successful and failed payment scenarios
3. Test mobile responsiveness
4. Test different currencies and payment methods
5. Test webhook handling

## Current Demo Mode

The current implementation shows a payment form modal for demonstration purposes. To use real payment gateways, replace the `handleBuyNow` function in `utils/payment.js` with one of the integration examples above. 