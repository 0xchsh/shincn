"use client"

import * as React from "react"

type SoundContextType = {
  soundEnabled: boolean
  setSoundEnabled: (enabled: boolean) => void
}

const SoundContext = React.createContext<SoundContextType>({
  soundEnabled: true,
  setSoundEnabled: () => {},
})

function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabledState] = React.useState(true)

  React.useEffect(() => {
    const stored = localStorage.getItem("sound-enabled")
    if (stored === "false") setSoundEnabledState(false)
  }, [])

  const setSoundEnabled = React.useCallback((enabled: boolean) => {
    setSoundEnabledState(enabled)
    localStorage.setItem("sound-enabled", String(enabled))
  }, [])

  return (
    <SoundContext value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext>
  )
}

function useSoundEnabled() {
  return React.useContext(SoundContext)
}

export { SoundProvider, useSoundEnabled }
