"use client"

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Hover Card</DocH1>
        <DocP>
          Shows a preview card when hovering over an element. Built on Base UI
          PreviewCard primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>
    @shincn
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">shincn</p>
      <p className="text-sm text-muted-foreground">
        A component library with the shincn classic embossed style.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger render={<Button variant="link" />}>
            @shincn
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">shincn</p>
              <p className="text-sm text-muted-foreground">
                A component library with the shincn classic embossed style.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add hover-card --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"

export default function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover me</HoverCardTrigger>
      <HoverCardContent>
        Content here.
      </HoverCardContent>
    </HoverCard>
  )
}`}
        />
      </div>

      <DocPager slug="components/hover-card" />
    </div>
  )
}
