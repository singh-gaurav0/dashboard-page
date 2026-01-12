"use client"

import { ChevronRight, ExternalLink, User, Calendar } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { CompanyLogo } from "./company-logo"
import { StatusBadge } from "./status-badge"
import { AddColumnDialog } from "./add-column-dialog"
import type { LeadData } from "@/lib/constants/mock-data"
import type { ColumnConfig } from "@/lib/constants/column-config"

interface GridTableProps {
  columns: ColumnConfig[]
  data: LeadData[]
  placeholderRows: { id: number; importedData: string }[]
  selectedRows: number[]
  onRowSelect: (id: number) => void
  onSelectAll: () => void
  isAllSelected: boolean
  onAddColumn: (column: ColumnConfig) => void
}

function renderCell(column: ColumnConfig, row: LeadData) {
  const value = row[column.id as keyof LeadData]

  switch (column.type) {
    case "checkbox":
      return null // Handled separately
    case "index":
      return <span className="text-sm text-muted-foreground">{row.id}</span>
    case "text":
      if (column.id === "importedData") {
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <User className="h-3 w-3 text-blue-600" />
            </div>
            <span className="text-sm text-foreground font-medium truncate">{value}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
          </div>
        )
      }
      return <span className="text-sm text-foreground truncate">{value ?? "—"}</span>
    case "date":
      return (
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <span className="text-sm text-foreground truncate">{value}</span>
        </div>
      )
    case "company":
      return (
        <div className="flex items-center gap-2">
          <CompanyLogo company={row.companyLogo} />
          <span className="text-sm text-foreground truncate">{value}</span>
        </div>
      )
    case "link":
      return (
        <a
          href={value as string}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-blue-600 hover:underline truncate"
        >
          <ExternalLink className="h-3 w-3 shrink-0" />
          <span className="truncate">{value}</span>
        </a>
      )
    case "status":
      return <StatusBadge status={row.emailStatus} />
    default:
      return <span className="text-sm text-muted-foreground truncate">{value ?? "—"}</span>
  }
}

export function GridTable({
  columns,
  data,
  placeholderRows,
  selectedRows,
  onRowSelect,
  onSelectAll,
  isAllSelected,
  onAddColumn,
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
                  {col.type === "checkbox" ? (
                    <Checkbox checked={isAllSelected} onCheckedChange={onSelectAll} aria-label="Select all" />
                  ) : col.type === "index" ? (
                    ""
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-blue-500 font-semibold">f.</span>
                      <span className="truncate">{col.label}</span>
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
            {data.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  "transition-colors group",
                  selectedRows.includes(row.id) ? "bg-blue-50" : "hover:bg-muted/30",
                )}
              >
                {columns.map((col) => (
                  <td key={col.id} className={cn("px-3 py-2 border-b border-r border-border", col.width)}>
                    {col.type === "checkbox" ? (
                      <Checkbox
                        checked={selectedRows.includes(row.id)}
                        onCheckedChange={() => onRowSelect(row.id)}
                        aria-label={`Select row ${row.id}`}
                      />
                    ) : (
                      renderCell(col, row)
                    )}
                  </td>
                ))}
                <td className="border-b border-border min-w-[120px]"></td>
              </tr>
            ))}

            {/* Placeholder rows */}
            {placeholderRows.map((row) => (
              <tr key={row.id} className="bg-muted/10">
                {columns.map((col) => (
                  <td key={col.id} className={cn("px-3 py-2 border-b border-r border-border", col.width)}>
                    {col.type === "checkbox" ? (
                      <Checkbox disabled aria-label="Empty row" />
                    ) : col.type === "index" ? (
                      <span className="text-sm text-muted-foreground">{row.id}</span>
                    ) : col.id === "importedData" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                          <CompanyLogo company={row.importedData} />
                        </div>
                        <span className="text-sm text-muted-foreground">{row.importedData}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ) : null}
                  </td>
                ))}
                <td className="border-b border-border min-w-[120px]"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
