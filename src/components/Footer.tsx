import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.svg";

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
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <img
                src={logo}
                alt="XE PHÁO MÃ"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
              <h3 className="text-base sm:text-lg font-bold">XE PHÁO MÃ</h3>
            </div>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              CÔNG TY TNHH XE PHÁO MÃ chuyên cung cấp phụ tùng xe máy chính
              hãng, giá sỉ và lẻ toàn quốc. Cam kết uy tín, chất lượng và giao
              hàng nhanh chóng.
            </p>
            <p className="text-xs sm:text-sm font-semibold">
              Mã số thuế: 0319004288
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Liên hệ
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  179/58/10 Lê Đình Thám, phường Tân Sơn Nhì, quận Tân Phú, TP.
                  Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:lengochoaithanh130597@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  lengochoaithanh130597@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Danh mục
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/products?category=honda"
                  className="hover:text-primary transition-colors"
                >
                  Phụ tùng Honda
                </a>
              </li>
              <li>
                <a
                  href="/products?category=yamaha"
                  className="hover:text-primary transition-colors"
                >
                  Phụ tùng Yamaha
                </a>
              </li>
              <li>
                <a
                  href="/products?category=suzuki"
                  className="hover:text-primary transition-colors"
                >
                  Phụ tùng Suzuki
                </a>
              </li>
              <li>
                <a
                  href="/products?category=sym"
                  className="hover:text-primary transition-colors"
                >
                  Phụ tùng SYM
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="hover:text-primary transition-colors"
                >
                  Tin tức
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Đăng ký nhận tin
            </h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              Nhận thông tin khuyến mãi và sản phẩm mới nhất
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-white placeholder:text-gray-400 border-background/20 text-foreground placeholder:text-muted-foreground text-sm"
              />
              <Button type="submit" className="w-full text-sm">
                Đăng ký
              </Button>
            </form>

            {/* Social links */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm">
          <p>&copy; 2025 CÔNG TY TNHH XE PHÁO MÃ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
