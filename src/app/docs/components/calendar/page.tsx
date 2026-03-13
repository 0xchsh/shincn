"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Calendar</DocH1>
        <DocP>
          A date picker calendar component built on react-day-picker with
          shincn styling.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Calendar mode="single" selected={date} onSelect={setDate} />`}
      >
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add calendar --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Calendar } from "@/components/ui/calendar"

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}`}
        />
      </div>

      <DocPager slug="components/calendar" />
    </div>
  )
}
