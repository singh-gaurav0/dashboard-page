"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface CompanyLogoProps {
  company: string
  className?: string
}

export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const companyKey = company.toLowerCase().replace(/\s+/g, "-")
  const iconPath = `/companies/${companyKey}.svg`
  const [hasError, setHasError] = useState(false)
  return (
    <div
    className={cn(
      "w-[14px] h-[14px] flex items-center justify-center shrink-0",
      className
    )}
  >
    {hasError ? (
      <span className="text-[10px] font-medium text-muted-foreground leading-none">
        {company.charAt(0).toUpperCase()}
      </span>
    ) : (
      <Image
        src={iconPath}
        alt={company}
        width={14}
        height={14}
        className="object-contain"
        onError={() => setHasError(true)}
      />
    )}
  </div>
  )
}
