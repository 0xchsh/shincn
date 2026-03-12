"use client"

import { Slider } from "@/components/ui/slider"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SliderPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Slider</DocH1>
        <DocP>
          An input for selecting a value from a range. Built on Base UI
          Slider primitive.
        </DocP>
      </div>

      <ComponentPreview code={`<Slider defaultValue={[50]} max={100} />`}>
        <div className="w-full max-w-sm">
          <Slider defaultValue={[50]} max={100} />
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add slider --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Slider } from "@/components/ui/slider"

export default function Example() {
  return <Slider defaultValue={[50]} max={100} />
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Range</h3>
          <ComponentPreview
            code={`<Slider defaultValue={[25, 75]} max={100} />`}
          >
            <div className="w-full max-w-sm">
              <Slider defaultValue={[25, 75]} max={100} />
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/slider" />
    </div>
  )
}
