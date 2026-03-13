import { DocH1, DocH2, DocP, DocInlineCode } from "@/components/docs/mdx-components"
import { CodeBlock } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "components.json — shincn",
  description: "Configuration file for your project.",
}

export default function ComponentsJsonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>components.json</DocH1>
        <DocP>
          The <DocInlineCode>components.json</DocInlineCode> file holds
          configuration for your project. It is used by the CLI to understand how
          your project is set up and how to generate components.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>Example</DocH2>
        <CodeBlock
          code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "shincn": {
      "url": "https://ui.ch.sh/r"
    }
  }
}`}
        />
      </div>

      <div className="space-y-4">
        <DocH2>Using the shincn registry</DocH2>
        <DocP>
          When you add the <DocInlineCode>registries</DocInlineCode> block to your
          config, you can add components without the{" "}
          <DocInlineCode>--registry</DocInlineCode> flag:
        </DocP>
        <CodeBlock
          code={`npx shadcn add shincn/button
npx shadcn add shincn/card shincn/dialog`}
        />
        <DocP>
          This is equivalent to passing{" "}
          <DocInlineCode>--registry https://ui.ch.sh/r</DocInlineCode> on every
          command.
        </DocP>
      </div>

      <DocPager slug="components-json" />
    </div>
  )
}
