"use client"

import { Badge } from "@/components/ui/badge"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Badge</DocH1>
        <DocP>
          Displays a small label or status indicator. Supports multiple variants
          including default, secondary, destructive, outline, ghost, and link.
        </DocP>
      </div>

      <ComponentPreview code={`<Badge>Badge</Badge>`}>
        <Badge>Badge</Badge>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add badge --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Badge } from "@/components/ui/badge"

export default function Example() {
  return <Badge>Badge</Badge>
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Variants</h3>
          <ComponentPreview
            code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/badge" />
    </div>
  )
}
