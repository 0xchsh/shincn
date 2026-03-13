"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function SonnerPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Sonner</DocH1>
        <DocP>
          Toast notifications powered by Sonner. Provides the Toaster component
          with shincn-themed icons and styling.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Button
  variant="outline"
  onClick={() => toast("Event has been created.")}
>
  Show Toast
</Button>`}
      >
        <Button
          variant="outline"
          onClick={() => toast("Event has been created.")}
        >
          Show Toast
        </Button>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add sonner --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`// Add <Toaster /> to your root layout
import { Toaster } from "@/components/ui/sonner"

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

// Then use toast() anywhere
import { toast } from "sonner"

toast("Hello world!")
toast.success("Success!")
toast.error("Something went wrong.")`}
        />
      </div>

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Variants</h3>
          <ComponentPreview
            code={`<Button onClick={() => toast.success("Done!")}>Success</Button>
<Button onClick={() => toast.error("Failed!")}>Error</Button>
<Button onClick={() => toast.info("FYI")}>Info</Button>`}
          >
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => toast.success("Done!")}>Success</Button>
              <Button variant="outline" onClick={() => toast.error("Failed!")}>Error</Button>
              <Button variant="outline" onClick={() => toast.info("FYI")}>Info</Button>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/sonner" />
    </div>
  )
}
