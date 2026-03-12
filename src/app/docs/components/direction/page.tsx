"use client"

import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export default function DirectionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Direction</DocH1>
        <DocP>
          Re-exports DirectionProvider and useDirection from Base UI for
          managing text direction (LTR/RTL) across your application.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add direction --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { DirectionProvider } from "@/components/ui/direction"

export default function App({ children }) {
  return (
    <DirectionProvider direction="ltr">
      {children}
    </DirectionProvider>
  )
}`}
        />
      </div>

      <DocPager slug="components/direction" />
    </div>
  )
}
