"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function AspectRatioPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Aspect Ratio</DocH1>
        <DocP>
          Displays content within a desired ratio. Useful for images and video
          embeds.
        </DocP>
      </div>

      <ComponentPreview
        code={`<AspectRatio ratio={16 / 9}>
  <div className="flex h-full items-center justify-center rounded-lg bg-muted">
    16:9
  </div>
</AspectRatio>`}
      >
        <div className="w-full max-w-md">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
              16:9
            </div>
          </AspectRatio>
        </div>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add aspect-ratio --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Example() {
  return (
    <AspectRatio ratio={16 / 9}>
      <img src="/image.jpg" alt="Photo" className="h-full w-full object-cover" />
    </AspectRatio>
  )
}`}
        />
      </div>

      <DocPager slug="components/aspect-ratio" />
    </div>
  )
}
