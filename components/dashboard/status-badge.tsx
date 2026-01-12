import { Check } from "lucide-react"

interface StatusBadgeProps {
  status: "found" | "not_met" | "pending"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "found") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center">
          <Check className="h-3 w-3 text-white" />
        </div>
        <span className="text-sm text-foreground">Email Found</span>
      </div>
    )
  }

  if (status === "not_met") {
    return <span className="text-sm text-red-500 font-medium">Run condition not met</span>
  }

  return <span className="text-sm text-muted-foreground">Pending...</span>
}
