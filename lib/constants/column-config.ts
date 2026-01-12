// Column configuration for the grid table
export interface ColumnConfig {
  id: string
  label: string
  width: string
  type: "text" | "date" | "link" | "company" | "status" | "checkbox" | "index"
  sortable?: boolean
}

export const gridColumns: ColumnConfig[] = [
  { id: "checkbox", label: "", width: "w-10 min-w-[40px]", type: "checkbox" },
  { id: "index", label: "", width: "w-10 min-w-[40px]", type: "index" },
  { id: "importedData", label: "Imported Data", width: "min-w-[180px]", type: "text", sortable: true },
  { id: "lastUpdatedAt", label: "Last Updated At", width: "min-w-[200px]", type: "date", sortable: true },
  { id: "companyName", label: "Company Name", width: "min-w-[150px]", type: "company", sortable: true },
  { id: "companyWebsite", label: "Company Website", width: "min-w-[200px]", type: "link" },
  { id: "linkedInJobUrl", label: "LinkedIn Job URL", width: "min-w-[200px]", type: "link" },
  { id: "emailStatus", label: "Email Waterfall", width: "min-w-[160px]", type: "status" },
]

export const tabConfig = [
  { id: "grid", label: "Grid", icon: "grid" },
  { id: "bitscale", label: "Bitscale grid only", icon: "bitscale", active: true },
  { id: "engagement", label: "User Engagement...", icon: "engagement" },
  { id: "insights", label: "Customer Insights...", icon: "insights" },
  { id: "audience", label: "Audience Interact...", icon: "audience" },
  { id: "lead", label: "Lead Generation...", icon: "lead" },
]
