"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { DocH1, DocH2, DocP } from "@/components/docs/mdx-components"
import { InstallCommand, CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocPager } from "@/components/docs/doc-pager"

export default function CarouselPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <DocH1>Carousel</DocH1>
        <DocP>
          A carousel with motion and swipe built on Embla Carousel.
        </DocP>
      </div>

      <ComponentPreview
        code={`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3].map((i) => (
      <CarouselItem key={i}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{i}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{i}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ComponentPreview>


      <div className="space-y-4">
        <DocH2>Installation</DocH2>
        <InstallCommand command="npx shadcn add carousel --registry https://ui.ch.sh/r" />
      </div>

      <div className="space-y-4">
        <DocH2>Usage</DocH2>
        <CodeBlock
          code={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

export default function Example() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`}
        />
      </div>

      <DocPager slug="components/carousel" />
    </div>
  )
}
