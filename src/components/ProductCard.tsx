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
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image, category });
  };

  return (
    <Link to={`/products/${id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {(isNew || isSale) && (
            <div className="absolute top-2 left-2 flex flex-col space-y-1">
              {isNew && <Badge className="bg-primary">Mới</Badge>}
              {isSale && <Badge variant="destructive">-{discount}%</Badge>}
            </div>
          )}
          <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <Button size="icon" variant="secondary" asChild>
              <Link to={`/products/${id}`}>
                <Eye className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-primary">
            {price.toLocaleString("vi-VN")}đ
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice.toLocaleString("vi-VN")}đ
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Thêm vào giỏ
        </Button>
      </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
