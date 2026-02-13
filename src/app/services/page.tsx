import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

export default function ServicesPage() {
  const { services, areasOfInterest, cta } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow="What we offer"
            title="Services & Expertise"
            description="Comprehensive, evidence-based cancer care tailored to each patient."
            align="center"
            titleAs="h1"
          />
        </Container>
      </section>

      {/* Services list / cards */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-muted)]">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas of interest – highlight box */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-accent)]/10 p-6 shadow-[var(--shadow-card)] sm:p-8">
            <SectionTitle
              title="Areas of interest & specialization"
              description={areasOfInterest.intro}
              className="mb-6"
            />
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {areasOfInterest.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[var(--color-fg)]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-card-bg)] py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-3xl">
              Ready to discuss your care?
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Book a consultation to explore treatment options and create a
              personalized plan.
            </p>
            <Button
              as="link"
              href="/contact"
              size="lg"
              className="mt-6"
            >
              {cta.bookConsultation}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
