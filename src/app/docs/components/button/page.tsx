"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, SpinnerGap } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Button</DocH1>
        <DocP>
          Displays a button or a component that looks like a button. Built on
          Base UI Button primitive with the shincn classic embossed style.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Button>Click me</Button>`}
      >
        <Button>Click me</Button>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add button --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Variants</h3>
          <ComponentPreview
            code={`<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Sizes</h3>
          <ComponentPreview
            code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">With Icon</h3>
          <ComponentPreview
            code={`<Button>
  <Plus /> New item
</Button>
<Button>
  Continue <ArrowRight />
</Button>`}
          >
            <div className="flex items-center gap-2">
              <Button>
                <Plus /> New item
              </Button>
              <Button>
                Continue <ArrowRight />
              </Button>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Loading</h3>
          <ComponentPreview
            code={`<Button disabled>
  <SpinnerGap className="animate-spin" />
  Saving...
</Button>`}
          >
            <Button disabled>
              <SpinnerGap className="animate-spin" />
              Saving...
            </Button>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/button" />
    </div>
  )
}
