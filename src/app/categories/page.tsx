"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CategoryCard from "@/components/category-card";

// Extended pet categories data for the categories page
const allPetCategories = [
  {
    id: 1,
    title: "Dogs",
    description: "Premium food, toys, accessories, and grooming products for your canine companion.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    itemCount: 124,
    slug: "dogs"
  },
  {
    id: 2,
    title: "Cats",
    description: "Specialized nutrition, interactive toys, and comfort items for your feline friends.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    itemCount: 98,
    slug: "cats"
  },
  {
    id: 3,
    title: "Small Pets",
    description: "Essential supplies for hamsters, guinea pigs, rabbits, and other small animals.",
    image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    itemCount: 56,
    slug: "small-pets"
  },
  {
    id: 4,
    title: "Birds",
    description: "Cages, feeds, toys, and accessories for your feathered companions.",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    itemCount: 42,
    slug: "birds"
  },
  {
    id: 5,
    title: "Fish & Aquatics",
    description: "Tanks, filters, decorations, and food for your aquatic pets.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    itemCount: 67,
    slug: "fish-aquatics"
  },
  {
    id: 6,
    title: "Reptiles",
    description: "Terrariums, heating equipment, and specialized nutrition for reptiles.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    itemCount: 38,
    slug: "reptiles"
  }
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-pet-primary flex items-center hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-2">Pet Categories</h1>
        <p className="text-muted-foreground text-lg">
          Browse our extensive collection of pet supplies by category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {allPetCategories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}
