import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ALL_SERVICES, 
  SERVICE_CATEGORIES, 
  getServiceBySlug 
} from '@/lib/services-data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Lock, 
  ChevronRight,
  Database,
  KeyRound,
  Landmark,
  BookOpen,
  Compass,
  ArrowUpRight,
  HelpCircle,
  Clock,
  Layers,
  Scale
} from 'lucide-react';
import { AIGuidedTool } from '@/components/sections/AIGuidedTool';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Restiturecore',
      description: 'The requested scam recovery service could not be located.'
    };
  }

  const canonicalUrl = `https://restiturecore.com/services/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: [
      service.primaryKeyword,
      'scam recovery services',
      'fraud investigation',
      'digital asset tracing',
      service.title,
      service.categoryLabel
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: 'Restiturecore',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const category = SERVICE_CATEGORIES.find(c => c.id === service.category);
  const relatedServices = category?.services.filter(s => s.slug !== service.slug) || [];
  const canonicalUrl = `https://restiturecore.com/services/${service.slug}`;

  const getCategoryIcon = () => {
    switch (service.category) {
      case 'financial-relationship':
        return <Landmark className="w-4 h-4 text-primary" />;
      case 'crypto-fraud':
        return <Database className="w-4 h-4 text-primary" />;
      case 'wallet-access':
        return <KeyRound className="w-4 h-4 text-primary" />;
    }
  };

  // Structured Data (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://restiturecore.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://restiturecore.com/services'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.categoryLabel,
            'item': `https://restiturecore.com/services#${service.category}`
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': service.title,
            'item': canonicalUrl
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        'name': service.title,
        'serviceType': service.primaryKeyword,
        'description': service.metaDescription,
        'provider': {
          '@type': 'Organization',
          'name': 'Restiturecore',
          'url': 'https://restiturecore.com',
          'email': 'investigator@restiturecore.com'
        },
        'areaServed': 'Worldwide',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': service.categoryLabel
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': service.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* =========================================================================
          01 · HERO
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pb-28 border-b border-white/[0.06] bg-gradient-to-b from-card/60 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,182,139,0.05),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8 uppercase tracking-widest font-semibold flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            {service.parentPillarSlug ? (
              <>
                <Link href={`/services/${service.parentPillarSlug}`} className="hover:text-primary transition-colors">
                  Crypto Scam Recovery (Parent)
                </Link>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </>
            ) : (
              <>
                <span className="text-primary/80">{category?.badge}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </>
            )}
            <span className="text-white truncate max-w-[200px] md:max-w-none">{service.shortTitle}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-6 tracking-[0.25em] uppercase">
              {getCategoryIcon()}
              {service.categoryLabel}
            </div>

            {/* Clear Single H1 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-4 tracking-tight leading-tight uppercase">
              {service.title}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-base md:text-xl text-primary font-medium leading-relaxed mb-8">
              {service.heroTagline}
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link href="#assessment">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 rounded-sm text-xs uppercase tracking-wider shadow-lg shadow-primary/20">
                  Request a Case Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#understanding">
                <Button variant="outline" className="w-full sm:w-auto border-white/10 hover:border-primary/40 text-xs font-semibold uppercase tracking-wider h-12 px-6 rounded-sm text-[#F5F0E7]">
                  Read Service Briefing ↓
                </Button>
              </Link>
            </div>

            {/* Opening Content Box (Specific scam type, intended audience, key questions answered) */}
            <div className="p-6 md:p-8 rounded-lg bg-card/80 border border-white/10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                    Specific Scam Type
                  </span>
                  <p className="text-sm font-headline font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                    Who This Service Is Intended For
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.intendedAudience}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-3">
                  Key Questions This Page Answers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.keyQuestionsAnswered?.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F0E7]/80">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Left 8 columns: 7-Section Framework Content */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Category C Cryptographic Boundary Notice */}
              {service.disclaimer && (
                <div className="p-6 md:p-8 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-200/90 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                    <AlertTriangle className="w-4 h-4" />
                    Crucial Cryptographic Boundary Notice
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed font-medium">
                    {service.disclaimer}
                  </p>
                </div>
              )}

              {/* PARENT PILLAR NAVIGATION HUB (if isParentPillar) */}
              {service.isParentPillar && service.specialistLinks && (
                <div className="p-7 md:p-9 rounded-lg bg-card/60 border border-primary/20 space-y-6">
                  <div className="flex items-center gap-2.5 text-primary font-bold text-xs uppercase tracking-[0.2em]">
                    <Compass className="w-4 h-4" />
                    Specialist Crypto Investigation Desks
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-headline font-bold text-white uppercase tracking-tight mb-2">
                      Specialist Crypto Scam Desks
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      While our general crypto forensic tracing applies across all blockchain fraud, each specific mechanism leaves different on-chain and operational footprints. Choose the specialist desk matching your incident:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {service.specialistLinks.map((spec) => (
                      <Link 
                        key={spec.slug}
                        href={`/services/${spec.slug}`}
                        className="p-4 rounded-md bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                      >
                        <div className="space-y-1.5 mb-3">
                          <p className="text-xs font-bold text-white group-hover:text-primary transition-colors flex items-center justify-between">
                            {spec.title}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                          </p>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {spec.focus}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary group-hover:underline">
                          {spec.anchorText} →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* =========================================================================
                  02 · UNDERSTANDING THE SCAM
                  ========================================================================= */}
              <section id="understanding" className="space-y-8 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    02
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">
                    Understanding the Scam: Mechanics & Hallmarks
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    How This Specific Fraud Operates
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* Common Warning Signs */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    Common Warning Signs & Operational Hallmarks
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {service.warningSigns?.map((sign, i) => (
                      <div key={i} className="p-4 rounded-md bg-card/60 border border-white/[0.06] flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground leading-relaxed font-medium">
                          {sign}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How it differs from other scam types */}
                <div className="p-5 md:p-6 rounded-lg bg-card/40 border border-white/[0.08] space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                    How This Fraud Differs From Other Scams
                  </span>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.scamDistinctionText}
                  </p>
                </div>
              </section>

              {/* =========================================================================
                  03 · EVIDENCE TO PRESERVE
                  ========================================================================= */}
              <section id="evidence" className="space-y-8 pt-10 border-t border-white/[0.06] scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    03
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">
                    Evidence to Preserve: What Records Matter
                  </h2>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Before fraudulent websites are taken down or chat conversations are deleted, compiling clean, unedited records is essential. These materials form the basis of all forensic tracing, banking disputes, and law enforcement packages:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.evidenceChecklist.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-md bg-card/80 border border-white/[0.08] flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] text-[11px] text-muted-foreground space-y-1">
                  <p className="font-bold text-white uppercase tracking-wider">Evidence Preservation Guidance:</p>
                  <p className="leading-relaxed">
                    Do not alert the counterparty that you suspect fraud or are preserving records, as they may delete accounts and purge shared channels. Export chat threads directly using in-app archive tools (e.g. WhatsApp Chat Export or Telegram Desktop JSON export) to retain cryptographic metadata.
                  </p>
                </div>
              </section>

              {/* =========================================================================
                  04 · ASSESSMENT AND OPTIONS
                  ========================================================================= */}
              <section id="assessment-options" className="space-y-8 pt-10 border-t border-white/[0.06] scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    04
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">
                    Assessment Methodology & Available Pathways
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    How We Assess Your Case
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.investigationApproach}
                  </p>
                </div>

                {/* Available Pathways */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    Potential Investigative & Regulatory Pathways:
                  </h3>
                  <div className="space-y-3">
                    {service.realisticPathways.map((pathway, idx) => (
                      <div key={idx} className="p-4 rounded-md bg-card/60 border border-white/[0.06] flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-white/90 leading-relaxed font-medium">
                          {pathway}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formal Deliverables Provided */}
                <div className="p-6 rounded-lg bg-card/40 border border-white/[0.08] space-y-4">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Formal Deliverables Provided
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3 rounded bg-white/[0.03] border border-white/[0.05] text-xs font-semibold text-white/90">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* =========================================================================
                  05 · PROCESS AND LIMITATIONS
                  ========================================================================= */}
              <section id="process-limitations" className="space-y-8 pt-10 border-t border-white/[0.06] scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    05
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">
                    Engagement Stages, Costs & Realistic Limitations
                  </h2>
                </div>

                {/* Engagement Stages */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    The 3 Engagement Stages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.engagementStages?.map((stage) => (
                      <div key={stage.stageNumber} className="p-5 rounded-md bg-card/60 border border-white/[0.06] space-y-2">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                          Stage {stage.stageNumber}
                        </span>
                        <p className="text-sm font-headline font-bold text-white">
                          {stage.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transparent Costs and Fee Principles */}
                <div className="p-6 rounded-lg bg-card/40 border border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                    <Scale className="w-4 h-4" />
                    Transparent Fee Principles
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.costPrinciples}
                  </p>
                </div>

                {/* Realistic Expectations & Limitations */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    Realistic Expectations & Factors Affecting Outcomes
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.realisticExpectations}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.outcomeFactors?.map((factor, idx) => (
                      <div key={idx} className="p-3.5 rounded bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {factor}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* =========================================================================
                  06 · FAQS AND RELATED SERVICES
                  ========================================================================= */}
              <section id="faqs" className="space-y-8 pt-10 border-t border-white/[0.06] scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    06
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">
                    Frequently Asked Questions & Related Services
                  </h2>
                </div>

                {/* Accordion FAQs */}
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {service.faqs.map((faq, fIdx) => (
                    <AccordionItem 
                      key={fIdx} 
                      value={`item-${fIdx}`}
                      className="border border-white/[0.08] bg-card/40 rounded-md px-5"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-white hover:text-primary py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4 pt-1">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Anti-Cannibalization Scenario Distinctions */}
                {service.distinctions && service.distinctions.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                      Related Specialist Desks (Different Scam Mechanics)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Each indexed desk answers a genuinely different scenario. If your experience matches one of these profiles, explore the dedicated page:
                    </p>
                    <div className="space-y-2.5">
                      {service.distinctions.map((dist, idx) => (
                        <div key={idx} className="p-4 rounded-md bg-card/60 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <span className="text-xs text-muted-foreground font-medium">
                            {dist.scenario}
                          </span>
                          <Link 
                            href={`/services/${dist.recommendedSlug}`}
                            className="text-xs font-bold text-primary hover:underline uppercase tracking-wider shrink-0 flex items-center gap-1"
                          >
                            {dist.anchorText} →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Educational Resources */}
                {service.relatedGuides && service.relatedGuides.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      Educational Guides & Knowledge
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.relatedGuides.map((guide, idx) => (
                        <div key={idx} className="p-4 rounded-md bg-card/40 border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                              {guide.category}
                            </span>
                            <p className="text-xs font-bold text-white mb-1">
                              {guide.title}
                            </p>
                            <p className="text-[11px] text-muted-foreground line-clamp-2">
                              {guide.summary}
                            </p>
                          </div>
                          <div className="pt-3">
                            <Link href={guide.url} className="text-xs font-bold text-primary hover:underline uppercase tracking-wider flex items-center gap-1">
                              {guide.anchorText} →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* =========================================================================
                  07 · FINAL CTA
                  ========================================================================= */}
              <section id="assessment" className="space-y-8 pt-10 border-t border-white/[0.06] scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    07
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">
                    Request a Case Assessment
                  </h2>
                </div>

                <div className="p-6 md:p-8 rounded-lg bg-card/60 border border-primary/20 space-y-6">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-2">
                      What Happens After Your Enquiry?
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Our enquiry process is structured to give you an objective evaluation of your options without sales pressure or unrealistic recovery claims.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.afterEnquirySteps?.map((step) => (
                      <div key={step.stepNumber} className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                          Step {step.stepNumber}
                        </span>
                        <p className="text-xs font-bold text-white uppercase tracking-tight">
                          {step.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-primary" />
                      <span>256-Bit Encrypted Confidential Intake</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Direct Email: <a href="mailto:investigator@restiturecore.com" className="text-white hover:text-primary font-semibold">investigator@restiturecore.com</a>
                    </div>
                  </div>
                </div>

                {/* Embedded Intake Tool */}
                <div className="pt-4">
                  <AIGuidedTool />
                </div>
              </section>

            </div>

            {/* Right 4 columns: Sticky Assessment CTA & Quick Navigation */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sticky Action Card */}
              <Card className="glass-card border-white/10 p-6 md:p-8 rounded-lg sticky top-28 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" /> Confidential Assessment
                  </div>
                  <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-2">
                    Discuss This Case
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Submit your preliminary details for a confidential evaluation. Our case officers review available evidence and outline realistic next steps.
                  </p>
                </div>

                {/* Section Quick Jump */}
                <div className="space-y-1.5 border-y border-white/[0.06] py-4 text-xs font-medium">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
                    On This Page:
                  </p>
                  <a href="#understanding" className="block text-muted-foreground hover:text-white transition-colors py-0.5">
                    02 · Understanding the Scam
                  </a>
                  <a href="#evidence" className="block text-muted-foreground hover:text-white transition-colors py-0.5">
                    03 · Evidence to Preserve
                  </a>
                  <a href="#assessment-options" className="block text-muted-foreground hover:text-white transition-colors py-0.5">
                    04 · Assessment & Options
                  </a>
                  <a href="#process-limitations" className="block text-muted-foreground hover:text-white transition-colors py-0.5">
                    05 · Process & Limitations
                  </a>
                  <a href="#faqs" className="block text-muted-foreground hover:text-white transition-colors py-0.5">
                    06 · FAQs & Related Desks
                  </a>
                  <a href="#assessment" className="block text-primary hover:underline transition-colors py-0.5 font-bold">
                    07 · Request a Case Assessment
                  </a>
                </div>

                <div className="space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-primary" />
                    <span>256-Bit Encrypted Intake</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Reviewed by Fraud Investigators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-primary" />
                    <span>No Upfront Guarantees</span>
                  </div>
                </div>

                <Link href="#assessment" className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 rounded-sm text-xs uppercase tracking-wider shadow-lg shadow-primary/10">
                    Request a Case Assessment
                  </Button>
                </Link>

                <div className="text-center pt-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-1">
                    Direct Case Officer Email
                  </p>
                  <a href="mailto:investigator@restiturecore.com" className="text-xs font-bold text-white hover:text-primary transition-colors">
                    investigator@restiturecore.com
                  </a>
                </div>
              </Card>

              {/* Related Services in Same Family */}
              {relatedServices.length > 0 && (
                <div className="p-6 rounded-lg bg-card/40 border border-white/[0.06] space-y-4">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    Other {category?.badge} Desks
                  </h4>
                  <div className="space-y-2.5">
                    {relatedServices.map((rel) => (
                      <Link 
                        key={rel.slug} 
                        href={`/services/${rel.slug}`}
                        className="block p-3 rounded bg-white/[0.02] border border-white/[0.04] hover:border-primary/30 hover:bg-white/[0.05] transition-all group"
                      >
                        <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">
                          {rel.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                          {rel.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
