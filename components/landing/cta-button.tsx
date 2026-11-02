import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CHECKOUT_URL } from '@/lib/offer'

export function CtaButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        'group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-gold to-gold-deep px-6 py-4 font-sans text-base font-bold text-ink shadow-[0_10px_30px_-8px_rgba(251,191,36,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold',
        className,
      )}
    >
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      {children}
    </a>
  )
}
