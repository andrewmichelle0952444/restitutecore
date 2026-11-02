import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionReveal } from "@/components/ui/section-reveal";
import { ShieldCheck, Search, Wallet, AlertCircle, FileText } from 'lucide-react';

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
        answer: "Secondary recovery scammers target victims of fraud, falsely claiming they can 'hack back' stolen crypto or demanding upfront 'clearance fees' and 'recovery taxes'. Restiturecore never makes guarantee claims, never claims to hack blockchains, and operates as a legally registered corporate entity providing verifiable investigative documentation."
      }
    ]
  },
  {
    title: "Fees & Timelines",
    icon: Search,
    questions: [
      {
        question: "How does Restiturecore charge for services?",
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
        question: "Does Restiturecore provide legal advice or law enforcement services?",
        answer: "No. Restiturecore provides specialist digital forensic investigation, on-chain asset tracing, and court-admissible technical dossiers. We prepare evidence suitable for submission to banks, exchange compliance teams, law enforcement agencies, or your legal counsel."
      }
    ]
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionReveal className="text-center mb-20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Investigative Resources</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 uppercase tracking-tighter">Recovery Knowledge Base</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A specialized resource for understanding the technical methodologies behind digital asset investigation and recovery.
          </p>
        </SectionReveal>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {knowledgeCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-headline font-bold uppercase tracking-tight">{category.title}</h4>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.questions.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${catIdx}-${idx}`} className="border-white/5 bg-white/5 px-6 rounded-none">
                    <AccordionTrigger className="text-left text-sm font-bold py-6 hover:no-underline hover:text-primary transition-colors uppercase tracking-widest">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[11px] leading-relaxed pb-6 uppercase tracking-widest">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/5 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-center gap-2">
             <FileText className="w-3.5 h-3.5 text-primary" /> Formal investigative reports are provided upon completion of lifecycle Phase 04.
           </p>
        </div>
      </div>
    </section>
  );
}
