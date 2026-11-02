import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, Search, FileText, Database } from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';

const phases = [
  {
    number: "01",
    phase: "Phase 01",
    title: "Intake & Evidence Quarantine",
    description: "Initial cryptographic ingestion and ISO/IEC 27037 compliant preservation of volatile ledger hashes, transaction timestamps, server metadata, and communications.",
    icon: FileText,
    deliverables: ["Cryptographic Hash Validation", "Chain of Custody Timestamping", "Immutable Vault Quarantine"]
  },
  {
    number: "02",
    phase: "Phase 02",
    title: "On-Chain Cluster & Liquidity Mapping",
    description: "Multi-hop graph traversal, cross-chain bridge demixing, and heuristic clustering to unmask intermediary wallets and trace funds to custodial off-ramps.",
    icon: Search,
    deliverables: ["Mixer & Bridge Demixing", "Cluster Taint Attribution", "Exchange Deposit Identification"]
  },
  {
    number: "03",
    phase: "Phase 03",
    title: "Evidentiary Dossier & Subpoena Compilation",
    description: "Synthesis of forensic tracing data into court-admissible technical dossiers, structured specifically for litigation counsel, regulators, and judicial authorities.",
    icon: Database,
    deliverables: ["Court-Admissible Affidavits", "Jurisdictional Nexus Mapping", "Subpoena-Ready Deliverables"]
  },
  {
    number: "04",
    phase: "Phase 04",
    title: "Institutional Intercession & Recovery Facilitation",
    description: "Formal emergency freeze notices transmitted to target exchanges, coordination with compliance receivers, and targeted execution of legal recovery pathways.",
    icon: Shield,
    deliverables: ["Exchange Freeze Petitions", "Receiver & Law Enforcement Liaison", "Asset Restitution Pathways"]
  }
];

export function ProcessSection() {
  return (
    <section id="methodology" className="py-24 md:py-32 bg-card/20 relative overflow-hidden border-t border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
              Evidentiary Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-6 tracking-tight text-[#F5F0E7]">
              The 4-Phase Defensible Methodology
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
              Every engagement adheres to standardized digital forensic protocols designed to withstand legal scrutiny and deliver measurable recovery outcomes.
            </p>
          </SectionReveal>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 relative">
          {phases.map((item, idx) => (
            <SectionReveal 
              key={idx} 
              delay={idx * 100} 
              className="p-8 md:p-10 rounded-sm bg-card border border-white/[0.07] hover:border-primary/40 transition-all duration-300 relative group"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start items-start gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl md:text-3xl font-headline font-bold text-primary/90">{item.number}</span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C8B68B] px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {item.phase}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-sm bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-primary mt-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <h3 className="text-xl md:text-2xl font-headline font-semibold mb-3 text-[#F5F0E7] group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="p-4 md:p-5 rounded-sm bg-[#121316] border border-white/[0.05] space-y-2.5">
                    <p className="text-[9px] uppercase tracking-widest text-[#F5F0E7]/60 font-semibold mb-2">Core Deliverables</p>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#F5F0E7]/85 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SectionReveal>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Link href="#forensic-intake">
                <Button size="lg" className="h-13 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm transition-all shadow-md">
                  Initialize Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="mailto:investigator@restiturecore.com" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-semibold">
                Or transmit documentation via encrypted email →
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
