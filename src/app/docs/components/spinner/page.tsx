"use client"

import { Spinner } from "@/components/ui/spinner"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SpinnerPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Spinner</DocH1>
        <DocP>
          A simple loading spinner using the Phosphor SpinnerIcon with a spin
          animation.
        </DocP>
      </div>

      <ComponentPreview code={`<Spinner />`}>
        <Spinner />
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add spinner --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Spinner } from "@/components/ui/spinner"

export default function Example() {
  return <Spinner />
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Sizes</h3>
          <ComponentPreview
            code={`<Spinner className="size-3" />
<Spinner />
<Spinner className="size-6" />
<Spinner className="size-8" />`}
          >
            <div className="flex items-center gap-4">
              <Spinner className="size-3" />
              <Spinner />
              <Spinner className="size-6" />
              <Spinner className="size-8" />
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/spinner" />
    </div>
  )
}
