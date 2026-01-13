import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonCellProps {
  type: "text" | "date" | "company" | "link" | "status" | "checkbox"
}

export function SkeletonCell({ type }: SkeletonCellProps) {
  switch (type) {
    case "date":
      return (
        <div className="flex items-center gap-1.5">
          <Skeleton className="h-3.5 w-3.5 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
      )
    case "company":
      return (
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      )
    case "link":
      return (
        <div className="flex items-center gap-1">
          <Skeleton className="h-3 w-3 rounded" />
          <Skeleton className="h-4 w-36" />
        </div>
      )
    case "status":
      return <Skeleton className="h-6 w-24 rounded-full" />
    case "text":
    default:
      return <Skeleton className="h-4 w-28" />
  }
}
