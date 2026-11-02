'use client'

import { useEffect, useState } from 'react'
import { CtaButton } from './cta-button'
import { cn } from '@/lib/utils'
import { PRICE } from '@/lib/offer'

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      inert={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden',
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full',
      )}
    >
      <CtaButton className="py-3.5 text-[15px]">
        Télécharger maintenant — {PRICE}
      </CtaButton>
    </div>
  )
}
