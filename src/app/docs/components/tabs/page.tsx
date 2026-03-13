import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Tabs — shincn",
  description: "A set of layered sections of content.",
}

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Tabs</DocH1>
        <DocP>
          A set of layered sections of content, known as tab panels, that are
          displayed one at a time. Built on Base UI Tabs primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings here.
  </TabsContent>
  <TabsContent value="password">
    Password settings here.
  </TabsContent>
</Tabs>`}
      >
        <div className="w-full max-w-sm">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Account settings here.
              </p>
            </TabsContent>
            <TabsContent value="password" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Password settings here.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add tabs --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account settings.
      </TabsContent>
      <TabsContent value="password">
        Password settings.
      </TabsContent>
    </Tabs>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Line Variant</h3>
          <ComponentPreview
            code={`<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content.</TabsContent>
  <TabsContent value="analytics">Analytics content.</TabsContent>
  <TabsContent value="settings">Settings content.</TabsContent>
</Tabs>`}
          >
            <div className="w-full max-w-sm">
              <Tabs defaultValue="overview">
                <TabsList variant="line">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Overview content.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Analytics content.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Settings content.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/tabs" />
    </div>
  )
}
