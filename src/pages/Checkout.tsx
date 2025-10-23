import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
    address: user?.address || "",
    note: "",
    discountCode: "",
  });

  const [discount, setDiscount] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleApplyDiscount = () => {
    if (formData.discountCode.toUpperCase() === "XEPAHOMA10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const finalTotal = totalPrice * (1 - discount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      return;
    }

    // Lưu đơn hàng
    addOrder({
      items: items.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: finalTotal,
      customerInfo: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        note: formData.note,
      },
      discount: discount,
      discountCode: formData.discountCode || undefined,
      status: "Đang xử lý",
    });

    clearCart();
    setOrderSuccess(true);
  };

  if (items.length === 0 && !orderSuccess) {
    navigate("/cart");
    return null;
  }

  if (orderSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold">Đặt hàng thành công!</h2>
              <p className="text-muted-foreground">
                Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
              </p>
              <div className="space-y-2 pt-4">
                <Button className="w-full" asChild>
                  <Link to="/">Về trang chủ</Link>
                </Button>
                {user && (
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/profile">Xem đơn hàng</Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold">Thông tin khách hàng</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ giao hàng *</Label>
                      <Textarea
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="note">Ghi chú đơn hàng</Label>
                      <Textarea
                        id="note"
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        rows={3}
                        placeholder="Yêu cầu đặc biệt về đơn hàng..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold">Đơn hàng của bạn</h2>
                    
                    <div className="space-y-3 border-b pb-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="font-semibold">
                            {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tạm tính</span>
                        <span className="font-semibold">{totalPrice.toLocaleString("vi-VN")}đ</span>
                      </div>

                      {/* Discount Code */}
                      <div className="space-y-2 border-t pt-3">
                        <Label htmlFor="discount">Mã giảm giá</Label>
                        <div className="flex gap-2">
                          <Input
                            id="discount"
                            placeholder="XEPAHOMA10"
                            value={formData.discountCode}
                            onChange={(e) => setFormData({ ...formData, discountCode: e.target.value })}
                          />
                          <Button type="button" variant="outline" onClick={handleApplyDiscount}>
                            Áp dụng
                          </Button>
                        </div>
                        {discount > 0 && (
                          <p className="text-sm text-green-600">
                            Giảm giá {(discount * 100).toFixed(0)}%
                          </p>
                        )}
                      </div>

                      {discount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Giảm giá</span>
                          <span className="font-semibold text-green-600">
                            -{(totalPrice * discount).toLocaleString("vi-VN")}đ
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">Tổng cộng</span>
                        <span className="text-2xl font-bold text-primary">
                          {finalTotal.toLocaleString("vi-VN")}đ
                        </span>
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Đặt hàng
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
