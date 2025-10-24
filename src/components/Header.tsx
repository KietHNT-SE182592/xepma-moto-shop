import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingCart, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { items, totalItems } = useCart();
  const { user } = useAuth();

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Sản phẩm", path: "/products" },
    { name: "Tin tức", path: "/news" },
    { name: "Liên hệ", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="XE PHÁO MÃ" className="h-12 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">XE PHÁO MÃ</h1>
              <p className="text-xs text-muted-foreground">Phụ tùng xe máy chính hãng</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* User Menu */}
          <div className="flex items-center space-x-2">
            {user ? (
              <Button variant="outline" size="icon" asChild>
                <Link to="/profile">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" asChild className="hidden md:flex">
                <Link to="/auth">Đăng nhập</Link>
              </Button>
            )}

            {/* Cart with Preview */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <h3 className="font-semibold">Giỏ hàng của bạn</h3>
                  {items.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-4 text-center">
                      Giỏ hàng trống
                    </p>
                  ) : (
                    <>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto">
                        {items.slice(0, 3).map((item) => (
                          <Card key={item.id}>
                            <CardContent className="p-3">
                              <div className="flex gap-3">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {item.quantity} × {item.price.toLocaleString("vi-VN")}đ
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                        {items.length > 3 && (
                          <p className="text-sm text-muted-foreground text-center">
                            ...và {items.length - 3} sản phẩm khác
                          </p>
                        )}
                      </div>
                      <div className="space-y-2 pt-2 border-t">
                        <Button className="w-full" asChild>
                          <Link to="/cart">Xem giỏ hàng</Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Navigation - desktop */}
        <nav className="hidden md:flex items-center justify-center space-x-1 py-3">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button variant="ghost" className="font-medium">
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Button variant="ghost" className="w-full justify-start font-medium">
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
