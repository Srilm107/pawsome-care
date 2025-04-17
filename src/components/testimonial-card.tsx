import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ name, image, rating, text }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <div className="flex text-amber-400">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  className="h-4 w-4" 
                  fill={i < rating ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
