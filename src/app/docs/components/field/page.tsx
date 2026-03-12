"use client"

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function FieldPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Field</DocH1>
        <DocP>
          A form field wrapper that provides label, description, and error
          message support with proper accessibility attributes.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldDescription>We will never share your email.</FieldDescription>
</Field>`}
      >
        <Field className="max-w-sm">
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="you@example.com" />
          <FieldDescription>We will never share your email.</FieldDescription>
        </Field>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add field --registry https://ui.ch.sh" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field"

export default function Example() {
  return (
    <Field>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Your name" />
      <FieldDescription>Enter your full name.</FieldDescription>
      <FieldError>This field is required.</FieldError>
    </Field>
  )
}`}
        />
      </div>


      <div className="space-y-6">
        <DocH2>Examples</DocH2>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">With Error</h3>
          <ComponentPreview
            code={`<Field>
  <FieldLabel>Username</FieldLabel>
  <Input aria-invalid="true" placeholder="username" />
  <FieldError>Username is already taken.</FieldError>
</Field>`}
          >
            <Field className="max-w-sm">
              <FieldLabel>Username</FieldLabel>
              <Input aria-invalid="true" placeholder="username" />
              <FieldError>Username is already taken.</FieldError>
            </Field>
          </ComponentPreview>
        </div>
      </div>

      <DocPager slug="components/field" />
    </div>
  )
}
