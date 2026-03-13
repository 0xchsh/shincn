"use client"

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import { getPrevNext } from "@/lib/docs"
import { HapticLink } from "@/components/ui/haptic-link"

function DocPager({ slug }: { slug: string }) {
  const { prev, next } = getPrevNext(slug)

  return (
    <div className="flex items-center justify-between pt-8">
      {prev ? (
        <HapticLink
          href={`/docs/${prev.slug}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {prev.title}
        </HapticLink>
      ) : (
        <div />
      )}
      {next ? (
        <HapticLink
          href={`/docs/${next.slug}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {next.title}
          <ArrowRight className="size-4" />
        </HapticLink>
      ) : (
        <div />
      )}
    </div>
  )
}

export { DocPager }
