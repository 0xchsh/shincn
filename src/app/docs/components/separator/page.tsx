"use client"

import { Separator } from "@/components/ui/separator"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SeparatorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Separator</DocH1>
        <DocP>
          Visually or semantically separates content. Built on Base UI
          Separator primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<div>
  <div className="text-sm font-medium">Title</div>
  <Separator className="my-4" />
  <div className="text-sm text-muted-foreground">Content below the separator.</div>
</div>`}
      >
        <div className="w-full max-w-md">
          <div className="text-sm font-medium">Title</div>
          <Separator className="my-4" />
          <div className="text-sm text-muted-foreground">Content below the separator.</div>
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add separator --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Separator } from "@/components/ui/separator"

export default function Example() {
  return <Separator />
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Vertical</h3>
          <ComponentPreview
            code={`<div className="flex h-5 items-center gap-4 text-sm">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>`}
          >
            <div className="flex h-5 items-center gap-4 text-sm">
              <div>Item 1</div>
              <Separator orientation="vertical" />
              <div>Item 2</div>
              <Separator orientation="vertical" />
              <div>Item 3</div>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/separator" />
    </div>
  )
}
