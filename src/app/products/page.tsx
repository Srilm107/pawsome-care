"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Filter, SlidersHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FeaturedProductCard from "@/components/featured-product-card";

// Sample product data
const allProducts = [{
  id: 1,
  name: "Premium Dog Food",
  price: 29.99,
  image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Pet Food",
  petType: "Dog"
}, {
  id: 2,
  name: "Cat Scratching Post",
  price: 49.99,
  image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Furniture",
  petType: "Cat"
}, {
  id: 3,
  name: "Interactive Dog Toy",
  price: 14.99,
  image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Toys",
  petType: "Dog"
}, {
  id: 4,
  name: "Luxury Pet Bed",
  price: 79.99,
  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Bedding",
  petType: "All Pets"
}, {
  id: 5,
  name: "Automatic Pet Feeder",
  price: 89.99,
  image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Accessories",
  petType: "All Pets"
}, {
  id: 6,
  name: "Cat Litter Box",
  price: 34.99,
  image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Accessories",
  petType: "Cat"
}, {
  id: 7,
  name: "Dog Collar",
  price: 19.99,
  image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Accessories",
  petType: "Dog"
}, {
  id: 8,
  name: "Bird Cage",
  price: 129.99,
  image: "https://picsum.photos/200",
  category: "Housing",
  petType: "Bird"
}, {
  id: 9,
  name: "Fish Tank Filter",
  price: 49.99,
  image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Accessories",
  petType: "Fish"
}, {
  id: 10,
  name: "Reptile Heat Lamp",
  price: 39.99,
  image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Accessories",
  petType: "Reptile"
}, {
  id: 11,
  name: "Small Animal Cage",
  price: 69.99,
  image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Housing",
  petType: "Small Pet"
}, {
  id: 12,
  name: "Premium Cat Food",
  price: 27.99,
  image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  category: "Pet Food",
  petType: "Cat"
}];

// Filter options
const categories = ["All Categories", "Pet Food", "Toys", "Bedding", "Furniture", "Accessories", "Housing"];
const petTypes = ["All Pets", "Dog", "Cat", "Bird", "Fish", "Reptile", "Small Pet"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Name: A-Z", "Name: Z-A"];
export default function ProductsPage() {
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPetType, setSelectedPetType] = useState("All Pets");
  const [sortBy, setSortBy] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.category.toLowerCase().includes(term) ||
        product.petType.toLowerCase().includes(term)
      );
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Apply pet type filter
    if (selectedPetType !== "All Pets") {
      filteredProducts = filteredProducts.filter(product => product.petType === selectedPetType || product.petType === "All Pets");
    }

    // Apply sorting
    switch (sortBy) {
      case "Price: Low to High":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "Name: A-Z":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name: Z-A":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Featured - use default order
        break;
    }
    setProducts(filteredProducts);
  }, [selectedCategory, selectedPetType, sortBy, searchTerm]);
  return <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>
      
      {/* Search Bar */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search products by name, category, or pet type..."
            className="pl-10 py-6 text-lg"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Filters and Sorting */}
      <div className={`bg-white p-6 rounded-lg shadow-sm mb-8 ${showFilters ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full border border-gray-300 rounded-md p-2" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
          </div>
          
          {/* Pet Type Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Pet Type</label>
            <select className="w-full border border-gray-300 rounded-md p-2" value={selectedPetType} onChange={e => setSelectedPetType(e.target.value)}>
              {petTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          
          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select className="w-full border border-gray-300 rounded-md p-2" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => <FeaturedProductCard key={product.id} product={product} />)}
      </div>
      
      {/* Empty state */}
      {products.length === 0 && <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
        </div>}
    </div>;
}
