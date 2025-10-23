import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "Top 5 phụ tùng xe máy cần thay định kỳ",
      excerpt: "Tìm hiểu những phụ tùng quan trọng cần được bảo dưỡng thường xuyên để xe hoạt động bền bỉ và an toàn.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      category: "Bảo dưỡng",
      date: "15/01/2025",
      author: "Admin"
    },
    {
      title: "Cách nhận biết nhớt xe máy chính hãng",
      excerpt: "Hướng dẫn chi tiết cách phân biệt nhớt chính hãng và nhớt giả để bảo vệ động cơ xe của bạn.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500",
      category: "Mẹo hay",
      date: "10/01/2025",
      author: "Admin"
    },
    {
      title: "Lợi ích của việc thay phuộc xe máy chính hãng",
      excerpt: "Phuộc chính hãng mang lại trải nghiệm lái xe tốt hơn và độ bền cao hơn nhiều so với hàng kém chất lượng.",
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
      category: "Kiến thức",
      date: "05/01/2025",
      author: "Admin"
    },
    {
      title: "Khuyến mãi lớn tháng 1/2025",
      excerpt: "Giảm giá đến 30% cho nhiều mặt hàng phụ tùng Honda, Yamaha, Suzuki, SYM. Nhanh tay đặt hàng!",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500",
      category: "Khuyến mãi",
      date: "01/01/2025",
      author: "Admin"
    },
    {
      title: "Hướng dẫn vệ sinh phanh đĩa xe máy tại nhà",
      excerpt: "Các bước đơn giản để vệ sinh và bảo dưỡng phanh đĩa giúp xe phanh tốt hơn và an toàn hơn.",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500",
      category: "Hướng dẫn",
      date: "28/12/2024",
      author: "Admin"
    },
    {
      title: "So sánh các loại lọc gió thông dụng",
      excerpt: "Phân tích ưu nhược điểm của lọc gió giấy, lọc gió vải và lọc gió cao cấp K&N.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      category: "So sánh",
      date: "20/12/2024",
      author: "Admin"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Tin Tức & Mẹo Hay</h1>
            <p className="text-lg opacity-90">
              Cập nhật kiến thức bảo dưỡng và chăm sóc xe máy
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin mới nhất</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nhận thông tin về khuyến mãi, mẹo bảo dưỡng xe và tin tức mới nhất 
              từ XE PHÁO MÃ
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default News;
