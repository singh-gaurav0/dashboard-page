"use client"

import { Home, Star, CloudCheck } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  workbookName: string
  flowName: string
  creditsUsed: number
  creditsTotal: number
}

export function Header({ workbookName, flowName, creditsUsed, creditsTotal }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background gap-4">
      {/* Left side - Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <button className="p-1 bg-muted rounded-md transition-colors shrink-0">
          <Home className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Star hidden on small screens */}
        <Star className="hidden sm:block h-4 w-4 text-amber-400 fill-amber-400 shrink-0" />

        {/* Breadcrumb text */}
        <div className="flex items-center gap-1 min-w-0 text-sm">
          {/* Workbook */}
          <span className="
  hidden md:block
  text-muted-foreground font-medium
  truncate max-w-[180px]
  lg:truncate-none lg:max-w-none
">
            {workbookName}
          </span>

          {/* Slash */}
          <span className="hidden md:block text-muted-foreground">/</span>

          {/* Flow name (always visible, truncated) */}
          <span className="text-foreground font-medium truncate lg:truncate-none max-w-[200px] sm:max-w-[280px]">
            {flowName}
          </span>
        </div>
      </div>

      {/* Right side - Credits */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Sync icon hidden on very small screens */}
        <CloudCheck className="hidden sm:block w-4 h-4 text-muted-foreground" />

        <div className="flex items-center gap-2 px-2 py-1 bg-[#EDF3EC] rounded-md">
          <Image
            src="/icons/coins.svg"
            alt="Credits"
            width={14}
            height={14}
            className="shrink-0"
          />

          {/* Credits text truncates */}
          <span className="text-xs sm:text-sm font-medium text-[#438361] truncate max-w-[80px]">
            {creditsUsed}/{creditsTotal}
          </span>

          {/* Badge hidden on small screens */}
          <span className="hidden sm:inline px-[7px] py-[1.75px] bg-[#438361] text-white text-xs font-medium rounded">
            Free
          </span>
        </div>
      </div>
    </header>
  )
}
