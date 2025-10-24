import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Khách hàng", value: "10.000+" },
    { icon: Award, label: "Năm kinh nghiệm", value: "15+" },
    { icon: Shield, label: "Sản phẩm chính hãng", value: "100%" },
    { icon: TrendingUp, label: "Tăng trưởng", value: "98%" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Chúng Tôi</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              CÔNG TY TNHH XE PHÁO MÃ - Đối tác tin cậy trong lĩnh vực phụ tùng xe máy
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Giới Thiệu Công Ty</h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  <strong>CÔNG TY TNHH XE PHÁO MÃ</strong> được thành lập với sứ mệnh cung cấp 
                  phụ tùng xe máy chính hãng, chất lượng cao với giá cả cạnh tranh nhất thị trường. 
                  Chúng tôi tự hào là đối tác tin cậy của hàng ngàn khách hàng cá nhân và doanh nghiệp 
                  trên toàn quốc.
                </p>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Thông Tin Công Ty</h3>
                  <ul className="space-y-2">
                    <li><strong>Tên công ty:</strong> CÔNG TY TNHH XE PHÁO MÃ</li>
                    <li><strong>Mã số thuế:</strong> 0319004288</li>
                    <li><strong>Địa chỉ:</strong> 179/58/10 Lê Đình Thám, phường Tân Sơn Nhì, quận Tân Phú, TP. Hồ Chí Minh</li>
                    <li><strong>Email:</strong> lengochoaithanh130597@gmail.com</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Cam Kết Của Chúng Tôi</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="font-bold mb-2 text-primary">🏆 Chất lượng đảm bảo</h4>
                    <p className="text-sm">100% phụ tùng chính hãng, có nguồn gốc xuất xứ rõ ràng</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="font-bold mb-2 text-primary">💰 Giá cả cạnh tranh</h4>
                    <p className="text-sm">Giá sỉ và lẻ hợp lý nhất thị trường</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="font-bold mb-2 text-primary">🚚 Giao hàng nhanh</h4>
                    <p className="text-sm">Giao hàng toàn quốc, nhanh chóng và an toàn</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="font-bold mb-2 text-primary">🤝 Hỗ trợ tận tâm</h4>
                    <p className="text-sm">Tư vấn chuyên nghiệp, hỗ trợ nhiệt tình 24/7</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Tầm Nhìn & Sứ Mệnh</h3>
                <p>
                  Chúng tôi không chỉ đơn thuần là nhà cung cấp phụ tùng xe máy, mà còn là 
                  người bạn đồng hành đáng tin cậy trong hành trình chăm sóc và bảo dưỡng xe 
                  của bạn. Với đội ngũ nhân viên giàu kinh nghiệm và am hiểu sâu sắc về các 
                  dòng xe, chúng tôi cam kết mang đến dịch vụ tốt nhất cho khách hàng.
                </p>

                <p>
                  <strong>Tầm nhìn:</strong> Trở thành nhà cung cấp phụ tùng xe máy hàng đầu 
                  Việt Nam, được khách hàng tin tưởng và lựa chọn.
                </p>

                <p>
                  <strong>Sứ mệnh:</strong> Cung cấp phụ tùng xe máy chất lượng cao với giá 
                  cả hợp lý, đồng hành cùng khách hàng trong việc bảo dưỡng và nâng cấp xe máy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
