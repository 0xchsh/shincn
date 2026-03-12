"use client"

import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty"
import { FileMagnifyingGlass } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function EmptyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Empty</DocH1>
        <DocP>
          An empty state component for when there is no data to display. Use
          it to guide users with a title, description, and optional icon.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FileMagnifyingGlass />
    </EmptyMedia>
    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>
      Try adjusting your search or filter to find what you are looking for.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`}
      >
        <Empty className="max-w-md">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FileMagnifyingGlass />
            </EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search or filter to find what you are looking for.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add empty --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"

export default function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No items</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}`}
        />
      </div>

      <DocPager slug="components/empty" />
    </div>
  )
}
