import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personvernerklæring | Gyllstrøm & Johansen AS',
  description: 'Personvernerklæring for Gyllstrøm & Johansen AS. Informasjon om hvordan vi samler inn og bruker personopplysninger.',
}

export default function Personvern() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-primary-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-accent-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til forsiden
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Personvern</h1>
          <p className="mt-2 text-primary-300">Vår personvernerklæring</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-primary max-w-none">
          <p className="text-lg text-primary-600 mb-8 leading-relaxed">
            Denne personvernerklæringen forteller hvordan Gyllstrøm & Johansen AS samler inn og bruker personopplysninger. Målet er å gi deg overordnet informasjon om vår behandling av personopplysninger.
          </p>

          <p className="text-primary-600 mb-8">
            Her får du nærmere informasjon om hvilke personopplysninger vi typisk samler inn, hva vi bruker opplysningene til og hvordan vi behandler dem. Du får også informasjon om hvilke rettigheter du har dersom vi har personopplysninger om deg.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 mb-10 border border-primary-100">
            <h3 className="font-semibold text-primary-900 mb-3">Kontakt oss om personvern</h3>
            <p className="text-primary-600 text-sm mb-4">
              Henvendelse om vår behandling av personopplysninger kan rettes til vår personvernansvarlig:
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-primary-700">
                <span className="font-semibold">Gyllstrøm & Johansen AS</span>
              </p>
              <p className="flex items-center gap-2 text-primary-600">
                <MapPin className="w-4 h-4" />
                Muusøya 1, 3023 Drammen
              </p>
              <p className="flex items-center gap-2 text-primary-600">
                <Mail className="w-4 h-4" />
                <a href="mailto:rune@gjrevisjon.no" className="hover:text-accent-600 transition-colors">rune@gjrevisjon.no</a>
              </p>
            </div>
            <p className="text-primary-500 text-xs mt-3">
              Dato for siste endring: 16. oktober 2018
            </p>
          </div>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">1. Lovgivning og bransjenormer</h2>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Gyllstrøm & Johansen AS har offentlig godkjenning fra Finanstilsynet etter revisorloven. Finanstilsynet fører tilsyn med at vi driver virksomheten vår i samsvar med lovgivningen vi er underlagt.
          </p>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Det er utarbeidet en bransjenorm for behandling av personopplysninger i revisjonsbransjen. Det er også utarbeidet en atferdsnorm for behandling av personopplysninger i regnskapsførerbransjen. Vi følger disse bransjenormene i vår virksomhet.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">2. Når samler vi inn personopplysninger?</h2>
          <p className="text-primary-600 mb-4">Vi samler inn personopplysninger i forbindelse med:</p>
          <ul className="list-disc list-inside space-y-2 text-primary-600 mb-6">
            <li>Utførelse av våre oppdrag, inkludert revisjonstjenester (revisjon av årsregnskap, forenklet revisorkontroll av regnskaper, andre attestasjonsoppdrag/revisorbekreftelser og avtalte kontrollhandlinger)</li>
            <li>Kundekontroll og rapportering av mistanke etter hvitvaskingsloven</li>
            <li>Kundekontakt og markedsføring</li>
            <li>Ansettelser og ansatte</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">3. Behandlingsansvarlig og databehandler</h2>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Vi er behandlingsansvarlig etter personvernreglene når vi behandler personopplysninger i forbindelse med revisjonstjenester, utarbeidelse av årsregnskap og skattemelding for egne revisjonsklienter og attestasjonstjenester.
          </p>
          <p className="text-primary-600 mb-6 leading-relaxed">
            I enkelte tilfeller er vi databehandler for vår kunde. Det vil si at vi behandler dine personopplysninger på vegne av vår oppdragsgiver (behandlingsansvarlig). Dette gjelder for regnskapsføreroppdrag og rådgivningsoppdrag mv.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">4. Dine rettigheter</h2>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Du kan utøve dine rettigheter ved å kontakte vår personvernansvarlig. Send en e-post til rune@gjrevisjon.no. Du skal få svar uten ugrunnet opphold, og senest innen 30 dager.
          </p>

          <h3 className="font-semibold text-primary-900 mt-6 mb-3">4.1 Innsyn</h3>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Enhver som ber om det har krav på å få vite hva slags behandling av personopplysninger vi foretar, samt grunnleggende informasjon om behandlingen. Vi er underlagt lovbestemt taushetsplikt som gjør at du ikke kan få innsyn i opplysninger vi behandler om deg som også gjelder andre.
          </p>

          <h3 className="font-semibold text-primary-900 mt-6 mb-3">4.2 Sletting og retting</h3>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Du har rett til å få slettet opplysninger om deg selv som ikke lenger er nødvendige for å følge opp oppdraget forsvarlig og som vi ikke har lovbestemt plikt til å oppbevare.
          </p>

          <h3 className="font-semibold text-primary-900 mt-6 mb-3">4.3 Klage</h3>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Ta først kontakt med vår personvernansvarlig hvis du mener vi ikke overholder personvernreglene. Du kan også klage over vår behandling av personopplysninger til Datatilsynet.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">5. Personopplysninger vi samler inn</h2>
          
          <h3 className="font-semibold text-primary-900 mt-6 mb-3">5.1 Oppdrag etter revisorloven</h3>
          <p className="text-primary-600 mb-4">Revisjonsdokumentasjonen inneholder personopplysninger som:</p>
          <ul className="list-disc list-inside space-y-2 text-primary-600 mb-6">
            <li>Navn og stillingsbetegnelse på personer vi har innhentet opplysninger fra</li>
            <li>Opplysninger om lønns- og arbeidsforhold til ansatte hos selskapet vi reviderer</li>
            <li>Vurderinger av kompetansen og integriteten til personer som har ansvar for regnskapet</li>
          </ul>

          <h3 className="font-semibold text-primary-900 mt-6 mb-3">5.2 Plikter etter hvitvaskingsloven</h3>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Gjennom hvitvaskingsloven er vi pålagt å utføre kundekontroll av alle våre kunder. Vi skal registrere opplysninger om identiteten til den som handler på vegne av kunden og reelle rettighetshavere, inkludert kopi av legitimasjonsdokumenter.
          </p>

          <h3 className="font-semibold text-primary-900 mt-6 mb-3">5.3 Kundekontakt og markedsføring</h3>
          <p className="text-primary-600 mb-6 leading-relaxed">
            I vår kontakt med eksisterende, tidligere og potensielle kunder, registrerer vi kontaktopplysninger om kontaktpersoner slik som navn, e-postadresse, telefonnummer og stillingsbenevnelse.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">6. Informasjonssikkerhet og oppbevaring</h2>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Vi har rutiner for å sikre konfidensialitet og integritet i våre kunders data. Sikringsmekanismene inkluderer rolle- og tilgangsstyring og krav til innebygd personvern i våre IT-systemer.
          </p>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Vi er underlagt taushetsplikt etter revisorloven om alt vi blir kjent med i vår virksomhet. Etter revisorloven skal vi oppbevare dokumentasjonen vår på en ordnet og betryggende måte i minst ti år.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">7. Overføring av personopplysninger</h2>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Vi oppbevarer våre kundedata, inkludert alle personopplysninger, i Norge eller andre EØS-land. Vi benytter kun databehandlere som oppbevarer opplysningene i Norge eller andre EØS-land.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4">8. Vår bruk av databehandlere</h2>
          <p className="text-primary-600 mb-6 leading-relaxed">
            Vi bruker tjenesteleverandører til å drifte våre informasjonssystemer og lagre data for oss. Vi har databehandleravtaler med alle tjenesteleverandører som behandler personopplysninger på vegne av oss.
          </p>
        </div>
      </div>

      <footer className="bg-primary-900 text-white py-8 border-t border-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-400 text-sm">
            © {new Date().getFullYear()} Gyllstrøm & Johansen AS
          </p>
          <Link href="/" className="text-primary-300 hover:text-accent-400 transition-colors text-sm">
            Tilbake til forsiden
          </Link>
        </div>
      </footer>
    </main>
  )
}