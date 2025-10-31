import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Có thể tích hợp email service hoặc backend API
    toast.success("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Liên Hệ
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6 lg:order-1">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span>Địa chỉ</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs sm:text-sm">
                      179/58/10 Lê Đình Thám, phường Tân Sơn Nhì,
                      <br />
                      quận Tân Phú, TP. Hồ Chí Minh
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <a
                      href="mailto:lengochoaithanh130597@gmail.com"
                      className="text-xs sm:text-sm hover:text-primary transition-colors break-all"
                    >
                      lengochoaithanh130597@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span>Giờ làm việc</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs sm:text-sm">
                      Thứ 2 - Thứ 7: 8:00 - 18:00
                      <br />
                      Chủ nhật: 8:00 - 12:00
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    Gửi tin nhắn cho chúng tôi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-medium mb-2 block">
                          Họ và tên <span className="text-destructive">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nguyễn Văn A"
                          required
                          className="border-background/20 text-foreground placeholder:text-muted-foreground text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm font-medium mb-2 block">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                          className="border-background/20 text-foreground placeholder:text-muted-foreground text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">
                        Số điện thoại
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0123456789"
                        className="border-background/20 text-foreground placeholder:text-muted-foreground text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">
                        Nội dung <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập nội dung cần tư vấn..."
                        rows={4}
                        required
                        className="border-background/20 text-foreground placeholder:text-muted-foreground text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Gửi tin nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-6 sm:py-8 md:py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
              Vị trí cửa hàng
            </h2>
            <div className="w-full">
              <div className="aspect-video w-full max-w-full mx-auto rounded-lg overflow-hidden shadow-lg border-2 sm:border-4 border-gray-400">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1264891957537!2d106.62502631531352!3d10.804766161690887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752813b0fe6d6b%3A0x8c02a9e8e7b8c2f0!2zVMOibiBIxrDGoW5nLCBUw6JuIFF1w70sIFTDom4gUGjDuiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1642425676543!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Bản đồ XE PHÁO MÃ"
                />
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

export default Contact;
