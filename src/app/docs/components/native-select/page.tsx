"use client"

import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function NativeSelectPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Native Select</DocH1>
        <DocP>
          A styled native HTML select element with a caret icon overlay.
        </DocP>
      </div>

      <ComponentPreview
        code={`<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
</NativeSelect>`}
      >
        <NativeSelect>
          <NativeSelectOption value="">Select a fruit</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
        </NativeSelect>
      </ComponentPreview>

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add native-select --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function Example() {
  return (
    <NativeSelect>
      <NativeSelectOption value="a">Option A</NativeSelectOption>
      <NativeSelectOption value="b">Option B</NativeSelectOption>
    </NativeSelect>
  )
}`}
        />
      </div>

      <DocPager slug="components/native-select" />
    </div>
  )
}
