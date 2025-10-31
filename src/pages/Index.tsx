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
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBanner})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-secondary-foreground">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                Phụ Tùng Xe Máy{" "}
                <span className="text-[#d92026]">Chính Hãng</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                Cam kết uy tín, chất lượng và giao hàng nhanh chóng toàn quốc
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg bg-[#d92026]"
                  >
                    Xem sản phẩm
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-base sm:text-lg bg-background/10 hover:bg-background/20 border-background/30"
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
      <section
        className="relative to-white mt-3 py-8 sm:py-10"
        style={{
          background:
            "linear-gradient(to bottom, black 0%, black 70%, #403434 85%)",
        }}
      >
        {/* Black angled corner right - hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 h-[120%] w-40 bg-[#d92026] clip-path-right" />

        {/* Bottom angle stripe - hidden on mobile */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[55%] h-6 bg-[#d92026] clip-path-bottom" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-md p-3 sm:p-4 shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-black text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4  sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-left">
            {/* Title */}
            <div className="relative w-fit block">
              {/* Background yellow - responsive */}
              <div className="absolute inset-0 bg-black py-3 clip-subtitle px-6 py-2 top-0 right-[-60px] sm:right-[-90px] w-[calc(100%+60px)] sm:w-[calc(100%+90px)]" />

              {/* Slanted stripes - hidden on mobile */}
              <div className="hidden sm:flex absolute h-full  right-[-136px] gap-4">
                <div className="w-4 h-full bg-black skew-x-[-34deg] clip-subtitle" />
                <div className="w-4 h-full bg-black skew-x-[-34deg] clip-subtitle" />
              </div>

              <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white px-3 sm:px-4 py-2 z-10">
                Danh Mục Sản Phẩm
              </h2>
            </div>

            {/* Subtitle */}
            <div className="relative inline-block overflow-hidden">
              <p className="relative text-white text-xs sm:text-sm md:text-base px-4 sm:px-5 py-1 pr-8 sm:pr-12 z-10 bg-[#403434] clip-subtitle">
                Phụ tùng chính hãng cho mọi hãng xe
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Được khách hàng tin dùng nhất
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="w-full sm:w-auto">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Bạn cần tư vấn phụ tùng xe máy?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg"
            >
              Liên hệ ngay
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
