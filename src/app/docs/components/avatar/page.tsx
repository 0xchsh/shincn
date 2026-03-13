"use client"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Avatar</DocH1>
        <DocP>
          An image element with a fallback for representing the user. Built on
          Base UI Avatar primitive.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add avatar --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Sizes</h3>
          <ComponentPreview
            code={`<Avatar size="sm">
  <AvatarFallback>SM</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>`}
          >
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Group</h3>
          <ComponentPreview
            code={`<AvatarGroup>
  <Avatar>
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>C</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
          >
            <AvatarGroup>
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/avatar" />
    </div>
  )
}
