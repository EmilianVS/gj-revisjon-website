import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personvernerklæring | Gyllstrøm & Johansen AS',
  description: 'Personvernerklæring for Gyllstrøm & Johansen AS. Informasjon om hvordan vi samler inn og bruker personopplysninger.',
}

export default function Personvern() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-400">
      <header className="bg-[#0a0e18] border-b border-slate-800/50 py-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#c9a96e] transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til forsiden
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">Personvern</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-slate-100">Personvernerklæring</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <p className="text-slate-500 mb-10 leading-relaxed">
          Denne personvernerklæringen forteller hvordan Gyllstrøm & Johansen AS samler inn og bruker personopplysninger. Målet er å gi deg overordnet informasjon om vår behandling av personopplysninger.
        </p>

        <div className="bg-slate-900/30 border border-slate-800/50 p-8 mb-12">
          <h3 className="font-serif text-lg text-slate-200 mb-4">Kontakt oss om personvern</h3>
          <p className="text-slate-500 text-sm mb-6">
            Henvendelse om vår behandling av personopplysninger kan rettes til vår personvernansvarlig:
          </p>
          <div className="space-y-3 text-sm">
            <p className="text-slate-300 font-medium">Gyllstrøm & Johansen AS</p>
            <p className="flex items-center gap-2 text-slate-500">
              <MapPin className="w-4 h-4 text-[#c9a96e]" />
              Muusøya 1, 3023 Drammen
            </p>
            <p className="flex items-center gap-2 text-slate-500">
              <Mail className="w-4 h-4 text-[#c9a96e]" />
              <a href="mailto:rune@gjrevisjon.no" className="hover:text-[#c9a96e] transition-colors">rune@gjrevisjon.no</a>
            </p>
          </div>
          <p className="text-slate-700 text-xs mt-6">
            Dato for siste endring: 16. oktober 2018
          </p>
        </div>

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
          <div key={i} className="mb-10">
            <h2 className="font-serif text-xl text-slate-200 mb-4">{section.title}</h2>
            <div className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-[#080c14] border-t border-slate-800/50 py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-xs tracking-wide">
            © {new Date().getFullYear()} Gyllstrøm & Johansen AS
          </p>
          <Link href="/" className="text-slate-600 hover:text-[#c9a96e] transition-colors text-sm">
            Tilbake til forsiden
          </Link>
        </div>
      </footer>
    </main>
  )
}
