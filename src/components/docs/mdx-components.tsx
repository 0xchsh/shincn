import * as React from "react"
import { cn } from "@/lib/utils"

/** Styled prose primitives for doc content pages */

function DocH1({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function DocH2({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold tracking-tight border-b pb-2",
        className
      )}
      {...props}
    />
  )
}

function DocH3({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-lg font-medium", className)}
      {...props}
    />
  )
}

function DocP({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function DocLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "font-medium text-foreground hover:underline hover:decoration-dotted hover:decoration-muted-foreground/50 underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function DocList({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "list-disc pl-6 space-y-1 text-sm text-muted-foreground [&_li]:pl-1",
        className
      )}
      {...props}
    />
  )
}

function DocInlineCode({
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs",
        className
      )}
      {...props}
    />
  )
}

function DocStep({
  step,
  title,
  children,
}: {
  step: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium">
        {step}
      </div>
      <div className="flex-1 space-y-2 pt-0.5">
        <h3 className="text-sm font-medium">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export {
  DocH1,
  DocH2,
  DocH3,
  DocP,
  DocLink,
  DocList,
  DocInlineCode,
  DocStep,
}
