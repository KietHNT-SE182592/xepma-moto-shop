import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Minus, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Mock data - trong thực tế sẽ lấy từ API hoặc database
  const allProducts = [
    { id: "1", name: "Phanh đĩa trước Honda Winner X", price: 450000, originalPrice: 550000, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500", category: "honda", isNew: false, isSale: true },
    { id: "2", name: "Nhớt Motul 7100 4T 10W40", price: 280000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", category: "oil", isNew: true, isSale: false },
    { id: "3", name: "Lọc gió K&N Yamaha Exciter", price: 350000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500", category: "yamaha", isNew: false, isSale: true },
    { id: "4", name: "Bộ piston Racing Boy Suzuki Raider", price: 680000, image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500", category: "suzuki", isNew: true, isSale: false },
  ];

  const product = allProducts.find(p => p.id === id) || allProducts[0];
  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Trang chủ</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Sản phẩm</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại danh sách
            </Link>
          </Button>

          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden border">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {(product.isNew || product.isSale) && (
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.isNew && <Badge className="bg-primary">Mới</Badge>}
                    {product.isSale && <Badge variant="destructive">-{discount}%</Badge>}
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Mã SP: {product.id}</p>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {product.price.toLocaleString("vi-VN")}đ
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString("vi-VN")}đ
                    </span>
                  )}
                </div>
                <Badge variant="outline" className="border-green-500 text-green-600">
                  Còn hàng
                </Badge>
              </div>

              <div className="border-t border-b py-4 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Mô tả sản phẩm:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sản phẩm chính hãng, chất lượng cao, được nhập khẩu và phân phối bởi CÔNG TY TNHH XE PHÁO MÃ. 
                    Đảm bảo độ bền, an toàn và hiệu suất tối ưu cho xe máy của bạn. 
                    Sản phẩm đi kèm đầy đủ tem nhãn, bảo hành chính hãng.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Đặc điểm nổi bật:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Chính hãng 100%</li>
                    <li>Bảo hành 6-12 tháng</li>
                    <li>Giao hàng toàn quốc</li>
                    <li>Hỗ trợ lắp đặt</li>
                  </ul>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold">Số lượng:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ProductDetail;
