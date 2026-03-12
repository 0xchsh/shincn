import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Input — shincn",
  description: "A text input field.",
}

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Input</DocH1>
        <DocP>
          Displays a form input field. Built on Base UI Input primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Input placeholder="Email" type="email" />`}
      >
        <div className="w-full max-w-xs">
          <Input placeholder="Email" type="email" />
        </div>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add input --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">With Label</h3>
          <ComponentPreview
            code={`<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Carlos Shin" />
</div>`}
          >
            <div className="w-full max-w-xs space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Carlos Shin" />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Disabled</h3>
          <ComponentPreview
            code={`<Input disabled placeholder="Cannot edit" />`}
          >
            <div className="w-full max-w-xs">
              <Input disabled placeholder="Cannot edit" />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">File Input</h3>
          <ComponentPreview
            code={`<Input type="file" />`}
          >
            <div className="w-full max-w-xs">
              <Input type="file" />
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/input" />
    </div>
  )
}
