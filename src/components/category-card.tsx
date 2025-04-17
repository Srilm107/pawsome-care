"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  slug: string;
}

const CategoryCard = ({ id, title, description, image, itemCount, slug }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card 
        className="h-full flex flex-col overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[220px] overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-4 left-4 bg-white text-pet-primary px-3 py-1 rounded-full text-sm font-medium">
            {itemCount} Items
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          
          <Link 
            href={`/categories/${slug}`} 
            className="flex items-center text-pet-primary font-medium hover:underline mt-auto"
          >
            Browse Category
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;
