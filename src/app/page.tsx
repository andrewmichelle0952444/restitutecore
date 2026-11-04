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
  ArrowRight, 
  ShieldCheck, 
  Database, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  Network, 
  Mail,
  Scale,
  Building,
  KeyRound,
  AlertTriangle,
  Landmark,
  BookOpen,
  ExternalLink
} from 'lucide-react';

import { SERVICE_CATEGORIES, ServiceCategory } from '@/lib/services-data';

// Educational Action Guides
const EDUCATIONAL_RESOURCES = [
  {
    title: "What to Do After a Bank Transfer Scam (APP Fraud)",
    category: "Action Guide",
    summary: "Immediate steps to take with your bank: recall requests, freezing beneficiary accounts, and documenting fraud timelines.",
    icon: Landmark,
    actionText: "Read Bank Transfer Action Guide",
    url: "/resources#bank-transfer-scams"
  },
  {
    title: "How to Correctly Document a Crypto Scam for Investigation",
    category: "Evidence Guide",
    summary: "Why transaction hashes (TXIDs), receiving wallet addresses, and unedited chat logs are essential for blockchain tracing.",
    icon: Database,
    actionText: "Read Crypto Documentation Protocol",
    url: "/resources#documenting-crypto-scams"
  },
  {
    title: "Warning Signs of a Secondary Recovery Scam",
    category: "Protection Guide",
    summary: "How to identify fraudulent 'hack-back' promises, advance recovery taxes, and impersonators targeting fraud victims.",
    icon: AlertTriangle,
    actionText: "Read Secondary Scam Warnings",
    url: "/resources#secondary-recovery-scams"
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all' 
    ? SERVICE_CATEGORIES 
    : SERVICE_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 01: Hero Section */}
      <Hero />

      {/* 02: Core Recovery Services (Streamlined 3 Service Pillars) */}
      <section id="services" className="py-20 md:py-28 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Specialist Investigation Families
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-4 tracking-tight text-[#F5F0E7]">
              Find Your Scam Recovery Service
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Our 11 fraud investigation and wallet recovery services are organized across three distinct specialisations. Choose your category below to understand your options.
            </p>
          </SectionReveal>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card/80 text-muted-foreground hover:text-white border border-white/10'
              }`}
            >
              All 3 Families (12 Services)
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

          {/* When 'all' is selected: Show 3 Core Family Cards for maximum impact & reduced height */}
          {activeCategory === 'all' ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
              {SERVICE_CATEGORIES.map((cat, cIdx) => (
                <SectionReveal key={cat.id} delay={cIdx * 100} className="h-full">
                  <div className="p-7 md:p-8 rounded-sm bg-card border border-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col h-full group relative shadow-xl shadow-black/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8B68B] px-3 py-1 rounded bg-primary/10 border border-primary/20">
                        {cat.badge}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold">
                        {cat.services.length} Specialisations
                      </span>
                    </div>

                    <h3 className="text-xl font-headline font-semibold text-[#F5F0E7] group-hover:text-primary transition-colors mb-2">
                      {cat.title.replace(/^Category [ABC] — /, '')}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {/* Distinct note for Category C */}
                    {cat.id === 'wallet-access' ? (
                      <div className="mb-5 p-3 rounded-sm bg-primary/5 border border-primary/20 text-[11px] text-[#F5F0E7]/80 leading-relaxed">
                        <strong className="text-primary block mb-0.5">Critical Distinction:</strong>
                        Lost wallet access is fundamentally different from stolen funds. Cryptographic keys cannot be brute-forced without partial seed/password hints.
                      </div>
                    ) : null}

                    {/* Services in this category */}
                    <div className="space-y-2 mb-6 flex-grow">
                      <p className="text-[9px] uppercase font-bold tracking-widest text-primary/80">Covered Incident Types</p>
                      {cat.services.map((srv) => (
                        <Link 
                          key={srv.slug} 
                          href={`/services/${srv.slug}`}
                          className="flex items-center justify-between p-2 rounded-sm bg-white/[0.02] border border-white/[0.04] text-xs text-[#F5F0E7]/85 hover:text-primary hover:border-primary/30 transition-all group/item"
                        >
                          <span className="truncate">{srv.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>

                    {/* High Visibility CTAs */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                      <Link href="#case-assessment" className="block">
                        <Button className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs rounded-sm shadow-md shadow-primary/20 transition-all">
                          Start Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={`/services#${cat.id}`} className="block">
                        <Button variant="outline" className="w-full h-10 border-white/10 hover:border-primary/40 text-xs font-semibold uppercase tracking-wider rounded-sm text-[#F5F0E7] transition-all">
                          View {cat.badge} Directory →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            /* When a specific category is filtered: Show individual service cards */
            <div className="space-y-12 max-w-6xl mx-auto mb-14">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-6">
                  <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] block mb-1">
                        {category.badge}
                      </span>
                      <h3 className="text-2xl font-headline font-semibold text-[#F5F0E7]">
                        {category.title.replace(/^Category [ABC] — /, '')}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-2xl leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <Link 
                      href={`/services#${category.id}`}
                      className="text-xs font-bold text-primary hover:underline uppercase tracking-wider shrink-0 flex items-center gap-1"
                    >
                      All Services Directory →
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {category.services.map((srv, idx) => (
                      <SectionReveal key={srv.slug} delay={idx * 60} className="h-full">
                        <div className="p-6 rounded-sm bg-card border border-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col h-full group relative shadow-lg">
                          <h4 className="text-base font-headline font-semibold mb-2 text-[#F5F0E7] group-hover:text-primary transition-colors">
                            {srv.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-grow">
                            {srv.subtitle}
                          </p>

                          <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                            <Link href="#case-assessment" className="block">
                              <Button className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs rounded-sm shadow-md transition-all">
                                Request Assessment
                              </Button>
                            </Link>
                            <Link href={`/services/${srv.slug}`} className="block">
                              <Button variant="outline" size="sm" className="w-full h-9 border-white/10 hover:border-primary/40 text-[11px] font-semibold uppercase tracking-wider rounded-sm text-[#F5F0E7]">
                                Dedicated Guide <ArrowRight className="ml-1.5 w-3 h-3" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </SectionReveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section-Wide Prominent CTA Banner */}
          <SectionReveal className="max-w-4xl mx-auto p-8 md:p-10 rounded-sm bg-[#16171A] border border-primary/25 shadow-xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.25em] uppercase">
              Confidential Case Review
            </div>
            <h3 className="text-2xl md:text-3xl font-headline font-semibold text-[#F5F0E7]">
              Unsure Which Recovery Specialisation Applies to You?
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Submit your incident parameters confidentially. Our fraud analysts review the transaction trail, identifying the correct recovery rail and outlining viable next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="#case-assessment">
                <Button size="lg" className="h-12 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-md shadow-primary/20 transition-all">
                  Request a Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-12 px-8 text-xs font-bold uppercase tracking-wider border-white/10 hover:border-primary/40 text-[#F5F0E7] rounded-sm transition-all">
                  Browse All 12 Services Directory
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 03: How It Works & Investigative Rigour (Consolidated Process & Approach) */}
      <section id="process" className="py-20 md:py-28 bg-card/20 relative overflow-hidden border-t border-white/[0.06]">
        <div id="approach" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Defensible Methodology
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-4 tracking-tight text-[#F5F0E7]">
              How Our Scam Assessment & Investigation Works
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              A transparent, 4-stage forensic evaluation designed to produce verifiable evidence without false promises or upfront recovery claims.
            </p>
          </SectionReveal>

          {/* 4 Unified Stages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
            {[
              {
                step: "01",
                title: "Confidential Intake & Evidence Preservation",
                desc: "Submit your incident details confidentially. We securely timestamp transaction hashes (TXIDs), bank wire confirmations, server headers, and perpetrator communications to ISO/IEC 27037 digital evidence standards.",
                highlight: "AES-256 Protected & Confidential",
                icon: FileText
              },
              {
                step: "02",
                title: "Forensic Tracing & Cross-Rail Audit",
                desc: "Our analysts perform on-chain traversal unmasking multi-hop mixers and cross-chain bridges, as well as banking rail audits to identify acquiring institutions and beneficiary accounts.",
                highlight: "Exchange & Bank Node Tracing",
                icon: Search
              },
              {
                step: "03",
                title: "Objective Feasibility & Legal Appraisal",
                desc: "We verify whether stolen assets have touched KYC-regulated centralized exchanges or domestic receiving banks where formal freeze requests or recovery claims are technically viable.",
                highlight: "Zero False Promises",
                icon: Network
              },
              {
                step: "04",
                title: "Actionable Evidentiary Dossier & Liaison",
                desc: "We synthesize the digital evidence into a court-admissible forensic report and assist with formal liaison to bank fraud departments, exchange compliance teams, legal counsel, or law enforcement.",
                highlight: "Court-Ready Forensic Dossier",
                icon: ShieldCheck
              }
            ].map((st, idx) => (
              <SectionReveal key={idx} delay={idx * 80} className="h-full">
                <div className="p-7 rounded-sm bg-card border border-white/[0.08] hover:border-primary/40 transition-colors h-full flex flex-col relative group shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-headline font-bold text-primary">{st.step}</span>
                    <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <st.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-headline font-semibold text-[#F5F0E7] mb-2">{st.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">{st.desc}</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider pt-3 border-t border-white/[0.06]">{st.highlight}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Prominent CTA for Process section */}
          <SectionReveal className="max-w-3xl mx-auto p-8 rounded-sm bg-[#121316] border border-white/[0.08] text-center space-y-4 shadow-xl">
            <h3 className="text-xl md:text-2xl font-headline font-semibold text-[#F5F0E7]">
              Ready to Put This Investigative Rigour to Work?
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Submit your incident parameters for a private, pressure-free feasibility evaluation. We examine the transaction trail with zero false promises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="#case-assessment">
                <Button size="lg" className="h-12 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-md shadow-primary/20 transition-all">
                  Request a Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="mailto:investigator@restitutecore.com">
                <Button size="lg" variant="outline" className="h-12 px-8 text-xs font-bold uppercase tracking-wider border-white/10 hover:border-primary/40 rounded-sm text-[#F5F0E7] transition-all">
                  <Mail className="mr-2 w-4 h-4" /> Email An Investigator
                </Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 04: Why RESTITUTECORE & Verified Track Record */}
      <section id="why-us" className="py-20 md:py-28 bg-background relative overflow-hidden border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Credibility & Standards
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-4 tracking-tight text-[#F5F0E7]">
              Why RESTITUTECORE & What to Expect
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              In an industry plagued by false promises and secondary recovery scammers, we stand apart through corporate registration, verifiable evidence, and zero false guarantees.
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
                <div className="p-7 rounded-sm bg-card border border-white/[0.08] h-full flex flex-col hover:border-primary/40 transition-colors shadow-lg">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-headline font-semibold text-[#F5F0E7] mb-1">{pillar.title}</h3>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-primary mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Verified Case Records (Integrated seamlessly) */}
          <div className="max-w-6xl mx-auto">
            <SuccessStories hideWrapper={true} />
          </div>
        </div>
      </section>

      {/* 05: Scam Recovery Resources & FAQs */}
      <section id="faq" className="py-20 md:py-28 bg-card/20 relative overflow-hidden border-t border-white/[0.06]">
        <div id="resources" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Consumer Support & Knowledge
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-4 tracking-tight text-[#F5F0E7]">
              Scam Recovery Resources & Guidance
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Practical guides and essential fraud education to help you take immediate, protective action and avoid secondary recovery scams.
            </p>
          </SectionReveal>

          {/* 3 Useful Action Guides with Visible CTAs */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {EDUCATIONAL_RESOURCES.map((res, rIdx) => (
              <SectionReveal key={rIdx} delay={rIdx * 100} className="h-full">
                <div className="p-7 rounded-sm bg-card border border-white/[0.08] h-full flex flex-col group hover:border-primary/40 transition-colors shadow-lg">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-primary tracking-widest mb-4">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>{res.category}</span>
                  </div>
                  <h3 className="text-base font-headline font-semibold text-[#F5F0E7] mb-3 group-hover:text-primary transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {res.summary}
                  </p>
                  <Link href={res.url} className="block mt-auto">
                    <Button variant="outline" size="sm" className="w-full border-white/10 hover:border-primary/40 text-[11px] font-bold uppercase tracking-wider text-primary rounded-sm">
                      {res.actionText} →
                    </Button>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* FAQ Accordion (Integrated cleanly) */}
          <FAQSection hideWrapper={true} />
        </div>
      </section>

      {/* 06: Confidential Case Assessment Intake Form */}
      <AIGuidedTool />

      <Footer />
    </main>
  );
}