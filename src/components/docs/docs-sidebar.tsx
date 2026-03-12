"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/lib/docs"
import { ScrollArea } from "@/components/ui/scroll-area"

function DocsSidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <aside className={cn("w-56 shrink-0", className)}>
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pl-6 pr-4 [scrollbar-width:thin] [scrollbar-color:transparent_transparent] hover:[scrollbar-color:var(--border)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
        <nav className="space-y-6">
          {docsConfig.map((section) => (
            <div key={section.title} className="space-y-1">
              <h4 className="px-2 text-sm font-medium">{section.title}</h4>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const href = `/docs/${item.slug}`
                  const isActive =
                    pathname === href ||
                    (item.slug === "" && pathname === "/docs")
                  return (
                    <Link
                      key={item.slug}
                      href={href}
                      className={cn(
                        "flex items-center rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export { DocsSidebar }
