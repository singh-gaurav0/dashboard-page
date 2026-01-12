import { cn } from "@/lib/utils"

interface CompanyLogoProps {
  company: string
  className?: string
}

const companyColors: Record<string, { bg: string; text: string; icon: string }> = {
  google: { bg: "bg-white", text: "text-gray-700", icon: "G" },
  amazon: { bg: "bg-gray-900", text: "text-white", icon: "a" },
  linkedin: { bg: "bg-blue-600", text: "text-white", icon: "in" },
  microsoft: { bg: "bg-white", text: "text-gray-700", icon: "⊞" },
  ted: { bg: "bg-red-600", text: "text-white", icon: "TED" },
  unilever: { bg: "bg-blue-800", text: "text-white", icon: "U" },
  apple: { bg: "bg-gray-900", text: "text-white", icon: "" },
}

export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const config = companyColors[company.toLowerCase()] || { bg: "bg-gray-200", text: "text-gray-700", icon: company[0] }

  return (
    <div
      className={cn(
        "w-6 h-6 rounded flex items-center justify-center text-xs font-bold border border-border shrink-0",
        config.bg,
        config.text,
        className,
      )}
    >
      {config.icon}
    </div>
  )
}
