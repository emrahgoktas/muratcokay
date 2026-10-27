import { contact, doctor } from "@muratcokay/content";
import { ButtonLink } from "@muratcokay/ui";

import { ClinicMap } from "@/components/clinic-map";
import { ContactForm } from "@/components/contact-form";
import { CountUp } from "@/components/count-up";
import { MediaImage } from "@/components/media-image";
import { PhotoCard } from "@/components/photo-card";
import { SectionHeading } from "@/components/section-heading";
import {
  approachMedia,
  media,
  readingMedia,
  situationMedia,
} from "@/lib/media";
import { siteContent } from "@/lib/page-content";
import { homeJsonLd } from "@/lib/schema";

const situationLinks = siteContent.crossSiteLinks.situations;
const approachLinks = siteContent.crossSiteLinks.approaches;

const atmosphere = [
  { image: media.hero, label: "Karşılama" },
  { image: media.roomAkupunktur, label: "Uygulama alanı" },
  { image: media.desk, label: "Değerlendirme" },
  { image: media.termal, label: "Yalova" },
] as const;

const scopeStats = [
  { value: Object.keys(situationLinks).length, label: "Durum başlığı" },
  { value: Object.keys(approachLinks).length, label: "Yaklaşım" },
  { value: atmosphere.length, label: "Klinik görünüm" },
] as const;

