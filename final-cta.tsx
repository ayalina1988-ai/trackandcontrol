import { CtaButton } from './cta-button'
import { Countdown } from './countdown'
import { Reveal } from './reveal'
import { OLD_PRICE, PRICE } from '@/lib/offer'

export function FinalCta() {
  return (
    <section id="acheter" aria-labelledby="final-title" className="scroll-mt-4 px-4 py-12 md:py-16">
      <Reveal className="mx-auto flex max-w-[480px] flex-col items-center gap-6 text-center">
        <div>
          <h2 id="final-title" className="font-sans text-[26px] font-bold leading-tight text-white text-balance md:text-[32px]">
            Prêt à reprendre le contrôle ?
          </h2>
          <p className="mt-2 font-serif text-[16px] italic leading-relaxed text-white/70">
            Et si gérer votre budget devenait simple ? Plus de calculs à la main. Plus de stress. Juste de la clarté, en 2 minutes par jour.


          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-gold/25 bg-ink-soft/60 p-6 text-center md:p-8">
          <div className="flex items-baseline gap-3">
            <p className="font-sans text-[56px] font-extrabold leading-none text-gold">{PRICE}</p>
            <p className="font-serif text-lg text-white/40 line-through">
              <span className="sr-only">Au lieu de </span>
              {OLD_PRICE}
            </p>
          </div>
          <p className="font-sans text-xs font-medium text-white/60">Paiement unique · Sans abonnement</p>
          <CtaButton>Télécharger maintenant</CtaButton>
          <Countdown />
        </div>
      </Reveal>

      
    </section>
  )
}
