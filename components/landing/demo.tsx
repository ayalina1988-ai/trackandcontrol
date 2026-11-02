import { Check, Star } from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  'Pré-rempli intelligent (catégories prêtes)',
  "Vision complète en 1 coup d'œil",
  'Graphiques live automatiques',
]

export function Demo() {
  return (
    <section aria-labelledby="demo-title" className="border-y border-white/5 bg-ink-soft/40 px-4 py-12 md:py-16">
      <Reveal className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-2 md:gap-14">
        <figure className="mx-auto w-full max-w-[500px]">
          <img
            src="/images/product-tablet.png"
            alt="Tableau Budget Mensuel Track & Control sur tablette : revenus, dépenses, épargne et dettes avec graphiques"
            width={1816}
            height={1280}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl ring-1 ring-white/10"
          />
          <figcaption className="mt-3 text-center font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">
            Une seule page · Tout votre budget
          </figcaption>
        </figure>

        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold">Pourquoi ça marche</p>
          <h2 id="demo-title" className="mt-2 font-sans text-[28px] font-bold leading-tight text-white text-balance">
            Vos finances, enfin claires.
          </h2>

          <ul className="mt-5 flex flex-col gap-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 font-serif text-base text-slate-200">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                  <Check className="size-3.5 text-gold" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

        </div>
      </Reveal>
    </section>
  )
}
