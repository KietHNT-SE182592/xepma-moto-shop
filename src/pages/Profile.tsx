import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, LogOut, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, updateProfile, orders } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Đăng xuất
            </Button>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Thông tin cá nhân</TabsTrigger>
              <TabsTrigger value="orders">Đơn hàng của tôi</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin cá nhân</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        disabled
                        className="bg-muted"
                      />
                      <p className="text-xs text-muted-foreground">Email không thể thay đổi</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Cập nhật thông tin
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Lịch sử đơn hàng</CardTitle>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <div className="text-center py-12 space-y-4">
                      <Package className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground">Bạn chưa có đơn hàng nào</p>
                      <Button asChild>
                        <Link to="/products">Mua sắm ngay</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <Card key={order.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <p className="font-semibold">Đơn hàng #{order.id}</p>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(order.date).toLocaleDateString("vi-VN")}
                                </p>
                              </div>
                              <Badge>{order.status}</Badge>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    {item.name} × {item.quantity}
                                  </span>
                                  <span className="font-semibold">
                                    {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                                  </span>
                                </div>
                              ))}
                            </div>

                            {order.discount && order.discount > 0 && (
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">
                                  Mã giảm giá: {order.discountCode}
                                </span>
                                <span className="text-green-600 font-semibold">
                                  -{(order.discount * 100).toFixed(0)}%
                                </span>
                              </div>
                            )}

                            <div className="flex justify-between items-center pt-4 border-t">
                              <span className="font-semibold">Tổng cộng</span>
                              <span className="text-xl font-bold text-primary">
                                {order.total.toLocaleString("vi-VN")}đ
                              </span>
                            </div>

                            <div className="mt-4 pt-4 border-t text-sm">
                              <p className="text-muted-foreground mb-1">Thông tin giao hàng:</p>
                              <p>{order.customerInfo.name}</p>
                              <p>{order.customerInfo.phone}</p>
                              <p>{order.customerInfo.address}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
