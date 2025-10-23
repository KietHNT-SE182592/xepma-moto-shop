import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4 py-12">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
            <h2 className="text-2xl font-bold">Giỏ hàng trống</h2>
            <p className="text-muted-foreground">Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
            <Button asChild>
              <Link to="/products">Mua sắm ngay</Link>
            </Button>
          </div>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <Link to={`/products/${item.id}`} className="font-semibold hover:text-primary">
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                        <p className="text-lg font-bold text-primary mt-2">
                          {item.price.toLocaleString("vi-VN")}đ
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">Tóm tắt đơn hàng</h2>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tạm tính</span>
                      <span className="font-semibold">{totalPrice.toLocaleString("vi-VN")}đ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phí vận chuyển</span>
                      <span className="font-semibold">Miễn phí</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Tổng cộng</span>
                      <span className="text-2xl font-bold text-primary">
                        {totalPrice.toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/checkout">Tiến hành thanh toán</Link>
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">Tiếp tục mua sắm</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Cart;