export default function HomePage() {
  return (
    <main id="icerik">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: homeJsonLd() }}
      />

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] text-secondary uppercase">
              <span className="h-px w-9 bg-[var(--gold)]" aria-hidden="true" />
              {doctor.name}
            </p>
            <h1 className="mt-5 font-serif text-[2.55rem] leading-[0.98] font-medium tracking-tight text-primary sm:text-6xl lg:text-[4.15rem]">
              Yalova&apos;da
              <span className="mt-1 block italic text-[#8a6a3d]">bütüncül sağlık</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              {siteContent.hero.subtitle}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted-foreground)]">
              {siteContent.hero.introduction}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#iletisim" size="lg" className="w-full sm:w-auto">
                Mesaj bırakın
              </ButtonLink>
              <ButtonLink
                href={contact.whatsapp.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                {siteContent.hero.whatsapp}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:relative lg:min-h-[88svh]">
            <div className="relative h-[22rem] overflow-hidden sm:h-[28rem] lg:absolute lg:inset-0 lg:h-auto">
              <div className="hero-kenburns absolute inset-0">
                <MediaImage
                  src={media.hero.src}
                  alt={media.hero.alt}
                  fill
                  priority
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c30]/20 via-transparent to-transparent" />
            </div>
            <aside className="relative z-10 mx-4 -mt-16 mb-6 sm:mx-6 lg:absolute lg:right-6 lg:bottom-8 lg:left-auto lg:mx-0 lg:mt-0 lg:mb-0 lg:w-[22rem]">
              <div className="overflow-hidden rounded-[1.6rem] bg-[#f7f3ec]/96 shadow-[0_24px_60px_-24px_rgba(8,28,48,0.55)] ring-1 ring-white/50 backdrop-blur-md">
                <div className="relative h-24 overflow-hidden">
                  <MediaImage
                    src={media.desk.src}
                    alt={media.desk.alt}
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ec] to-transparent" />
                </div>
                <div className="px-5 pb-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-secondary uppercase">
                    Klinik bilgisi
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-medium text-primary">
                    Bilgi ve randevu
                  </h2>
                  <address className="mt-3 space-y-1.5 text-sm not-italic text-[var(--foreground)]">
                    <p>{contact.address}</p>
                    <p>
                      <a href={contact.phone.href} className="font-semibold text-primary">
                        {contact.phone.display}
                      </a>
                    </p>
                    <p className="text-[var(--muted-foreground)]">{contact.workingHours}</p>
                  </address>
                  <div className="mt-4 grid gap-2">
                    <ButtonLink href="#konum" variant="outline" className="w-full">
                      Konumu görün
                    </ButtonLink>
                    <ButtonLink href={contact.phone.href} className="w-full">
                      {siteContent.hero.appointment}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pt-6 sm:px-6 lg:px-8" data-reveal>
        <div className="mx-auto mb-6 grid max-w-7xl grid-cols-3 gap-3 rounded-[1.5rem] border border-[#d8c4a4]/70 bg-white/75 px-3 py-5 sm:gap-6 sm:px-8 sm:py-6">
          {scopeStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-medium text-primary sm:text-4xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 lg:grid-cols-4">
          {atmosphere.map((item) => (
            <figure
              key={item.label}
              className="hover-lift group overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_40px_-24px_rgba(15,76,129,0.4)] ring-1 ring-[#0f4c81]/8"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <MediaImage
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="px-3 py-2.5 text-center text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" data-reveal>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Çerçeve"
            title={siteContent.frame.title}
            description={siteContent.frame.description}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#d8c4a4]/70">
            {siteContent.frame.items.map((item, index) => (
              <article key={item.title} className="md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="font-serif text-5xl leading-none text-[#c4a574]/55">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-medium text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="durumlar"
        className="scroll-mt-24 bg-white/70 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bilgilendirme"
            title={siteContent.situations.title}
            description={siteContent.situations.description}
          />
          <div className="pack-grid mt-10">
            {siteContent.situations.items.map((item) => {
              const links = situationLinks[item.title];
              return (
                <PhotoCard
                  key={item.title}
                  image={situationMedia[item.title] ?? media.hero}
                  title={item.title}
                  description={item.description}
                >
                  {links ? (
                    <div className="mt-auto grid gap-2 pt-5 text-sm font-semibold">
                      <a href={links.clinic.url} className="text-primary">
                        {links.clinic.anchor} →
                      </a>
                      <a href={links.blog.url} className="text-secondary">
                        {links.blog.anchor} →
                      </a>
                    </div>
                  ) : null}
                </PhotoCard>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="yaklasimlar"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Yaklaşım"
            title={siteContent.approaches.title}
            description={siteContent.approaches.description}
          />
          <div className="pack-grid pack-grid--2 mt-10">
            {siteContent.approaches.items.map((item) => {
              const links = approachLinks[item.title];
              return (
                <article
                  key={item.title}
                  className="group relative min-h-[22rem] overflow-hidden rounded-[1.8rem]"
                >
                  <MediaImage
                    src={(approachMedia[item.title] ?? media.hero).src}
                    alt={(approachMedia[item.title] ?? media.hero).alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,28,48,0.15)_0%,rgba(8,28,48,0.78)_100%)]" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="font-serif text-3xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/82">
                      {item.description}
                    </p>
                    {links ? (
                      <div className="mt-5 grid gap-2 text-sm font-semibold text-[#f3e6d0]">
                        <a href={links.clinic.url}>{links.clinic.anchor} →</a>
                        <a href={links.blog.url}>{links.blog.anchor} →</a>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="surec" className="relative scroll-mt-24 overflow-hidden">
        <MediaImage
          src={media.akupunktur.src}
          alt={media.akupunktur.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#081c30]/68" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading eyebrow="Süreç" title={siteContent.process.title} tone="light" />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[1.5rem] border border-white/12 bg-white/8 p-6 backdrop-blur-sm"
              >
                <span className="font-serif text-4xl text-[#e6d3b3]">{index + 1}</span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-34px_rgba(15,76,129,0.55)]">
              <MediaImage
                src={media.desk.src}
                alt={media.desk.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <p className="mt-3 text-center text-xs tracking-[0.18em] text-secondary uppercase">
              Değerlendirme ortamı
            </p>
          </div>
          <div>
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] text-secondary uppercase">
              <span className="h-px w-9 bg-[var(--gold)]" aria-hidden="true" />
              Hekim
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight font-medium text-primary lg:text-5xl">
              {doctor.name}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
              {doctor.biography} Çalışmalar, bilimsel değerlendirme ve açık
              bilgilendirme çerçevesinde Yalova Merkez&apos;deki muayenehanede
              sürdürülür.
            </p>
            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "GETAT ünitesi deneyimi",
                "Yalova Merkez muayenehane",
                "Randevu ile görüşme",
                "Mevcut takiple birlikte değerlendirme",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#d8c4a4]/50 bg-white/70 px-4 py-4 text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white/70 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <MediaImage
              src={media.butuncul.src}
              alt={media.butuncul.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Hazırlık"
              title={siteContent.visitPrep.title}
              description={siteContent.visitPrep.description}
            />
            <ol className="mt-8 grid gap-3">
              {siteContent.visitPrep.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl bg-[#f7f3ec] px-4 py-4"
                >
                  <span className="font-serif text-xl text-[#c4a574]">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6 text-[var(--muted-foreground)] sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="ulasim"
        className="relative scroll-mt-24 overflow-hidden"
      >
        <MediaImage
          src={media.termal.src}
          alt={media.termal.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#081c30]/58" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Ulaşım"
            title={siteContent.travel.title}
            description={siteContent.travel.description}
            tone="light"
          />
          <div className="pack-grid mt-10">
            {siteContent.travel.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md"
              >
                <h3 className="font-serif text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/78">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sss" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Bilgi" title={siteContent.faq.title} />
          <div className="mt-8 space-y-3">
            {siteContent.faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[#d8c4a4]/40 bg-white/80 px-4 py-1 sm:px-5"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-2 font-serif text-lg font-medium text-primary">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f3ec] text-lg leading-none text-[#c4a574] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Kaynak"
            title={siteContent.reading.title}
            description={siteContent.reading.description}
          />
          <div className="pack-grid mt-10">
            {siteContent.reading.items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative min-h-56 overflow-hidden rounded-[1.6rem] no-underline"
              >
                <MediaImage
                  src={readingMedia[index].src}
                  alt={readingMedia[index].alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#081c30]/55" />
                <span className="absolute top-5 left-5 text-[0.68rem] font-semibold tracking-[0.2em] text-[#e6d3b3] uppercase">
                  {item.note}
                </span>
                <span className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight font-medium text-white">
                  {item.title} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="konum" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Konum"
            title={siteContent.map.title}
            description={siteContent.map.description}
          />
          <div className="mt-8">
            <ClinicMap />
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_70px_-36px_rgba(15,76,129,0.4)] ring-1 ring-[#0f4c81]/8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 h-full">
              <MediaImage
                src={media.hero.src}
                alt={media.hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[#081c30]/55" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <SectionHeading
                  eyebrow="İletişim"
                  title={siteContent.form.title}
                  description={siteContent.form.description}
                  tone="light"
                />
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={contact.phone.href} variant="inverse">
                    {contact.phone.display}
                  </ButtonLink>
                  <ButtonLink
                    href={contact.whatsapp.href}
                    variant="inverse"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-7xl rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {siteContent.legalWarning}
        </p>
      </section>
    </main>
  );
}
