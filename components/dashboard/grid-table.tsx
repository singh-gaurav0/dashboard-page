"use client"

import { ChevronRight, ExternalLink, Building2, CalendarPlus, Mail, Play } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { CompanyLogo } from "./company-logo"
import { StatusBadge } from "./status-badge"
import { AddColumnDialog } from "./add-column-dialog"
import { SkeletonCell } from "./skeleton-cell"
import type { LeadData } from "@/lib/constants/mock-data"
import type { ColumnConfig } from "@/lib/constants/column-config"
import Image from "next/image"
import { EditableCell } from "./editable-cell"
const originalColumnIds = [
  "index",
  "importedData",
  "lastUpdatedAt",
  "companyName",
  "companyWebsite",
  "linkedInJobUrl",
  "emailStatus",
]
interface GridTableProps {
  columns: ColumnConfig[]
  data: LeadData[]
  loadingRowIds: number[]
  selectedRows: number[]
  onRowSelect: (id: number) => void
  onSelectAll: () => void
  isAllSelected: boolean
  onAddColumn: (column: ColumnConfig) => void
  customColumnData?: Record<string, Record<number, string>> // { columnId: { rowId: value } }
  onCellEdit?: (columnId: string, rowId: number, value: string) => void
}

function renderCell(column: ColumnConfig, row: LeadData ) {
  const value = row[column.id as keyof LeadData]

  switch (column.type) {
    case "checkbox":
      return null // Handled separately
    case "index":
      return <span className="text-sm text-muted-foreground">{row.id}</span>
      case "text":
        if (column.id === "importedData") {
          const importedValue = row.importedData?.trim()
          const displayValue = importedValue || row.companyName
          const hasImportedData = Boolean(importedValue)
      
          return (
            <div
  className={cn(
    "flex items-center justify-between rounded-full px-2 py-1",
    hasImportedData ? "bg-[#E7F3F8]" : "bg-[#EDF3EC]"
  )}
>
  {/* Left side: icon + text (8px gap) */}
  <div className="flex items-center gap-2 min-w-0">
  {hasImportedData ? (
    <Image
      src="/icons/person.svg"   // 👈 your SVG in public folder
      alt="Imported user"
      width={16}
      height={16}
      className="text-blue-600"
    />
  ) : (
    <Building2 className="h-4 w-4 text-green-700" />
  )}

    <span className="text-xs text-gray-700 font-normal truncate">
      {displayValue}
    </span>
  </div>

  {/* Right side: chevron */}
  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 ml-2" />
</div>

          )
        }
      
        return <span className="text-xs text-gray-700 truncate">{value ?? "—"}</span>
      
    case "date":
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-700 truncate">{value}</span>
        </div>
      )
    case "company":
      return (
        <div className="flex items-center gap-2">
          <CompanyLogo company={row.companyLogo} />
          <span className="text-xs text-gray-900 truncate">{value}</span>
        </div>
      )
    case "link":
      return (
        <a
          href={value as string}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-gray-600 hover:underline truncate"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          <span className="truncate">{value}</span>
        </a>
      )
    case "status":
      return <StatusBadge
      status={row.emailStatus}
      email={row.email}
    />
    default:
      return <span className="text-sm text-muted-foreground truncate">{value ?? "—"}</span>
  }
}

export function GridTable({
  columns,
  data,
  loadingRowIds,
  selectedRows,
  onSelectAll,
  isAllSelected,
  onAddColumn,
  customColumnData = {},
  onCellEdit,
}: GridTableProps) {
  return (
    <div className="flex-1 overflow-auto border-t border-border">
      <div className="min-w-max">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-muted/80 backdrop-blur-sm">
          <tr>
  {columns.map((col) => (
    <th
      key={col.id}
      className={cn(
        "px-3 py-2.5 text-left text-xs font-medium text-muted-foreground border-b border-r border-border bg-muted/80",
        col.width,
      )}
    >
      {col.type === "index" ? (
        <div className="flex items-center justify-between gap-2">
          <Checkbox
            checked={isAllSelected}
            onCheckedChange={onSelectAll}
            aria-label="Select all"
          />

          <Play className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center min-w-0",
            col.id === "emailStatus" ? "justify-between" : "gap-2"
          )}
        >
          {/* LEFT: icon + label */}
          <div className="flex items-center gap-2 min-w-0">
            {col.id === "importedData" ? (
              <CalendarPlus className="h-3.5 w-3.5 text-gray-500 shrink-0" />
            ) : col.id === "emailStatus" ? (
              <Mail className="h-3.5 w-3.5 text-gray-500 shrink-0" />
            ) : (
              <Image
                src="/icons/f.svg"
                alt="Column icon"
                width={16}
                height={16}
                className="shrink-0"
              />
            )}

            <span className="truncate">{col.label}</span>
          </div>

          {/* RIGHT: play icon ONLY for emailStatus */}
          {col.id === "emailStatus" && (
            <Play className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          )}
        </div>
      )}
    </th>
  ))}

  <th className="border-b border-border bg-muted/80 p-0">
    <AddColumnDialog onAddColumn={onAddColumn} />
  </th>
</tr>
          </thead>

          <tbody>
            {/* Data rows */}
            {data.map((row) => {
              const isLoading = loadingRowIds.includes(row.id)

              return (
                <tr
                  key={row.id}
                  className={cn(
                    "transition-colors group",
                    selectedRows.includes(row.id) ? "bg-blue-50" : "hover:bg-muted/30",
                  )}
                >
                  {columns.map((col) => {
                    // Custom columns are editable, original columns are not
                    const isCustomColumn = !originalColumnIds.includes(col.id)

                    return (
                      <td
                        key={col.id}
                        className={cn(
                          "px-3 py-2 border-b border-r border-border",
                          col.width,
                          col.type === "index" && "text-center",
                        )}
                      >
                        {col.type === "index" ? (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-sm text-muted-foreground">{row.id}</span>
                          </div>
                        ) : isLoading ? (
                          <SkeletonCell type={col.type} />
                        ) : isCustomColumn && onCellEdit ? (
                          // Gets value from customColumnData state, calls onCellEdit when changed
                          <EditableCell
                            value={customColumnData[col.id]?.[row.id] || ""}
                            onChange={(value) => onCellEdit(col.id, row.id, value)}
                            type={col.type as "text" | "link" | "date"}
                          />
                        ) : (
                          // Original columns use renderCell (read-only)
                          renderCell(col, row)
                        )}
                      </td>
                    )
                  })}
                  <td className="border-b border-border min-w-[120px]"></td>
                </tr>
              )
            })}

            {/* Placeholder rows */}
            {/* {placeholderRows.map((row) => (
              <tr key={`placeholder-${row.id}`} className="transition-colors hover:bg-muted/30">
                {columns.map((col) => (
                  <td key={col.id} className={cn("px-3 py-2 border-b border-r border-border", col.width)}>
                    {col.type === "index" ? (
                      <span className="text-sm text-muted-foreground">{row.id}</span>
                    ) : col.id === "importedData" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <User className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-sm text-foreground font-medium truncate">{row.importedData}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
                  </td>
                ))}
                <td className="border-b border-border min-w-[120px]"></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
