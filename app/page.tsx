'use client'

import { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
  Shield,
  FileText,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['hjem', 'tjenester', 'om-oss', 'kontakt']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'hjem', label: 'Hjem' },
    { id: 'tjenester', label: 'Tjenester' },
    { id: 'om-oss', label: 'Om oss' },
    { id: 'kontakt', label: 'Kontakt' },
  ]

  return (
    <main className="min-h-screen bg-[#0a0e1a]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollTo('hjem')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                <span className="text-[#d4af37] font-serif font-bold text-lg">GJ</span>
              </div>
              <div className="hidden sm:block text-left">
                <p className={`font-serif font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? 'text-slate-100' : 'text-slate-100'
                }`}>
                  Gyllstrøm & Johansen
                </p>
                <p className={`text-xs transition-colors ${
                  isScrolled ? 'text-slate-400' : 'text-slate-400'
                }`}>
                  Statsautoriserte Revisorer
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-all relative ${
                    isScrolled
                      ? activeSection === link.id
                        ? 'text-slate-100'
                        : 'text-slate-400 hover:text-slate-200'
                      : activeSection === link.id
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full" />
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollTo('kontakt')}
                className="btn-primary bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0e1a] px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-[#d4af37]/20"
              >
                Kontakt oss
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-200' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-slate-800 mt-3">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800/50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('kontakt')}
                className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0e1a] px-5 py-3 rounded-lg text-sm font-semibold mt-3"
              >
                Kontakt oss
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hjem"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e293b]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHptLTQgNGg0djRoLTR6bS00LTRoNHY0aC00em0tNCA0aDR2NGgtNHptLTQgNGg0djRoLTR6bS00LTRoNHY0aC00em0tNCA0aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span className="text-slate-300 text-sm font-medium">Godkjent av Finanstilsynet</span>
            </div>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
            Gyllstrøm &<br />
            <span className="text-[#d4af37]">Johansen AS</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 text-lg sm:text-xl md:text-2xl text-slate-400 mb-4 font-light max-w-2xl mx-auto">
            Erfarne statsautoriserte revisorer med personlig kontakt og høy integritet
          </p>

          <p className="animate-fade-in-up animation-delay-400 text-slate-500 mb-10 max-w-xl mx-auto">
            Drammen · Siden 2016
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('kontakt')}
              className="btn-primary bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0e1a] px-8 py-4 rounded-xl text-base font-semibold shadow-xl shadow-[#d4af37]/20 flex items-center gap-2 group"
            >
              Få en uforpliktende samtale
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('tjenester')}
              className="bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 border border-slate-700 px-8 py-4 rounded-xl text-base font-medium transition-all flex items-center gap-2"
            >
              Se våre tjenester
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in animation-delay-600 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Clock, value: '40+', label: 'Års erfaring' },
              { icon: Award, value: '2', label: 'Statsautoriserte revisorer' },
              { icon: Building2, value: '2016', label: 'Etablert' },
              { icon: Users, value: '100%', label: 'Personlig kontakt' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 text-[#d4af37] mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-100">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Våre tjenester</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">
              Profesjonell revisjon og rådgivning
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av tjenester for å hjelpe din bedrift med å navigere i det komplekse regelverket
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group bg-slate-900/80 rounded-2xl p-8 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 border border-slate-800 hover:border-[#d4af37]/30">
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                Revisjon og årsregnskap
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Vi påtar oss oppdrag knyttet til revisjon av årsregnskap, forenklet revisorkontroll og ellers alt som hører inn under bekreftelse av økonomisk informasjon. Vi utarbeider også årsregnskap og skattemelding med vedlegg for våre klienter.
              </p>
              <ul className="space-y-3">
                {[
                  'Revisjon av årsregnskap',
                  'Forenklet revisorkontroll',
                  'Utarbeidelse av årsregnskap',
                  'Skattemelding med vedlegg',
                  'Attestasjonsoppdrag',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-900/80 rounded-2xl p-8 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 border border-slate-800 hover:border-[#d4af37]/30">
              <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100 mb-4">
                Økonomi- og skatterådgivning
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Som erfarne statsautoriserte revisorer har vi mye å bidra med hva gjelder økonomisk rådgivning og skatterådgivning; herunder omstruktureringer, generasjonsskifter og annet som naturlig hører innunder disse områdene.
              </p>
              <ul className="space-y-3">
                {[
                  'Skatteplanlegging',
                  'Omstruktureringer',
                  'Generasjonsskifter',
                  'Økonomisk rådgivning',
                  'Sparringspartner',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a0e1a] text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Hvorfor velge oss</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
                Personlig kontakt og høy integritet
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Vår strategi er å tilby våre klienter personlig kontakt, være joviale, løsningsorienterte, men samtidig utføre vår profesjon med høy grad av integritet.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Direkte kontakt med partnerne',
                    desc: 'Vi er direkte i kontakt med klienten og selv tar beslutningene fra bilagsnivå og helt frem til revisjonsberetningen.',
                  },
                  {
                    title: 'Lang erfaring',
                    desc: 'Hege startet i bransjen i 1984 og Rune i 1996. Tilsammen har vi over 40 års erfaring innen revisjon og økonomisk rådgivning.',
                  },
                  {
                    title: 'Lokal forankring',
                    desc: 'Vi holder til nær Drammen sentrum og kjenner det lokale næringslivet godt.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#d4af37]/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800">
                <blockquote className="text-xl sm:text-2xl font-serif italic text-slate-200 mb-6 leading-relaxed">
                  "Å drive helt alene er krevende i vår bransje. Derfor er vi to og derfor bruker vi uttrykket <span className="text-[#d4af37]">'En er som ingen – to er som ti'</span>."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-[#0a0e1a] font-bold">G&J</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">Hege Gyllstrøm & Rune Johansen</p>
                    <p className="text-slate-500 text-sm">Partnere og statsautoriserte revisorer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Om oss</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">
              Vi bryr oss – derfor er vi
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-slate-400 text-lg leading-relaxed text-center">
              <strong className="text-slate-200">Gyllstrøm & Johansen AS</strong> startet opp 1. januar 2016 med Hege Gyllstrøm og Rune Johansen som partnere. Som en naturlig del av det å være revisorer er vi også økonomiske rådgivere og en betydelig del av vår jobb er å bidra med slike råd – uten at det går på bekostning av revisors uavhengighet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Hege */}
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800">
              <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-[#d4af37]">HG</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-100 text-center mb-2">Hege Gyllstrøm</h3>
              <p className="text-[#d4af37] text-sm text-center font-medium mb-4">Partner · Statsautorisert Revisor</p>
              <p className="text-slate-400 text-center text-sm leading-relaxed">
                Startet i bransjen i 1984. Lang erfaring innen revisjon og økonomisk rådgivning. Brenner for personlig kontakt og løsningsorientert arbeid.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(+47) 908 21 756</span>
              </div>
            </div>

            {/* Rune */}
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800">
              <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-[#d4af37]">RJ</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-100 text-center mb-2">Rune Johansen</h3>
              <p className="text-[#d4af37] text-sm text-center font-medium mb-4">Partner · Statsautorisert Revisor & Siviløkonom</p>
              <p className="text-slate-400 text-center text-sm leading-relaxed">
                Startet i bransjen i 1996. Statsautorisert revisor og siviløkonom. Spesialist innen skatterådgivning og omstruktureringer.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(+47) 915 42 409</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Kontakt</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                Ta kontakt med oss
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Vi holder til nær Drammen sentrum. Ta gjerne kontakt for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Adresse</h4>
                    <p className="text-slate-400">Muusøya 1, 3023 Drammen</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Telefon</h4>
                    <p className="text-slate-400">(+47) 915 42 409 (Rune)</p>
                    <p className="text-slate-400">(+47) 908 21 756 (Hege)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">E-post</h4>
                    <a href="mailto:rune@gjrevisjon.no" className="text-slate-400 hover:text-[#d4af37] transition-colors">
                      rune@gjrevisjon.no
                    </a>
                    <br />
                    <a href="mailto:hege@gjrevisjon.no" className="text-slate-400 hover:text-[#d4af37] transition-colors">
                      hege@gjrevisjon.no
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-8 shadow-xl shadow-black/20 border border-slate-800">
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-6">Send oss en melding</h3>
              <form
                action="https://formspree.io/f/xnqevwpy"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Navn</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-slate-200 placeholder-slate-600"
                    placeholder="Ditt navn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">E-post</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-slate-200 placeholder-slate-600"
                    placeholder="din@epost.no"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-slate-200 placeholder-slate-600"
                    placeholder="(+47) 000 00 000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Melding</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-slate-200 resize-none placeholder-slate-600"
                    placeholder="Fortell oss om ditt behov..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0e1a] py-4 rounded-xl font-semibold shadow-lg shadow-[#d4af37]/20 transition-all"
                >
                  Send melding
                </button>
                <p className="text-xs text-slate-600 text-center">
                  Vi svarer normalt innen 24 timer
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Klar for en uforpliktende samtale?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            La oss diskutere hvordan vi kan hjelpe din bedrift med revisjon og økonomisk rådgivning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+4791542409"
              className="bg-[#d4af37] text-[#0a0e1a] px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#b8941f] transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ring oss nå
            </a>
            <button
              onClick={() => scrollTo('kontakt')}
              className="bg-slate-800 text-slate-200 border border-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send en melding
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e1a] text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <span className="text-[#d4af37] font-serif font-bold text-lg">GJ</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-lg text-slate-100">Gyllstrøm & Johansen</p>
                  <p className="text-slate-500 text-xs">Statsautoriserte Revisorer</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Erfarne statsautoriserte revisorer som tilbyr personlig kontakt, jovialitet og løsningsorientert arbeid med høy integritet.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Navigasjon</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-slate-500 hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="/personvern" className="text-slate-500 hover:text-[#d4af37] transition-colors text-sm">
                    Personvern
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Kontakt</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Muusøya 1, 3023 Drammen
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (+47) 915 42 409
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (+47) 908 21 756
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  rune@gjrevisjon.no
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Gyllstrøm & Johansen AS. Alle rettigheter reservert.
            </p>
            <a href="/personvern" className="text-slate-600 hover:text-[#d4af37] transition-colors text-sm">
              Personvernerklæring
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
