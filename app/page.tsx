'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Clock,
  Award,
  Building2,
  Star,
  Quote
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, [delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

function StaggerReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.children

    gsap.fromTo(items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero entrance
    gsap.fromTo('.hero-word',
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
    )
    gsap.fromTo('.hero-fade',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.8 }
    )

    // Hero parallax (subtle)
    gsap.to('.hero-content', {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[#080c14] text-slate-400 antialiased">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#c9a96e]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-[#1e3a5f]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[#c9a96e]/[0.02] rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080c14]/70 backdrop-blur-xl border-b border-slate-800/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => scrollTo('top')} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:border-[#c9a96e]/40 transition-colors duration-500">
                <span className="text-[#c9a96e] font-serif font-bold text-sm">GJ</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-[11px] text-slate-300 tracking-wide">Gyllstrøm & Johansen</p>
              </div>
            </button>
            <div className="flex items-center gap-6 md:gap-10">
              {[
                { label: 'Tjenester', id: 'tjenester' },
                { label: 'Om oss', id: 'om-oss' },
                { label: 'Kontakt', id: 'kontakt' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-slate-500 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('kontakt')}
                className="hidden md:inline-flex text-[11px] uppercase tracking-[0.15em] bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
              >
                Book samtale
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#080c14] to-[#080c14]" />

        {/* Animated ambient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#c9a96e]/[0.04] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#1e3a5f]/[0.04] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />

        <div className="hero-content relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="hero-fade mb-8" style={{ opacity: 0 }}>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-500 border border-slate-800/60 rounded-full px-5 py-2.5 bg-slate-900/30 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-[#c9a96e]" />
              Godkjent av Finanstilsynet
            </span>
          </div>

          <h1 className="font-serif text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] text-slate-100 leading-[0.9] tracking-tight">
            <span className="block overflow-hidden">
              <span className="hero-word block" style={{ opacity: 0 }}>Gyllstrøm</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-word block" style={{ opacity: 0 }}>& <span className="text-[#c9a96e]">Johansen</span></span>
            </span>
          </h1>

          <div className="hero-fade mt-8 md:mt-12" style={{ opacity: 0 }}>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Din partner innen revisjon og økonomisk rådgivning. <br className="hidden md:block" />
              Personlig. Pålitelig. Profesjonell.
            </p>
          </div>

          <div className="hero-fade mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
            <button
              onClick={() => scrollTo('kontakt')}
              className="group flex items-center gap-2 bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] px-8 py-4 rounded-2xl text-[12px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 shadow-lg shadow-[#c9a96e]/10"
            >
              Book uforpliktende samtale
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('tjenester')}
              className="text-[12px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-300 transition-colors duration-300 px-6 py-4"
            >
              Se hva vi tilbyr
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-10 border-y border-slate-800/30 bg-slate-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800/30">
            {[
              { value: '40+', label: 'Års erfaring' },
              { value: '2', label: 'Statsautoriserte revisorer' },
              { value: '2016', label: 'Etablert i Drammen' },
              { value: '100%', label: 'Personlig oppfølging' },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-4 text-center">
                <p className="font-serif text-3xl md:text-4xl text-slate-200">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Emotional Hook */}
      <section className="relative z-10 py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] block mb-4">Hvorfor velge oss</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 leading-tight max-w-3xl mx-auto">
              Revisjon handler ikke bare om tall. <span className="text-[#c9a96e]">Det handler om tillit.</span>
            </h2>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Direkte kontakt med partnerne',
                desc: 'Ingen mellomledd. Du snakker alltid direkte med Hege eller Rune — de som tar alle beslutningene.'
              },
              {
                icon: Clock,
                title: 'Over 40 års erfaring',
                desc: 'Hege startet i 1984, Rune i 1996. Tilsammen har vi sett det meste og vet hvordan vi løser det.'
              },
              {
                icon: Award,
                title: 'Godkjent av Finanstilsynet',
                desc: 'Vi er statsautoriserte revisorer med offentlig godkjenning. Du kan stole på at jobben gjøres riktig.'
              },
            ].map((item, i) => (
              <div key={i} className="group bg-slate-900/30 border border-slate-800/40 rounded-3xl p-8 md:p-10 hover:border-[#c9a96e]/20 hover:bg-slate-900/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-[#c9a96e]/10 group-hover:border-[#c9a96e]/20 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-[#c9a96e]" />
                </div>
                <h3 className="text-lg text-slate-200 font-medium mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="relative z-10 py-28 md:py-40 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] block mb-4">Våre tjenester</span>
                <h2 className="font-serif text-4xl md:text-5xl text-slate-100 leading-tight mb-6">
                  Alt din bedrift trenger, på ett sted
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Fra revisjon og årsregnskap til skatterådgivning og omstruktureringer. Vi er med deg hele veien.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <button
                  onClick={() => scrollTo('kontakt')}
                  className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-[#c9a96e] hover:text-[#b8965e] transition-colors duration-300"
                >
                  Start en samtale
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Reveal>
            </div>

            <StaggerReveal className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Revisjon og årsregnskap',
                  desc: 'Revisjon av årsregnskap, forenklet revisorkontroll, utarbeidelse av årsregnskap og skattemelding med vedlegg.',
                  tags: ['Årsregnskap', 'Skattemelding', 'Attestasjon']
                },
                {
                  num: '02',
                  title: 'Skatterådgivning',
                  desc: 'Skatteplanlegging, omstruktureringer og generasjonsskifter. Vi hjelper deg å ta de smarte valgene.',
                  tags: ['Skatteplanlegging', 'Omstrukturering', 'Generasjonsskifter']
                },
                {
                  num: '03',
                  title: 'Økonomisk rådgivning',
                  desc: 'Sparringspartner for ledelse og eiere. Strategisk rådgivning for vekst og lønnsomhet.',
                  tags: ['Strategi', 'Sparring', 'Vekst']
                },
                {
                  num: '04',
                  title: 'Regnskap og bokføring',
                  desc: 'Løpende bokføring, lønnskjøring og årsoppgjør. Slik at du kan fokusere på det du er best på.',
                  tags: ['Bokføring', 'Lønn', 'Årsoppgjør']
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group bg-[#080c14] border border-slate-800/50 rounded-3xl p-8 md:p-10 hover:border-[#c9a96e]/20 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e]">{service.num}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-800/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#c9a96e]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-slate-100 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-[0.15em] text-slate-600 bg-slate-900/60 rounded-full px-4 py-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10 py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] via-[#0c1020] to-[#080c14]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a96e]/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <Quote className="w-10 h-10 text-[#c9a96e]/30 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-slate-200 leading-snug md:leading-tight mb-10">
              "Å drive helt alene er krevende i vår bransje. Derfor er vi to — og derfor bruker vi uttrykket{' '}
              <span className="text-[#c9a96e] italic">'En er som ingen, to er som ti'</span>."
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#c9a96e] flex items-center justify-center">
                <span className="text-[#080c14] font-bold text-sm">G&J</span>
              </div>
              <div className="text-left">
                <p className="text-slate-300 text-sm font-medium">Hege Gyllstrøm & Rune Johansen</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Partnere</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] block mb-4">Så enkelt er det</span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100 leading-tight">
              Tre steg til bedre økonomi
            </h2>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Book en samtale',
                desc: 'Ring oss eller send en melding. Vi svarer innen 24 timer og finner en tid som passer deg.'
              },
              {
                step: '02',
                title: 'Vi blir kjent',
                desc: 'I en uforpliktende samtale lærer vi din bedrift å kjenne og identifiserer dine behov.'
              },
              {
                step: '03',
                title: 'Vi tar det videre',
                desc: 'Du får en dedikert partner som følger deg tett — år etter år, med personlig oppfølging.'
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 rounded-3xl bg-slate-900/50 border border-slate-800/50 flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl text-[#c9a96e]">{item.step}</span>
                </div>
                <h3 className="text-lg text-slate-200 font-medium mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-slate-800 to-transparent" />
                )}
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] via-[#0c1020] to-[#080c14]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/[0.04] rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-100 leading-[0.95] mb-8">
              La oss prate
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-500 text-lg max-w-lg mx-auto mb-12">
              Uforpliktende samtale om hvordan vi kan hjelpe din bedrift å vokse trygt.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+4791542409"
                className="group flex items-center gap-2 bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] px-10 py-5 rounded-2xl text-[12px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 shadow-xl shadow-[#c9a96e]/10"
              >
                <Phone className="w-4 h-4" />
                Ring Rune nå
              </a>
              <button
                onClick={() => scrollTo('kontakt')}
                className="group flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 px-10 py-5 rounded-2xl text-[12px] uppercase tracking-[0.15em] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Send melding
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="relative z-10 py-28 md:py-40 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Reveal>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e] block mb-4">Kontakt</span>
                <h2 className="font-serif text-4xl md:text-5xl text-slate-100 leading-tight mb-8">
                  Send oss en melding
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-8">
                  {[
                    { icon: MapPin, label: 'Besøksadresse', value: 'Muusøya 1, 3023 Drammen' },
                    { icon: Phone, label: 'Telefon', value: '(+47) 915 42 409 (Rune)\n(+47) 908 21 756 (Hege)' },
                    { icon: Mail, label: 'E-post', value: 'rune@gjrevisjon.no\nhege@gjrevisjon.no' },
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-4 h-4 text-[#c9a96e]" />
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">{item.label}</p>
                      </div>
                      <p className="text-slate-400 text-sm pl-7 whitespace-pre-line">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <form action="https://formspree.io/f/xnqevwpy" method="POST" className="space-y-6">
                {[
                  { id: 'name', label: 'Navn', type: 'text', placeholder: 'Ditt navn' },
                  { id: 'email', label: 'E-post', type: 'email', placeholder: 'din@epost.no' },
                  { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '(+47) 000 00 000' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.id !== 'phone'}
                      className="w-full bg-slate-900/40 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 text-sm placeholder-slate-700 outline-none focus:border-[#c9a96e]/40 transition-colors duration-300"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-3">
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-slate-900/40 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 text-sm placeholder-slate-700 outline-none focus:border-[#c9a96e]/40 resize-none transition-colors duration-300"
                    placeholder="Fortell oss om din bedrift og hva du trenger hjelp med..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] py-5 rounded-2xl text-[12px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 shadow-lg shadow-[#c9a96e]/10"
                >
                  Send melding
                </button>
                <p className="text-[10px] text-slate-700 text-center tracking-wide">
                  Vi svarer innen 24 timer
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center">
                <span className="text-[#c9a96e] font-serif font-bold text-sm">GJ</span>
              </div>
              <div>
                <p className="text-sm text-slate-400">Gyllstrøm & Johansen AS</p>
                <p className="text-[10px] text-slate-700 tracking-wide">Statsautoriserte Revisorer · Drammen</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              {['Tjenester', 'Om oss', 'Kontakt'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                  className="text-[10px] uppercase tracking-[0.2em] text-slate-700 hover:text-slate-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <a href="/personvern" className="text-[10px] uppercase tracking-[0.2em] text-slate-700 hover:text-slate-400 transition-colors">
                Personvern
              </a>
            </div>
            <p className="text-[10px] text-slate-800 tracking-wide">
              © {new Date().getFullYear()} Alle rettigheter reservert
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
