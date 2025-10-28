import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, HeadphonesIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  // Mock data - có thể thay thế bằng API call
  const categories = [
    {
      name: "Phụ tùng Honda",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      productCount: 156,
      link: "/products?category=honda",
    },
    {
      name: "Phụ tùng Yamaha",
      image:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
      productCount: 142,
      link: "/products?category=yamaha",
    },
    {
      name: "Phụ tùng Suzuki",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500",
      productCount: 98,
      link: "/products?category=suzuki",
    },
    {
      name: "Phụ tùng SYM",
      image:
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500",
      productCount: 76,
      link: "/products?category=sym",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Phanh đĩa trước Honda Winner X",
      price: 450000,
      originalPrice: 550000,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500",
      category: "Honda",
      isNew: false,
      isSale: true,
    },
    {
      id: "2",
      name: "Nhớt Motul 7100 4T 10W40",
      price: 280000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      category: "Nhớt",
      isNew: true,
      isSale: false,
    },
    {
      id: "3",
      name: "Lọc gió K&N Yamaha Exciter",
      price: 350000,
      originalPrice: 420000,
      image:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
      category: "Yamaha",
      isNew: false,
      isSale: true,
    },
    {
      id: "4",
      name: "Bộ piston Racing Boy Suzuki Raider",
      price: 680000,
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500",
      category: "Suzuki",
      isNew: true,
      isSale: false,
    },
    {
      id: "5",
      name: "Dây curoa SYM Symphony",
      price: 220000,
      image:
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500",
      category: "SYM",
      isNew: false,
      isSale: false,
    },
    {
      id: "6",
      name: "Bình xăng con Honda Vision",
      price: 850000,
      originalPrice: 1000000,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500",
      category: "Honda",
      isNew: false,
      isSale: true,
    },
    {
      id: "7",
      name: "Yên xe Givi Honda SH Mode",
      price: 1200000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      category: "Honda",
      isNew: true,
      isSale: false,
    },
    {
      id: "8",
      name: "Phuộc YSS Yamaha NVX",
      price: 3200000,
      image:
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
      category: "Yamaha",
      isNew: true,
      isSale: false,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Hàng chính hãng",
      desc: "100% phụ tùng chính hãng",
    },
    { icon: Truck, title: "Giao hàng toàn quốc", desc: "Nhanh chóng, an toàn" },
    { icon: HeadphonesIcon, title: "Hỗ trợ 24/7", desc: "Tư vấn nhiệt tình" },
    { icon: Star, title: "Uy tín hàng đầu", desc: "Được khách hàng tin tưởng" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={heroBanner}
          alt="XE PHÁO MÃ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-secondary-foreground">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Phụ Tùng Xe Máy <span className="text-primary">Chính Hãng</span>
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Cam kết uy tín, chất lượng và giao hàng nhanh chóng toàn quốc
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="text-lg">
                    Xem sản phẩm
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg bg-background/10 hover:bg-background/20 border-background/30"
                  >
                    Liên hệ ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-primary mt-3 py-10">
        {/* Black angled corner right */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[120%] w-40 bg-black clip-path-right" />

        {/* Bottom angle stripe */}
        <div className="absolute bottom-0 left-0 w-[55%] h-6 bg-black clip-path-bottom" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-md p-4 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-left">
            {/* Title */}
            <div className="relative w-fit block">
              {/* Background yellow */}
              <div className="absolute inset-0 bg-primary clip-subtitle h-10 top-2 right-[-90px] w-[calc(100%+90px)]" />

              {/* Slanted stripes */}
              <div className="absolute top-2 right-[-126px] flex gap-3">
                <div className="w-3 h-10 bg-primary skew-x-[-30deg] clip-subtitle" />
                <div className="w-3 h-10 bg-primary skew-x-[-30deg] clip-subtitle" />
              </div>

              <h2 className="relative text-3xl md:text-4xl font-bold text-black px-4 py-1 z-10">
                Danh Mục Sản Phẩm
              </h2>
            </div>

            {/* Subtitle */}
            <div className="relative w-fit block ">
              <p className="relative text-white text-xs md:text-md px-3 pr-12 py-0.5 z-10 bg-black clip-subtitle">
                Phụ tùng chính hãng cho mọi hãng xe
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-muted-foreground text-lg">
                Được khách hàng tin dùng nhất
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bạn cần tư vấn phụ tùng xe máy?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg">
              Liên hệ ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
