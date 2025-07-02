import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, CreditCard, ArrowRight, Zap, Clock, Users, CheckCircle } from 'lucide-react';
import ProductDetail from './ProductDetail';
import { handleBuyNow } from '../utils/payment';

const ProductCard = ({ product }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Courses': return '🎓';
      case 'Templates': return '🎨';
      case 'Starter Kits': return '🚀';
      case 'Libraries': return '📚';
      default: return '📦';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Courses': return 'from-emerald-500 to-teal-600';
      case 'Templates': return 'from-purple-500 to-pink-600';
      case 'Starter Kits': return 'from-orange-500 to-red-600';
      case 'Libraries': return 'from-blue-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/10"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500 to-red-600 rounded-full blur-2xl"></div>
        </div>

        <div className="relative flex flex-col lg:flex-row min-h-[280px]">
          {/* Left Section - Image & Badges */}
          <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 flex items-center justify-center">
              <div className="text-8xl opacity-20">{getCategoryIcon(product.category)}</div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(product.category)} border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-xl shadow-lg`}>
                {product.category}
              </span>
            </div>

            {/* Special Badges */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              {product.bestSeller && (
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 border border-yellow-400/50 rounded-full text-yellow-100 text-xs font-bold backdrop-blur-xl shadow-lg flex items-center gap-1">
                  <Zap size={12} />
                  Best Seller
                </span>
              )}
              {product.originalPrice > product.price && (
                <span className="px-3 py-1 bg-gradient-to-r from-red-500/90 to-pink-500/90 border border-red-400/50 rounded-full text-red-100 text-xs font-bold backdrop-blur-xl shadow-lg">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <button 
                onClick={() => setIsDetailOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Eye size={18} />
                Quick View
              </button>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-xl border border-gray-700/50">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-white">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 truncate">{feature}</span>
                  </div>
                ))}
                {product.features.length > 4 && (
                  <div className="col-span-2">
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
                      +{product.features.length - 4} more features
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-white">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsDetailOpen(true)}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <Eye size={16} />
                    Details
                  </button>
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                  >
                    <CreditCard size={16} />
                    Buy Now
                    <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </motion.div>

      {/* Quick View Modal */}
      <ProductDetail
        product={product}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
};

export default ProductCard; 