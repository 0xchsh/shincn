"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function InputGroupPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Input Group</DocH1>
        <DocP>
          A wrapper that groups an input with addons like icons, buttons, or
          text at the start or end.
        </DocP>
      </div>

      <ComponentPreview
        code={`<InputGroup>
  <InputGroupAddon>
    <MagnifyingGlass />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>`}
      >
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <MagnifyingGlass />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add input-group --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>$</InputGroupAddon>
      <InputGroupInput placeholder="Amount" />
    </InputGroup>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Addon at end</h3>
          <ComponentPreview
            code={`<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <MagnifyingGlass />
  </InputGroupAddon>
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <MagnifyingGlass />
              </InputGroupAddon>
            </InputGroup>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/input-group" />
    </div>
  )
}
