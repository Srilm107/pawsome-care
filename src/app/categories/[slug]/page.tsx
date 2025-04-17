"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import FeaturedProductCard from "@/components/featured-product-card";

// Sample products data for category pages
const categoryProducts = {
  "dogs": [
    {
      id: 101,
      name: "Premium Dog Food",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Pet Food",
      petType: "Dog",
    },
    {
      id: 102,
      name: "Plush Dog Toy",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Toys",
      petType: "Dog",
    },
    {
      id: 103,
      name: "Orthopedic Dog Bed",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Bedding",
      petType: "Dog",
    },
    {
      id: 104,
      name: "Adjustable Dog Collar",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
      petType: "Dog",
    }
  ],
  "cats": [
    {
      id: 201,
      name: "Grain-Free Cat Food",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Pet Food",
      petType: "Cat",
    },
    {
      id: 202,
      name: "Interactive Cat Toy",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Toys",
      petType: "Cat",
    },
    {
      id: 203,
      name: "Cat Scratching Post",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Furniture",
      petType: "Cat",
    },
    {
      id: 204,
      name: "Catnip Toys Set",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Toys",
      petType: "Cat",
    }
  ],
  "small-pets": [
    {
      id: 301,
      name: "Hamster Cage",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Housing",
      petType: "Small Pet",
    },
    {
      id: 302,
      name: "Guinea Pig Food",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Pet Food",
      petType: "Small Pet",
    },
    {
      id: 303,
      name: "Rabbit Hutch",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Housing",
      petType: "Small Pet",
    },
    {
      id: 304,
      name: "Small Pet Bedding",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Bedding",
      petType: "Small Pet",
    }
  ]
};

// Category metadata
const categoryInfo = {
  "dogs": {
    title: "Dog Supplies",
    description: "Everything your canine companion needs for a happy, healthy life",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  "cats": {
    title: "Cat Supplies",
    description: "Premium products for your feline friends",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  "small-pets": {
    title: "Small Pet Supplies",
    description: "Essentials for hamsters, guinea pigs, rabbits and more",
    image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  "birds": {
    title: "Bird Supplies",
    description: "Everything for your feathered friends",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  "fish-aquatics": {
    title: "Fish & Aquatic Supplies",
    description: "Complete range of aquarium and fish care products",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  "reptiles": {
    title: "Reptile Supplies",
    description: "Specialized products for reptile owners",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  }
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [category, setCategory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (slug && categoryInfo[slug as keyof typeof categoryInfo]) {
      setCategory(categoryInfo[slug as keyof typeof categoryInfo]);
      setProducts(categoryProducts[slug as keyof typeof categoryProducts] || []);
    }
  }, [slug]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Link href="/categories" className="text-pet-primary hover:underline">
            Browse All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/categories" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
      </Link>

      {/* Category Hero */}
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{category.title}</h1>
            <p className="text-white/90 text-lg max-w-md">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Empty state if no products */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
