"use client"

import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { RefreshCw } from "lucide-react"
import { Banner } from "@/components/dashboard/banner"
import { Header } from "@/components/dashboard/header"
import { Toolbar } from "@/components/dashboard/toolbar"
import { GridTable } from "@/components/dashboard/grid-table"
import { FooterTabs } from "@/components/dashboard/footer-tabs"
import { mockLeads, placeholderRows } from "@/lib/constants/mock-data"
import { gridColumns as initialColumns, type ColumnConfig } from "@/lib/constants/column-config"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  // State management
  const [bannerVisible, setBannerVisible] = useState(true)
  const [isRunning, setIsRunning] = useState(true)
  const [progress, setProgress] = useState(10)
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("bitscale")
  const [columns, setColumns] = useState<ColumnConfig[]>(initialColumns)
  const [loadingRowIds, setLoadingRowIds] = useState<number[]>(
    Array.from({ length: 13 }, (_, i) => i + 8) 
  )
  const toastIdRef = useRef<string | number | null>(null)
  const [customColumnData, setCustomColumnData] = useState<Record<string, Record<number, string>>>({})

  // Called when user edits a cell in a column they added via "Add Column"
  const handleCellEdit = (columnId: string, rowId: number, value: string) => {
    setCustomColumnData((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        [rowId]: value,
      },
    }))
  }
  useEffect(() => {
    if (isRunning) {
      toastIdRef.current = toast.custom(
        () => (
          <div
            className="flex items-center gap-3 border border-border rounded-xl px-4 py-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // 90% opacity
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <span className="text-sm text-muted-foreground">
              Grid running
            </span>
      
            <Progress
              value={progress}
              className="w-32 h-2 [&>div]:bg-[#1A56DB]"
            />
      
            <span
              className="text-sm font-medium"
              style={{ color: "#1A56DB" }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        ),
        { duration: Number.POSITIVE_INFINITY, id: "grid-progress" }
      )
    } else {
      toast.dismiss("grid-progress")
    }
  }, [isRunning, progress])

  // Simulate async progress updates
  useEffect(() => {
    if (!isRunning) return
  
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 5
  
        if (next >= 100) {
          setIsRunning(false)
          return 100
        }
  
        return next
      })
    }, 700)
  
    return () => clearInterval(interval)
  }, [isRunning])
  

  useEffect(() => {
    if (!isRunning || loadingRowIds.length === 0) return

    const interval = setInterval(() => {
      setLoadingRowIds((prev) => {
        if (prev.length === 0) return prev
        // Remove one row from loading state
        return prev.slice(1)
      })
    }, 1500) // Reveal a new row every 1.5 seconds

    return () => clearInterval(interval)
  }, [isRunning, loadingRowIds.length])

  // Row selection handlers
  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    if (selectedRows.length === mockLeads.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(mockLeads.map((lead) => lead.id))
    }
  }

  const handleKillRun = () => {
    setIsRunning(false)
  }

  const handleAddColumn = (newColumn: ColumnConfig) => {
    setColumns((prev) => [...prev, newColumn])
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Dismissible Banner */}


      {/* Header with breadcrumb and progress */}
      <Header
        workbookName="Workbook - Bitscale UX /UI testing flow"
        flowName="Bitscale grid only "
        creditsUsed={500}
        creditsTotal={500}
      />
      <Banner
        type="error"
        message="Payment failed. 450,000 credits will permanently expire in 30 days"
        ctaText="Pay Now"
        onCtaClick={() => console.log("Navigate to payment")}
        visible={bannerVisible}
      />
      {/* Toolbar - updated columnCount to use dynamic columns */}
      <Toolbar
        rowCount={2000}
        columnCount={columns.length - 2} // Exclude checkbox and index columns
        totalColumns={20}
        isRunning={isRunning}
        onLoadData={() => console.log("Load data")}
        onSort={(field) => console.log("Sort by", field)}
        onFilter={() => console.log("Open filter")}
        onEnrichment={() => console.log("Enrichment")}
      />

      {/* Grid Table - added onAddColumn prop */}
      <GridTable
        columns={columns}
        data={mockLeads}
        loadingRowIds={loadingRowIds}
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        isAllSelected={selectedRows.length === mockLeads.length}
        onAddColumn={handleAddColumn}
        customColumnData={customColumnData}
        onCellEdit={handleCellEdit}
      />

      {/* Footer Tabs */}
      <FooterTabs activeTab={activeTab} onTabChange={setActiveTab} isRunning={isRunning} onKillRun={handleKillRun} />
    </div>
  )
}
