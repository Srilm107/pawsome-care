"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturedProductCard from "@/components/featured-product-card";
import CategoryCard from "@/components/category-card";
import TestimonialCard from "@/components/testimonial-card";
import NewsletterSignup from "@/components/newsletter-signup";

// Sample pet categories data
const petCategories = [
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
  }
];

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Pet Food",
    petType: "Dog",
  },
  {
    id: 2,
    name: "Cat Scratching Post",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Furniture",
    petType: "Cat",
  },
  {
    id: 3,
    name: "Interactive Dog Toy",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Toys",
    petType: "Dog",
  },
  {
    id: 4,
    name: "Luxury Pet Bed",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Bedding",
    petType: "All Pets",
  },
];

// Sample testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "My dog absolutely loves the premium food I bought from Pawfect Pet Shop. His coat is shinier and he has so much more energy!",
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 4,
    text: "The cat scratching post is sturdy and well-made. My cats took to it immediately and have stopped scratching my furniture!",
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "Great selection of products and excellent customer service. The staff really knows their stuff and gave me great advice for my new puppy.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Happy pets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Everything Your Pet Needs, All in One Place
              </h1>
              <p className="text-lg mb-6">
                Premium products and expert services for your furry, feathered, or scaly friends.
              </p>
              <div className="flex space-x-4">
                <Link href="/products">
                  <Button size="lg" className="bg-pet-primary hover:bg-pet-primary/90">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link href="/products" className="text-pet-primary flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pet Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Pet Category</h2>
            <Link href="/categories" className="text-pet-primary flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {petCategories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-16 bg-pet-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Professional Pet Services</h2>
              <p className="text-lg mb-6 text-white/90">
                From grooming to training, our expert staff provides top-quality services to keep your pets healthy and happy.
              </p>
              <Button className="bg-white text-pet-primary hover:bg-white/90">
                Book a Service
              </Button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Grooming</h3>
                <p className="text-white/80">Professional grooming services for all breeds</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Training</h3>
                <p className="text-white/80">Behavior training and obedience classes</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Veterinary</h3>
                <p className="text-white/80">Regular check-ups and health services</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Boarding</h3>
                <p className="text-white/80">Safe and comfortable pet boarding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-pet-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new products, special offers, and pet care tips.
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
