"use client"

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function PopoverPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Popover</DocH1>
        <DocP>
          Displays rich content in a portal, triggered by a button. Built on
          Base UI Popover primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Open Popover
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">This is the popover content.</p>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Open Popover
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">This is the popover content.</p>
          </PopoverContent>
        </Popover>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add popover --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export default function Example() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Content here.</PopoverContent>
    </Popover>
  )
}`}
        />
      </div>

      <DocPager slug="components/popover" />
    </div>
  )
}
