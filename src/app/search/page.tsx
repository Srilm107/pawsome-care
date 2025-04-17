"use client";

import { useState, useEffect, Suspense } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSearch, SearchableItem } from "@/lib/search-service";

// Component to handle search params
function SearchParamsHandler({ onQueryChange }: { onQueryChange: (query: string) => void }): React.ReactElement {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  
  useEffect(() => {
    if (initialQuery) {
      onQueryChange(initialQuery);
    }
  }, [initialQuery, onQueryChange]);
  
  return null;
}

export default function SearchPage() {
  const router = useRouter();
  const { query, setQuery, results, isLoading } = useSearch();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Update URL when query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        const params = new URLSearchParams();
        params.set("q", query);
        router.replace(`/search?${params.toString()}`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, router]);
  
  // Handler for query changes from URL
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  // Filter results by type
  const filteredResults = activeFilter 
    ? results.filter(item => item.type === activeFilter)
    : results;

  // Count results by type
  const resultCounts = {
    product: results.filter(item => item.type === 'product').length,
    blog: results.filter(item => item.type === 'blog').length,
    category: results.filter(item => item.type === 'category').length,
    service: results.filter(item => item.type === 'service').length,
  };

  // Get type label
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'product': return 'Product';
      case 'blog': return 'Blog Post';
      case 'category': return 'Category';
      case 'service': return 'Service';
      default: return type;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Suspense fallback={null}>
        <SearchParamsHandler onQueryChange={handleQueryChange} />
      </Suspense>
      
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      
      {/* Search Input */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for products, articles, categories..."
            className="pl-10 py-6 text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {isLoading && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin text-muted-foreground" />
          )}
        </div>
      </div>
      
      {/* Filters */}
      {results.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={activeFilter === null ? "default" : "outline"}
            onClick={() => setActiveFilter(null)}
            className="flex items-center gap-2"
          >
            All Results <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{results.length}</span>
          </Button>
          
          {resultCounts.product > 0 && (
            <Button
              variant={activeFilter === 'product' ? "default" : "outline"}
              onClick={() => setActiveFilter('product')}
              className="flex items-center gap-2"
            >
              Products <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{resultCounts.product}</span>
            </Button>
          )}
          
          {resultCounts.blog > 0 && (
            <Button
              variant={activeFilter === 'blog' ? "default" : "outline"}
              onClick={() => setActiveFilter('blog')}
              className="flex items-center gap-2"
            >
              Blog Posts <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{resultCounts.blog}</span>
            </Button>
          )}
          
          {resultCounts.category > 0 && (
            <Button
              variant={activeFilter === 'category' ? "default" : "outline"}
              onClick={() => setActiveFilter('category')}
              className="flex items-center gap-2"
            >
              Categories <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{resultCounts.category}</span>
            </Button>
          )}
          
          {resultCounts.service > 0 && (
            <Button
              variant={activeFilter === 'service' ? "default" : "outline"}
              onClick={() => setActiveFilter('service')}
              className="flex items-center gap-2"
            >
              Services <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{resultCounts.service}</span>
            </Button>
          )}
        </div>
      )}
      
      {/* Results */}
      {query && !isLoading && filteredResults.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No results found</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            We couldn't find any matches for "{query}". Please try a different search term or browse our categories.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button variant="outline">Browse Products</Button>
            </Link>
            <Link href="/categories">
              <Button variant="outline">View Categories</Button>
            </Link>
          </div>
        </div>
      )}
      
      {filteredResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result) => (
            <SearchResultCard key={`${result.type}-${result.id}`} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchResultCard({ result }: { result: SearchableItem }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="relative h-[200px]">
        <Image
          src={result.image || "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
          alt={result.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-pet-primary text-white px-2 py-1 rounded text-xs font-medium">
          {result.type === 'product' ? 'Product' : 
           result.type === 'blog' ? 'Blog Post' : 
           result.type === 'category' ? 'Category' : 'Service'}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{result.title}</h3>
        {result.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{result.description}</p>
        )}
        <Link href={result.url}>
          <Button className="w-full">View {result.type === 'product' ? 'Product' : 
                                           result.type === 'blog' ? 'Article' : 
                                           result.type === 'category' ? 'Category' : 'Service'}</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
