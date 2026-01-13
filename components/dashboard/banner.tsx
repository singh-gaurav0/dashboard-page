"use client"

import { AlertCircle, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BannerProps {
  type: "error" | "warning" | "info"
  message: string
  ctaText?: string
  onCtaClick?: () => void
  visible?: boolean
}

export function Banner({
  type,
  message,
  ctaText,
  onCtaClick,
  visible = true,
}: BannerProps) {
  if (!visible) return null

  const styles = {
    error: {
      bg: "bg-[#C81E1E]",
      icon: AlertCircle,
    },
    warning: {
      bg: "bg-amber-500",
      icon: AlertTriangle,
    },
    info: {
      bg: "bg-blue-500",
      icon: Info,
    },
  }

  const { bg, icon: Icon } = styles[type]

  return (
    <div
      className={cn(
        "w-full px-4 py-2 flex items-center gap-3",
        "justify-between lg:justify-center",
        bg
      )}
    >
      {/* Message + Icon */}
      <div className="flex items-center gap-2 min-w-0">
       

        <span
          className="
            text-white text-sm font-medium
            truncate
            max-w-[220px]
            sm:max-w-[420px]
            md:max-w-[640px]
          "
          title={message}
        >
          {message}
        </span>
        <Icon className="h-[18px] w-[18px] text-white shrink-0" />
      </div>

      {/* CTA — ALWAYS visible */}
      {ctaText && (
        <button
          onClick={onCtaClick}
          className="
            shrink-0
            px-3 sm:px-4 py-[4px]
            rounded-[8px]
            bg-white text-black
            border border-black
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
            hover:bg-white
            text-xs sm:text-sm
          "
        >
          {ctaText}
        </button>
      )}
    </div>
  )
}
