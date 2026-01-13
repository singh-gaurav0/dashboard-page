"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface EditableCellProps {
  value: string
  onChange: (value: string) => void
  type?: "text" | "link" | "date"
}

export function EditableCell({ value, onChange, type = "text" }: EditableCellProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleBlur = () => {
    setIsEditing(false)
    if (editValue !== value) {
      onChange(editValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur()
    } else if (e.key === "Escape") {
      setEditValue(value)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <Input
        ref={inputRef}
        type={type === "date" ? "date" : "text"}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="h-7 text-sm px-2 py-1"
      />
    )
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className="text-sm text-muted-foreground cursor-text hover:bg-muted/50 px-2 py-1 -mx-2 -my-1 rounded min-h-[28px] flex items-center"
    >
      {value || <span className="text-muted-foreground/50 italic">Click to edit...</span>}
    </div>
  )
}
