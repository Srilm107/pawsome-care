import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pet-primary">About Us</h3>
            <p className="text-muted-foreground mb-4">
              Pawfect Pet Shop offers premium products and services for all your pet needs. 
              We're dedicated to the health, happiness, and wellbeing of your furry friends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pet-primary hover:text-pet-primary/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-pet-primary hover:text-pet-primary/80">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pet-primary hover:text-pet-primary/80">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:mt-0 mt-6">
            <h3 className="text-lg font-semibold mb-4 text-pet-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-pet-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-pet-primary">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-pet-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-pet-primary">
                  Pet Care Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-pet-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:mt-0 mt-6">
            <h3 className="text-lg font-semibold mb-4 text-pet-primary">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pet-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Main Street, Petville<br />
                  CA 12345, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pet-primary mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pet-primary mr-2 flex-shrink-0" />
                <span className="text-muted-foreground break-all">info@pawfectpetshop.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-pet-primary mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Mon-Fri: 9:00 AM - 7:00 PM</div>
                  <div>Sat: 9:00 AM - 5:00 PM</div>
                  <div>Sun: 11:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:mt-0 mt-6">
            <h3 className="text-lg font-semibold mb-4 text-pet-primary">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new products, special offers, and pet care tips.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1" 
              />
              <Button className="sm:w-auto w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 Pawfect Pet Shop. All rights reserved.</p>
            <div className="mt-2 md:mt-0 flex space-x-4">
              <Link href="/terms" className="hover:text-pet-primary">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-pet-primary">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
