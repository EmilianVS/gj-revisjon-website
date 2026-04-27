'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const animation = el.dataset.animate
            if (animation) {
              el.style.animation = `${animation} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${el.dataset.delay || '0s'} forwards`
            }
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ background: '#060a14', minHeight: '100vh' }}>
      {/* ============================================
          FLOATING GRADIENT ORBS
          ============================================ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb orb-gold animate-float" style={{ width: '600px', height: '600px', top: '-10%', right: '-5%' }} />
        <div className="orb orb-blue animate-float-delayed" style={{ width: '500px', height: '500px', bottom: '20%', left: '-10%' }} />
        <div className="orb orb-gold animate-float" style={{ width: '300px', height: '300px', top: '40%', right: '20%', animationDelay: '-8s', animationDuration: '18s' }} />
      </div>

      {/* ============================================
          NAVIGATION
          ============================================ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled ? 'rgba(6, 10, 20, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196, 165, 116, 0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between" style={{ height: '80px' }}>
            <button onClick={() => scrollTo('top')} className="group flex items-center gap-4">
              <div
                className="flex items-center justify-center transition-all duration-500 group-hover:border-[#c4a57440]"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(196, 165, 116, 0.15)',
                }}
              >
                <span className="font-display text-lg" style={{ color: '#c4a574' }}>GJ</span>
              </div>
              <span
                className="hidden md:block"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: scrolled ? '#6b7280' : '#6b7280',
                  transition: 'color 0.4s ease',
                }}
              >
                Gyllstrøm & Johansen
              </span>
            </button>

            <div className="flex items-center gap-12">
              {[
                { label: 'Tjenester', id: 'tjenester' },
                { label: 'Om', id: 'om-oss' },
                { label: 'Kontakt', id: 'kontakt' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="link-hover hidden md:block"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('kontakt')}
                className="btn-elegant"
              >
                Book samtale
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ============================================
          HERO
          ============================================ */}
      <section id="top" className="relative z-10 min-h-[100dvh] flex flex-col justify-end" style={{ paddingBottom: '8vh' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
          {/* Top label */}
          <div className="will-animate animate-reveal-opacity delay-200 mb-12 md:mb-16">
            <div className="flex items-center gap-6">
              <div className="rule-left" style={{ width: '60px' }} />
              <span className="label-tiny">Statsautoriserte Revisorer · Drammen</span>
            </div>
          </div>

          {/* Massive headline */}
          <h1 className="headline-massive">
            <span className="block overflow-hidden">
              <span className="will-animate animate-reveal-up delay-300 block">Gyllstrøm</span>
            </span>
            <span className="block overflow-hidden">
              <span className="will-animate animate-reveal-up delay-400 block">
                & <em style={{ color: '#c4a574', fontStyle: 'normal' }}>Johansen</em>
              </span>
            </span>
          </h1>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mt-16 md:mt-24">
            <div className="will-animate animate-reveal-up delay-500 max-w-md">
              <p className="body-elegant" style={{ color: '#6b7280' }}>
                Din partner innen revisjon og økonomisk rådgivning.
                Personlig. Pålitelig. Profesjonell. Siden 2016.
              </p>
            </div>
            <div className="will-animate animate-reveal-up delay-600 flex items-center gap-8">
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
      <section id="tjenester" className="relative z-10" style={{ padding: '15vh 0' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          {/* Section header */}
          <div className="flex items-start justify-between mb-20">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="rule-left" style={{ width: '40px' }} />
                <span className="label-tiny">Tjenester</span>
              </div>
              <h2 className="headline-section will-animate" data-animate="reveal-up">
                Hva vi<br />gjør
              </h2>
            </div>
            <span
              className="hidden md:block will-animate"
              data-animate="reveal-opacity"
              style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: 'rgba(107, 114, 128, 0.3)', marginTop: '2rem' }}
            >
              04 TILBUD
            </span>
          </div>

          {/* Service list */}
          <div className="mt-16">
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
            ].map((service, i) => (
              <div
                key={i}
                className="service-item will-animate"
                data-animate="reveal-up"
                data-delay={`${i * 0.1}s`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                  <div className="flex items-baseline gap-8 md:gap-16">
                    <span className="service-num">{service.num}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p
                    className="body-elegant max-w-sm md:text-right"
                    style={{ color: '#6b7280', fontSize: '0.875rem', opacity: 0 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '1'
                      ;(e.currentTarget as HTMLElement).style.transition = 'opacity 0.6s ease'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = '0'
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PHILOSOPHY — Asymmetric Quote
          ============================================ */}
      <section className="relative z-10" style={{ padding: '20vh 0' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left label */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                <div className="rule-left md:w-full" />
                <span
                  className="label-tiny will-animate"
                  data-animate="reveal-opacity"
                  style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
                >
                  Filosofi
                </span>
              </div>
            </div>

            {/* Center content */}
            <div className="md:col-span-7">
              <blockquote className="will-animate" data-animate="reveal-up">
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.15,
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
            <div className="md:col-span-3 md:pt-24">
              <div className="will-animate" data-animate="reveal-opacity" data-delay="0.3s">
                <div className="rule-left mb-6" />
                <p style={{ fontSize: '0.875rem', color: '#e8e4dc', marginBottom: '0.5rem' }}>
                  Hege Gyllstrøm & Rune Johansen
                </p>
                <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280' }}>
                  Partnere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT — Editorial Magazine Layout
          ============================================ */}
      <section id="om-oss" className="relative z-10" style={{ padding: '15vh 0' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            {/* Left: Big headline */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-6 mb-8">
                <div className="rule-left" style={{ width: '40px' }} />
                <span className="label-tiny">Om oss</span>
              </div>
              <h2 className="headline-section will-animate" data-animate="reveal-up">
                Vi bryr oss — <em style={{ fontStyle: 'italic', color: '#c4a574' }}>derfor er vi</em>
              </h2>
            </div>

            {/* Right: Body text with offset */}
            <div className="md:col-span-5 md:col-start-8 md:pt-32">
              <div className="will-animate" data-animate="reveal-up" data-delay="0.2s">
                <p className="body-elegant" style={{ color: '#9ca3af', marginBottom: '2rem' }}>
                  <strong style={{ color: '#e8e4dc', fontWeight: 400 }}>Gyllstrøm & Johansen AS</strong> startet opp 1. januar 2016 med Hege Gyllstrøm og Rune Johansen som partnere.
                </p>
                <p className="body-elegant" style={{ color: '#6b7280', marginBottom: '2rem' }}>
                  Som en naturlig del av det å være revisorer er vi også økonomiske rådgivere — uten at det går på bekostning av revisors uavhengighet.
                </p>
                <p className="body-elegant" style={{ color: '#6b7280', marginBottom: '3rem' }}>
                  Vår strategi er å tilby våre klienter personlig kontakt, være joviale, løsningsorienterte, men samtidig utføre vår profesjon med høy grad av integritet.
                </p>

                {/* Stats row */}
                <div className="flex gap-16 pt-8" style={{ borderTop: '1px solid rgba(196, 165, 116, 0.08)' }}>
                  <div>
                    <span className="font-display" style={{ fontSize: '2.5rem', fontWeight: 300, color: '#e8e4dc' }}>40+</span>
                    <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.5rem' }}>Års erfaring</p>
                  </div>
                  <div>
                    <span className="font-display" style={{ fontSize: '2.5rem', fontWeight: 300, color: '#e8e4dc' }}>2016</span>
                    <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.5rem' }}>Etablert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM — Minimal List
          ============================================ */}
      <section className="relative z-10" style={{ padding: '15vh 0', background: 'rgba(12, 18, 32, 0.4)' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-6 mb-16">
            <div className="rule-left" style={{ width: '40px' }} />
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
                className="will-animate group"
                data-animate="reveal-up"
                data-delay={`${i * 0.15}s`}
                style={{ background: '#060a14', padding: '4rem', transition: 'background 0.6s ease' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#0c1220'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#060a14'
                }}
              >
                <div className="flex items-start justify-between mb-12">
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      border: '1px solid rgba(196, 165, 116, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'border-color 0.4s ease',
                    }}
                    className="group-hover:!border-[#c4a57440]"
                  >
                    <span className="font-display text-2xl" style={{ color: '#c4a574' }}>{person.initials}</span>
                  </div>
                  <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: 'rgba(107, 114, 128, 0.3)' }}>0{i + 1}</span>
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: '1.75rem', fontWeight: 400, color: '#e8e4dc', marginBottom: '0.5rem' }}
                >
                  {person.name}
                </h3>
                <p style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4a574', marginBottom: '2rem' }}>
                  {person.role}
                </p>
                <p className="body-elegant" style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '2rem' }}>
                  {person.bio}
                </p>
                <div className="flex items-center gap-3" style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  <Phone size={14} style={{ color: '#c4a574' }} />
                  <span>{person.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA — Minimal & Powerful
          ============================================ */}
      <section className="relative z-10" style={{ padding: '20vh 0' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb orb-gold animate-float" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="rule" style={{ width: '60px' }} />
            <span className="label-tiny">Kontakt</span>
            <div className="rule" style={{ width: '60px' }} />
          </div>

          <h2 className="headline-section will-animate" data-animate="reveal-up" style={{ marginBottom: '2rem' }}>
            La oss prate
          </h2>

          <p className="body-elegant will-animate" data-animate="reveal-opacity" data-delay="0.2s" style={{ color: '#6b7280', maxWidth: '400px', margin: '0 auto 3rem' }}>
            Uforpliktende samtale om hvordan vi kan hjelpe din bedrift å vokse trygt.
          </p>

          <div className="will-animate flex flex-col sm:flex-row items-center justify-center gap-4" data-animate="reveal-up" data-delay="0.3s">
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
      <section id="kontakt" className="relative z-10" style={{ padding: '15vh 0', background: 'rgba(12, 18, 32, 0.4)' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left: Info */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-6 mb-8">
                <div className="rule-left" style={{ width: '40px' }} />
                <span className="label-tiny">Kontakt</span>
              </div>
              <h2 className="headline-sub will-animate" data-animate="reveal-up" style={{ marginBottom: '3rem' }}>
                Send oss en melding
              </h2>

              <div className="space-y-8 will-animate" data-animate="reveal-up" data-delay="0.2s">
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
              <form action="https://formspree.io/f/xnqevwpy" method="POST" className="space-y-8 will-animate" data-animate="reveal-up" data-delay="0.3s">
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
                    rows={3}
                    className="input-elegant"
                    placeholder="Fortell oss om din bedrift..."
                  />
                </div>
                <button type="submit" className="btn-elegant" style={{ marginTop: '2rem' }}>
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
          FOOTER — Ultra Minimal
          ============================================ */}
      <footer className="relative z-10" style={{ padding: '4rem 0', borderTop: '1px solid rgba(196, 165, 116, 0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
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
                }}
              >
                <span className="font-display text-sm" style={{ color: '#c4a574' }}>GJ</span>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Gyllstrøm & Johansen AS</p>
                <p style={{ fontSize: '0.625rem', color: 'rgba(107, 114, 128, 0.4)', letterSpacing: '0.1em' }}>Statsautoriserte Revisorer</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
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
