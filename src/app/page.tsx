import Image from "next/image";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScienceIcon from "@mui/icons-material/Science";
import NatureIcon from "@mui/icons-material/Nature";
import PeopleIcon from "@mui/icons-material/People";
import MedicationIcon from "@mui/icons-material/Medication";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { IconBadge } from "@/components/IconBadge";

const HERO_IMAGE = "/img/murli.jpeg";
const ATHLETE_IMAGE = "/img/run.jpeg";

const FEATURE_ICONS = [
  { value: "25+ Years", Icon: CheckCircleOutlineIcon },
  { value: "Evidence-Based", Icon: ScienceIcon },
  { value: "Holistic Care", Icon: NatureIcon },
] as const;

const EXPERTISE_ICONS = [
  PeopleIcon,
  MedicationIcon,
  VaccinesIcon,
  FavoriteIcon,
] as const;

export default function HomePage() {
  const {
    doctor,
    introParagraph,
    hero,
    cta,
    philosophy,
    expertise,
    athlete,
    resources,
  } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="py-6 sm:py-10 lg:py-18">
        <Container className="flex flex-col gap-4 sm:gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-3 sm:space-y-6">
            <span className="inline-block rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card-bg)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] shadow-[var(--shadow-soft)]">
              {hero.subtitle}
            </span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl lg:text-5xl">
                {doctor.name}
              </h1>
              <p className="mt-2 text-lg text-[var(--color-muted)]">
                {doctor.tagline}
              </p>
            </div>
            <p className="max-w-xl text-[var(--color-muted)]">
              {introParagraph}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="link" href="/contact" size="lg">
                {cta.connect}
              </Button>
              <Button as="link" href="/#philosophy" variant="secondary" size="lg">
                {cta.exploreCare}
              </Button>
            </div>
          </div>
          <div className="relative h-[320px] w-full shrink-0 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-border)] shadow-[var(--shadow-card)] sm:h-[380px] lg:h-[420px] lg:w-[420px]">
            <Image
              src={HERO_IMAGE}
              alt={`${doctor.name}, ${doctor.tagline}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
              unoptimized
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/85 to-transparent p-4">
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm opacity-95">(Oncology)</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Feature cards */}
      <section className="py-6 sm:py-10">
        <Container>
          <div className="grid gap-3 sm:gap-6 sm:grid-cols-3">
            {hero.keyDifferentiators.map((item, i) => {
              const { Icon } = FEATURE_ICONS[i];
              return (
                <Card key={item.value}>
                  <div className="space-y-4">
                    <IconBadge icon={<span className="[&_svg]:!h-8 [&_svg]:!w-8"><Icon /></span>} />
                    <h3 className="text-xl font-semibold text-[var(--color-fg)]">
                      {item.value}
                    </h3>
                    <p className="text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Philosophy – tinted band */}
      <section
        id="philosophy"
        className="bg-[var(--color-accent)]/10 py-8 sm:py-12 lg:py-16"
      >
        <Container as="section">
          <div className="mx-auto max-w-3xl space-y-3 sm:space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-3xl">
              {philosophy.heading}
            </h2>
            {philosophy.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--color-muted)]">
                {p}
              </p>
            ))}
            <Link
              href="/#expertise"
              className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium hover:underline"
            >
              {philosophy.linkLabel}
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Clinical Expertise */}
      <section id="expertise" className="py-8 sm:py-12 lg:py-16">
        <Container>
          <SectionTitle
            title={expertise.heading}
            align="center"
            className="mb-6 sm:mb-10"
          />
          <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.cards.map((card, i) => {
              const Icon = EXPERTISE_ICONS[i];
              return (
                <Card key={card.title}>
                  <div className="space-y-4">
                    <IconBadge icon={<span className="[&_svg]:!h-8 [&_svg]:!w-8"><Icon /></span>} />
                    <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">
                      {card.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Athlete section */}
      <section
        id="athlete"
        className="bg-amber-50/80 py-8 dark:bg-amber-950/20 sm:py-12 lg:py-16"
      >
        <Container>
          <div className="flex flex-col gap-4 sm:gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] sm:h-[280px] lg:order-2 lg:h-[360px] lg:w-[420px]">
              <Image
                src={ATHLETE_IMAGE}
                alt="Runner on trail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
                unoptimized
              />
            </div>
            <div className="flex-1 space-y-3 sm:space-y-6 lg:order-1">
              <SectionTitle title={athlete.heading} />
              <p className="max-w-xl text-[var(--color-muted)]">
                {athlete.paragraph}
              </p>
              <Button
                as="link"
                href="/#resources"
                size="lg"
                className="inline-flex items-center gap-2"
              >
                <DirectionsRunIcon sx={{ fontSize: 22 }} />
                {athlete.ctaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Resources – two cards */}
      <section id="resources" className="py-8 sm:py-12 lg:py-16">
        <Container>
          <div className="grid gap-3 sm:gap-6 md:grid-cols-2">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon={<span className="[&_svg]:!h-8 [&_svg]:!w-8"><MenuBookIcon /></span>} />
                  <h3 className="text-xl font-semibold text-[var(--color-fg)]">
                    Patient Education Hub
                  </h3>
                </div>
                <p className="text-[var(--color-muted)]">
                  {resources.educationHub.description}
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium hover:underline"
                >
                  {resources.educationHub.linkLabel}
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Link>
              </div>
            </Card>
            <Card>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon={<span className="[&_svg]:!h-8 [&_svg]:!w-8"><QuestionAnswerIcon /></span>} />
                  <h3 className="text-xl font-semibold text-[var(--color-fg)]">
                    Treatment FAQs
                  </h3>
                </div>
                <p className="text-[var(--color-muted)]">
                  {resources.treatmentFaq.description}
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium hover:underline"
                >
                  {resources.treatmentFaq.linkLabel}
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
