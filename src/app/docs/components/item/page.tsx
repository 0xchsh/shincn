"use client"

import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMedia,
  ItemGroup,
} from "@/components/ui/item"
import { User } from "@phosphor-icons/react"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"
import { Separator } from "@/components/ui/separator"

export default function ItemPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Item</DocH1>
        <DocP>
          A versatile list item component for displaying structured content
          with media, title, description, and actions.
        </DocP>
      </div>

      <ComponentPreview
        code={`<ItemGroup>
  <Item>
    <ItemMedia variant="icon">
      <User />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>John Doe</ItemTitle>
      <ItemDescription>Software Engineer</ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>`}
      >
        <ItemGroup className="max-w-md">
          <Item>
            <ItemMedia variant="icon">
              <User />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>John Doe</ItemTitle>
              <ItemDescription>Software Engineer</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </ComponentPreview>

      <Separator />

      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add item --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMedia,
  ItemGroup,
} from "@/components/ui/item"

export default function Example() {
  return (
    <ItemGroup>
      <Item>
        <ItemContent>
          <ItemTitle>Item Title</ItemTitle>
          <ItemDescription>Item description.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  )
}`}
        />
      </div>

      <Separator />

      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Variants</h3>
          <ComponentPreview
            code={`<Item variant="outline">
  <ItemContent>
    <ItemTitle>Outline variant</ItemTitle>
    <ItemDescription>Has a visible border.</ItemDescription>
  </ItemContent>
</Item>
<Item variant="muted">
  <ItemContent>
    <ItemTitle>Muted variant</ItemTitle>
    <ItemDescription>Has a muted background.</ItemDescription>
  </ItemContent>
</Item>`}
          >
            <div className="w-full max-w-md space-y-3">
              <Item variant="outline">
                <ItemContent>
                  <ItemTitle>Outline variant</ItemTitle>
                  <ItemDescription>Has a visible border.</ItemDescription>
                </ItemContent>
              </Item>
              <Item variant="muted">
                <ItemContent>
                  <ItemTitle>Muted variant</ItemTitle>
                  <ItemDescription>Has a muted background.</ItemDescription>
                </ItemContent>
              </Item>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/item" />
    </div>
  )
}
