import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Search, Wallet, AlertCircle, FileText, ArrowRight } from 'lucide-react';

const knowledgeCategories = [
  {
    title: "Realistic Recovery Expectations",
    icon: AlertCircle,
    questions: [
      {
        question: "Can money lost to a scam always be recovered?",
        answer: "No legitimate investigator can guarantee fund recovery. Feasibility depends entirely on whether the digital asset trail leads to regulated, identifiable institutions (such as KYC-compliant crypto exchanges or domestic receiving banks) where legal or compliance interdiction is possible. Our role is to provide an objective evidence assessment so you understand your real options before committing resources."
      },
      {
        question: "What is a 'secondary recovery scam' and how do I avoid it?",
        answer: "Secondary recovery scammers target victims of fraud, falsely claiming they can 'hack back' stolen crypto or demanding upfront 'clearance fees' and 'recovery taxes'. RESTITUTECORE never makes guarantee claims, never claims to hack blockchains, and operates as a legally registered corporate entity providing verifiable investigative documentation."
      }
    ]
  },
  {
    title: "Fees & Timelines",
    icon: Search,
    questions: [
      {
        question: "How does RESTITUTECORE charge for services?",
        answer: "Our initial case assessment and preliminary feasibility review are confidential. If the preliminary findings indicate that a viable recovery or legal pathway exists, any further forensic analysis or formal evidentiary reporting is conducted under a transparent, agreed-upon scope without hidden fees."
      },
      {
        question: "How long does an investigation typically take?",
        answer: "Initial feasibility reviews are completed within 24–48 hours. A full on-chain trace or banking rail audit generally spans 1 to 3 weeks, depending on the complexity of transaction layering, cross-chain bridge usage, and multi-jurisdictional receiving nodes."
      }
    ]
  },
  {
    title: "Evidence & Privacy Protocols",
    icon: ShieldCheck,
    questions: [
      {
        question: "What documentation is required to begin?",
        answer: "Key documentation includes transaction hashes (TXIDs), receiving wallet addresses, deposit receipts, bank transfer confirmation slips, broker domain URLs, and chat/email transcripts with the suspected entity."
      },
      {
        question: "Does RESTITUTECORE provide legal advice or law enforcement services?",
        answer: "No. RESTITUTECORE provides specialist digital forensic investigation, on-chain asset tracing, and court-admissible technical dossiers. We prepare evidence suitable for submission to banks, exchange compliance teams, law enforcement agencies, or your legal counsel."
      }
    ]
  }
];

export function FAQSection({ hideWrapper = false }: { hideWrapper?: boolean } = {}) {
  const content = (
    <>
      <SectionReveal className="text-center mb-16">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-3">Investigative Resources</h2>
        <h3 className="text-3xl md:text-5xl font-headline font-semibold mb-4 text-[#F5F0E7] tracking-tight">Recovery Knowledge Base</h3>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
          Transparent answers to common questions regarding technical methodologies, feasibility, and digital asset investigation standards.
        </p>
      </SectionReveal>
      
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {knowledgeCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                <category.icon className="w-4 h-4 text-primary" />
              </div>
              <h4 className="text-lg font-headline font-semibold text-[#F5F0E7]">{category.title}</h4>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-3">
              {category.questions.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${catIdx}-${idx}`} className="border-white/10 bg-card/60 px-5 rounded-sm">
                  <AccordionTrigger className="text-left text-xs md:text-sm font-semibold py-4 hover:no-underline hover:text-primary transition-colors tracking-wide text-[#F5F0E7]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 text-center">
         <p className="text-[11px] font-semibold text-muted-foreground flex items-center justify-center gap-2">
           <FileText className="w-3.5 h-3.5 text-primary" /> Formal evidentiary dossiers and recovery packages are prepared under custom agreed scopes.
         </p>
      </div>

      {/* CTA */}
      <SectionReveal className="mt-12 p-8 md:p-10 rounded-sm bg-card border border-primary/20 text-center space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.25em] uppercase">
          Start Your Confidential Review
        </div>
        <h3 className="text-2xl md:text-3xl font-headline font-semibold text-[#F5F0E7] tracking-tight">
          Have Questions About Your Specific Case?
        </h3>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Submit your case details for a private, obligation-free evaluation. Our forensic analysts will review the available evidence and outline whether a viable recovery pathway exists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/#case-assessment">
            <Button size="lg" className="h-12 px-8 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm transition-all shadow-md shadow-primary/20">
              Request a Case Assessment <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <a href="mailto:investigator@restitutecore.com">
            <Button size="lg" variant="outline" className="h-12 px-8 text-xs font-bold uppercase tracking-wider border-white/10 hover:border-primary/40 rounded-sm text-[#F5F0E7] transition-all">
              Email Our Team Directly
            </Button>
          </a>
        </div>
      </SectionReveal>
    </>
  );

  if (hideWrapper) {
    return (
      <div id="faq" className="max-w-5xl mx-auto relative z-10 pt-8">
        {content}
      </div>
    );
  }

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        {content}
      </div>
    </section>
  );
}
