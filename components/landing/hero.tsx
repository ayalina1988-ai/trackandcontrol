import { Check, Star, Zap } from 'lucide-react'
import { CHECKOUT_URL, OLD_PRICE, PRICE } from '@/lib/offer'
import { CtaButton } from './cta-button'

const BENEFITS = [
  'Catégories déjà prêtes, rien à configurer',
  'Une seule page pour tout voir',
  'Bilan du mois calculé automatiquement',
]

function MobileHero() {
  return (
    <div className="flex flex-col md:hidden">
      <div className="relative">
        <img
          src="/images/clarte-financiere.webp"
          alt="Homme souriant devant son ordinateur portable, serein face à son budget"
          width={1376}
          height={768}
          fetchPriority="high"
          className="aspect-[4/5] h-auto w-full object-cover object-[52%_center]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/70 to-transparent" aria-hidden="true" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-ink/70 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
          <Star className="size-3 fill-gold" aria-hidden="true" />
          Produit déjà éprouvé sur le marché américain
        </span>
        <div className="absolute inset-x-0 bottom-0 px-5 pb-2">
          <p className="font-sans text-sm font-semibold text-gold">Track & Control</p>
          <h1 id="hero-title" className="mt-1 font-sans text-[32px] font-extrabold leading-[1.05] tracking-tight text-white text-balance">
            La sérénité financière, dès ce mois-ci.
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-5 pt-4">
        <p className="font-serif text-[17px] italic leading-relaxed text-slate-300 text-pretty">
          Le tableur qui vous montre où va votre argent, en 2 minutes par jour.
        </p>

        <ul className="flex flex-col gap-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 font-sans text-[15px] leading-snug text-white">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/60">
                <Check className="size-3 text-gold" strokeWidth={3} aria-hidden="true" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 rounded-2xl border border-gold/25 bg-ink-soft/60 p-5">
          <div className="flex items-baseline gap-3">
            <p className="font-sans text-[44px] font-extrabold leading-none text-gold">{PRICE}</p>
            <p className="font-serif text-lg text-white/40 line-through">
              <span className="sr-only">Au lieu de </span>
              {OLD_PRICE}
            </p>
            <span className="ml-auto rounded-full bg-gold/15 px-2 py-0.5 font-sans text-[11px] font-bold text-gold">-53%</span>
          </div>
          <p className="font-sans text-xs text-white/60">Paiement unique · Sans abonnement</p>
          <CtaButton className="px-4 text-[17px]">Télécharger maintenant</CtaButton>
          <div className="flex items-center justify-center gap-2 font-sans text-xs text-white/60">
            <span className="flex text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-gold" />
              ))}
            </span>
            Téléchargement immédiat · Garantie 14 jours · Paiement sécurisé
          </div>
        </div>

        <figure className="relative aspect-[1210/1080] overflow-hidden rounded-2xl bg-ink-soft ring-1 ring-white/10">
          {/* Crops hero-full.png to the laptop + phone area so the text baked into the image is not repeated */}
          <img
            src="/images/hero-full.png"
            alt="Le tableur Track & Control affiché sur ordinateur portable et sur smartphone"
            width={2048}
            height={1280}
            loading="lazy"
            decoding="async"
            className="absolute left-[-66.12%] top-[-8.33%] h-auto w-[169.26%] max-w-none"
          />
        </figure>

        <p className="text-center font-serif text-[13px] italic text-slate-400">
          Produit déjà éprouvé sur le marché américain — traduit et adapté pour les francophones par Track & Control.
        </p>
      </div>
    </div>
  )
}

function DesktopHero() {
  return (
    <div className="hidden px-4 pt-8 md:block">
      <div className="@container relative mx-auto max-w-[1200px]">
        <img
          src="/images/hero-full.png"
          alt="Tableur budget affiché sur ordinateur et smartphone, 6,99€ au lieu de 14,99€, noté 4,9/5 par plus de 5 000 utilisateurs"
          width={2048}
          height={1280}
          fetchPriority="high"
          className="h-auto w-full rounded-2xl"
        />
        <div className="absolute left-[3%] top-[18.5%] flex h-[15.2%] w-[37.4%] flex-col justify-center gap-[0.9cqw] bg-gradient-to-r from-[#21252c] to-[#272a2f] pl-[1.7cqw]">
          <p
            role="heading"
            aria-level={1}
            className="whitespace-nowrap font-sans text-[4.35cqw] font-extrabold leading-none tracking-tight text-white"
          >
            Track <span className="text-gold">&</span> Control
          </p>
          <p className="font-serif text-[1.22cqw] italic leading-snug text-slate-300">
            Le tableur qui vous montre où va votre argent, en 2 minutes par jour.
          </p>
        </div>
        <a
          href={CHECKOUT_URL}
          aria-label={`Télécharger maintenant — ${PRICE}`}
          className="group absolute left-[4.5%] top-[59.8%] flex h-[6.4%] w-[23.9%] items-center justify-center gap-[0.6cqw] rounded-[0.7cqw] bg-gradient-to-b from-gold to-gold-deep font-sans text-[1.3cqw] font-bold uppercase tracking-wide text-ink shadow-[0_10px_30px_-8px_rgba(251,191,36,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Zap className="size-[1.4cqw] fill-ink/20" aria-hidden="true" />
          Télécharger maintenant
        </a>
      </div>

      <div className="mx-auto mt-8 flex max-w-[400px] flex-col items-center gap-4 text-center">
        <p className="font-serif text-[13px] italic text-slate-400">
          Satisfait ou remboursé 14 jours · Téléchargement instantané · Sans abonnement
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-sans text-xs font-semibold text-gold">
          <Zap className="size-3.5 fill-gold" aria-hidden="true" />
          Offre de lancement — 53% de remise (limité)
        </span>
      </div>

      <figure className="mx-auto mt-16 grid max-w-[1000px] grid-cols-2 items-center gap-12">
        <img
          src="/images/clarte-financiere.webp"
          alt="Homme souriant devant son ordinateur portable dans un salon lumineux, serein face à son budget"
          width={1376}
          height={768}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] h-auto w-full rounded-2xl object-cover object-[45%_center] ring-1 ring-white/10"
        />
        <figcaption>
          <p className="font-sans text-[34px] font-bold leading-tight text-white text-balance">
            La sérénité financière, dès ce mois-ci.
          </p>
          <p className="mt-3 font-serif text-lg italic leading-relaxed text-white/70">
            "Vos finances ne vont pas s'arranger toutes seules. Mais elles peuvent s'arranger en 2 minutes par jour."
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-12 md:pb-16">
      <MobileHero />
      <DesktopHero />
    </section>
  )
}
