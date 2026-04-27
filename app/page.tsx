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
  Building2,
  ArrowUpRight
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setIsMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { id: 'hjem', label: 'Hjem' },
    { id: 'tjenester', label: 'Tjenester' },
    { id: 'om-oss', label: 'Om oss' },
    { id: 'kontakt', label: 'Kontakt' },
  ]

  return (
    <main className="min-h-screen bg-[#080c14] text-slate-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollTo('hjem')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center bg-slate-900/50">
                <span className="text-[#c9a96e] font-serif font-bold text-lg tracking-tight">GJ</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-serif text-sm text-slate-200 tracking-wide">Gyllstrøm & Johansen</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Statsautoriserte Revisorer</p>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-slate-100 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-300">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#080c14]/95 backdrop-blur-md border-t border-slate-800/50">
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hjem" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1120] via-[#080c14] to-[#080c14]" />
        
        {/* Subtle ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 border border-slate-800 rounded-full px-4 py-2">
              <Shield className="w-3 h-3 text-[#c9a96e]" />
              Godkjent av Finanstilsynet
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium text-slate-100 leading-[0.9] tracking-tight mb-8 animate-fade-in animation-delay-200">
            Gyllstrøm<br />
            <span className="text-[#c9a96e]">&</span> Johansen
          </h1>

          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto mb-4 leading-relaxed animate-fade-in animation-delay-400 font-light">
            Erfarne statsautoriserte revisorer i Drammen med personlig kontakt og høy integritet
          </p>

          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 mb-12 animate-fade-in animation-delay-400">
            Drammen · Siden 2016
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
            <button
              onClick={() => scrollTo('kontakt')}
              className="group bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center gap-3"
            >
              Kontakt oss
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('tjenester')}
              className="group border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-4 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3"
            >
              Våre tjenester
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-slate-800/50 bg-[#0a0e18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800/50">
            {[
              { value: '40+', label: 'Års erfaring' },
              { value: '2', label: 'Revisorer' },
              { value: '2016', label: 'Etablert' },
              { value: '100%', label: 'Personlig kontakt' },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-4 text-center">
                <p className="font-serif text-3xl md:text-4xl text-slate-200 mb-2">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">01 · Tjenester</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 mb-20 max-w-2xl leading-tight">
            Profesjonell revisjon og rådgivning
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="group relative bg-slate-900/30 border border-slate-800/50 hover:border-[#c9a96e]/30 p-10 md:p-12 transition-all duration-500">
              <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.2em] text-slate-600 group-hover:text-[#c9a96e] transition-colors">01</div>
              <div className="w-14 h-14 border border-slate-700 rounded-lg flex items-center justify-center mb-8 group-hover:border-[#c9a96e]/50 transition-colors">
                <FileText className="w-6 h-6 text-[#c9a96e]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-slate-100 mb-4">Revisjon og årsregnskap</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Vi påtar oss oppdrag knyttet til revisjon av årsregnskap, forenklet revisorkontroll og utarbeidelse av årsregnskap og skattemelding.
              </p>
              <ul className="space-y-3">
                {['Revisjon av årsregnskap', 'Forenklet revisorkontroll', 'Skattemelding med vedlegg', 'Attestasjonsoppdrag'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="w-1 h-1 bg-[#c9a96e] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-slate-900/30 border border-slate-800/50 hover:border-[#c9a96e]/30 p-10 md:p-12 transition-all duration-500">
              <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.2em] text-slate-600 group-hover:text-[#c9a96e] transition-colors">02</div>
              <div className="w-14 h-14 border border-slate-700 rounded-lg flex items-center justify-center mb-8 group-hover:border-[#c9a96e]/50 transition-colors">
                <TrendingUp className="w-6 h-6 text-[#c9a96e]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-slate-100 mb-4">Økonomi- og skatterådgivning</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Som erfarne statsautoriserte revisorer bidrar vi med økonomisk rådgivning, skatterådgivning og omstruktureringer.
              </p>
              <ul className="space-y-3">
                {['Skatteplanlegging', 'Omstruktureringer', 'Generasjonsskifter', 'Sparringspartner'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="w-1 h-1 bg-[#c9a96e] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split Section */}
      <section className="py-32 md:py-40 bg-[#0a0e18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#c9a96e]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">02 · Hvorfor oss</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-8 leading-tight">
                Personlig kontakt og høy integritet
              </h2>
              <p className="text-slate-500 leading-relaxed mb-12">
                Vår strategi er å tilby våre klienter personlig kontakt, være joviale, løsningsorienterte, men samtidig utføre vår profesjon med høy grad av integritet.
              </p>

              <div className="space-y-8">
                {[
                  { title: 'Direkte kontakt med partnerne', desc: 'Vi er direkte i kontakt med klienten og selv tar beslutningene fra bilagsnivå og helt frem til revisjonsberetningen.' },
                  { title: 'Lang erfaring', desc: 'Hege startet i bransjen i 1984 og Rune i 1996. Tilsammen har vi over 40 års erfaring.' },
                  { title: 'Lokal forankring', desc: 'Vi holder til nær Drammen sentrum og kjenner det lokale næringslivet godt.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-8 h-8 border border-slate-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] text-[#c9a96e]">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-medium mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#c9a96e]/5 rounded-2xl blur-2xl" />
              <div className="relative bg-slate-900/50 border border-slate-800/50 rounded-2xl p-10 md:p-14">
                <blockquote className="font-serif text-2xl md:text-3xl text-slate-200 leading-snug mb-10 italic">
                  "Å drive helt alene er krevende i vår bransje. Derfor er vi to og derfor bruker vi uttrykket <span className="text-[#c9a96e] not-italic">'En er som ingen – to er som ti'</span>."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c9a96e] rounded-full flex items-center justify-center">
                    <span className="text-[#080c14] font-bold text-sm">G&J</span>
                  </div>
                  <div>
                    <p className="text-slate-200 text-sm font-medium">Hege Gyllstrøm & Rune Johansen</p>
                    <p className="text-slate-600 text-xs">Partnere og statsautoriserte revisorer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">03 · Om oss</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 mb-16 max-w-3xl leading-tight">
            Vi bryr oss – derfor er vi
          </h2>

          <div className="max-w-3xl mb-20">
            <p className="text-slate-500 text-lg leading-relaxed">
              <span className="text-slate-300">Gyllstrøm & Johansen AS</span> startet opp 1. januar 2016 med Hege Gyllstrøm og Rune Johansen som partnere. Som en naturlig del av det å være revisorer er vi også økonomiske rådgivere og en betydelig del av vår jobb er å bidra med slike råd – uten at det går på bekostning av revisors uavhengighet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hege */}
            <div className="group bg-slate-900/20 border border-slate-800/50 hover:border-slate-700 transition-all duration-500">
              <div className="p-10 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 border border-slate-700 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl text-[#c9a96e]">HG</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Partner</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-100 mb-2">Hege Gyllstrøm</h3>
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.2em] mb-6">Statsautorisert Revisor</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Startet i bransjen i 1984. Lang erfaring innen revisjon og økonomisk rådgivning. Brenner for personlig kontakt og løsningsorientert arbeid.
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  <span>(+47) 908 21 756</span>
                </div>
              </div>
            </div>

            {/* Rune */}
            <div className="group bg-slate-900/20 border border-slate-800/50 hover:border-slate-700 transition-all duration-500">
              <div className="p-10 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 border border-slate-700 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl text-[#c9a96e]">RJ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Partner</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-100 mb-2">Rune Johansen</h3>
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.2em] mb-6">Statsautorisert Revisor & Siviløkonom</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Startet i bransjen i 1996. Statsautorisert revisor og siviløkonom. Spesialist innen skatterådgivning og omstruktureringer.
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  <span>(+47) 915 42 409</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-[#0a0e18] border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#c9a96e]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">Kontakt</span>
            <div className="w-12 h-px bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 mb-6 leading-tight">
            Klar for en samtale?
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto">
            La oss diskutere hvordan vi kan hjelpe din bedrift med revisjon og økonomisk rådgivning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+4791542409" className="group bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center gap-3">
              <Phone className="w-4 h-4" />
              Ring oss
            </a>
            <button onClick={() => scrollTo('kontakt')} className="group border border-slate-700 hover:border-slate-500 text-slate-300 px-10 py-4 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3">
              <Mail className="w-4 h-4" />
              Send melding
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#c9a96e]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">04 · Kontakt</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-8 leading-tight">
                Ta kontakt
              </h2>
              <p className="text-slate-500 leading-relaxed mb-14">
                Vi holder til nær Drammen sentrum. Ta gjerne kontakt for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift.
              </p>

              <div className="space-y-8">
                {[
                  { icon: MapPin, label: 'Adresse', value: 'Muusøya 1, 3023 Drammen' },
                  { icon: Phone, label: 'Telefon', value: '(+47) 915 42 409 / 908 21 756' },
                  { icon: Mail, label: 'E-post', value: 'rune@gjrevisjon.no' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#c9a96e]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-1">{item.label}</p>
                      <p className="text-slate-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/20 border border-slate-800/50 p-10 md:p-12">
              <h3 className="font-serif text-xl text-slate-100 mb-8">Send oss en melding</h3>
              <form action="https://formspree.io/f/xnqevwpy" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-3">Navn</label>
                  <input type="text" id="name" name="name" required
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 focus:border-[#c9a96e] outline-none transition-colors text-slate-300 text-sm placeholder-slate-700"
                    placeholder="Ditt navn" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-3">E-post</label>
                  <input type="email" id="email" name="email" required
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 focus:border-[#c9a96e] outline-none transition-colors text-slate-300 text-sm placeholder-slate-700"
                    placeholder="din@epost.no" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-3">Telefon</label>
                  <input type="tel" id="phone" name="phone"
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 focus:border-[#c9a96e] outline-none transition-colors text-slate-300 text-sm placeholder-slate-700"
                    placeholder="(+47) 000 00 000" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-3">Melding</label>
                  <textarea id="message" name="message" required rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 focus:border-[#c9a96e] outline-none transition-colors text-slate-300 text-sm resize-none placeholder-slate-700"
                    placeholder="Fortell oss om ditt behov..." />
                </div>
                <button type="submit"
                  className="w-full bg-[#c9a96e] hover:bg-[#b8965e] text-[#080c14] py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  Send melding
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080c14] border-t border-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-slate-800 rounded flex items-center justify-center">
                <span className="text-[#c9a96e] font-serif font-bold text-xs">GJ</span>
              </div>
              <div>
                <p className="text-xs text-slate-400">Gyllstrøm & Johansen AS</p>
                <p className="text-[10px] text-slate-600">Statsautoriserte Revisorer</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-slate-300 transition-colors">
                  {link.label}
                </button>
              ))}
              <a href="/personvern" className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-slate-300 transition-colors">
                Personvern
              </a>
            </div>

            <p className="text-[10px] text-slate-700 tracking-wide">
              © {new Date().getFullYear()} Alle rettigheter reservert
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
