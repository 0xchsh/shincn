import { DocH1, DocH2, DocP, DocStep, DocInlineCode } from "@/components/docs/mdx-components"
import { CodeBlock, InstallCommand } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export const metadata = {
  title: "Dark Mode — shincn",
  description: "Add dark mode support to your project.",
}

export default function DarkModePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Dark Mode</DocH1>
        <DocP>
          Add dark mode support to your shincn project using{" "}
          <DocInlineCode>next-themes</DocInlineCode>.
        </DocP>
      </div>


      <div className="space-y-6">
        <DocStep step={1} title="Install next-themes">
          <InstallCommand command="npm install next-themes" />
        </DocStep>

        <DocStep step={2} title="Create a ThemeProvider component">
          <CodeBlock
            code={`// src/components/theme-provider.tsx
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export { ThemeProvider }`}
          />
        </DocStep>

        <DocStep step={3} title="Wrap your root layout">
          <CodeBlock
            code={`// src/app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
          />
        </DocStep>

        <DocStep step={4} title="Add dark mode tokens to globals.css">
          <DocP>
            Define the <DocInlineCode>.dark</DocInlineCode> class with inverted
            color tokens. See your <DocInlineCode>globals.css</DocInlineCode> for
            the full set including chart and sidebar tokens.
          </DocP>
          <CodeBlock
            code={`.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.178 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.178 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.369 0 0);
  --input: oklch(0.369 0 0);
  --ring: oklch(0.556 0 0);
  /* ... chart-1 through chart-5, sidebar-* tokens */
}`}
          />
        </DocStep>

        <DocStep step={5} title="Add a theme toggle">
          <DocP>
            Create a toggle button using Phosphor icons:
          </DocP>
          <CodeBlock
            code={`"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      <Sun className="size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
    </Button>
  )
}`}
          />
        </DocStep>
      </div>

      <DocPager slug="dark-mode" />
    </div>
  )
}
