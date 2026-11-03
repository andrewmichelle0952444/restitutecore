'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Mail } from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { supabase } from '@/lib/supabase';
import { useBrandAsset } from '@/lib/brand-assets';

export function Hero() {
  const { url: bgUrl, handleImageError } = useBrandAsset('hero-bg.png');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient border-b border-white/5 min-h-[80vh] flex items-center">
      {/* Dynamic Background Image */}
      {bgUrl && (
        <div className="absolute inset-0 z-0 opacity-40 grayscale pointer-events-none">
          <Image 
            src={bgUrl} 
            alt="Hero Background" 
            fill 
            className="object-cover"
            priority
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background" />
        </div>
      )}

      {/* Living Intelligence Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="opacity-20 md:opacity-40">
          <defs>
            <pattern id="intelligence-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="0.4" fill="rgba(212, 175, 55, 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intelligence-grid)" />
          <path d="M 0 150 Q 300 100 600 400 T 1200 650" className="network-line" />
          <path d="M 1200 200 Q 900 350 600 400 T 0 600" className="network-line" style={{ animationDelay: '-10s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal delay={100} duration={600} threshold={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-[11px] font-bold mb-6 tracking-[0.25em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Scam Recovery & Financial Fraud Assistance
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-semibold leading-[1.08] mb-6 tracking-tight text-[#F5F0E7] text-balance">
              Lost Money to a Scam? <br className="hidden sm:block"/>
              <span className="gradient-text italic font-normal">Understand Your Options.</span>
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-normal px-4 md:px-0 text-balance">
              RESTITUTECORE provides scam recovery assistance, fraud investigation, and digital asset tracing to help individuals and businesses assess their options after financial fraud.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="#case-assessment" className="w-full sm:w-auto">
                <Button size="lg" className="h-13 md:h-14 px-8 md:px-9 text-xs md:text-sm bg-primary text-primary-foreground hover:bg-primary/90 font-bold w-full shadow-lg shadow-black/40 group uppercase tracking-wider rounded-sm transition-all duration-300">
                  Request a Case Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-13 md:h-14 px-8 md:px-9 text-xs md:text-sm border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-primary/40 text-[#F5F0E7] w-full font-semibold uppercase tracking-wider rounded-sm transition-all">
                  Explore Recovery Services
                </Button>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground font-medium mb-10 tracking-wide">
              A confidential initial enquiry. Clear next steps. <span className="text-[#F5F0E7]/80">No guaranteed recovery claims.</span>
            </p>

            <div className="pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="text-left md:text-center space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#F5F0E7]/90">Objective Assessment</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Honest Feasibility Review</p>
              </div>
              <div className="text-left md:text-center space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#F5F0E7]/90">Evidence Led</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">On-Chain & Rail Tracing</p>
              </div>
              <div className="text-left md:text-center space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#F5F0E7]/90">No Pressure</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Zero False Promises</p>
              </div>
              <div className="text-left md:text-center space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#F5F0E7]/90">Strict Privacy</p>
                <p className="text-[9px] uppercase tracking-wider text-muted-foreground">AES-256 Vault Quarantine</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-primary/[0.03] rounded-full blur-[120px] md:blur-[180px] -z-10" />
    </section>
  );
}
