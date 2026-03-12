"use client"

import { Toggle } from "@/components/ui/toggle"
import { TextB } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function TogglePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Toggle</DocH1>
        <DocP>
          A two-state button that can be either on or off. Built on Base UI
          Toggle primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Toggle aria-label="Toggle bold">
  <TextB className="size-4" />
</Toggle>`}
      >
        <Toggle aria-label="Toggle bold">
          <TextB className="size-4" />
        </Toggle>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add toggle --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Toggle } from "@/components/ui/toggle"

export default function Example() {
  return <Toggle>Toggle me</Toggle>
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Outline</h3>
          <ComponentPreview
            code={`<Toggle variant="outline" aria-label="Toggle bold">
  <TextB className="size-4" />
</Toggle>`}
          >
            <Toggle variant="outline" aria-label="Toggle bold">
              <TextB className="size-4" />
            </Toggle>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">With Text</h3>
          <ComponentPreview
            code={`<Toggle>
  <TextB className="size-4" /> Bold
</Toggle>`}
          >
            <Toggle>
              <TextB className="size-4" /> Bold
            </Toggle>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/toggle" />
    </div>
  )
}
