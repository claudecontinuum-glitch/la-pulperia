"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  whatsapp: string;
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WhatsAppButton({
  whatsapp,
  text = "WhatsApp",
  className,
  size = "md",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(`https://wa.me/${whatsapp}`, "_blank");
  };

  const sizeClasses = {
    sm: "h-10 px-3 text-sm",
    md: "h-12 px-4 text-base",
    lg: "h-14 px-6 text-lg",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 font-semibold text-white transition-colors hover:bg-green-600 active:bg-green-700",
        sizeClasses[size],
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </button>
  );
}
