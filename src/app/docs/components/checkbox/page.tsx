"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Checkbox</DocH1>
        <DocP>
          A control that allows the user to toggle between checked and
          unchecked. Built on Base UI Checkbox primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add checkbox --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Checkbox } from "@/components/ui/checkbox"

export default function Example() {
  return <Checkbox />
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Disabled</h3>
          <ComponentPreview
            code={`<div className="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">Disabled</Label>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">Disabled</Label>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/checkbox" />
    </div>
  )
}
