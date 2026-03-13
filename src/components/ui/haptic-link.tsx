"use client"

import Link from "next/link"
import { useHaptics } from "@/hooks/use-haptics"

function HapticLink({
  onClick,
  ...props
}: React.ComponentProps<typeof Link>) {
  const { trigger } = useHaptics()

  return (
    <Link
      onClick={(e) => {
        trigger("nudge")
        onClick?.(e)
      }}
      {...props}
    />
  )
}

export { HapticLink }
