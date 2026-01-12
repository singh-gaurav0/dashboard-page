"use client"

import { Home, Star } from "lucide-react"

interface HeaderProps {
  workbookName: string
  flowName: string
  gridName: string
  creditsUsed: number
  creditsTotal: number
}

export function Header({ workbookName, flowName, gridName, creditsUsed, creditsTotal }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
      {/* Left side - Breadcrumb */}
      <div className="flex items-center gap-2">
        <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
          <Home className="h-4 w-4 text-muted-foreground" />
        </button>
        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
        <span className="text-sm text-foreground font-medium">{workbookName}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground">{flowName}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground truncate max-w-32">{gridName}</span>
      </div>

      {/* Right side - Credits */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
          <span className="text-sm text-muted-foreground">⚡</span>
          <span className="text-sm font-medium text-foreground">
            {creditsUsed}/{creditsTotal}
          </span>
        </div>
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Free</span>
      </div>
    </header>
  )
}
