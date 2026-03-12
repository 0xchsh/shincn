"use client"

import { Textarea } from "@/components/ui/textarea"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Textarea</DocH1>
        <DocP>
          A multi-line text input with auto-sizing field behavior.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Textarea placeholder="Type your message here." />`}
      >
        <Textarea placeholder="Type your message here." className="max-w-sm" />
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add textarea --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Textarea } from "@/components/ui/textarea"

export default function Example() {
  return <Textarea placeholder="Type your message here." />
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Disabled</h3>
          <ComponentPreview
            code={`<Textarea disabled placeholder="Disabled textarea" />`}
          >
            <Textarea disabled placeholder="Disabled textarea" className="max-w-sm" />
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/textarea" />
    </div>
  )
}
