"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
]

export default function ComboboxPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Combobox</DocH1>
        <DocP>
          An autocomplete input with a filterable dropdown list. Built on Base
          UI Combobox primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Combobox>
  <ComboboxInput placeholder="Search framework..." />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxItem value="next">Next.js</ComboboxItem>
      <ComboboxItem value="remix">Remix</ComboboxItem>
      <ComboboxItem value="astro">Astro</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <Combobox>
          <ComboboxInput placeholder="Search framework..." />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
              {frameworks.map((f) => (
                <ComboboxItem key={f.value} value={f.value}>
                  {f.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add combobox --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"

export default function Example() {
  return (
    <Combobox>
      <ComboboxInput placeholder="Search..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results.</ComboboxEmpty>
          <ComboboxItem value="option-1">Option 1</ComboboxItem>
          <ComboboxItem value="option-2">Option 2</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`}
        />
      </div>

      <DocPager slug="components/combobox" />
    </div>
  )
}
