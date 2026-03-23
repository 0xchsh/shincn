import { DocH1, DocH2, DocP, DocList, DocInlineCode, DocStep } from "@/components/docs/mdx-components"
import { CodeBlock, InstallCommand } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Introduction — shincn",
  description: "What is shincn and how to get started.",
}

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Introduction</DocH1>
        <DocP>
          shincn is a portable design system built on top of shadcn/ui. It provides
          a curated set of components with a neutral palette, Phosphor icons, OpenRunde
          typography, restrained radii, and purposeful motion.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>What is shincn?</DocH2>
        <DocP>
          shincn is not a component library you install as a dependency. It is a
          collection of reusable components built using Base UI primitives and
          styled with Tailwind CSS. You copy the components into your project and
          customize them as needed.
        </DocP>
        <DocP>
          Every component uses the same design tokens, icon set, and motion
          principles. The result is a consistent UI across your entire application.
        </DocP>
      </div>

      <div className="space-y-4">
        <DocH2>Key Principles</DocH2>
        <DocList>
          <li>
            <strong className="text-foreground">Base UI primitives</strong> &mdash; accessible, unstyled
            headless components from <DocInlineCode>@base-ui/react</DocInlineCode>
          </li>
          <li>
            <strong className="text-foreground">Phosphor Icons</strong> &mdash; consistent icon set with
            multiple weights (regular, fill, bold)
          </li>
          <li>
            <strong className="text-foreground">OpenRunde</strong> &mdash; single sans-serif font
            across the entire UI
          </li>
          <li>
            <strong className="text-foreground">Restrained radii</strong> &mdash; md for buttons/inputs,
            lg for cards, xl for dialogs
          </li>
          <li>
            <strong className="text-foreground">Purposeful motion</strong> &mdash; only transform and
            opacity, with reduced-motion support
          </li>
        </DocList>
      </div>

      <div className="space-y-4">
        <DocH2>Quick Start</DocH2>
        <div className="space-y-4">
          <DocStep step={1} title="Create a Next.js project">
            <InstallCommand command="npx create-next-app@latest my-app --tailwind" />
          </DocStep>
          <DocStep step={2} title="Initialize shadcn">
            <InstallCommand command="npx shadcn init" />
          </DocStep>
          <DocStep step={3} title="Add a component from shincn">
            <InstallCommand command="npx shadcn add button --registry https://ui.ch.sh/r" />
          </DocStep>
          <DocStep step={4} title="Use the component">
            <CodeBlock
              code={`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}`}
            />
          </DocStep>
        </div>
      </div>

      <DocPager slug="" />
    </div>
  )
}
