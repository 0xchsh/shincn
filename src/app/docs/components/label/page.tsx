"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Label</DocH1>
        <DocP>
          Renders an accessible label associated with form controls.
        </DocP>
      </div>

      <ComponentPreview
        code={`<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add label --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Label } from "@/components/ui/label"

export default function Example() {
  return <Label htmlFor="name">Name</Label>
}`}
        />
      </div>

      <DocPager slug="components/label" />
    </div>
  )
}
