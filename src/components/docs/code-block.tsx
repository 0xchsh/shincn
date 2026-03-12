"use client"

import * as React from "react"
import { Copy, Check } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function CodeBlock({
  code,
  language = "tsx",
  className,
  showLineNumbers = false,
}: {
  code: string
  language?: string
  className?: string
  showLineNumbers?: boolean
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("group/code-block relative", className)}>
      <pre className="overflow-x-auto rounded-lg border bg-muted/50 p-4 text-sm dark:bg-muted/30">
        <code className="font-mono text-xs leading-relaxed">
          {showLineNumbers
            ? code.split("\n").map((line, i) => (
                <span key={i} className="table-row">
                  <span className="table-cell pr-4 text-right text-muted-foreground/50 select-none">
                    {i + 1}
                  </span>
                  <span className="table-cell">{line}</span>
                  {"\n"}
                </span>
              ))
            : code}
        </code>
      </pre>
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute top-2.5 right-2.5 opacity-0 transition-opacity group-hover/code-block:opacity-100"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="size-3 text-emerald-500" />
        ) : (
          <Copy className="size-3" />
        )}
      </Button>
    </div>
  )
}

/** Inline code for install commands */
function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group/install relative flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2.5 font-mono text-xs dark:bg-muted/30">
      <span className="flex-1 overflow-x-auto">{command}</span>
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label={copied ? "Copied" : "Copy command"}
        className="shrink-0 opacity-0 transition-opacity group-hover/install:opacity-100"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="size-3 text-emerald-500" />
        ) : (
          <Copy className="size-3" />
        )}
      </Button>
    </div>
  )
}

export { CodeBlock, InstallCommand }
