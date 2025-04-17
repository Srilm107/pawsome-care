"use client";

import { useEffect, useState } from "react";

// Define types for searchable content
export interface SearchableItem {
  id: number | string;
  title: string;
  description?: string;
  type: 'product' | 'blog' | 'category' | 'service';
  image?: string;
  url: string;
}

// Sample data from across the website
let searchableContent: SearchableItem[] = [];

// Initialize searchable content from various parts of the site
const initializeSearchContent = () => {
  // Products data
  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Pet Food",
      petType: "Dog",
      description: "High-quality premium dog food made with real chicken as the first ingredient."
    },
    {
      id: 2,
      name: "Cat Scratching Post",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Furniture",
      petType: "Cat",
      description: "Durable cat scratching post with a plush perch on top."
    },
    {
      id: 3,
      name: "Interactive Dog Toy",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Toys",
      petType: "Dog",
      description: "Engaging interactive dog toy that dispenses treats as your dog plays."
    },
    {
      id: 4,
      name: "Luxury Pet Bed",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Bedding",
      petType: "All Pets",
      description: "Ultra-comfortable pet bed with memory foam base and soft, washable cover."
    },
    {
      id: 5,
      name: "Automatic Pet Feeder",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
      petType: "All Pets",
      description: "Programmable automatic pet feeder that dispenses food on a schedule."
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Essential Nutrition Tips for Your Dog",
      excerpt: "Learn about the key nutrients your dog needs for optimal health and how to ensure their diet provides everything they need to thrive.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Nutrition"
    },
    {
      id: 2,
      title: "Understanding Cat Behavior",
      excerpt: "Decode your cat's mysterious behaviors and learn how to better communicate with your feline companion.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Behavior"
    },
    {
      id: 3,
      title: "Small Pet Care Guide",
      excerpt: "Everything you need to know about caring for popular small pets, from housing and nutrition to handling and health concerns.",
      image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Care Guides"
    }
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      title: "Dogs",
      description: "Premium food, toys, accessories, and grooming products for your canine companion.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "dogs"
    },
    {
      id: 2,
      title: "Cats",
      description: "Specialized nutrition, interactive toys, and comfort items for your feline friends.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "cats"
    },
    {
      id: 3,
      title: "Small Pets",
      description: "Essential supplies for hamsters, guinea pigs, rabbits, and other small animals.",
      image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "small-pets"
    }
  ];

  // Services data
  const services = [
    {
      id: 1,
      name: "Pet Grooming",
      description: "Professional grooming services for dogs and cats of all breeds and sizes.",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Veterinary Check-up",
      description: "Comprehensive health check-ups for your pets.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Pet Training",
      description: "Behavior training and obedience classes for dogs of all ages.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    }
  ];

  // Map products to searchable items
  const productItems = products.map(product => ({
    id: product.id,
    title: product.name,
    description: product.description,
    type: 'product' as const,
    image: product.image,
    url: `/products/${product.id}`
  }));

  // Map blog posts to searchable items
  const blogItems = blogPosts.map(post => ({
    id: post.id,
    title: post.title,
    description: post.excerpt,
    type: 'blog' as const,
    image: post.image,
    url: `/blog/${post.id}`
  }));

  // Map categories to searchable items
  const categoryItems = categories.map(category => ({
    id: category.id,
    title: category.title,
    description: category.description,
    type: 'category' as const,
    image: category.image,
    url: `/categories/${category.slug}`
  }));

  // Map services to searchable items
  const serviceItems = services.map(service => ({
    id: service.id,
    title: service.name,
    description: service.description,
    type: 'service' as const,
    image: service.image,
    url: `/services#${service.id}`
  }));

  // Combine all searchable content
  searchableContent = [
    ...productItems,
    ...blogItems,
    ...categoryItems,
    ...serviceItems
  ];
};

// Search function
export const searchContent = (query: string): SearchableItem[] => {
  if (!query || query.trim() === '') {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  
  return searchableContent.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = item.description?.toLowerCase().includes(normalizedQuery) || false;
    
    return titleMatch || descriptionMatch;
  });
};

// Hook for search functionality
export const useSearch = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize search content
  useEffect(() => {
    if (!isInitialized) {
      initializeSearchContent();
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Perform search when query changes
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate a slight delay for search to feel more realistic
    const timer = setTimeout(() => {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return {
    query,
    setQuery,
    results,
    isLoading
  };
};
