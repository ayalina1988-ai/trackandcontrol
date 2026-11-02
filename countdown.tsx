'use client'

import { useEffect, useState } from 'react'
import { AlarmClock } from 'lucide-react'
import { OFFER_DEADLINE } from '@/lib/offer'

const pad = (n: number) => String(n).padStart(2, '0')

export function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const deadline = new Date(OFFER_DEADLINE).getTime()
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (remaining === 0) return null

  const totalSeconds = Math.floor((remaining ?? 0) / 1000)
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="flex items-center gap-1.5 font-sans text-sm font-bold text-alert">
        <AlarmClock className="size-4" aria-hidden="true" />
        Plus que 48h à ce prix
      </p>
      <p
        className="font-sans text-lg font-bold tabular-nums tracking-wider text-white"
        aria-label="Temps restant avant la fin de l'offre"
        suppressHydrationWarning
      >
        {remaining === null ? '--:--:--' : `${pad(h)}:${pad(m)}:${pad(s)}`}
      </p>
    </div>
  )
}
