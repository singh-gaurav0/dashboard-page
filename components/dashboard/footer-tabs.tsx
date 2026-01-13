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
  Delete,
  Hourglass,
  FlipVertical2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { showV2Info } from "@/lib/toasts"
interface FooterTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isRunning: boolean
  onKillRun: () => void
}

const tabs = [
  { id: "bitscale", label: "Bitscale grid only", icon: Table, active: true },
  { id: "engagement", label: "User Engagement", icon: Users },
  { id: "insights", label: "Customer Insights", icon: BarChart3 },
  { id: "audience", label: "Audience Interaction", icon: Target },
  { id: "lead", label: "Lead Generation", icon: Zap },
]

export function FooterTabs({ activeTab, onTabChange, isRunning, onKillRun }: FooterTabsProps) {
  return (
    <div className="flex items-center justify-between px-2 py-1 border-t border-border bg-muted/30">
      {/* Left - Tabs */}
      <div className="flex items-center gap-1 min-w-0 overflow-x-auto">
      <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg px-2 py-1">
      <button
    className=" p-0 shrink-0"
    onClick={() => showV2Info("Grid creation")}
  >
    <Plus className="h-4 w-4" />
  </button>
  <span className="text-xs text-foreground">Grid</span>


</div>

        {tabs.slice(0, 2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
  showV2Info(tab.label)
  onTabChange(tab.id)
}}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap shrink-0",
              activeTab === tab.id ? "bg-white text-blue-700 font-medium" : "text-muted-foreground hover:bg-muted",
            )}
          >
            {tab.label}
            {tab.id === "bitscale" && <span className="text-muted-foreground">:</span>}
          </button>
        ))}

        {tabs.slice(2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
  showV2Info(tab.label)
  onTabChange(tab.id)
}}
            className={cn(
              "hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap shrink-0",
              activeTab === tab.id ? "bg-white text-blue-700 font-medium" : "text-muted-foreground hover:bg-muted",
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
              <DropdownMenuItem key={tab.id} onClick={() => {
  showV2Info(tab.label)
  onTabChange(tab.id)
}}>
                <tab.icon className="h-3 w-3 mr-2" />
                {tab.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ChevronRight />
      </div>

      {/* Right - Actions: visible on lg+, collapsed to dropdown on smaller */}
      <div className="hidden lg:flex items-center gap-3 shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 text-red-700 hover:text-red-600 hover:bg-red-50"
          onClick={onKillRun}
          disabled={!isRunning}
        >
          <Delete  className="h-3 w-3" />
          Kill Run
        </Button>
        <div className="h-6 w-px bg-border" />
        <div className="relative inline-flex">
        <Button onClick={() => showV2Info("Auto Run")} variant="ghost" size="sm" className="h-7 gap-1.5 border border-[#E5E7EB]">
          <Hourglass  className="h-3 text-gray-500 w-3" />
          Auto Run
        </Button>
        <span className="absolute top-0 right-0 h-[6px] w-[6px] rounded-full bg-blue-700" />
        </div>
        <div className="relative inline-flex">
        <Button onClick={() => showV2Info("Auto Dedupe")} variant="ghost" size="sm" className="h-7 gap-1.5 border border-[#E5E7EB]">
          <FlipVertical2 className="h-3 w-3" />
          Auto Dedupe
        </Button>
        <span className="absolute top-0 right-0 h-[6px] w-[6px] rounded-full bg-blue-700" />
        </div>

        <Button onClick={() => showV2Info("Support")} variant="ghost" size="sm" className="h-7 gap-1.5 border rounded-full bg-gray-100 border-[#E5E7EB]">
        <Image
            src="/icons/support.svg"
            alt="support"
            width={14}
            height={14}
            className="shrink-0"
          />
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
            <Delete className="h-3 w-3 mr-2" />
            Kill Run
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => showV2Info("Auto Run")}>
            <Hourglass className="h-3 w-3 mr-2" />
            Auto Run
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => showV2Info("Auto Dedupe")}>
            <FlipVertical2 className="h-3 w-3 mr-2" />
            Auto Dedupe
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => showV2Info("Support")}>
          <Image
            src="/icons/support.svg"
            alt="support"
            width={14}
            height={14}
            className="shrink-0"
          />
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
