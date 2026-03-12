"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`)

export default function ScrollAreaPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Scroll Area</DocH1>
        <DocP>
          A scrollable area with custom styled scrollbars. Built on Base UI
          ScrollArea primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<ScrollArea className="h-72 w-48 rounded-lg border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {tags.map((tag) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="h-72 w-48 rounded-lg border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add scroll-area --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { ScrollArea } from "@/components/ui/scroll-area"

export default function Example() {
  return (
    <ScrollArea className="h-72 w-48 rounded-lg border">
      <div className="p-4">
        {/* content */}
      </div>
    </ScrollArea>
  )
}`}
        />
      </div>

      <DocPager slug="components/scroll-area" />
    </div>
  )
}
