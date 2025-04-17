"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-white/90 text-lg max-w-md">
              We'd love to hear from you. Reach out with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Contact Information */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pet-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-pet-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Main Street, Petville<br />
                    CA 12345, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pet-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-pet-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Number</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-600">(555) 765-4321 (Customer Service)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pet-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-pet-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Address</h3>
                  <p className="text-gray-600">info@pawfectpetshop.com</p>
                  <p className="text-gray-600">support@pawfectpetshop.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pet-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-pet-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 11:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Service Booking">Service Booking</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Return/Exchange">Return/Exchange</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Find Us</h2>
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="aspect-[16/9] w-full rounded overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">What are your shipping policies?</h3>
            <p className="text-gray-600">
              We offer free shipping on orders over $50. Standard shipping typically takes 3-5 business days, while expedited shipping options are available at checkout. International shipping is available to select countries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">How can I track my order?</h3>
            <p className="text-gray-600">
              Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to view order status and tracking details.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">What is your return policy?</h3>
            <p className="text-gray-600">
              We accept returns within 30 days of purchase for most items in new, unused condition with original packaging. Food, treats, and certain health products cannot be returned once opened. Please contact our customer service team to initiate a return.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Do you offer pet adoption services?</h3>
            <p className="text-gray-600">
              We don't directly offer pet adoption, but we partner with local animal shelters for adoption events several times a year. Follow our social media or subscribe to our newsletter to stay informed about upcoming adoption events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
