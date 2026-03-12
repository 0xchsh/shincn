import { DocH1, DocH2, DocP, DocList, DocInlineCode } from "@/components/docs/mdx-components"
import { CodeBlock } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Theming — shincn",
  description: "Customize colors, fonts, and tokens.",
}

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Theming</DocH1>
        <DocP>
          shincn uses CSS custom properties (design tokens) for colors, radii,
          and fonts. Customize these in your globals.css to match your brand.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>Color Tokens</DocH2>
        <DocP>
          Colors are defined as oklch values in the <DocInlineCode>:root</DocInlineCode> selector.
          The base palette uses neutral tones:
        </DocP>
        <DocP>
          Here are the core tokens. See your <DocInlineCode>globals.css</DocInlineCode> for
          the full set including card, popover, chart, and sidebar tokens.
        </DocP>
        <CodeBlock
          code={`:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.375rem;
  /* ... chart-1 through chart-5, sidebar-* tokens */
}`}
        />
      </div>

      <div className="space-y-4">
        <DocH2>Typography</DocH2>
        <DocP>
          shincn uses SF Pro Rounded as the primary sans-serif font and SF Mono
          for code. These are defined in the Tailwind theme:
        </DocP>
        <CodeBlock
          code={`@theme inline {
  --font-sans: "SF Pro Rounded", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "SF Mono", ui-monospace, monospace;
}`}
        />
      </div>

      <div className="space-y-4">
        <DocH2>Border Radius</DocH2>
        <DocP>
          Radius values are restrained and intentional:
        </DocP>
        <DocList>
          <li><DocInlineCode>rounded-md</DocInlineCode> (6px) for buttons and inputs</li>
          <li><DocInlineCode>rounded-lg</DocInlineCode> (8px) for cards and panels</li>
          <li><DocInlineCode>rounded-xl</DocInlineCode> (12px) for modals and dialogs</li>
          <li><DocInlineCode>rounded-full</DocInlineCode> for avatars and status dots</li>
        </DocList>
      </div>

      <div className="space-y-4">
        <DocH2>Customizing</DocH2>
        <DocP>
          To customize the theme for your brand, override the CSS custom
          properties in your globals.css. For example, to use a blue primary:
        </DocP>
        <CodeBlock
          code={`:root {
  --primary: oklch(0.55 0.2 250);
  --primary-foreground: oklch(0.985 0 0);
}`}
        />
      </div>

      <DocPager slug="theming" />
    </div>
  )
}
