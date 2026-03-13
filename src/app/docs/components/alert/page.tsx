"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info, Warning } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function AlertPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Alert</DocH1>
        <DocP>
          Displays a callout for important information, with support for
          different variants like default and destructive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Alert>
  <Info />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components using the CLI.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-md">
          <Info />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components using the CLI.
          </AlertDescription>
        </Alert>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add alert --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function Example() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components using the CLI.
      </AlertDescription>
    </Alert>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Destructive</h3>
          <ComponentPreview
            code={`<Alert variant="destructive">
  <Warning />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>`}
          >
            <Alert variant="destructive" className="max-w-md">
              <Warning />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/alert" />
    </div>
  )
}
