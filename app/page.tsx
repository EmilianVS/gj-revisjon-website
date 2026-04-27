'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { Phone, Mail, MapPin, ArrowUpRight, ArrowDownRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Smooth scroll wrapper
function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as any)
    }
  }, [])

  return lenisRef
}

// Custom Cursor
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    let dotX = 0, dotY = 0
    let isHovering = false

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnterLink = () => {
      isHovering = true
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
      gsap.to(cursorDot, { scale: 0, duration: 0.3, ease: 'power2.out' })
    }

    const onMouseLeaveLink = () => {
      isHovering = false
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', onMouseMove)

    const links = document.querySelectorAll('a, button, [data-cursor-hover]')
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      dotX += (mouseX - dotX) * 0.35
      dotY += (mouseY - dotY) * 0.35

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`

      requestAnimationFrame(animate)
    }

    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink)
        link.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#c9a96e]/60 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#c9a96e] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}

// Grain overlay
function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
      }}
    />
  )
}

// Magnetic button
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
    }

    const onMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <button ref={ref} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

// Text reveal component
function TextReveal({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const chars = el.querySelectorAll('.char')

    gsap.fromTo(chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        stagger: 0.02,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, [delay])

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      {children.split('').map((char, i) => (
        <span key={i} className="char inline-block" style={{ transform: 'translateY(100%)', opacity: 0 }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

// Split text line reveal
function LineReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(el,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, [delay])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

// Parallax wrapper
function Parallax({ children, speed = 0.5, className }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      y: () => speed * 200,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, [speed])

  return <div ref={ref} className={className}>{children}</div>
}

// Horizontal scroll section for services
function HorizontalServices() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const scroll = scrollRef.current
    if (!container || !scroll) return

    const scrollWidth = scroll.scrollWidth - window.innerWidth

    gsap.to(scroll, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === container) t.kill()
      })
    }
  }, [])

  const services = [
    {
      num: '01',
      title: 'Revisjon',
      subtitle: 'Årsregnskap',
      desc: 'Revisjon av årsregnskap, forenklet revisorkontroll og attestasjonsoppdrag med høyest standard.',
      tags: ['Årsregnskap', 'Revisorkontroll', 'Attestasjon']
    },
    {
      num: '02',
      title: 'Skatt',
      subtitle: 'Rådgivning',
      desc: 'Skatteplanlegging, omstruktureringer og generasjonsskifter for bedrifter og eiere.',
      tags: ['Skatteplanlegging', 'Omstrukturering', 'Generasjonsskifter']
    },
    {
      num: '03',
      title: 'Økonomi',
      subtitle: 'Strategi',
      desc: 'Økonomisk rådgivning og sparring for ledelse og eiere i alle faser.',
      tags: ['Rådgivning', 'Sparring', 'Strategi']
    },
    {
      num: '04',
      title: 'Regnskap',
      subtitle: 'Årsoppgjør',
      desc: 'Utarbeidelse av årsregnskap, skattemelding med vedlegg og løpende bokføring.',
      tags: ['Årsregnskap', 'Skattemelding', 'Bokføring']
    },
  ]

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-[#080c14]">
      <div className="absolute top-8 left-8 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Tjenester</span>
      </div>
      <div ref={scrollRef} className="flex h-full items-center gap-0" style={{ width: 'fit-content' }}>
        <div className="w-screen h-full flex items-center justify-center px-8 md:px-20">
          <div>
            <LineReveal>
              <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-slate-100 leading-none tracking-tight">
                Hva vi<br />gjør
              </h2>
            </LineReveal>
            <LineReveal delay={0.2}>
              <p className="mt-8 text-slate-500 text-sm max-w-sm leading-relaxed">
                Vi tilbyr et komplett spekter av revisjons- og rådgivningstjenester for bedrifter som krever det beste.
              </p>
            </LineReveal>
          </div>
        </div>
        {services.map((service, i) => (
          <div
            key={i}
            className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[70vh] border-l border-slate-800/50 flex flex-col justify-between p-8 md:p-12 group hover:bg-slate-900/20 transition-colors duration-700"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e] block mb-6">{service.num}</span>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 leading-none mb-2">
                {service.title}
              </h3>
              <p className="font-serif text-2xl md:text-3xl text-slate-600 italic">{service.subtitle}</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] uppercase tracking-[0.2em] text-slate-600 border border-slate-800 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  useSmoothScroll()

  const heroRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero entrance animation
    const tl = gsap.timeline()

    tl.fromTo('.hero-line',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1.8, stagger: 0.15, ease: 'power4.out', delay: 0.3 }
    )
    .fromTo('.hero-sub',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      '-=1'
    )
    .fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )

    // Nav show on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'bottom top+=100',
      onEnter: () => gsap.to(navRef.current, { y: 0, duration: 0.6, ease: 'power3.out' }),
      onLeaveBack: () => gsap.to(navRef.current, { y: -100, duration: 0.6, ease: 'power3.out' }),
    })

    // Hero parallax
    gsap.to(heroTextRef.current, {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    // About section
    gsap.fromTo(aboutRef.current?.querySelectorAll('.about-reveal') || [],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    )

    // Quote parallax
    gsap.fromTo(quoteRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    )

    // Team cards
    gsap.fromTo(teamRef.current?.querySelectorAll('.team-card') || [],
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    )

    // Contact
    gsap.fromTo(contactRef.current?.querySelectorAll('.contact-reveal') || [],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#080c14] text-slate-300 cursor-none md:cursor-none">
      <CustomCursor />
      <GrainOverlay />

      {/* Navigation */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#080c14]/80 backdrop-blur-xl border-b border-slate-800/30"
        style={{ transform: 'translateY(-100px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-slate-400 hover:text-[#c9a96e] transition-colors duration-300">
              Gyllstrøm & Johansen
            </a>
            <div className="hidden md:flex items-center gap-10">
              {['Tjenester', 'Om oss', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-slate-200 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-end overflow-hidden pb-20 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#080c14] to-[#080c14]" />
        
        {/* Animated background shapes */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/20 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-700/30 to-transparent rounded-full blur-[80px]" />
        </div>

        <div ref={heroTextRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="mb-8 md:mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 hero-sub" style={{ opacity: 0 }}>
              Statsautoriserte Revisorer · Drammen · Siden 2016
            </span>
          </div>

          <h1 className="font-serif text-[13vw] md:text-[11vw] lg:text-[9vw] text-slate-100 leading-[0.85] tracking-tight">
            <span className="block overflow-hidden">
              <span className="hero-line block" style={{ opacity: 0 }}>Gyllstrøm</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block" style={{ opacity: 0 }}>& <span className="text-[#c9a96e]">Johansen</span></span>
            </span>
          </h1>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed hero-sub" style={{ opacity: 0 }}>
              Erfarne statsautoriserte revisorer som leverer personlig kontakt, høy integritet og resultater som betyr noe.
            </p>

            <div className="flex items-center gap-6 hero-cta" style={{ opacity: 0 }}>
              <MagneticButton
                className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#080c14] bg-[#c9a96e] hover:bg-[#b8965e] px-8 py-4 transition-colors duration-300"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kontakt oss
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
              <a
                href="#tjenester"
                className="text-[11px] uppercase tracking-[0.2em] text-slate-500 hover:text-slate-300 transition-colors duration-300 flex items-center gap-2"
              >
                Se mer
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-700 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-700 to-transparent" />
        </div>
      </section>

      {/* Horizontal Services */}
      <div id="tjenester">
        <HorizontalServices />
      </div>

      {/* Philosophy / Quote Section */}
      <section className="relative py-40 md:py-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] via-[#0a0e18] to-[#080c14]" />
        
        <div ref={quoteRef} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-700 [writing-mode:vertical-lr]">Filosofi</span>
            </div>
            <div className="md:col-span-11">
              <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-slate-200 leading-snug md:leading-tight">
                "Å drive helt alene er krevende i vår bransje. Derfor er vi to — og derfor bruker vi uttrykket{' '}
                <span className="text-[#c9a96e] italic">'En er som ingen, to er som ti'</span>."
              </blockquote>
              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-px bg-slate-700" />
                <div>
                  <p className="text-sm text-slate-300">Hege Gyllstrøm & Rune Johansen</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mt-1">Partnere og statsautoriserte revisorer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" ref={aboutRef} className="relative py-40 md:py-60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <div className="about-reveal" style={{ opacity: 0 }}>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e] block mb-6">Om oss</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 leading-tight">
                  Vi bryr oss — derfor er vi
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 md:pt-20">
              <div className="about-reveal space-y-8" style={{ opacity: 0 }}>
                <p className="text-slate-400 text-lg leading-relaxed">
                  <span className="text-slate-200">Gyllstrøm & Johansen AS</span> startet opp 1. januar 2016. Som en naturlig del av det å være revisorer er vi også økonomiske rådgivere — uten at det går på bekostning av revisors uavhengighet.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Vår strategi er å tilby våre klienter personlig kontakt, være joviale, løsningsorienterte, men samtidig utføre vår profesjon med høy grad av integritet. Vi er direkte i kontakt med klienten og tar beslutningene fra bilagsnivå og helt frem til revisjonsberetningen.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <span className="font-serif text-4xl text-slate-200">40+</span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mt-2">Års erfaring</p>
                  </div>
                  <div>
                    <span className="font-serif text-4xl text-slate-200">2016</span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mt-2">Etablert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="relative py-40 md:py-60 bg-[#0a0e18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-20 md:mb-32">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e] block mb-6">Teamet</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-100 leading-tight">
                Møt partnerne
              </h2>
            </div>
            <div className="hidden md:block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-700">02</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-800/30">
            {[
              {
                initials: 'HG',
                name: 'Hege Gyllstrøm',
                role: 'Statsautorisert Revisor',
                bio: 'Startet i bransjen i 1984. Lang erfaring innen revisjon og økonomisk rådgivning. Brenner for personlig kontakt og løsningsorientert arbeid.',
                phone: '(+47) 908 21 756'
              },
              {
                initials: 'RJ',
                name: 'Rune Johansen',
                role: 'Statsautorisert Revisor & Siviløkonom',
                bio: 'Startet i bransjen i 1996. Spesialist innen skatterådgivning og omstruktureringer.',
                phone: '(+47) 915 42 409'
              }
            ].map((person, i) => (
              <div
                key={i}
                className="team-card group bg-[#0a0e18] p-8 md:p-12 lg:p-16 hover:bg-[#0d1220] transition-colors duration-700"
                style={{ opacity: 0 }}
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="w-20 h-20 md:w-24 md:h-24 border border-slate-800 group-hover:border-[#c9a96e]/30 transition-colors duration-700 rounded-full flex items-center justify-center">
                    <span className="font-serif text-2xl md:text-3xl text-[#c9a96e]">{person.initials}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-700">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-slate-100 mb-2">{person.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] mb-8">{person.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{person.bio}</p>
                <div className="flex items-center gap-2 text-slate-600 text-sm group-hover:text-slate-400 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{person.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-40 md:py-60 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c14] via-[#0c1020] to-[#080c14]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="contact-reveal" style={{ opacity: 0 }}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 block mb-8">Kontakt</span>
          </div>
          <div className="contact-reveal" style={{ opacity: 0 }}>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-100 leading-[0.9] mb-12">
              La oss<br />prate
            </h2>
          </div>
          <div className="contact-reveal" style={{ opacity: 0 }}>
            <p className="text-slate-500 text-lg max-w-md mx-auto mb-16">
              Uforpliktende samtale om hvordan vi kan hjelpe din bedrift.
            </p>
          </div>
          <div className="contact-reveal flex flex-col sm:flex-row items-center justify-center gap-6" style={{ opacity: 0 }}>
            <MagneticButton
              className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#080c14] bg-[#c9a96e] hover:bg-[#b8965e] px-10 py-5 transition-colors duration-300"
              onClick={() => window.location.href = 'tel:+4791542409'}
            >
              <Phone className="w-4 h-4" />
              Ring oss
            </MagneticButton>
            <MagneticButton
              className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-300 border border-slate-700 hover:border-slate-500 px-10 py-5 transition-colors duration-300"
              onClick={() => document.getElementById('kontakt-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4" />
              Send melding
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt-form" className="relative py-40 md:py-60 bg-[#0a0e18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e] block mb-6">Kontakt</span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-100 leading-tight mb-12">
                Send oss en melding
              </h2>
              <div className="space-y-8">
                {[
                  { label: 'Adresse', value: 'Muusøya 1, 3023 Drammen', icon: MapPin },
                  { label: 'Telefon', value: '(+47) 915 42 409 / 908 21 756', icon: Phone },
                  { label: 'E-post', value: 'rune@gjrevisjon.no', icon: Mail },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-700 mb-2">{item.label}</p>
                    <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                      <item.icon className="w-4 h-4 text-[#c9a96e]" />
                      <span className="text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-7">
              <form action="https://formspree.io/f/xnqevwpy" method="POST" className="space-y-8">
                {[
                  { id: 'name', label: 'Navn', type: 'text', placeholder: 'Ditt navn' },
                  { id: 'email', label: 'E-post', type: 'email', placeholder: 'din@epost.no' },
                  { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '(+47) 000 00 000' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-4">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.id !== 'phone'}
                      className="w-full bg-transparent border-b border-slate-800 focus:border-[#c9a96e] outline-none py-4 text-slate-200 text-lg placeholder-slate-800 transition-colors duration-500"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-4">
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-800 focus:border-[#c9a96e] outline-none py-4 text-slate-200 text-lg placeholder-slate-800 resize-none transition-colors duration-500"
                    placeholder="Fortell oss om ditt behov..."
                  />
                </div>
                <MagneticButton
                  className="mt-8 text-[11px] uppercase tracking-[0.2em] text-[#080c14] bg-[#c9a96e] hover:bg-[#b8965e] px-12 py-5 transition-colors duration-300"
                >
                  Send melding
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg text-[#c9a96e]">GJ</span>
              <div className="w-px h-6 bg-slate-800" />
              <div>
                <p className="text-xs text-slate-400">Gyllstrøm & Johansen AS</p>
                <p className="text-[10px] text-slate-700 tracking-wide">Statsautoriserte Revisorer</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              {['Tjenester', 'Om oss', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[10px] uppercase tracking-[0.2em] text-slate-700 hover:text-slate-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="/personvern" className="text-[10px] uppercase tracking-[0.2em] text-slate-700 hover:text-slate-400 transition-colors">
                Personvern
              </a>
            </div>
            <p className="text-[10px] text-slate-800 tracking-wide">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
