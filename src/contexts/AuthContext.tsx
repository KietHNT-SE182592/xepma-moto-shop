import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  customerInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
    note?: string;
  };
  discount?: number;
  discountCode?: string;
  date: string;
  status: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "userId" | "date">) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.find((u: User) => u.email === email)) {
      toast({ title: "Email đã được đăng ký", variant: "destructive" });
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
    };

    users.push({ ...newUser, password });
    localStorage.setItem("users", JSON.stringify(users));
    setUser(newUser);
    toast({ title: "Đăng ký thành công!" });
    return true;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      toast({ title: "Đăng nhập thành công!" });
      return true;
    }

    toast({ title: "Email hoặc mật khẩu không đúng", variant: "destructive" });
    return false;
  };

  const logout = () => {
    setUser(null);
    toast({ title: "Đã đăng xuất" });
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...data };
      setUser(updated);
      
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const index = users.findIndex((u: any) => u.id === user.id);
      if (index !== -1) {
        users[index] = { ...users[index], ...data };
        localStorage.setItem("users", JSON.stringify(users));
      }
      
      toast({ title: "Cập nhật thông tin thành công" });
    }
  };

  const addOrder = (order: Omit<Order, "id" | "userId" | "date">) => {
    if (!user) return;
    
    const newOrder: Order = {
      ...order,
      id: Date.now().toString(),
      userId: user.id,
      date: new Date().toISOString(),
      status: "Đang xử lý",
    };
    
    setOrders((prev) => [newOrder, ...prev]);
    toast({ title: "Đơn hàng đã được tạo thành công!" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        orders: orders.filter((o) => o.userId === user?.id),
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
