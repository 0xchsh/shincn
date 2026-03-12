"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Switch</DocH1>
        <DocP>
          A toggle control that allows switching between on and off states.
          Built on Base UI Switch primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<div className="flex items-center gap-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane Mode</Label>
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add switch --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Switch } from "@/components/ui/switch"

export default function Example() {
  return <Switch />
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Small Size</h3>
          <ComponentPreview
            code={`<div className="flex items-center gap-2">
  <Switch size="sm" id="small" />
  <Label htmlFor="small">Small switch</Label>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Switch size="sm" id="small" />
              <Label htmlFor="small">Small switch</Label>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/switch" />
    </div>
  )
}
