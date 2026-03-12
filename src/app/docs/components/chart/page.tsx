"use client"

import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { DocPager } from "@/components/docs/doc-pager"

export default function ChartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Chart</DocH1>
        <DocP>
          Chart components built on Recharts with shincn theming support.
          Provides ChartContainer, ChartTooltip, ChartTooltipContent,
          ChartLegend, and ChartLegendContent.
        </DocP>
      </div>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add chart --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--primary)" },
} satisfies ChartConfig

const data = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
]

export default function Example() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}`}
        />
      </div>

      <DocPager slug="components/chart" />
    </div>
  )
}
