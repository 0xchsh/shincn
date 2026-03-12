"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/docs/code-block"

function ComponentPreview({
  children,
  code,
  className,
}: {
  children: React.ReactNode
  code: string
  className?: string
}) {
  return (
    <Tabs defaultValue="preview" className={cn("w-full", className)}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-0">
        <div className="flex min-h-[200px] items-center justify-center rounded-lg border p-8">
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-0">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  )
}

export { ComponentPreview }
