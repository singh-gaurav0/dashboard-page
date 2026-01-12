"use client"

import { ChevronDown, Upload, Rows3, Columns3, ArrowUpDown, Filter, Sparkles, Settings2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

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
      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Menu className="h-4 w-4" />
              Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem onClick={onLoadData} disabled={isRunning}>
              <Upload className="h-4 w-4 mr-2" />
              Load Data
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Rows3 className="h-4 w-4 mr-2" />
              {rowCount} Rows
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Columns3 className="h-4 w-4 mr-2" />
              {columnCount}/{totalColumns} Columns
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onSort?.("name")}>
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort by Name
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort?.("date")}>
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort by Date
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onFilter}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden sm:flex items-center gap-1 lg:gap-2 flex-wrap">
        {/* Load Data */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 bg-transparent text-xs lg:text-sm"
              disabled={isRunning}
            >
              <Upload className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <span className="hidden md:inline">Load Data</span>
              <Badge
                variant="secondary"
                className="h-4 w-4 lg:h-5 lg:w-5 p-0 flex items-center justify-center rounded-full bg-blue-500 text-white text-[10px] lg:text-xs"
              >
                1
              </Badge>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onLoadData}>Import CSV</DropdownMenuItem>
            <DropdownMenuItem>Import from CRM</DropdownMenuItem>
            <DropdownMenuItem>Paste data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Rows */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 bg-transparent text-xs lg:text-sm">
              <Rows3 className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              {rowCount} <span className="hidden lg:inline">Rows</span>
              <Badge
                variant="secondary"
                className="h-4 w-4 lg:h-5 lg:w-5 p-0 flex items-center justify-center rounded-full bg-blue-500 text-white text-[10px]"
              >
                •
              </Badge>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Show 100 rows</DropdownMenuItem>
            <DropdownMenuItem>Show 500 rows</DropdownMenuItem>
            <DropdownMenuItem>Show 1000 rows</DropdownMenuItem>
            <DropdownMenuItem>Show all rows</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Columns */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 bg-transparent text-xs lg:text-sm">
              <Columns3 className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              {columnCount}/{totalColumns} <span className="hidden lg:inline">Columns</span>
              <Badge
                variant="secondary"
                className="h-4 w-4 lg:h-5 lg:w-5 p-0 flex items-center justify-center rounded-full bg-blue-500 text-white text-[10px]"
              >
                •
              </Badge>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Select all columns</DropdownMenuItem>
            <DropdownMenuItem>Reset columns</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort By */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 bg-transparent text-xs lg:text-sm">
              <ArrowUpDown className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <span className="hidden md:inline">Sort by</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onSort?.("name")}>Name</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort?.("date")}>Last Updated</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSort?.("company")}>Company</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filter */}
        <Button variant="outline" size="sm" className="gap-1.5 bg-transparent text-xs lg:text-sm" onClick={onFilter}>
          <Filter className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
          <span className="hidden md:inline">Filter</span>
          <Badge
            variant="secondary"
            className="h-4 w-4 lg:h-5 lg:w-5 p-0 flex items-center justify-center rounded-full bg-blue-500 text-white text-[10px] lg:text-xs"
          >
            1
          </Badge>
        </Button>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-1 lg:gap-2">
        {/* Action */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 bg-transparent text-xs lg:text-sm">
              <span className="hidden sm:inline">Action</span>
              <span className="sm:hidden">Act</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Export selected</DropdownMenuItem>
            <DropdownMenuItem>Delete selected</DropdownMenuItem>
            <DropdownMenuItem>Bulk edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Enrichment */}
        <Button
          size="sm"
          className="gap-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs lg:text-sm"
          onClick={onEnrichment}
          disabled={isRunning}
        >
          <Sparkles className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
          <span className="hidden sm:inline">Enrichment</span>
          <ChevronDown className="h-3 w-3" />
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="h-7 w-7 lg:h-8 lg:w-8">
          <Settings2 className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
        </Button>
      </div>
    </div>
  )
}
