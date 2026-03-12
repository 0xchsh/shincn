"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command"
import { docsConfig } from "@/lib/docs"
import { File, Notebook } from "@phosphor-icons/react"

function SearchCommand({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()

  const handleSelect = (slug: string) => {
    onOpenChange(false)
    router.push(`/docs/${slug}`)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {docsConfig.map((section, i) => (
            <React.Fragment key={section.title}>
              {i > 0 && <CommandSeparator />}
              <CommandGroup heading={section.title}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.slug}
                    value={`${section.title} ${item.title}`}
                    onSelect={() => handleSelect(item.slug)}
                  >
                    {section.title === "Components" ? (
                      <Notebook className="size-4 text-muted-foreground" />
                    ) : (
                      <File className="size-4 text-muted-foreground" />
                    )}
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

export { SearchCommand }
