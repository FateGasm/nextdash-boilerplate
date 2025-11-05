"use client"

import { Home, BarChart3, Users, Settings, FileText, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Users", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      <aside
        className={cn(
          "bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
          isOpen ? "w-64" : "w-0 md:w-16",
        )}
      >
        <div className="h-16 px-4 border-b border-sidebar-border flex items-center justify-between">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-sidebar-primary rounded" />
              <span className="font-semibold text-sidebar-foreground">Dashboard</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
