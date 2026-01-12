"use client"

import {
  Plus,
  Grid3X3,
  Table,
  Users,
  BarChart3,
  Target,
  Zap,
  StopCircle,
  Play,
  Layers,
  Headphones,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface FooterTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isRunning: boolean
  onKillRun: () => void
}

const tabs = [
  { id: "grid", label: "Grid", icon: Grid3X3 },
  { id: "bitscale", label: "Bitscale grid only", icon: Table, active: true },
  { id: "engagement", label: "User Engagement...", icon: Users },
  { id: "insights", label: "Customer Insights...", icon: BarChart3 },
  { id: "audience", label: "Audience Interact...", icon: Target },
  { id: "lead", label: "Lead Generation...", icon: Zap },
]

export function FooterTabs({ activeTab, onTabChange, isRunning, onKillRun }: FooterTabsProps) {
  return (
    <div className="flex items-center justify-between px-2 py-1 border-t border-border bg-muted/30">
      {/* Left - Tabs */}
      <div className="flex items-center gap-1 min-w-0 overflow-x-auto">
        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 shrink-0">
          <Plus className="h-4 w-4" />
        </Button>

        {tabs.slice(0, 2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap shrink-0",
              activeTab === tab.id ? "bg-green-100 text-green-700 font-medium" : "text-muted-foreground hover:bg-muted",
            )}
          >
            <tab.icon className="h-3 w-3" />
            {tab.label}
            {tab.id === "bitscale" && <span className="text-muted-foreground">:</span>}
          </button>
        ))}

        {tabs.slice(2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap shrink-0",
              activeTab === tab.id ? "bg-green-100 text-green-700 font-medium" : "text-muted-foreground hover:bg-muted",
            )}
          >
            <tab.icon className="h-3 w-3" />
            {tab.label}
          </button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 shrink-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {tabs.slice(2).map((tab) => (
              <DropdownMenuItem key={tab.id} onClick={() => onTabChange(tab.id)}>
                <tab.icon className="h-3 w-3 mr-2" />
                {tab.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ChevronRight />
      </div>

      {/* Right - Actions: visible on lg+, collapsed to dropdown on smaller */}
      <div className="hidden lg:flex items-center gap-2 shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={onKillRun}
          disabled={!isRunning}
        >
          <StopCircle className="h-3 w-3" />
          Kill Run
        </Button>

        <Button variant="ghost" size="sm" className="h-7 gap-1.5">
          <Play className="h-3 w-3" />
          Auto Run
        </Button>

        <Button variant="ghost" size="sm" className="h-7 gap-1.5">
          <Layers className="h-3 w-3" />
          Auto Dedupe
        </Button>

        <Button variant="ghost" size="sm" className="h-7 gap-1.5">
          <Headphones className="h-3 w-3" />
          Support
        </Button>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0 shrink-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={onKillRun} disabled={!isRunning} className="text-red-500 focus:text-red-500">
            <StopCircle className="h-3 w-3 mr-2" />
            Kill Run
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Play className="h-3 w-3 mr-2" />
            Auto Run
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Layers className="h-3 w-3 mr-2" />
            Auto Dedupe
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Headphones className="h-3 w-3 mr-2" />
            Support
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function ChevronRight() {
  return (
    <svg className="h-4 w-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}
