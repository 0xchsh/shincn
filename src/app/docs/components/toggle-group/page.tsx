"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Toggle Group</DocH1>
        <DocP>
          A set of two-state buttons that can be toggled on or off. Built on
          Base UI ToggleGroup primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<ToggleGroup>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <TextB className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <TextItalic className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <TextUnderline className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextB className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add toggle-group --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function Example() {
  return (
    <ToggleGroup>
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Outline</h3>
          <ComponentPreview
            code={`<ToggleGroup variant="outline">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <TextB className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <TextItalic className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup variant="outline">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <TextB className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <TextItalic className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/toggle-group" />
    </div>
  )
}
