import { DocH1, DocH2, DocP, DocStep, DocInlineCode } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Installation — shincn",
  description: "How to install shincn in your project.",
}

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Installation</DocH1>
        <DocP>
          How to install dependencies and set up your project to use shincn components.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>Prerequisites</DocH2>
        <DocP>
          shincn is designed for Next.js projects using Tailwind CSS v4 and the App
          Router. Make sure you have a project set up with these before continuing.
        </DocP>
      </div>

      <div className="space-y-6">
        <DocH2>Steps</DocH2>

        <DocStep step={1} title="Create a new Next.js project">
          <InstallCommand command="npx create-next-app@latest my-app --tailwind" />
        </DocStep>

        <DocStep step={2} title="Initialize shadcn CLI">
          <DocP>
            Run the shadcn init command to set up the project with the required
            configuration files.
          </DocP>
          <InstallCommand command="npx shadcn init" />
        </DocStep>

        <DocStep step={3} title="Install required dependencies">
          <DocP>
            shincn uses Base UI primitives, Phosphor Icons, and Framer Motion.
          </DocP>
          <InstallCommand command="npm install @base-ui/react @phosphor-icons/react framer-motion" />
        </DocStep>

        <DocStep step={4} title="Add components from the shincn registry">
          <DocP>
            Use the <DocInlineCode>--registry</DocInlineCode> flag to pull
            components from the shincn registry.
          </DocP>
          <InstallCommand command="npx shadcn add button --registry https://ui.ch.sh/r" />
          <DocP>
            You can add multiple components at once:
          </DocP>
          <InstallCommand command="npx shadcn add button card dialog input tabs --registry https://ui.ch.sh/r" />
        </DocStep>

        <DocStep step={5} title="Configure your fonts">
          <DocP>
            shincn uses SF Pro Rounded as the primary font. Add this to your{" "}
            <DocInlineCode>globals.css</DocInlineCode>:
          </DocP>
          <CodeBlock
            code={`@theme inline {
  --font-sans: "SF Pro Rounded", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "SF Mono", ui-monospace, monospace;
}`}
          />
        </DocStep>
      </div>

      <DocPager slug="installation" />
    </div>
  )
}
