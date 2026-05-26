import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Gem,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { business } from "@/data/business";

const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  `Olá, vim pelo site da ${business.name} e gostaria de agendar uma avaliação.`
)}`;

const serviceIcons = [Smile, ShieldCheck, Gem, Sparkles];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      name: business.legalName,
      image: business.hero.image,
      url: business.sourceSite,
      telephone: business.phoneLabel,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Camilo Prates, 292",
        addressLocality: "Montes Claros",
        addressRegion: "MG",
        postalCode: "39400-002",
        addressCountry: "BR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -16.7259474,
        longitude: -43.8665199
      },
      openingHours: "Mo-Fr 08:00-18:00",
      areaServed: "Montes Claros MG",
      sameAs: [business.mapsUrl, business.sourceSite]
    },
    {
      "@type": "FAQPage",
      mainEntity: business.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ]
};

export default function Home() {
  return (
    <main
      style={
        {
          "--brand-bg": business.colors.bg,
          "--brand-surface": business.colors.surface,
          "--brand-text": business.colors.text,
          "--brand-muted": business.colors.muted,
          "--brand-primary": business.colors.primary,
          "--brand-secondary": business.colors.secondary,
          "--brand-accent": business.colors.accent,
          "--brand-soft": business.colors.soft
        } as CSSProperties
      }
      className="min-h-screen overflow-x-hidden bg-brand-bg text-brand-text"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-40 border-b border-black/10 bg-brand-bg/95 backdrop-blur">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
            <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-md bg-brand-primary">
              <Image
                src={business.logo}
                alt={`Logo da ${business.legalName}`}
                width={42}
                height={42}
                className="object-contain"
                priority
              />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold">{business.name}</span>
              <span className="block text-xs font-semibold text-brand-muted">
                Clínica Odontológica
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-brand-muted lg:flex">
            <a className="transition hover:text-brand-secondary" href="#tratamentos">
              Tratamentos
            </a>
            <a className="transition hover:text-brand-secondary" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-brand-secondary" href="#processo">
              Avaliação
            </a>
            <a className="transition hover:text-brand-secondary" href="#localizacao">
              Localização
            </a>
          </nav>

          <a
            href={whatsappUrl}
            className="gold-sheen inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-extrabold text-brand-primary shadow-[0_14px_30px_rgba(190,137,31,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(190,137,31,0.34)] sm:px-4"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Agendar</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="soft-noise relative overflow-hidden">
        <div className="absolute inset-0 tooth-grid opacity-70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-5 py-8 md:grid-cols-[1.02fr_0.98fr] md:px-10 md:py-10 lg:gap-14">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-brand-secondary/20 bg-white px-3 py-2 text-sm font-extrabold text-brand-primary shadow-sm">
              <Sparkles size={16} className="text-brand-secondary" />
              {business.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.03] sm:text-6xl">
              {business.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-extrabold leading-tight text-brand-primary sm:text-4xl">
              {business.hero.title}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-muted md:text-lg md:leading-8">
              {business.hero.subtitle}
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-primary px-3 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(31,26,19,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(31,26,19,0.28)] sm:min-h-14 sm:px-6 sm:py-4 sm:text-base"
              >
                <MessageCircle size={20} className="text-brand-accent" />
                Agendar avaliação
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-secondary/30 bg-white px-3 py-3 text-sm font-extrabold text-brand-primary transition hover:-translate-y-0.5 hover:bg-brand-accent sm:min-h-14 sm:px-6 sm:py-4 sm:text-base"
              >
                <Navigation size={20} className="text-brand-secondary" />
                Ver rota
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-brand-secondary/20 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="flex items-center gap-2 text-sm font-extrabold text-brand-primary">
                  <CalendarCheck size={18} className="text-brand-secondary" />
                  {business.foundedLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Presença divulgada no Centro de Montes Claros.
                </p>
              </div>
              <div className="rounded-md border border-brand-secondary/20 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="flex items-center gap-2 text-sm font-extrabold text-brand-primary">
                  <BadgeCheck size={18} className="text-brand-secondary" />
                  Estrutura com 4 consultórios
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Ambiente claro, acolhedor e alinhado à identidade dourada.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-white shadow-[0_28px_90px_rgba(31,26,19,0.2)] md:aspect-[4/3]">
              <Image
                src={business.hero.image}
                alt={`Interior da ${business.legalName} no Centro de Montes Claros`}
                fill
                priority
                sizes="(min-width: 768px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/45 to-transparent p-5 text-white sm:p-7">
                <p className="text-sm font-bold text-brand-accent">{business.shortAddress}</p>
                <p className="mt-2 max-w-md text-xl font-extrabold leading-tight sm:text-2xl">
                  Luz quente, acabamento claro e sensação de cuidado desde a chegada.
                </p>
              </div>
            </div>

            <div className="absolute -left-4 top-6 hidden rounded-lg bg-brand-primary p-4 text-white shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <Image
                  src={business.logo}
                  alt=""
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <p className="text-sm font-extrabold text-brand-accent">Sorridente</p>
                  <p className="text-xs font-bold text-white/70">clínica odontológica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-linen text-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-10">
          {business.stats.map((stat) => (
            <div key={stat.label} className="py-6 md:px-5">
              <p className="font-display text-3xl font-bold text-brand-accent">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection id="tratamentos" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-extrabold text-brand-secondary">Tratamentos</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Tratamentos apresentados como uma clínica grande faria: simples, visual e direto.
              </h2>
            </div>
            <p className="text-base leading-8 text-brand-muted md:text-lg">
              A estrutura por especialidade ajuda o paciente a entender o que procura e chamar a
              equipe com mais segurança.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {business.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? CheckCircle2;

              return (
                <article
                  key={service.title}
                  className="group rounded-lg border border-brand-secondary/20 bg-brand-bg p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-secondary/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(31,26,19,0.10)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-brand-primary text-brand-accent">
                      <Icon size={24} />
                    </span>
                    <span className="rounded-md bg-brand-accent px-3 py-1 text-xs font-extrabold text-brand-primary">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-brand-muted">{service.description}</p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.procedures.map((procedure) => (
                      <div key={procedure} className="flex items-center gap-2 text-sm font-bold">
                        <CheckCircle2 size={17} className="shrink-0 text-brand-secondary" />
                        {procedure}
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-primary transition group-hover:gap-3"
                  >
                    Perguntar sobre este tratamento
                    <ArrowRight size={17} className="text-brand-secondary" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="sobre" className="bg-brand-bg py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-10">
          <div>
            <p className="text-sm font-extrabold text-brand-secondary">Sobre a clínica</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Um visual mais próximo da experiência real da clínica.
            </h2>
            <p className="mt-5 leading-8 text-brand-muted">
              O interior divulgado combina tons claros, madeira e iluminação dourada. O site agora
              leva essa leitura para a página inteira, criando mais unidade com a marca.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {business.differentials.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <Sparkles className="text-brand-secondary" size={24} />
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-7 text-brand-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="processo" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="dark-linen rounded-lg p-8 text-white md:p-10">
              <Image
                src={business.logo}
                alt=""
                width={72}
                height={72}
                className="object-contain"
              />
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                Sua jornada para uma avaliação mais tranquila.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/75">
                Inspirado na lógica dos sites maiores: o paciente entende as etapas, vê os canais
                de contato e sabe exatamente onde a clínica fica.
              </p>
              <a
                href={whatsappUrl}
                className="gold-sheen mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold text-brand-primary transition hover:-translate-y-0.5"
              >
                <MessageCircle size={19} />
                Começar pelo WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              {business.patientJourney.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-lg border border-brand-secondary/20 bg-brand-bg p-5"
                >
                  <span className="gold-sheen flex size-11 shrink-0 items-center justify-center rounded-md text-base font-extrabold text-brand-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-brand-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="localizacao" className="bg-brand-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-stretch">
            <div>
              <p className="text-sm font-extrabold text-brand-secondary">Localização</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                No Centro de Montes Claros, com rota direta no mapa.
              </h2>
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${business.phoneLabel.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
                >
                  <Phone className="text-brand-secondary" size={24} />
                  <span>
                    <span className="block text-sm font-bold text-brand-muted">Telefone</span>
                    <span className="block text-lg font-extrabold">{business.phoneLabel}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
                >
                  <Mail className="text-brand-secondary" size={24} />
                  <span>
                    <span className="block text-sm font-bold text-brand-muted">E-mail</span>
                    <span className="block break-all text-lg font-extrabold">{business.email}</span>
                  </span>
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-lg bg-brand-primary p-5 text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  <Building2 className="text-brand-accent" size={24} />
                  <span>
                    <span className="block text-sm font-bold text-white/70">Endereço</span>
                    <span className="block text-lg font-extrabold">{business.address}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="min-h-[420px] overflow-hidden rounded-lg border border-brand-secondary/20 bg-white shadow-[0_18px_55px_rgba(31,26,19,0.12)]">
              <iframe
                title={`Mapa da ${business.legalName}`}
                src={business.mapEmbed}
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="duvidas" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.78fr_1.22fr] md:px-10">
          <div>
            <p className="text-sm font-extrabold text-brand-secondary">Perguntas frequentes</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Respostas rápidas antes de agendar.
            </h2>
            <p className="mt-5 leading-8 text-brand-muted">
              Confira localização, tratamentos divulgados e canais de contato antes de chamar a
              clínica.
            </p>
          </div>

          <div className="space-y-3">
            {business.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-brand-secondary/20 bg-brand-bg p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold">
                  {item.question}
                  <ArrowRight
                    className="shrink-0 text-brand-secondary transition group-open:rotate-90"
                    size={20}
                  />
                </summary>
                <p className="mt-4 leading-8 text-brand-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="dark-linen px-5 py-16 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-bold text-brand-accent">{business.legalName}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Pronto para cuidar do seu sorriso com mais tranquilidade.
            </h2>
          </div>
          <a
            href={whatsappUrl}
            className="gold-sheen inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-extrabold text-brand-primary transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,155,50,0.22)]"
          >
            <MessageCircle size={20} />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-brand-primary px-5 pb-8 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src={business.logo} alt="" width={46} height={46} className="object-contain" />
            <div>
              <p className="font-extrabold">{business.name}</p>
              <p className="text-sm font-bold text-white/60">{business.address}</p>
            </div>
          </div>
          <p className="text-sm font-bold text-white/60">
            Informações públicas sujeitas à confirmação pela clínica.
          </p>
        </div>
      </footer>
    </main>
  );
}
