import { Check, X } from 'lucide-react'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const alternatives = [
  {
    name: 'Les apps bancaires',
    verdict: 'Trop intrusives',
    cons: ['Accès à tous vos comptes', 'Données revendues ou analysées', 'Catégories imposées et erronées'],
  },
  {
    name: 'Les carnets papier',
    verdict: 'Abandonnés en 2 semaines',
    cons: ['Calculs à la main', 'Aucun graphique ni résumé', 'Impossible à consulter partout'],
  },
  {
    name: 'Les apps premium',
    verdict: 'Trop chères',
    cons: ['Abonnement de 5 à 10 € / mois', 'Fonctions inutiles et complexes', 'Vos données bloquées chez eux'],
  },
]

const benefits = [
  { title: '100 % privé', text: 'Aucune connexion bancaire. Vos chiffres restent sur votre appareil.' },
  { title: 'Prêt en 2 minutes', text: 'Catégories pré-remplies : saisissez vos montants, c’est tout.' },
  { title: 'Tout est automatique', text: 'Totaux, graphiques et résumé mensuel se calculent seuls.' },
  { title: 'Une seule page', text: 'Revenus, factures, dépenses, épargne et dettes en un coup d’œil.' },
  { title: 'Paiement unique', text: '6,99 € une fois. Pas d’abonnement, pas de frais cachés.' },
  { title: 'Partout avec vous', text: 'Fonctionne sur Excel et Google Sheets, ordinateur et mobile.' },
]

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="px-4 py-12 md:py-16">
      <Reveal className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            Pourquoi ce tableur
          </p>
          <h2 id="why-title" className="mt-2 font-sans text-[28px] font-bold leading-tight text-white text-balance md:text-[34px]">
            Vous avez sûrement déjà tout essayé.
          </h2>
          <blockquote className="mt-4 font-serif text-base italic leading-relaxed text-slate-300 text-pretty">
            {
              '« J’ai testé les apps bancaires — trop intrusives. Les carnets papier — abandonnés en deux semaines. Les applications premium — trop chères pour ma situation. Alors j’ai créé l’outil simple qui me manquait. »'
            }
          </blockquote>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {alternatives.map((alt) => (
            <li key={alt.name} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink-soft/40 p-5">
              <div>
                <h3 className="font-sans text-base font-bold text-white">{alt.name}</h3>
                <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-wide text-red-400">
                  {alt.verdict}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {alt.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 font-serif text-sm text-slate-300">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                      <X className="size-3 text-red-400" aria-hidden="true" />
                    </span>
                    {con}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-6 md:p-8">
          <h3 className="text-center font-sans text-xl font-bold text-white md:text-2xl">
            Track <span className="text-gold">&</span> Control, lui, est fait pour durer
          </h3>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                  <Check className="size-3.5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-sm font-bold text-white">{b.title}</p>
                  <p className="mt-0.5 font-serif text-sm leading-relaxed text-slate-300">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <CtaButton>Je reprends le contrôle</CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
