import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  const { addItem } = useCart();
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image, category });
  };

  return (
    <Link to={`/products/${id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {(isNew || isSale) && (
            <div className="absolute top-2 left-2 flex flex-col space-y-1">
              {isNew && <Badge className="bg-primary text-xs">Mới</Badge>}
              {isSale && (
                <Badge variant="destructive" className="text-xs">
                  -{discount}%
                </Badge>
              )}
            </div>
          )}
          <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 sm:h-10 sm:w-10"
              asChild
            >
              <Link to={`/products/${id}`}>
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
        <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
          <p className="text-xs text-white mb-1">{category}</p>
          <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] flex-1">
            {name}
          </h3>
          <div className="flex items-center space-x-2 mt-auto">
            <span className="text-base sm:text-lg font-bold text-primary">
              {price.toLocaleString("vi-VN")}đ
            </span>
            {originalPrice && (
              <span className="text-xs sm:text-sm text-white line-through">
                {originalPrice.toLocaleString("vi-VN")}đ
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-3 sm:p-4 pt-0">
          <Button
            className="w-full text-xs sm:text-sm"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Thêm vào giỏ
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
