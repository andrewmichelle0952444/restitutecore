"use client"

import { useState } from 'react'
import { aiGuidedRecoveryPreparation } from '@/ai/flows/ai-guided-recovery-preparation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import { 
  Loader2, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Shield,
  Mail,
  ChevronRight,
  MapPin
} from 'lucide-react'
import { SectionReveal } from '@/components/ui/section-reveal'

export function AIGuidedTool() {
  const [step, setStep] = useState<'form' | 'result'>('form')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [caseId, setCaseId] = useState('')

  const [bookingValues, setBookingValues] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  })
  
  const { toast } = useToast()

  const handleFinalSubmit = async () => {
    if (!bookingValues.email || !bookingValues.name || !description) {
      toast({ variant: 'destructive', title: "Missing Data", description: "Please complete all required fields." })
      return
    }
    
    setLoading(true)
    const generatedId = `RST-${Math.floor(10000 + Math.random() * 90000)}`
    setCaseId(generatedId)

    try {
      const promptText = `
NAME: ${bookingValues.name}
EMAIL: ${bookingValues.email}
PHONE: ${bookingValues.phone}
COUNTRY: ${bookingValues.country}
NARRATIVE: ${description}
      `.trim()

      const { data, error: insertError } = await supabase.from('cases').insert([{
        case_id: generatedId,
        case_type: 'Scam Assessment Intake',
        user_name: bookingValues.name,
        user_email: bookingValues.email,
        user_phone: bookingValues.phone,
        user_country: bookingValues.country,
        description: description,
        status: 'Review Pending',
        risk_level: 'Initial Intake'
      }]).select();

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        throw new Error(insertError.message || "Failed to register case in Supabase database");
      }

      // Background AI evaluation
      aiGuidedRecoveryPreparation({ initialProblemDescription: promptText }).then(async (aiOutput) => {
         const { error: updateError } = await supabase
           .from('cases')
           .update({ result_data: aiOutput })
           .eq('case_id', generatedId);
         if (updateError) {
           console.warn("AI result update warning:", updateError.message);
         }
      }).catch(err => console.error("Background AI processing error:", err));

      setStep('result')
      toast({
        title: "Assessment Successfully Registered",
        description: `Case Reference ${generatedId} has been synced with the database.`
      });
    } catch (error: any) {
      console.error("Submission failed:", error);
      toast({ 
        variant: 'destructive', 
        title: "Submission Error", 
        description: error.message || "An error occurred while registering the case." 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="case-assessment" className="py-20 md:py-28 bg-card/25 border-y border-white/[0.06] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {step === 'form' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-4 tracking-[0.25em] uppercase">
                <Shield className="w-3.5 h-3.5 text-primary" />
                Confidential Case Review
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-semibold mb-4 tracking-tight text-[#F5F0E7]">
                Request a Case Assessment
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Provide the details of the financial or crypto scam you experienced. Our analysts examine the transaction trail and outline actionable options without pressure.
              </p>
            </div>

            <Card className="glass-card border-white/10 p-8 md:p-12 max-w-3xl mx-auto overflow-hidden">
              <div className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name*</Label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/50 border-white/10 rounded-sm h-12 md:h-14"
                      value={bookingValues.name}
                      onChange={e => setBookingValues({...bookingValues, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address*</Label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background/50 border-white/10 rounded-sm h-12 md:h-14"
                      value={bookingValues.email}
                      onChange={e => setBookingValues({...bookingValues, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                    <Input 
                      placeholder="+1..." 
                      className="bg-background/50 border-white/10 rounded-sm h-12 md:h-14"
                      value={bookingValues.phone}
                      onChange={e => setBookingValues({...bookingValues, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Country</Label>
                    <Input 
                      placeholder="Your Country" 
                      className="bg-background/50 border-white/10 rounded-sm h-12 md:h-14"
                      value={bookingValues.country}
                      onChange={e => setBookingValues({...bookingValues, country: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Narrative (What happened?)*</Label>
                  <Textarea 
                    placeholder="Briefly describe what happened (dates, platforms, amounts, transaction IDs) so our team can review your case."
                    className="min-h-[140px] bg-background/50 border-white/10 rounded-sm"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

                {/* Visible Primary CTA Button */}
                <div className="pt-4 space-y-4">
                  <Button 
                    onClick={handleFinalSubmit} 
                    disabled={loading}
                    className="w-full h-13 md:h-14 text-xs md:text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-lg shadow-primary/20 transition-all"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="text-xs">Analyzing Incident Parameters...</span>
                      </div>
                    ) : (
                      <>Submit Case for Confidential Review <ArrowRight className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 mt-6 rounded-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Senior Analyst Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-muted-foreground opacity-40" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">AES-256 Vault Protocol</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Email & Postal Correspondence Card */}
            <SectionReveal delay={200} className="mt-12 text-center">
              <div className="max-w-2xl mx-auto p-7 md:p-9 border border-white/10 bg-[#121316] rounded-sm space-y-5 shadow-lg">
                <h3 className="text-lg md:text-xl font-headline font-semibold text-[#F5F0E7]">Prefer to contact us directly?</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  If you already have documentation or wish to correspond with our senior analysts directly, transmit your details via email or official postal mail.
                </p>
                <div className="pt-2">
                  <a 
                    href="mailto:investigator@restitutecore.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-primary/30 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-md shadow-primary/10"
                  >
                    <Mail className="w-4 h-4" /> investigator@restitutecore.com <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="pt-4 border-t border-white/5 text-xs text-muted-foreground leading-relaxed">
                  <span className="text-primary font-bold uppercase tracking-wider text-[10px] block mb-1">Official Postal Address</span>
                  Emke Vingerhoets • Mahoniestraat 88, 1339 EX Almere, Netherlands
                </div>
              </div>
            </SectionReveal>
          </div>
        )}

        {step === 'result' && (
          <div className="animate-in fade-in zoom-in-95 duration-700 text-center py-20">
            <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter mb-4 text-[#F5F0E7]">Intake Received</h2>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">Reference ID: {caseId}</p>
            <div className="max-w-md mx-auto p-8 bg-card border border-white/10 space-y-4 rounded-sm">
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                Your structured intake has been securely logged. A human recovery specialist is reviewing your case narrative and will reach out via email shortly.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3 opacity-40">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Case Protected Under Confidentiality Protocol</span>
              </div>
            </div>
            <Button variant="outline" className="mt-12 h-12 px-8 border-white/10 text-xs font-bold uppercase tracking-widest text-[#F5F0E7]" onClick={() => setStep('form')}>Return Home</Button>
          </div>
        )}
      </div>
    </section>
  )
}