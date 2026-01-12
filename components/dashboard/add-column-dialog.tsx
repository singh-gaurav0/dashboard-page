"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ColumnConfig } from "@/lib/constants/column-config"

interface AddColumnDialogProps {
  onAddColumn: (column: ColumnConfig) => void
}

export function AddColumnDialog({ onAddColumn }: AddColumnDialogProps) {
  const [open, setOpen] = useState(false)
  const [columnName, setColumnName] = useState("")
  const [columnType, setColumnType] = useState<ColumnConfig["type"]>("text")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!columnName.trim()) return

    const newColumn: ColumnConfig = {
      id: columnName.toLowerCase().replace(/\s+/g, "_"),
      label: columnName,
      width: "min-w-[150px]",
      type: columnType,
      sortable: true,
    }

    onAddColumn(newColumn)
    setColumnName("")
    setColumnType("text")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors whitespace-nowrap border-l border-border min-w-[120px]"
          aria-label="Add new column"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Column
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Column</DialogTitle>
            <DialogDescription>
              Create a new column for your data grid. The column will be added to all existing rows.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="column-name">Column Name</Label>
              <Input
                id="column-name"
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
                placeholder="Enter column name..."
                autoFocus
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="column-type">Column Type</Label>
              <Select value={columnType} onValueChange={(v) => setColumnType(v as ColumnConfig["type"])}>
                <SelectTrigger id="column-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!columnName.trim()}>
              Add Column
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
