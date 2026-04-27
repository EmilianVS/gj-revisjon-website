'use client'

import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, ArrowUpRight, Menu, X } from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Tjenester', id: 'tjenester' },
    { label: 'Om', id: 'om-oss' },
    { label: 'Kontakt', id: 'kontakt' },
  ]

  return (
    <div style={{ background: '#060a14', minHeight: '100vh' }}>
      {/* ============================================
          FLOATING GRADIENT ORBS — reduced for perf
          ============================================ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="orb orb-gold animate-float"
          style={{ width: '400px', height: '400px', top: '-5%', right: '-8%' }}
        />
        <div
          className="orb orb-blue animate-float-delayed"
          style={{ width: '350px', height: '350px', bottom: '30%', left: '-10%' }}
        />
      </div>

      {/* ============================================
          NAVIGATION — no backdrop-filter (GPU heavy)
          ============================================ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(6, 10, 20, 0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(196, 165, 116, 0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>
            <button onClick={() => scrollTo('top')} className="group flex items-center gap-3">
              <div
                className="flex items-center justify-center transition-all duration-500 group-hover:border-[#c4a57440]"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(196, 165, 116, 0.15)',
                  flexShrink: 0,
                }}
              >
                <span className="font-display text-base" style={{ color: '#c4a574' }}>GJ</span>
              </div>
              <span
                className="hidden md:block"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#6b7280',
                }}
              >
                Gyllstrøm & Johansen
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="link-hover"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollTo('kontakt')} className="btn-elegant">
                Book samtale
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: '#e8e4dc' }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              background: 'rgba(6, 10, 20, 0.98)',
              borderTop: '1px solid rgba(196, 165, 116, 0.06)',
              padding: '1.5rem 1.5rem 2rem',
            }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    fontSize: '0.875rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#9ca3af',
                    textAlign: 'left',
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollTo('kontakt')} className="btn-elegant w-full">
                Book samtale
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================
          HERO
          ============================================ */}
      <section
        id="top"
        className="relative z-10 flex flex-col justify-end"
        style={{ minHeight: '100dvh', paddingBottom: 'clamp(3rem, 8vh, 6rem)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16 w-full">
          {/* Top label */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <div className="rule-left" style={{ width: '40px', flexShrink: 0 }} />
              <span className="label-tiny">Statsautoriserte Revisorer · Drammen</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="headline-massive">
            <span className="block">Gyllstrøm</span>
            <span className="block">
              & <em style={{ color: '#c4a574', fontStyle: 'normal' }}>Johansen</em>
            </span>
          </h1>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-10 md:mt-16">
            <div className="max-w-md">
              <p className="body-elegant" style={{ color: '#6b7280' }}>
                Din partner innen revisjon og økonomisk rådgivning.
                Personlig. Pålitelig. Profesjonell. Siden 2016.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button onClick={() => scrollTo('kontakt')} className="btn-elegant">
                Book uforpliktende samtale
                <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => scrollTo('tjenester')}
                className="link-hover"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                Se våre tjenester
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES — Editorial List
          ============================================ */}
      <section id="tjenester" className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Section header */}
          <div className="flex items-start justify-between mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="rule-left" style={{ width: '40px', flexShrink: 0 }} />
                <span className="label-tiny">Tjenester</span>
              </div>
              <h2 className="headline-section">
                Hva vi<br className="hidden md:block" /> gjør
              </h2>
            </div>
            <span
              className="hidden md:block"
              style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: 'rgba(107, 114, 128, 0.3)', marginTop: '2rem' }}
            >
              04 TILBUD
            </span>
          </div>

          {/* Service list */}
          <div>
            {[
              {
                num: '01',
                title: 'Revisjon og årsregnskap',
                desc: 'Revisjon av årsregnskap, forenklet revisorkontroll, utarbeidelse av årsregnskap og skattemelding med vedlegg. Vi sikrer at alt er i orden.',
              },
              {
                num: '02',
                title: 'Skatterådgivning',
                desc: 'Skatteplanlegging, omstruktureringer og generasjonsskifter. Vi hjelper deg å ta de smarte valgene for din bedrift og din familie.',
              },
              {
                num: '03',
                title: 'Økonomisk rådgivning',
                desc: 'Sparringspartner for ledelse og eiere. Strategisk rådgivning for vekst, lønnsomhet og langsiktig verdiskapning.',
              },
              {
                num: '04',
                title: 'Regnskap og bokføring',
                desc: 'Løpende bokføring, lønnskjøring og årsoppgjør. Slik at du kan fokusere på det du er best på — å drive bedrift.',
              },
            ].map((service) => (
              <div key={service.num} className="service-item">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-4">
                  <div className="flex items-baseline gap-4 md:gap-10">
                    <span className="service-num">{service.num}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-desc md:text-right">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PHILOSOPHY — Quote
          ============================================ */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left label */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                <div className="rule-left md:w-full" style={{ flexShrink: 0 }} />
                <span
                  className="label-tiny"
                  style={{
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed',
                    display: 'none',
                  }}
                >
                  Filosofi
                </span>
                <span className="label-tiny md:hidden">Filosofi</span>
                <span
                  className="label-tiny hidden md:block"
                  style={{
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed',
                  }}
                >
                  Filosofi
                </span>
              </div>
            </div>

            {/* Center content */}
            <div className="md:col-span-7">
              <blockquote>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                    fontWeight: 300,
                    lineHeight: 1.25,
                    color: '#e8e4dc',
                    letterSpacing: '-0.01em',
                  }}
                >
                  "Å drive helt alene er krevende i vår bransje. Derfor er vi to — og derfor bruker vi uttrykket{' '}
                  <em style={{ color: '#c4a574', fontStyle: 'italic' }}>'En er som ingen, to er som ti'</em>."
                </p>
              </blockquote>
            </div>

            {/* Right attribution */}
            <div className="md:col-span-3 md:pt-16">
              <div className="rule-left mb-4" />
              <p style={{ fontSize: '0.875rem', color: '#e8e4dc', marginBottom: '0.25rem' }}>
                Hege Gyllstrøm & Rune Johansen
              </p>
              <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280' }}>
                Partnere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT — Editorial Layout
          ============================================ */}
      <section id="om-oss" className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left: Big headline */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="rule-left" style={{ width: '40px', flexShrink: 0 }} />
                <span className="label-tiny">Om oss</span>
              </div>
              <h2 className="headline-section">
                Vi bryr oss — <em style={{ fontStyle: 'italic', color: '#c4a574' }}>derfor er vi</em>
              </h2>
            </div>

            {/* Right: Body text */}
            <div className="md:col-span-5 md:col-start-8 md:pt-24">
              <p className="body-elegant" style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#e8e4dc', fontWeight: 400 }}>Gyllstrøm & Johansen AS</strong> startet opp 1. januar 2016 med Hege Gyllstrøm og Rune Johansen som partnere.
              </p>
              <p className="body-elegant" style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                Som en naturlig del av det å være revisorer er vi også økonomiske rådgivere — uten at det går på bekostning av revisors uavhengighet.
              </p>
              <p className="body-elegant" style={{ color: '#6b7280', marginBottom: '2.5rem' }}>
                Vår strategi er å tilby våre klienter personlig kontakt, være joviale, løsningsorienterte, men samtidig utføre vår profesjon med høy grad av integritet.
              </p>

              {/* Stats row */}
              <div className="flex gap-12 pt-6" style={{ borderTop: '1px solid rgba(196, 165, 116, 0.08)' }}>
                <div>
                  <span className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 300, color: '#e8e4dc' }}>40+</span>
                  <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.5rem' }}>Års erfaring</p>
                </div>
                <div>
                  <span className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 300, color: '#e8e4dc' }}>2016</span>
                  <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.5rem' }}>Etablert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM — Cards
          ============================================ */}
      <section className="relative z-10 py-24 md:py-32" style={{ background: 'rgba(12, 18, 32, 0.4)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="rule-left" style={{ width: '40px', flexShrink: 0 }} />
            <span className="label-tiny">Partnerne</span>
          </div>

          <div className="grid md:grid-cols-2" style={{ gap: '1px', background: 'rgba(196, 165, 116, 0.06)' }}>
            {[
              {
                initials: 'HG',
                name: 'Hege Gyllstrøm',
                role: 'Statsautorisert Revisor',
                bio: 'Startet i bransjen i 1984. Lang erfaring innen revisjon og økonomisk rådgivning. Brenner for personlig kontakt og løsningsorientert arbeid.',
                phone: '(+47) 908 21 756',
              },
              {
                initials: 'RJ',
                name: 'Rune Johansen',
                role: 'Statsautorisert Revisor & Siviløkonom',
                bio: 'Startet i bransjen i 1996. Spesialist innen skatterådgivning og omstruktureringer.',
                phone: '(+47) 915 42 409',
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group"
                style={{
                  background: '#060a14',
                  padding: 'clamp(1.75rem, 4vw, 3rem)',
                  transition: 'background 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#0c1220'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#060a14'
                }}
              >
                <div className="flex items-start justify-between mb-8 md:mb-10">
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      border: '1px solid rgba(196, 165, 116, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'border-color 0.4s ease',
                      flexShrink: 0,
                    }}
                    className="group-hover:!border-[#c4a57440]"
                  >
                    <span className="font-display text-xl" style={{ color: '#c4a574' }}>{person.initials}</span>
                  </div>
                  <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: 'rgba(107, 114, 128, 0.3)' }}>0{i + 1}</span>
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 400, color: '#e8e4dc', marginBottom: '0.5rem' }}
                >
                  {person.name}
                </h3>
                <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4a574', marginBottom: '1.5rem' }}>
                  {person.role}
                </p>
                <p className="body-elegant" style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  {person.bio}
                </p>
                <div className="flex items-center gap-3" style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  <Phone size={14} style={{ color: '#c4a574', flexShrink: 0 }} />
                  <span>{person.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="rule" style={{ width: '40px', flexShrink: 0 }} />
            <span className="label-tiny">Kontakt</span>
            <div className="rule" style={{ width: '40px', flexShrink: 0 }} />
          </div>

          <h2 className="headline-section" style={{ marginBottom: '1.5rem' }}>
            La oss prate
          </h2>

          <p className="body-elegant" style={{ color: '#6b7280', maxWidth: '400px', margin: '0 auto 2rem' }}>
            Uforpliktende samtale om hvordan vi kan hjelpe din bedrift å vokse trygt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+4791542409" className="btn-elegant">
              <Phone size={14} />
              Ring Rune
            </a>
            <button onClick={() => scrollTo('kontakt')} className="btn-outline">
              <Mail size={14} />
              Send melding
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT FORM
          ============================================ */}
      <section id="kontakt" className="relative z-10 py-24 md:py-32" style={{ background: 'rgba(12, 18, 32, 0.4)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            {/* Left: Info */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="rule-left" style={{ width: '40px', flexShrink: 0 }} />
                <span className="label-tiny">Kontakt</span>
              </div>
              <h2 className="headline-sub" style={{ marginBottom: '2.5rem' }}>
                Send oss en melding
              </h2>

              <div className="space-y-8">
                {[
                  { label: 'Besøksadresse', value: 'Muusøya 1\n3023 Drammen', icon: MapPin },
                  { label: 'Telefon', value: '(+47) 915 42 409\n(+47) 908 21 756', icon: Phone },
                  { label: 'E-post', value: 'rune@gjrevisjon.no\nhege@gjrevisjon.no', icon: Mail },
                ].map((item, i) => (
                  <div key={i}>
                    <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.75rem' }}>
                      {item.label}
                    </p>
                    <div className="flex items-start gap-3">
                      <item.icon size={16} style={{ color: '#c4a574', marginTop: '4px', flexShrink: 0 }} />
                      <p style={{ fontSize: '0.9375rem', fontWeight: 300, color: '#9ca3af', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-6 md:col-start-7">
              <form action="https://formspree.io/f/xnqevwpy" method="POST" className="space-y-8">
                {[
                  { id: 'name', label: 'Navn', placeholder: 'Ditt navn' },
                  { id: 'email', label: 'E-post', placeholder: 'din@epost.no' },
                  { id: 'phone', label: 'Telefon', placeholder: '(+47) 000 00 000' },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.75rem', display: 'block' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.id === 'email' ? 'email' : field.id === 'phone' ? 'tel' : 'text'}
                      id={field.id}
                      name={field.id}
                      required={field.id !== 'phone'}
                      className="input-elegant"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.75rem', display: 'block' }}
                  >
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="input-elegant"
                    placeholder="Fortell oss om din bedrift..."
                  />
                </div>
                <button type="submit" className="btn-elegant" style={{ marginTop: '1.5rem' }}>
                  Send melding
                  <ArrowUpRight size={14} />
                </button>
                <p style={{ fontSize: '0.625rem', color: 'rgba(107, 114, 128, 0.4)', marginTop: '1rem' }}>
                  Vi svarer innen 24 timer
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="relative z-10" style={{ padding: '3rem 0', borderTop: '1px solid rgba(196, 165, 116, 0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(196, 165, 116, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="font-display text-sm" style={{ color: '#c4a574' }}>GJ</span>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Gyllstrøm & Johansen AS</p>
                <p style={{ fontSize: '0.625rem', color: 'rgba(107, 114, 128, 0.4)', letterSpacing: '0.1em' }}>Statsautoriserte Revisorer</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {['Tjenester', 'Om oss', 'Kontakt'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                  className="link-hover"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {item}
                </button>
              ))}
              <a href="/personvern" className="link-hover" style={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Personvern
              </a>
            </div>

            <p style={{ fontSize: '0.625rem', color: 'rgba(107, 114, 128, 0.3)', letterSpacing: '0.1em' }}>
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
