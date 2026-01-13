"use client"

import { useState } from "react"
import { Check, ChevronRight, Copy, Mail } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"

interface StatusBadgeProps {
  status: "found" | "not_met" | "pending"
  email?: string
}

export function StatusBadge({ status, email }: StatusBadgeProps) {
  const [loading, setLoading] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleReveal = () => {
    if (!email || loading || revealed) return

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setRevealed(true)
    }, 800)
  }

  const handleCopy = async () => {
    if (!email) return
  
    await navigator.clipboard.writeText(email)
    setCopied(true)
  
    toast.success("Email copied to clipboard", {
      description: email,
      duration: 2000,
    })
  
    setTimeout(() => setCopied(false), 1500)
  }
  

  // ✅ FOUND
  if (status === "found") {
    return (
      <div className="flex items-center gap-2">
        {/* INITIAL STATE */}
        {!loading && !revealed && (
         <button
         onClick={handleReveal}
         className="flex items-center justify-between bg-gray-100 py-[3px] px-[8px] w-full rounded-full focus:outline-none"
       >
         {/* Left side */}
         <div className="flex items-center gap-2 min-w-0">
           <div className="w-3.5 h-3.5 rounded bg-green-500 flex items-center justify-center">
             <Check className="h-3.5 w-3.5 text-white" />
           </div>
       
           <span className="text-xs text-foreground truncate">
             Email Found
           </span>
         </div>
       
         {/* Right side */}
         <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
       </button>
        )}

        {/* LOADING STATE */}
        {loading && (
          <Skeleton className="h-6 w-32 rounded-full" />
        )}

        {/* REVEALED STATE */}
        {revealed && email && (
          <div className="flex items-center gap-2 text-sm text-green-700">
            <span className="truncate max-w-[160px]">{email}</span>

            <button
              onClick={handleCopy}
              className="p-1 rounded hover:bg-muted transition"
              title="Copy email"
            >
              <Copy className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    )
  }

  // ❌ NOT MET
  if (status === "not_met") {
    return (
      <span className="text-xs italic text-yellow-500 font-medium">
        Run condition not met
      </span>
    )
  }

  // ⏳ PENDING
  return (
    <span className="text-sm text-muted-foreground">
      Pending...
    </span>
  )
}
