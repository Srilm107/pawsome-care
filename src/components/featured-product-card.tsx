"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

interface FeaturedProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    petType: string;
  };
}

const FeaturedProductCard = ({ product }: FeaturedProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { addToCart, state } = useCart();

  // Check if product is already in cart
  const isInCart = state.items.some(item => item.id === product.id);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      
      // Show added animation
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    }
  };

  return (
    <motion.div 
      whileHover={!isMobile ? { y: -5 } : undefined}
      className="h-full"
    >
      <Card 
        className="h-full flex flex-col overflow-hidden"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <div className="relative h-[180px] sm:h-[220px] overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute top-2 right-2 bg-pet-accent text-pet-primary px-2 py-1 rounded text-xs font-medium">
            {product.petType}
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="text-xs text-muted-foreground">{product.category}</span>
          </div>
          <Link href={`/products/${product.id}`}>
            <h3 className="font-medium text-base sm:text-lg mb-1 hover:text-pet-primary/80 transition-colors line-clamp-2">{product.name}</h3>
          </Link>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="font-bold text-pet-primary">${product.price.toFixed(2)}</span>
            <Button 
              size={isMobile ? "sm" : "default"} 
              className={isInCart || isAdded ? "bg-green-600 hover:bg-green-700" : "bg-pet-primary hover:bg-pet-primary/90"}
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart || isAdded ? (
                <>
                  <Check className="h-4 w-4 mr-1" /> Added
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-1" /> Add
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeaturedProductCard;
