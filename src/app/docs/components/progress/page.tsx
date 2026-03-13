"use client"

import { Progress } from "@/components/ui/progress"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Progress</DocH1>
        <DocP>
          Displays an indicator showing the completion progress of a task.
          Built on Base UI Progress primitive.
        </DocP>
      </div>

      <ComponentPreview code={`<Progress value={60} />`}>
        <div className="w-full max-w-sm">
          <Progress value={60} />
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add progress --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Progress } from "@/components/ui/progress"

export default function Example() {
  return <Progress value={60} />
}`}
        />
      </div>

      <DocPager slug="components/progress" />
    </div>
  )
}
