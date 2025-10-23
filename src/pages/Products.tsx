import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { value: "all", label: "Tất cả sản phẩm" },
    { value: "honda", label: "Phụ tùng Honda" },
    { value: "yamaha", label: "Phụ tùng Yamaha" },
    { value: "suzuki", label: "Phụ tùng Suzuki" },
    { value: "sym", label: "Phụ tùng SYM" },
    { value: "oil", label: "Nhớt xe máy" },
    { value: "accessories", label: "Phụ kiện" },
  ];

  // Mock data - có thể thay thế bằng API
  const allProducts = [
    { id: "1", name: "Phanh đĩa trước Honda Winner X", price: 450000, originalPrice: 550000, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500", category: "honda", isNew: false, isSale: true },
    { id: "2", name: "Nhớt Motul 7100 4T 10W40", price: 280000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", category: "oil", isNew: true, isSale: false },
    { id: "3", name: "Lọc gió K&N Yamaha Exciter", price: 350000, originalPrice: 420000, image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500", category: "yamaha", isNew: false, isSale: true },
    { id: "4", name: "Bộ piston Racing Boy Suzuki Raider", price: 680000, image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500", category: "suzuki", isNew: true, isSale: false },
    { id: "5", name: "Dây curoa SYM Symphony", price: 220000, image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500", category: "sym", isNew: false, isSale: false },
    { id: "6", name: "Bình xăng con Honda Vision", price: 850000, originalPrice: 1000000, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500", category: "honda", isNew: false, isSale: true },
    { id: "7", name: "Yên xe Givi Honda SH Mode", price: 1200000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", category: "accessories", isNew: true, isSale: false },
    { id: "8", name: "Phuộc YSS Yamaha NVX", price: 3200000, image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500", category: "yamaha", isNew: true, isSale: false },
    { id: "9", name: "Má phanh sau Suzuki Satria", price: 180000, image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500", category: "suzuki", isNew: false, isSale: false },
    { id: "10", name: "Đèn pha LED SYM Galaxy", price: 650000, originalPrice: 800000, image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500", category: "sym", isNew: false, isSale: true },
    { id: "11", name: "Nhớt Shell Advance Ultra", price: 320000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", category: "oil", isNew: false, isSale: false },
    { id: "12", name: "Kính chiếu hậu Rizoma", price: 450000, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500", category: "accessories", isNew: true, isSale: false },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Sản Phẩm</h1>
            <p className="text-lg opacity-90">
              Phụ tùng xe máy chính hãng với hơn {allProducts.length} sản phẩm
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={selectedCategory === cat.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.value)}
                    size="sm"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sắp xếp:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Nổi bật</SelectItem>
                    <SelectItem value="price-asc">Giá thấp đến cao</SelectItem>
                    <SelectItem value="price-desc">Giá cao đến thấp</SelectItem>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Hiển thị {filteredProducts.length} sản phẩm
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Products;
