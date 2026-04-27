import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personvernerklæring | Gyllstrøm & Johansen AS',
  description: 'Personvernerklæring for Gyllstrøm & Johansen AS. Informasjon om hvordan vi samler inn og bruker personopplysninger.',
}

export default function Personvern() {
  return (
    <div style={{ background: '#060a14', minHeight: '100vh' }}>
      {/* Floating orb — subtle */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb orb-gold animate-float" style={{ width: '400px', height: '400px', top: '-5%', right: '-5%', opacity: 0.5 }} />
      </div>

      {/* Header */}
      <header className="relative z-10" style={{ borderBottom: '1px solid rgba(196, 165, 116, 0.06)' }}>
        <div className="max-w-[900px] mx-auto px-8 lg:px-16" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <Link
            href="/"
            className="link-hover inline-flex items-center gap-3 mb-12"
            style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
          >
            <ArrowLeft size={14} />
            Tilbake til forsiden
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="rule-left" style={{ width: '40px' }} />
            <span className="label-tiny">Personvern</span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#e8e4dc',
              letterSpacing: '-0.02em',
            }}
          >
            Personvernerklæring
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="relative z-10" style={{ padding: '6rem 0' }}>
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <p className="body-elegant" style={{ color: '#6b7280', marginBottom: '4rem', maxWidth: '640px' }}>
            Denne personvernerklæringen forteller hvordan Gyllstrøm & Johansen AS samler inn og bruker personopplysninger.
            Målet er å gi deg overordnet informasjon om vår behandling av personopplysninger.
          </p>

          {/* Contact card */}
          <div
            style={{
              background: 'rgba(12, 18, 32, 0.6)',
              border: '1px solid rgba(196, 165, 116, 0.06)',
              borderRadius: '24px',
              padding: '2.5rem',
              marginBottom: '4rem',
            }}
          >
            <h2
              className="font-display"
              style={{ fontSize: '1.25rem', fontWeight: 400, color: '#e8e4dc', marginBottom: '1rem' }}
            >
              Kontakt oss om personvern
            </h2>
            <p className="body-elegant" style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Henvendelse om vår behandling av personopplysninger kan rettes til vår personvernansvarlig:
            </p>
            <div className="space-y-3" style={{ fontSize: '0.875rem' }}>
              <p style={{ color: '#9ca3af', fontWeight: 300 }}>Gyllstrøm & Johansen AS</p>
              <p className="flex items-center gap-3" style={{ color: '#6b7280' }}>
                <MapPin size={14} style={{ color: '#c4a574', flexShrink: 0 }} />
                Muusøya 1, 3023 Drammen
              </p>
              <p className="flex items-center gap-3" style={{ color: '#6b7280' }}>
                <Mail size={14} style={{ color: '#c4a574', flexShrink: 0 }} />
                <a href="mailto:rune@gjrevisjon.no" className="link-hover">rune@gjrevisjon.no</a>
              </p>
            </div>
            <p style={{ fontSize: '0.625rem', color: 'rgba(107, 114, 128, 0.4)', marginTop: '1.5rem', letterSpacing: '0.1em' }}>
              Dato for siste endring: 16. oktober 2018
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: '1. Lovgivning og bransjenormer',
              content: 'Gyllstrøm & Johansen AS har offentlig godkjenning fra Finanstilsynet etter revisorloven. Finanstilsynet fører tilsyn med at vi driver virksomheten vår i samsvar med lovgivningen vi er underlagt.\n\nDet er utarbeidet en bransjenorm for behandling av personopplysninger i revisjonsbransjen. Vi følger disse bransjenormene i vår virksomhet.'
            },
            {
              title: '2. Når samler vi inn personopplysninger?',
              content: 'Vi samler inn personopplysninger i forbindelse med:\n\n• Utførelse av våre oppdrag, inkludert revisjonstjenester\n• Kundekontroll og rapportering av mistanke etter hvitvaskingsloven\n• Kundekontakt og markedsføring\n• Ansettelser og ansatte'
            },
            {
              title: '3. Behandlingsansvarlig og databehandler',
              content: 'Vi er behandlingsansvarlig etter personvernreglene når vi behandler personopplysninger i forbindelse med revisjonstjenester, utarbeidelse av årsregnskap og skattemelding for egne revisjonsklienter og attestasjonstjenester.\n\nI enkelte tilfeller er vi databehandler for vår kunde. Det vil si at vi behandler dine personopplysninger på vegne av vår oppdragsgiver (behandlingsansvarlig).'
            },
            {
              title: '4. Dine rettigheter',
              content: 'Du kan utøve dine rettigheter ved å kontakte vår personvernansvarlig. Send en e-post til rune@gjrevisjon.no. Du skal få svar uten ugrunnet opphold, og senest innen 30 dager.\n\nDu har rett til innsyn, sletting, retting og klage etter personvernreglene.'
            },
            {
              title: '5. Personopplysninger vi samler inn',
              content: 'Revisjonsdokumentasjonen inneholder personopplysninger som navn og stillingsbetegnelse på personer vi har innhentet opplysninger fra, opplysninger om lønns- og arbeidsforhold til ansatte hos selskapet vi reviderer, og vurderinger av kompetansen og integriteten til personer som har ansvar for regnskapet.\n\nGjennom hvitvaskingsloven er vi pålagt å utføre kundekontroll av alle våre kunder.'
            },
            {
              title: '6. Informasjonssikkerhet og oppbevaring',
              content: 'Vi har rutiner for å sikre konfidensialitet og integritet i våre kunders data. Sikringsmekanismene inkluderer rolle- og tilgangsstyring og krav til innebygd personvern i våre IT-systemer.\n\nVi er underlagt taushetsplikt etter revisorloven om alt vi blir kjent med i vår virksomhet. Etter revisorloven skal vi oppbevare dokumentasjonen vår på en ordnet og betryggende måte i minst ti år.'
            },
            {
              title: '7. Overføring av personopplysninger',
              content: 'Vi oppbevarer våre kundedata, inkludert alle personopplysninger, i Norge eller andre EØS-land. Vi benytter kun databehandlere som oppbevarer opplysningene i Norge eller andre EØS-land.'
            },
            {
              title: '8. Vår bruk av databehandlere',
              content: 'Vi bruker tjenesteleverandører til å drifte våre informasjonssystemer og lagre data for oss. Vi har databehandleravtaler med alle tjenesteleverandører som behandler personopplysninger på vegne av oss.'
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '3rem' }}>
              <h2
                className="font-display"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#e8e4dc',
                  marginBottom: '1rem',
                  lineHeight: 1.3,
                }}
              >
                {section.title}
              </h2>
              <div className="body-elegant" style={{ color: '#6b7280', fontSize: '0.875rem', whiteSpace: 'pre-line' }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10" style={{ padding: '3rem 0', borderTop: '1px solid rgba(196, 165, 116, 0.06)' }}>
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
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
          <Link href="/" className="link-hover" style={{ fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Tilbake til forsiden
          </Link>
          <p style={{ fontSize: '0.625rem', color: 'rgba(107, 114, 128, 0.3)', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
