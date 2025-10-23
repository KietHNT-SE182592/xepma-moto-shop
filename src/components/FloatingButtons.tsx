import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const phoneNumber = "0123456789"; // Có thể cập nhật số thật
  const zaloNumber = "0123456789"; // Có thể cập nhật số thật

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* Zalo button */}
      <a
        href={`https://zalo.me/${zaloNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#0068FF] hover:bg-[#0052CC]"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat Zalo
        </span>
      </a>

      {/* Call button */}
      <a href={`tel:${phoneNumber}`} className="group">
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Phone className="h-6 w-6" />
        </Button>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Gọi ngay
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
