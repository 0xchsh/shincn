"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SkeletonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Skeleton</DocH1>
        <DocP>
          A placeholder animation to show while content is loading.
        </DocP>
      </div>

      <ComponentPreview
        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add skeleton --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Skeleton } from "@/components/ui/skeleton"

export default function Example() {
  return <Skeleton className="h-4 w-[200px]" />
}`}
        />
      </div>

      <DocPager slug="components/skeleton" />
    </div>
  )
}
