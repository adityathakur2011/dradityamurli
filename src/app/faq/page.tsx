import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { Accordion } from "@/components/Accordion";

export default function FaqPage() {
  const { faq, cta } = siteContent;

  return (
    <>
      {/* Hero / title + intro */}
      <section className="py-10 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow="Patient information"
            title="Frequently asked questions"
            description="Find answers to common questions about cancer, diagnosis, treatment, and prevention. For personalized advice, please book a consultation."
            align="center"
            titleAs="h1"
          />
        </Container>
      </section>

      {/* FAQ accordion */}
      <section className="py-10 sm:py-14">
        <Container className="max-w-3xl">
          <Accordion items={faq} defaultExpandedIndex={0} />
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-card-bg)] py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              We are here to help. Book a consultation to discuss your situation
              and get personalized guidance.
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
