import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  ArrowRight, 
  Landmark, 
  Database, 
  KeyRound, 
  AlertTriangle,
  Lock,
  ChevronRight
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Recovery Services Directory | Restitutecore',
  description: 'Explore scam recovery services for investment fraud, romance scams, bank transfers and cryptocurrency fraud across 3 specialist service families.',
  alternates: {
    canonical: 'https://Restitutecore.com/services',
  },
  openGraph: {
    title: 'Recovery Services Directory | Restitutecore',
    description: 'Explore scam recovery services for investment fraud, romance scams, bank transfers and cryptocurrency fraud across 3 specialist service families.',
    url: 'https://Restitutecore.com/services',
    siteName: 'Restitutecore',
    type: 'website',
  },
};

export default function ServicesDirectoryPage() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'financial-relationship':
        return <Landmark className="w-5 h-5 text-primary" />;
      case 'crypto-fraud':
        return <Database className="w-5 h-5 text-primary" />;
      case 'wallet-access':
        return <KeyRound className="w-5 h-5 text-primary" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 border-b border-white/[0.06] bg-gradient-to-b from-card/60 to-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-6 tracking-[0.25em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            Specialist Investigation Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 uppercase tracking-tight">
            Our Recovery Services
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Restitutecore provides specialized investigation and asset tracing across three distinct service families. Select the category matching your experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary" /> Confidential Assessments</span>
            <span className="opacity-30">•</span>
            <span>Evidence-Based Scope</span>
            <span className="opacity-30">•</span>
            <span className="text-primary/90">No Guaranteed Recovery Claims</span>
          </div>
        </div>
      </section>

      {/* The 3 Service Families */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 space-y-24 max-w-7xl">
          {SERVICE_CATEGORIES.map((category, catIdx) => (
            <div key={category.id} id={category.id} className="space-y-8 scroll-mt-28">
              {/* Category Header */}
              <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
                    {getCategoryIcon(category.id)}
                    {category.badge}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-tight">
                    {category.title.replace(/^Category [ABC] — /, '')}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-widest shrink-0">
                  {category.services.length} {category.services.length === 1 ? 'Specialist Service' : 'Specialist Services'}
                </div>
              </div>

              {/* Special Note for Category C */}
              {category.id === 'wallet-access' && (
                <div className="p-5 rounded-lg bg-card/60 border border-primary/20 text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white uppercase tracking-wider block mb-1">
                      Distinct Problem Definition: Lost Access vs. Stolen Assets
                    </span>
                    Wallet access recovery handles forgotten passwords, keystore repair, and partial seed phrase reconstruction for lawful owners. It is completely distinct from scam recovery. Cryptographic protections (e.g., AES-256) cannot be bypassed without valid hints or partial data.
                  </div>
                </div>
              )}

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Card 
                    key={service.slug}
                    className="glass-card border-white/[0.08] hover:border-primary/40 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between group rounded-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10">
                          {category.badge}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-headline font-bold text-white uppercase tracking-tight mb-2.5 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                        {service.subtitle}
                      </p>

                      <div className="space-y-2 border-t border-white/[0.06] pt-4 mb-6">
                        <p className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                          Key Focus Areas:
                        </p>
                        <ul className="space-y-1.5 text-xs text-muted-foreground/90">
                          {service.keyProblems.slice(0, 2).map((item, i) => (
                            <li key={i} className="line-clamp-1 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                      <Link href={`/services/${service.slug}`} className="w-full">
                        <Button 
                          variant="outline" 
                          className="w-full border-white/10 hover:border-primary/40 text-xs font-bold uppercase tracking-wider h-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        >
                          View Dedicated Service
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-card/40 border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight">
            Not Sure Which Category Fits Your Situation?
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Submit an initial summary of what occurred. Our case evaluation team will review the transaction history and direct your enquiry to the appropriate investigation desk.
          </p>
          <div className="pt-2">
            <Link href="/#case-assessment">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 rounded-sm text-xs uppercase tracking-wider shadow-lg">
                Request a Case Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
