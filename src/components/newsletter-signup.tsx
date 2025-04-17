"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real application, you would send this to your backend
    // For now, we'll just simulate success
    
    // Store in localStorage
    try {
      if (typeof window !== "undefined") {
        const subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
        subscribers.push({ email, subscribedAt: new Date().toISOString() });
        localStorage.setItem("subscribers", JSON.stringify(subscribers));
      }
    } catch (e) {
      console.error("Error storing in localStorage", e);
    }

    setSubscribed(true);
    setError("");
    setEmail("");
  };

  return (
    <div className="max-w-md w-full mx-auto">
      {subscribed ? (
        <div className="text-center p-4 bg-green-100 rounded-lg">
          <p className="text-green-800 font-medium">Thank you for subscribing!</p>
          <p className="text-green-700 text-sm mt-2">You'll receive our newsletter with pet care tips and special offers.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Your email address"
              className="pr-24 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
            <Button type="submit" className="absolute right-1 top-1 bg-white text-pet-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
          {error && <p className="text-red-300 text-sm">{error}</p>}
          <p className="text-white/80 text-sm text-center">
            By subscribing, you agree to our privacy policy and consent to receive updates from our company.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
