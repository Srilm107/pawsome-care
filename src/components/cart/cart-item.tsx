"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, CartItem } from "@/context/cart-context";
import { cn } from "@/lib/utils";

interface CartItemProps {
  item: CartItem;
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center py-4 border-b border-gray-100">
      {/* Product Image */}
      <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex-grow min-w-0">
        <h4 className="text-sm font-medium truncate">{item.name}</h4>
        <p className="text-pet-primary font-semibold mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls and Remove Button - Responsive Layout */}
      <div className="flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className={cn(
              "h-6 w-6 rounded-full flex items-center justify-center border",
              item.quantity === 1
                ? "border-red-300 text-red-500 hover:bg-red-50"
                : "border-gray-300 text-gray-500 hover:bg-gray-50"
            )}
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </button>
          
          <span className="text-sm w-6 text-center">{item.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="h-6 w-6 rounded-full flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-50"
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
