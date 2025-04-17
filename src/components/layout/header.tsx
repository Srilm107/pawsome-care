"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, ShoppingBag, Menu, UserRound, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cart-context";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();
  const { totalItems } = state;
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isMobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileMenuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-20">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pet-primary w-10 h-10">
                <path d="M10 3a4 4 0 0 0-4 4c0 1.7.75 3.2 1.92 4.25C6.73 12.35 6 13.85 6 15.5c0 2.5 2 4.5 4.5 4.5S15 18 15 15.5c0-1.65-.73-3.15-1.92-4.25C14.25 10.2 15 8.7 15 7a4 4 0 0 0-4-4Z"/>
                <path d="M22 13.5c0 2.5-2 4.5-4.5 4.5S13 16 13 13.5c0-1.65.73-3.15 1.92-4.25C13.75 8.2 13 6.7 13 5a4 4 0 0 1 8 0c0 1.7-.75 3.2-1.92 4.25C20.27 10.35 21 11.85 21 13.5Z"/>
                <path d="M17 21.5c0-2.5 2-4.5 4.5-4.5S26 19 26 21.5c0 1.65-.73 3.15-1.92 4.25C25.25 26.8 26 28.3 26 30a4 4 0 0 1-8 0c0-1.7.75-3.2 1.92-4.25C18.73 24.65 18 23.15 18 21.5Z"/>
                <path d="M6 21.5c0-2.5 2-4.5 4.5-4.5S15 19 15 21.5c0 1.65-.73 3.15-1.92 4.25C14.25 26.8 15 28.3 15 30a4 4 0 0 1-8 0c0-1.7.75-3.2 1.92-4.25C7.73 24.65 7 23.15 7 21.5Z"/>
              </svg>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-pet-primary">Pawfect Pet Shop</h1>
              <p className="text-xs text-muted-foreground">Premium Pet Supplies & Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-pet-foreground hover:text-pet-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search products, blogs..."
                className={cn(
                  "pl-9 pr-4 py-2 rounded-full transition-all duration-300",
                  isSearchFocused ? "w-[300px]" : "w-[200px]"
                )}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="h-4 w-4" />
              </button>
            </form>
            <Link href="/account">
              <UserRound className="h-6 w-6 text-pet-foreground hover:text-pet-primary transition-colors" />
            </Link>
            <button 
              onClick={toggleCart}
              className="relative"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6 text-pet-foreground hover:text-pet-primary transition-colors" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 bg-pet-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4 z-20">
            <button 
              onClick={toggleCart}
              className="relative"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-6 w-6 text-pet-foreground" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 bg-pet-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pet-foreground hover:text-pet-primary p-1"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-out Menu */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-xl z-50 md:hidden flex flex-col"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pet-primary w-8 h-8">
                      <path d="M10 3a4 4 0 0 0-4 4c0 1.7.75 3.2 1.92 4.25C6.73 12.35 6 13.85 6 15.5c0 2.5 2 4.5 4.5 4.5S15 18 15 15.5c0-1.65-.73-3.15-1.92-4.25C14.25 10.2 15 8.7 15 7a4 4 0 0 0-4-4Z"/>
                      <path d="M22 13.5c0 2.5-2 4.5-4.5 4.5S13 16 13 13.5c0-1.65.73-3.15 1.92-4.25C13.75 8.2 13 6.7 13 5a4 4 0 0 1 8 0c0 1.7-.75 3.2-1.92 4.25C20.27 10.35 21 11.85 21 13.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-pet-primary">Pawfect Pet Shop</h1>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="p-4">
                <form onSubmit={(e) => {
                  handleSearch(e);
                  setIsMobileMenuOpen(false);
                }} className="relative mb-4">
                  <Input
                    type="text"
                    placeholder="Search products, blogs..."
                    className="pl-9 pr-4 py-2 rounded-full w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Search className="h-4 w-4" />
                  </button>
                </form>
                
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-pet-foreground hover:text-pet-primary py-3 px-2 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="mt-auto border-t p-4">
                <Link
                  href="/account"
                  className="flex items-center py-3 px-2 rounded-md hover:bg-gray-50 text-pet-foreground hover:text-pet-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserRound className="h-5 w-5 mr-3" />
                  My Account
                </Link>
                <button
                  onClick={() => {
                    toggleCart();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full py-3 px-2 rounded-md hover:bg-gray-50 text-pet-foreground hover:text-pet-primary transition-colors"
                >
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  View Cart
                  {totalItems > 0 && (
                    <span className="ml-2 bg-pet-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
