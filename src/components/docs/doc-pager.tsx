import Link from "next/link"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { getPrevNext } from "@/lib/docs"

function DocPager({ slug }: { slug: string }) {
  const { prev, next } = getPrevNext(slug)

  return (
    <div className="flex items-center justify-between pt-8">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {prev.title}
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {next.title}
          <ArrowRight className="size-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

export { DocPager }
