"use client"

import { Kbd } from "@/components/ui/kbd"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function KbdPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Kbd</DocH1>
        <DocP>
          Displays a keyboard key or shortcut. Useful for showing keyboard
          shortcuts in tooltips, menus, and documentation.
        </DocP>
      </div>

      <ComponentPreview code={`<Kbd>⌘</Kbd> <Kbd>K</Kbd>`}>
        <div className="flex items-center gap-1">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add kbd --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Kbd } from "@/components/ui/kbd"

export default function Example() {
  return (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  )
}`}
        />
      </div>

      <DocPager slug="components/kbd" />
    </div>
  )
}
