import { serviceCatalog } from "@muratcokay/content";

import { AppointmentWizard } from "@/components/contact/appointment-wizard";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { siteContent } from "@/lib/content";

export function AppointmentSection() {
  const copy = siteContent.pages.home.appointment;

  return (
    <section
      id="randevu"
      aria-labelledby="appointment-title"
      className="scroll-mt-24 bg-white/55 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EditorialHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          titleId="appointment-title"
        />
        <div className="mt-10 max-w-4xl">
          <AppointmentWizard
            topics={serviceCatalog.map((service) => ({
              slug: service.slug,
              kategori: service.kategori,
              baslik: service.baslik,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
