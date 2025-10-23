import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
  link: string;
}

const CategoryCard = ({ name, image, productCount, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-secondary-foreground">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-sm opacity-90 flex items-center">
              {productCount} sản phẩm
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
