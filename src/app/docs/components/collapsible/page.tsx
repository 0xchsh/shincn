"use client"

import * as React from "react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function CollapsiblePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Collapsible</DocH1>
        <DocP>
          An interactive component that expands and collapses a panel. Built on
          Base UI Collapsible primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Collapsible>
  <CollapsibleTrigger render={<Button variant="outline" />}>
    Toggle content
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="mt-2 rounded-lg border p-4 text-sm">
      This content can be toggled.
    </div>
  </CollapsibleContent>
</Collapsible>`}
      >
        <Collapsible className="w-full max-w-sm">
          <CollapsibleTrigger render={<Button variant="outline" />}>
            Toggle content
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 rounded-lg border p-4 text-sm">
              This content can be toggled.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add collapsible --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

export default function Example() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>
        Content goes here.
      </CollapsibleContent>
    </Collapsible>
  )
}`}
        />
      </div>

      <DocPager slug="components/collapsible" />
    </div>
  )
}
