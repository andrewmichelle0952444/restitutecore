'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  ShieldCheck, 
  Building, 
  Loader2,
  Lock
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DIVISIONS = [
  "Investment Scam Recovery",
  "Crypto Scam Recovery",
  "Bank Transfer & APP Scam Recovery",
  "Romance & Impersonation Scam Recovery",
  "Crypto Investment Scam Recovery",
  "Fake Crypto Exchange Scam Recovery",
  "Phishing & Credential Compromise Recovery",
  "Pump-and-Dump & Market Manipulation",
  "Pig-Butchering Scam Recovery",
  "Unauthorized Wallet Drainer Recovery",
  "Advance-Fee & Fake Loan Scam Recovery"
];

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        variant: 'destructive',
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }
    
    setLoading(true);

    try {
      const generatedId = `RST-${Math.floor(10000 + Math.random() * 90000)}`;
      
      const payload = {
        case_id: generatedId,
        case_type: formData.service,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_country: formData.country,
        description: formData.message,
        status: 'Review Pending',
        risk_level: 'Initial Inquiry',
        evidence_integrity: 'Pending Review',
        form_values: { source: 'Contact Portal' }
      };

      const { error } = await supabase
        .from('cases')
        .insert([payload]);

      if (error) throw error;

      toast({
        title: "Assessment Request Submitted",
        description: `Case Reference ${generatedId}. An investigator will review your file within 24 hours.`,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        country: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: "Transmission Failed",
        description: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative pt-32 pb-20 border-b border-white/5 bg-card/30 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-8 tracking-[0.3em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Confidential Enquiry Portal
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tight uppercase leading-tight">
              A Clearer Path <br />
              <span className="gradient-text italic font-medium gold-glow">After Financial Fraud.</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Specialist scam recovery assistance, financial fraud investigations, and digital asset tracing. Tell us what happened to understand your realistic options.
            </p>
            <p className="mt-4 text-xs font-semibold text-primary/80 uppercase tracking-widest">
              A confidential initial enquiry. Clear next steps. No guaranteed recovery claims.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            <div className="lg:col-span-2 space-y-8">
              <SectionReveal>
                <h2 className="text-2xl font-headline font-bold mb-6 uppercase tracking-tight">Direct Enquiries</h2>
                <div className="space-y-6">
                  <Card className="glass-card border-white/5 p-8 hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Direct Case Officer</p>
                        <p className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors break-all">investigator@restiturecore.com</p>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                          For urgent case briefs, forensic attachments, or direct correspondence.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <div className="p-6 rounded-lg bg-card/60 border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                      <Lock className="w-3.5 h-3.5" />
                      Strict Confidentiality
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All case submissions are encrypted and reviewed under standard nondisclosure protocols. We will never ask for your private recovery seed phrase or exchange login passwords.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { city: "Zurich", region: "Europe Hub", icon: Building },
                      { city: "London", region: "UK Hub", icon: Building },
                      { city: "Singapore", region: "Asia Hub", icon: Building }
                    ].map((hub, idx) => (
                      <Card key={idx} className="glass-card border-white/5 p-5 hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-4">
                          <hub.icon className="w-4 h-4 text-muted-foreground opacity-50" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-tight text-white">{hub.city}</p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{hub.region}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-3">
              <SectionReveal delay={200}>
                <Card className="glass-card border-white/10 overflow-hidden rounded-lg p-8 md:p-10">
                  <h3 className="text-xl font-headline font-bold uppercase tracking-tight mb-2">Case Assessment Intake</h3>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                    Provide preliminary details regarding the transaction, platform, or individual involved. We will evaluate whether viable recovery or investigative channels exist.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Input 
                        placeholder="Your Full Name *" 
                        className="bg-white/5 border-white/10 rounded-sm h-12 text-sm placeholder:text-muted-foreground/50" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Input 
                        type="email" 
                        placeholder="Your Email Address *" 
                        className="bg-white/5 border-white/10 rounded-sm h-12 text-sm placeholder:text-muted-foreground/50" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Input 
                        type="tel" 
                        placeholder="Your Contact Phone (Optional)" 
                        className="bg-white/5 border-white/10 rounded-sm h-12 text-sm placeholder:text-muted-foreground/50" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Select 
                        value={formData.service} 
                        onValueChange={(val) => setFormData({...formData, service: val})}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 rounded-sm h-12 text-sm text-foreground">
                          <SelectValue placeholder="Select Scam Type *" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-white/10">
                          {DIVISIONS.map((service) => (
                            <SelectItem key={service} value={service} className="text-xs font-semibold py-2.5">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Input 
                        placeholder="Your Country of Residence" 
                        className="bg-white/5 border-white/10 rounded-sm h-12 text-sm placeholder:text-muted-foreground/50" 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Textarea 
                        placeholder="Describe the incident: Date, approximate amount lost, platform or exchange names, and current situation *" 
                        className="min-h-[140px] bg-white/5 border-white/10 rounded-sm text-sm placeholder:text-muted-foreground/50 leading-relaxed" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <Button 
                        disabled={loading} 
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 rounded-sm transition-all w-full md:w-auto"
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Transmitting...
                          </div>
                        ) : 'Request a Case Assessment'}
                      </Button>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-primary" />
                        <span>256-Bit Encrypted Transmission</span>
                      </div>
                      <span>No Upfront Promises</span>
                    </div>
                  </form>
                </Card>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
