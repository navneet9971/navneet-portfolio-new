import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Check, CreditCard } from 'lucide-react';
import { handleBuyNow } from '../utils/payment';

const ProductDetail = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-gray-800/95 via-gray-700/95 to-gray-800/95 rounded-3xl border border-gray-600/30 backdrop-blur-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-600/30">
                <h2 className="text-2xl font-bold text-white">Product Details</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-600/50 rounded-full transition-colors duration-300"
                >
                  <X size={24} className="text-gray-300" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                      <div className="text-8xl text-gray-400">📦</div>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.bestSeller && (
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/80 to-orange-500/80 border border-yellow-400/50 rounded-full text-yellow-100 text-sm font-bold backdrop-blur-xl">
                          Best Seller
                        </span>
                      )}
                      {product.originalPrice > product.price && (
                        <span className="px-4 py-2 bg-gradient-to-r from-red-500/80 to-pink-500/80 border border-red-400/50 rounded-full text-red-100 text-sm font-bold backdrop-blur-xl">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/20 px-4 py-2 rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Star size={20} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-lg text-gray-300 font-semibold">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {product.name}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-white">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">
                        Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                              <Check size={16} className="text-green-400" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buy Now Button */}
                    <div className="pt-6">
                      <button 
                        onClick={() => {
                          handleBuyNow(product);
                          onClose();
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-4"
                      >
                        <CreditCard size={28} />
                        Buy Now - ${product.price}
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="pt-6 border-t border-gray-600/30">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Availability:</span>
                          <span className="text-green-400 ml-2">In Stock</span>
                        </div>
                        <div>
                          <span className="text-gray-400">SKU:</span>
                          <span className="text-gray-300 ml-2">PROD-{product.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetail; 