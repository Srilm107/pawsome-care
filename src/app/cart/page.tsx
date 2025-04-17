"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem } from "@/context/cart-context";
import { motion } from "framer-motion";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { items, totalItems, totalPrice } = state;
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link href="/products">
            <Button className="bg-pet-primary hover:bg-pet-primary/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Your Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex justify-between items-center pb-4 border-b">
              <h2 className="text-lg sm:text-xl font-semibold">
                Cart Items ({totalItems})
              </h2>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 flex items-center text-sm"
              >
                <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
              </button>
            </div>

            {/* Cart Item List */}
            <div className="divide-y">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6">
              <Link href="/products" className="text-pet-primary flex items-center hover:underline">
                <ArrowLeft className="h-4 w-4 mr-1" /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-24">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                <span>Estimated Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full mb-3">
              Proceed to Checkout
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Shipping, taxes, and discounts calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="py-6 flex flex-col sm:flex-row sm:items-center"
    >
      {/* Product Image */}
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="mt-3 sm:mt-0 sm:ml-6 flex-grow">
        <h3 className="font-medium text-base sm:text-lg">{item.name}</h3>
        <p className="text-pet-primary font-semibold mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Mobile Layout - Controls in a row below */}
      <div className="flex items-center justify-between mt-4 sm:mt-0 sm:ml-4">
        {/* Quantity Controls */}
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="px-2 sm:px-3 py-1 border-r hover:bg-gray-50"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          
          <span className="px-3 sm:px-4 py-1 text-sm sm:text-base">{item.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-2 sm:px-3 py-1 border-l hover:bg-gray-50"
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>

        {/* Item Total - Hidden on mobile, shown on larger screens */}
        <div className="hidden sm:block sm:ml-6 w-24 text-right">
          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      
      {/* Mobile-only total price */}
      <div className="mt-2 sm:hidden text-right">
        <p className="font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </motion.div>
  );
}
