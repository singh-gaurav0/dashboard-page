"use client"

import Image from "next/image"
import {
  ChevronDown,
  ListFilter,
  Upload,
  Rows3,
  Columns3,
  ArrowUpDown,
  Filter,
  Sparkles,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { showV2Info } from "@/lib/toasts"

interface ToolbarProps {
  rowCount: number
  columnCount: number
  totalColumns: number
  isRunning: boolean
  onLoadData?: () => void
  onSort?: (field: string) => void
  onFilter?: () => void
  onEnrichment?: () => void
}

export function Toolbar({
  rowCount,
  columnCount,
  totalColumns,
  isRunning,
  onLoadData,
  onSort,
  onFilter,
  onEnrichment,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between px-2 sm:px-4 py-2 border-b border-border bg-muted/30 gap-2">
      {/* Mobile actions */}
      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Menu className="h-4 w-4" />
              Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem
              onClick={() => {
                showV2Info("Load Data")
                onLoadData?.()
              }}
              disabled={isRunning}
            >
              <Upload className="h-4 w-4 mr-2" />
              Load Data
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => showV2Info("Rows info")}>
              <Rows3 className="h-4 w-4 mr-2" />
              {rowCount} Rows
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => showV2Info("Columns info")}>
              <Columns3 className="h-4 w-4 mr-2" />
              {columnCount}/{totalColumns} Columns
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
                showV2Info("Sort by Name")
                onSort?.("name")
              }}
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort by Name
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => {
                showV2Info("Sort by Date")
                onSort?.("date")
              }}
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort by Date
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
                showV2Info("Filter")
                onFilter?.()
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop toolbar */}
      <div className="hidden sm:flex items-center gap-1 lg:gap-3 flex-wrap">
        {/* Load Data */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 bg-muted rounded-md text-xs lg:text-sm border-none"
                disabled={isRunning}
                onClick={() => showV2Info("Load Data")}
              >
                <Image
                  src="/icons/combined.svg"
                  alt="Credits"
                  width={14}
                  height={14}
                  className="h-5 w-7.5"
                />
                <span className="hidden md:inline">Load Data</span>
                <ChevronDown className="h-3 w-3 text-gray-700" />
              </Button>
              <span className="absolute -top-1 -right-1 h-[16px] w-[16px] rounded-full bg-blue-700 flex items-center justify-center text-[10px] font-medium text-white leading-none pointer-events-none">
                1
              </span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => showV2Info("Import CSV")}>
              Import CSV
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => showV2Info("Import from CRM")}>
              Import from CRM
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => showV2Info("Paste data")}>
              Paste data
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-6 w-px bg-border" />

        {/* Rows */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 bg-transparent text-xs lg:text-sm"
                onClick={() => showV2Info("Rows")}
              >
                <Image src="/icons/rows.svg" alt="row" width={14} height={14} className="h-3 w-3" />
                {rowCount} <span className="hidden lg:inline">Rows</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
              <span className="absolute top-0 right-0 h-[6px] w-[6px] rounded-full bg-blue-700" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>

        {/* Columns */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 bg-transparent text-xs lg:text-sm"
                onClick={() => showV2Info("Columns")}
              >
                <Image src="/icons/columns.svg" alt="col" width={14} height={14} className="h-3.5 w-3.5" />
                {columnCount}/{totalColumns} <span className="hidden lg:inline">Columns</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
              <span className="absolute top-0 right-0 h-[6px] w-[6px] rounded-full bg-blue-700" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>

        {/* Sort */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 bg-transparent text-xs lg:text-sm"
                onClick={() => showV2Info("Sort")}
              >
                <ArrowUpDown className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-gray-400" />
                <span className="hidden md:inline">Sort by</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Button>
              <span className="absolute top-0 right-0 h-[6px] w-[6px] rounded-full bg-blue-700" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>

        {/* Filter */}
        <div className="relative inline-flex">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 bg-transparent text-xs lg:text-sm"
            onClick={() => {
              showV2Info("Filter")
              onFilter?.()
            }}
          >
            <ListFilter className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-gray-400" />
            <span className="hidden md:inline">Filter</span>
          </Button>
          <span className="absolute -top-1 -right-1 h-[16px] w-[16px] rounded-full bg-blue-700 flex items-center justify-center text-[10px] font-medium text-white leading-none pointer-events-none">
            1
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1 lg:gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 bg-gray-100 border-none text-xs lg:text-sm">
              <span className="hidden sm:inline">Action</span>
              <span className="sm:hidden">Act</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => showV2Info("Export selected")}>
              Export selected
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => showV2Info("Delete selected")}>
              Delete selected
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => showV2Info("Bulk edit")}>
              Bulk edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          size="sm"
          onClick={() => {
            showV2Info("Enrichment")
            onEnrichment?.()
          }}
          disabled={isRunning}
          className="flex items-center justify-center gap-2 px-[3px] py-[2px] rounded-l-lg bg-gray-800 text-white text-xs lg:text-sm"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            <span className="hidden sm:inline">Enrichment</span>
          </div>
          <div className="h-6 w-px bg-white" />
          <ChevronDown className="h-3 w-3" />
        </Button>

        <Image src="/icons/spark.svg" alt="col" width={14} height={14} className="h-7 w-7" />
      </div>
    </div>
  )
}
