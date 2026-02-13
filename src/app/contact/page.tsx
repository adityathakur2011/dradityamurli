import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { IconBadge } from "@/components/IconBadge";

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow="Get in touch"
            title="Contact"
            description="Reach out to book a consultation or ask a question. We will respond as soon as possible."
            align="center"
            titleAs="h1"
          />
        </Container>
      </section>

      {/* Contact info cards */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card>
              <div className="flex items-start gap-4">
                <IconBadge
                  icon={<PhoneIcon sx={{ fontSize: 24 }} />}
                  className="shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-fg)]">Phone</h3>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <IconBadge
                  icon={<EmailIcon sx={{ fontSize: 24 }} />}
                  className="shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-fg)]">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <IconBadge
                  icon={<LocationOnIcon sx={{ fontSize: 24 }} />}
                  className="shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-fg)]">
                    Address
                  </h3>
                  <p className="mt-1 text-[var(--color-muted)]">
                    {contact.address}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="border-t border-[var(--color-border)] py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-xl">
            <h2 className="mb-6 text-xl font-semibold text-[var(--color-fg)]">
              Send a message
            </h2>
            <ContactForm contactEmail={contact.email} />
          </div>
        </Container>
      </section>

      {/* WhatsApp CTA */}
      {contact.whatsappUrl && (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-card-bg)] py-10 sm:py-14">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <p className="text-[var(--color-muted)]">
                Prefer to chat? Reach us on WhatsApp.
              </p>
              <Link
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-[var(--radius)] bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-soft)] hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
