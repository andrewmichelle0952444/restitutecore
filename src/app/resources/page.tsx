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
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Landmark, 
  Database, 
  Lock, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scam Recovery Resources & Educational Guides | Restiturecore',
  description: 'Evidence preservation checklists, bank transfer recall guides, and secondary recovery scam warnings from Restiturecore fraud investigators.',
  alternates: {
    canonical: 'https://restiturecore.com/resources',
  },
  openGraph: {
    title: 'Scam Recovery Resources & Guides | Restiturecore',
    description: 'Evidence preservation checklists, bank transfer recall guides, and secondary recovery scam warnings.',
    url: 'https://restiturecore.com/resources',
    siteName: 'Restiturecore',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 border-b border-white/[0.06] bg-gradient-to-b from-card/60 to-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-6 tracking-[0.25em] uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            Educational Guides & Evidence Frameworks
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-6 uppercase tracking-tight">
            Scam Recovery Resources
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Clear, practical intelligence on evidence preservation, banking recall procedures, and protecting yourself against secondary recovery fraud.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary" /> Factual Knowledge</span>
            <span className="opacity-30">•</span>
            <span>No Unrealistic Guarantees</span>
            <span className="opacity-30">•</span>
            <span>Direct Service Navigation</span>
          </div>
        </div>
      </section>

      {/* Guide Content Sections */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 space-y-24 max-w-5xl">
          
          {/* Guide 1: Bank Transfer Scams */}
          <article id="bank-transfer-scams" className="scroll-mt-28 p-8 md:p-12 rounded-lg bg-card/60 border border-white/[0.08] space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Landmark className="w-4 h-4" />
              Action Guide 01
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-tight mb-3">
                What to Do After a Bank Transfer Scam (APP Fraud)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In Authorized Push Payment (APP) fraud, speed is critical. While banks may initially claim transfers are non-refundable because you authorized them, regulatory frameworks impose strict duties of care on both sending and receiving institutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                Immediate Protective Actions:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">1. Contact Your Bank Immediately</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Request an urgent recall of the payment and ask for your report to be escalated to their specialist Fraud & Financial Crime Unit.
                  </p>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">2. Contact the Beneficiary Bank</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Notify the receiving institution that their account has received fraudulent proceeds so they can freeze remaining balances.
                  </p>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">3. Log a National Police Report</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Obtain a formal crime reference number from your national reporting agency (e.g., Action Fraud in the UK or FBI IC3 in the US).
                  </p>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">4. Preserve All Warning Screens</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Document any Confirmation of Payee prompts, phone call timestamps, and spoofed caller ID records.
                  </p>
                </div>
              </div>
            </div>

            {/* Cross-Link to Specific Service */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Need Formal Banking Dispute Assistance?</p>
                <p className="text-xs text-muted-foreground">Our investigators audit receiving bank AML failures and draft regulatory ombudsman submissions.</p>
              </div>
              <Link href="/services/bank-transfer-and-app-scam-recovery">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xs uppercase tracking-wider h-10 px-5 rounded-sm">
                  Explore Bank Transfer & APP Scam Recovery
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </article>

          {/* Guide 2: Documenting Crypto Scams */}
          <article id="documenting-crypto-scams" className="scroll-mt-28 p-8 md:p-12 rounded-lg bg-card/60 border border-white/[0.08] space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Database className="w-4 h-4" />
              Evidence Guide 02
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-tight mb-3">
                How to Correctly Document a Crypto Scam for Investigation
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Decentralized blockchain ledgers are transparent, but on-chain tracing requires precise technical inputs. Before platform websites are taken offline or chat channels deleted, preserving clean cryptographic evidence is vital.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                The 4 Essential Evidence Components:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">1. Outgoing Transaction Hashes (TXIDs)</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Extract the full 64-character transaction hash for every transfer from your personal wallet or exchange account.
                  </p>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">2. Exact Receiving Wallet Addresses</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Copy the complete public deposit address provided by the fraudulent entity, along with the specific network (e.g., TRC-20, ERC-20, Solana).
                  </p>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">3. Smart Contract Interactions</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    For phishing or staking drains, document the contract address and function approved (e.g., Permit, setApprovalForAll).
                  </p>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <p className="text-xs font-bold text-white">4. Full Chat & Communication Archives</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Export unedited chat logs (Telegram, WhatsApp) and full email headers before accounts are deleted or conversations cleared.
                  </p>
                </div>
              </div>
            </div>

            {/* Cross-Link to Specific Specialist Services */}
            <div className="pt-6 border-t border-white/[0.06] space-y-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Relevant Specialist Investigation Desks:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/crypto-scam-recovery">
                  <Button variant="outline" size="sm" className="border-white/10 text-xs font-bold uppercase tracking-wider hover:border-primary/40">
                    Explore Parent Crypto Scam Recovery →
                  </Button>
                </Link>
                <Link href="/services/crypto-investment-scam-recovery">
                  <Button variant="outline" size="sm" className="border-white/10 text-xs font-bold uppercase tracking-wider hover:border-primary/40">
                    Explore Crypto Investment Scam Recovery →
                  </Button>
                </Link>
                <Link href="/services/pig-butchering-crypto-scam-recovery">
                  <Button variant="outline" size="sm" className="border-white/10 text-xs font-bold uppercase tracking-wider hover:border-primary/40">
                    Explore Pig Butchering Crypto Scam Recovery →
                  </Button>
                </Link>
              </div>
            </div>
          </article>

          {/* Guide 3: Secondary Recovery Scams */}
          <article id="secondary-recovery-scams" className="scroll-mt-28 p-8 md:p-12 rounded-lg bg-card/60 border border-amber-500/20 space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              Protection Guide 03
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-tight mb-3">
                Warning Signs of a Secondary Recovery Scam
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fraud victims are frequently targeted a second time by criminal networks operating fake "asset recovery" services. Recognizing these deception tactics protects you from compounding your financial losses.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                Red Flags of a Secondary Recovery Operation:
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5">Promises of Guaranteed or Instant Recovery</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Legitimate investigators cannot guarantee outcomes. Any agent promising a 100% success rate or recovery within 24 hours is running a fraudulent operation.
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5">Claims of "Hacking Back" or Reversing Blockchains</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Blockchains are mathematically immutable. No investigator can "hack" a blockchain or reverse a confirmed transaction.
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5">Demands for Advance "Release Taxes" or Liquidity Fees</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Scammers claim your money has been found in a "recovery wallet" but require an upfront payment to release the funds. Never send additional money.
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.05] flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5">Unsolicited Contact via Social Media (Telegram, Instagram, X)</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Legitimate forensic firms do not solicit victims in social media comment sections, Reddit threads, or private Telegram messages.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-Link to Assessment */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Want an Honest, Verifiable Case Evaluation?</p>
                <p className="text-xs text-muted-foreground">Restiturecore operates with transparent evidence scoping and zero false guarantees.</p>
              </div>
              <Link href="/#case-assessment">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xs uppercase tracking-wider h-10 px-5 rounded-sm">
                  Request a Case Assessment
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </article>

        </div>
      </section>

      <Footer />
    </main>
  );
}
