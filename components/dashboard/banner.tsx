"use client"

import { X, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BannerProps {
  type: "error" | "warning" | "info"
  message: string
  ctaText?: string
  onCtaClick?: () => void
  onDismiss?: () => void
  visible?: boolean
}

export function Banner({ type, message, ctaText, onCtaClick, onDismiss, visible = true }: BannerProps) {
  if (!visible) return null

  const styles = {
    error: {
      bg: "bg-red-500",
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
    <div className={cn("w-full py-2 px-4 flex items-center justify-center gap-3", bg)}>
      <Icon className="h-4 w-4 text-white shrink-0" />
      <span className="text-white text-sm font-medium">{message}</span>
      {ctaText && (
        <Button
          variant="secondary"
          size="sm"
          className="h-7 px-3 bg-white text-gray-900 hover:bg-gray-100 font-medium"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      )}
      {onDismiss && (
        <button onClick={onDismiss} className="ml-auto text-white/80 hover:text-white" aria-label="Dismiss banner">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
