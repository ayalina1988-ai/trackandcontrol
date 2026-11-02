import { Hero } from '@/components/landing/hero'
import { Demo } from '@/components/landing/demo'
import { FinalCta } from '@/components/landing/final-cta'
import { WhyChoose } from '@/components/landing/why-choose'
import { StickyCta } from '@/components/landing/sticky-cta'

export default function Page() {
  return (
    <main className="min-h-screen bg-ink pb-20 text-white md:pb-0">
      <Hero />
      <Demo />
      <WhyChoose />
      <FinalCta />
      <StickyCta />
      <footer className="border-t border-white/10 bg-ink px-6 py-8 text-center text-sm text-white/60">
  <div className="mx-auto max-w-[1100px] space-y-3">
    {/* Paiement sécurisé */}
    <div className="flex items-center justify-center gap-2 text-white/80">
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span>Paiement 100% sécurisé · Visa · Mastercard · PayPal</span>
    </div>
    {/* Copyright */}
    <div>© 2026 Track & Control — Tous droits réservés</div>
    {/* Contact */}
    <div>
      <a href="mailto:trackandcontrol@outlook.com" className="hover:text-white transition-colors">
        trackandcontrol@outlook.com
      </a>
    </div>
  </div>
</footer>
    </main>
  )
}
