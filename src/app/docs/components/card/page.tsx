import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Card — shincn",
  description: "A container for grouping related content.",
}

export default function CardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Card</DocH1>
        <DocP>
          Displays a card with header, content, and footer sections.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card Content</p>
          </CardContent>
        </Card>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add card --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy a new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* form fields */}
      </CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">With Form</h3>
          <ComponentPreview
            code={`<Card>
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy a new project in one click.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="project-name">Name</Label>
      <Input id="project-name" placeholder="My project" />
    </div>
  </CardContent>
  <CardFooter className="justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy a new project in one click.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Name</Label>
                  <Input id="project-name" placeholder="My project" />
                </div>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/card" />
    </div>
  )
}
