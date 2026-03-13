import { DocH1, DocH2, DocP, DocInlineCode } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "CLI — shincn",
  description: "Use the CLI to add shincn components.",
}

export default function CliPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>CLI</DocH1>
        <DocP>
          Use the shadcn CLI with the shincn registry to add components to your
          project.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>Adding components</DocH2>
        <DocP>
          Pass the <DocInlineCode>--registry</DocInlineCode> flag to pull from
          the shincn registry:
        </DocP>
        <InstallCommand command="npx shadcn add button --registry https://ui.ch.sh/r" />
        <DocP>
          You can add multiple components in a single command:
        </DocP>
        <InstallCommand command="npx shadcn add button card dialog input tabs --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Registry shorthand</DocH2>
        <DocP>
          If you add the shincn registry to your{" "}
          <DocInlineCode>components.json</DocInlineCode>, you can use a shorter
          syntax:
        </DocP>
        <CodeBlock
          code={`{
  "registries": {
    "shincn": {
      "url": "https://ui.ch.sh/r"
    }
  }
}`}
        />
        <DocP>Then run:</DocP>
        <InstallCommand command="npx shadcn add shincn/button" />
      </div>

      <div className="space-y-4">
        <DocH2>Available commands</DocH2>
        <div className="space-y-3">
          <div>
            <DocP>
              <DocInlineCode>npx shadcn init</DocInlineCode> &mdash; Initialize a
              new project with shadcn configuration.
            </DocP>
          </div>
          <div>
            <DocP>
              <DocInlineCode>npx shadcn add [component]</DocInlineCode> &mdash;
              Add a component to your project.
            </DocP>
          </div>
          <div>
            <DocP>
              <DocInlineCode>npx shadcn diff [component]</DocInlineCode> &mdash;
              Show changes between your local component and the registry version.
            </DocP>
          </div>
        </div>
      </div>

      <DocPager slug="cli" />
    </div>
  )
}
