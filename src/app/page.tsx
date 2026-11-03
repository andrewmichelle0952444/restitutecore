'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { AIGuidedTool } from '@/components/sections/AIGuidedTool';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/ui/section-reveal';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Database, 
  Briefcase, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Shield, 
  ChevronRight, 
  Search, 
  Network, 
  Mail,
  Scale,
  Building,
  KeyRound,
  AlertTriangle,
  Landmark,
  Wallet,
  Heart,
  Globe,
  ExternalLink,
  BookOpen
} from 'lucide-react';

import { SERVICE_CATEGORIES, ServiceItem } from '@/lib/services-data';

// Educational Resources
const EDUCATIONAL_RESOURCES = [
  {
    title: "What to Do After a Bank Transfer Scam (APP Fraud)",
    category: "Action Guide",
    summary: "Immediate steps to take with your bank: recall requests, freezing beneficiary accounts, and documenting fraud timelines.",
    icon: Landmark,
    actionText: "Read Bank Transfer Scam Action Guide",
    url: "/resources#bank-transfer-scams"
  },
  {
    title: "How to Correctly Document a Crypto Scam for Investigation",
    category: "Evidence Guide",
    summary: "Why transaction hashes (TXIDs), receiving wallet addresses, and unedited chat logs are essential for blockchain tracing.",
    icon: Database,
    actionText: "Read Crypto Evidence Documentation Protocol",
    url: "/resources#documenting-crypto-scams"
  },
  {
    title: "Warning Signs of a Secondary Recovery Scam",
    category: "Protection Guide",
    summary: "How to identify fraudulent 'hack-back' promises, advance recovery taxes, and impersonators targeting fraud victims.",
    icon: AlertTriangle,
    actionText: "Read Secondary Recovery Scam Warnings",
    url: "/resources#secondary-recovery-scams"
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all' 
    ? SERVICE_CATEGORIES 
    : SERVICE_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 01: Hero — Scam Recovery & Financial Fraud Assistance */}
      <Hero />

      {/* 02: Find Your Scam Recovery Service (3 Clear Service Families) */}
      <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Three Service Families
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-6 tracking-tight text-[#F5F0E7]">
              Find Your Scam Recovery Service
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
              Our 11 scam investigation and wallet recovery services are organized across three clear families. Select a category below or explore each individual dedicated service page.
            </p>
          </SectionReveal>

          {/* Three Families Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-16">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card/80 text-muted-foreground hover:text-white border border-white/10'
              }`}
            >
              All Categories (12)
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-card/80 text-muted-foreground hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.badge}:</span>
                <span>{cat.title.replace(/^Category [ABC] — /, '')}</span>
                <span className="text-[10px] opacity-70">({cat.services.length})</span>
              </button>
            ))}
          </div>

          {/* Render Categories */}
          <div className="space-y-20 max-w-6xl mx-auto">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-8">
                {/* Family Header */}
                <div className="border-b border-white/[0.08] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] block mb-1">
                      {category.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-headline font-semibold text-[#F5F0E7]">
                      {category.title.replace(/^Category [ABC] — /, '')}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <Link 
                    href={`/services#${category.id}`} 
                    className="text-xs font-bold text-primary hover:underline uppercase tracking-wider shrink-0 flex items-center gap-1"
                  >
                    Category Directory →
                  </Link>
                </div>

                {/* Category C Distinct Definition Banner */}
                {category.id === 'wallet-access' && (
                  <div className="p-6 rounded-sm bg-card border border-primary/25 space-y-3 shadow-lg">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                      <KeyRound className="w-4 h-4" />
                      Distinct Problem Definition: Lost Access vs. Stolen Cryptocurrency
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Wallet access recovery is fundamentally different from cryptocurrency stolen in a scam. In wallet recovery, the assets are not stolen—access is lost due to forgotten passwords, mistranscribed recovery phrases, or corrupted hardware storage.
                    </p>
                    <p className="text-[11px] text-primary/80 font-semibold uppercase tracking-wider">
                      Important Boundary: Cryptographic protections (such as AES-256) cannot be bypassed or brute-forced without partial password hints or valid seed phrase constraints.
                    </p>
                  </div>
                )}

                {/* Service Cards Grid for This Family */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((srv, idx) => (
                    <SectionReveal key={srv.slug} delay={idx * 60} className="h-full">
                      <div className="p-7 md:p-8 rounded-sm bg-card border border-white/[0.07] hover:border-primary/40 transition-all duration-300 flex flex-col h-full group relative shadow-lg shadow-black/20">
                        <div className="flex items-start justify-between mb-5">
                          <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C8B68B] px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                            {category.badge}
                          </span>
                          <Link 
                            href={`/services/${srv.slug}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="Open dedicated page"
                          >
                            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                          </Link>
                        </div>

                        <h4 className="text-lg md:text-xl font-headline font-semibold mb-2.5 text-[#F5F0E7] group-hover:text-primary transition-colors">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-grow">
                          {srv.subtitle}
                        </p>

                        <div className="pt-4 border-t border-white/[0.06] space-y-2 mb-6">
                          <p className="text-[9px] uppercase font-bold tracking-widest text-[#F5F0E7]/60">Operational Indicators</p>
                          {srv.keyProblems.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-2 text-xs text-[#F5F0E7]/80">
                              <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                              <span className="truncate">{m}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2.5">
                          <Link href={`/services/${srv.slug}`} className="block">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full h-10 border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-primary/40 text-xs font-semibold uppercase tracking-wider rounded-sm text-[#F5F0E7] transition-all"
                            >
                              Dedicated Service Page <ArrowRight className="ml-2 w-3.5 h-3.5" />
                            </Button>
                          </Link>

                          <Dialog>
                            <DialogTrigger asChild>
                              <button 
                                onClick={() => setSelectedService(srv)}
                                className="w-full text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-1"
                              >
                                Quick Assessment Overview
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl bg-[#16171A] border-white/10 text-foreground p-7 md:p-9 rounded-sm">
                              <DialogHeader className="text-left space-y-2 mb-5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">{category.title}</span>
                                <DialogTitle className="text-2xl font-headline font-semibold text-[#F5F0E7]">{srv.title}</DialogTitle>
                                <DialogDescription className="text-sm text-muted-foreground">{srv.subtitle}</DialogDescription>
                              </DialogHeader>

                              <div className="space-y-5 text-sm leading-relaxed">
                                <div className="p-4 rounded-sm bg-[#121316] border border-white/[0.06] text-[#F5F0E7]/90 leading-relaxed font-normal text-xs md:text-sm">
                                  {srv.investigationApproach}
                                </div>

                                <div>
                                  <h4 className="text-xs uppercase font-bold tracking-widest text-[#F5F0E7] mb-2.5 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-primary" /> Key Deliverables
                                  </h4>
                                  <div className="space-y-2">
                                    {srv.deliverables.map((deliv, dIdx) => (
                                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-muted-foreground p-2.5 bg-white/[0.02] border border-white/[0.04] rounded-sm">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                        <span>{deliv}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                                  <Link href="#case-assessment" className="flex-1">
                                    <DialogClose asChild>
                                      <Button className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs rounded-sm">
                                        Request a Case Assessment
                                      </Button>
                                    </DialogClose>
                                  </Link>
                                  <Link href={`/services/${srv.slug}`} className="sm:w-auto">
                                    <Button variant="outline" className="w-full h-11 border-white/10 hover:border-primary/40 text-xs font-semibold uppercase tracking-wider rounded-sm text-[#F5F0E7]">
                                      Full Page Guide
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03: How Our Scam Assessment Process Works (3 Concise Stages) */}
      <section id="process" className="py-24 md:py-32 bg-card/20 relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              The Assessment Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-6 tracking-tight text-[#F5F0E7]">
              How Our Scam Assessment Works
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
              A transparent, pressure-free evaluation of your circumstances. You will receive an honest appraisal of whether recovery is technically viable.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-14">
            {[
              {
                step: "01",
                title: "Tell Us What Happened",
                desc: "Submit your case details confidentially through our intake portal. Share dates, amounts, platform URLs, transaction IDs (TXIDs), and communications with the perpetrators.",
                reassurance: "Protected under strict AES-256 confidentiality protocols."
              },
              {
                step: "02",
                title: "Review Available Information",
                desc: "Our digital analysts examine the submitted ledger hashes, banking rails, and infrastructure records to determine if funds can be traced to regulated institutions.",
                reassurance: "Objective review without upfront recovery promises."
              },
              {
                step: "03",
                title: "Understand Your Options",
                desc: "Receive a clear breakdown of potential next steps: formal exchange freeze requests, bank dispute documentation, law enforcement packages, or closing the matter honestly if unviable.",
                reassurance: "No obligation. Any further work is agreed on fixed scope."
              }
            ].map((st, idx) => (
              <SectionReveal key={idx} delay={idx * 100} className="h-full">
                <div className="p-8 rounded-sm bg-card border border-white/[0.07] h-full flex flex-col relative group hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-headline font-bold text-primary">{st.step}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Stage {idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-headline font-semibold text-[#F5F0E7] mb-3">{st.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{st.desc}</p>
                  <p className="text-[11px] text-primary/90 font-medium pt-4 border-t border-white/[0.06]">{st.reassurance}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center">
            <Link href="#case-assessment">
              <Button size="lg" className="h-13 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-md transition-all">
                Request a Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* 04: Our Approach to Fraud Investigation */}
      <section id="approach" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Investigative Rigour
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-6 tracking-tight text-[#F5F0E7]">
              Our Approach to Fraud Investigation
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
              We focus on defensible, verifiable facts. Here is how our analysts approach every case to produce evidence that holds up under scrutiny.
            </p>
          </SectionReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                number: "01",
                title: "Evidence Collection & Chain-of-Custody",
                desc: "We securely gather and timestamp transaction IDs, bank wire confirmations, server headers, and communications to ISO/IEC 27037 digital evidence standards.",
                icon: FileText
              },
              {
                number: "02",
                title: "Transaction & Blockchain Review",
                desc: "On-chain traversal unmasks multi-hop mixers and cross-chain bridges, tracing funds to centralized exchange deposit addresses where accounts can be frozen.",
                icon: Search
              },
              {
                number: "03",
                title: "Source & Counterparty Verification",
                desc: "We perform Open-Source Intelligence (OSINT) on scam domains, identifying server locations, merchant acquiring rails, and responsible corporate shell entities.",
                icon: Network
              },
              {
                number: "04",
                title: "Actionable Documentation & Liaison",
                desc: "We synthesize raw digital evidence into a court-admissible forensic dossier designed for banks, exchange compliance teams, legal counsel, or law enforcement.",
                icon: ShieldCheck
              }
            ].map((step, idx) => (
              <SectionReveal key={idx} delay={idx * 100}>
                <div className="p-8 rounded-sm bg-card border border-white/[0.07] hover:border-primary/30 transition-colors flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {step.number}</span>
                    </div>
                    <h3 className="text-lg font-headline font-semibold text-[#F5F0E7] mb-2">{step.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* CTA for Approach section */}
          <SectionReveal className="text-center mt-14">
            <p className="text-sm text-muted-foreground mb-5 max-w-xl mx-auto leading-relaxed">
              Ready to put this investigative rigour to work on your case? Submit your details for a confidential, pressure-free assessment.
            </p>
            <Link href="#case-assessment">
              <Button size="lg" className="h-13 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-md transition-all">
                Request a Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* 05: Why RESTITUTECORE & What to Expect */}
      <section id="why-us" className="py-24 md:py-32 bg-card/20 relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Credibility & Standards
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-6 tracking-tight text-[#F5F0E7]">
              Why RESTITUTECORE & What to Expect
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
              In an industry plagued by false promises and secondary recovery scammers, we stand apart through transparency, restraint, and verifiable investigation standards.
            </p>
          </SectionReveal>

          {/* 4 Trust Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: ShieldCheck,
                title: "Zero False Promises",
                subtitle: "Honest Feasibility",
                desc: "We never guarantee recovery. We objectively evaluate evidence first, ensuring you don't spend money chasing untraceable losses."
              },
              {
                icon: AlertTriangle,
                title: "Anti-Secondary Scam Protection",
                subtitle: "Guaranteed Fraud Defense",
                desc: "We educate clients on identifying secondary recovery fraud, 'hack-back' impersonators, and bogus fee-in-advance demands."
              },
              {
                icon: Building,
                title: "Delaware Registered",
                subtitle: "Corporate Transparency",
                desc: "A legally registered corporate entity in the State of Delaware, providing accountable, compliant investigative support."
              },
              {
                icon: Scale,
                title: "Clear Legal Distinction",
                subtitle: "Evidence Focused",
                desc: "We provide technical forensics and evidence packages, working alongside your retained legal counsel or direct banking channels."
              }
            ].map((pillar, pIdx) => (
              <SectionReveal key={pIdx} delay={pIdx * 80} className="h-full">
                <div className="p-7 rounded-sm bg-card border border-white/[0.07] h-full flex flex-col hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-headline font-semibold text-[#F5F0E7] mb-1">{pillar.title}</h3>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-primary mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal">{pillar.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Anonymised Precedents & Verified Case Records */}
          <div className="max-w-6xl mx-auto">
            <SuccessStories />
          </div>

          {/* CTA for Why-Us section */}
          <SectionReveal className="text-center mt-14">
            <Link href="#case-assessment">
              <Button size="lg" className="h-13 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-md transition-all">
                Request a Confidential Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* 06: Scam Recovery Resources & Educational Guides */}
      <section id="resources" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Consumer Support & Knowledge
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-6 tracking-tight text-[#F5F0E7]">
              Scam Recovery Resources & Guidance
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
              Practical guides and essential fraud education to help you take immediate, protective action and avoid secondary pitfalls.
            </p>
          </SectionReveal>

          {/* 3 Useful Action Guides */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {EDUCATIONAL_RESOURCES.map((res, rIdx) => (
              <SectionReveal key={rIdx} delay={rIdx * 100} className="h-full">
                <div className="p-7 rounded-sm bg-card border border-white/[0.07] h-full flex flex-col group hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-primary tracking-widest mb-4">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>{res.category}</span>
                  </div>
                  <h3 className="text-lg font-headline font-semibold text-[#F5F0E7] mb-3 group-hover:text-primary transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {res.summary}
                  </p>
                  <Link href={res.url} className="inline-flex items-center text-xs font-semibold text-primary hover:underline uppercase tracking-wider">
                    {res.actionText} →
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <FAQSection />
          </div>
        </div>
      </section>

      {/* 07: Confidential Enquiry & Final Conversion Destination */}
      <section className="py-24 md:py-32 bg-card/25 relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Start Your Assessment
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-4 tracking-tight text-[#F5F0E7]">
              Request a Case Assessment
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Submit your incident parameters confidentially. Our fraud analysts review the digital trail and outline your realistic recovery options without pressure or guaranteed recovery claims.
            </p>
          </SectionReveal>

          {/* Interactive Case Intake */}
          <AIGuidedTool />

          {/* Direct Encrypted Transmission Card */}
          <SectionReveal className="max-w-3xl mx-auto mt-12 p-8 md:p-10 rounded-sm bg-[#121316] border border-white/[0.08] text-center">
            <h3 className="text-xl font-headline font-semibold text-[#F5F0E7] mb-2">Prefer to email our team directly?</h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mb-6">
              If you have already prepared an evidence folder or wish to share sensitive communications privately, transmit your details directly to our senior analysts.
            </p>
            <a href="mailto:investigator@restitutecore.com" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 px-6 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">
              <Mail className="w-4 h-4" /> investigator@restitutecore.com
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
