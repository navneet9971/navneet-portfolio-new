import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Get product details from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    const productName = urlParams.get('name');
    const amount = urlParams.get('amount');

    if (productId) {
      setProductDetails({
        id: productId,
        name: productName || 'Digital Product',
        amount: amount || '0'
      });
    }
  }, []);

  return (
    <>
      <SEOHead 
        title="Payment Successful - Navneet Portfolio"
        description="Thank you for your purchase! Your digital product is ready for download."
        keywords="payment success, digital product, download"
      />
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={48} className="text-white" />
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Payment Successful!
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Thank you for your purchase! Your digital product is ready for download.
              </p>
            </motion.div>

            {/* Product Details */}
            {productDetails && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl border border-gray-600/30 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {productDetails.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  Amount Paid: ${productDetails.amount}
                </p>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-sm">Payment Confirmed</span>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Download size={20} />
                  Download Product
                </button>
                <button className="flex-1 border-2 border-gray-600/50 hover:border-blue-400/50 text-gray-300 hover:text-blue-400 py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 backdrop-blur-sm flex items-center justify-center gap-3">
                  <Mail size={20} />
                  Check Email
                </button>
              </div>
              
              <button 
                onClick={() => router.push('/products')}
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <ArrowLeft size={16} />
                Back to Products
              </button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Download size={24} className="text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Download</h4>
                  <p className="text-gray-400">Access your digital product immediately</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail size={24} className="text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-400">Check your email for download links</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={24} className="text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Support</h4>
                  <p className="text-gray-400">Contact us if you need help</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PaymentSuccess; 