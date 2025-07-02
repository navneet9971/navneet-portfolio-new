// Payment Gateway Integration
export const initiatePayment = (product) => {
  // This is a placeholder for payment gateway integration
  // You can integrate with Stripe, PayPal, Razorpay, or any other payment gateway
  
  const paymentData = {
    amount: product.price * 100, // Convert to cents/smallest currency unit
    currency: 'USD',
    productId: product.id,
    productName: product.name,
    description: product.description,
    customerEmail: '', // Will be collected in payment form
  };

  // For now, we'll redirect to a payment form
  // In production, integrate with your preferred payment gateway
  console.log('Initiating payment for:', product.name, 'Amount:', product.price);
  
  // Example: Redirect to payment gateway
  // window.location.href = `https://your-payment-gateway.com/pay?amount=${paymentData.amount}&currency=${paymentData.currency}&product=${product.id}`;
  
  // For demo purposes, show an alert
  alert(`Redirecting to payment gateway for ${product.name} - $${product.price}`);
  
  // You can replace this with actual payment gateway integration
  // Example with Stripe:
  // stripe.redirectToCheckout({
  //   lineItems: [{
  //     price_data: {
  //       currency: 'usd',
  //       product_data: {
  //         name: product.name,
  //         description: product.description,
  //       },
  //       unit_amount: paymentData.amount,
  //     },
  //     quantity: 1,
  //   }],
  //   mode: 'payment',
  //   successUrl: `${window.location.origin}/payment-success`,
  //   cancelUrl: `${window.location.origin}/products`,
  // });
};

export const handleBuyNow = (product) => {
  // Validate product availability
  if (!product.inStock) {
    alert('Sorry, this product is currently out of stock.');
    return;
  }
  
  // Show payment form or redirect to payment gateway
  showPaymentForm(product);
};

// Alternative: Direct redirect to payment gateway (uncomment to use)
// export const handleBuyNow = (product) => {
//   if (!product.inStock) {
//     alert('Sorry, this product is currently out of stock.');
//     return;
//   }
//   
//   redirectToPaymentGateway(product);
// };

const showPaymentForm = (product) => {
  // Create a simple payment form modal
  const formHTML = `
    <div id="payment-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-gradient-to-br from-gray-800/95 via-gray-700/95 to-gray-800/95 rounded-3xl border border-gray-600/30 backdrop-blur-xl shadow-2xl max-w-md w-full p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-white">Complete Purchase</h2>
          <button onclick="closePaymentForm()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <div class="mb-6 p-4 bg-gray-700/50 rounded-2xl border border-gray-600/30">
          <h3 class="text-lg font-semibold text-white mb-2">${product.name}</h3>
          <p class="text-gray-300 text-sm mb-3">${product.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-white">$${product.price}</span>
            ${product.originalPrice > product.price ? `<span class="text-gray-500 line-through">$${product.originalPrice}</span>` : ''}
          </div>
        </div>
        
        <form id="payment-form" class="space-y-4">
          <div>
            <label class="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
            <input type="email" name="email" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-700/70 transition-all duration-300" placeholder="your@email.com">
          </div>
          
          <div>
            <label class="block text-gray-300 text-sm font-medium mb-2">Card Number</label>
            <input type="text" name="cardNumber" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-700/70 transition-all duration-300" placeholder="1234 5678 9012 3456">
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-300 text-sm font-medium mb-2">Expiry Date</label>
              <input type="text" name="expiry" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-700/70 transition-all duration-300" placeholder="MM/YY">
            </div>
            <div>
              <label class="block text-gray-300 text-sm font-medium mb-2">CVV</label>
              <input type="text" name="cvv" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-700/70 transition-all duration-300" placeholder="123">
            </div>
          </div>
          
          <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Pay $${product.price}
          </button>
        </form>
        
        <div class="mt-4 text-center">
          <p class="text-xs text-gray-400">Your payment is secure and encrypted</p>
        </div>
      </div>
    </div>
  `;

  // Add the form to the page
  document.body.insertAdjacentHTML('beforeend', formHTML);
  
  // Add close function to window
  window.closePaymentForm = () => {
    const modal = document.getElementById('payment-modal');
    if (modal) {
      modal.remove();
    }
  };
  
  // Handle form submission
  document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the payment data to your backend
    // For demo purposes, we'll redirect to success page
    const formData = new FormData(e.target);
    const email = formData.get('email') || 'customer@example.com';
    
    // Redirect to success page with product details
    const successUrl = `/payment-success?product=${product.id}&name=${encodeURIComponent(product.name)}&amount=${product.price}&email=${encodeURIComponent(email)}`;
    window.location.href = successUrl;
  });
};

// Alternative: Direct redirect to payment gateway
export const redirectToPaymentGateway = (product) => {
  // Example with different payment gateways
  
  // Stripe
  // window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
  
  // PayPal
  // window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your-email&item_name=${product.name}&amount=${product.price}&currency_code=USD`;
  
  // Razorpay (for Indian payments)
  // const options = {
  //   key: 'your-razorpay-key',
  //   amount: product.price * 100,
  //   currency: 'INR',
  //   name: 'Your Company',
  //   description: product.name,
  //   handler: function(response) {
  //     // Handle success
  //   }
  // };
  // const rzp = new Razorpay(options);
  // rzp.open();
  
  // For demo, just show an alert
  alert(`Redirecting to payment gateway for ${product.name} - $${product.price}`);
}; 