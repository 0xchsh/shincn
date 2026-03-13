"use client"

import { useWebHaptics } from "web-haptics/react"
import { useSoundEnabled } from "@/components/sound-provider"

export function useHaptics(options?: { sound?: boolean }) {
  const { soundEnabled } = useSoundEnabled()
  const shouldPlaySound = (options?.sound ?? true) && soundEnabled

  const { trigger, cancel, isSupported } = useWebHaptics({
    debug: shouldPlaySound,
  })

  const { trigger: triggerWithSound } = useWebHaptics({ debug: true })

  return { trigger, triggerWithSound, cancel, isSupported }
}
