"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Check, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import FeaturedProductCard from "@/components/featured-product-card";

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Pet Food",
    petType: "Dog",
    description: "High-quality premium dog food made with real chicken as the first ingredient. Formulated to support your dog's overall health with essential nutrients, vitamins, and minerals. No artificial flavors, colors, or preservatives.",
    features: [
      "Made with real chicken",
      "No artificial ingredients",
      "Supports healthy digestion",
      "Promotes healthy skin and coat",
      "Balanced nutrition for adult dogs"
    ],
    specifications: {
      "Weight": "15 lbs (6.8 kg)",
      "Dimensions": "24 × 16 × 4 inches",
      "Ingredients": "Chicken, Brown Rice, Barley, Oatmeal, Chicken Meal",
      "Suitable for": "Adult dogs of all breeds",
      "Storage": "Keep in a cool, dry place"
    },
    rating: 4.7,
    reviewCount: 128,
    stock: 25
  },
  {
    id: 2,
    name: "Cat Scratching Post",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Furniture",
    petType: "Cat",
    description: "Durable cat scratching post with a plush perch on top. Provides a dedicated place for your cat to scratch, helping to protect your furniture. The stable base ensures it won't tip over during use.",
    features: [
      "Sisal rope scratching surface",
      "Plush perch on top",
      "Stable base prevents tipping",
      "Easy to assemble",
      "Suitable for cats of all sizes"
    ],
    specifications: {
      "Height": "32 inches",
      "Base Dimensions": "16 × 16 inches",
      "Materials": "Sisal rope, plush fabric, engineered wood",
      "Color": "Beige",
      "Assembly": "Simple assembly required (tools included)"
    },
    rating: 4.5,
    reviewCount: 94,
    stock: 18
  },
  {
    id: 3,
    name: "Interactive Dog Toy",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Toys",
    petType: "Dog",
    description: "Engaging interactive dog toy that dispenses treats as your dog plays. Helps reduce boredom and provides mental stimulation. Made from durable, non-toxic materials that can withstand rough play.",
    features: [
      "Treat-dispensing design",
      "Durable construction",
      "Non-toxic materials",
      "Adjustable difficulty levels",
      "Easy to clean"
    ],
    specifications: {
      "Dimensions": "4 × 4 × 5 inches",
      "Materials": "Food-grade plastic, rubber",
      "Suitable for": "Dogs of all sizes",
      "Care": "Dishwasher safe (top rack)",
      "Color": "Blue/Orange"
    },
    rating: 4.8,
    reviewCount: 156,
    stock: 42
  },
  {
    id: 4,
    name: "Luxury Pet Bed",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Bedding",
    petType: "All Pets",
    description: "Ultra-comfortable pet bed with memory foam base and soft, washable cover. Provides excellent support for joints and muscles, making it perfect for pets of all ages, especially senior pets or those with arthritis.",
    features: [
      "Memory foam base for support",
      "Machine-washable cover",
      "Non-slip bottom",
      "Water-resistant liner",
      "Raised edges for head support"
    ],
    specifications: {
      "Dimensions": "36 × 28 × 9 inches (Large)",
      "Materials": "Memory foam, microfiber cover",
      "Available Sizes": "Small, Medium, Large",
      "Cover": "Removable and machine washable",
      "Color": "Gray"
    },
    rating: 4.9,
    reviewCount: 203,
    stock: 15
  },
  {
    id: 5,
    name: "Automatic Pet Feeder",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
    petType: "All Pets",
    description: "Programmable automatic pet feeder that dispenses food on a schedule. Perfect for busy pet owners or for portion control. Features a secure lid to keep food fresh and prevent pets from breaking in.",
    features: [
      "Programmable feeding schedule",
      "Portion control settings",
      "Voice recording feature",
      "Battery backup",
      "Easy to clean"
    ],
    specifications: {
      "Capacity": "6 liters (approximately 25 cups)",
      "Dimensions": "12 × 8 × 16 inches",
      "Power": "AC adapter with battery backup (3 D-cell batteries, not included)",
      "Programmable Meals": "Up to 4 meals per day",
      "Display": "LCD screen"
    },
    rating: 4.6,
    reviewCount: 87,
    stock: 10
  }
];

// Related products (simplified version)
const getRelatedProducts = (currentId: number, petType: string) => {
  return allProducts
    .filter(product => product.id !== currentId && (product.petType === petType || product.petType === "All Pets"))
    .slice(0, 4);
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params?.id as string, 10);
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, state } = useCart();

  // Check if product is already in cart
  const isInCart = state.items.some(item => item.id === productId);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = allProducts.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setRelatedProducts(getRelatedProducts(productId, foundProduct.petType));
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (!isInCart && product) {
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

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="text-pet-primary hover:underline">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/products" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Link>
      
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="relative h-[400px] rounded-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">{product.category} / {product.petType}</span>
              <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400 mr-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4" 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-pet-primary">${product.price.toFixed(2)}</span>
              {product.stock < 20 && (
                <span className="ml-3 text-sm text-amber-600">
                  Only {product.stock} left in stock
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              className={`w-full mb-4 ${isInCart || isAdded ? "bg-green-600 hover:bg-green-700" : "bg-pet-primary hover:bg-pet-primary/90"}`}
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart || isAdded ? (
                <>
                  <Check className="h-5 w-5 mr-2" /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                </>
              )}
            </Button>
            
            {/* Shipping & Returns */}
            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-pet-primary mr-3" />
                <span className="text-sm">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-pet-primary mr-3" />
                <span className="text-sm">1-year warranty included</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-pet-primary mr-3" />
                <span className="text-sm">30-day hassle-free returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Specifications */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex border-b pb-2">
              <span className="font-medium w-1/3">{key}:</span>
              <span className="text-gray-700">{value as string}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
