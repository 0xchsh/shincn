"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SheetPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Sheet</DocH1>
        <DocP>
          A panel that slides in from the edge of the screen. Supports top,
          right, bottom, and left sides. Built on Base UI Dialog primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Open Sheet
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is a sheet description.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Open Sheet
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is a sheet description.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add sheet --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

export default function Example() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Left Side</h3>
          <ComponentPreview
            code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Open Left
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
      <SheetDescription>Opens from the left.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Open Left
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>Opens from the left.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/sheet" />
    </div>
  )
}
