import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Đăng ký nhận tin thành công!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="XE PHÁO MÃ" className="h-12 w-auto" />
              <h3 className="text-lg font-bold">XE PHÁO MÃ</h3>
            </div>
            <p className="text-sm mb-4">
              CÔNG TY TNHH XE PHÁO MÃ chuyên cung cấp phụ tùng xe máy chính hãng, 
              giá sỉ và lẻ toàn quốc. Cam kết uy tín, chất lượng và giao hàng nhanh chóng.
            </p>
            <p className="text-sm font-semibold">Mã số thuế: 0319004288</p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>179/58/10 Lê Đình Thám, phường Tân Sơn Nhì, quận Tân Phú, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:lengochoaithanh130597@gmail.com" className="hover:text-primary transition-colors">
                  lengochoaithanh130597@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Danh mục</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/products?category=honda" className="hover:text-primary transition-colors">Phụ tùng Honda</a></li>
              <li><a href="/products?category=yamaha" className="hover:text-primary transition-colors">Phụ tùng Yamaha</a></li>
              <li><a href="/products?category=suzuki" className="hover:text-primary transition-colors">Phụ tùng Suzuki</a></li>
              <li><a href="/products?category=sym" className="hover:text-primary transition-colors">Phụ tùng SYM</a></li>
              <li><a href="/news" className="hover:text-primary transition-colors">Tin tức</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Đăng ký nhận tin</h3>
            <p className="text-sm mb-4">Nhận thông tin khuyến mãi và sản phẩm mới nhất</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" className="w-full">
                Đăng ký
              </Button>
            </form>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 CÔNG TY TNHH XE PHÁO MÃ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
